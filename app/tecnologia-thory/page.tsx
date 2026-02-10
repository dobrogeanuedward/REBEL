import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { thoryDevices } from "@/lib/content";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tecnologia Thory a Carmagnola | Radiofrequenza, Analys, Laser",
  description:
    "Scopri le tecnologie Thory utilizzate da Rebel a Carmagnola: radiofrequenza, diagnosi AI, pressodrenaggio e laser selettivo.",
  path: "/tecnologia-thory",
  keywords: [
    "tecnologia estetica Carmagnola",
    "radiofrequenza Carmagnola",
    "laser Thory Carmagnola",
  ],
});

export default function TecnologiaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tecnologia Thory", path: "/tecnologia-thory" },
  ]);
  const serviceSchema = buildServiceSchema(
    "Tecnologie Thory per estetica avanzata",
    "Strumenti biofisici usati in modo calibrato nei percorsi Rebel.",
    "/tecnologia-thory",
  );

  return (
    <main className="page-shell page-tecnologia">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <PageHero
        eyebrow="Tecnologia applicata con criterio"
        title="Thory in Rebel: tecnologia utile, al servizio del risultato."
        lead="Usiamo la tecnologia quando serve davvero. Il punto non e fare scena, ma aiutarti a ottenere un risultato concreto e sostenibile."
        badge="Approccio tecnico calibrato"
        tone="violet"
      />

      <section className="section">
        <div className="container split">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Integrazione con il metodo</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              In Rebel la tecnologia non sostituisce la mano esperta: la amplifica.
              Analisi, attivi e strumentazione lavorano insieme per risultati piu
              coerenti e misurabili nel tempo.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src="https://rebelepigenetica.it/assets/rebel/vetrina.webp"
                alt="Ambiente Rebel con approccio tecnologico"
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
            <h2 style={{ marginTop: 0 }}>Cosa significa in pratica</h2>
            <ul className="list-clean">
              <li>- niente tecnologia usata "a caso"</li>
              <li>- parametri impostati sul tuo caso</li>
              <li>- progressi controllati seduta dopo seduta</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Dispositivi Thory utilizzati in studio</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {thoryDevices.map((device) => (
              <article key={device.name} className="card-light">
                <h3 style={{ marginTop: 0 }}>{device.name}</h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {device.role}
                </p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota valutazione
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Esplora i servizi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

