import type { APIRoute } from "astro";
import { journeyCarousels } from "@/lib/journey-carousels";
import { journeyPhotographs } from "@/lib/journey-photographs";
import { siteConfig } from "@/lib/site-config";
const escapeXml = (s: string) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
export const GET: APIRoute = () => {
  const absolute = (path: string) => escapeXml(new URL(path, siteConfig.siteUrl).href);
  const entries = Object.entries(journeyCarousels).map(([slug, carousel]) => ({ path: `/percorsi/${slug}`, images: [...carousel.slides.map(slide => slide.src), ...journeyPhotographs.filter(photo => photo.journey === slug).map(photo => photo.src)] }));
  entries.push({ path: "/gallery", images: journeyPhotographs.map(photo => photo.src) });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${entries.map(entry => `<url><loc>${absolute(entry.path)}</loc>${entry.images.map(src => `<image:image><image:loc>${absolute(src)}</image:loc></image:image>`).join("")}</url>`).join("")}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
