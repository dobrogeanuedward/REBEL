import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type InlineCTAProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showWhatsapp?: boolean;
};

export function InlineCTA({
  eyebrow = "Prenota la tua bellezza",
  title,
  lead,
  primaryLabel = "Prenota consulenza",
  primaryHref = "/contatti",
  secondaryLabel,
  secondaryHref,
  showWhatsapp = true,
}: InlineCTAProps) {
  return (
    <aside className="inline-cta">
      <div className="inline-cta-head">
        <p className="eyebrow">{eyebrow}</p>
        <span className="inline-cta-badge">Consulenza dedicata</span>
      </div>
      <h2 className="inline-cta-title">{title}</h2>
      <p className="lead mt-sm">
        {lead}
      </p>
      <div className="inline-cta-benefits" aria-hidden="true">
        <span>Luminosita&apos;</span>
        <span>Tono</span>
        <span>Protocollo</span>
      </div>
      <p className="inline-cta-note">
        Consulenza dedicata, selezione del trattamento, progressione costruita sul tuo risultato.
      </p>
      <div className="inline-cta-actions">
        <Link className="button button-primary" href={primaryHref}>
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link className="button button-secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        ) : null}
        {showWhatsapp ? (
          <a
            className="inline-cta-whatsapp"
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        ) : null}
      </div>
    </aside>
  );
}

