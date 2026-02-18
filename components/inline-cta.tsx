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
  eyebrow = "Se vuoi, ti guidiamo noi",
  title,
  lead,
  primaryLabel = "Contatti",
  primaryHref = "/contatti",
  secondaryLabel,
  secondaryHref,
  showWhatsapp = true,
}: InlineCTAProps) {
  return (
    <aside className="inline-cta">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="inline-cta-title">{title}</h2>
      <p className="lead" style={{ marginTop: "0.6rem" }}>
        {lead}
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
            className="button button-secondary"
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

