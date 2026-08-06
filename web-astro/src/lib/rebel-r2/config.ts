import { REBEL_R2_DEFAULT_PREFIXES } from "@/lib/rebel-r2-slots";

export const MCP_SERVICE_NAME = "rebel-r2-mcp";
export const MCP_SERVER_VERSION = "1.0.0";

export const LIMITS = {
  listMax: 100,
  listDefault: 50,
  searchDefault: 20,
  searchMax: 50,
  textMaxBytes: 1_000_000,
  previewMaxBytes: 8_000_000,
  previewMaxWidth: 1400,
  previewBatchMax: 4,
  signedUrlTtlSeconds: 600,
  cacheTtlMs: 60_000,
  indexMaxKeys: 5_000,
} as const;

export const BLOCKED_KEY_PATTERNS: RegExp[] = [
  /(^|\/)\.env(\.|$)/i,
  /(^|\/)\.git(\/|$)/i,
  /\.(pem|key|p12|pfx|crt|cer)$/i,
  /(^|\/)(id_rsa|id_ed25519)(\.|$)/i,
  /(^|\/)secrets?(\/|$)/i,
  /(^|\/)credentials?(\.|\/|$)/i,
  /(^|\/)\.aws(\/|$)/i,
  /\.bak$/i,
  /(^|\/)backup[s]?(\/|$)/i,
];

export const TEXT_EXTENSIONS = new Set([
  ".json",
  ".txt",
  ".md",
  ".markdown",
  ".svg",
  ".css",
  ".csv",
  ".yml",
  ".yaml",
  ".xml",
  ".html",
  ".htm",
]);

export const IMAGE_EXTENSIONS = new Set([
  ".webp",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".avif",
  ".svg",
  ".bmp",
  ".tif",
  ".tiff",
]);

export const VIDEO_EXTENSIONS = new Set([
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
]);

export function getR2Config() {
  const accountId = process.env.R2_ACCOUNT_ID?.trim();
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();
  const bucket =
    process.env.R2_PUBLIC_BUCKET?.trim() ||
    process.env.R2_BUCKET?.trim() ||
    "";
  const endpoint =
    process.env.R2_ENDPOINT?.trim() ||
    (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : "");
  const publicBaseUrl = (process.env.R2_PUBLIC_BASE_URL?.trim() || "").replace(
    /\/$/,
    "",
  );
  const prefixesEnv = process.env.R2_ALLOWED_PREFIXES?.trim();
  const allowedPrefixes = (
    prefixesEnv
      ? prefixesEnv.split(",").map((p) => p.trim()).filter(Boolean)
      : [...REBEL_R2_DEFAULT_PREFIXES]
  ).map((p) => (p.endsWith("/") || p === "" ? p : `${p}/`));

  return {
    accountId: Boolean(accountId),
    accessKeyId: Boolean(accessKeyId),
    secretAccessKey: Boolean(secretAccessKey),
    bucket,
    endpoint,
    publicBaseUrl,
    allowedPrefixes,
    credentials: {
      accessKeyId: accessKeyId || "",
      secretAccessKey: secretAccessKey || "",
    },
  };
}

export function assertR2Configured(): {
  bucket: string;
  endpoint: string;
  publicBaseUrl: string;
  allowedPrefixes: string[];
  credentials: { accessKeyId: string; secretAccessKey: string };
} {
  const cfg = getR2Config();
  if (!cfg.bucket || !cfg.endpoint || !cfg.credentials.accessKeyId || !cfg.credentials.secretAccessKey) {
    throw new Error("R2 server configuration incomplete");
  }
  return {
    bucket: cfg.bucket,
    endpoint: cfg.endpoint,
    publicBaseUrl: cfg.publicBaseUrl,
    allowedPrefixes: cfg.allowedPrefixes,
    credentials: cfg.credentials,
  };
}

export function getMcpToken(): string {
  return process.env.MCP_REBEL_TOKEN?.trim() || "";
}
