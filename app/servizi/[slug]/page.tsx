import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  getServiceBySlug,
  servicePages,
  competencePages,
} from "@/lib/seo-content";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return createPageMetadata({
      title: "Servizio non trovato",
      description: "La pagina richiesta non è disponibile.",
      path: "/servizi",
      indexable: false,
    });
  }
  return createPageMetadata({
    title: `${service.name} | Rebel`,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Servizi", path: "/servizi" },
    { name: service.name, path: `/servizi/${service.slug}` },
  ]);
  const serviceSchema = buildServiceSchema(
    service.name,
    service.longDescription,
    `/servizi/${service.slug}`,
  );
  const articleSchema = buildArticleSchema({
    headline: service.name,
    description: service.longDescription,
    path: `/servizi/${service.slug}`,
    keywords: service.keywords,
    section: service.category === "laser" ? "Laser" : "Estetica classica",
  });
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const relatedCompetences = competencePages.filter((competence) =>
    service.relatedCompetenceSlugs.includes(competence.slug),
  );
  const editorialSections = service.editorialSections ?? [];
  const sourceLinks = service.sourceLinks ?? [];
  const siblingServices = servicePages
    .filter((item) => item.slug !== service.slug && item.category === service.category)
    .map((item) => ({
      item,
      score: item.relatedCompetenceSlugs.filter((relatedSlug) =>
        service.relatedCompetenceSlugs.includes(relatedSlug),
      ).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => item);

  return (
    <main
      className={`page-shell page-servizio-detail ${
        service.category === "laser" ? "page-servizio-laser" : "page-servizio-classica"
      }`}
    >
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Servizio"
        title={service.name}
        lead={service.longDescription}
        badge={service.priceHint}
        tone={service.category === "laser" ? "violet" : "gold"}
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2 style={{ marginTop: 0 }}>Benefici principali</h2>
            <ul className="list-clean">
              {service.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contatti" className="button button-primary">
                Prenota consulenza
              </Link>
              <Link href="/listino-estetica-laser" className="button button-secondary">
                Torna al listino
              </Link>
            </div>
          </article>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>FAQ rapide</h2>
            {service.faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Per chi è indicato</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              {service.name} è ideale se vuoi un trattamento concreto, con passaggi
              chiari e obiettivi concreti. In studio valutiamo sempre il tuo
              punto di partenza prima di suggerire frequenza e combinazioni.
            </p>
            <p className="lead">
              Molte clienti arrivano con domande precise: quanto tempo serve, quando
              iniziare, cosa aspettarsi. Ti diamo risposte semplici e un piano
              sostenibile nel tempo.
            </p>
          </article>

          <article className="card">
            <h2 style={{ marginTop: 0 }}>Come si svolge una seduta da Rebel</h2>
            <ol className="list-clean">
              <li>1. Ascolto iniziale e verifica dell&apos;obiettivo.</li>
              <li>2. Trattamento eseguito con protocollo personalizzato.</li>
              <li>3. Indicazioni post-seduta chiare e sensate.</li>
            </ol>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              Il nostro obiettivo non è solo il risultato immediato, ma la continuità
              nel tempo. Per questo ogni seduta si collega sempre alla successiva.
            </p>
          </article>
        </div>
      </section>

      {editorialSections.length > 0 && (
        <section className="section">
          <div className="container split">
            <article className="card glow-card">
              <p className="eyebrow">Da sapere</p>
              <h2 style={{ marginTop: "0.45rem" }}>Dettagli utili, spiegati bene</h2>
              {editorialSections.map((section) => (
                <div key={section.heading} style={{ marginTop: "0.95rem" }}>
                  <h3 style={{ marginTop: 0 }}>{section.heading}</h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`} className="lead" style={{ marginTop: "0.45rem" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </article>
            <aside className="card">
              <h2 style={{ marginTop: 0 }}>Vuoi iniziare con calma?</h2>
              <p className="lead" style={{ marginTop: 0 }}>
                Se hai dubbi o vuoi capire se questo servizio è adatto a te, puoi scriverci e
                ti orientiamo in modo semplice. Preferiamo una scelta chiara a una scelta di fretta.
              </p>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/contatti">
                  Contatti
                </Link>
                <Link className="button button-secondary" href="/listino-estetica-laser">
                  Vedi listino
                </Link>
              </div>
            </aside>
          </div>
        </section>
      )}

      {sourceLinks.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Fonti e riferimenti</h2>
            <p className="lead" style={{ marginTop: "0.45rem", color: "rgba(39,31,56,0.78)" }}>
              Quando ha senso, usiamo fonti pubbliche autorevoli per mantenere il contenuto
              utile, chiaro e senza promesse.
            </p>
            <ul className="editorial-source-list">
              {sourceLinks.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Competenze correlate</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {relatedCompetences.map((competence) => (
              <Link
                key={competence.slug}
                href={`/competenze/${competence.slug}`}
                className="card-light"
              >
                <h3 style={{ marginTop: 0 }}>{competence.title}</h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {competence.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Altri servizi simili</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {siblingServices.map((item) => (
              <Link key={item.slug} href={`/servizi/${item.slug}`} className="card">
                <h3 style={{ marginTop: 0 }}>{item.name}</h3>
                <p className="lead" style={{ marginTop: 0 }}>
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

