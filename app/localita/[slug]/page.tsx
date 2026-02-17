import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import type { LocalAreaPage } from "@/lib/local-pages";
import { getLocalAreaBySlug, localAreaPages } from "@/lib/local-pages";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return localAreaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getLocalAreaBySlug(slug);
  if (!area) {
    return createPageMetadata({
      title: "Località non trovata",
      description: "La pagina richiesta non è disponibile.",
      path: "/localita",
      indexable: false,
    });
  }
  return createPageMetadata({
    title: area.title,
    description: area.description,
    path: `/localita/${area.slug}`,
    keywords: area.keywords,
    openGraphType: "article",
  });
}

export default async function LocalAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getLocalAreaBySlug(slug);
  if (!area) notFound();
  const relatedAreas = localAreaPages
    .filter((item) => item.slug !== area.slug && item.cluster === area.cluster)
    .slice(0, 6);

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Località", path: "/localita" },
    { name: area.city, path: `/localita/${area.slug}` },
  ]);
  const webPageSchema = buildWebPageSchema({
    name: area.title,
    description: area.description,
    path: `/localita/${area.slug}`,
  });

  // Keep structured data aligned with what the user can actually read on the page.
  const pageFaqs = area.faqs ?? [];
  const faqSchema =
    pageFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pageFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;
  const articleSchema = buildArticleSchema({
    headline: area.title,
    description: area.description,
    path: `/localita/${area.slug}`,
    keywords: area.keywords,
    section: "Aree servite",
  });
  const focusLinks = area.focus?.links ?? [];
  type FocusLink = NonNullable<NonNullable<LocalAreaPage["focus"]>["links"]>[number];
  const isLaserLink = (href: string) =>
    href.includes("/epilazione-laser") || (href.startsWith("/servizi/") && href.includes("laser"));
  const isAdvancedLink = (href: string) =>
    href === "/protocolli-epigenetici" || href.includes("/competenze/estetica-avanzata");
  const isClassicServiceLink = (href: string) =>
    href.startsWith("/servizi/") && !href.includes("laser") && !href.includes("epilazione-laser");

  const pickFirst = (predicate: (href: string) => boolean) =>
    focusLinks.find((link) => predicate(link.href));
  const suggestedLinksRaw: Array<FocusLink | undefined> = [
    pickFirst(isLaserLink),
    pickFirst(isAdvancedLink),
    pickFirst(isClassicServiceLink),
  ];
  const suggestedLinksFiltered: FocusLink[] = suggestedLinksRaw.filter(
    (item): item is FocusLink => Boolean(item),
  );
  const suggestedLinks = Array.from(
    new Map(suggestedLinksFiltered.map((item) => [item.href, item])).values(),
  );
  const toAbsoluteUrl = (href: string) =>
    href.startsWith("http") ? href : `${siteConfig.siteUrl}${href.startsWith("/") ? href : `/${href}`}`;
  const focusLinksSchema =
    focusLinks.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Link utili per ${area.city}`,
          itemListElement: focusLinks.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            url: toAbsoluteUrl(item.href),
          })),
        }
      : null;

  return (
    <main className="page-shell page-localita-detail">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={articleSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {focusLinksSchema ? <JsonLd data={focusLinksSchema} /> : null}
      <PageHero
        eyebrow="Rebel vicino a te"
        title={area.title}
        lead={area.intro}
        badge={`${area.city} e zone limitrofe`}
        tone="rose"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Perché chi arriva da {area.city} sceglie Rebel</h2>
            <ul className="list-clean">
              {area.whyRebel.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Se arrivi da {area.city}: da dove partire</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se vieni da {area.city} e vuoi partire con un percorso fatto bene, scegliamo insieme
              una priorità (laser, viso o corpo) e impostiamo ritmo e obiettivo. Se vuoi, da qui
              puoi dare uno sguardo ai passaggi più richiesti da chi arriva dalla tua zona.
            </p>
            {suggestedLinks.length > 0 ? (
              <div style={{ marginTop: "0.85rem", display: "grid", gap: "0.55rem" }}>
                {suggestedLinks.map((item) => (
                  <Link key={item.href} className="link-card" href={item.href}>
                    <span className="link-card-content">
                      <span className="link-card-title">{item.label}</span>
                      {item.description ? (
                        <small className="link-card-desc">{item.description}</small>
                      ) : null}
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
              }}
            >
              <Link className="button button-primary" href="/contatti">
                Prenota ora
              </Link>
              <Link className="button button-secondary" href="/servizi">
                Vedi servizi
              </Link>
              <a
                className="button button-secondary"
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Scrivi su WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {area.directions && (
        <section className="section section-light">
          <div className="container split">
            <article className="card-light">
              <h2 style={{ marginTop: 0 }}>{area.directions.heading}</h2>
              {area.directions.paragraphs.map((paragraph, index) => (
                <p
                  key={`${area.slug}-directions-${index}`}
                  style={{
                    marginTop: index === 0 ? 0 : "0.75rem",
                    marginBottom: 0,
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.7,
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                <a
                  className="button button-secondary"
                  href={area.directions.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri percorso su Google Maps
                </a>
                <Link className="button button-secondary" href="/contatti">
                  Contatti
                </Link>
              </div>
            </article>
            <aside className="card-light">
              <h2 style={{ marginTop: 0 }}>Percorso sulla mappa</h2>
              <div className="map-wrap" style={{ marginTop: "0.85rem" }}>
                <iframe
                  src={
                    area.directions.embedUrl ??
                    "https://www.google.com/maps?q=Viale+Barbaroux+20,+Carmagnola&output=embed"
                  }
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa percorso verso Rebel da ${area.city}`}
                />
              </div>
            </aside>
          </div>
        </section>
      )}

      {area.focus && (
        <section className="section">
          <div className="container split">
            <article className="card glow-card">
              <p className="eyebrow">Approfondimento locale</p>
              <h2 style={{ marginTop: "0.45rem" }}>{area.focus.heading}</h2>
              {area.focus.paragraphs.map((paragraph, index) => (
                <p key={`${area.slug}-focus-${index}`} className="lead" style={{ marginTop: "0.55rem" }}>
                  {paragraph}
                </p>
              ))}
            </article>
            {area.focus.links && area.focus.links.length > 0 && (
              <aside className="card">
                <h2 style={{ marginTop: 0 }}>Link utili</h2>
                <div style={{ display: "grid", gap: "0.75rem", marginTop: "0.9rem" }}>
                  {area.focus.links.map((item) => {
                    const isExternal = item.external || item.href.startsWith("http");
                    const content = (
                      <span className="link-card-content">
                        <span className="link-card-title">{item.label}</span>
                        {item.description ? (
                          <small className="link-card-desc">{item.description}</small>
                        ) : null}
                      </span>
                    );
                    if (isExternal) {
                      return (
                        <a
                          key={item.href}
                          className="link-card"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {content}
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={item.href}
                        className="link-card"
                        href={item.href}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </aside>
            )}
          </div>
        </section>
      )}

      {pageFaqs.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Domande frequenti (da {area.city})</h2>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {pageFaqs.map((faq) => (
                <article key={faq.q} className="card-light">
                  <h3 style={{ marginTop: 0 }}>{faq.q}</h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-inter), sans-serif",
                      lineHeight: 1.7,
                      color: "rgba(39,31,56,0.78)",
                    }}
                  >
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedAreas.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Comuni vicini a {area.city}</h2>
            <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)" }}>
              Se vuoi, puoi vedere anche le pagine dedicate ai comuni più vicini a {area.city}.
            </p>
            <div className="grid grid-3" style={{ marginTop: "0.9rem" }}>
              {relatedAreas.map((item) => (
                <Link key={item.slug} href={`/localita/${item.slug}`} className="card-light">
                  <h3 style={{ marginTop: 0 }}>{item.city}</h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-inter), sans-serif",
                      color: "rgba(39,31,56,0.78)",
                    }}
                  >
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

