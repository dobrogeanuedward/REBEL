import { siteConfig } from "@/lib/site-config";

export function WhatsappLiveButton() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Apri chat WhatsApp con Rebel"
      className="wa-live"
    >
      <span className="wa-live-dot" aria-hidden="true" />
      <span className="wa-live-text">
        WhatsApp Live
        <small>Rispondiamo in giornata</small>
      </span>
    </a>
  );
}

