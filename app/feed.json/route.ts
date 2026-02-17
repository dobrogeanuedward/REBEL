import { siteConfig } from "@/lib/site-config";
import { competencePages } from "@/lib/seo-content";
import { protocolPages } from "@/lib/protocol-pages";

export const dynamic = "force-static";
export const revalidate = 43200; // refresh twice/day (12h)

function safeIsoDate(value: string) {
  const date = new Date(value);
  const safe = Number.isNaN(date.getTime()) ? new Date() : date;
  return safe.toISOString();
}

export async function GET() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const updated = safeIsoDate(siteConfig.lastUpdated);

  const items = [
    ...competencePages.map((c) => ({
      id: `${baseUrl}/competenze/${c.slug}`,
      url: `${baseUrl}/competenze/${c.slug}`,
      title: c.title,
      summary: c.shortDescription,
      content_text: c.longDescription,
      date_published: updated,
      date_modified: updated,
      tags: [...(c.keywords ?? []), c.intent],
    })),
    ...protocolPages.map((p) => ({
      id: `${baseUrl}/protocolli/${p.slug}`,
      url: `${baseUrl}/protocolli/${p.slug}`,
      title: `${p.name} a Carmagnola`,
      summary: p.shortDescription,
      content_text: p.longDescription,
      date_published: updated,
      date_modified: updated,
      tags: [...(p.keywords ?? []), "protocollo"],
    })),
  ];

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: `${siteConfig.shortName} Carmagnola - Guide e protocolli`,
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    description: siteConfig.description,
    language: "it-IT",
    items,
  };

  return Response.json(feed, {
    headers: {
      "cache-control": "public, max-age=0, s-maxage=43200, stale-while-revalidate=86400",
    },
  });
}

