import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
    ],
    sitemap: [`${siteConfig.siteUrl}/sitemap.xml`],
    host: siteConfig.siteUrl,
  };
}

