import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Protocolli Epigenetici a Carmagnola: Trattamenti Viso e Corpo Rebel",
  description:
    "Scopri i protocolli epigenetici Rebel a Carmagnola: percorsi viso e corpo su tono, densita, luminosita, drenaggio e rigenerazione.",
  path: "/protocolli-epigenetici",
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
  const service = buildServiceSchema(
    "Trattamenti epigenetici viso e corpo",
    "Protocolli personalizzati con attivi funzionali e tecnologia calibrata.",
    "/protocolli-epigenetici",
  );

  return (
    <main className="page-shell page-protocolli">
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />

      <PageHero
        eyebrow="Percorsi ad alto valore"
        title="Protocolli epigenetici Rebel: precisione su viso e corpo."
        lead="Ogni protocollo parte da una valutazione iniziale e viene adattato a cio che ti serve davvero: tono, luminosita, drenaggio o rigenerazione."
        badge="Attivo + manualita + tecnologia"
        tone="violet"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {protocolCards.map((protocol) => (
              <article key={protocol.name} className="card">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Come scegliere il protocollo giusto.</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Se hai bisogno di capire prima</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                Guarda le schede e le FAQ: in pochi minuti capisci differenze,
                obiettivi e tempi di ogni percorso.
              </p>
            </article>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Se vuoi partire subito</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "rgba(39,31,56,0.76)",
                }}
              >
                Scrivici su WhatsApp o prenota una valutazione: costruiamo insieme
                un piano concreto, con obiettivi chiari e tempi realistici.
              </p>
            </article>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Richiedi diagnosi personalizzata
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
    </main>
  );
}



