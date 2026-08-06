import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const confirm = process.argv.includes("--confirm");
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

let client = null;
if (confirm) {
  const required = ["R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY"];
  for (const name of required) {
    if (!process.env[name]?.trim()) throw new Error(`Missing ${name}`);
  }
  if (!endpoint || !bucket) throw new Error("Missing R2 endpoint or bucket");
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
  if (!confirm) {
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

console.log(confirm
  ? `Published ${assets.length} REBEL assets and manifest to R2`
  : `Validated ${assets.length} REBEL assets. Re-run with --confirm to publish.`);
