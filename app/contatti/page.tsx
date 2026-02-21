import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { InstagramFeed } from "@/components/instagram-feed";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildWebPageSchema, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type ContactIconKind = "whatsapp" | "phone" | "email" | "pin";

function ContactIcon({ kind }: { kind: ContactIconKind }) {
  if (kind === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L4 21l4.95-1.57A8.5 8.5 0 1 0 12 3.5Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.8 9.3c.2-.5.46-.5.68-.5h.6c.2 0 .47.04.6.42.14.38.47 1.3.5 1.38.05.1.08.24.02.38-.06.14-.1.22-.2.33-.1.12-.2.27-.3.36-.1.1-.2.2-.08.4.1.2.47.8 1 1.3.7.62 1.3.83 1.5.92.2.1.3.08.42-.04.1-.12.5-.58.62-.78.13-.2.27-.17.45-.1.18.06 1.16.54 1.36.64.2.1.33.16.38.26.05.1.05.63-.15 1.24-.2.6-1.18 1.18-1.62 1.24-.42.07-.95.1-2.6-.6-2-.86-3.3-3-3.4-3.12-.1-.12-.8-1.06-.8-2.02 0-.96.5-1.43.68-1.62Z" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M6.7 4.3 9.5 7a1.2 1.2 0 0 1 .23 1.43l-1.1 2.02a1 1 0 0 0 .08 1.02c.74 1 1.55 1.94 2.44 2.83.9.88 1.84 1.7 2.83 2.44a1 1 0 0 0 1.02.08l2.02-1.1A1.2 1.2 0 0 1 18.5 16l2.7 2.8a1.3 1.3 0 0 1 .27 1.37c-.58 1.5-2.07 2.37-3.67 2.11-4.15-.67-7.84-4.36-8.5-8.5A3.25 3.25 0 0 1 4.3 6.7 1.3 1.3 0 0 1 5.63 4l1.07.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "email") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M12 20.5s6-5.7 6-10a6 6 0 0 0-12 0c0 4.3 6 10 6 10Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

export const metadata: Metadata = createPageMetadata({
  title: "Contatti Centro Estetico Rebel a Carmagnola | WhatsApp, Mappa, Orari",
  description:
    "Contatta Rebel a Carmagnola: WhatsApp, telefono, email, indirizzo e orari aggiornati. Prenota la tua lettura iniziale o la valutazione laser.",
  path: "/contatti",
  keywords: [
    "contatti centro estetico Carmagnola",
    "whatsapp estetista Carmagnola",
    "indirizzo Rebel Carmagnola",
  ],
});

export default function ContattiPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contatti", path: "/contatti" },
  ]);
  const webPageSchema = buildWebPageSchema({
    name: "Contatti Rebel Carmagnola",
    description:
      "WhatsApp, telefono, email e mappa per raggiungere Rebel a Carmagnola.",
    path: "/contatti",
  });

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contatti Rebel Estetica Epigenetica",
    url: `${siteConfig.siteUrl}/contatti`,
    about: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
    },
  };
  const quickContacts: Array<{
    kind: ContactIconKind;
    label: string;
    value: string;
    href: string;
    external?: boolean;
    color: string;
    background: string;
    border: string;
  }> = [
    {
      kind: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.phoneDisplay,
      href: siteConfig.social.whatsapp,
      external: true,
      color: "#d8fff2",
      background: "linear-gradient(135deg, rgba(16, 185, 129, 0.26), rgba(5, 150, 105, 0.18))",
      border: "1px solid rgba(16, 185, 129, 0.36)",
    },
    {
      kind: "phone",
      label: "Telefono",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneRaw}`,
      color: "#e2dcff",
      background: "linear-gradient(135deg, rgba(167, 139, 250, 0.26), rgba(124, 58, 237, 0.18))",
      border: "1px solid rgba(167, 139, 250, 0.34)",
    },
    {
      kind: "email",
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "#ffe2f2",
      background: "linear-gradient(135deg, rgba(228, 72, 150, 0.24), rgba(219, 39, 119, 0.16))",
      border: "1px solid rgba(228, 72, 150, 0.34)",
    },
    {
      kind: "pin",
      label: "Indirizzo",
      value: `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}`,
      href: siteConfig.social.maps,
      external: true,
      color: "#d8ecff",
      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.24), rgba(37, 99, 235, 0.16))",
      border: "1px solid rgba(59, 130, 246, 0.34)",
    },
  ];

  return (
    <main className="page-shell page-contatti">
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={contactSchema} />
      <PageHero
        eyebrow="Contatti locali Carmagnola"
        title="Scrivici due righe: ti rispondiamo con una direzione chiara."
        lead="WhatsApp è il modo più rapido. Se preferisci, puoi chiamare o usare il form. Se ci dici zona, obiettivo e tempi, ti guidiamo con chiarezza."
        badge="Viale Barbaroux 20, Carmagnola"
        tone="emerald"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Contatti rapidi</h2>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.85rem" }}>
              {quickContacts.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: item.background,
                      border: item.border,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ContactIcon kind={item.kind} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "1.4rem",
                display: "flex",
                gap: "0.7rem",
                flexWrap: "wrap",
              }}
            >
              <a
                className="button button-primary"
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Apri WhatsApp
              </a>
              <a className="button button-secondary" href={`tel:${siteConfig.phoneRaw}`}>
                Chiamaci ora
              </a>
            </div>
            <div className="card-light" style={{ marginTop: "1.1rem" }}>
              <h3 style={{ marginTop: 0 }}>Cosa scrivere su WhatsApp (per partire bene)</h3>
              <ul className="list-clean" style={{ marginTop: "0.5rem" }}>
                <li>- zona (es. ascelle / inguine / gambe / viso / schiena)</li>
                <li>- obiettivo (ridurre ricrescita, peli incarniti, tono viso, ecc.)</li>
                <li>- quando vuoi iniziare e che orari ti sono comodi</li>
              </ul>
              <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <Link className="button button-secondary" href="/centro-estetico-carmagnola">
                  Centro estetico Carmagnola
                </Link>
                <Link className="button button-secondary" href="/epilazione-laser-carmagnola">
                  Laser a Carmagnola
                </Link>
                <Link className="button button-secondary" href="/protocolli-epigenetici">
                  Protocolli epigenetici
                </Link>
              </div>
            </div>
          </article>

          <aside className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Orari di apertura</h2>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.65rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--muted)", fontSize: "0.9rem" }}>Martedì</span>
                <strong style={{ fontSize: "1rem", letterSpacing: "0.02em" }}>09:00 - 19:00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--muted)", fontSize: "0.9rem" }}>Mercoledì</span>
                <strong style={{ fontSize: "1rem", letterSpacing: "0.02em" }}>11:00 - 21:00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--muted)", fontSize: "0.9rem" }}>Giovedì</span>
                <strong style={{ fontSize: "1rem", letterSpacing: "0.02em" }}>09:00 - 19:00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--muted)", fontSize: "0.9rem" }}>Venerdì</span>
                <strong style={{ fontSize: "1rem", letterSpacing: "0.02em" }}>09:00 - 19:00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--muted)", fontSize: "0.9rem" }}>Sabato</span>
                <strong style={{ fontSize: "1rem", letterSpacing: "0.02em" }}>09:00 - 14:00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(248,247,244,0.5)", fontSize: "0.9rem" }}>Domenica</span>
                <span style={{ color: "rgba(248,247,244,0.5)", fontSize: "0.9rem" }}>Chiuso</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(248,247,244,0.5)", fontSize: "0.9rem" }}>Lunedì</span>
                <span style={{ color: "rgba(248,247,244,0.5)", fontSize: "0.9rem" }}>Chiuso</span>
              </div>
            </div>
            <p className="lead" style={{ marginTop: "1.1rem", fontSize: "0.9rem" }}>
              Se ci scrivi su WhatsApp, indicaci anche una fascia oraria comoda: ti rispondiamo appena possiamo.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Mappa e come arrivare</h2>
          <p
            className="lead"
            style={{ color: "rgba(39,31,56,0.78)", marginTop: "0.8rem" }}
          >
            Rebel si trova in posizione comoda per Carmagnola e per chi arriva da
            Carignano, Racconigi, Sommariva del Bosco e Torino Sud.
          </p>
          <div className="map-wrap" style={{ marginTop: "1rem", borderColor: "rgba(39,31,56,0.2)" }}>
            <iframe
              title="Mappa Rebel Carmagnola"
              src="https://www.google.com/maps?q=Viale+Barbaroux+20,+Carmagnola&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <Link href="/listino-estetica-laser" className="button button-primary">
              Vedi listino completo
            </Link>
            <Link
              href="/epilazione-laser-carmagnola"
              className="button button-secondary"
            >
              Epilazione laser Carmagnola
            </Link>
            <Link className="button button-secondary" href="/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica">
              Guida ascelle
            </Link>
            <Link className="button button-secondary" href="/competenze/epilazione-laser-inguine-carmagnola-guida-pratica">
              Guida inguine
            </Link>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <p className="eyebrow" style={{ color: "rgba(39,31,56,0.68)" }}>
              Instagram
            </p>
            <p className="lead" style={{ color: "rgba(39,31,56,0.78)", marginTop: "0.55rem" }}>
              Se vuoi dare un&apos;occhiata al centro e al mood Rebel: qui trovi alcuni reel in evidenza.
            </p>
            <InstagramFeed showReels={true} showPosts={false} maxReels={4} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Scrivici dal form</h2>
            <p className="lead" style={{ marginTop: "0.35rem" }}>
              Compila il form e ti ricontattiamo via email o telefono. Se hai fretta,
              WhatsApp resta il modo più veloce.
            </p>
            <ContactForm />
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Prima visita: come funziona</h2>
            <ul className="list-clean">
              <li>- ci racconti obiettivo e priorità</li>
              <li>- facciamo una valutazione iniziale (pelle, zona, abitudini)</li>
              <li>- ti proponiamo un piano con tempi realistici</li>
              <li>- decidi tu se iniziare e da cosa partire</li>
            </ul>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              Niente parole complicate: ti diciamo cosa facciamo, cosa aspettarti e
              cosa conviene fare tra un appuntamento e l&apos;altro.
            </p>
            <div style={{ marginTop: "0.9rem", display: "grid", gap: "0.55rem" }}>
              <Link className="link-card" href="/competenze/laser-uomo-carmagnola-guida-pratica">
                <span className="link-card-content">
                  <span className="link-card-title">Laser uomo (guida pratica)</span>
                  <small className="link-card-desc">Barba/collo e aree ampie: strategia, calendario, ricrescita.</small>
                </span>
              </Link>
              <Link className="link-card" href="/competenze/peli-incarniti-laser-carmagnola">
                <span className="link-card-content">
                  <span className="link-card-title">Peli incarniti e laser</span>
                  <small className="link-card-desc">Cosa cambia davvero nel quotidiano e quali errori evitare.</small>
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

