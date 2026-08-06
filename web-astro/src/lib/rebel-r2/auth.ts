import { timingSafeEqual } from "node:crypto";
import { getMcpToken } from "./config";

export type AuthResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) {
    // Compare against self to keep constant-ish work without leaking length via early return alone.
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

/** Extract Bearer token from Authorization header. Never logs the value. */
export function extractBearer(request: Request): string | null {
  const header = request.headers.get("authorization") || request.headers.get("Authorization");
  if (!header) return null;
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match?.[1]?.trim() || null;
}

export function authorizeMcpRequest(request: Request): AuthResult {
  const expected = getMcpToken();
  if (!expected) {
    return {
      ok: false,
      status: 503,
      error: "MCP authentication is not configured",
    };
  }
  const provided = extractBearer(request);
  if (!provided) {
    return { ok: false, status: 401, error: "Missing bearer token" };
  }
  if (!safeEqual(provided, expected)) {
    return { ok: false, status: 401, error: "Invalid bearer token" };
  }
  return { ok: true };
}
