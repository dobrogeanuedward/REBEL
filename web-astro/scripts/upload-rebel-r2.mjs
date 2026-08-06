import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const confirm = process.argv.includes("--confirm");
const confirmIfConfigured = process.argv.includes("--confirm-if-configured");
const root = join(process.cwd(), "public", "img", "rebel-r2");
const manifestPath = join(root, "rebel", "manifests", "assets.json");

const accountId = process.env.R2_ACCOUNT_ID?.trim();
const endpoint =
  process.env.R2_ENDPOINT?.trim() ||
  (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : "");
const bucket =
  process.env.R2_PUBLIC_BUCKET?.trim() ||
  process.env.R2_BUCKET?.trim() ||
  "";

const missing = ["R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY"]
  .filter((name) => !process.env[name]?.trim());
if (!endpoint) missing.push("R2_ENDPOINT or R2_ACCOUNT_ID");
if (!bucket) missing.push("R2_BUCKET or R2_PUBLIC_BUCKET");

if (confirm && missing.length) {
  throw new Error(`Missing R2 configuration: ${missing.join(", ")}`);
}

const publish = confirm || (confirmIfConfigured && missing.length === 0);
let client = null;
if (publish) {
  client = new S3Client({
    region: "auto",
    endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID.trim(),
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY.trim(),
    },
  });
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const assets = Array.isArray(manifest.assets) ? manifest.assets : [];

if (!assets.length) throw new Error("Manifest has no asset records");

const contentType = (key) => {
  const extension = extname(key).toLowerCase();
  if (extension === ".webp") return "image/webp";
  if (extension === ".json") return "application/json; charset=utf-8";
  return "application/octet-stream";
};

async function put(key, filePath, metadata = {}) {
  const info = await stat(filePath);
  if (!publish) {
    console.log(`DRY ${key} ${info.size} bytes`);
    return;
  }
  await client.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: createReadStream(filePath),
    ContentLength: info.size,
    ContentType: contentType(key),
    CacheControl: key.endsWith(".json")
      ? "public, max-age=60"
      : "public, max-age=31536000, immutable",
    Metadata: Object.fromEntries(
      Object.entries(metadata).map(([name, value]) => [name, String(value)]),
    ),
  }));
  console.log(`PUT ${key} ${info.size} bytes`);
}

async function verify(key, expectedBytes, expectedSha256 = "") {
  const remote = await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
  if (Number(remote.ContentLength) !== Number(expectedBytes)) {
    throw new Error(`R2 byte mismatch for ${key}`);
  }
  if (expectedSha256 && remote.Metadata?.sha256 !== expectedSha256) {
    throw new Error(`R2 checksum metadata mismatch for ${key}`);
  }
}

if (confirmIfConfigured && missing.length) {
  console.log(`R2 publish skipped: deploy environment is missing ${missing.join(", ")}`);
}

for (let start = 0; start < assets.length; start += 4) {
  const batch = assets.slice(start, start + 4);
  await Promise.all(batch.map((asset) =>
    put(asset.key, join(root, asset.key), {
      width: asset.width,
      height: asset.height,
      sha256: asset.sha256,
      collection: "rebel-site-assets-v2",
    }),
  ));
}

await put("rebel/manifests/assets.json", manifestPath, {
  version: manifest.version,
  collection: "rebel-site-assets-v2",
});

if (publish) {
  for (let start = 0; start < assets.length; start += 8) {
    const batch = assets.slice(start, start + 8);
    await Promise.all(batch.map((asset) => verify(asset.key, asset.bytes, asset.sha256)));
  }
  const manifestInfo = await stat(manifestPath);
  await verify("rebel/manifests/assets.json", manifestInfo.size);
  console.log(`Published and verified ${assets.length} REBEL assets and manifest in R2`);
} else {
  console.log(`Validated ${assets.length} REBEL assets. Re-run with --confirm to publish.`);
}
