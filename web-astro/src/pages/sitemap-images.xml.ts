import assignments from "@/data/treatment-photographs.json";
import {
  photographs,
  categoryVisuals,
  type PhotoKey,
} from "@/lib/catalog-visuals";
import { beautyPhotographs, servicePhotography } from "@/lib/beauty-editorial";
import laminazione from "@/data/laminazione-carousel.json";
import type { APIRoute } from "astro";
import { servicePages } from "@/lib/seo-content";
import { serviceCategories, categoryTreatments } from "@/lib/service-categories";
import { treatmentPhoto } from "@/lib/catalog-visuals";
import { journeyCarousels } from "@/lib/journey-carousels";
import { journeyPhotographs } from "@/lib/journey-photographs";
import { siteConfig } from "@/lib/site-config";
import { isIndexableSearchPage } from "@/lib/search-intents";
const escapeXml = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
export const GET: APIRoute = () => {
  const absolute = (path: string) =>
    escapeXml(new URL(path, siteConfig.siteUrl).href);
  const entries = Object.entries(journeyCarousels).map(([slug, carousel]) => ({
    path: `/percorsi/${slug}`,
    images: [
      ...carousel.slides.map((slide) => slide.src),
      ...journeyPhotographs
        .filter((photo) => photo.journey === slug)
        .map((photo) => photo.src),
    ],
  }));
  entries.push({
    path: "/promo-epilazione-laser-carmagnola",
    images: [
      "/img/catalogo/laser-gamba-rebel.webp",
      "/img/rebel-r2/rebel/studio/real-exterior-desktop.webp",
    ],
  });
  entries.push({
    path: "/gallery",
    images: [
      ...journeyPhotographs.map((photo) => photo.src),
      ...beautyPhotographs.map((photo) => photo.src),
    ],
  });
  entries.push({
    path: "/listino-estetica-laser",
    images: [
      ...new Set([
        ...Object.values(assignments),
        ...Object.values(categoryVisuals).map((category) => category.photo),
        ...Object.keys(photographs).filter((key) =>
          key.startsWith("percorso-"),
        ),
      ]),
    ].map((key) => photographs[key as PhotoKey].src),
  });
  const rblImages = ["atelier-work.webp", "salon-proof.webp", "rosa-in-polvere.webp", "blu-assoluto-v2.webp"].map(name => `/img/rbl-official/${name}`);
  for (const service of servicePages) {
    const keys = servicePhotography[service.slug] ?? (service.slug === "ceretta-carmagnola" ? ["cera-gamba", "cera-preparazione"] as PhotoKey[] : []);
    entries.push({
      path: `/servizi/${service.slug}`,
      images: [
        ...keys.map(key => photographs[key].src),
        ...(keys.length === 0 && service.heroImage ? [service.heroImage.src] : []),
        ...(service.slug.startsWith("laminazione") ? laminazione.slides.map(slide => slide.src) : []),
        ...(["manicure-semipermanente-carmagnola", "pedicure-carmagnola", "pedicure-estetico-con-smalto-carmagnola", "pedicure-semipermanente-carmagnola"].includes(service.slug) ? rblImages : []),
      ],
    });
  }
  for (const category of serviceCategories) entries.push({
    path: `/servizi/${category.slug}`,
    images: [photographs[category.heroPhoto].src, ...categoryTreatments(category).flatMap(group => group.items.map(item => treatmentPhoto(item.id).src))],
  });
  const canonicalEntries = entries.filter((entry) => isIndexableSearchPage(entry.path));
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${canonicalEntries.map((entry) => `<url><loc>${absolute(entry.path)}</loc>${[...new Set(entry.images)].map((src) => `<image:image><image:loc>${absolute(src)}</image:loc></image:image>`).join("")}</url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
