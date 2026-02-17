import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Epilazione Laser Carmagnola | Rebel Estetica Epigenetica",
  description:
    "Epilazione laser a Carmagnola con tecnologia Thory e percorso personalizzato. Valutazione iniziale, protocollo su misura e supporto continuo da Rebel.",
  path: "/epilazione-laser-carmagnola",
  openGraphType: "article",
  keywords: [
    "epilazione laser Carmagnola",
    "laser Carmagnola",
    "centro epilazione laser Carmagnola",
    "epilazione laser viso Carmagnola",
    "epilazione laser corpo Carmagnola",
    "prezzi epilazione laser Carmagnola",
    "Rebel epilazione laser",
  ],
});

export default function EpilazioneLaserCarmagnolaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Epilazione laser Carmagnola", path: "/epilazione-laser-carmagnola" },
  ]);

  const laserServiceSchema = buildServiceSchema(
    "Epilazione laser a Carmagnola",
    "Percorso di epilazione laser a Carmagnola con tecnologia Thory, valutazione iniziale e piano personalizzato per viso e corpo.",
    "/epilazione-laser-carmagnola",
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "L'epilazione laser a Carmagnola è adatta a tutte le zone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, il percorso viene impostato per zona, fototipo e obiettivo. In studio definiamo un piano personalizzato per viso e corpo.",
        },
      },
      {
        "@type": "Question",
        name: "Quante sedute servono per l'epilazione laser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dipende da area, pelo e risposta individuale. In media si lavora su un ciclo progressivo, con calendario definito in fase iniziale.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto costa l'epilazione laser a Carmagnola da Rebel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I prezzi partono da 25.90 EUR per area, con possibilità di percorsi strutturati. Il listino completo è disponibile nella pagina dedicata.",
        },
      },
      {
        "@type": "Question",
        name: "Come prenoto una valutazione laser da Rebel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puoi prenotare via WhatsApp o dalla pagina contatti. Ti rispondiamo e ti diciamo da dove conviene partire (zona, calendario e preparazione).",
        },
      },
    ],
  };

  const localLandingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/epilazione-laser-carmagnola#webpage`,
    url: `${siteConfig.siteUrl}/epilazione-laser-carmagnola`,
    name: "Epilazione Laser Carmagnola | Rebel",
    description:
      "Pagina dedicata all'epilazione laser a Carmagnola con percorso personalizzato e orientamento pratico.",
    inLanguage: "it-IT",
    about: [
      "epilazione laser Carmagnola",
      "laser viso Carmagnola",
      "laser corpo Carmagnola",
      "centro estetico Carmagnola",
    ],
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    mainEntity: {
      "@type": "Service",
      "@id": `${siteConfig.siteUrl}/epilazione-laser-carmagnola#service`,
      name: "Epilazione laser a Carmagnola",
      provider: {
        "@id": `${siteConfig.siteUrl}/#beauty-salon`,
      },
    },
  };

  return (
    <main className="page-shell page-laser-local">
      <JsonLd data={breadcrumb} />
      <JsonLd data={laserServiceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localLandingSchema} />

      <PageHero
        eyebrow="Rebel Laser Carmagnola"
        title="Epilazione laser a Carmagnola: percorso su misura, risultati progressivi."
        lead="In Rebel impostiamo il laser in base a zona, fototipo e obiettivo reale. Nessun protocollo standard: prima valutazione, poi piano personalizzato e monitoraggio costante."
        badge="Da 25.90 EUR • Viale Barbaroux 20, Carmagnola"
        tone="violet"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Perché scegliere Rebel per il laser a Carmagnola</h2>
            <ul className="list-clean">
              <li>- valutazione iniziale chiara, prima di iniziare il ciclo</li>
              <li>- parametri calibrati su zona e risposta della pelle</li>
              <li>- tecnologia Thory con manipolo Ice Polar per maggiore comfort</li>
              <li>- percorso monitorato, senza promesse esagerate</li>
            </ul>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Prenota valutazione laser
              </Link>
              <a
                className="button button-secondary"
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Scrivi su WhatsApp
              </a>
            </div>
          </article>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Viso e corpo: schede rapide</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se vuoi vedere subito i dettagli per area, puoi partire da queste due pagine:
            </p>
            <div style={{ display: "grid", gap: "0.65rem", marginTop: "0.75rem" }}>
              <Link href="/servizi/epilazione-laser-viso-carmagnola" className="button button-secondary">
                Epilazione laser viso
              </Link>
              <Link href="/servizi/epilazione-laser-corpo-carmagnola" className="button button-secondary">
                Epilazione laser corpo
              </Link>
              <Link href="/epilazione-laser-ice-polar-carmagnola" className="button button-secondary">
                Ice Polar: comfort durante il laser
              </Link>
              <Link href="/listino-estetica-laser" className="button button-secondary">
                Vedi listino completo
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Domande frequenti prima di iniziare</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Il laser è doloroso?</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                La percezione varia da persona a persona. Il manipolo Ice Polar aiuta a migliorare il comfort durante la seduta.
              </p>
            </article>
            <article className="card-light">
              <h3 style={{ marginTop: 0 }}>Quando conviene iniziare?</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Puoi iniziare tutto l&apos;anno, pianificando esposizione e calendario in modo corretto con il team Rebel.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

