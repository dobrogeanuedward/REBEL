import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import { competencePages, servicePages } from "@/lib/seo-content";
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
  const editorialSlugs = [
    "epilazione-laser-viso-carmagnola-guida-realistica",
    "epilazione-laser-corpo-carmagnola-zone-tempi",
    "pulizia-viso-carmagnola-frequenza-benefici",
    "linfodrenante-carmagnola-guida-pratica",
  ];
  const featuredEditorials = editorialSlugs
    .map((slug) => competencePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item));
  const featuredProtocols = protocolCards.slice(0, 6);
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
        title="Tutti i servizi Rebel a Carmagnola, organizzati per obiettivo reale."
        lead="In questa pagina trovi una panoramica completa di trattamenti viso, corpo, epilazione laser e protocolli epigenetici: chiara, ordinata e subito utile."
        badge="Hub servizi completo"
        tone="emerald"
      />

      <section className="section">
        <div className="container split">
          <div className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Un unico hub per scegliere senza confusione</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              In Rebel ogni percorso parte dall&apos;ascolto e si costruisce in base
              ai tuoi obiettivi. Qui trovi tutti i servizi con logica chiara, così
              sai subito da dove iniziare e cosa aspettarti.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770780624/vetrtina2_krgcys.png"
                alt="Studio Rebel a Carmagnola"
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
            <p className="lead" style={{ marginTop: "0.9rem", marginBottom: 0 }}>
              &quot;La bellezza non si aggiunge, si riattiva!&quot;
            </p>
          </div>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Come usare questa pagina</h2>
            <ul className="list-clean">
              <li>- scegli prima la macro categoria</li>
              <li>- apri il servizio specifico per dettagli e FAQ</li>
              <li>- confronta in 2 minuti opzioni e prezzo indicativo</li>
              <li>- poi fissiamo insieme il tuo piano in studio</li>
            </ul>
            <div className="services-hub-shortcuts">
              <Link className="services-hub-shortcut" href="/epilazione-laser-carmagnola">Epilazione laser Carmagnola</Link>
              <a className="services-hub-shortcut" href="#servizi-estetica">Estetica e benessere</a>
              <a className="services-hub-shortcut" href="#servizi-laser">Epilazione laser</a>
              <a className="services-hub-shortcut" href="#servizi-epigenetica">Estetica epigenetica</a>
              <a className="services-hub-shortcut" href="#servizi-editoriali">Approfondimenti</a>
              <Link className="services-hub-shortcut" href="/contatti">Consulenza personalizzata</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Percorsi
          </p>
          <h2 className="page-title" style={{ marginTop: "0.55rem" }}>
            Scegli per obiettivo e passa subito alla sezione giusta.
          </h2>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            <a className="card-light" href="#servizi-estetica">
              <h3 style={{ marginTop: 0 }}>Estetica avanzata e benessere</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Trattamenti viso, corpo e cura mani per riequilibrio, tono e luminosita.
              </p>
            </a>
            <a className="card-light" href="#servizi-laser">
              <h3 style={{ marginTop: 0 }}>Epilazione laser</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Percorsi personalizzati su area, fototipo e obiettivo, con monitoraggio progressivo.
              </p>
            </a>
            <a className="card-light" href="#servizi-epigenetica">
              <h3 style={{ marginTop: 0 }}>Estetica Epigenetica</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Protocolli mirati con attivi intelligenti e tecnologie integrate in modo calibrato.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="servizi-estetica">
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

      <section className="section section-light" id="servizi-laser">
        <div className="container">
          <h2 className="page-title">Epilazione laser a Carmagnola</h2>
          <p className="lead" style={{ marginTop: "0.5rem", maxWidth: "70ch", color: "rgba(39,31,56,0.78)" }}>
            Percorsi programmati su zona, fototipo e risposta della pelle, con
            progressione chiara e sostenibile.
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

      <section className="section epigenetica-tech-section" id="servizi-epigenetica">
        <div className="container">
          <h2 className="page-title">Estetica Epigenetica</h2>
          <p className="lead" style={{ maxWidth: "74ch", marginTop: "0.55rem" }}>
            Una selezione dei protocolli piu richiesti in studio. Per la lista completa e
            gli approfondimenti, puoi consultare anche la pagina dedicata ai protocolli.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {featuredProtocols.map((protocol) => (
              <article key={protocol.name} className="card">
                <h3 style={{ marginTop: 0 }}>{protocol.name}</h3>
                <p className="lead" style={{ marginTop: "0.35rem" }}>
                  {protocol.desc}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>{protocol.price}</strong>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Laser a Carmagnola
            </Link>
            <Link className="button button-primary" href="/protocolli-epigenetici">
              Vedi tutti i protocolli
            </Link>
            <Link className="button button-secondary" href="/contatti">
              Richiedi consulenza
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light" id="servizi-editoriali">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Approfondimenti
          </p>
          <h2 className="page-title" style={{ marginTop: "0.55rem" }}>
            Quattro letture che fanno chiarezza, prima di prenotare.
          </h2>
          <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "72ch" }}>
            Se stai valutando il laser o vuoi capire meglio cosa aspettarti da un percorso,
            qui trovi testi positivi, chiari e tecnici dove serve. L&apos;idea e semplice: farti
            arrivare alla consulenza con le domande giuste e con meno confusione.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {featuredEditorials.map((item) => (
              <Link key={item.slug} href={`/competenze/${item.slug}`} className="card-light">
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p
                  style={{
                    margin: "0.35rem 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.78)",
                  }}
                >
                  {item.shortDescription}
                </p>
                {item.benefits.length > 0 && (
                  <ul className="list-clean insight-points" style={{ marginTop: "0.65rem" }}>
                    {item.benefits.slice(0, 2).map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                )}
                <small style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.64)" }}>
                  Leggi l&apos;articolo
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Non sai quale percorso scegliere?</h2>
            <p className="lead" style={{ marginTop: "0.45rem", maxWidth: "72ch" }}>
              Ti aiutiamo noi: in consulenza definiamo priorita, tempi e combinazione
              piu adatta tra estetica, laser ed epigenetica.
            </p>
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Prenota consulenza
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Apri listino completo
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

