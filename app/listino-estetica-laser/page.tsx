import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import { servicePages } from "@/lib/seo-content";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Listino Estetica + Epilazione Laser a Carmagnola | Prezzi Rebel",
  description:
    "Listino completo Rebel a Carmagnola: estetica avanzata e benessere, epilazione laser ed estetica epigenetica nella stessa pagina, con prezzi chiari e percorsi personalizzati.",
  path: "/listino-estetica-laser",
  keywords: [
    "listino centro estetico Carmagnola",
    "prezzi epilazione laser Carmagnola",
    "epilazione laser Rebel",
    "laser Carmagnola",
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
  const webPageSchema = buildWebPageSchema({
    name: "Listino Rebel: estetica e laser a Carmagnola",
    description:
      "Prezzi e categorie principali: estetica classica e benessere, laser e protocolli epigenetici.",
    path: "/listino-estetica-laser",
  });
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
      <JsonLd data={webPageSchema} />
      <JsonLd data={listinoItemListSchema} />

      <PageHero
        eyebrow="Listino unico"
        title="Listino Rebel: estetica avanzata, laser ed epigenetica nella stessa pagina."
        lead="Prezzi e trattamenti Rebel, ordinati per categoria. Se sei indecisa, scrivici: ti aiutiamo a scegliere da dove partire."
        badge="Listino Rebel - Centro Estetico a Carmagnola"
        tone="gold"
      />

      <section className="section" style={{ paddingTop: "20px", paddingBottom: "28px" }}>
        <div className="container">
          <div className="listino-switch">
            <a className="listino-switch-btn" href="#estetica-classica">
              <span aria-hidden="true">✦</span>
              Estetica Avanzata e Benessere
            </a>
            <a className="listino-switch-btn" href="#epilazione-laser">
              <span aria-hidden="true">◉</span>
              Epilazione Laser
            </a>
            <Link className="listino-switch-btn" href="/epilazione-laser-carmagnola">
              <span aria-hidden="true">↗</span>
              Epilazione Laser Carmagnola
            </Link>
            <a className="listino-switch-btn" href="#estetica-epigenetica">
              <span aria-hidden="true">⬡</span>
              Estetica Epigenetica
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="estetica-classica">
        <div className="container">
          <h2 className="page-title">Estetica classica e benessere</h2>
          <p className="lead">
            Servizi utili nella routine di tutti i giorni, perfetti anche come base
            per percorsi più avanzati.
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
          <h2 className="page-title">Epilazione laser a Carmagnola</h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.8)", maxWidth: "72ch" }}
          >
            L&apos;epilazione laser viene impostata sul tuo caso: zona, tipo di pelle
            e obiettivo. Usiamo tecnologia Thory con manipolo Ice Polar per lavorare
            con maggiore comfort. La valutazione iniziale è inclusa.
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
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Approfondisci laser Carmagnola
            </Link>
            <Link className="button" href="#estetica-epigenetica">
              Vai a estetica epigenetica
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Scopri tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="section epigenetica-tech-section" id="estetica-epigenetica">
        <div className="container">
          <h2 className="page-title">Estetica epigenetica</h2>
          <p className="lead">
            Protocolli viso e corpo orientati a qualità cutanea, tono e rigenerazione progressiva.
            Ogni trattamento viene scelto in base al tuo punto di partenza e all&apos;obiettivo reale.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {protocolCards.map((item) => (
              <article key={item.name} className="card glow-card">
                <h3 style={{ marginTop: 0 }}>{item.name}</h3>
                <p className="lead" style={{ marginTop: "0.28rem" }}>
                  {item.desc}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.price}</strong>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Prenota lettura iniziale
            </Link>
            <Link className="button button-secondary" href="/protocolli-epigenetici">
              Approfondisci i protocolli
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card listino-categories-card">
            <h2 style={{ marginTop: 0 }}>Le 3 categorie principali a Carmagnola</h2>
            <p className="lead" style={{ marginTop: "0.2rem" }}>
              Se arrivi da Carmagnola, Carignano, Racconigi o Torino Sud, parti da qui:
              scegli la categoria più vicina al tuo obiettivo e ti guidiamo noi.
            </p>
            <div className="listino-categories-list">
              <a href="#estetica-classica" className="listino-category-item">
                <strong>Estetica Avanzata e Benessere</strong>
                <span>
                  Percorsi viso/corpo per qualità della pelle, equilibrio e continuità nel tempo.
                </span>
              </a>
              <a href="#epilazione-laser" className="listino-category-item">
                <strong>Epilazione Laser</strong>
                <span>
                  Trattamenti laser personalizzati per zone e fototipo, con valutazione iniziale inclusa.
                </span>
              </a>
              <a href="#estetica-epigenetica" className="listino-category-item">
                <strong>Estetica Epigenetica</strong>
                <span>
                  Protocolli evoluti orientati a rigenerazione, tono e luminosità progressiva.
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}



