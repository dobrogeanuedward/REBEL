import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Epilazione laser con Ice Polar a Carmagnola | Rebel",
  description:
    "Una pagina chiara e completa sul manipolo Ice Polar: perché aiuta il comfort durante l'epilazione laser, come lo usiamo in studio e cosa aspettarti da un percorso ben impostato a Carmagnola.",
  path: "/epilazione-laser-ice-polar-carmagnola",
  keywords: [
    "Ice Polar Carmagnola",
    "laser con Ice Polar Carmagnola",
    "laser con raffreddamento Carmagnola",
    "epilazione laser confortevole Carmagnola",
    "manipolo Ice Polar laser",
  ],
});

export default function EpilazioneLaserIcePolarCarmagnolaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Laser Carmagnola", path: "/epilazione-laser-carmagnola" },
    {
      name: "Ice Polar",
      path: "/epilazione-laser-ice-polar-carmagnola",
    },
  ]);

  const serviceSchema = buildServiceSchema(
    "Epilazione laser con manipolo Ice Polar a Carmagnola",
    "Approfondimento sul comfort del laser: cosa fa Ice Polar, perché è utile e come impostiamo un percorso coerente per viso e corpo.",
    "/epilazione-laser-ice-polar-carmagnola",
  );

  const articleSchema = buildArticleSchema({
    headline: "Epilazione laser con Ice Polar a Carmagnola",
    description:
      "Una guida chiara sul manipolo Ice Polar: comfort, metodo e indicazioni pratiche prima di iniziare un percorso laser.",
    path: "/epilazione-laser-ice-polar-carmagnola",
    keywords: [
      "Ice Polar",
      "laser con raffreddamento",
      "epilazione laser Carmagnola",
      "comfort laser",
    ],
    section: "Laser",
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ice Polar rende il laser indolore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aiuta molto il comfort, ma la percezione cambia in base a zona e sensibilità personale. In studio impostiamo sempre in modo graduale e adattato alla risposta della pelle.",
        },
      },
      {
        "@type": "Question",
        name: "Perché il comfort è importante in un percorso laser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perché un percorso laser funziona meglio quando riesci a seguirlo con serenità: un trattamento più confortevole rende più semplice mantenere il calendario e rispettare le indicazioni tra una seduta e l'altra.",
        },
      },
      {
        "@type": "Question",
        name: "Ice Polar basta da solo per avere un buon risultato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. È un aiuto importante per l'esperienza della seduta, ma la differenza la fa soprattutto come vengono impostati parametri e calendario, e come viene seguito il percorso nel tempo.",
        },
      },
    ],
  };

  return (
    <main className="page-shell page-laser-ice-polar">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Laser più confortevole"
        title="Ice Polar: il dettaglio che rende il laser più facile da seguire."
        lead="Ice Polar è un manipolo che aiuta il comfort durante la seduta. Qui ti spieghiamo cosa significa nella pratica, come lo usiamo in studio e come si costruisce un percorso laser ben impostato a Carmagnola."
        badge="Rebel Carmagnola • Viale Barbaroux 20"
        tone="violet"
      />

      <section className="section">
        <div className="container split">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Cos&apos;è Ice Polar, spiegato bene</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              In parole semplici: Ice Polar è un aiuto al comfort. Non cambia la tua
              pelle, non è una &quot;magia&quot; e non sostituisce il metodo. Serve a rendere
              la seduta più tollerabile, soprattutto nelle zone in cui la sensibilità
              può essere maggiore.
            </p>
            <p className="lead">
              Questo conta perché il laser non è una singola seduta: è un percorso.
              Quando l&apos;esperienza è più serena, diventa più facile seguire calendario
              e indicazioni tra un appuntamento e l&apos;altro.
            </p>
          </article>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Da dove partire</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se vuoi iniziare subito con le pagine pratiche per area, trovi qui le schede
              principali:
            </p>
            <div style={{ display: "grid", gap: "0.65rem", marginTop: "0.85rem" }}>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-viso-carmagnola">
                Laser viso
              </Link>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-corpo-carmagnola">
                Laser corpo
              </Link>
              <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                Torna a Laser Carmagnola
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container grid grid-2">
          <article className="card-light">
            <h2 style={{ marginTop: 0 }}>Metodo: parametri e calendario</h2>
            <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", lineHeight: 1.7, color: "rgba(39,31,56,0.78)" }}>
              Comfort e risultato vanno insieme quando il percorso è impostato bene:
              valutazione iniziale, settaggio su misura e un calendario che riesci a seguire.
              Se la pelle cambia, si adatta anche il piano.
            </p>
          </article>
          <article className="card-light">
            <h2 style={{ marginTop: 0 }}>Indicazioni semplici tra le sedute</h2>
            <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", lineHeight: 1.7, color: "rgba(39,31,56,0.78)" }}>
              Una buona seduta non finisce quando esci dallo studio. Ti diamo indicazioni
              chiare (senza ansia) su cosa fare e cosa evitare, così la pelle resta tranquilla
              e il percorso resta scorrevole.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="card">
            <h2 style={{ marginTop: 0 }}>Dove siamo (Carmagnola)</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Rebel si trova in Viale Barbaroux 20, Carmagnola. Se arrivi da fuori, la mappa
              è il modo più comodo per raggiungerci senza perdere tempo.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <a className="button button-secondary" href={siteConfig.social.maps} target="_blank" rel="noreferrer">
                Apri su Google Maps
              </a>
              <Link className="button button-secondary" href="/contatti">
                Contatti
              </Link>
              <a className="button button-primary" href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </article>
          <aside className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Mappa</h2>
            <div className="map-wrap" style={{ marginTop: "0.85rem" }}>
              <iframe
                src="https://www.google.com/maps?q=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Rebel Carmagnola - Viale Barbaroux 20"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}


