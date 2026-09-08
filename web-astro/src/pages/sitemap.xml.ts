import type { APIRoute } from "astro";
import { competencePages, servicePages } from "@/lib/seo-content";
import { localAreaPages } from "@/lib/local-pages";
import { protocolPages } from "@/lib/protocol-pages";
import { rebelJourneys } from "@/lib/rebel-journeys";
import { siteConfig } from "@/lib/site-config";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type Entry = {
  loc: string;
  changefreq: ChangeFreq;
  priority: number;
  image?: string;
};

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = () => {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const lastmod = new Date().toISOString();
  const absoluteUrl = (value: string) => new URL(value, `${baseUrl}/`).toString();
  const defaultImage = absoluteUrl(siteConfig.assets.ogImage);

  const make = (
    path: string,
    changefreq: ChangeFreq,
    priority: number,
    image?: string,
  ): Entry => ({
    loc: `${baseUrl}${path}`,
    changefreq,
    priority,
    image: image ?? defaultImage,
  });

  const staticEntries: Entry[] = [
    make("/", "daily", 1),
    make("/centro-estetico-carmagnola", "daily", 0.99),
    make("/epilazione-laser-carmagnola", "daily", 0.98),
    make("/promo-epilazione-laser-carmagnola", "weekly", 0.95),
    make("/laser-full-body-carmagnola", "weekly", 0.9),
    make("/promo-laser-carmagnola-dintorni", "weekly", 0.85),
    make("/epilazione-laser-ice-polar-carmagnola", "weekly", 0.92),
    make("/epilazione-laser-alba", "weekly", 0.92),
    make("/epilazione-laser-bra", "weekly", 0.92),
    make("/epilazione-laser-canale", "weekly", 0.92),
    make("/epilazione-laser-racconigi", "weekly", 0.93),
    make("/pulizia-viso-alba", "weekly", 0.91),
    make("/pulizia-viso-bra", "weekly", 0.91),
    make("/pulizia-viso-canale", "weekly", 0.91),
    make("/pulizia-viso-racconigi", "weekly", 0.91),
    make("/manicure-semipermanente-alba", "weekly", 0.91),
    make("/manicure-semipermanente-bra", "weekly", 0.91),
    make("/manicure-semipermanente-canale", "weekly", 0.91),
    make("/manicure-semipermanente-racconigi", "weekly", 0.91),
    make("/laminazione-alba", "weekly", 0.90),
    make("/laminazione-bra", "weekly", 0.90),
    make("/laminazione-canale", "weekly", 0.90),
    make("/laminazione-racconigi", "weekly", 0.90),
    make("/massaggio-rilassante-alba", "weekly", 0.90),
    make("/massaggio-rilassante-bra", "weekly", 0.90),
    make("/massaggio-rilassante-canale", "weekly", 0.90),
    make("/massaggio-rilassante-racconigi", "weekly", 0.90),
    make("/pedicure-racconigi", "weekly", 0.89),
    make("/pedicure-alba", "weekly", 0.89),
    make("/pedicure-bra", "weekly", 0.89),
    make("/pedicure-canale", "weekly", 0.89),
    make("/massaggio-linfodrenante-racconigi", "weekly", 0.89),
    make("/massaggio-linfodrenante-alba", "weekly", 0.89),
    make("/massaggio-linfodrenante-bra", "weekly", 0.89),
    make("/massaggio-linfodrenante-canale", "weekly", 0.89),
    make("/chi-siamo", "weekly", 0.9),
    make("/metodo-rebel", "weekly", 0.88),
    make("/protocolli-epigenetici", "weekly", 0.89),
    make("/percorsi", "weekly", 0.95),
    make("/tecnologie-rebel", "weekly", 0.93),
    make("/listino-estetica-laser", "weekly", 0.95),
    make("/servizi", "weekly", 0.93),
    make("/competenze", "weekly", 0.91),
    make("/localita", "weekly", 0.9),
    make("/contatti", "daily", 0.94),
    // Landing pages promoted through both paid and organic channels.
    // /prenota remains noindex; the laser campaign is indexable.
    make("/prima-visita-gratuita", "weekly", 0.93),
    make("/protocollo-viso", "weekly", 0.9),
  ];

  const serviceEntries: Entry[] = servicePages.map((service) =>
    make(
      `/servizi/${service.slug}`,
      "weekly",
      service.category === "laser" ? 0.84 : 0.82,
      service.heroImage?.src
        ? absoluteUrl(service.heroImage.src)
        : undefined,
    ),
  );

  const competenceEntries: Entry[] = competencePages.map((competence) =>
    make(
      `/competenze/${competence.slug}`,
      "weekly",
      competence.intent === "commercial" ? 0.8 : 0.78,
      competence.heroImage?.src
        ? absoluteUrl(competence.heroImage.src)
        : undefined,
    ),
  );

  const protocolEntries: Entry[] = protocolPages.map((protocol) =>
    make(`/protocolli/${protocol.slug}`, "weekly", 0.76),
  );

  const journeyEntries: Entry[] = rebelJourneys.map((journey) =>
    make(`/percorsi/${journey.slug}`, "weekly", journey.world === "liberta" ? 0.91 : 0.88),
  );

  const localEntries: Entry[] = localAreaPages.map((area) =>
    make(
      `/localita/${area.slug}`,
      "weekly",
      area.cluster === "asse-carmagnola"
        ? 0.79
        : area.cluster === "torino-sud"
          ? 0.77
          : 0.75,
    ),
  );

  const entries = [
    ...staticEntries,
    ...serviceEntries,
    ...competenceEntries,
    ...protocolEntries,
    ...journeyEntries,
    ...localEntries,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${
      entry.image
        ? `
    <image:image><image:loc>${escapeXml(entry.image)}</image:loc></image:image>`
        : ""
    }
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
