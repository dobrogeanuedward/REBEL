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
            <span className="page-hero-brand-text">{siteConfig.name}</span>
          </div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title page-hero-title">
            {title}
          </h1>
          <p className="lead">{lead}</p>
          {badge ? (
            <div className="page-hero-badge-wrap">
              <span className="badge">{badge}</span>
            </div>
          ) : null}
          {children ? <div className="page-hero-extra">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}



