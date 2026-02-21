import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { localAreaPages } from "@/lib/local-pages";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { servicePages } from "@/lib/seo-content";

export const metadata: Metadata = createPageMetadata({
  title: "Centro Estetico a Carmagnola | Rebel Estetica Epigenetica",
  description:
    "Centro estetico a Carmagnola: laser, pedicure, scrub corpo, trattamenti viso e corpo con percorsi personalizzati Rebel e prezzi chiari.",
  path: "/centro-estetico-carmagnola",
  keywords: [
    "centro estetico Carmagnola",
    "estetista Carmagnola",
    "pedicure Carmagnola",
    "scrub corpo Carmagnola",
    "epilazione laser Carmagnola",
    "centro estetico Carmagnola prezzi",
  ],
});

export default function CentroEsteticoCarmagnolaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Centro estetico Carmagnola", path: "/centro-estetico-carmagnola" },
  ]);

  const webPageSchema = buildWebPageSchema({
    name: "Centro estetico a Carmagnola | Rebel",
    description:
      "Pagina dedicata al centro estetico Rebel a Carmagnola: trattamenti più richiesti, listino e percorsi locali.",
    path: "/centro-estetico-carmagnola",
  });

  const queryTargets = [
    { label: "Pedicure a Carmagnola", href: "/servizi/pedicure-carmagnola" },
    { label: "Scrub corpo a Carmagnola", href: "/servizi/scrub-corpo-carmagnola" },
    { label: "Epilazione laser a Carmagnola", href: "/epilazione-laser-carmagnola" },
    { label: "Manicure semipermanente a Carmagnola", href: "/servizi/manicure-semipermanente-carmagnola" },
    { label: "Laminazione ciglia a Carmagnola", href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola" },
    { label: "Pulizia viso a Carmagnola", href: "/servizi/pulizia-viso-carmagnola" },
    { label: "Massaggio rilassante a Carmagnola", href: "/servizi/massaggio-rilassante-carmagnola" },
    { label: "Linfodrenante a Carmagnola", href: "/servizi/massaggio-linfodrenante-carmagnola" },
  ] as const;

  const querySchema = buildItemListSchema({
    name: "Ricerche frequenti centro estetico Carmagnola",
    path: "/centro-estetico-carmagnola",
    items: queryTargets.map((item) => ({
      name: item.label,
      path: item.href,
    })),
  });

  const featuredLocalAreas = localAreaPages
    .filter((item) => item.cluster === "asse-carmagnola")
    .slice(0, 8);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Come scegliere il miglior centro estetico a Carmagnola?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conviene partire da obiettivo, metodo e chiarezza su tempi/prezzi. In Rebel impostiamo un piano reale, senza promesse veloci.",
        },
      },
      {
        "@type": "Question",
        name: "Avete prezzi chiari per trattamenti e laser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, il listino è pubblico e ogni scheda servizio include prezzo indicativo, indicazioni pratiche e possibilità di orientamento via WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate solo con clienti di Carmagnola?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, molte clienti arrivano anche da Carignano, Racconigi e Torino Sud. Abbiamo pagine locali dedicate per orientare il primo passo.",
        },
      },
    ],
  };

  const keyServiceSlugs = [
    "pedicure-carmagnola",
    "scrub-corpo-carmagnola",
    "epilazione-laser-corpo-carmagnola",
    "epilazione-laser-viso-carmagnola",
  ];
  const keyServices = keyServiceSlugs
    .map((slug) => servicePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof servicePages)[number] => Boolean(item));

  return (
    <main className="page-shell page-centro-estetico-carmagnola">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={querySchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Head term locale"
        title="Centro estetico a Carmagnola: percorsi chiari, prezzi leggibili, risultati progressivi."
        lead="Se stai cercando un centro estetico a Carmagnola, qui trovi i trattamenti più richiesti, le pagine prezzi e i percorsi laser/viso/corpo per partire senza confusione."
        badge="Carmagnola - Viale Barbaroux 20"
        tone="emerald"
      >
        <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
          <Link href="/contatti" className="button button-primary">
            Prenota valutazione
          </Link>
          <Link href="/listino-estetica-laser" className="button button-secondary">
            Vedi listino e prezzi
          </Link>
          <Link href="/epilazione-laser-carmagnola" className="button button-secondary">
            Epilazione laser Carmagnola
          </Link>
        </div>
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Ricerche frequenti
          </p>
          <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
            Le query più cercate nel settore estetico a Carmagnola.
          </h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {queryTargets.map((item) => (
              <Link key={item.href} href={item.href} className="card-light">
                <h3 style={{ marginTop: 0 }}>{item.label}</h3>
                <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                  Apri la pagina dedicata con dettagli utili, FAQ e orientamento pratico.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Servizi ad alta priorità locale</h2>
          <p className="lead" style={{ maxWidth: "74ch" }}>
            Queste sono le pagine che lavorano meglio sulle intenzioni commerciali: servizio + città + prezzo.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {keyServices.map((service) => (
              <Link key={service.slug} href={`/servizi/${service.slug}`} className="card">
                <h3 style={{ marginTop: 0 }}>{service.name}</h3>
                <p className="lead" style={{ marginTop: "0.35rem" }}>
                  {service.shortDescription}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>{service.priceHint}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Comuni vicini con forte traffico locale</h2>
          <p className="lead" style={{ marginTop: "0.45rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
            Se non cerchi solo Carmagnola, abbiamo pagine dedicate anche per le zone limitrofe.
          </p>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            {featuredLocalAreas.map((area) => (
              <Link key={area.slug} href={`/localita/${area.slug}`} className="card-light">
                <h3 style={{ marginTop: 0 }}>{area.city}</h3>
                <p className="lead" style={{ marginTop: "0.3rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link href="/localita" className="button button-secondary">
              Vedi tutte le località
            </Link>
            <Link href="/contatti" className="button button-primary">
              Contatti e mappa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

