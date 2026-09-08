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
    title: "Valutazione",
    text: "In 30–40 minuti raccogliamo obiettivi, abitudini e informazioni utili, poi osserviamo pelle, corpo o area da trattare.",
  },
  {
    step: "02",
    title: "Priorità",
    text: "Stabiliamo quale esigenza affrontare per prima: preparazione, idratazione, impurità, luminosità, macchie, tono, corpo o epilazione.",
  },
  {
    step: "03",
    title: "Skin Reset",
    text: "Quando serve, prepariamo la pelle prima di passare a un trattamento più specifico, così le sedute successive partono da una base più ricettiva.",
  },
  {
    step: "04",
    title: "Percorso",
    text: "Costruiamo la combinazione di attivi, estratti vegetali, manualità e tecnologie, con durata, frequenza e prezzo dichiarati prima di iniziare.",
  },
  {
    step: "05",
    title: "Rivalutazione",
    text: "Durante il percorso controlliamo come risponde la pelle o il corpo e aggiorniamo intensità, frequenza o combinazioni quando necessario.",
  },
  {
    step: "06",
    title: "Mantenimento",
    text: "Dopo la fase iniziale pianifichiamo richiami e una routine semplice per mantenere nel tempo i risultati raggiunti.",
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
  { src: "/img/studio-treatwell/15432153.jpg", alt: "La postazione manicure REBEL", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432056.jpg", alt: "L’area attesa e accoglienza dello studio", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432127.jpg", alt: "Una cabina REBEL pronta per il trattamento", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432121.jpg", alt: "Tecnologie e attrezzature nella cabina REBEL", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432078.jpg", alt: "Lo spazio dedicato alla consulenza", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432117.jpg", alt: "La postazione per i trattamenti piedi", width: 1080, height: 720 },
  { src: "/img/studio-treatwell/15432155.jpg", alt: "La cabina e le attrezzature professionali REBEL", width: 1080, height: 720 },

  {
    src: siteAsset("studio.real.overview.desktop"),
    alt: "REBEL Carmagnola — spazi interni dello studio",
    width: 1672,
    height: 941,
  },
  {
    src: siteAsset("technologies.studio.thory.desktop"),
    alt: "REBEL Carmagnola — cabina con lettino e attrezzatura THORY",
    width: 1672,
    height: 941,
  },
  {
    src: siteAsset("studio.real.exterior.desktop"),
    alt: "REBEL Carmagnola — facciata e vetrina in Viale Barbaroux 20",
    width: 1672,
    height: 941,
  },
];
