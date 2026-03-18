import type { Metadata } from "next";
import Link from "next/link";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { StoreGallery } from "@/components/store-gallery";
import { storeGalleryImages } from "@/lib/content";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chi Siamo: Centro Estetico Avanzato a Carmagnola",
  description:
    "Conosci Rebel: boutique beauty a Carmagnola con estetica epigenetica, trattamenti viso e corpo e laser costruiti per far emergere luce, tono e presenza.",
  path: "/chi-siamo",
  openGraphType: "article",
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
  const webPageSchema = buildWebPageSchema({
    name: "Chi siamo: Rebel Carmagnola",
    description:
      "Identita' Rebel, visione beauty e modo di lavorare su viso, corpo e laser a Carmagnola.",
    path: "/chi-siamo",
  });
  const articleSchema = buildArticleSchema({
    headline: "Chi siamo: Rebel a Carmagnola",
    description:
      "Identita', metodo e atmosfera Rebel: la nostra idea di bellezza epigenetica a Carmagnola.",
    path: "/chi-siamo",
    keywords: ["chi siamo Rebel", "centro estetico Carmagnola", "estetica epigenetica"],
    section: "Chi siamo",
  });

  return (
    <main className="page-shell page-chi-siamo">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={articleSchema} />
      <PageHero
        eyebrow="Identità Rebel"
        title="Rebel e' il luogo in cui la bellezza prende direzione."
        lead="A Carmagnola lavoriamo su pelle, viso, corpo e laser con una visione precisa: far emergere luce, tono, armonia e una presenza che si nota."
        badge="Viale Barbaroux 20 • Carmagnola"
        tone="rose"
      />

      <section className="section section-tight">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 className="mt-0">Visione</h2>
            <p className="lead mt-0">
              Per noi la bellezza e&apos; pelle luminosa, linee piu&apos; armoniose, corpo piu&apos; leggero,
              sguardo piu&apos; curato. Ogni scelta nasce per alzare il valore percepito del risultato,
              seduta dopo seduta.
            </p>
          </article>
          <article className="card mission-card">
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-sm">
              Un modo piu&apos; alto di fare estetica: piu&apos; gusto, piu&apos; metodo, piu&apos; risultato.
            </h2>
            <p className="lead mt-sm">
              Rebel e&apos; uno studio a Carmagnola. Estetica epigenetica, trattamenti viso e corpo e
              laser si incontrano in un percorso costruito per valorizzare la tua immagine con
              precisione, eleganza e continuita&apos;.
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

      <section className="section">
        <div className="container grid grid-3">
          <Link href="/epilazione-laser-carmagnola" className="card glow-card" aria-label="Vai alla pagina laser Carmagnola">
            <p className="eyebrow">Percorso</p>
            <h2 className="mt-sm">Laser a Carmagnola</h2>
            <p className="lead mt-sm">
              Zona, fototipo e obiettivo guidano un laser calibrato per dare uniformita&apos;, comfort
              e una pelle sempre piu&apos; libera.
            </p>
          </Link>
          <Link href="/protocolli-epigenetici" className="card glow-card" aria-label="Vai ai protocolli epigenetici">
            <p className="eyebrow">Percorso</p>
            <h2 className="mt-sm">Protocolli epigenetici</h2>
            <p className="lead mt-sm">
              Percorsi viso e corpo quando vuoi una progressione vera: tono, densità, luminosità, rigenerazione.
            </p>
          </Link>
          <Link href="/contatti" className="card glow-card" aria-label="Vai alla pagina contatti">
            <p className="eyebrow">Inizia</p>
            <h2 className="mt-sm">Scrivici due righe</h2>
            <p className="lead mt-sm">
              Zona, obiettivo e tempi desiderati: da qui nasce la proposta piu&apos; adatta alla tua
              bellezza.
            </p>
          </Link>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head section-head--compact">
            <p className="eyebrow eyebrow-soft">Instagram</p>
            <h2 className="page-title">Dal nostro studio</h2>
            <p className="lead text-on-light">Scatti e aggiornamenti dal nostro studio a Carmagnola.</p>
          </div>
          <InstagramFeed showReels={false} showPosts={true} maxPosts={6} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head section-head--compact">
            <p className="eyebrow eyebrow-soft">Rebel • Estetica Epigenetica</p>
            <h2 className="page-title">Dentro Rebel</h2>
            <p className="lead text-on-light">Qualche scatto per farti vedere spazi, luce e atmosfera.</p>
          </div>
          <StoreGallery images={storeGalleryImages} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Il nostro modo di lavorare</h2>
          <div className="grid grid-3 mt-md">
            <article className="card glow-card">
              <h3 className="mt-0">Ascolto</h3>
              <p className="lead mt-0">
                Si parte da cio&apos; che vuoi vedere: glow, tono, armonia, leggerezza, definizione.
              </p>
            </article>
            <article className="card glow-card">
              <h3 className="mt-0">Precisione tecnica</h3>
              <p className="lead mt-0">
                Manualita&apos;, attivi e tecnologia vengono scelti per dare intensita&apos; giusta,
                comfort e resa estetica coerente.
              </p>
            </article>
            <article className="card glow-card">
              <h3 className="mt-0">Progressi reali</h3>
              <p className="lead mt-0">
                La bellezza cresce quando il percorso resta vivo: piu&apos; luce, piu&apos; ordine,
                piu&apos; presenza nel tempo.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}



