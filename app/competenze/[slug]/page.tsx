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
  });
}

export default async function CompetenceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competence = getCompetenceBySlug(slug);
  if (!competence) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Competenze", path: "/competenze" },
    { name: competence.title, path: `/competenze/${competence.slug}` },
  ]);
  const serviceSchema = buildServiceSchema(
    competence.title,
    competence.longDescription,
    `/competenze/${competence.slug}`,
  );
  const articleSchema = buildArticleSchema({
    headline: competence.title,
    description: competence.longDescription,
    path: `/competenze/${competence.slug}`,
    keywords: competence.keywords,
    section: competence.intent === "commercial" ? "Guide commerciali" : "Guide informative",
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
  const editorialSections = competence.editorialSections ?? [];
  const sourceLinks = competence.sourceLinks ?? [];
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

  return (
    <main
      className={`page-shell page-competenza-detail ${
        competence.intent === "commercial"
          ? "page-competenza-commercial"
          : "page-competenza-informational"
      }`}
    >
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
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
            <h2 style={{ marginTop: 0 }}>Perche e rilevante a Carmagnola</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              {competence.localAngle}
            </p>
            <h3 style={{ marginBottom: "0.5rem" }}>Benefici principali</h3>
            <ul className="list-clean">
              {competence.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>FAQ</h2>
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
              <h2 style={{ marginTop: "0.45rem" }}>Cosa conta davvero, spiegato bene</h2>
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
                    Un&apos;immagine in stile Rebel per accompagnare la lettura e rendere
                    la pagina più piacevole.
                  </p>
                </>
              ) : (
                <>
                  <h2 style={{ marginTop: 0 }}>In breve</h2>
                  <p className="lead" style={{ marginTop: 0 }}>
                    Linguaggio naturale, orientamento pratico e criteri concreti
                    da usare nella vita reale.
                  </p>
                </>
              )}
            </aside>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Cosa vediamo ogni giorno in studio</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Su questo tema ci confrontiamo spesso con clienti che arrivano da
              Carmagnola e dai comuni vicini. Quasi sempre il bisogno è lo stesso:
              trovare un percorso serio, comprensibile e coerente con la vita reale.
            </p>
            <p className="lead">
              Per questo preferiamo spiegarti subito cosa possiamo fare, in quanto
              tempo e con quale intensità. Ti accompagniamo con obiettivi concreti
              e una visione chiara.
            </p>
          </article>

          <article className="card">
            <h2 style={{ marginTop: 0 }}>Errori comuni da evitare</h2>
            <ul className="list-clean">
              <li>- cambiare percorso troppo spesso e perdere continuità</li>
              <li>- aspettarsi tutto in una singola seduta</li>
              <li>- scegliere solo in base al prezzo</li>
              <li>- trascurare mantenimento e routine a casa</li>
            </ul>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              Se vuoi, al primo incontro costruiamo insieme una tabella semplice:
              obiettivo, tempi, frequenza e mantenimento.
            </p>
          </article>
        </div>
      </section>

      {sourceLinks.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Fonti e riferimenti</h2>
            <p className="lead" style={{ marginTop: "0.45rem", color: "rgba(39,31,56,0.78)" }}>
              In questi editoriali usiamo fonti pubbliche autorevoli per mantenere
              il contenuto utile, verificabile e senza promesse irreali.
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
          <h2 className="page-title">Servizi consigliati</h2>
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

      <section className="section">
        <div className="container">
          <h2 className="page-title">Altre competenze</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {siblingCompetences.map((item) => (
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
    </main>
  );
}

