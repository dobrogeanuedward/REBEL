import { LIMITS } from "./config";
import { assertKeyAllowed, extname } from "./keys";
import { getObjectBytes, publicUrlForKey } from "./client";
import { getAsset, resolveAssetUrl } from "./assets";
import { RebelR2AccessError } from "./keys";

export type PreviewResult = {
  key: string;
  kind: string;
  contentType: string | null;
  url: string | null;
  signed: boolean;
  width: number | null;
  height: number | null;
  size: number | null;
  note: string;
  image?: { mimeType: string; base64: string; byteLength: number };
  svgText?: string;
  posterKey?: string | null;
};

async function maybeResize(
  bytes: Uint8Array,
  contentType: string | undefined,
  maxWidth: number,
): Promise<{ mimeType: string; base64: string; byteLength: number; width: number | null; height: number | null }> {
  try {
    const sharp = (await import("sharp")).default;
    let pipeline = sharp(Buffer.from(bytes), { failOn: "none" }).rotate();
    const meta = await pipeline.metadata();
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }
    // Prefer webp for previews to keep payload smaller; keep PNG for transparency-heavy sources.
    const usePng = (contentType || "").includes("png") || extname("x.png") === ".png";
    const out = usePng && (contentType || "").includes("png")
      ? await pipeline.png({ compressionLevel: 8 }).toBuffer({ resolveWithObject: true })
      : await pipeline.webp({ quality: 78 }).toBuffer({ resolveWithObject: true });
    const mimeType = out.info.format === "png" ? "image/png" : "image/webp";
    if (out.data.byteLength > LIMITS.previewMaxBytes) {
      throw new RebelR2AccessError("PREVIEW_TOO_LARGE", "Preview exceeds size limit", 413);
    }
    return {
      mimeType,
      base64: out.data.toString("base64"),
      byteLength: out.data.byteLength,
      width: out.info.width ?? meta.width ?? null,
      height: out.info.height ?? meta.height ?? null,
    };
  } catch (err) {
    if (err instanceof RebelR2AccessError) throw err;
    // Fallback: original bytes if small enough
    if (bytes.byteLength > LIMITS.previewMaxBytes) {
      throw new RebelR2AccessError("PREVIEW_TOO_LARGE", "Image too large to preview", 413);
    }
    const mimeType = contentType || "application/octet-stream";
    return {
      mimeType,
      base64: Buffer.from(bytes).toString("base64"),
      byteLength: bytes.byteLength,
      width: null,
      height: null,
    };
  }
}

export async function previewAsset(input: {
  key: string;
  maxWidth?: number;
}): Promise<PreviewResult> {
  const key = assertKeyAllowed(input.key);
  const maxWidth = Math.min(Math.max(input.maxWidth ?? LIMITS.previewMaxWidth, 64), LIMITS.previewMaxWidth);
  const asset = await getAsset(key);
  const urlInfo = await resolveAssetUrl(key);

  if (asset.kind === "video") {
    const posterCandidates = [
      key.replace(/\.(mp4|webm|mov|m4v)$/i, "-poster.webp"),
      key.replace(/\.(mp4|webm|mov|m4v)$/i, ".webp"),
      key.replace(/\.(mp4|webm|mov|m4v)$/i, "-poster.jpg"),
    ];
    let posterKey: string | null = null;
    for (const p of posterCandidates) {
      try {
        assertKeyAllowed(p);
        await getAsset(p);
        posterKey = p;
        break;
      } catch {
        // continue
      }
    }
    return {
      key,
      kind: "video",
      contentType: asset.contentType,
      url: urlInfo.url,
      signed: urlInfo.signed,
      width: asset.width,
      height: asset.height,
      size: asset.size,
      note: "Video preview returns metadata + URL only (no base64).",
      posterKey,
    };
  }

  if (asset.kind === "pdf") {
    return {
      key,
      kind: "pdf",
      contentType: asset.contentType,
      url: urlInfo.url,
      signed: urlInfo.signed,
      width: null,
      height: null,
      size: asset.size,
      note: "PDF preview returns URL + metadata only.",
    };
  }

  if (extname(key) === ".svg") {
    const obj = await getObjectBytes(key);
    if (obj.body.byteLength > LIMITS.textMaxBytes) {
      throw new RebelR2AccessError("PREVIEW_TOO_LARGE", "SVG exceeds safe text limit", 413);
    }
    const svgText = new TextDecoder("utf-8").decode(obj.body);
    // Basic safety: reject script-bearing SVG text from inline return
    const safe = !/<script/i.test(svgText);
    return {
      key,
      kind: "image",
      contentType: "image/svg+xml",
      url: publicUrlForKey(key) || urlInfo.url,
      signed: urlInfo.signed,
      width: asset.width,
      height: asset.height,
      size: obj.body.byteLength,
      note: safe ? "SVG returned as text + URL." : "SVG contains script tags; text omitted, URL only.",
      svgText: safe ? svgText : undefined,
    };
  }

  if (asset.kind !== "image") {
    return {
      key,
      kind: asset.kind,
      contentType: asset.contentType,
      url: urlInfo.url,
      signed: urlInfo.signed,
      width: asset.width,
      height: asset.height,
      size: asset.size,
      note: "Non-image asset: metadata + URL only.",
    };
  }

  if (asset.size && asset.size > LIMITS.previewMaxBytes * 4) {
    // Still try resize path, but guard absurd originals
    throw new RebelR2AccessError(
      "PREVIEW_TOO_LARGE",
      "Source image is too large to preview safely",
      413,
    );
  }

  const obj = await getObjectBytes(key);
  if (obj.body.byteLength > LIMITS.previewMaxBytes * 6) {
    throw new RebelR2AccessError("PREVIEW_TOO_LARGE", "Source image payload too large", 413);
  }

  const resized = await maybeResize(obj.body, obj.contentType || asset.contentType || undefined, maxWidth);
  return {
    key,
    kind: "image",
    contentType: resized.mimeType,
    url: urlInfo.url,
    signed: urlInfo.signed,
    width: resized.width,
    height: resized.height,
    size: asset.size,
    note: "In-memory preview only; original object was not modified.",
    image: {
      mimeType: resized.mimeType,
      base64: resized.base64,
      byteLength: resized.byteLength,
    },
  };
}
