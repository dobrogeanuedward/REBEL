import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { localAreaPages } from "@/lib/local-pages";
import {
  getServiceBySlug,
  servicePages,
  competencePages,
} from "@/lib/seo-content";
import { protocolPages } from "@/lib/protocol-pages";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildServiceSchema,
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
    title: service.name,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
    keywords: service.keywords,
    openGraphType: "article",
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
  const webPageSchema = buildWebPageSchema({
    name: service.name,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
  });
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
  const relatedCompetencesSchema =
    relatedCompetences.length > 0
      ? buildItemListSchema({
          name: `Competenze correlate a ${service.name}`,
          path: `/servizi/${service.slug}`,
          items: relatedCompetences.map((item) => ({
            name: item.title,
            path: `/competenze/${item.slug}`,
          })),
        })
      : null;
  const editorialSections = service.editorialSections ?? [];
  const sourceLinks = service.sourceLinks ?? [];
  const relatedProtocols = (service.relatedProtocolSlugs ?? [])
    .map((protocolSlug) => protocolPages.find((item) => item.slug === protocolSlug))
    .filter((item): item is (typeof protocolPages)[number] => Boolean(item))
    .slice(0, 4);
  const relatedProtocolsSchema =
    relatedProtocols.length > 0
      ? buildItemListSchema({
          name: `Protocolli epigenetici utili dopo ${service.name}`,
          path: `/servizi/${service.slug}`,
          items: relatedProtocols.map((protocol) => ({
            name: protocol.name,
            path: `/protocolli/${protocol.slug}`,
          })),
        })
      : null;
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
  const siblingServicesSchema =
    siblingServices.length > 0
      ? buildItemListSchema({
          name: `Altri servizi simili a ${service.name}`,
          path: `/servizi/${service.slug}`,
          items: siblingServices.map((item) => ({
            name: item.name,
            path: `/servizi/${item.slug}`,
          })),
        })
      : null;

  const featuredAreas = localAreaPages.filter((area) => area.cluster === "asse-carmagnola").slice(0, 4);
  const featuredAreasSchema =
    featuredAreas.length > 0
      ? buildItemListSchema({
          name: `Localita vicine per ${service.name}`,
          path: `/servizi/${service.slug}`,
          items: featuredAreas.map((area) => ({
            name: area.city,
            path: `/localita/${area.slug}`,
          })),
        })
      : null;

  return (
    <main
      className={`page-shell page-servizio-detail ${
        service.category === "laser" ? "page-servizio-laser" : "page-servizio-classica"
      }`}
    >
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      {relatedCompetencesSchema ? <JsonLd data={relatedCompetencesSchema} /> : null}
      {relatedProtocolsSchema ? <JsonLd data={relatedProtocolsSchema} /> : null}
      {siblingServicesSchema ? <JsonLd data={siblingServicesSchema} /> : null}
      {featuredAreasSchema ? <JsonLd data={featuredAreasSchema} /> : null}
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
            <h2 style={{ marginTop: 0 }}>Benefici: cosa puoi notare con {service.name}</h2>
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
            <h2 style={{ marginTop: 0 }}>Domande frequenti su {service.name}</h2>
            {service.faqs.map((faq) => (
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
              <p className="eyebrow">Da sapere</p>
              <h2 style={{ marginTop: "0.45rem" }}>Prima di prenotare {service.name}: qualche dettaglio utile</h2>
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
                Se sei indecisa o hai una domanda prima di prenotare, scrivici due righe (zona/obiettivo/tempi).
                Ti diciamo noi se {service.name} ha senso adesso o se conviene partire da altro.
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
          <h2 className="page-title">Guide utili se stai valutando {service.name}</h2>
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

      {relatedProtocols.length > 0 ? (
        <section className="section">
          <div className="container">
            <h2 className="page-title">Se vuoi fare un passo più avanzato</h2>
            <p className="lead" style={{ marginTop: "0.5rem", maxWidth: "74ch" }}>
              Alcune persone partono da {service.name} e poi scelgono un protocollo più completo.
              Qui trovi due o tre opzioni sensate per continuare in modo ordinato.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {relatedProtocols.map((protocol) => (
                <Link key={protocol.slug} href={`/protocolli/${protocol.slug}`} className="card glow-card">
                  <h3 style={{ marginTop: 0 }}>{protocol.name}</h3>
                  <p className="lead" style={{ marginTop: 0 }}>
                    {protocol.shortDescription}
                  </p>
                  <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>{protocol.price}</strong>
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
          <h2 className="page-title">Se ti interessa {service.name}, guarda anche</h2>
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

      {featuredAreas.length > 0 ? (
        <section className="section section-light">
          <div className="container">
            <h2 className="page-title">Se arrivi da fuori: localita vicine e percorsi</h2>
            <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
              Molte clienti arrivano anche dai comuni vicini. Se ti e&apos; comodo, qui trovi le pagine dedicate:
              hanno un focus diverso (laser, viso/corpo, protocolli) e ti aiutano a scegliere il primo passo.
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
                Contatti e mappa
              </Link>
              <Link className="button button-secondary" href="/localita">
                Vedi tutte le localita
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

