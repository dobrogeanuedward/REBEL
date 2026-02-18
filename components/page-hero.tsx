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
                src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
                alt={siteConfig.name}
                width={140}
                height={46}
                className="page-hero-logo"
              />
            </span>
            <span className="page-hero-brand-text">{siteConfig.name}</span>
          </div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title" style={{ marginTop: "0.55rem" }}>
            {title}
          </h1>
          <p className="lead">{lead}</p>
          {badge ? (
            <div style={{ marginTop: "1rem" }}>
              <span className="badge">{badge}</span>
            </div>
          ) : null}
          {children ? <div className="page-hero-extra">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}



