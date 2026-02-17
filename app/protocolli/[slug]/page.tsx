import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getProtocolBySlug, protocolPages } from "@/lib/protocol-pages";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return protocolPages.map((protocol) => ({ slug: protocol.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);
  if (!protocol) {
    return createPageMetadata({
      title: "Protocollo non trovato",
      description: "La pagina richiesta non è disponibile.",
      path: "/protocolli-epigenetici",
      indexable: false,
    });
  }
  return createPageMetadata({
    title: `${protocol.name} a Carmagnola`,
    description: protocol.shortDescription,
    path: `/protocolli/${protocol.slug}`,
    keywords: protocol.keywords,
    openGraphType: "article",
  });
}

export default async function ProtocolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);
  if (!protocol) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Protocolli epigenetici", path: "/protocolli-epigenetici" },
    { name: protocol.name, path: `/protocolli/${protocol.slug}` },
  ]);

  const webPageSchema = buildWebPageSchema({
    name: `${protocol.name} a Carmagnola`,
    description: protocol.shortDescription,
    path: `/protocolli/${protocol.slug}`,
  });

  const articleSchema = buildArticleSchema({
    headline: `${protocol.name} a Carmagnola`,
    description: protocol.longDescription,
    path: `/protocolli/${protocol.slug}`,
    keywords: protocol.keywords,
    section: "Protocolli",
  });

  const faqSchema =
    protocol.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: protocol.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const relatedLinksSchema =
    protocol.relatedLinks.length > 0
      ? buildItemListSchema({
          name: `Link utili per ${protocol.name}`,
          path: `/protocolli/${protocol.slug}`,
          items: protocol.relatedLinks
            .filter((item) => item.href.startsWith("/"))
            .map((item) => ({ name: item.label, path: item.href })),
        })
      : null;

  return (
    <main className="page-shell page-protocollo-detail">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={articleSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {relatedLinksSchema ? <JsonLd data={relatedLinksSchema} /> : null}

      <PageHero
        eyebrow="Protocollo epigenetico"
        title={`${protocol.name} a Carmagnola`}
        lead={protocol.longDescription}
        badge={protocol.price}
        tone="violet"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2 style={{ marginTop: 0 }}>Cosa puoi aspettarti</h2>
            <ul className="list-clean">
              {protocol.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Prenota lettura iniziale
              </Link>
              <Link className="button button-secondary" href="/protocolli-epigenetici">
                Torna ai protocolli
              </Link>
            </div>
          </article>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Domande frequenti</h2>
            {protocol.faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <article className="card-light">
            <h2 style={{ marginTop: 0 }}>Come lo impostiamo in studio</h2>
            {protocol.editorialSections.map((section) => (
              <div key={section.heading} style={{ marginTop: "0.9rem" }}>
                <h3 style={{ marginTop: 0 }}>{section.heading}</h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-${index}`}
                    style={{
                      marginTop: index === 0 ? "0.45rem" : "0.65rem",
                      marginBottom: 0,
                      fontFamily: "var(--font-inter), sans-serif",
                      lineHeight: 1.7,
                      color: "rgba(39,31,56,0.78)",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <aside className="card-light">
            <h2 style={{ marginTop: 0 }}>Link utili</h2>
            <div style={{ display: "grid", gap: "0.75rem", marginTop: "0.9rem" }}>
              {protocol.relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="link-card">
                  <span className="link-card-content">
                    <span className="link-card-title">{item.label}</span>
                    {item.description ? (
                      <small className="link-card-desc">{item.description}</small>
                    ) : null}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

