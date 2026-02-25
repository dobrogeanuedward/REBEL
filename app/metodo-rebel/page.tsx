import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { methodSteps } from "@/lib/content";
import { editorialImageAssets } from "@/lib/seo-content";
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
  const methodVisuals = [
    {
      src: editorialImageAssets.laserViso,
      alt: "Lettura iniziale e impostazione parametri in cabina Rebel",
      title: "Lettura iniziale reale",
      text: "Prima di decidere il piano, osserviamo pelle, obiettivo e ritmo che puoi mantenere.",
    },
    {
      src: editorialImageAssets.laserCorpo,
      alt: "Monitoraggio del percorso laser nel tempo",
      title: "Progressione monitorata",
      text: "Seduta dopo seduta aggiustiamo la rotta: continuita prima di tutto.",
    },
  ] as const;

  return (
    <main className="page-shell page-metodo">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={service} />
      <JsonLd data={articleSchema} />

      <PageHero
        eyebrow="Come lavoriamo"
        title="Metodo Rebel: cinque passaggi, un filo unico."
        lead="Partiamo dall'ascolto e dalla lettura iniziale, poi scegliamo cosa fare e con che ritmo. La parte importante è che il piano resti semplice da seguire, non perfetto sulla carta."
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
                  <h2 className="method-step-title">
                    {item.title}
                  </h2>
                  <p className="lead mt-0">
                    {item.text}
                  </p>
                  <span className="method-step-dot" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-photo-story section-tight">
        <div className="container split photo-story-split">
          <article className="card photo-story-card">
            <div className="section-head section-head--compact">
              <p className="eyebrow">Metodo applicato</p>
              <h2 className="page-title">Non facciamo sedute isolate: costruiamo una sequenza che puoi davvero seguire.</h2>
              <p className="lead">
                La differenza non è solo nella tecnologia. Sta nella sequenza: capire da dove parti,
                scegliere cosa attivare e monitorare la risposta della pelle nel tempo.
              </p>
            </div>
            <ul className="list-clean photo-story-points">
              <li>- Decisioni semplici, niente stratificazioni casuali</li>
              <li>- Obiettivi realistici e calendario sostenibile</li>
              <li>- Correzioni leggere senza ricominciare da zero</li>
            </ul>
          </article>
          <aside className="photo-story-media-grid">
            {methodVisuals.map((item) => (
              <article key={item.title} className="card-light photo-story-media-card">
                <div className="hero-visual card-media mt-0">
                  <Image src={item.src} alt={item.alt} width={1600} height={900} />
                </div>
                <h3 className="mt-sm">{item.title}</h3>
                <p className="lead mt-xs text-on-light">{item.text}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head section-head--compact">
            <h2 className="page-title mt-0">Perché funziona (nella vita vera)</h2>
            <p className="lead text-on-light max-w-74ch">
              Un metodo ti evita di andare a tentativi. Ti diciamo cosa facciamo adesso e cosa ci aspettiamo nelle prossime
              settimane, con tempi realistici e scelte coerenti con la tua pelle e con la tua agenda.
            </p>
          </div>
          <div className="actions-row">
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



