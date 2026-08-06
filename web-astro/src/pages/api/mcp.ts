import type { APIRoute } from "astro";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { authorizeMcpRequest } from "@/lib/rebel-r2/auth";
import { createRebelR2McpServer } from "@/lib/rebel-r2/server";
import { sanitizeError } from "@/lib/rebel-r2/logging";

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
  const auth = authorizeMcpRequest(request);
  if (!auth.ok) {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32001, message: auth.error },
        id: null,
      }),
      {
        status: auth.status,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "www-authenticate": 'Bearer realm="rebel-r2-mcp"',
          "cache-control": "no-store",
        },
      },
    );
  }

  // Stateless Streamable HTTP — suitable for Vercel serverless.
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  const server = createRebelR2McpServer();

  try {
    await server.connect(transport);
    const response = await transport.handleRequest(request);
    return response ?? new Response(null, { status: 202 });
  } catch (err) {
    const s = sanitizeError(err);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32603, message: s.message, data: { code: s.code } },
        id: null,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
      },
    );
  } finally {
    await server.close().catch(() => undefined);
    await transport.close().catch(() => undefined);
  }
};
