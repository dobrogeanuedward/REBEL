import type { MetadataRoute } from "next";
import { competencePages, servicePages } from "@/lib/seo-content";
import { localAreaPages } from "@/lib/local-pages";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  const staticRoutes = [
    "/",
    "/chi-siamo",
    "/metodo-rebel",
    "/protocolli-epigenetici",
    "/listino-estetica-laser",
    "/servizi",
    "/competenze",
    "/localita",
    "/tecnologia-thory",
    "/contatti",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => {
    const priorityMap: Record<string, number> = {
      "/": 1,
      "/listino-estetica-laser": 0.93,
      "/contatti": 0.92,
      "/servizi": 0.9,
      "/chi-siamo": 0.88,
      "/metodo-rebel": 0.86,
      "/protocolli-epigenetici": 0.85,
      "/competenze": 0.84,
      "/localita": 0.83,
      "/tecnologia-thory": 0.82,
    };

    return {
      url: `${siteConfig.siteUrl}${path}`,
      lastModified,
      changeFrequency: path === "/" || path === "/contatti" ? "daily" : "weekly",
      priority: priorityMap[path] ?? 0.8,
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${siteConfig.siteUrl}/servizi/${service.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const competenceEntries: MetadataRoute.Sitemap = competencePages.map(
    (competence) => ({
      url: `${siteConfig.siteUrl}/competenze/${competence.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    }),
  );

  const localEntries: MetadataRoute.Sitemap = localAreaPages.map((area) => ({
    url: `${siteConfig.siteUrl}/localita/${area.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.74,
  }));

  return [...staticEntries, ...serviceEntries, ...competenceEntries, ...localEntries];
}

