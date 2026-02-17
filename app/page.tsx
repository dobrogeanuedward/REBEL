import Link from "next/link";
import Image from "next/image";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { localAreaPages } from "@/lib/local-pages";
import { buildItemListSchema, buildWebPageSchema, createPageMetadata } from "@/lib/seo";
import { competencePages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title:
    "Rebel Estetica Epigenetica a Carmagnola | Viso, Corpo ed Epilazione Laser",
  description:
    "Rebel Estetica Epigenetica è il centro estetico di riferimento a Carmagnola: percorsi personalizzati viso/corpo, epilazione laser a Carmagnola e consulenza specialistica.",
  path: "/",
  keywords: [
    "Rebel",
    "Rebel Carmagnola",
    "Rebel Estetica Epigenetica",
    "centro estetico avanzato Carmagnola",
    "centro estetico Rebel Carmagnola",
    "epigenetica viso Carmagnola",
    "epilazione laser Carmagnola",
    "epilazione laser Rebel",
    "laser Carmagnola",
  ],
});

export default function HomePage() {
  const heroPhotoCinematic = siteConfig.assets.heroStorefront;
  const heroPhotoSquare =
    "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770780833/vetrin3_ejnx5c.webp";

  const compactCompetenceTitle = (value: string) =>
    value.replace(/\s+a Carmagnola$/i, "").replace(/\s+per chi arriva da$/i, "").trim();

  const featuredGuideSlugs = [
    "epilazione-laser-viso-carmagnola-guida-realistica",
    "epilazione-laser-corpo-carmagnola-zone-tempi",
    "epilazione-laser-estate-sole-carmagnola",
    "peli-incarniti-laser-carmagnola",
    "pulizia-viso-carmagnola-frequenza-benefici",
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
        { href: "/chi-siamo", label: "Chi siamo" },
        { href: "/metodo-rebel", label: "Metodo Rebel" },
        { href: "/protocolli-epigenetici", label: "Protocolli epigenetici" },
        { href: "/contatti", label: "Contatti" },
      ],
    },
    {
      key: "services",
      title: "Servizi e listino",
      subtitle: "Tutti i trattamenti disponibili con prezzi e percorsi dedicati.",
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
      subtitle: "Zone da cui ci raggiungono più spesso in studio.",
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

  return (
    <main className="page-shell page-home">
      <JsonLd data={faqSchema} />
      <JsonLd data={hubSchema} />
      <JsonLd data={homepageSchema} />

      <section className="home-hero">
        <div className="container home-hero-grid">
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
              il percorso con manualità, attivi epigenetici e tecnologia quando serve.
            </p>
            <div className="home-hero-cta">
              <Link className="button button-primary" href="/contatti">
                Prenota una consulenza
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Vedi trattamenti e prezzi
              </Link>
              <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                Epilazione laser Carmagnola
              </Link>
            </div>
            <p className="home-hero-footnote">
              &quot;La bellezza non si aggiunge, si riattiva!&quot; e questo principio guida
              ogni percorso Rebel.
            </p>
            <div className="home-hero-chips">
              <span className="home-chip">Consulenza 1:1</span>
              <span className="home-chip">Epilazione laser a Carmagnola</span>
              <span className="home-chip">Carmagnola, Viale Barbaroux 20</span>
            </div>
          </article>

          <aside className="home-hero-side">
            <div className="home-hero-media">
              <Image
                src={heroPhotoCinematic}
                alt="Ingresso Rebel Carmagnola in stile fotografico"
                width={1280}
                height={820}
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <div className="home-hero-photo-chip" aria-hidden="true">
                <span className="home-hero-photo-chip-ring">
                  <Image
                    src={heroPhotoSquare}
                    alt=""
                    width={168}
                    height={168}
                    className="home-hero-photo-chip-image"
                  />
                </span>
              </div>
            </div>
            <div className="home-hero-side-panel">
              <p className="home-hero-caption">
                Si parte da una lettura iniziale, poi si decide cosa fare e con che ritmo.
                Seduta dopo seduta aggiustiamo il piano in base a come risponde la pelle.
              </p>
              <div className="home-hero-side-points">
                <span>Lettura iniziale</span>
                <span>Piano su misura</span>
                <span>Progressione</span>
              </div>
            </div>
          </aside>
        </div>
      </section>


      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Instagram
          </p>
          <h2 className="page-title" style={{ marginTop: "0.6rem", color: "#271f38" }}>
            Seguici su Instagram per vedere i nostri trattamenti in azione.
          </h2>
          <p className="lead" style={{ color: "rgba(39,31,56,0.78)", marginTop: "0.8rem" }}>
            Reel, post e aggiornamenti dal centro estetico Rebel a Carmagnola.
          </p>
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
          <p className="eyebrow">Percorsi</p>
          <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
            Scopri l&apos;ecosistema Rebel
          </h2>
          <div className="ecosystem-grid" style={{ marginTop: "1.15rem" }}>
            {ecosystemGroups.map((group) => (
              <article key={group.key} className={`ecosystem-card ecosystem-card--${group.tone}`}>
                <h3 style={{ marginTop: 0 }}>{group.title}</h3>
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
          <p className="lead" style={{ marginTop: "0.95rem" }}>
            Se vuoi orientarti in fretta: qui trovi i servizi, i prezzi, le guide e le pagine
            dedicate alle località da cui ci raggiungono più spesso.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
            Territorio
          </p>
          <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
            Siamo a Carmagnola, ma lavoriamo con tante clienti della zona.
          </h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.78)", maxWidth: "74ch" }}
          >
            Oltre a Carmagnola, arrivano clienti da Carignano, Racconigi,
            Sommariva del Bosco, Torino Sud e Alba. Se vuoi capire se Rebel è la
            scelta giusta per te, il modo migliore è scriverci: ti rispondiamo
            e ti diciamo da dove conviene partire.
          </p>
          <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1rem" }}>
            {siteConfig.areasServed.map((area) => (
              <span key={area} className="badge" style={{ borderColor: "rgba(39,31,56,0.2)", color: "rgba(39,31,56,0.72)" }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



