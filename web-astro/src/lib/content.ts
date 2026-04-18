/**
 * Editorial content for Metodo Rebel and other static blocks. Once protocol/
 * service pages are ported, the protocol catalogue will move into Astro
 * Content Collections (`src/content/protocols/*.md`).
 */

import { protocolPages } from "@/lib/protocol-pages";

export const protocolCards = protocolPages.map((protocol) => ({
  slug: protocol.slug,
  name: protocol.name,
  desc: protocol.shortDescription,
  price: protocol.price,
}));

export const methodSteps = [
  {
    step: "Step 1",
    title: "Lettura iniziale",
    text: "Partiamo da pelle, obiettivi e tempi: decidiamo una priorità e un ritmo che abbia senso.",
  },
  {
    step: "Step 2",
    title: "Attivi intelligenti",
    text: "Scegliamo attivi e manualità in base al punto di partenza, senza stratificare a caso.",
  },
  {
    step: "Step 3",
    title: "Attivazione tecnologica",
    text: "La tecnologia entra solo quando aggiunge valore, non per riempire la seduta.",
  },
  {
    step: "Step 4",
    title: "Riprogrammazione",
    text: "Costruiamo continuità e progressione: la parte che rende i risultati più stabili.",
  },
  {
    step: "Step 5",
    title: "Mantenimento",
    text: "Pochi gesti a casa più richiami in cabina: così non riparti da zero ogni volta.",
  },
];

export const homeHeroImages = [
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public",
    alt: "Rebel Carmagnola — Epilazione laser viso in cabina",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
    alt: "Rebel Carmagnola — Epilazione laser corpo su misura",
    objectPosition: "50% 36%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
    alt: "Rebel Carmagnola — Pulizia viso professionale",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public",
    alt: "Rebel Carmagnola — Scrub corpo professionale",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/965f95e4-c556-424d-abca-77a5c7b1ae00/public",
    alt: "Rebel Carmagnola — Massaggio rilassante",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public",
    alt: "Rebel Carmagnola — Manicure semipermanente",
    objectPosition: "50% 34%",
  },
];

export const storeGalleryImages = [
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769377/0_c3xnae.webp", alt: "Rebel Carmagnola — Accoglienza" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769376/3-1_azvdla.webp", alt: "Rebel Carmagnola — Postazione nails" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/6-1-1_qutptv.webp", alt: "Rebel Carmagnola — Cabina 1" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/2_ymmjmu.webp", alt: "Rebel Carmagnola — Cabina 2" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769377/7_neoi9k.webp", alt: "Rebel Carmagnola — Cabina 3" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769378/5_jjooec.webp", alt: "Rebel Carmagnola — Cabina 4" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/3_ic7ggj.webp", alt: "Rebel Carmagnola — Postazione nails e corridoio" },
  { src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770770035/20_qq681e.webp", alt: "Rebel Carmagnola — Esterno, entrata e vetrina" },
];
