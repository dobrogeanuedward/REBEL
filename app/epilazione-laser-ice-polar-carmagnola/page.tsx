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
  title: "Epilazione laser con Ice Polar a Carmagnola",
  description:
    "Ice Polar e comfort durante l'epilazione laser: cosa cambia in seduta, come lo usiamo in studio e cosa aspettarti da un percorso laser a Carmagnola.",
  path: "/epilazione-laser-ice-polar-carmagnola",
  openGraphType: "article",
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
      "Una guida chiara sul manipolo Ice Polar: comfort, metodo e consigli pratici prima di iniziare un percorso laser.",
    path: "/epilazione-laser-ice-polar-carmagnola",
    keywords: [
      "Ice Polar",
      "laser con raffreddamento",
      "epilazione laser Carmagnola",
      "comfort laser",
    ],
    section: "Laser",
  });

  const faqs = [
    {
      q: "Ice Polar rende il laser indolore?",
      a: "Aiuta molto il comfort, ma la percezione cambia in base a zona e sensibilità personale. In studio impostiamo sempre in modo graduale e adattato alla risposta della pelle.",
    },
    {
      q: "Perché il comfort è importante in un percorso laser?",
      a: "Perché un percorso laser funziona meglio quando riesci a seguirlo con serenità: un trattamento più confortevole rende più semplice mantenere il calendario e rispettare le poche regole tra una seduta e l'altra.",
    },
    {
      q: "Ice Polar basta da solo per avere un buon risultato?",
      a: "No. È un aiuto importante per l'esperienza della seduta, ma la differenza la fa soprattutto come vengono impostati parametri e calendario, e come viene seguito il percorso nel tempo.",
    },
    {
      q: "Su quali zone si nota di più la differenza?",
      a: "Spesso sulle zone più sensibili (ascelle e inguine) o quando la pelle è reattiva. Poi si decide sempre in base a zona e tollerabilità: non esiste una regola identica per tutti.",
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

  return (
    <main className="page-shell page-laser-ice-polar">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Laser più confortevole"
        title="Ice Polar: più comfort durante il laser, soprattutto nelle zone sensibili."
        lead="Ice Polar aiuta il comfort in seduta, ma il punto resta sempre lo stesso: parametri corretti e calendario sensato. Qui trovi cosa cambia davvero, senza tecnicismi inutili."
        badge="Rebel Carmagnola • Viale Barbaroux 20"
        tone="violet"
      />

      <section className="section">
        <div className="container split">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Ice Polar: cos&apos;è e cosa cambia durante la seduta</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Ice Polar è un sistema di raffreddamento che rende la seduta più tollerabile. Non sostituisce il settaggio:
              è un aiuto in più, soprattutto quando la zona è delicata (ascelle, inguine) o quando sai già di essere
              molto sensibile.
            </p>
            <p className="lead">
              Il laser si fa in più sedute. Se stai più comoda, è più facile tenere il calendario e non mollare dopo due
              appuntamenti: è lì che si vede la differenza tra un percorso e una serie di tentativi.
            </p>
          </article>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Da dove partire (se ti interessa il comfort)</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se vuoi andare dritta al punto, queste sono le pagine più utili: schede servizio e guide pratiche sulle
              zone più richieste.
            </p>
            <div style={{ display: "grid", gap: "0.65rem", marginTop: "0.85rem" }}>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-viso-carmagnola">
                Laser viso
              </Link>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-corpo-carmagnola">
                Laser corpo
              </Link>
              <Link className="button button-secondary" href="/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica">
                Guida: laser ascelle
              </Link>
              <Link className="button button-secondary" href="/competenze/epilazione-laser-inguine-carmagnola-guida-pratica">
                Guida: laser inguine
              </Link>
              <Link className="button button-secondary" href="/competenze/laser-uomo-carmagnola-guida-pratica">
                Guida: laser uomo
              </Link>
              <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                Torna a Laser Carmagnola
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Vedi prezzi e listino
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
              valutazione iniziale, settaggio su misura e un calendario che sta nella tua settimana.
              Se la pelle cambia, aggiustiamo anche il piano.
            </p>
          </article>
          <article className="card-light">
            <h2 style={{ marginTop: 0 }}>Tra una seduta e l&apos;altra</h2>
            <p style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif", lineHeight: 1.7, color: "rgba(39,31,56,0.78)" }}>
              Una buona seduta non finisce quando esci dallo studio. Ti diciamo cosa fare e cosa evitare
              nei giorni successivi, senza ansia e senza liste infinite: così la pelle resta tranquilla
              e non ti viene voglia di rimandare la seduta dopo.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Domande frequenti su Ice Polar</h2>
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
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Chiedi un consiglio
            </Link>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Laser a Carmagnola
            </Link>
            <Link className="button button-secondary" href="/competenze/peli-incarniti-laser-carmagnola">
              Peli incarniti
            </Link>
            <Link className="button button-secondary" href="/competenze/epilazione-laser-estate-sole-carmagnola">
              Laser e sole
            </Link>
          </div>
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


