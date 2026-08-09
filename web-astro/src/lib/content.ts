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

const siteAsset = (slot: string) => `/api/site-asset?slot=${encodeURIComponent(slot)}`;

export const storeGalleryImages = [
  {
    src: siteAsset("studio.real.overview.desktop"),
    alt: "REBEL Carmagnola — spazi interni dello studio",
    width: 1672,
    height: 941,
  },
  {
    src: siteAsset("technologies.studio.thory.desktop"),
    alt: "REBEL Carmagnola — cabina reale con lettino e attrezzatura THORY",
    width: 1672,
    height: 941,
  },
  {
    src: siteAsset("studio.real.exterior.desktop"),
    alt: "REBEL Carmagnola — facciata e vetrina reali in Viale Barbaroux 20",
    width: 1672,
    height: 941,
  },
];
