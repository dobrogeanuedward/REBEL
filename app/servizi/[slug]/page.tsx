import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialSection } from "@/components/editorial-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { InlineCTA } from "@/components/inline-cta";
import { JsonLd } from "@/components/json-ld";
import { KeyPointsGrid } from "@/components/key-points-grid";
import { PageHero } from "@/components/page-hero";
import { TableOfContents } from "@/components/table-of-contents";
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
import { siteConfig } from "@/lib/site-config";

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
  const fallbackImage =
    service.category === "laser"
      ? "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public"
      : "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public";
  return createPageMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
    keywords: service.keywords,
    openGraphType: "article",
    image: service.heroImage?.src ?? fallbackImage,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const toWords = (value: string) => value.trim().split(/\s+/).filter(Boolean);
  const readingMinutes = Math.max(
    2,
    Math.round(
      toWords(
        [
          service.longDescription,
          service.shortDescription,
          service.benefits.join(" "),
          service.faqs.map((f) => `${f.q} ${f.a}`).join(" "),
          (service.editorialSections ?? []).flatMap((s) => s.paragraphs).join(" "),
        ].join(" "),
      ).length / 190,
    ),
  );

  const slugifyId = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[’']/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");

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
    image: service.heroImage?.src,
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
          name: `Località vicine per ${service.name}`,
          path: `/servizi/${service.slug}`,
          items: featuredAreas.map((area) => ({
            name: area.city,
            path: `/localita/${area.slug}`,
          })),
        })
      : null;

  const tocItems = [
    { id: "benefici", label: "Benefici" },
    ...(editorialSections.length > 0 ? [{ id: "dettagli", label: "Dettagli utili" }] : []),
    { id: "faq", label: "Domande frequenti" },
    { id: "guide", label: "Guide utili" },
    ...(sourceLinks.length > 0 ? [{ id: "fonti", label: "Fonti e riferimenti" }] : []),
    ...(relatedProtocols.length > 0 ? [{ id: "protocolli", label: "Passo più avanzato" }] : []),
    { id: "anche", label: "Guarda anche" },
    ...(featuredAreas.length > 0 ? [{ id: "localita", label: "Località vicine" }] : []),
  ];

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
      >
        <div className="hero-meta">
          <span className="hero-pill">{service.category === "laser" ? "Laser" : "Estetica classica"}</span>
          <span className="hero-pill">{readingMinutes} min lettura</span>
          <span className="hero-pill">Aggiornato {siteConfig.lastUpdated}</span>
        </div>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/contatti" className="button button-primary">
            Prenota consulenza
          </Link>
          <a className="button button-secondary" href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link href="/listino-estetica-laser" className="button button-secondary">
            Listino
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container editorial-layout">
          <article id="benefici" className="card glow-card">
            <p className="eyebrow">Cosa puoi notare</p>
            <h2 style={{ marginTop: "0.45rem" }}>Benefici di {service.name}</h2>
            <p className="lead" style={{ marginTop: "0.6rem" }}>
              {service.shortDescription}
            </p>
            <KeyPointsGrid points={service.benefits} />
          </article>
          <aside className="editorial-aside">
            <TableOfContents items={tocItems} />
            <InlineCTA
              title="Vuoi iniziare con calma?"
              lead={`Scrivici due righe (zona/obiettivo/tempi). Ti diciamo se ${service.name} ha senso adesso o se conviene partire da altro.`}
              primaryLabel="Contatti"
              primaryHref="/contatti"
              secondaryLabel="Vedi servizi"
              secondaryHref="/servizi"
            />
          </aside>
        </div>
      </section>

      {editorialSections.length > 0 && (
        <section id="dettagli" className="section section-light">
          <div className="container editorial-layout">
            <article className="card-light">
              <p className="eyebrow">Da sapere</p>
              <h2 style={{ marginTop: "0.45rem" }}>
                Prima di prenotare {service.name}: dettagli utili
              </h2>
              {editorialSections.map((section) => (
                <EditorialSection
                  key={section.heading}
                  id={slugifyId(section.heading)}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                />
              ))}
            </article>
            <aside className="editorial-aside">
              <InlineCTA
                eyebrow="Domanda semplice, risposta chiara"
                title="Vuoi un consiglio rapido?"
                lead="Scrivici: ti diciamo se il primo passo è questo servizio o se conviene partire da altro (senza giri di parole)."
                primaryLabel="Contatti"
                primaryHref="/contatti"
                secondaryLabel="Listino"
                secondaryHref="/listino-estetica-laser"
              />
            </aside>
          </div>
        </section>
      )}

      <section id="faq" className="section">
        <div className="container">
          <FAQAccordion title={`Domande frequenti su ${service.name}`} items={service.faqs} />
        </div>
      </section>

      {sourceLinks.length > 0 && (
        <section id="fonti" className="section section-light">
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

      <section id="guide" className="section section-light">
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
                <p className="lead" style={{ margin: 0, color: "rgba(39,31,56,0.78)" }}>
                  {competence.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedProtocols.length > 0 ? (
        <section id="protocolli" className="section">
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

      <section id="anche" className="section">
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
        <section id="localita" className="section section-light">
          <div className="container">
            <h2 className="page-title">Se arrivi da fuori: località vicine e percorsi</h2>
            <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
              Molte clienti arrivano anche dai comuni vicini. Se ti è comodo, qui trovi le pagine dedicate: hanno un
              focus diverso (laser, viso/corpo, protocolli) e ti aiutano a scegliere il primo passo.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {featuredAreas.map((area) => (
                <Link key={area.slug} href={`/localita/${area.slug}`} className="card-light">
                  <h3 style={{ marginTop: 0 }}>{area.city}</h3>
                  <p className="lead" style={{ margin: 0, color: "rgba(39,31,56,0.78)" }}>
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
                Vedi tutte le località
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

