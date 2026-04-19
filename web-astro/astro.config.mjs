// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const SITE = "https://www.rebelepigenetica.it";

// Hybrid: pages are static by default. Endpoints (api/contact, feed.xml,
// feed.json) opt into SSR with `export const prerender = false`.
export default defineConfig({
  site: SITE,
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: true,
  }),
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/api/") &&
        !page.endsWith("/feed.xml") &&
        !page.endsWith("/feed.json") &&
        // /prenota is a noindex ads landing — keep it out of the sitemap so
        // it never competes with the canonical pages on SEO.
        !page.endsWith("/prenota") &&
        !page.endsWith("/prenota/"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  image: {
    domains: [
      "rebelepigenetica.it",
      "www.rebelepigenetica.it",
      "epikey.rebelepigenetica.it",
      "res.cloudinary.com",
      "imagedelivery.net",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "**.rebelepigenetica.it" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "imagedelivery.net" },
    ],
  },
  vite: {
    ssr: {
      noExternal: ["lenis"],
    },
  },
});
