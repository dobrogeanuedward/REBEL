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
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="inline-cta-title">{title}</h2>
      <p className="lead mt-sm">
        {lead}
      </p>
      <p className="inline-cta-note">
        Un invito netto alla consulenza, al trattamento giusto, al risultato che vuoi vedere.
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

