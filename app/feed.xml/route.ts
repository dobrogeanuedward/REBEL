import { siteConfig } from "@/lib/site-config";
import { competencePages } from "@/lib/seo-content";
import { protocolPages } from "@/lib/protocol-pages";

export const dynamic = "force-static";
export const revalidate = 43200; // refresh twice/day (12h)

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc2822Date(isoLike: string) {
  const date = new Date(isoLike);
  // Fallback if siteConfig.lastUpdated isn't parseable.
  const safe = Number.isNaN(date.getTime()) ? new Date() : date;
  return safe.toUTCString();
}

export async function GET() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const feedUrl = `${baseUrl}/feed.xml`;
  const lastBuildDate = toRfc2822Date(siteConfig.lastUpdated);

  const items = [
    ...competencePages.map((c) => ({
      title: c.title,
      url: `${baseUrl}/competenze/${c.slug}`,
      description: c.shortDescription,
      category: c.intent === "commercial" ? "Guida commerciale" : "Guida informativa",
    })),
    ...protocolPages.map((p) => ({
      title: `${p.name} a Carmagnola`,
      url: `${baseUrl}/protocolli/${p.slug}`,
      description: p.shortDescription,
      category: "Protocollo epigenetico",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.shortName} Carmagnola - Guide e protocolli`)}</title>
    <link>${escapeXml(baseUrl)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(siteConfig.description)}</description>
    <language>it-IT</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <pubDate>${escapeXml(lastBuildDate)}</pubDate>
    </item>`,
      )
      .join("")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      // Cache on the edge, but let it refresh regularly.
      "cache-control": "public, max-age=0, s-maxage=43200, stale-while-revalidate=86400",
    },
  });
}

