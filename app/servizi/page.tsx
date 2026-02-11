import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { servicePages } from "@/lib/seo-content";
import { buildBreadcrumbSchema, buildItemListSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Servizi Estetici a Carmagnola | Viso, Corpo ed Epilazione Laser",
  description:
    "Tutti i servizi Rebel a Carmagnola: trattamenti viso e corpo, manicure, laminazione ed epilazione laser a Carmagnola con percorsi personalizzati.",
  path: "/servizi",
  keywords: [
    "servizi centro estetico Carmagnola",
    "trattamenti estetici Carmagnola",
    "lista servizi estetista Carmagnola",
    "epilazione laser Carmagnola",
    "laser Carmagnola",
    "epilazione laser Rebel",
  ],
});

export default function ServiziHubPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Servizi", path: "/servizi" },
  ]);

  const estetica = servicePages.filter(
    (service) => service.category === "estetica-classica",
  );
  const laser = servicePages.filter((service) => service.category === "laser");
  const serviceListSchema = buildItemListSchema({
    name: "Servizi Rebel Carmagnola",
    path: "/servizi",
    items: servicePages.map((service) => ({
      name: service.name,
      path: `/servizi/${service.slug}`,
    })),
  });

  return (
    <main className="page-shell page-servizi">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceListSchema} />
      <PageHero
        eyebrow="I nostri servizi"
        title="Tutti i servizi Rebel a Carmagnola, organizzati per obiettivo."
        lead="Se non sai da dove partire, va benissimo: qui trovi una panoramica chiara di quello che facciamo, con prezzi e spiegazioni semplici."
        badge="Scegli il percorso giusto per te"
        tone="emerald"
      />

      <section className="section">
        <div className="container split">
          <div className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Esperienza in studio</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              In Rebel il percorso inizia con ascolto e lettura iniziale. Da lì
              si sceglie il servizio più adatto, con una proposta chiara e
              sostenibile nel tempo.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src="https://epikey.rebelepigenetica.it/assets/rebel/vetrina.webp"
                alt="Centro estetico Rebel a Carmagnola"
                width={1200}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              />
            </div>
          </div>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Come usare questa pagina</h2>
            <ul className="list-clean">
              <li>- scegli prima la categoria che ti interessa</li>
              <li>- apri la scheda servizio per dettagli e FAQ</li>
              <li>- se hai dubbi, scrivici su WhatsApp</li>
              <li>- in studio definiamo insieme il piano migliore</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Estetica classica e benessere</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {estetica.map((item) => (
              <Link key={item.slug} href={`/servizi/${item.slug}`} className="card-light">
                <h3 style={{ marginTop: 0 }}>{item.name}</h3>
                <p
                  style={{
                    margin: "0.35rem 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {item.shortDescription}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {item.priceHint}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Epilazione laser a Carmagnola</h2>
          <p className="lead" style={{ marginTop: "0.5rem", maxWidth: "70ch" }}>
            Percorsi di epilazione laser Rebel con tecnologia Thory, programmati su
            zona, fototipo e obiettivo.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {laser.map((item) => (
              <Link key={item.slug} href={`/servizi/${item.slug}`} className="card">
                <h3 style={{ marginTop: 0 }}>{item.name}</h3>
                <p className="lead" style={{ marginTop: "0.35rem" }}>
                  {item.shortDescription}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {item.priceHint}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

