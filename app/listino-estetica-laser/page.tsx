import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { servicePages } from "@/lib/seo-content";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Listino Estetica + Laser a Carmagnola | Prezzi Rebel",
  description:
    "Listino completo Rebel a Carmagnola: estetica classica e epilazione laser nella stessa pagina, con prezzi chiari e percorsi personalizzati.",
  path: "/listino-estetica-laser",
  keywords: [
    "listino centro estetico Carmagnola",
    "prezzi epilazione laser Carmagnola",
    "listino estetista Carmagnola",
  ],
});

export default function ListinoPage() {
  const classicaListino = servicePages.filter(
    (service) => service.category === "estetica-classica",
  );
  const laserListino = servicePages.filter((service) => service.category === "laser");

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Listino estetica e laser", path: "/listino-estetica-laser" },
  ]);
  const service = buildServiceSchema(
    "Listino estetica classica e laser Thory",
    "Prezzi chiari per servizi estetici e epilazione laser a Carmagnola.",
    "/listino-estetica-laser",
  );
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "I prezzi del laser sono per singola seduta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, i prezzi sono per singola seduta. Sono disponibili pacchetti personalizzati multi-zona.",
        },
      },
      {
        "@type": "Question",
        name: "Serve una valutazione iniziale prima del laser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, la valutazione iniziale e inclusa e permette di definire potenza e frequenza adatte al tuo profilo.",
        },
      },
      {
        "@type": "Question",
        name: "Posso combinare estetica classica e protocolli avanzati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, Rebel integra servizi classici, protocolli epigenetici e tecnologie in un piano unico personalizzato.",
        },
      },
    ],
  };
  const listinoItemListSchema = buildItemListSchema({
    name: "Listino Rebel Estetica e Laser",
    path: "/listino-estetica-laser",
    items: [...classicaListino, ...laserListino].map((serviceItem) => ({
      name: serviceItem.name,
      path: `/servizi/${serviceItem.slug}`,
    })),
  });

  return (
    <main className="page-shell page-listino">
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faqSchema} />
      <JsonLd data={listinoItemListSchema} />

      <PageHero
        eyebrow="Listino unico"
        title="Listino Rebel: estetica classica e laser nella stessa pagina."
        lead="Qui trovi i prezzi in modo semplice e trasparente. Se non sai quale trattamento scegliere, ti aiutiamo noi a orientarti."
        badge="Prezzi trasparenti a Carmagnola"
        tone="gold"
      />

      <section className="section" id="estetica-classica">
        <div className="container">
          <h2 className="page-title">Estetica classica e benessere</h2>
          <p className="lead">
            Servizi utili nella routine di tutti i giorni, perfetti anche come base
            per percorsi piu avanzati.
          </p>
          <div className="grid" style={{ marginTop: "1rem" }}>
            {classicaListino.map((item) => (
              <article key={item.slug} className="card">
                <div
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>
                      <Link href={`/servizi/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="lead" style={{ marginTop: "0.3rem" }}>
                      {item.shortDescription}
                    </p>
                  </div>
                  <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {item.priceHint}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="epilazione-laser">
        <div className="container">
          <h2 className="page-title">Epilazione laser Thory</h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.8)", maxWidth: "72ch" }}
          >
            Il laser viene impostato sul tuo caso: zona, tipo di pelle e obiettivo.
            Usiamo il laser Thory con manipolo Ice Polar per lavorare con maggiore
            comfort. La valutazione iniziale e inclusa.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {laserListino.map((item) => (
              <article key={item.slug} className="card-light">
                <h3 style={{ marginTop: 0 }}>
                  <Link href={`/servizi/${item.slug}`}>{item.name}</Link>
                </h3>
                <p
                  style={{
                    margin: "0.35rem 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.6,
                    color: "rgba(39,31,56,0.76)",
                  }}
                >
                  {item.shortDescription}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {item.priceHint}
                </strong>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota valutazione laser
            </Link>
            <Link className="button" href="/protocolli-epigenetici">
              Vedi protocolli epigenetici
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Scopri tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Come scegliere tra estetica classica e laser</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Se il tuo obiettivo e prenderti cura della pelle, rilassarti o
              migliorare tono e benessere, i servizi di estetica classica sono
              un'ottima base.
            </p>
            <p className="lead">
              Se invece vuoi ridurre in modo progressivo la ricrescita del pelo,
              allora il laser e la strada giusta. In ogni caso, la valutazione
              iniziale ti aiuta a non sbagliare direzione.
            </p>
          </article>
          <article className="card">
            <h2 style={{ marginTop: 0 }}>Domande che ci fanno spesso prima di prenotare</h2>
            <ul className="list-clean">
              <li>- "Posso iniziare con un solo trattamento?"</li>
              <li>- "Meglio fare un ciclo o una seduta singola?"</li>
              <li>- "In quanto tempo vedro i primi risultati?"</li>
              <li>- "Posso combinare piu trattamenti nello stesso periodo?"</li>
            </ul>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              Sono domande normalissime. Scrivici su WhatsApp e ti diamo subito
              una risposta chiara e personalizzata.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}



