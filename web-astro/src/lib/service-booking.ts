import { siteConfig } from "./site-config";

// Compact public context shared by service CTAs and the contact form. No
// customer-entered values are accepted from a URL or included in measurement.
export const serviceRequests: Record<string, { name: string; ids: string[] }> = {
  "pulizia-viso-carmagnola": { name: "Pulizia viso", ids: ["TR6412964", "TR7161574", "TR7161578", "TR7161579", "TR7161581"] },
  "scrub-corpo-carmagnola": { name: "Scrub corpo", ids: ["TR6412965", "TR7161688"] },
  "massaggio-rilassante-carmagnola": { name: "Massaggio rilassante", ids: ["TR6412966"] },
  "massaggio-linfodrenante-carmagnola": { name: "Massaggio linfodrenante", ids: ["TR6412967"] },
  "manicure-semipermanente-carmagnola": { name: "Manicure e semipermanente", ids: ["TR6412935", "TR6412931", "TR6412932", "TR7161632"] },
  "laminazione-ciglia-sopracciglia-carmagnola": { name: "Laminazione ciglia e sopracciglia", ids: ["TR7355535", "TR7355542", "TR6412972"] },
  "pedicure-carmagnola": { name: "Pedicure: scelta del trattamento", ids: ["TR6412942", "TR6412950", "TR6412949"] },
  "pedicure-estetico-carmagnola": { name: "Pedicure estetico", ids: ["TR6412942"] },
  "pedicure-estetico-con-smalto-carmagnola": { name: "Pedicure con smalto", ids: [] },
  "pedicure-semipermanente-carmagnola": { name: "Pedicure semipermanente", ids: [] },
  "taglio-unghie-piedi-carmagnola": { name: "Taglio unghie piedi", ids: ["TR6412950"] },
  "epilazione-laser-viso-carmagnola": { name: "Epilazione laser viso", ids: [] },
  "epilazione-laser-corpo-carmagnola": { name: "Epilazione laser corpo", ids: [] },
  "epilazione-laser-viso-uomo-carmagnola": { name: "Epilazione laser viso uomo", ids: [] },
  "epilazione-laser-corpo-uomo-carmagnola": { name: "Epilazione laser corpo uomo", ids: [] },
  "ceretta-carmagnola": { name: "Epilazione a cera donna e uomo", ids: [] },
  "trattamenti-viso-carmagnola": { name: "Trattamenti viso", ids: [] },
  "trattamenti-corpo-carmagnola": { name: "Trattamenti corpo", ids: [] },
  "pressomassaggio-carmagnola": { name: "Pressomassaggio", ids: [] },
  "massaggi-carmagnola": { name: "Massaggi estetici e di benessere", ids: [] },
};

export const serviceContactPath = (slug: string) =>
  `/contatti?source=servizio&trattamento=${encodeURIComponent(slug)}#prenota`;

export const serviceWhatsApp = (slug: string) => {
  const name = Object.hasOwn(serviceRequests, slug) ? serviceRequests[slug].name : "un trattamento REBEL";
  const details = ["pedicure-estetico-con-smalto-carmagnola", "pedicure-semipermanente-carmagnola"].includes(slug)
    ? "Vorrei scegliere il colore e prenotare un appuntamento a Carmagnola."
    : "Vorrei conoscere disponibilità, durata e prezzo per un appuntamento a Carmagnola.";
  return `https://wa.me/${siteConfig.phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(`Ciao REBEL! Mi interessa ${name}. ${details}`)}`;
};
