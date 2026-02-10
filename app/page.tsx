import Link from "next/link";
import Image from "next/image";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title:
    "Rebel Estetica Epigenetica a Carmagnola | Trattamenti Viso, Corpo e Laser Thory",
  description:
    "Rebel Estetica Epigenetica e il centro estetico di riferimento a Carmagnola: percorsi personalizzati viso/corpo, epilazione laser Thory e consulenza specialistica.",
  path: "/",
  keywords: [
    "Rebel",
    "Rebel Carmagnola",
    "Rebel Estetica Epigenetica",
    "centro estetico avanzato Carmagnola",
    "centro estetico Rebel Carmagnola",
    "epigenetica viso Carmagnola",
    "epilazione laser Thory Carmagnola",
  ],
});

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Perche scegliere un centro estetico a Carmagnola con approccio epigenetico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'approccio epigenetico lavora sulla qualita biologica della pelle con protocolli personalizzati, non su trattamenti standard uguali per tutti.",
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
        name: "Qual e il primo passo per iniziare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La lettura iniziale: analisi personalizzata, obiettivi e piano di trattamento calibrato.",
        },
      },
    ],
  };

  return (
    <main className="page-shell page-home">
      <JsonLd data={faqSchema} />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <article className="home-hero-main">
            <div className="home-hero-brandline">
              <p className="home-hero-kicker">Rebel Estetica Epigenetica | Carmagnola</p>
              <span className="home-hero-badge">Signature beauty locale</span>
            </div>
            <h1 className="home-hero-title">
              <span className="home-hero-title-mark">REBEL</span>
              il centro estetico epigenetico a Carmagnola.
            </h1>
            <p className="home-hero-lead">
              Un&apos;esperienza estetica costruita su misura: ascolto, diagnosi, metodo
              e cura dei dettagli. Viso, corpo e laser Thory convivono in un unico
              percorso premium con obiettivi chiari e reali.
            </p>
            <div className="home-hero-cta">
              <Link className="button button-primary" href="/contatti">
                Prenota una consulenza
              </Link>
              <Link className="button button-secondary" href="/listino-estetica-laser">
                Guarda i trattamenti
              </Link>
              <Link className="button button-secondary" href="/metodo-rebel">
                Scopri il metodo
              </Link>
            </div>
            <div className="home-hero-chips">
              <span className="home-chip">Percorsi 1:1</span>
              <span className="home-chip">Laser Thory</span>
              <span className="home-chip">Carmagnola, Viale Barbaroux 20</span>
            </div>
            <div className="home-hero-stats">
              <div className="home-hero-stat">
                <strong>Rebel</strong>
                <span>Brand beauty locale riconoscibile</span>
              </div>
              <div className="home-hero-stat">
                <strong>Viso + Corpo + Laser</strong>
                <span>Un metodo, una direzione precisa</span>
              </div>
              <div className="home-hero-stat">
                <strong>Carmagnola</strong>
                <span>Punto di riferimento della zona</span>
              </div>
            </div>
          </article>

          <aside className="home-hero-side">
            <div className="home-hero-media">
              <Image
                src="https://rebelepigenetica.it/assets/rebel/vetrina.webp"
                alt="Ingresso Rebel Carmagnola"
                width={1280}
                height={820}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className="home-hero-side-panel">
              <p className="home-hero-panel-title">L&apos;esperienza in studio</p>
              <p className="home-hero-caption">
                Un ambiente elegante, ritmi rispettati e consulenze precise: ogni
                trattamento nasce da una logica professionale, firmata Rebel.
              </p>
            </div>
            <div className="home-trust-grid">
              <div className="home-trust-item">
                <strong>1:1</strong>
                <span>Approccio personale</span>
              </div>
              <div className="home-trust-item">
                <strong>Viso + Corpo + Laser</strong>
                <span>Un unico punto di riferimento</span>
              </div>
              <div className="home-trust-item">
                <strong>Clienti locali</strong>
                <span>Carmagnola e comuni vicini</span>
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
          <InstagramFeed showReels={true} showPosts={true} maxReels={4} maxPosts={3} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Percorsi</p>
          <h2 className="page-title" style={{ marginTop: "0.6rem" }}>
            I passaggi principali per iniziare bene.
          </h2>
          <div className="grid grid-3" style={{ marginTop: "1.2rem" }}>
            <Link className="card" href="/chi-siamo">
              <h3 style={{ marginTop: 0 }}>Chi siamo</h3>
              <p className="lead" style={{ marginTop: 0 }}>
                Come lavoriamo e perche tante clienti tornano da noi.
              </p>
            </Link>
            <Link className="card" href="/metodo-rebel">
              <h3 style={{ marginTop: 0 }}>Metodo Rebel</h3>
              <p className="lead" style={{ marginTop: 0 }}>
                Dal primo colloquio al mantenimento, passo dopo passo.
              </p>
            </Link>
            <Link className="card" href="/listino-estetica-laser">
              <h3 style={{ marginTop: 0 }}>Trattamenti e listino</h3>
              <p className="lead" style={{ marginTop: 0 }}>
                Prezzi chiari per orientarti in pochi minuti.
              </p>
            </Link>
            <Link className="card" href="/contatti">
              <h3 style={{ marginTop: 0 }}>Contatti e mappa</h3>
              <p className="lead" style={{ marginTop: 0 }}>
                WhatsApp, telefono, orari e mappa: tutto subito disponibile.
              </p>
            </Link>
          </div>
          <p className="lead" style={{ marginTop: "0.95rem" }}>
            Se vuoi approfondire tecnologie, guide e localita servite, trovi tutto
            nel footer del sito.
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
            Sommariva del Bosco, Torino Sud e Alba. Se vuoi capire se Rebel e la
            scelta giusta per te, il modo migliore e scriverci: ti rispondiamo
            presto con indicazioni chiare su come iniziare.
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



