type FaqItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  title?: string;
  items: FaqItem[];
};

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  if (items.length === 0) return null;
  return (
    <section className="faq-accordion">
      {title ? <h2 className="faq-accordion-title">{title}</h2> : null}
      <div className="faq-accordion-list">
        {items.map((item, index) => (
          <details key={item.q} className="faq-disclosure" open={index === 0}>
            <summary className="faq-summary">{item.q}</summary>
            <div className="faq-body">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

