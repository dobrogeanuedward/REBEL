import menu from "@/data/treatwell-menu.json";
import { rebelJourneys } from "@/lib/rebel-journeys";
import { protocolPages } from "@/lib/protocol-pages";
import { laserOffer } from "@/lib/laser-offer";
export { menu };
export const euro = (value: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    value,
  );
export const priceRange = (price: { min: number; max: number }) =>
  price.min === price.max
    ? euro(price.min)
    : `${euro(price.min)}–${euro(price.max)}`;
export const durationRange = (min: number, max: number) =>
  min === max ? `${min} min` : `${min}–${max} min`;
export const bookingChoices = [
  {
    id: "valutazione",
    label: "Aiutatemi a scegliere · valutazione REBEL",
    price: "30–40 minuti · gratuita se inizi il percorso proposto",
  },
  {
    id: "promo-zona",
    label: "Promo laser · a zona",
    price: `${laserOffer.zone.price} per zona e seduta`,
  },
  {
    id: "promo-full-body",
    label: "Promo laser · Full Body",
    price: `${laserOffer.totalBody.price} · ${laserOffer.totalBody.detail} · una seduta`,
  },
  ...rebelJourneys.map((j) => ({
    id: `percorso-${j.slug}`,
    label: `Percorso ${j.name}`,
    price: `${j.price} · ${j.priceNote}`,
  })),
  ...protocolPages.map((p) => ({
    id: `protocollo-${p.slug}`,
    label: p.name,
    price: p.price,
  })),
  ...menu.categories.flatMap((c) =>
    c.items.map((i) => ({
      id: i.id,
      label: i.name,
      price: `${priceRange(i.price)} · ${durationRange(i.durationMin, i.durationMax)}`,
    })),
  ),
];
export const requestTreatment = (id: string, option?: string) =>
  `/contatti?source=listino&servizio=${encodeURIComponent(id)}${option ? `&variante=${encodeURIComponent(option)}` : ""}#prenota`;
