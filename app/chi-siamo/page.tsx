import type { Metadata } from "next";
import Image from "next/image";
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
    "Scopri la visione Rebel: centro estetico a Carmagnola focalizzato su estetica epigenetica, metodo personalizzato e risultati misurabili.",
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
        eyebrow="Identita Rebel"
        title="Un laboratorio estetico a Carmagnola costruito su scienza, misura e ascolto."
        lead="Rebel nasce per superare l'estetica standardizzata: ogni percorso parte da lettura iniziale, obiettivi reali e metodo replicabile. Lavoriamo per generare fiducia, non promesse generiche."
        badge="Centro estetico locale ad alta specializzazione"
        tone="rose"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Visione</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Per noi la bellezza non e una correzione esterna. E un equilibrio
              biologico che puo essere riattivato con protocolli pertinenti,
              continuita e precisione esecutiva.
            </p>
            <div className="hero-visual" style={{ marginTop: "1rem", borderRadius: 14 }}>
              <Image
                src="https://rebelepigenetica.it/assets/rebel/0.webp"
                alt="Interni Rebel Carmagnola"
                width={1280}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              />
            </div>
          </article>
          <article className="card">
            <h2 style={{ marginTop: 0 }}>Missione locale</h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Diventare il punto di riferimento per l&apos;estetica avanzata a
              Carmagnola, offrendo percorsi trasparenti per residenti e clienti
              dell&apos;area Torino Sud.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
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
            Reel e post dal centro estetico Rebel.
          </h2>
          <p className="lead" style={{ color: "rgba(39,31,56,0.78)", marginTop: "0.8rem" }}>
            Trattamenti, risultati e momenti dal nostro studio a Carmagnola.
          </p>
          <InstagramFeed showReels={true} showPosts={true} maxReels={4} maxPosts={3} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.66)" }}>
            Lo studio Rebel
          </p>
          <h2 className="page-title" style={{ marginTop: "0.58rem", color: "#271f38" }}>
            Le foto reali del negozio, proprio come lo trovi quando arrivi.
          </h2>
          <p className="lead" style={{ color: "rgba(39,31,56,0.78)" }}>
            Abbiamo voluto mostrare l'ambiente in modo trasparente: luce, spazi,
            dettagli e atmosfera dello studio a Carmagnola.
          </p>
          <StoreGallery images={storeGalleryImages} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Cosa rende Rebel differente.</h2>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            <article className="card glow-card">
              <h3 style={{ marginTop: 0 }}>Ascolto profondo</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                L&apos;analisi parte dalla persona, non dal trattamento da vendere.
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
                Attivi, manualita e tecnologia integrati con logica e criterio.
              </p>
            </article>
            <article className="card glow-card">
              <h3 style={{ marginTop: 0 }}>Risultati misurabili</h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Definiamo obiettivi, monitoriamo progressi e ottimizziamo il piano.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}



