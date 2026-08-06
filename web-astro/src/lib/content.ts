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
 * Each step must explain what happens to a first-time visitor.
 */
export const methodSteps = [
  {
    step: "01",
    title: "Colloquio iniziale",
    text: "Ci racconti che cosa vuoi migliorare, quali trattamenti hai già provato, la tua routine e quanto tempo puoi dedicare agli appuntamenti.",
  },
  {
    step: "02",
    title: "Valutazione professionale",
    text: "Osserviamo pelle o corpo e rileviamo gli aspetti da trattare: idratazione, sensibilità, luminosità, tono, uniformità, tessuti o ricrescita del pelo.",
  },
  {
    step: "03",
    title: "Preparazione della pelle",
    text: "Quando necessario iniziamo con Skin Reset o con un trattamento preparatorio, così la pelle riceve meglio gli attivi e le sedute successive.",
  },
  {
    step: "04",
    title: "Programma di trattamento",
    text: "Definiamo quali trattamenti, prodotti e tecnologie usare, quante sedute prevedere e con quale frequenza iniziare.",
  },
  {
    step: "05",
    title: "Controllo dei risultati",
    text: "Durante gli appuntamenti verifichiamo come risponde la pelle o il corpo e modifichiamo intensità, frequenza o combinazioni quando necessario.",
  },
  {
    step: "06",
    title: "Mantenimento",
    text: "Dopo la fase iniziale programmiamo richiami e una routine semplice per conservare il risultato raggiunto.",
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
