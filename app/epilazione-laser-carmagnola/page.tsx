import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";
import { editorialImageAssets, getCompetenceBySlug } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Epilazione laser a Carmagnola (Thory + Ice Polar)",
  description:
    "Epilazione laser a Carmagnola con tecnologia Thory e Ice Polar: valutazione iniziale, piano personalizzato e monitoraggio costante.",
  path: "/epilazione-laser-carmagnola",
  image: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
  openGraphType: "article",
  keywords: [
    "epilazione laser Carmagnola",
    "laser Carmagnola",
    "centro epilazione laser Carmagnola",
    "epilazione laser viso Carmagnola",
    "epilazione laser corpo Carmagnola",
    "prezzi epilazione laser Carmagnola",
    "Rebel epilazione laser",
  ],
});

export default function EpilazioneLaserCarmagnolaPage() {
  type LaserGuideHighlight = {
    slug: string;
    href: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  };

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Epilazione laser Carmagnola", path: "/epilazione-laser-carmagnola" },
  ]);

  const laserServiceSchema = buildServiceSchema(
    "Epilazione laser a Carmagnola",
    "Percorso di epilazione laser a Carmagnola con tecnologia Thory, valutazione iniziale e piano personalizzato per viso e corpo.",
    "/epilazione-laser-carmagnola",
  );

  const faqs = [
    {
      q: "L'epilazione laser a Carmagnola è adatta a tutte le zone?",
      a: "Sì. In studio impostiamo il piano in base a zona, fototipo e obiettivo reale, sia per viso sia per corpo.",
    },
    {
      q: "Quante sedute servono per l'epilazione laser?",
      a: "Dipende da area, tipo di pelo e risposta individuale. Di solito si lavora su un ciclo progressivo con calendario definito all'inizio.",
    },
    {
      q: "Quanto costa l'epilazione laser a Carmagnola da Rebel?",
      a: "I prezzi partono da 25.90 EUR per area, con possibilità di percorsi strutturati. Il listino completo è disponibile nella pagina dedicata.",
    },
    {
      q: "Come prenoto una valutazione laser da Rebel?",
      a: "Puoi prenotare via WhatsApp o dalla pagina contatti. Da li' definiamo zona, calendario e preparazione per aprire il tuo percorso laser.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const localLandingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/epilazione-laser-carmagnola#webpage`,
    url: `${siteConfig.siteUrl}/epilazione-laser-carmagnola`,
    name: "Epilazione laser a Carmagnola",
    description:
      "Pagina dedicata all'epilazione laser a Carmagnola con percorso personalizzato, comfort evoluto e progressione visibile.",
    inLanguage: "it-IT",
    about: [
      "epilazione laser Carmagnola",
      "laser viso Carmagnola",
      "laser corpo Carmagnola",
      "centro estetico Carmagnola",
    ],
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    mainEntity: {
      "@type": "Service",
      "@id": `${siteConfig.siteUrl}/epilazione-laser-carmagnola#service`,
      name: "Epilazione laser a Carmagnola",
      provider: {
        "@id": `${siteConfig.siteUrl}/#beauty-salon`,
      },
    },
  };

  const laserGuideHighlights: LaserGuideHighlight[] = [
    {
      slug: "epilazione-laser-estate-sole-carmagnola",
      href: "/competenze/epilazione-laser-estate-sole-carmagnola",
      title: "Laser in estate: organizzazione e buon senso",
      description: "Calendario e sole si armonizzano per mantenere il percorso elegante, continuo e ben gestito.",
      image: {
        src: editorialImageAssets.laserEstate,
        alt: "Laser in estate: visual teaser su gestione stagionale e sole.",
      },
    },
    {
      slug: "epilazione-laser-inverno-carmagnola",
      href: "/competenze/epilazione-laser-inverno-carmagnola",
      title: "Laser in inverno: costanza e progressione",
      description: "Periodo ideale per avviare un ciclo ordinato e arrivare preparata ai mesi luminosi.",
      image: {
        src: editorialImageAssets.laserInverno,
        alt: "Laser in inverno: visual teaser su costanza e calendario.",
      },
    },
    {
      slug: "epilazione-laser-ascelle-carmagnola-guida-pratica",
      href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
      title: "Laser ascelle: guida pratica",
      description: "Comfort, tempi e progressione per una zona piccola che cambia molto la sensazione di pulizia.",
    },
    {
      slug: "epilazione-laser-inguine-carmagnola-guida-pratica",
      href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
      title: "Laser inguine: guida pratica",
      description: "Una zona delicata trattata con strategia, rispetto cutaneo e continuita'.",
    },
    {
      slug: "laser-gambe-carmagnola-guida-pratica",
      href: "/competenze/laser-gambe-carmagnola-guida-pratica",
      title: "Laser gambe: guida pratica",
      description: "Strategia, stagionalità e mantenimento quando la priorità sono le gambe.",
    },
    {
      slug: "epilazione-laser-estate-sole-carmagnola",
      href: "/competenze/epilazione-laser-estate-sole-carmagnola",
      title: "Laser e sole: cosa sapere davvero",
      description: "Esposizione e calendario si gestiscono con intelligenza per mantenere il risultato in crescita.",
    },
    {
      slug: "epilazione-laser-inverno-carmagnola",
      href: "/competenze/epilazione-laser-inverno-carmagnola",
      title: "Laser in inverno: perché conviene",
      description: "Il momento ideale per costruire continuita' e arrivare ai mesi luminosi con una pelle gia' trasformata.",
    },
    {
      slug: "laser-e-palestra-sport-carmagnola",
      href: "/competenze/laser-e-palestra-sport-carmagnola",
      title: "Laser e palestra: guida pratica",
      description: "Sport, doccia, calore e tessuti: come custodire comfort e resa della pelle nelle ore successive.",
    },
  ];

  return (
    <main className="page-shell page-laser-local">
      <JsonLd data={breadcrumb} />
      <JsonLd data={laserServiceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localLandingSchema} />

      <PageHero
        eyebrow="Rebel Laser Carmagnola"
        title="Epilazione laser a Carmagnola: percorso su misura, risultati progressivi."
        lead="In Rebel il laser viene calibrato su zona, fototipo e obiettivo per dare comfort, uniformita' e una pelle sempre piu' libera seduta dopo seduta."
        badge="Da 25.90 EUR • Viale Barbaroux 20, Carmagnola"
        tone="violet"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 className="mt-0">Perché scegliere Rebel per il laser a Carmagnola</h2>
            <div className="hero-visual card-media">
              <Image
                src="https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public"
                alt="Epilazione laser corpo in cabina Rebel a Carmagnola"
                width={1600}
                height={900}
              />
            </div>
            <ul className="list-clean">
              <li>- valutazione iniziale dedicata prima di aprire il ciclo</li>
              <li>- parametri calibrati su zona e risposta della pelle</li>
              <li>- tecnologia Thory con manipolo Ice Polar per maggiore comfort</li>
              <li>- monitoraggio costante per accompagnare il risultato nel tempo</li>
            </ul>
            <div className="actions-row">
              <Link className="button button-primary" href="/contatti">
                Prenota valutazione laser
              </Link>
              <Link className="button button-secondary" href="/centro-estetico-carmagnola">
                Centro estetico Carmagnola
              </Link>
              <a
                className="button button-secondary"
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Scrivi su WhatsApp
              </a>
            </div>
          </article>

          <aside className="card">
            <h2 className="mt-0">Viso e corpo: schede rapide</h2>
            <div className="hero-visual card-media">
              <Image
                src="https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public"
                alt="Epilazione laser viso in cabina Rebel a Carmagnola"
                width={1600}
                height={900}
              />
            </div>
            <p className="lead mt-0">
              Se vuoi entrare subito nel dettaglio per area, qui trovi le schede da aprire per prime:
            </p>
            <div className="grid mt-sm">
              <Link href="/servizi/epilazione-laser-viso-carmagnola" className="button button-secondary">
                Epilazione laser viso
              </Link>
              <Link href="/servizi/epilazione-laser-corpo-carmagnola" className="button button-secondary">
                Epilazione laser corpo
              </Link>
              <Link href="/servizi/epilazione-laser-viso-uomo-carmagnola" className="button button-secondary">
                Laser viso uomo
              </Link>
              <Link href="/servizi/epilazione-laser-corpo-uomo-carmagnola" className="button button-secondary">
                Laser corpo uomo
              </Link>
              <Link href="/competenze/laser-uomo-carmagnola-guida-pratica" className="button button-secondary">
                Guida: laser uomo
              </Link>
              <Link href="/epilazione-laser-ice-polar-carmagnola" className="button button-secondary">
                Ice Polar: comfort durante il laser
              </Link>
              <Link href="/listino-estetica-laser" className="button button-secondary">
                Vedi listino completo
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow-soft">Approfondimenti rapidi</p>
            <h2 className="page-title">Le zone piu&apos; richieste e le letture che fanno desiderare il risultato.</h2>
            <p className="lead text-on-light max-w-74ch">
              Ascelle, inguine e gambe raccontano i risultati piu&apos; cercati. A queste si aggiungono sole,
              stagionalita&apos;, inverno e palestra: tutto cio&apos; che rende il laser ancora piu&apos; preciso da vivere.
            </p>
          </div>
          <div className="grid grid-2 mt-md">
            {laserGuideHighlights.map((item) => {
              const guide = getCompetenceBySlug(item.slug);
              const cardHero = item.image ?? guide?.heroImage;

              return (
                <Link key={`${item.slug}-${item.title}`} href={item.href} className="card-light">
                  {cardHero ? (
                    <div className="hero-visual card-media mt-0">
                      <Image
                        src={cardHero.src}
                        alt={cardHero.alt}
                        width={1600}
                        height={900}
                      />
                    </div>
                  ) : null}
                  <h3 className={cardHero ? "mt-sm" : "mt-0"}>{item.title}</h3>
                  <p className="text-on-light" style={{ margin: 0, fontFamily: "var(--font-inter), sans-serif" }}>
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="actions-row">
            <Link className="button button-primary" href="/contatti">
              Prenota valutazione
            </Link>
            <Link className="button button-secondary" href="/listino-estetica-laser">
              Vedi prezzi e listino
            </Link>
            <Link className="button button-secondary" href="/competenze/laser-uomo-carmagnola-guida-pratica">
              Laser uomo
            </Link>
            <Link className="button button-secondary" href="/competenze/peli-incarniti-laser-carmagnola">
              Peli incarniti
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="page-title">Domande frequenti (prima di iniziare)</h2>
          <div className="grid grid-2 mt-md">
            {faqs.map((faq) => (
              <article key={faq.q} className="card">
                <h3 className="mt-0">{faq.q}</h3>
                <p className="lead mt-0">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

