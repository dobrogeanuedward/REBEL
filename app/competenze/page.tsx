import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { competencePages } from "@/lib/seo-content";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Competenze ed Editoriali Estetici Locali | Carmagnola e Dintorni",
  description:
    "Approfondimenti e articoli editoriali Rebel sulle principali competenze estetiche a Carmagnola: estetica avanzata, trattamenti viso/corpo, laser e beauty routine professionale.",
  path: "/competenze",
  image: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public",
  keywords: [
    "competenze centro estetico Carmagnola",
    "estetica avanzata Carmagnola",
    "guide trattamenti Carmagnola",
  ],
});

export default function CompetenzeHubPage() {
  const compactTitle = (value: string) => value.replace(/\s+a Carmagnola$/i, "").trim();
  const featuredSlugs = [
    "pulizia-viso-carmagnola-frequenza-benefici",
    "pedicure-carmagnola-ogni-quanto-talloni",
    "pressomassaggio-carmagnola-guida-pratica",
    "epilazione-laser-ascelle-carmagnola-guida-pratica",
    "epilazione-laser-inguine-carmagnola-guida-pratica",
    "laser-uomo-carmagnola-guida-pratica",
    "peli-incarniti-laser-carmagnola",
    "manicure-semipermanente-carmagnola-durata-rimozione",
    "pelle-opaca-grana-irregolare-carmagnola",
    "contorno-occhi-gonfiore-occhiaie-carmagnola",
  ];
  const featuredGuides = featuredSlugs
    .map((slug) => competencePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item));

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Competenze", path: "/competenze" },
  ]);
  const competenceListSchema = buildItemListSchema({
    name: "Guide e competenze Rebel",
    path: "/competenze",
    items: competencePages.map((competence) => ({
      name: competence.title,
      path: `/competenze/${competence.slug}`,
    })),
  });
  const webPageSchema = buildWebPageSchema({
    name: "Guide e competenze Rebel",
    description:
      "Guide beauty su laser, viso e corpo per scegliere il trattamento piu' desiderabile e adatto a te.",
    path: "/competenze",
  });

  return (
    <main className="page-shell page-competenze">
      <JsonLd data={breadcrumb} />
      <JsonLd data={competenceListSchema} />
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Approfondimenti"
        title="Guide Rebel: la cultura beauty che rende la scelta piu' sicura e desiderabile."
        lead="Qui trovi visione, criteri e approfondimenti su viso, corpo e laser per arrivare al trattamento giusto con piu' desiderio, piu' gusto e piu' consapevolezza."
        badge="Beauty intelligence prima di prenotare"
        tone="ocean"
      />

      <section className="section">
        <div className="container split">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Perché abbiamo creato queste guide</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Abbiamo raccolto qui le risposte che in studio trasformano l&apos;incertezza in
              desiderio ordinato: cosa aspettarti, come leggere il risultato e quale trattamento
              apre la versione piu&apos; bella della tua pelle o del tuo corpo.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 16 }}>
              <Image
                src="https://epikey.rebelepigenetica.it/assets/rebel/vetrina2.webp"
                alt="Dettaglio studio Rebel"
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
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Da dove iniziare</h2>
            <ul className="list-clean">
              <li>- scegli una guida che ti somiglia (zona, obiettivo, tempi)</li>
              <li>- guarda i servizi consigliati: spesso rivelano subito il trattamento giusto</li>
              <li>- se preferisci, scrivici due righe e definiamo insieme la priorita&apos;</li>
              <li>- prenota quando senti che il risultato ti somiglia davvero</li>
            </ul>
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                Epilazione laser Carmagnola
              </Link>
              <Link className="button button-secondary" href="/competenze/laser-uomo-carmagnola-guida-pratica">
                Laser uomo
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {featuredGuides.length > 0 ? (
        <section className="section section-light">
          <div className="container">
            <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
              Per partire subito
            </p>
            <h2 className="page-title" style={{ marginTop: "0.55rem" }}>
              Le guide più richieste (laser e viso).
            </h2>
            <p className="lead" style={{ marginTop: "0.5rem", color: "rgba(39,31,56,0.78)", maxWidth: "72ch" }}>
              Sono le letture che aprono piu&apos; spesso una prenotazione: concrete, desiderabili, facili da trasformare in scelta.
            </p>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              {featuredGuides.map((item) => (
                <Link key={item.slug} href={`/competenze/${item.slug}`} className="card glow-card">
                  {item.heroImage ? (
                    <div className="editorial-cover" style={{ marginBottom: "0.75rem" }}>
                      <Image
                        src={item.heroImage.src}
                        alt={item.heroImage.alt}
                        width={1200}
                        height={675}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ) : null}
                  <h3 style={{ marginTop: 0 }}>{compactTitle(item.title)}</h3>
                  <p className="lead" style={{ marginTop: 0 }}>
                    {item.shortDescription}
                  </p>
                  <small style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(39,31,56,0.65)" }}>
                    Apri la guida
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Competenze pubblicate</h2>
          <div className="grid grid-2" style={{ marginTop: "1rem" }}>
            {competencePages.map((item) => (
              <Link key={item.slug} href={`/competenze/${item.slug}`} className="card-light">
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
                <small
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(39,31,56,0.65)",
                  }}
                >
                  Apri la guida
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

