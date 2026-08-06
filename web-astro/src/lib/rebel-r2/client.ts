import {
  S3Client,
  ListObjectsV2Command,
  HeadObjectCommand,
  GetObjectCommand,
  type _Object,
  type HeadObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { assertR2Configured, LIMITS } from "./config";

let cachedClient: S3Client | null = null;
let cachedClientKey = "";

export function getR2Client(): S3Client {
  const cfg = assertR2Configured();
  const key = `${cfg.endpoint}|${cfg.bucket}|${cfg.credentials.accessKeyId}`;
  if (cachedClient && cachedClientKey === key) return cachedClient;
  cachedClient = new S3Client({
    region: "auto",
    endpoint: cfg.endpoint,
    credentials: cfg.credentials,
    forcePathStyle: true,
  });
  cachedClientKey = key;
  return cachedClient;
}

export function getBucket(): string {
  return assertR2Configured().bucket;
}

export function getPublicBaseUrl(): string {
  return assertR2Configured().publicBaseUrl;
}

export function publicUrlForKey(key: string): string | null {
  const base = getPublicBaseUrl();
  if (!base) return null;
  return `${base}/${key.split("/").map(encodeURIComponent).join("/")}`;
}

export async function listPrefixPage(opts: {
  prefix: string;
  cursor?: string | null;
  limit: number;
}): Promise<{
  objects: _Object[];
  nextCursor: string | null;
  isTruncated: boolean;
}> {
  const client = getR2Client();
  const res = await client.send(
    new ListObjectsV2Command({
      Bucket: getBucket(),
      Prefix: opts.prefix,
      ContinuationToken: opts.cursor || undefined,
      MaxKeys: Math.min(Math.max(opts.limit, 1), LIMITS.listMax),
    }),
  );
  return {
    objects: res.Contents ?? [],
    nextCursor: res.IsTruncated ? res.NextContinuationToken ?? null : null,
    isTruncated: Boolean(res.IsTruncated),
  };
}

export async function headObject(key: string): Promise<HeadObjectCommandOutput> {
  return getR2Client().send(
    new HeadObjectCommand({
      Bucket: getBucket(),
      Key: key,
    }),
  );
}

export async function getObjectBytes(key: string): Promise<{
  body: Uint8Array;
  contentType?: string;
  etag?: string;
  lastModified?: Date;
  metadata?: Record<string, string>;
  contentLength?: number;
}> {
  const res = await getR2Client().send(
    new GetObjectCommand({
      Bucket: getBucket(),
      Key: key,
    }),
  );
  const bytes = res.Body ? await res.Body.transformToByteArray() : new Uint8Array();
  return {
    body: bytes,
    contentType: res.ContentType,
    etag: res.ETag,
    lastModified: res.LastModified,
    metadata: res.Metadata,
    contentLength: res.ContentLength,
  };
}

export async function signedGetUrl(key: string, ttlSeconds = LIMITS.signedUrlTtlSeconds): Promise<string> {
  const ttl = Math.min(Math.max(ttlSeconds, 60), LIMITS.signedUrlTtlSeconds);
  const cmd = new GetObjectCommand({
    Bucket: getBucket(),
    Key: key,
  });
  return getSignedUrl(getR2Client(), cmd, { expiresIn: ttl });
}

/** Probe bucket access without leaking config. */
export async function probeBucketAccess(): Promise<boolean> {
  try {
    const cfg = assertR2Configured();
    // Try each allowed prefix; empty rebel/ roots are fine as long as List succeeds.
    for (const prefix of cfg.allowedPrefixes) {
      await getR2Client().send(
        new ListObjectsV2Command({
          Bucket: cfg.bucket,
          MaxKeys: 1,
          Prefix: prefix,
        }),
      );
      return true;
    }
    await getR2Client().send(
      new ListObjectsV2Command({
        Bucket: cfg.bucket,
        MaxKeys: 1,
      }),
    );
    return true;
  } catch {
    return false;
  }
}
