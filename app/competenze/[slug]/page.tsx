import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  competencePages,
  getCompetenceBySlug,
  servicePages,
} from "@/lib/seo-content";
import { localAreaPages } from "@/lib/local-pages";
import { protocolPages } from "@/lib/protocol-pages";
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
  return competencePages.map((competence) => ({ slug: competence.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competence = getCompetenceBySlug(slug);
  if (!competence) {
    return createPageMetadata({
      title: "Competenza non trovata",
      description: "La pagina richiesta non è disponibile.",
      path: "/competenze",
      indexable: false,
    });
  }
  return createPageMetadata({
    title: competence.title,
    description: competence.shortDescription,
    path: `/competenze/${competence.slug}`,
    keywords: competence.keywords,
    openGraphType: "article",
    image: competence.heroImage?.src,
  });
}

export default async function CompetenceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competence = getCompetenceBySlug(slug);
  if (!competence) notFound();
  const compactTitle = competence.title.replace(/\s+a Carmagnola$/i, "").trim();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Competenze", path: "/competenze" },
    { name: competence.title, path: `/competenze/${competence.slug}` },
  ]);
  const webPageSchema = buildWebPageSchema({
    name: competence.title,
    description: competence.shortDescription,
    path: `/competenze/${competence.slug}`,
  });
  const articleSchema = buildArticleSchema({
    headline: competence.title,
    description: competence.longDescription,
    path: `/competenze/${competence.slug}`,
    keywords: competence.keywords,
    section: competence.intent === "commercial" ? "Guide commerciali" : "Guide informative",
    image: competence.heroImage?.src,
  });
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competence.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const relatedServices = servicePages.filter((service) =>
    competence.relatedServiceSlugs.includes(service.slug),
  );
  const relatedServicesSchema =
    relatedServices.length > 0
      ? buildItemListSchema({
          name: `Servizi consigliati per ${competence.title}`,
          path: `/competenze/${competence.slug}`,
          items: relatedServices.map((service) => ({
            name: service.name,
            path: `/servizi/${service.slug}`,
          })),
        })
      : null;
  const editorialSections = competence.editorialSections ?? [];
  const sourceLinks = competence.sourceLinks ?? [];
  const relatedProtocols = (competence.relatedProtocolSlugs ?? [])
    .map((protocolSlug) => protocolPages.find((item) => item.slug === protocolSlug))
    .filter((item): item is (typeof protocolPages)[number] => Boolean(item))
    .slice(0, 6);
  const relatedProtocolsSchema =
    relatedProtocols.length > 0
      ? buildItemListSchema({
          name: `Protocolli epigenetici utili per ${competence.title}`,
          path: `/competenze/${competence.slug}`,
          items: relatedProtocols.map((protocol) => ({
            name: protocol.name,
            path: `/protocolli/${protocol.slug}`,
          })),
        })
      : null;
  const siblingCompetences = competencePages
    .filter((item) => item.slug !== competence.slug)
    .map((item) => ({
      item,
      score:
        (item.intent === competence.intent ? 3 : 0) +
        item.relatedServiceSlugs.filter((relatedSlug) =>
          competence.relatedServiceSlugs.includes(relatedSlug),
        ).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => item);
  const curatedCompetences = (competence.relatedCompetenceSlugs ?? [])
    .map((relatedSlug) => competencePages.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item))
    .filter((item) => item.slug !== competence.slug)
    .slice(0, 6);
  const relatedCompetences = curatedCompetences.length > 0 ? curatedCompetences : siblingCompetences;
  const relatedCompetencesSchema =
    relatedCompetences.length > 0
      ? buildItemListSchema({
          name: `Guide correlate a ${competence.title}`,
          path: `/competenze/${competence.slug}`,
          items: relatedCompetences.map((item) => ({
            name: item.title,
            path: `/competenze/${item.slug}`,
          })),
        })
      : null;

  const featuredAreas = localAreaPages.filter((area) => area.cluster === "asse-carmagnola").slice(0, 4);
  const featuredAreasSchema =
    featuredAreas.length > 0
      ? buildItemListSchema({
          name: `Località vicine per ${competence.title}`,
          path: `/competenze/${competence.slug}`,
          items: featuredAreas.map((area) => ({
            name: area.city,
            path: `/localita/${area.slug}`,
          })),
        })
      : null;

  return (
    <main
      className={`page-shell page-competenza-detail ${
        competence.intent === "commercial"
          ? "page-competenza-commercial"
          : "page-competenza-informational"
      }`}
    >
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      {relatedServicesSchema ? <JsonLd data={relatedServicesSchema} /> : null}
      {relatedCompetencesSchema ? <JsonLd data={relatedCompetencesSchema} /> : null}
      {relatedProtocolsSchema ? <JsonLd data={relatedProtocolsSchema} /> : null}
      {featuredAreasSchema ? <JsonLd data={featuredAreasSchema} /> : null}
      <PageHero
        eyebrow="Approfondimento"
        title={competence.title}
        lead={competence.longDescription}
        badge={competence.localAngle}
        tone={competence.intent === "commercial" ? "rose" : "ocean"}
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2 style={{ marginTop: 0 }}>
              {competence.intent === "commercial" ? `Prima di prenotare: ${compactTitle}` : `Guida pratica: ${compactTitle}`}
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              {competence.localAngle}
            </p>
            <h3 style={{ marginBottom: "0.5rem" }}>Punti chiave (pratici)</h3>
            <ul className="list-clean">
              {competence.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Domande frequenti su {competence.title}</h2>
            {competence.faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {editorialSections.length > 0 && (
        <section className="section">
          <div className="container split">
            <article className="card glow-card">
              <p className="eyebrow">Dal nostro studio</p>
              <h2 style={{ marginTop: "0.45rem" }}>Su {competence.title}: cosa conta davvero</h2>
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
              {competence.heroImage ? (
                <>
                  <div className="editorial-cover">
                    <Image
                      src={competence.heroImage.src}
                      alt={competence.heroImage.alt}
                      width={1600}
                      height={900}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <p className="lead" style={{ marginTop: "0.8rem", marginBottom: 0 }}>
                    Illustrazione Rebel: {competence.heroImage.alt}.
                  </p>
                </>
              ) : (
                <>
                  <h2 style={{ marginTop: 0 }}>In breve</h2>
                  <p className="lead" style={{ marginTop: 0 }}>
                    Una guida chiara su {competence.title}: orientamento pratico e criteri concreti
                    da usare ogni giorno.
                  </p>
                </>
              )}
            </aside>
          </div>
        </section>
      )}

      {sourceLinks.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Fonti e riferimenti</h2>
            <p className="lead" style={{ marginTop: "0.45rem", color: "rgba(39,31,56,0.78)" }}>
              Se vuoi approfondire, qui trovi le fonti citate (pubbliche e verificabili).
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
          <h2 className="page-title">Servizi che si abbinano a {competence.title}</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {relatedServices.map((service) => (
              <Link key={service.slug} href={`/servizi/${service.slug}`} className="card-light">
                <h3 style={{ marginTop: 0 }}>{service.name}</h3>
                <p
                  style={{
                    margin: "0.35rem 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota consulenza
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Vai ai servizi
            </Link>
          </div>
        </div>
      </section>

      {relatedProtocols.length > 0 ? (
        <section className="section">
          <div className="container">
            <h2 className="page-title">Se vuoi fare un passo più avanzato</h2>
            <p className="lead" style={{ marginTop: "0.5rem", maxWidth: "74ch" }}>
              Questi protocolli sono spesso sensati quando l&apos;obiettivo è una progressione (non una singola seduta).
              Se sei indecisa, scrivici: ti diciamo qual è il primo step più pulito per la tua pelle.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {relatedProtocols.map((protocol) => (
                <Link key={protocol.slug} href={`/protocolli/${protocol.slug}`} className="card glow-card">
                  <h3 style={{ marginTop: 0 }}>{protocol.name}</h3>
                  <p className="lead" style={{ marginTop: 0 }}>
                    {protocol.shortDescription}
                  </p>
                  <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {protocol.price}
                  </strong>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Chiedi un consiglio
              </Link>
              <Link className="button button-secondary" href="/protocolli-epigenetici">
                Vedi tutti i protocolli
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <h2 className="page-title">
            {curatedCompetences.length > 0 ? "Guide correlate" : "Altre guide simili"}
          </h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {relatedCompetences.map((item) => (
              <Link key={item.slug} href={`/competenze/${item.slug}`} className="card">
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="lead" style={{ marginTop: 0 }}>
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featuredAreas.length > 0 ? (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Se arrivi dai comuni vicini</h2>
            <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
              Per ogni località abbiamo una pagina dedicata con un focus diverso. Se vuoi orientarti anche in base alla tua
              zona, qui trovi alcune località vicine a Carmagnola.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {featuredAreas.map((area) => (
                <Link key={area.slug} href={`/localita/${area.slug}`} className="card-light">
                  <h3 style={{ marginTop: 0 }}>{area.city}</h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                    {area.description}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Contatti
              </Link>
              <Link className="button button-secondary" href="/localita">
                Vedi tutte le località
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

