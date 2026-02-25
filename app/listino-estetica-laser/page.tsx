import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { protocolCards } from "@/lib/content";
import { editorialImageAssets, servicePages } from "@/lib/seo-content";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Listino Estetica + Epilazione Laser a Carmagnola | Prezzi Rebel",
  description:
    "Listino completo Rebel a Carmagnola: estetica avanzata, epilazione laser ed estetica epigenetica in un'unica pagina con prezzi chiari.",
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
  const categoryVisuals = [
    {
      href: "#estetica-classica",
      title: "Estetica avanzata e benessere",
      description: "Routine viso e corpo ordinate, pensate per continuità e comfort.",
      src: editorialImageAssets.puliziaViso,
      alt: "Pulizia viso professionale in cabina Rebel a Carmagnola",
    },
    {
      href: "#epilazione-laser",
      title: "Epilazione laser",
      description: "Valutazione iniziale, zona/fototipo e percorso progressivo su misura.",
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser corpo in cabina Rebel a Carmagnola",
    },
    {
      href: "#estetica-epigenetica",
      title: "Estetica epigenetica",
      description: "Protocolli evoluti per tono, qualità cutanea e progressione graduale.",
      src: editorialImageAssets.pressoterapia,
      alt: "Trattamento corpo epigenetico in cabina Rebel a Carmagnola",
    },
  ] as const;

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
  const protocolItemListSchema = buildItemListSchema({
    name: "Protocolli epigenetici Rebel (listino)",
    path: "/listino-estetica-laser",
    items: protocolCards.map((protocol) => ({
      name: protocol.name,
      path: `/protocolli/${protocol.slug}`,
    })),
  });

  return (
    <main className="page-shell page-listino">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={listinoItemListSchema} />
      <JsonLd data={protocolItemListSchema} />

      <PageHero
        eyebrow="Listino unico"
        title="Listino Rebel: estetica avanzata, laser ed epigenetica nella stessa pagina."
        lead="Prezzi e trattamenti Rebel ordinati per categoria. Scegli da dove iniziare (laser, viso o corpo) e poi definiamo insieme il primo passo utile."
        badge="Listino Rebel - Centro Estetico a Carmagnola"
        tone="gold"
      />

      <section className="section section-tight">
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
            <Link className="listino-switch-btn" href="/centro-estetico-carmagnola">
              <span aria-hidden="true">⌂</span>
              Centro Estetico Carmagnola
            </Link>
            <a className="listino-switch-btn" href="#estetica-epigenetica">
              <span aria-hidden="true">⬡</span>
              Estetica Epigenetica
            </a>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="grid grid-3 listino-visual-grid">
            {categoryVisuals.map((item) => (
              <a key={item.href} href={item.href} className="card-light listino-visual-card">
                <div className="hero-visual card-media mt-0">
                  <Image src={item.src} alt={item.alt} width={1600} height={900} />
                </div>
                <h3 className="mt-sm">{item.title}</h3>
                <p className="lead mt-xs text-on-light">{item.description}</p>
              </a>
            ))}
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
          <div className="grid mt-md">
            {classicaListino.map((item) => (
              <article key={item.slug} className="card">
                <div className="listino-row">
                  <div>
                    <h3 className="mt-0">
                      <Link href={`/servizi/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="lead mt-xs">
                      {item.shortDescription}
                    </p>
                  </div>
                  <strong className="price-hint">
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
          <p className="lead text-on-light">
            L&apos;epilazione laser viene impostata sul tuo caso: zona, tipo di pelle
            e obiettivo. Usiamo tecnologia Thory con manipolo Ice Polar per lavorare
            con maggiore comfort. La valutazione iniziale è inclusa.
          </p>
          <div className="grid grid-2 mt-md">
            {laserListino.map((item) => (
              <article key={item.slug} className="card-light">
                <h3 className="mt-0">
                  <Link href={`/servizi/${item.slug}`}>{item.name}</Link>
                </h3>
                <p className="listino-desc">
                  {item.shortDescription}
                </p>
                <strong className="price-hint">
                  {item.priceHint}
                </strong>
              </article>
            ))}
          </div>
          <div className="card-light mt-md">
            <h3 className="mt-0">Se stai scegliendo le zone (5 minuti utili)</h3>
            <p className="lead mt-xs text-on-light max-w-74ch">
              Le richieste più frequenti sono ascelle, inguine e gambe. Qui trovi guide pratiche che chiariscono tempi,
              comfort, stagionalità e gestione tra una seduta e l&apos;altra.
            </p>
            <div className="actions-row">
              <Link className="button button-secondary" href="/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica">
                Guida ascelle
              </Link>
              <Link className="button button-secondary" href="/competenze/epilazione-laser-inguine-carmagnola-guida-pratica">
                Guida inguine
              </Link>
              <Link className="button button-secondary" href="/competenze/laser-gambe-carmagnola-guida-pratica">
                Guida gambe
              </Link>
              <Link className="button button-secondary" href="/epilazione-laser-ice-polar-carmagnola">
                Ice Polar (comfort)
              </Link>
              <Link className="button button-secondary" href="/competenze/epilazione-laser-estate-sole-carmagnola">
                Laser e sole
              </Link>
              <Link className="button button-secondary" href="/competenze/peli-incarniti-laser-carmagnola">
                Peli incarniti
              </Link>
            </div>
          </div>
          <div className="card-light mt-md">
            <h3 className="mt-0">Laser uomo: pagine dedicate</h3>
            <p className="lead mt-xs">
              Se stai cercando il laser uomo (barba/collo o aree ampie come schiena e torace), abbiamo due schede servizio
              dedicate e una guida per orientarti.
            </p>
            <div className="actions-row">
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
          <div className="actions-row">
            <Link className="button button-primary" href="/contatti">
              Prenota valutazione laser
            </Link>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Approfondisci laser Carmagnola
            </Link>
            <Link className="button button-secondary" href="#estetica-epigenetica">
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
          <div className="grid grid-2 mt-md">
            {protocolCards.map((item) => (
              <Link
                key={item.slug}
                href={`/protocolli/${item.slug}`}
                className="card glow-card"
                aria-label={`Apri ${item.name}`}
              >
                <h3 className="mt-0">{item.name}</h3>
                <p className="lead mt-xs">
                  {item.desc}
                </p>
                <strong className="price-hint">{item.price}</strong>
              </Link>
            ))}
          </div>
          <div className="actions-row">
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
            <h2 className="mt-0">Le 3 categorie principali a Carmagnola</h2>
            <p className="lead mt-xs">
              Se arrivi da Carmagnola, Carignano, Racconigi o Torino Sud, parti da qui:
              scegli la categoria più vicina al tuo obiettivo e imposti subito una direzione chiara.
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



