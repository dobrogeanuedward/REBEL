import type { _Object, HeadObjectCommandOutput } from "@aws-sdk/client-s3";
import {
  IMAGE_EXTENSIONS,
  VIDEO_EXTENSIONS,
  TEXT_EXTENSIONS,
  LIMITS,
  assertR2Configured,
} from "./config";
import {
  headObject,
  listPrefixPage,
  publicUrlForKey,
  signedGetUrl,
  getObjectBytes,
} from "./client";
import { cacheGet, cacheSet, cacheKeyIndex, cacheKeyList } from "./cache";
import {
  assertKeyAllowed,
  assertPrefixAllowed,
  basename,
  dirname,
  extname,
  isBlockedKey,
  normalizeKey,
} from "./keys";
import { inferVariantFromKey } from "@/lib/rebel-r2-slots";

export type AssetRecord = {
  key: string;
  id: string;
  name: string;
  folder: string;
  url: string | null;
  contentType: string | null;
  size: number | null;
  lastModified: string | null;
  etag: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: number | null;
  variant: "desktop" | "mobile" | "any";
  semanticRole: string | null;
  focalPoint: string | null;
  altText: string | null;
  metadata: Record<string, string>;
  kind: "image" | "video" | "text" | "pdf" | "other";
};

function kindFrom(key: string, contentType?: string | null): AssetRecord["kind"] {
  const ext = extname(key);
  const ct = (contentType || "").toLowerCase();
  if (ct.startsWith("image/") || IMAGE_EXTENSIONS.has(ext)) return "image";
  if (ct.startsWith("video/") || VIDEO_EXTENSIONS.has(ext)) return "video";
  if (ct === "application/pdf" || ext === ".pdf") return "pdf";
  if (ct.startsWith("text/") || TEXT_EXTENSIONS.has(ext)) return "text";
  return "other";
}

function guessContentType(key: string): string | null {
  const ext = extname(key);
  const map: Record<string, string> = {
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".avif": "image/avif",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".json": "application/json",
    ".md": "text/markdown",
    ".txt": "text/plain",
    ".css": "text/css",
    ".pdf": "application/pdf",
  };
  return map[ext] || null;
}

function metaGet(meta: Record<string, string> | undefined, ...names: string[]): string | null {
  if (!meta) return null;
  const entries = Object.entries(meta);
  for (const name of names) {
    const hit = entries.find(([k]) => k.toLowerCase() === name.toLowerCase());
    if (hit?.[1]) return hit[1];
  }
  return null;
}

function parseDims(meta: Record<string, string> | undefined): {
  width: number | null;
  height: number | null;
} {
  const w = Number(metaGet(meta, "width", "image-width", "x-amz-meta-width") || "");
  const h = Number(metaGet(meta, "height", "image-height", "x-amz-meta-height") || "");
  return {
    width: Number.isFinite(w) && w > 0 ? w : null,
    height: Number.isFinite(h) && h > 0 ? h : null,
  };
}

export function objectToAsset(obj: _Object): AssetRecord | null {
  if (!obj.Key || obj.Key.endsWith("/")) return null;
  if (isBlockedKey(obj.Key)) return null;
  try {
    assertKeyAllowed(obj.Key);
  } catch {
    return null;
  }
  const contentType = guessContentType(obj.Key);
  const dims = { width: null, height: null };
  return {
    key: obj.Key,
    id: obj.Key,
    name: basename(obj.Key),
    folder: dirname(obj.Key),
    url: publicUrlForKey(obj.Key),
    contentType,
    size: obj.Size ?? null,
    lastModified: obj.LastModified?.toISOString() ?? null,
    etag: obj.ETag ?? null,
    width: dims.width,
    height: dims.height,
    aspectRatio: null,
    variant: inferVariantFromKey(obj.Key),
    semanticRole: null,
    focalPoint: null,
    altText: null,
    metadata: {},
    kind: kindFrom(obj.Key, contentType),
  };
}

export function headToAsset(key: string, head: HeadObjectCommandOutput): AssetRecord {
  const meta = (head.Metadata || {}) as Record<string, string>;
  const dims = parseDims(meta);
  const contentType = head.ContentType || guessContentType(key);
  const aspect =
    dims.width && dims.height ? Number((dims.width / dims.height).toFixed(4)) : null;
  return {
    key,
    id: key,
    name: basename(key),
    folder: dirname(key),
    url: publicUrlForKey(key),
    contentType,
    size: head.ContentLength ?? null,
    lastModified: head.LastModified?.toISOString() ?? null,
    etag: head.ETag ?? null,
    width: dims.width,
    height: dims.height,
    aspectRatio: aspect,
    variant: inferVariantFromKey(key),
    semanticRole: metaGet(meta, "role", "semantic-role", "slot"),
    focalPoint: metaGet(meta, "focal", "focal-point", "focalpoint"),
    altText: metaGet(meta, "alt", "alt-text", "alttext"),
    metadata: meta,
    kind: kindFrom(key, contentType),
  };
}

