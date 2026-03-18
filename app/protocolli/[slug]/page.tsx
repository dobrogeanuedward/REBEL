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
      >
        <div className="hero-meta">
          <span className="hero-pill">Protocollo Rebel</span>
          <span className="hero-pill">Lettura iniziale inclusa</span>
          <span className="hero-pill">Progressione personalizzata</span>
        </div>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link className="button button-primary" href="/contatti">
            Prenota lettura iniziale
          </Link>
          <Link className="button button-secondary" href="/protocolli-epigenetici">
            Vedi tutti i protocolli
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container editorial-layout">
          <article className="card glow-card">
            <p className="eyebrow">Il protocollo</p>
            <h2 style={{ marginTop: "0.45rem" }}>
              Cosa rende {protocol.name} un percorso cosi&apos; mirato
            </h2>
            <div className="keypoints-grid" style={{ marginTop: "1rem" }}>
              {protocol.benefits.map((benefit) => (
                <div key={benefit} className="keypoint-card">
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <div className="protocol-detail-quote">
              <p>
                Ogni seduta prepara la successiva: il risultato cresce con ordine, continuita&apos; e
                una pelle che appare sempre piu&apos; bella.
              </p>
            </div>
          </article>

          <aside className="editorial-aside">
            <div className="inline-cta">
              <div className="inline-cta-head">
                <p className="eyebrow">Prima consulenza</p>
                <span className="inline-cta-badge">Estetica epigenetica</span>
              </div>
              <h2 className="inline-cta-title">Apri il protocollo con una lettura dedicata.</h2>
              <p className="lead mt-sm">
                Il primo incontro individua priorita&apos;, ritmo e intensita&apos; per costruire un
                protocollo davvero adatto alla tua pelle.
              </p>
              <div className="inline-cta-actions">
                <Link className="button button-primary" href="/contatti">
                  Prenota lettura iniziale
                </Link>
                <Link className="button button-secondary" href="/protocolli-epigenetici">
                  Torna ai protocolli
                </Link>
              </div>
            </div>
            <div className="card">
              <h2 style={{ marginTop: 0 }}>Domande frequenti</h2>
              {protocol.faqs.map((faq) => (
                <div key={faq.q} className="faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container editorial-layout">
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

          <aside className="editorial-aside">
            <div className="card-light protocol-detail-note">
              <p className="eyebrow">Il risultato sulla pelle</p>
              <h2 style={{ marginTop: "0.45rem" }}>
                Il protocollo cambia l&apos;aspetto della pelle, non resta solo una seduta in agenda.
              </h2>
              <p className="lead" style={{ marginTop: "0.55rem", color: "rgba(39,31,56,0.78)" }}>
                Luminosita&apos;, tono, densita&apos; e comfort diventano qualita&apos; visibile del viso e del corpo.
              </p>
            </div>
            <div className="card-light">
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
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

