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
    "Scopri i protocolli epigenetici Rebel a Carmagnola: trattamenti viso e corpo per glow, tono, densita', drenaggio e bellezza progressiva.",
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
      "Una panoramica dei protocolli Rebel: viso e corpo, con focus su glow, tono, densita' e rigenerazione.",
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
      "Cosa sono i protocolli Rebel e come si scelgono: glow, progressione e lettura iniziale.",
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
        title="Protocolli epigenetici per una pelle piu' luminosa, tonica e viva."
        lead="Ogni protocollo apre una bellezza progressiva con lettura iniziale, attivi epigenetici, manualita' e tecnologia mirata su viso e corpo."
        badge="Glow • tono • rigenerazione"
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
          <h2 className="page-title">Scegli il protocollo che valorizza il tuo glow</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Apri una scheda e senti subito la direzione</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                Ogni scheda racconta il protocollo, il risultato che valorizza e la progressione che accompagna pelle, viso e corpo.
              </p>
            </article>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Prenota la consulenza epigenetica</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                La consulenza legge la pelle, definisce glow, tono, densita' e apre il protocollo piu' adatto al momento che stai vivendo.
              </p>
            </article>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota la consulenza epigenetica
            </Link>
            <Link className="button button-secondary" href="/listino-estetica-laser">
              Apri trattamenti e prezzi
            </Link>
          </div>
        </div>
      </section>

      {guides.length > 0 ? (
        <section className="section">
          <div className="container">
            <p className="eyebrow">Per orientarti</p>
            <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
              Guide beauty per scegliere il protocollo giusto.
            </h2>
            <p className="lead" style={{ marginTop: "0.6rem", maxWidth: "74ch" }}>
              Le guide chiariscono obiettivo, ritmo e primo step e accompagnano una scelta piu' desiderabile e consapevole.
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
                Prenota la tua consulenza
              </Link>
              <Link className="button button-secondary" href="/competenze">
                Scopri tutte le guide
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}



