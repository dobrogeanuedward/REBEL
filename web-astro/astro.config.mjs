// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { isIndexableSearchPage, permanentRedirects } from "./src/lib/search-intents.ts";

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
  // Astro emits permanent (301) redirects, also in the Vercel route manifest.
  redirects: permanentRedirects,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    react(),
    sitemap({
      filter: isIndexableSearchPage,
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
