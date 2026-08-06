/** Safe MCP/R2 logging — never log tokens, signed URLs, bodies, or env values. */

export function logTool(event: {
  tool: string;
  durationMs: number;
  resultCount?: number;
  status: "ok" | "error";
  errorCode?: string;
}): void {
  const payload = {
    service: "rebel-r2-mcp",
    tool: event.tool,
    durationMs: event.durationMs,
    resultCount: event.resultCount ?? null,
    status: event.status,
    errorCode: event.errorCode ?? null,
  };
  console.info(JSON.stringify(payload));
}

export function sanitizeError(err: unknown): { code: string; message: string } {
  if (err && typeof err === "object" && "code" in err && "message" in err) {
    const e = err as { code?: string; message?: string; name?: string; $metadata?: { httpStatusCode?: number } };
    const code = e.code || e.name || "ERROR";
    // Strip possible signed query fragments from AWS messages.
    const message = String(e.message || "Request failed")
      .replace(/https?:\/\/\S+/g, "[redacted-url]")
      .replace(/Credential=[^,\s]+/gi, "Credential=[redacted]")
      .replace(/Signature=[^\s&]+/gi, "Signature=[redacted]");
    return { code, message };
  }
  return { code: "ERROR", message: "Unexpected server error" };
}
