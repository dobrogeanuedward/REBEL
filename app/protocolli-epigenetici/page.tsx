import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import { competencePages } from "@/lib/seo-content";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildServiceSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Protocolli Epigenetici a Carmagnola: Trattamenti Viso e Corpo Rebel",
  description:
    "Scopri i protocolli epigenetici Rebel a Carmagnola: percorsi viso e corpo su tono, densità, luminosità, drenaggio e rigenerazione.",
  path: "/protocolli-epigenetici",
  openGraphType: "article",
  keywords: [
    "protocolli epigenetici Carmagnola",
    "trattamenti viso avanzati Carmagnola",
    "trattamenti corpo avanzati Carmagnola",
  ],
});

export default function ProtocolliPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Protocolli epigenetici", path: "/protocolli-epigenetici" },
  ]);
  const webPageSchema = buildWebPageSchema({
    name: "Protocolli epigenetici a Carmagnola",
    description:
      "Una panoramica dei protocolli Rebel: viso e corpo, con focus su tono, densità, luminosità e rigenerazione.",
    path: "/protocolli-epigenetici",
  });
  const service = buildServiceSchema(
    "Trattamenti epigenetici viso e corpo",
    "Protocolli personalizzati con attivi funzionali e tecnologia calibrata.",
    "/protocolli-epigenetici",
  );
  const articleSchema = buildArticleSchema({
    headline: "Protocolli epigenetici a Carmagnola",
    description:
      "Cosa sono i protocolli Rebel e come si scelgono: direzione, progressione e lettura iniziale.",
    path: "/protocolli-epigenetici",
    keywords: ["protocolli epigenetici", "estetica epigenetica", "Carmagnola"],
    section: "Protocolli",
  });
  const protocolsSchema = buildItemListSchema({
    name: "Protocolli epigenetici Rebel",
    path: "/protocolli-epigenetici",
    items: protocolCards.map((protocol) => ({
      name: protocol.name,
      path: `/protocolli/${protocol.slug}`,
    })),
  });
  const guideSlugs = [
    "estetica-avanzata-carmagnola",
    "trattamenti-viso-carmagnola",
    "trattamenti-corpo-carmagnola",
    "beauty-routine-carmagnola",
    "pelle-opaca-grana-irregolare-carmagnola",
    "tono-viso-ovale-carmagnola-percorso",
    "contorno-occhi-gonfiore-occhiaie-carmagnola",
  ];
  const guides = guideSlugs
    .map((slug) => competencePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item));
  const guidesSchema =
    guides.length > 0
      ? buildItemListSchema({
          name: "Guide utili per scegliere un protocollo epigenetico",
          path: "/protocolli-epigenetici",
          items: guides.map((guide) => ({
            name: guide.title,
            path: `/competenze/${guide.slug}`,
          })),
        })
      : null;

  return (
    <main className="page-shell page-protocolli">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={service} />
      <JsonLd data={articleSchema} />
      <JsonLd data={protocolsSchema} />
      {guidesSchema ? <JsonLd data={guidesSchema} /> : null}

      <PageHero
        eyebrow="Protocolli Rebel"
        title="Protocolli epigenetici: viso e corpo, con una direzione chiara."
        lead="Ogni protocollo parte da una lettura iniziale e viene adattato a quello che ti serve davvero in questo periodo: tono, luminosità, drenaggio o rigenerazione."
        badge="Attivi • manualità • tecnologia"
        tone="violet"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {protocolCards.map((protocol) => (
              <Link key={protocol.slug} href={`/protocolli/${protocol.slug}`} className="card">
                <h2 style={{ marginTop: 0, fontSize: "1.35rem" }}>{protocol.name}</h2>
                <p className="lead" style={{ marginTop: 0 }}>
                  {protocol.desc}
                </p>
                <p
                  style={{
                    margin: "0.8rem 0 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {protocol.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Come scegliere il protocollo giusto</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Se vuoi leggere 5 minuti prima</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                Apri una scheda: trovi cosa fa il protocollo, per chi è pensato e come si organizza nel tempo (con
                un&apos;idea chiara di progressione).
              </p>
            </article>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Se preferisci parlarne e basta</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                Scrivici su WhatsApp o prenota: facciamo una lettura iniziale e ti diciamo cosa conviene fare per prima
                (e con che ritmo), senza mischiare tutto.
              </p>
            </article>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota lettura iniziale
            </Link>
            <Link className="button button-secondary" href="/listino-estetica-laser">
              Vai al listino completo
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Vedi tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      {guides.length > 0 ? (
        <section className="section">
          <div className="container">
            <p className="eyebrow">Per orientarti</p>
            <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
              Se ti serve chiarezza: parti da queste guide.
            </h2>
            <p className="lead" style={{ marginTop: "0.6rem", maxWidth: "74ch" }}>
              Se sei indecisa tra più protocolli, parti da queste: ti aiutano a chiarire obiettivo, ritmo e primo step
              senza trasformare la skincare in un lavoro.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/competenze/${guide.slug}`} className="card glow-card">
                  <h3 style={{ marginTop: 0 }}>{guide.title}</h3>
                  <p className="lead" style={{ marginTop: 0 }}>
                    {guide.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Prenota lettura iniziale
              </Link>
              <Link className="button button-secondary" href="/competenze">
                Vedi tutte le guide
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}



