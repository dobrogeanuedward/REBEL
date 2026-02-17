import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { competencePages } from "@/lib/seo-content";
import { buildBreadcrumbSchema, buildItemListSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Competenze ed Editoriali Estetici Locali | Carmagnola e Dintorni",
  description:
    "Approfondimenti e articoli editoriali Rebel sulle principali competenze estetiche a Carmagnola: estetica avanzata, trattamenti viso/corpo, laser e beauty routine professionale.",
  path: "/competenze",
  keywords: [
    "competenze centro estetico Carmagnola",
    "estetica avanzata Carmagnola",
    "guide trattamenti Carmagnola",
  ],
});

export default function CompetenzeHubPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Competenze", path: "/competenze" },
  ]);
  const competenceListSchema = buildItemListSchema({
    name: "Guide e competenze Rebel",
    path: "/competenze",
    items: competencePages.map((competence) => ({
      name: competence.title,
      path: `/competenze/${competence.slug}`,
    })),
  });

  return (
    <main className="page-shell page-competenze">
      <JsonLd data={breadcrumb} />
      <JsonLd data={competenceListSchema} />
      <PageHero
        eyebrow="Approfondimenti"
        title="Guide Rebel: le domande che ci fate più spesso, messe nero su bianco."
        lead="Qui trovi criteri pratici e approfondimenti su viso, corpo e laser. Quando serve citiamo anche fonti pubbliche, così ti fai un'idea e decidi con calma."
        badge="Informazioni pratiche prima di prenotare"
        tone="ocean"
      />

      <section className="section">
        <div className="container split">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Perché abbiamo creato queste guide</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Quando si parla di pelle e corpo, i dubbi sono normali. Qui abbiamo messo le
              risposte che di solito diamo in studio: cosa aspettarti, cosa evitare e
              come scegliere un percorso che riesci davvero a portare avanti.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src="https://epikey.rebelepigenetica.it/assets/rebel/vetrina2.webp"
                alt="Dettaglio studio Rebel"
                width={1200}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              />
            </div>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Da dove iniziare</h2>
            <ul className="list-clean">
              <li>- leggi il tema che senti più vicino al tuo caso</li>
              <li>- guarda i servizi consigliati in fondo pagina</li>
              <li>- se vuoi, scrivici e ti orientiamo noi</li>
              <li>- prenota quando ti è chiaro da dove partire</li>
            </ul>
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                Epilazione laser Carmagnola
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Competenze pubblicate</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {competencePages.map((item) => (
              <Link key={item.slug} href={`/competenze/${item.slug}`} className="card-light">
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p
                  style={{
                    margin: "0.35rem 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {item.shortDescription}
                </p>
                <small
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.65)",
                  }}
                >
                  Apri la guida
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

