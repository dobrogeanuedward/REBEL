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
    "Metodo Rebel a Carmagnola: consulenza beauty, lettura iniziale, protocollo su misura ed evoluzione epigenetica per pelle, viso e corpo.",
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
      "Il Metodo Rebel: consulenza beauty, protocollo su misura ed evoluzione epigenetica per pelle, viso e corpo.",
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
      "Come nasce un percorso Rebel: lettura iniziale, protocollo, tecnologia mirata e bellezza progressiva.",
    path: "/metodo-rebel",
    keywords: ["metodo Rebel", "metodo estetico Carmagnola", "percorso estetico"],
    section: "Metodo",
  });
  const methodVisuals = [
    {
      src: editorialImageAssets.laserViso,
      alt: "Lettura iniziale e impostazione parametri in cabina Rebel",
      title: "Lettura iniziale reale",
      text: "La consulenza iniziale legge pelle, obiettivo e ritmo ideale per far emergere luminosita', tono e armonia.",
    },
    {
      src: editorialImageAssets.laserCorpo,
      alt: "Monitoraggio del percorso laser nel tempo",
      title: "Progressione monitorata",
      text: "Seduta dopo seduta il percorso evolve con continuita', glow cutaneo e risultati sempre piu' leggibili.",
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
        title="Metodo Rebel: cinque passaggi per valorizzare pelle, viso e corpo."
        lead="Ogni percorso nasce da una consulenza beauty e si sviluppa con lettura iniziale, attivi epigenetici, manualita' e tecnologia mirata per un risultato visibile e progressivo."
        badge="Bellezza • glow • progressione"
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
              <h2 className="page-title">Ogni seduta entra in una sequenza beauty che valorizza la pelle nel tempo.</h2>
              <p className="lead">
                La forza del metodo sta nella regia: si legge il punto di partenza, si attiva il trattamento giusto
                e si accompagna la pelle verso piu&apos; luce, tono e qualita&apos; cutanea.
              </p>
            </div>
            <ul className="list-clean photo-story-points">
              <li>- priorita&apos; chiare e pelle letta con precisione</li>
              <li>- calendario beauty sostenibile e progressione visibile</li>
              <li>- glow, tono e armonia che crescono seduta dopo seduta</li>
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
            <h2 className="page-title mt-0">Perché vende risultati visibili</h2>
            <p className="lead text-on-light max-w-74ch">
              Il metodo trasforma la consulenza in direzione: sai cosa valorizzare adesso, quale glow aspettarti
              nelle settimane successive e quale trattamento prenotare per primo.
            </p>
          </div>
          <div className="actions-row">
            <Link className="button button-primary" href="/protocolli-epigenetici">
              Scopri i protocolli epigenetici
            </Link>
            <Link className="button button-secondary" href="/contatti">
              Prenota la tua consulenza
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



