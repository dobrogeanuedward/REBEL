import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const hostname = new URL(siteConfig.siteUrl).hostname;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
    ],
    sitemap: [`${siteConfig.siteUrl}/sitemap.xml`],
    host: hostname,
  };
}

