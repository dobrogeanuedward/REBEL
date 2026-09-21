import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import { competencePages, editorialImageAssets, servicePages } from "@/lib/seo-content";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Servizi Estetici a Carmagnola | Viso, Corpo ed Epilazione Laser",
  description:
    "Servizi Rebel a Carmagnola: bellezza viso e corpo, protocolli epigenetici ed epilazione laser con consulenza personalizzata e risultati visibili.",
  path: "/servizi",
  image: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
  keywords: [
    "servizi centro estetico Carmagnola",
    "trattamenti estetici Carmagnola",
    "lista servizi estetista Carmagnola",
    "epilazione laser Carmagnola",
    "pedicure Carmagnola",
    "scrub corpo Carmagnola",
    "manicure semipermanente Carmagnola",
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
  // Surface high-conversion services early (without removing categories).
  const esteticaSorted = estetica
    .slice()
    .sort((a, b) => {
      const score = (slug: string) => {
        if (slug === "pulizia-viso-carmagnola") return 6;
        if (slug === "manicure-semipermanente-carmagnola") return 5;
        if (slug === "laminazione-ciglia-sopracciglia-carmagnola") return 4;
        if (slug === "pedicure-carmagnola") return 3;
        if (slug === "massaggio-rilassante-carmagnola") return 2;
        if (slug === "massaggio-linfodrenante-carmagnola") return 1;
        return 0;
      };
      return score(b.slug) - score(a.slug);
    });
  const laser = servicePages.filter((service) => service.category === "laser");
  const editorialSlugs = [
    "epilazione-laser-ascelle-carmagnola-guida-pratica",
    "epilazione-laser-inguine-carmagnola-guida-pratica",
    "laser-uomo-carmagnola-guida-pratica",
    "epilazione-laser-estate-sole-carmagnola",
    "peli-incarniti-laser-carmagnola",
    "pulizia-viso-carmagnola-frequenza-benefici",
    "manicure-semipermanente-carmagnola-durata-rimozione",
    "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
    "massaggio-rilassante-carmagnola-cervicale-stress",
    "scrub-corpo-carmagnola-quando-farlo",
    "pedicure-carmagnola-ogni-quanto-talloni",
    "pressomassaggio-carmagnola-guida-pratica",
  ];
  const featuredEditorials = editorialSlugs
    .map((slug) => competencePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item));
  const featuredProtocols = protocolCards.slice(0, 6);
  const categoryVisuals = {
    estetica: {
      src: editorialImageAssets.puliziaViso,
      alt: "Trattamento viso professionale Rebel in ambiente luminoso",
    },
    laser: {
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser Rebel in cabina a Carmagnola",
    },
  } as const;
  const serviceListSchema = buildItemListSchema({
    name: "Servizi Rebel Carmagnola",
    path: "/servizi",
    items: servicePages.map((service) => ({
      name: service.name,
      path: `/servizi/${service.slug}`,
    })),
  });
  const protocolListSchema = buildItemListSchema({
    name: "Protocolli epigenetici Rebel (selezione)",
    path: "/servizi",
    items: featuredProtocols.map((protocol) => ({
      name: protocol.name,
      path: `/protocolli/${protocol.slug}`,
    })),
  });
  const webPageSchema = buildWebPageSchema({
    name: "Servizi Rebel a Carmagnola",
    description:
      "Panoramica dei servizi Rebel: bellezza viso e corpo, laser e protocolli epigenetici da scegliere e prenotare.",
    path: "/servizi",
  });

  return (
    <main className="page-shell page-servizi">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceListSchema} />
      <JsonLd data={protocolListSchema} />
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="I nostri servizi"
        title="Servizi Rebel: viso, corpo, laser ed epigenetica per una bellezza che si vede."
        lead="Ogni servizio valorizza pelle, linee del viso, armonia del corpo e glow cutaneo con una consulenza beauty e un accesso immediato al trattamento giusto."
        badge="Bellezza su misura"
        tone="emerald"
      />

      <section className="section">
        <div className="container split">
          <div className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Una panoramica beauty che porta subito al trattamento giusto</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Qui trovi viso, corpo, laser ed epigenetica ordinati per risultato: apri il servizio,
              scopri il prezzo indicativo e prenota il primo passo verso una bellezza piu&apos; luminosa.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src={siteConfig.assets.heroStorefront}
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
              Scegli obiettivo, area da valorizzare e ritmo desiderato: da qui si apre un percorso beauty elegante e preciso.
            </p>
          </div>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Come scegliere e prenotare</h2>
            <ul className="list-clean">
              <li>- scegli l&apos;area che vuoi valorizzare</li>
              <li>- apri la scheda con dettagli, FAQ e prezzo indicativo</li>
              <li>- prenota la consulenza beauty</li>
              <li>- avvia il calendario piu&apos; adatto al tuo glow</li>
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
            Scegli l&apos;area che vuoi valorizzare e vai al trattamento giusto.
          </h2>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            <a className="card-light" href="#servizi-estetica">
              <h3 style={{ marginTop: 0 }}>Estetica avanzata e benessere</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Trattamenti viso, corpo, mani e piedi per riequilibrio, tono e luminosità.
                
              </p>
            </a>
            <a className="card-light" href="#servizi-laser">
              <h3 style={{ marginTop: 0 }}>Epilazione laser</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Zone viso e corpo: valutazione iniziale, parametri su misura e calendario.
              </p>
            </a>
            <a className="card-light" href="#servizi-epigenetica">
              <h3 style={{ marginTop: 0 }}>Estetica Epigenetica</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Protocolli viso/corpo costruiti per qualità cutanea, tono e luminosità.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="servizi-estetica">
        <div className="container">
          <h2 className="page-title">Estetica classica e benessere</h2>
          <div className="card-light" style={{ marginTop: "0.85rem" }}>
            <div className="hero-visual" style={{ borderRadius: 14 }}>
              <Image
                src={categoryVisuals.estetica.src}
                alt={categoryVisuals.estetica.alt}
                width={1600}
                height={900}
                style={{ width: "100%", height: "auto", borderRadius: 14 }}
              />
            </div>
            <p className="lead" style={{ marginTop: "0.75rem", color: "rgba(39,31,56,0.78)" }}>
              Viso, corpo, mani e piedi con rituali beauty che portano luce, ordine, armonia e cura visibile.
            </p>
          </div>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {esteticaSorted.map((item) => (
              <Link key={item.slug} href={`/servizi/${item.slug}`} className="card-light">
                {item.heroImage ? (
                  <div className="editorial-cover" style={{ marginBottom: "0.7rem" }}>
                    <Image
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      width={1200}
                      height={675}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ) : null}
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
            Epilazione laser per comfort, uniformita&apos; e leggerezza quotidiana, con zona, fototipo e progressione calibrati.
          </p>
          <div className="card" style={{ marginTop: "0.85rem" }}>
            <div className="hero-visual" style={{ borderRadius: 14 }}>
              <Image
                src={categoryVisuals.laser.src}
                alt={categoryVisuals.laser.alt}
                width={1600}
                height={900}
                style={{ width: "100%", height: "auto", borderRadius: 14 }}
              />
            </div>
            <p className="lead" style={{ marginTop: "0.75rem" }}>
              Metodo laser Rebel: valutazione iniziale, zone prioritarie e una pelle sempre piu&apos; uniforme seduta dopo seduta.
            </p>
          </div>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {laser.map((item) => (
              <Link key={item.slug} href={`/servizi/${item.slug}`} className="card">
                {item.heroImage ? (
                  <div className="editorial-cover" style={{ marginBottom: "0.7rem" }}>
                    <Image
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      width={1200}
                      height={675}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ) : null}
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
          <div className="card-light" style={{ marginTop: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>Laser uomo: barba/collo, schiena, torace</h3>
            <p className="lead" style={{ marginTop: "0.35rem", color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}>
              Le pagine dedicate aprono un percorso laser preciso, confortevole e facile da prenotare.
            </p>
            <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-viso-uomo-carmagnola">
                Laser viso uomo
              </Link>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-corpo-uomo-carmagnola">
                Laser corpo uomo
              </Link>
              <Link className="button button-secondary" href="/competenze/laser-uomo-carmagnola-guida-pratica">
                Guida: laser uomo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section epigenetica-tech-section" id="servizi-epigenetica">
        <div className="container">
          <h2 className="page-title">Estetica Epigenetica</h2>
          <p className="lead" style={{ maxWidth: "74ch", marginTop: "0.55rem" }}>
            Una selezione dei protocolli epigenetici piu&apos; richiesti per glow, tono, densita&apos; e bellezza progressiva.
          </p>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {featuredProtocols.map((protocol) => (
              <Link
                key={protocol.slug}
                href={`/protocolli/${protocol.slug}`}
                className="card"
                aria-label={`Apri ${protocol.name}`}
              >
                <h3 style={{ marginTop: 0 }}>{protocol.name}</h3>
                <p className="lead" style={{ marginTop: "0.35rem" }}>
                  {protocol.desc}
                </p>
                <strong style={{ fontFamily: "var(--font-inter), sans-serif" }}>{protocol.price}</strong>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Laser a Carmagnola
            </Link>
            <Link className="button button-primary" href="/protocolli-epigenetici">
              Scopri tutti i protocolli
            </Link>
            <Link className="button button-secondary" href="/contatti">
              Prenota consulenza
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
            Guide beauty per scegliere con desiderio e visione.
          </h2>
          <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "72ch" }}>
            Le guide accompagnano la scelta del trattamento, chiariscono glow atteso, tempi e progressione
            e preparano una consulenza ancora piu&apos; efficace.
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
            <h2 style={{ marginTop: 0 }}>Scegli il percorso che valorizza davvero la tua bellezza</h2>
            <p className="lead" style={{ marginTop: "0.45rem", maxWidth: "72ch" }}>
              La consulenza Rebel individua priorita&apos;, glow desiderato e combinazione ideale tra estetica, laser ed epigenetica.
            </p>
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Prenota la tua consulenza
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Apri trattamenti e prezzi
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

