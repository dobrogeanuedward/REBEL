import { laserOffer } from "./laser-offer";
import { localAreaPages } from "./local-pages";
import { siteConfig } from "./site-config";

// Selected campaign catchment; no fabricated distances or satellite locations.
const catchment = new Set([
  "carmagnola", "carignano", "racconigi", "caramagna-piemonte", "villastellone",
  "poirino", "pancalieri", "lombriasco", "osasio", "casalgrasso", "virle-piemonte",
  "sommariva-del-bosco", "pralormo", "moncalieri", "nichelino", "vinovo", "la-loggia",
  "trofarello", "chieri", "orbassano", "bra", "canale", "savigliano", "saluzzo",
]);
export const laserCampaignAreas = localAreaPages.filter(area => catchment.has(area.slug));
export const isLaserCampaignArea = (slug: string) => catchment.has(slug);
export const campaignWhatsApp = (message: string) =>
  `${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`;

export function buildLaserCampaignSchema(path: string, fullBodyOnly = false) {
  const url = new URL(path, siteConfig.siteUrl).href;
  const options = fullBodyOnly
    ? [{ name: `Full body · ${laserOffer.totalBody.detail} · 1 seduta`, amount: laserOffer.totalBody.amount }]
    : [{ name: "1 zona · 1 seduta", amount: laserOffer.zone.amount },
       { name: `Full body · ${laserOffer.totalBody.detail} · 1 seduta`, amount: laserOffer.totalBody.amount }];
  return {
    "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, url,
    name: fullBodyOnly ? "Promozione laser full body a Carmagnola" : "Promozione epilazione laser a Carmagnola",
    serviceType: "Epilazione laser con Lumina X1 Pro di THORY e ICE Polar",
    provider: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
    areaServed: laserCampaignAreas.map(area => ({ "@type": "City", name: area.city })),
    description: `${laserOffer.zoneCounting.note} ${laserOffer.validity.label}`,
    offers: options.map(option => ({
      "@type": "Offer", name: option.name, price: option.amount, priceCurrency: "EUR", url,
      seller: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
      description: `${option.name}. Zone confermate prima di prenotare. ${laserOffer.validity.label}`,
    })),
  };
}
