import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getLocalAreaBySlug, localAreaPages } from "@/lib/local-pages";
import { buildArticleSchema, buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

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
      title: "Localita non trovata",
      description: "La pagina richiesta non e disponibile.",
      path: "/localita",
      indexable: false,
    });
  }
  return createPageMetadata({
    title: area.title,
    description: area.description,
    path: `/localita/${area.slug}`,
    keywords: area.keywords,
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
    { name: "Localita", path: "/localita" },
    { name: area.city, path: `/localita/${area.slug}` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Perche scegliere Rebel se arrivo da ${area.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${area.city} rientra nelle aree servite di Rebel: puoi accedere a percorsi viso, corpo e laser con approccio personalizzato.`,
        },
      },
      {
        "@type": "Question",
        name: "Come prenoto un primo appuntamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puoi prenotare rapidamente via WhatsApp o telefono dalla pagina contatti.",
        },
      },
    ],
  };
  const articleSchema = buildArticleSchema({
    headline: area.title,
    description: area.description,
    path: `/localita/${area.slug}`,
    keywords: area.keywords,
    section: "Aree servite",
  });

  return (
    <main className="page-shell page-localita-detail">
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
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
            <h2 style={{ marginTop: 0 }}>Perché molte clienti scelgono Rebel</h2>
            <ul className="list-clean">
              {area.whyRebel.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Prossimo passo consigliato</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se stai confrontando più centri estetici nella zona, la scelta migliore
              è partire da una lettura iniziale seria e capire quale percorso ha
              davvero senso per te.
            </p>
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
            </div>
          </aside>
        </div>
      </section>

      {relatedAreas.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Comuni vicini già serviti</h2>
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

