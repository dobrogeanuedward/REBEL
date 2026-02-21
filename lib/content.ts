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
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public",
    alt: "Rebel Carmagnola - Epilazione laser viso in cabina (nuova variante)",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
    alt: "Rebel Carmagnola - Epilazione laser corpo su misura (nuova variante)",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/02c98ad7-1a83-4d09-0d43-9b3b2184ac00/public",
    alt: "Rebel Carmagnola - Laser e gestione estate con approccio professionale (nuova variante)",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b01b968e-9ca9-4bd9-62eb-41cfea80bb00/public",
    alt: "Rebel Carmagnola - Percorso laser impostato con continuita in inverno (nuova variante)",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
    alt: "Rebel Carmagnola - Pulizia viso professionale",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b0f43f31-21d2-4834-4ddc-36a50a511200/public",
    alt: "Rebel Carmagnola - Gestione peli incarniti e comfort della pelle (nuova variante)",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public",
    alt: "Rebel Carmagnola - Scrub corpo professionale",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/965f95e4-c556-424d-abca-77a5c7b1ae00/public",
    alt: "Rebel Carmagnola - Massaggio rilassante",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public",
    alt: "Rebel Carmagnola - Manicure semipermanente",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/5ed3dbec-4e69-449d-548c-d9d28b4fb100/public",
    alt: "Rebel Carmagnola - Laminazione ciglia e sopracciglia",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/ba59e49d-5727-4c34-4b78-5ed055fb6f00/public",
    alt: "Rebel Carmagnola - Pressoterapia in cabina",
  },
  {
    src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/dd34e324-2953-4a98-18ee-ef36b7c59e00/public",
    alt: "Rebel Carmagnola - Pedicure professionale (nuova variante)",
  },
];



