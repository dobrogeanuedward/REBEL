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
    text: "Pochi gesti a casa + richiami in cabina: così non riparti da zero ogni volta.",
  },
];

export const classicaListino = [
  {
    service: "Pulizia viso purificante",
    detail: "Azione igienizzante e riequilibrante su pelle impura o ispessita.",
    price: "EUR 49",
  },
  {
    service: "Scrub corpo",
    detail: "Esfoliazione profonda per levigatezza immediata.",
    price: "EUR 49",
  },
  {
    service: "Massaggio rilassante 50 min",
    detail: "Distensione muscolare su cervicale, schiena e spalle.",
    price: "EUR 59",
  },
  {
    service: "Massaggio linfodrenante 50 min",
    detail: "Tecnica drenante per leggerezza e riduzione gonfiore.",
    price: "EUR 69",
  },
  {
    service: "Laminazione ciglia e sopracciglia",
    detail: "Definizione dello sguardo con curvatura e ordine.",
    price: "EUR 79",
  },
  {
    service: "Manicure + semipermanente",
    detail: "Finish resistente e personalizzato.",
    price: "EUR 26",
  },
];

export const laserListino = [
  {
    area: "Viso donna",
    detail: "Baffetti, mento, basette.",
    price: "da EUR 25.90",
  },
  {
    area: "Viso uomo",
    detail: "Baffi, mento, zigomi.",
    price: "EUR 51.80 / 25.90 per zona",
  },
  {
    area: "Corpo donna",
    detail: "Ascelle, inguine, mezza gamba e altre aree.",
    price: "da EUR 25.90 a 103.60",
  },
  {
    area: "Corpo uomo",
    detail: "Schiena completa, addome e altre zone.",
    price: "da EUR 25.90 a 103.60",
  },
];

export const thoryDevices = [
  {
    name: "Thory RF",
    role: "Compattezza ed elasticità.",
  },
  {
    name: "Thory Analys Visage AI",
    role: "Analisi e monitoraggio dei progressi nel tempo.",
  },
  {
    name: "Thory Pressodren",
    role: "Drenaggio e leggerezza corporea.",
  },
  {
    name: "Thory Lift Frequency Body",
    role: "Ridefinizione e tono tissutale.",
  },
  {
    name: "Thory Laser System",
    role: "Epilazione progressiva selettiva.",
  },
];

export const storeGalleryImages = [
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769377/0_c3xnae.webp",
    alt: "Rebel Carmagnola - Accoglienza",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769376/3-1_azvdla.webp",
    alt: "Rebel Carmagnola - Postazione nails",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/6-1-1_qutptv.webp",
    alt: "Rebel Carmagnola - Cabina 1",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/2_ymmjmu.webp",
    alt: "Rebel Carmagnola - Cabina 2",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769377/7_neoi9k.webp",
    alt: "Rebel Carmagnola - Cabina 3",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769378/5_jjooec.webp",
    alt: "Rebel Carmagnola - Cabina 4",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769379/3_ic7ggj.webp",
    alt: "Rebel Carmagnola - Postazione nails e corridoio",
  },
  {
    src: "https://res.cloudinary.com/dx8tfq82f/image/upload/v1770770035/20_qq681e.webp",
    alt: "Rebel Carmagnola - Esterno, entrata e vetrina",
  },
];

export const homeHeroImages = [
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/ca27abea-0dc0-4891-39de-6ccf6608c400/public",
    alt: "Rebel Carmagnola - Epilazione laser viso in cabina",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/fa3dd7a8-be13-478b-ef90-02ff30dc1d00/public",
    alt: "Rebel Carmagnola - Epilazione laser corpo su misura",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/d3b7108e-12c1-4ae2-0bc1-63f7d5723e00/public",
    alt: "Rebel Carmagnola - Laser e gestione estate con approccio professionale",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2b9d922f-bd03-4b99-3e66-e868fcf15b00/public",
    alt: "Rebel Carmagnola - Percorso laser impostato con continuita in inverno",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
    alt: "Rebel Carmagnola - Pulizia viso professionale",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/36432583-2164-4715-5276-befc4368bd00/public",
    alt: "Rebel Carmagnola - Gestione peli incarniti e comfort della pelle",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2f7921c2-f3d2-482b-eb26-4ae779f3fd00/public",
    alt: "Rebel Carmagnola - Massaggio linfodrenante",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/ba59e49d-5727-4c34-4b78-5ed055fb6f00/public",
    alt: "Rebel Carmagnola - Pressoterapia in cabina",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/a25446d3-35ce-4a03-1111-2196f55d6900/public",
    alt: "Rebel Carmagnola - Pedicure professionale",
  },
];



