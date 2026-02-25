import Link from "next/link";
import Image from "next/image";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { HeroPhotoSlider } from "@/components/hero-photo-slider";
import { homeHeroImages } from "@/lib/content";
import { localAreaPages } from "@/lib/local-pages";
import { buildItemListSchema, buildWebPageSchema, createPageMetadata } from "@/lib/seo";
import { competencePages, editorialImageAssets, servicePages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title:
    "Rebel Estetica Epigenetica a Carmagnola | Viso, Corpo ed Epilazione Laser",
  description:
    "Rebel Estetica Epigenetica a Carmagnola: viso, corpo ed epilazione laser con metodo chiaro, consulenza iniziale e progressione personalizzata.",
  path: "/",
  keywords: [
    "Rebel",
    "Rebel Carmagnola",
    "Rebel Estetica Epigenetica",
    "centro estetico avanzato Carmagnola",
    "centro estetico Carmagnola",
    "centro estetico Rebel Carmagnola",
    "epigenetica viso Carmagnola",
    "epilazione laser Carmagnola",
    "pedicure Carmagnola",
    "scrub corpo Carmagnola",
    "epilazione laser Rebel",
    "laser Carmagnola",
  ],
});

export default function HomePage() {
  const compactCompetenceTitle = (value: string) =>
    value.replace(/\s+a Carmagnola$/i, "").replace(/\s+per chi arriva da$/i, "").trim();

  const featuredGuideSlugs = [
    "epilazione-laser-viso-carmagnola-guida-realistica",
    "epilazione-laser-corpo-carmagnola-zone-tempi",
    "epilazione-laser-estate-sole-carmagnola",
    "peli-incarniti-laser-carmagnola",
    "pulizia-viso-carmagnola-frequenza-benefici",
    "manicure-semipermanente-carmagnola-durata-rimozione",
    "pedicure-carmagnola-ogni-quanto-talloni",
    "pressoterapia-carmagnola-guida-pratica",
    "epilazione-laser-inguine-carmagnola-guida-pratica",
    "epilazione-laser-ascelle-carmagnola-guida-pratica",
    "laser-uomo-carmagnola-guida-pratica",
    "contorno-occhi-gonfiore-occhiaie-carmagnola",
    "pelle-opaca-grana-irregolare-carmagnola",
    "tono-viso-ovale-carmagnola-percorso",
  ];
  const featuredGuides = featuredGuideSlugs
    .map((slug) => competencePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof competencePages)[number] => Boolean(item));

  const baseServiceSlugs = [
    "pulizia-viso-carmagnola",
    "manicure-semipermanente-carmagnola",
    "laminazione-ciglia-sopracciglia-carmagnola",
    "massaggio-rilassante-carmagnola",
    "massaggio-linfodrenante-carmagnola",
    "pedicure-carmagnola",
  ];
  const baseServices = baseServiceSlugs
    .map((slug) => servicePages.find((item) => item.slug === slug))
    .filter((item): item is (typeof servicePages)[number] => Boolean(item));
  const localMoneyQueries = [
    { label: "Centro estetico Carmagnola", href: "/centro-estetico-carmagnola" },
    { label: "Epilazione laser Carmagnola", href: "/epilazione-laser-carmagnola" },
    { label: "Pedicure Carmagnola", href: "/servizi/pedicure-carmagnola" },
    { label: "Scrub corpo Carmagnola", href: "/servizi/scrub-corpo-carmagnola" },
    { label: "Manicure semipermanente Carmagnola", href: "/servizi/manicure-semipermanente-carmagnola" },
    { label: "Laminazione ciglia Carmagnola", href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola" },
    { label: "Pulizia viso Carmagnola", href: "/servizi/pulizia-viso-carmagnola" },
    { label: "Massaggio rilassante Carmagnola", href: "/servizi/massaggio-rilassante-carmagnola" },
    { label: "Linfodrenante Carmagnola", href: "/servizi/massaggio-linfodrenante-carmagnola" },
  ] as const;
  const photoStoryCards = [
    {
      src: editorialImageAssets.laserCorpo,
      alt: "Tecnologia laser su zona corpo in cabina Rebel Carmagnola",
      title: "Percorso laser su misura",
      text: "Valutazione iniziale, parametri calibrati e monitoraggio nel tempo.",
    },
    {
      src: editorialImageAssets.laserViso,
      alt: "Trattamento laser viso in cabina Rebel Carmagnola",
      title: "Comfort e precisione",
      text: "Ice Polar e approccio progressivo: risultati senza promesse eccessive.",
    },
  ] as const;

  const ecosystemGroups: Array<{
    key: string;
    title: string;
    subtitle: string;
    tone: "violet" | "aqua" | "rose" | "gold";
    links: Array<{ href: string; label: string }>;
  }> = [
    {
      key: "core",
      title: "Fondamenta Rebel",
      subtitle: "Pagine identitarie per capire metodo, approccio e visione.",
      tone: "violet",
      links: [
        { href: "/centro-estetico-carmagnola", label: "Centro estetico Carmagnola" },
        { href: "/chi-siamo", label: "Chi siamo" },
        { href: "/metodo-rebel", label: "Metodo Rebel" },
        { href: "/protocolli-epigenetici", label: "Protocolli epigenetici" },
        { href: "/contatti", label: "Contatti" },
      ],
    },
    {
      key: "services",
      title: "Servizi e listino",
      subtitle: "Trattamenti disponibili, prezzi chiari e link rapidi alle pagine dedicate.",
      tone: "aqua",
      links: [
        { href: "/epilazione-laser-carmagnola", label: "Epilazione laser Carmagnola" },
        { href: "/listino-estetica-laser", label: "Listino Estetica + Laser" },
        { href: "/servizi", label: "Panoramica servizi" },
      ],
    },
    {
      key: "guides",
      title: "Guide e competenze",
      subtitle: "Contenuti pratici per orientarti in modo chiaro.",
      tone: "rose",
      links: [
        { href: "/competenze", label: "Hub competenze" },
        ...featuredGuides.map((item) => ({
          href: `/competenze/${item.slug}`,
          label: compactCompetenceTitle(item.title),
        })),
        { href: "/competenze", label: "Vedi tutte le guide" },
      ],
    },
    {
      key: "local",
      title: "Territorio e città servite",
      subtitle: "Comuni da cui ci raggiungono più spesso in studio.",
      tone: "gold",
      links: [
        { href: "/localita", label: "Località servite" },
        ...localAreaPages.slice(0, 8).map((area) => ({
          href: `/localita/${area.slug}`,
          label: area.city,
        })),
        { href: "/localita", label: "Vedi tutte le località" },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Perché scegliere un centro estetico a Carmagnola con approccio epigenetico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'approccio epigenetico lavora sulla qualità biologica della pelle con protocolli personalizzati, non su trattamenti standard uguali per tutti.",
        },
      },
      {
        "@type": "Question",
        name: "Rebel segue clienti solo di Carmagnola?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, molte clienti arrivano anche da Carignano, Racconigi, Torino Sud e Alba per percorsi evoluti viso/corpo.",
        },
      },
      {
        "@type": "Question",
        name: "Rebel Estetica Epigenetica dove si trova?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rebel Estetica Epigenetica si trova a Carmagnola, in Viale Barbaroux 20. Riceviamo su appuntamento e via WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Qual è il primo passo per iniziare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La lettura iniziale: analisi personalizzata, obiettivi e piano di trattamento calibrato.",
        },
      },
    ],
  };
  const hubSchema = buildItemListSchema({
    name: "Ecosistema Rebel",
    path: "/",
    items: [
      { name: "Chi siamo", path: "/chi-siamo" },
      { name: "Metodo Rebel", path: "/metodo-rebel" },
      { name: "Epilazione laser Carmagnola", path: "/epilazione-laser-carmagnola" },
      { name: "Listino Estetica + Laser", path: "/listino-estetica-laser" },
      { name: "Servizi", path: "/servizi" },
      { name: "Competenze", path: "/competenze" },
      { name: "Località servite", path: "/localita" },
      { name: "Contatti", path: "/contatti" },
    ],
  });
  const homepageSchema = buildWebPageSchema({
    name: "Rebel Carmagnola | Centro estetico epigenetico",
    description: siteConfig.description,
    path: "/",
  });
  const baseServicesSchema =
    baseServices.length > 0
      ? buildItemListSchema({
          name: "Trattamenti base più richiesti a Carmagnola",
          path: "/",
          items: baseServices.map((service) => ({
            name: service.name,
            path: `/servizi/${service.slug}`,
          })),
        })
      : null;
  const localMoneyQueriesSchema = buildItemListSchema({
    name: "Ricerche commerciali principali a Carmagnola",
    path: "/",
    items: localMoneyQueries.map((query) => ({
      name: query.label,
      path: query.href,
    })),
  });

  return (
    <main className="page-shell page-home">
      <JsonLd data={faqSchema} />
      <JsonLd data={hubSchema} />
      <JsonLd data={homepageSchema} />
      {baseServicesSchema ? <JsonLd data={baseServicesSchema} /> : null}
      <JsonLd data={localMoneyQueriesSchema} />

      <section className="home-hero home-hero--slider">
        <HeroPhotoSlider images={homeHeroImages} intervalMs={3900} />
        <div className="container">
          <article className="home-hero-main">
            <div className="home-hero-brandline">
              <div className="home-hero-brand">
                <span className="logo-glow logo-glow--lg">
                  <Image
                    src={siteConfig.assets.logoLight}
                    alt="Rebel Estetica Epigenetica"
                    width={220}
                    height={72}
                    className="home-hero-logo"
                    priority
                  />
                </span>
                <div className="home-hero-brand-text">
                  <span>Rebel Estetica Epigenetica</span>
                  <small>Centro estetico a Carmagnola</small>
                </div>
              </div>
              <span className="home-hero-badge">Viso, corpo e laser</span>
            </div>
            <h1 className="home-hero-title">
              Rebel a Carmagnola: estetica epigenetica, viso, corpo e laser.
            </h1>
            <p className="home-hero-lead">
              Ci racconti cosa vuoi ottenere e guardiamo la tua pelle da vicino. Poi impostiamo
              il piano con manualità, attivi epigenetici e tecnologia quando serve.
            </p>
            <div className="home-hero-cta">
              <Link className="button button-primary" href="/contatti">
                Prenota una consulenza
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Vedi trattamenti e prezzi
              </Link>
            </div>
            <p className="home-hero-caption">
              Si parte da una lettura iniziale, poi si decide cosa fare e con che ritmo. Seduta dopo
              seduta aggiorniamo il piano in base a come risponde la pelle.
            </p>
            <p className="home-hero-footnote">
              &quot;La bellezza non si aggiunge, si riattiva!&quot; e questo principio guida
              ogni percorso Rebel.
            </p>
            <div className="home-hero-chips">
              <span className="home-chip">Consulenza 1:1</span>
              <span className="home-chip">Carmagnola, Viale Barbaroux 20</span>
            </div>
          </article>
        </div>
      </section>

      {baseServices.length > 0 ? (
        <section className="section section-light">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow eyebrow-soft">Carmagnola - servizi base</p>
              <h2 className="page-title">
                Trattamenti base, richiesti spesso in studio (viso, unghie, sguardo, benessere).
              </h2>
              <p className="lead text-on-light">
                Qui trovi una selezione di trattamenti base richiesti spesso in studio: viso, unghie, sguardo,
                massaggi e cura piedi. Ogni scheda va dritta al punto con dettagli, FAQ e indicazioni pratiche.
              </p>
            </div>
            <div className="grid grid-3 mt-md">
              {baseServices.map((item) => (
                <Link key={item.slug} href={`/servizi/${item.slug}`} className="card-light">
                  <h3 className="mt-0">{item.name}</h3>
                  <p className="lead mt-xs text-on-light service-card-lead">
                    {item.shortDescription}
                  </p>
                  <p className="service-card-price">
                    <strong>{item.priceHint}</strong>
                  </p>
                </Link>
              ))}
            </div>
            <div className="actions-row">
              <Link className="button button-primary" href="/contatti">
                Consulenza e prenotazioni
              </Link>
              <Link className="button button-secondary" href="/servizi">
                Vedi tutti i servizi
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Listino completo
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-photo-story">
        <div className="container split photo-story-split">
          <article className="card photo-story-card">
            <div className="section-head section-head--compact">
              <p className="eyebrow">Metodo in cabina</p>
              <h2 className="page-title">In cabina lavoriamo così: chiarezza, comfort, progressione.</h2>
              <p className="lead">
                Qui vedi il nostro metodo in cabina: lettura iniziale, trattamento personalizzato e monitoraggio
                nel tempo.
              </p>
            </div>
            <ul className="list-clean photo-story-points">
              <li>- Lettura iniziale prima di impostare il ciclo</li>
              <li>- Parametri calibrati su area e risposta cutanea</li>
              <li>- Follow-up per mantenere direzione e risultati</li>
            </ul>
            <div className="actions-row">
              <Link className="button button-primary" href="/epilazione-laser-carmagnola">
                Scopri il percorso laser
              </Link>
              <Link className="button button-secondary" href="/contatti">
                Prenota consulenza
              </Link>
            </div>
          </article>
          <aside className="photo-story-media-grid">
            {photoStoryCards.map((item) => (
              <article key={item.title} className="card-light photo-story-media-card">
                <div className="hero-visual card-media mt-0">
                  <Image src={item.src} alt={item.alt} width={1600} height={900} />
                </div>
                <h3 className="mt-sm">{item.title}</h3>
                <p className="lead mt-xs text-on-light">{item.text}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--compact">
            <p className="eyebrow">Query locali ad alta intenzione</p>
            <h2 className="page-title">Se stai cercando un servizio specifico a Carmagnola, parti da qui.</h2>
            <p className="lead max-w-74ch">
              Abbiamo raccolto le ricerche più frequenti: ogni pagina va dritta al punto
              con dettagli pratici, prezzo indicativo e prossima azione chiara.
            </p>
          </div>
          <div className="grid grid-3 mt-md">
            {localMoneyQueries.map((query) => (
              <Link key={query.href} href={query.href} className="card">
                <h3 className="mt-0">{query.label}</h3>
                <p className="lead mt-xs">
                  Apri pagina dedicata e orientati in pochi minuti.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow-soft">Instagram</p>
            <h2 className="page-title">Seguici su Instagram per vedere i nostri trattamenti in azione.</h2>
            <p className="lead text-on-light">Reel, post e aggiornamenti dal centro estetico Rebel a Carmagnola.</p>
          </div>
          <InstagramFeed
            showReels={true}
            showPosts={true}
            maxReels={4}
            maxPosts={3}
            hidePostsOnMobile={true}
          />
        </div>
      </section>

      <section className="section home-ecosystem-section">
        <div className="container home-ecosystem-container">
          <div className="section-head section-head--compact">
            <p className="eyebrow">Percorsi</p>
            <h2 className="page-title">Scopri l&apos;ecosistema Rebel</h2>
          </div>
          <div className="ecosystem-grid mt-md">
            {ecosystemGroups.map((group) => (
              <article key={group.key} className={`ecosystem-card ecosystem-card--${group.tone}`}>
                <h3 className="mt-0">{group.title}</h3>
                <p className="ecosystem-subtitle">{group.subtitle}</p>
                <div className={`ecosystem-links${group.key === "local" ? " ecosystem-links--local" : ""}`}>
                  {group.links.map((item) => (
                    <Link
                      key={`${group.key}-${item.href}`}
                      href={item.href}
                      className={`ecosystem-link-chip${group.key === "local" ? " ecosystem-link-chip--local" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="lead mt-sm">
            Per orientarti in fretta: qui trovi servizi, prezzi, guide e pagine
            dedicate alle località da cui ci raggiungono più spesso.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head section-head--compact">
            <p className="eyebrow eyebrow-soft">Territorio</p>
            <h2 className="page-title">Siamo a Carmagnola, ma lavoriamo con tante clienti della zona.</h2>
            <p className="lead text-on-light max-w-74ch">
              Oltre a Carmagnola, arrivano clienti da Carignano, Racconigi,
              Sommariva del Bosco, Torino Sud e Alba. Se vuoi capire se Rebel fa
              per te, scrivici: ti rispondiamo in modo diretto e ti proponiamo
              il primo passo più sensato.
            </p>
          </div>
          <div className="areas-badges">
            {siteConfig.areasServed.map((area) => (
              <span key={area} className="badge area-badge">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



