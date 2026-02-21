import type { MetadataRoute } from "next";
import { competencePages, servicePages } from "@/lib/seo-content";
import { localAreaPages } from "@/lib/local-pages";
import { protocolPages } from "@/lib/protocol-pages";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  const defaultImage = siteConfig.assets.ogImage;
  const createEntry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
    images: [defaultImage],
  });

  const staticEntries: MetadataRoute.Sitemap = [
    createEntry("/", "daily", 1),
    createEntry("/centro-estetico-carmagnola", "daily", 0.99),
    createEntry("/epilazione-laser-carmagnola", "daily", 0.98),
    createEntry("/epilazione-laser-ice-polar-carmagnola", "weekly", 0.92),
    createEntry("/chi-siamo", "weekly", 0.9),
    createEntry("/metodo-rebel", "weekly", 0.88),
    createEntry("/protocolli-epigenetici", "weekly", 0.89),
    createEntry("/listino-estetica-laser", "weekly", 0.95),
    createEntry("/servizi", "weekly", 0.93),
    createEntry("/competenze", "weekly", 0.91),
    createEntry("/localita", "weekly", 0.9),
    createEntry("/contatti", "daily", 0.94),
  ];

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${siteConfig.siteUrl}/servizi/${service.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: service.category === "laser" ? 0.84 : 0.82,
    images: [service.heroImage?.src ?? defaultImage],
  }));

  const competenceEntries: MetadataRoute.Sitemap = competencePages.map(
    (competence) => ({
      url: `${siteConfig.siteUrl}/competenze/${competence.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: competence.intent === "commercial" ? 0.8 : 0.78,
      images: [competence.heroImage?.src ?? defaultImage],
    }),
  );

  const protocolEntries: MetadataRoute.Sitemap = protocolPages.map((protocol) => ({
    url: `${siteConfig.siteUrl}/protocolli/${protocol.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.76,
    images: [defaultImage],
  }));

  const localEntries: MetadataRoute.Sitemap = localAreaPages.map((area) => ({
    url: `${siteConfig.siteUrl}/localita/${area.slug}`,
    lastModified,
    changeFrequency: "weekly",
    // Slightly higher priority for closer areas.
    priority: area.cluster === "asse-carmagnola" ? 0.79 : area.cluster === "torino-sud" ? 0.77 : 0.75,
    images: [defaultImage],
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...competenceEntries,
    ...protocolEntries,
    ...localEntries,
  ];
}

