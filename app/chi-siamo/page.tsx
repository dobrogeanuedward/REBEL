import type { Metadata } from "next";
import Link from "next/link";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { StoreGallery } from "@/components/store-gallery";
import { storeGalleryImages } from "@/lib/content";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chi Siamo: Centro Estetico Avanzato a Carmagnola",
  description:
    "Conosci Rebel: studio estetico a Carmagnola con estetica epigenetica, trattamenti viso/corpo e laser, impostati con metodo e seguiti nel tempo.",
  path: "/chi-siamo",
  keywords: [
    "chi siamo centro estetico Carmagnola",
    "Rebel estetica Carmagnola",
    "estetista specializzata Carmagnola",
  ],
});

export default function ChiSiamoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Chi siamo", path: "/chi-siamo" },
  ]);

  return (
    <main className="page-shell page-chi-siamo">
      <JsonLd data={breadcrumb} />
      <PageHero
        eyebrow="Identità Rebel"
        title="Rebel è un centro estetico a Carmagnola dove la pelle si guarda davvero."
        lead="Qui si parte da una cosa semplice: capire la tua pelle oggi e cosa vuoi ottenere. Poi impostiamo un percorso (viso, corpo o laser) con metodo, calma e continuità."
        badge="Viale Barbaroux 20 • Carmagnola"
        tone="rose"
      />

      <section className="section" style={{ paddingTop: "44px", paddingBottom: "36px" }}>
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Visione</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Per noi la bellezza non è una correzione di facciata. È pelle che sta bene:
              più luminosa, più comoda, più stabile. Ci arriviamo con scelte precise e con
              un percorso che puoi seguire davvero.
            </p>
          </article>
          <article className="card mission-card">
            <p className="eyebrow">Chi siamo</p>
            <h2 style={{ marginTop: "0.55rem" }}>
              Un modo diverso di fare estetica: meno frenesia, più metodo.
            </h2>
            <p className="lead" style={{ marginTop: "0.6rem" }}>
              Rebel è uno studio a Carmagnola. Lavoriamo con estetica epigenetica, trattamenti
              viso/corpo e laser: l&apos;obiettivo è darti un piano ordinato fin dall&apos;inizio,
              senza promesse e senza corse.
            </p>
            <div className="mission-actions">
              <Link href="/servizi" className="button button-primary">
                Scopri i servizi
              </Link>
              <Link href="/competenze" className="button button-secondary">
                Leggi le competenze
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Instagram
          </p>
          <h2 className="page-title" style={{ marginTop: "0.6rem", color: "#271f38" }}>
            Dal nostro studio
          </h2>
          <p className="lead" style={{ color: "rgba(39,31,56,0.78)", marginTop: "0.8rem" }}>
            Scatti e aggiornamenti dal nostro studio a Carmagnola.
          </p>
          <InstagramFeed showReels={false} showPosts={true} maxPosts={6} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.66)" }}>
            Rebel • Estetica Epigenetica
          </p>
          <h2 className="page-title" style={{ marginTop: "0.58rem", color: "#271f38" }}>
            Dentro Rebel
          </h2>
          <p className="lead" style={{ color: "rgba(39,31,56,0.78)" }}>
            Qualche scatto per farti vedere spazi, luce e atmosfera.
          </p>
          <StoreGallery images={storeGalleryImages} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Il nostro modo di lavorare</h2>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            <article className="card glow-card">
              <h3 style={{ marginTop: 0 }}>Ascolto</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Si parte da te, non dal pacchetto: obiettivo, tempi, pelle di oggi.
              </p>
            </article>
            <article className="card glow-card">
              <h3 style={{ marginTop: 0 }}>Precisione tecnica</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Manualità, attivi e tecnologia: li scegliamo con criterio, senza eccessi.
              </p>
            </article>
            <article className="card glow-card">
              <h3 style={{ marginTop: 0 }}>Progressi reali</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Ci diamo un obiettivo e lo seguiamo con costanza. Se serve, cambiamo rotta.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}



