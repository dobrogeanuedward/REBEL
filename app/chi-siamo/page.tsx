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
    "Conosci Rebel: studio estetico a Carmagnola con estetica epigenetica, trattamenti viso/corpo e laser, impostati con metodo e seguiti nel tempo.",
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
      "Chi siamo, come lavoriamo e cosa puoi aspettarti da un percorso Rebel (viso, corpo o laser).",
    path: "/chi-siamo",
  });
  const articleSchema = buildArticleSchema({
    headline: "Chi siamo: Rebel a Carmagnola",
    description:
      "Identità Rebel, metodo e atmosfera dello studio: cosa facciamo e come impostiamo i percorsi.",
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
        title="Rebel è un centro estetico a Carmagnola dove la pelle si guarda davvero."
        lead="Qui si parte da una cosa semplice: capire la tua pelle oggi e cosa vuoi ottenere. Poi impostiamo un piano (viso, corpo o laser) con metodo, calma e continuità."
        badge="Viale Barbaroux 20 • Carmagnola"
        tone="rose"
      />

      <section className="section section-tight">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 className="mt-0">Visione</h2>
            <p className="lead mt-0">
              Per noi la bellezza non è una correzione di facciata. È pelle che sta bene:
              più luminosa, più comoda, più stabile. Ci arriviamo con scelte precise e con
              un piano che puoi seguire davvero.
            </p>
          </article>
          <article className="card mission-card">
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-sm">
              Un modo diverso di fare estetica: meno frenesia, più metodo.
            </h2>
            <p className="lead mt-sm">
              Rebel è uno studio a Carmagnola. Lavoriamo con estetica epigenetica, trattamenti
              viso/corpo e laser: l&apos;obiettivo è darti un piano ordinato fin dall&apos;inizio,
              senza parole grosse e senza corse.
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
              Zona, fototipo, obiettivo: qui trovi come impostiamo calendario e sedute, senza pacchetti uguali per tutti.
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
              Zona + obiettivo + tempi. Ti rispondiamo e ti diciamo qual è il primo passo più pulito.
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
                Si parte da te, non dal pacchetto: obiettivo, tempi, pelle di oggi (quella reale).
              </p>
            </article>
            <article className="card glow-card">
              <h3 className="mt-0">Precisione tecnica</h3>
              <p className="lead mt-0">
                Manualità, attivi e tecnologia: li scegliamo con criterio e li teniamo coerenti nel tempo.
              </p>
            </article>
            <article className="card glow-card">
              <h3 className="mt-0">Progressi reali</h3>
              <p className="lead mt-0">
                Ci diamo un obiettivo e lo seguiamo con costanza. Se serve, si aggiusta la rotta senza drammi.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}



