import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { methodSteps } from "@/lib/content";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Metodo Rebel in 5 Step: Analisi, Protocollo, Tecnologia, Mantenimento",
  description:
    "Il Metodo Rebel a Carmagnola: lettura iniziale, attivi intelligenti, tecnologia Thory, riprogrammazione e piano di mantenimento.",
  path: "/metodo-rebel",
  keywords: [
    "metodo estetica Carmagnola",
    "analisi pelle Carmagnola",
    "percorso estetica personalizzato Carmagnola",
  ],
});

export default function MetodoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Metodo Rebel", path: "/metodo-rebel" },
  ]);
  const service = buildServiceSchema(
    "Metodo estetico epigenetico personalizzato",
    "Percorso in 5 step per riattivare tono, luminosità e qualità cutanea.",
    "/metodo-rebel",
  );

  return (
    <main className="page-shell page-metodo">
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />

      <PageHero
        eyebrow="Metodo proprietario"
        title="Dal primo ascolto alla riprogrammazione cutanea: il Metodo Rebel."
        lead="Cinque passaggi, sempre gli stessi: ascolto, lettura iniziale, protocollo, tecnologia quando serve e mantenimento."
        badge="Metodo orientato alla continuità"
        tone="ocean"
      />

      <section className="section">
        <div className="container">
          <div className="method-steps-stage">
            <div className="method-steps-grid">
              {methodSteps.map((item, index) => (
                <article key={item.step} className="method-step-card">
                  <span className="method-step-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="eyebrow">{item.step}</p>
                  <h2 style={{ margin: "0.45rem 0 0.55rem", fontSize: "1.38rem" }}>
                    {item.title}
                  </h2>
                  <p className="lead" style={{ marginTop: 0 }}>
                    {item.text}
                  </p>
                  <span className="method-step-dot" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Perché questo metodo funziona, nella pratica</h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.8)", maxWidth: "74ch" }}
          >
            Con un metodo non si va a tentativi. Ti diciamo cosa facciamo oggi e cosa ci
            aspettiamo nelle prossime settimane, con tempi realistici e scelte coerenti
            con la tua pelle e la tua agenda.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/protocolli-epigenetici">
              Esplora i protocolli
            </Link>
            <Link className="button button-secondary" href="/contatti">
              Prenota lettura iniziale
            </Link>
            <Link className="button button-secondary" href="/competenze">
              Leggi le guide utili
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



