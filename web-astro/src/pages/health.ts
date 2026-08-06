import type { APIRoute } from "astro";
import { MCP_SERVICE_NAME, getR2Config } from "@/lib/rebel-r2/config";
import { probeBucketAccess } from "@/lib/rebel-r2/client";

export const prerender = false;

export const GET: APIRoute = async () => {
  const cfg = getR2Config();
  let bucketAccess = false;
  if (cfg.bucket && cfg.endpoint && cfg.credentials.accessKeyId && cfg.credentials.secretAccessKey) {
    bucketAccess = await probeBucketAccess();
  }

  const body = {
    status: bucketAccess ? "ok" : "degraded",
    service: MCP_SERVICE_NAME,
    bucketAccess,
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
};