export async function resolveAssetUrl(key: string): Promise<{
  url: string;
  signed: boolean;
  expiresInSeconds: number | null;
}> {
  const publicUrl = publicUrlForKey(key);
  if (publicUrl) {
    return { url: publicUrl, signed: false, expiresInSeconds: null };
  }
  const url = await signedGetUrl(key, LIMITS.signedUrlTtlSeconds);
  return {
    url,
    signed: true,
    expiresInSeconds: LIMITS.signedUrlTtlSeconds,
  };
}

export async function getAsset(rawKey: string): Promise<AssetRecord & { urlInfo: Awaited<ReturnType<typeof resolveAssetUrl>> }> {
  const key = assertKeyAllowed(rawKey);
  const head = await headObject(key);
  const asset = headToAsset(key, head);
  const urlInfo = await resolveAssetUrl(key);
  return { ...asset, url: urlInfo.url, urlInfo };
}

export async function listAssets(input: {
  prefix?: string | null;
  cursor?: string | null;
  limit?: number;
}): Promise<{ assets: AssetRecord[]; nextCursor: string | null; totalKnown: number | null }> {
  const prefix = assertPrefixAllowed(input.prefix ?? "");
  const limit = Math.min(Math.max(input.limit ?? LIMITS.listDefault, 1), LIMITS.listMax);
  const { allowedPrefixes } = assertR2Configured();

  // When prefix is empty, page across allowed roots (first root for cursor simplicity).
  const effectivePrefix = prefix || allowedPrefixes[0] || "rebel/";

  const page = await listPrefixPage({
    prefix: effectivePrefix,
    cursor: input.cursor,
    limit,
  });
  const assets = page.objects
    .map(objectToAsset)
    .filter((a): a is AssetRecord => Boolean(a))
    .sort((a, b) => a.key.localeCompare(b.key));

  return {
    assets,
    nextCursor: page.nextCursor,
    totalKnown: null,
  };
}

/** Build an in-memory index of keys under allowed prefixes (cached). */
export async function getAssetIndex(): Promise<AssetRecord[]> {
  const cached = cacheGet<AssetRecord[]>(cacheKeyIndex());
  if (cached) return cached;

  const { allowedPrefixes } = assertR2Configured();
  const all: AssetRecord[] = [];
  for (const prefix of allowedPrefixes) {
    let cursor: string | null = null;
    do {
      const listCacheKey: string = `${cacheKeyList(prefix)}:${cursor || "start"}`;
      type ListCache = { objects: _Object[]; next: string | null };
      const hit: ListCache | undefined = cacheGet<ListCache>(listCacheKey);
      let objects: _Object[];
      let next: string | null;
      if (hit) {
        objects = hit.objects;
        next = hit.next;
      } else {
        const page = await listPrefixPage({
          prefix,
          cursor,
          limit: LIMITS.listMax,
        });
        objects = page.objects;
        next = page.nextCursor;
        cacheSet<ListCache>(listCacheKey, { objects, next });
      }
      for (const obj of objects) {
        const asset = objectToAsset(obj);
        if (asset) all.push(asset);
        if (all.length >= LIMITS.indexMaxKeys) break;
      }
      cursor = next;
    } while (cursor && all.length < LIMITS.indexMaxKeys);
    if (all.length >= LIMITS.indexMaxKeys) break;
  }

  all.sort((a, b) => a.key.localeCompare(b.key));
  cacheSet(cacheKeyIndex(), all);
  return all;
}

export async function fetchTextAsset(rawKey: string): Promise<{
  key: string;
  contentType: string | null;
  text: string;
  bytes: number;
}> {
  const key = assertKeyAllowed(rawKey);
  const ext = extname(key);
  if (!TEXT_EXTENSIONS.has(ext)) {
    throw new Error("Only text-like assets are allowed for this tool");
  }
  const obj = await getObjectBytes(key);
  if ((obj.contentLength || obj.body.byteLength) > LIMITS.textMaxBytes) {
    throw new Error("Text asset exceeds 1 MB limit");
  }
  const text = new TextDecoder("utf-8").decode(obj.body);
  return {
    key,
    contentType: obj.contentType || guessContentType(key),
    text,
    bytes: obj.body.byteLength,
  };
}

export { normalizeKey, assertKeyAllowed };
