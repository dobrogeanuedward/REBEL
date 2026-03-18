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
        title="Listino Rebel: bellezza viso, corpo, laser ed epigenetica in una sola pagina."
        lead="Prezzi chiari e percorsi beauty ordinati per area: scegli il risultato che vuoi vedere e prenota il primo passo."
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
            <a className="listino-switch-btn" href="#estetica-epigenetica">
              <span aria-hidden="true">⬡</span>
              Estetica Epigenetica
            </a>
          </div>
          <article className="card listino-categories-card mt-md">
            <h2 className="mt-0">Scegli il risultato che vuoi valorizzare.</h2>
            <p className="lead mt-xs">
              Il listino accompagna viso, corpo, laser ed epigenetica verso il trattamento giusto
              e una prenotazione immediata.
            </p>
            <div className="listino-categories-list">
              <a href="#estetica-classica" className="listino-category-item">
                <strong>Estetica Avanzata e Benessere</strong>
                <span>Percorsi viso/corpo per qualita&apos; della pelle, equilibrio e continuita&apos; nel tempo.</span>
              </a>
              <a href="#epilazione-laser" className="listino-category-item">
                <strong>Epilazione Laser</strong>
                <span>Trattamenti calibrati per zone e fototipo, con valutazione iniziale inclusa.</span>
              </a>
              <a href="#estetica-epigenetica" className="listino-category-item">
                <strong>Estetica Epigenetica</strong>
                <span>Protocolli evoluti orientati a rigenerazione, tono e luminosita&apos; progressiva.</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="estetica-classica">
        <div className="container">
          <h2 className="page-title">Estetica classica e benessere</h2>
          <p className="lead">
            Servizi beauty che mantengono pelle, mani, piedi e corpo curati, luminosi e armoniosi.
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
            L&apos;epilazione laser valorizza comfort, uniformita&apos; e liberta&apos; quotidiana con tecnologia Thory,
            Ice Polar e una valutazione iniziale che definisce zona, pelle e obiettivo.
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
            <h3 className="mt-0">Scegli la zona giusta in 5 minuti</h3>
            <p className="lead mt-xs text-on-light max-w-74ch">
              Ascelle, inguine e gambe concentrano la domanda piu&apos; alta: qui trovi guide pratiche
              per tempi, comfort, stagionalita&apos; e gestione tra una seduta e l&apos;altra.
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
            </div>
          </div>
          <div className="card-light mt-md">
            <h3 className="mt-0">Laser uomo: pagine dedicate</h3>
            <p className="lead mt-xs">
              Barba, collo, schiena e torace hanno pagine dedicate per scegliere il percorso
              piu&apos; adatto e prenotare con sicurezza.
            </p>
            <div className="actions-row">
              <Link className="button button-secondary" href="/servizi/epilazione-laser-viso-uomo-carmagnola">
                Laser viso uomo
              </Link>
              <Link className="button button-secondary" href="/servizi/epilazione-laser-corpo-uomo-carmagnola">
                Laser corpo uomo
              </Link>
            </div>
          </div>
          <div className="actions-row">
            <Link className="button button-primary" href="/contatti">
              Prenota la consulenza laser
            </Link>
            <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
              Scopri il percorso laser
            </Link>
          </div>
        </div>
      </section>

      <section className="section epigenetica-tech-section" id="estetica-epigenetica">
        <div className="container">
          <h2 className="page-title">Estetica epigenetica</h2>
          <p className="lead">
            Protocolli viso e corpo per luminosita&apos;, tono, densita&apos; e qualita&apos; cutanea.
            Ogni trattamento accende una bellezza progressiva e visibile.
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
              Prenota la consulenza epigenetica
            </Link>
            <Link className="button button-secondary" href="/protocolli-epigenetici">
              Scopri i protocolli
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}



