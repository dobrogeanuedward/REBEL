type EditorialSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
};

export function EditorialSection({ id, eyebrow, heading, paragraphs }: EditorialSectionProps) {
  return (
    <section id={id} className="editorial-section">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3 className="editorial-section-title">{heading}</h3>
      <div className="editorial-section-body">
        {paragraphs.map((p, idx) => (
          <p key={`${heading}-${idx}`} className="lead">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

