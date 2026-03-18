import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  badge?: string;
  tone?: "violet" | "rose" | "ocean" | "gold" | "emerald";
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  badge,
  tone = "violet",
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-tone-${tone}`}>
      <div className="container">
        <div className="page-hero-shell">
          <div className="page-hero-copy">
            <div className="page-hero-brand">
              <span className="logo-glow logo-glow--sm">
                <Image
                  src={siteConfig.assets.logoLight}
                  alt={siteConfig.name}
                  width={140}
                  height={46}
                  className="page-hero-logo"
                />
              </span>
              <div className="page-hero-brand-copy">
                <span className="page-hero-brand-text">{siteConfig.name}</span>
                <span className="page-hero-brand-note">Boutique beauty epigenetica</span>
              </div>
            </div>
            <div className="page-hero-meta">
              <p className="eyebrow page-hero-eyebrow">{eyebrow}</p>
              {badge ? (
                <div className="page-hero-badge-wrap">
                  <span className="badge">{badge}</span>
                </div>
              ) : null}
            </div>
            <h1 className="page-title page-hero-title">
              {title}
            </h1>
            <p className="lead page-hero-lead">{lead}</p>
            {children ? <div className="page-hero-extra">{children}</div> : null}
          </div>
          <aside className="page-hero-signature" aria-label="Metodo Rebel">
            <p className="page-hero-signature-kicker">Metodo Rebel</p>
            <div className="page-hero-signature-grid">
              <div className="page-hero-signature-item">
                <span>01</span>
                <strong>Lettura estetica</strong>
                <small>Pelle, tono e luminosita&apos; diventano una direzione precisa.</small>
              </div>
              <div className="page-hero-signature-item">
                <span>02</span>
                <strong>Percorso su misura</strong>
                <small>Manualita&apos;, attivi e tecnologia lavorano insieme con coerenza.</small>
              </div>
              <div className="page-hero-signature-item">
                <span>03</span>
                <strong>Risultato percepibile</strong>
                <small>Una bellezza piu&apos; luminosa, curata e leggibile nel tempo.</small>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



