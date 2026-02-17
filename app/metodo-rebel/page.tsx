import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { methodSteps } from "@/lib/content";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Metodo Rebel: 5 passaggi per un percorso fatto bene",
  description:
    "Come lavoriamo in studio a Carmagnola: ascolto, lettura iniziale, protocollo su misura, tecnologia quando serve e mantenimento.",
  path: "/metodo-rebel",
  openGraphType: "article",
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
  const webPageSchema = buildWebPageSchema({
    name: "Metodo Rebel in 5 Step",
    description:
      "Il Metodo Rebel: lettura iniziale, protocollo, tecnologia quando serve e mantenimento.",
    path: "/metodo-rebel",
  });
  const service = buildServiceSchema(
    "Metodo estetico epigenetico personalizzato",
    "Percorso in 5 step per riattivare tono, luminosità e qualità cutanea.",
    "/metodo-rebel",
  );
  const articleSchema = buildArticleSchema({
    headline: "Metodo Rebel in 5 step",
    description:
      "Come lavoriamo in studio: lettura iniziale, protocollo, tecnologia quando serve e mantenimento.",
    path: "/metodo-rebel",
    keywords: ["metodo Rebel", "metodo estetico Carmagnola", "percorso estetico"],
    section: "Metodo",
  });

  return (
    <main className="page-shell page-metodo">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={service} />
      <JsonLd data={articleSchema} />

      <PageHero
        eyebrow="Come lavoriamo"
        title="Metodo Rebel: cinque passaggi, un filo unico."
        lead="Partiamo dall'ascolto e dalla lettura iniziale, poi scegliamo cosa fare e con che ritmo. La parte importante è che il percorso resti semplice da seguire, non perfetto sulla carta."
        badge="Chiarezza • continuità • progressione"
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
          <h2 className="page-title">Perché funziona (nella vita vera)</h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.8)", maxWidth: "74ch" }}
          >
            Un metodo ti evita di andare a tentativi. Ti diciamo cosa facciamo adesso e cosa ci aspettiamo nelle prossime
            settimane, con tempi realistici e scelte coerenti con la tua pelle e con la tua agenda.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/protocolli-epigenetici">
              Esplora i protocolli
            </Link>
            <Link className="button button-secondary" href="/contatti">
              Scrivici per iniziare
            </Link>
            <Link className="button button-secondary" href="/competenze">
              Leggi le guide utili
            </Link>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Laser a Carmagnola
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



