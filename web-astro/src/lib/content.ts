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
    step: "01",
    title: "Prima visita gratuita",
    text: "Quindici minuti per conoscerci. Ci dici cosa vorresti fare, leggiamo pelle e zona, decidiamo se ha senso iniziare un percorso.",
  },
  {
    step: "02",
    title: "Proposta chiara",
    text: "Ti mostriamo prezzo, durata e numero di sedute realistico. Niente pacchetti opachi né promesse fuori scala.",
  },
  {
    step: "03",
    title: "Il primo trattamento",
    text: "Si parte con la prima seduta. Lavoriamo con tecnologia Thory + Ice Polar e prodotti professionali (Marbellas, Eberlin).",
  },
  {
    step: "04",
    title: "Calendario su misura",
    text: "Concordiamo i richiami in base alla tua agenda: turni di lavoro, stagioni, eventi importanti. Lo studio è aperto Mar–Sab.",
  },
  {
    step: "05",
    title: "Mantenimento facile",
    text: "Due o tre gesti a casa più una seduta di mantenimento. Così non riparti da zero ogni volta che cambia stagione.",
  },
];

// Hero slider — tre delle immagini originali sono state rimosse perché
// poco rappresentative; verranno reintegrate quando avremo scatti dedicati.
// Per ora mostriamo solo le foto realmente forti dello studio.
export const homeHeroImages = [
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
    alt: "Rebel Carmagnola — pulizia viso in cabina",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public",
    alt: "Rebel Carmagnola — scrub corpo in cabina",
    objectPosition: "50% 34%",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public",
    alt: "Rebel Carmagnola — manicure semipermanente",
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
