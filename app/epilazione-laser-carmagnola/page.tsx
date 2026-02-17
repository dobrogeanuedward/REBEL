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
  title: "Epilazione laser a Carmagnola (Thory + Ice Polar)",
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

  const faqs = [
    {
      q: "L'epilazione laser a Carmagnola è adatta a tutte le zone?",
      a: "Sì, il percorso viene impostato per zona, fototipo e obiettivo. In studio definiamo un piano personalizzato per viso e corpo.",
    },
    {
      q: "Quante sedute servono per l'epilazione laser?",
      a: "Dipende da area, pelo e risposta individuale. In media si lavora su un ciclo progressivo, con calendario definito in fase iniziale.",
    },
    {
      q: "Quanto costa l'epilazione laser a Carmagnola da Rebel?",
      a: "I prezzi partono da 25.90 EUR per area, con possibilità di percorsi strutturati. Il listino completo è disponibile nella pagina dedicata.",
    },
    {
      q: "Come prenoto una valutazione laser da Rebel?",
      a: "Puoi prenotare via WhatsApp o dalla pagina contatti. Ti rispondiamo e ti diciamo da dove conviene partire (zona, calendario e preparazione).",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const localLandingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/epilazione-laser-carmagnola#webpage`,
    url: `${siteConfig.siteUrl}/epilazione-laser-carmagnola`,
    name: "Epilazione laser a Carmagnola",
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
        lead="In Rebel impostiamo il laser in base a zona, fototipo e obiettivo reale. Prima valutazione, poi un piano che riesci a seguire: chiaro, progressivo e con monitoraggio nel tempo."
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
              <Link href="/servizi/epilazione-laser-viso-uomo-carmagnola" className="button button-secondary">
                Laser viso uomo
              </Link>
              <Link href="/servizi/epilazione-laser-corpo-uomo-carmagnola" className="button button-secondary">
                Laser corpo uomo
              </Link>
              <Link href="/competenze/laser-uomo-carmagnola-guida-pratica" className="button button-secondary">
                Guida: laser uomo
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
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Approfondimenti rapidi
          </p>
          <h2 className="page-title" style={{ marginTop: "0.55rem" }}>
            Le zone più richieste (e le guide che chiariscono i dubbi).
          </h2>
          <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
            Se vuoi partire con un po&apos; di chiarezza, queste sono le letture più utili: ascelle e inguine (zone piccole ma
            intense), gambe (zona ampia), gestione sole/stagionalità e due temi super pratici: inverno e palestra.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            <Link href="/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser ascelle: guida pratica</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Comfort, tempi e gestione tra una seduta e la successiva (senza ansia).
              </p>
            </Link>
            <Link href="/competenze/epilazione-laser-inguine-carmagnola-guida-pratica" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser inguine: guida pratica</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Regole semplici per una zona delicata e aspettative realistiche.
              </p>
            </Link>
            <Link href="/competenze/laser-gambe-carmagnola-guida-pratica" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser gambe: guida pratica</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Strategia, stagionalità e mantenimento quando la priorità sono le gambe.
              </p>
            </Link>
            <Link href="/competenze/epilazione-laser-estate-sole-carmagnola" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser e sole: cosa sapere davvero</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Come organizzare calendario e esposizione senza bloccarti.
              </p>
            </Link>
            <Link href="/competenze/epilazione-laser-inverno-carmagnola" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser in inverno: perché conviene</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Un periodo perfetto per essere costanti e arrivare ai mesi luminosi con un percorso già avviato.
              </p>
            </Link>
            <Link href="/competenze/laser-e-palestra-sport-carmagnola" className="card-light">
              <h3 style={{ marginTop: 0 }}>Laser e palestra: guida pratica</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                Sport, doccia, calore e tessuti: cosa fare nelle prime 24-48 ore senza paranoie.
              </p>
            </Link>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota valutazione
            </Link>
            <Link className="button button-secondary" href="/listino-estetica-laser">
              Vedi prezzi e listino
            </Link>
            <Link className="button button-secondary" href="/competenze/laser-uomo-carmagnola-guida-pratica">
              Laser uomo
            </Link>
            <Link className="button button-secondary" href="/competenze/peli-incarniti-laser-carmagnola">
              Peli incarniti
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Domande frequenti (quelle vere, prima di iniziare)</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {faqs.map((faq) => (
              <article key={faq.q} className="card">
                <h3 style={{ marginTop: 0 }}>{faq.q}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.78)" }}>
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

