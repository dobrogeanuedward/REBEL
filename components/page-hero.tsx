type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  badge?: string;
  tone?: "violet" | "rose" | "ocean" | "gold" | "emerald";
};

export function PageHero({
  eyebrow,
  title,
  lead,
  badge,
  tone = "violet",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-tone-${tone}`}>
      <div className="container">
        <div className="page-hero-shell">
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
        </div>
      </div>
    </section>
  );
}



