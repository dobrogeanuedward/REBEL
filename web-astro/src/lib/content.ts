/**
 * Editorial content for Metodo Rebel and other static blocks.
 */

import { protocolPages } from "@/lib/protocol-pages";

export const protocolCards = protocolPages.map((protocol) => ({
  slug: protocol.slug,
  name: protocol.name,
  desc: protocol.shortDescription,
  price: protocol.price,
}));

/**
 * The canonical six-step Method Rebel from the fair brochure.
 * Individual protocols are tools inside a journey, never the primary hierarchy.
 */
export const methodSteps = [
  {
    step: "01",
    title: "Valutazione",
    text: "Ascoltiamo desideri, abitudini e storia della pelle. Colleghiamo ciò che vedi, ciò che senti e ciò che la pelle sta vivendo.",
  },
  {
    step: "02",
    title: "Priorità",
    text: "Individuiamo ciò che viene prima nel momento attuale e definiamo un obiettivo condiviso, comprensibile e concreto.",
  },
  {
    step: "03",
    title: "Skin Reset",
    text: "Prepariamo la pelle a ricevere il percorso, migliorandone comfort, uniformità e ricettività agli step successivi.",
  },
  {
    step: "04",
    title: "Percorso",
    text: "Combiniamo manualità, attivi e tecnologie con una ragione precisa. I protocolli entrano come strumenti della regia Rebel.",
  },
  {
    step: "05",
    title: "Rivalutazione",
    text: "Osserviamo la risposta e aggiorniamo sequenza, frequenza e intensità. La tua Mappa Rebel evolve insieme alla pelle.",
  },
  {
    step: "06",
    title: "Preservare",
    text: "Accompagniamo nel tempo l’equilibrio raggiunto con richiami mirati e una routine essenziale costruita sulla fase attuale.",
  },
];

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
