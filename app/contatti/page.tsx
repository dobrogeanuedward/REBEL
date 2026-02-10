import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

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

  return (
    <main className="page-shell page-contatti">
      <JsonLd data={breadcrumb} />
      <JsonLd data={contactSchema} />
      <PageHero
        eyebrow="Contatti locali Carmagnola"
        title="Contattaci quando vuoi: ti rispondiamo in modo rapido e chiaro."
        lead="Puoi scriverci su WhatsApp, chiamarci o compilare il form qui sotto. Ti aiutiamo a capire da dove partire, con indicazioni semplici e utili."
        badge="Viale Barbaroux 20, Carmagnola"
        tone="emerald"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Contatti rapidi</h2>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  💬
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>WhatsApp</div>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(124, 58, 237, 0.15))",
                    border: "1px solid rgba(167, 139, 250, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  📞
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Telefono</div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(228, 72, 150, 0.2), rgba(219, 39, 119, 0.15))",
                    border: "1px solid rgba(228, 72, 150, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  ✉️
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.15))",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  📍
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Indirizzo</div>
                  <a
                    href={siteConfig.social.maps}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}
                  >
                    {siteConfig.address.streetAddress}, {siteConfig.address.locality}
                  </a>
                </div>
              </div>
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
                WhatsApp Live
              </a>
              <a className="button button-secondary" href={`tel:${siteConfig.phoneRaw}`}>
                Chiamaci ora
              </a>
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
              Se ci scrivi su WhatsApp, indicaci anche la fascia oraria in cui
              preferisci essere ricontattata.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="page-title">Mappa e indicazioni rapide</h2>
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
          <div style={{ marginTop: "1rem" }}>
            <Link href="/listino-estetica-laser" className="button button-primary">
              Vedi listino completo
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Scrivici dal form</h2>
            <p className="lead" style={{ marginTop: "0.35rem" }}>
              Compila il form e ti ricontattiamo via email o telefono. Il sistema
              e gia predisposto per inoltrare le richieste anche verso Gmail.
            </p>
            <ContactForm />
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Prima visita: come funziona</h2>
            <ul className="list-clean">
              <li>- ci racconti il tuo obiettivo</li>
              <li>- facciamo una valutazione iniziale</li>
              <li>- ti proponiamo un percorso chiaro e sostenibile</li>
              <li>- decidi tu se e quando iniziare</li>
            </ul>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              Nessun linguaggio complicato: preferiamo spiegarti tutto in modo
              semplice, cosi sai esattamente cosa aspettarti.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

