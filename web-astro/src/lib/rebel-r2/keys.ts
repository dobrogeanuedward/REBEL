import { BLOCKED_KEY_PATTERNS, assertR2Configured } from "./config";

export class RebelR2AccessError extends Error {
  code: string;
  status: number;
  constructor(code: string, message: string, status = 400) {
    super(message);
    this.name = "RebelR2AccessError";
    this.code = code;
    this.status = status;
  }
}

/** Normalize and reject path traversal / absolute paths. */
export function normalizeKey(raw: string): string {
  if (typeof raw !== "string" || !raw.trim()) {
    throw new RebelR2AccessError("INVALID_KEY", "Key is required");
  }
  let key = raw.trim().replace(/\\/g, "/");
  if (key.startsWith("/")) key = key.slice(1);
  if (key.includes("\0")) {
    throw new RebelR2AccessError("INVALID_KEY", "Key contains null bytes");
  }
  if (key.includes("..")) {
    throw new RebelR2AccessError("PATH_TRAVERSAL", "Path traversal is blocked");
  }
  if (/^[a-zA-Z]:/.test(key) || key.startsWith("//")) {
    throw new RebelR2AccessError("INVALID_KEY", "Absolute paths are blocked");
  }
  key = key.replace(/\/+/g, "/");
  return key;
}

export function normalizePrefix(raw: string | null | undefined): string {
  if (raw == null || raw === "") return "";
  const key = normalizeKey(raw.endsWith("/") ? raw : `${raw}/`);
  return key.endsWith("/") ? key : `${key}/`;
}

export function isBlockedKey(key: string): boolean {
  if (key === "private" || key.startsWith("private/")) return true;
  return BLOCKED_KEY_PATTERNS.some((re) => re.test(key));
}

export function isPrefixAllowed(prefix: string): boolean {
  const { allowedPrefixes } = assertR2Configured();
  if (prefix === "") {
    // Empty prefix only allowed when at least one Rebel root is configured;
    // listing still filters to allowed prefixes in list/search.
    return true;
  }
  const p = normalizePrefix(prefix);
  return allowedPrefixes.some(
    (allowed) => p === allowed || p.startsWith(allowed) || allowed.startsWith(p),
  );
}

export function assertKeyAllowed(raw: string): string {
  const key = normalizeKey(raw);
  if (isBlockedKey(key)) {
    throw new RebelR2AccessError("SENSITIVE_KEY", "Sensitive keys are blocked", 403);
  }
  const { allowedPrefixes } = assertR2Configured();
  const ok = allowedPrefixes.some(
    (allowed) => key === allowed.replace(/\/$/, "") || key.startsWith(allowed),
  );
  if (!ok) {
    throw new RebelR2AccessError(
      "PREFIX_DENIED",
      "Key is outside the allowed Rebel prefixes",
      403,
    );
  }
  return key;
}

export function assertPrefixAllowed(raw: string | null | undefined): string {
  const prefix = normalizePrefix(raw);
  if (prefix && isBlockedKey(prefix)) {
    throw new RebelR2AccessError("SENSITIVE_KEY", "Sensitive prefixes are blocked", 403);
  }
  if (!isPrefixAllowed(prefix)) {
    throw new RebelR2AccessError(
      "PREFIX_DENIED",
      "Prefix is outside the allowed Rebel roots",
      403,
    );
  }
  return prefix;
}

export function basename(key: string): string {
  const parts = key.split("/");
  return parts[parts.length - 1] || key;
}

export function dirname(key: string): string {
  const idx = key.lastIndexOf("/");
  return idx === -1 ? "" : key.slice(0, idx + 1);
}

export function extname(key: string): string {
  const name = basename(key);
  const idx = name.lastIndexOf(".");
  return idx === -1 ? "" : name.slice(idx).toLowerCase();
}
