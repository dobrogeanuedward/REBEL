import type { Metadata } from "next";
import Image from "next/image";
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
import { editorialImageAssets, servicePages } from "@/lib/seo-content";

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
    {
      label: "Pedicure a Carmagnola",
      href: "/servizi/pedicure-carmagnola",
      description: "Se vuoi piedi ordinati e più comodi nella vita di tutti i giorni, qui trovi la scheda completa.",
      image: {
        src: editorialImageAssets.pedicure,
        alt: "Pedicure professionale in studio a Carmagnola",
      },
    },
    {
      label: "Scrub corpo a Carmagnola",
      href: "/servizi/scrub-corpo-carmagnola",
      description: "Una soluzione pratica se senti la pelle ruvida o spenta e vuoi un risultato pulito, senza eccessi.",
      image: {
        src: editorialImageAssets.scrubCorpo,
        alt: "Scrub corpo professionale Rebel a Carmagnola",
      },
    },
    {
      label: "Epilazione laser a Carmagnola",
      href: "/epilazione-laser-carmagnola",
      description: "Guida principale per capire zone, tempi e gestione reale del percorso laser.",
      image: {
        src: editorialImageAssets.laserCorpo,
        alt: "Epilazione laser corpo in cabina a Carmagnola",
      },
    },
    {
      label: "Manicure semipermanente a Carmagnola",
      href: "/servizi/manicure-semipermanente-carmagnola",
      description: "Ideale se cerchi mani curate e un effetto ordinato che resta bello anche da vicino.",
      image: {
        src: editorialImageAssets.manicureSemipermanente,
        alt: "Manicure semipermanente con finish naturale",
      },
    },
    {
      label: "Laminazione ciglia a Carmagnola",
      href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
      description: "Per uno sguardo più definito ma naturale, senza stravolgere la tua base.",
      image: {
        src: editorialImageAssets.laminazione,
        alt: "Laminazione ciglia e sopracciglia a Carmagnola",
      },
    },
    {
      label: "Pulizia viso a Carmagnola",
      href: "/servizi/pulizia-viso-carmagnola",
      description: "Una buona partenza quando vuoi rimettere ordine alla pelle e capire come mantenerla bene.",
      image: {
        src: editorialImageAssets.puliziaViso,
        alt: "Pulizia viso professionale in cabina Rebel",
      },
    },
    {
      label: "Massaggio rilassante a Carmagnola",
      href: "/servizi/massaggio-rilassante-carmagnola",
      description: "Perfetto quando senti schiena e spalle sempre in tensione e vuoi staccare davvero.",
      image: {
        src: editorialImageAssets.massaggioRilassante,
        alt: "Massaggio rilassante professionale a Carmagnola",
      },
    },
    {
      label: "Linfodrenante a Carmagnola",
      href: "/servizi/massaggio-linfodrenante-carmagnola",
      description: "Se senti gonfiore o pesantezza, qui trovi un approccio progressivo e realistico.",
      image: {
        src: editorialImageAssets.linfodrenante,
        alt: "Massaggio linfodrenante professionale in studio",
      },
    },
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
        eyebrow="Centro estetico a Carmagnola"
        title="Cerchi un centro estetico a Carmagnola? Ti aiutiamo a capire da dove partire."
        lead="Se vuoi orientarti in fretta, qui trovi i trattamenti che ci chiedono più spesso in studio: laser, pedicure, scrub corpo, viso e benessere. Ogni scheda è chiara e concreta."
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
            Da dove iniziare
          </p>
          <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
            Le richieste che arrivano più spesso in studio.
          </h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {queryTargets.map((item) => (
              <Link key={item.href} href={item.href} className="card-light">
                <div className="editorial-cover" style={{ marginBottom: "0.7rem" }}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1200}
                    height={675}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h3 style={{ marginTop: 0 }}>{item.label}</h3>
                <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Servizi scelti spesso da chi ci scrive per la prima volta</h2>
          <p className="lead" style={{ maxWidth: "74ch" }}>
            Se vuoi un primo passo semplice ma efficace, queste sono le pagine da aprire prima.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {keyServices.map((service) => (
              <Link key={service.slug} href={`/servizi/${service.slug}`} className="card">
                {service.heroImage ? (
                  <div className="editorial-cover" style={{ marginBottom: "0.75rem" }}>
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      width={1200}
                      height={675}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ) : null}
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
          <h2 className="page-title">Non sei di Carmagnola? Ecco le pagine per i comuni vicini</h2>
          <p className="lead" style={{ marginTop: "0.45rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
            Così trovi subito info utili su distanza, percorso consigliato e primo step più sensato per la tua zona.
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

