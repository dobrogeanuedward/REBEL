import type { APIRoute } from "astro";
import { siteConfig } from "@/lib/site-config";

export const GET: APIRoute = () => {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const hostname = new URL(siteConfig.siteUrl).hostname;
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /api/*

Sitemap: ${baseUrl}/sitemap.xml
Host: ${hostname}
`;
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
};
