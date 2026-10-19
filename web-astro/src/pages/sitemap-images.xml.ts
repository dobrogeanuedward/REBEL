import assignments from "@/data/treatment-photographs.json";
import {
  photographs,
  categoryVisuals,
  type PhotoKey,
} from "@/lib/catalog-visuals";
import { beautyPhotographs, servicePhotography } from "@/lib/beauty-editorial";
import laminazione from "@/data/laminazione-carousel.json";
import type { APIRoute } from "astro";
import { servicePages, competencePages } from "@/lib/seo-content";
import { serviceCategories, categoryTreatments } from "@/lib/service-categories";
import { treatmentPhoto } from "@/lib/catalog-visuals";
import { journeyCarousels } from "@/lib/journey-carousels";
import { journeyPhotographs } from "@/lib/journey-photographs";
import { siteConfig } from "@/lib/site-config";
import { isIndexableSearchPage } from "@/lib/search-intents";
import { rblImagesForService } from "@/lib/rbl-nails";
import { protocolPages } from "@/lib/protocol-pages";
import { getProtocolPhotography } from "@/lib/protocol-photography";
import { getPageMedia, media } from "@/lib/page-media";
import { getSiteAssetFallback } from "@/lib/site-assets";
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
    path: "/servizi",
    images: [
      ...["viso-manualita", "laser-gamba", "laminazione-sopracciglia", "pedicure-cura", "scrub-gamba", "cera-preparazione", "cera-gamba"].map(key => `/img/catalogo/${key}-rebel.webp`),
      "/img/rebel-r2/rebel/services/massage/hero-desktop.webp",
      "/img/catalogo/percorso-forma-rebel.webp",
      "/img/shooting-rebel/glow-trattamento-rebel-carmagnola.webp",
      "/img/rbl-official/rosa-in-polvere.webp",
      "/img/rbl-official/hands-studio-rosso.webp",
      "/img/rbl-official/collection-rosa-in-polvere-tips.webp",
      "/img/studio-treatwell/15432056.jpg",
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
    path: "/epilazione-laser-carmagnola",
    images: [
      getPageMedia("/epilazione-laser-carmagnola").hero?.src,
      "/img/rebel-r2/rebel/services/laser/handpiece-desktop.webp",
      photographs["laser-gamba"].src,
      "/img/studio-treatwell/15432121.jpg",
    ].filter((src): src is string => Boolean(src)),
  });
  entries.push({
    path: "/epilazione-laser-ice-polar-carmagnola",
    images: [
      getPageMedia("/epilazione-laser-ice-polar-carmagnola").splitA?.src,
      "/img/rebel-r2/rebel/services/laser/handpiece-desktop.webp",
      "/img/rebel-r2/rebel/home/hero/laser-icepolar-desktop.webp",
      "/img/studio-treatwell/15432121.jpg",
    ].filter((src): src is string => Boolean(src)),
  });
  // The guide library renders only topics with at least one published guide.
  const guideTopic = (slug: string) => /laser|peli-incarniti/.test(slug) ? "laser"
    : /manicure|semipermanente|unghie|pedicure|piedi|talloni|laminazione|ciglia|sopracciglia/.test(slug) ? "beauty"
    : /massaggio|linfodren|pressomass|pressoterapia|scrub-corpo|corpo|cervicale/.test(slug) ? "corpo"
    : /viso|pelle|occhi|tono|ovale|opaca|matura|pulizia/.test(slug) ? "viso" : "metodo";
  const guideTopicPhotos: Record<string, PhotoKey> = {
    laser: "laser-gamba", viso: "viso-manualita", beauty: "laminazione-ritratto",
    corpo: "massaggio-spalle", metodo: "viso-preparazione",
  };
  entries.push({
    path: "/competenze",
    images: [media.laser.consult.src, ...[...new Set(competencePages.map(guide => guideTopic(guide.slug)))].map(topic => photographs[guideTopicPhotos[topic]].src)],
  });
  entries.push({
    path: "/centro-estetico-carmagnola",
    images: [
      media.studio.reception.src, media.studio.realExterior.src,
      photographs["viso-manualita"].src, photographs["laser-gamba"].src,
      photographs["pedicure-cura"].src, "/img/rbl-official/rosa-in-polvere.webp",
    ],
  });
  entries.push({
    path: "/prima-visita-gratuita",
    images: [media.method.hero.src, media.laser.consult.src, media.viso.texture.src, "/img/studio-treatwell/15432078.jpg"],
  });
  entries.push({
    path: "/protocolli-epigenetici",
    images: [
      photographs["viso-manualita"].src, photographs["percorso-glow"].src,
      photographs["percorso-forma"].src,
      ...protocolPages.map(protocol => getProtocolPhotography(protocol.slug).hero.src),
    ],
  });
  for (const protocol of protocolPages) {
    const photos = getProtocolPhotography(protocol.slug);
    entries.push({
      path: `/protocolli/${protocol.slug}`,
      images: [photos.hero.src, ...protocol.editorialSections.map((_, index) => photos.story[index % photos.story.length].src)],
    });
  }
  entries.push({
    path: "/protocollo-viso",
    images: [photographs["percorso-glow"].src, photographs["viso-preparazione"].src],
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
  for (const service of servicePages) {
    const keys = servicePhotography[service.slug] ?? (service.slug === "ceretta-carmagnola" ? ["cera-gamba", "cera-preparazione"] as PhotoKey[] : []);
    entries.push({
      path: `/servizi/${service.slug}`,
      images: [
        ...keys.map(key => photographs[key].src),
        ...(keys.length === 0 && service.heroImage ? [service.heroImage.src] : []),
        ...(service.slug.startsWith("laminazione") ? laminazione.slides.map(slide => slide.src) : []),
        ...rblImagesForService(service.slug),
      ],
    });
  }
  for (const category of serviceCategories) entries.push({
    path: `/servizi/${category.slug}`,
    images: [photographs[category.heroPhoto].src, photographs[category.key === "viso" ? "viso-preparazione" : category.key === "corpo" ? "scrub-gamba" : category.key === "massaggi" ? "massaggio-spalle" : "bendaggi"].src, ...categoryTreatments(category).flatMap(group => group.items.map(item => treatmentPhoto(item.id).src))],
  });
  // Image locations are stable asset URLs, never the slot resolver endpoint.
  const stableImageUrl = (src: string): string | undefined => {
    const url = new URL(src, siteConfig.siteUrl);
    if (url.origin === new URL(siteConfig.siteUrl).origin && url.pathname === "/api/site-asset") {
      const fallback = getSiteAssetFallback(url.searchParams.get("slot") ?? "");
      return fallback ? new URL(fallback, siteConfig.siteUrl).href : undefined;
    }
    return url.search ? undefined : url.href;
  };
  const canonicalEntries = new Map<string, Set<string>>();
  for (const entry of entries) {
    if (!isIndexableSearchPage(entry.path)) continue;
    const path = new URL(entry.path, siteConfig.siteUrl).href;
    const images = canonicalEntries.get(path) ?? new Set<string>();
    for (const src of entry.images) {
      const stableUrl = stableImageUrl(src);
      if (stableUrl) images.add(stableUrl);
    }
    if (images.size > 0) canonicalEntries.set(path, images);
  }
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${[...canonicalEntries].map(([path, images]) => `<url><loc>${absolute(path)}</loc>${[...images].map((src) => `<image:image><image:loc>${absolute(src)}</image:loc></image:image>`).join("")}</url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
