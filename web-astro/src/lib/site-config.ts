export const siteConfig = {
  name: "Rebel Estetica Epigenetica",
  shortName: "Rebel",
  tagline: "Centro estetico a Carmagnola.",
  locale: "it-IT",
  regionCode: "IT-TO",
  lastUpdated: "2026-08-09",
  description:
    "Centro estetico a Carmagnola, in Viale Barbaroux 20: epilazione laser Ice Polar, pulizia viso, manicure, ceretta, massaggi e percorsi viso/corpo. Valutazione REBEL di 30–40 minuti.",
  siteUrl: "https://www.rebelepigenetica.it",
  assets: {
    logoLight:
      "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8e57610c-3a93-48fa-e535-b864967a4e00/public",
    heroStorefront: "https://epikey.rebelepigenetica.it/assets/rebel/vetrina2.webp",
    ogImage: "https://epikey.rebelepigenetica.it/assets/rebel/vetrina2.webp",
  },
  phoneDisplay: "+39 351 691 9416",
  phoneRaw: "+393516919416",
  email: "inforebel33@gmail.com",
  address: {
    streetAddress: "Viale Barbaroux 20",
    locality: "Carmagnola",
    postalCode: "10022",
    region: "TO",
    country: "IT",
  },
  geo: {
    latitude: 44.849,
    longitude: 7.72,
  },
  areasServed: [
    "Carmagnola", "Carignano", "Racconigi", "Poirino", "Villastellone",
    "Pancalieri", "Sommariva del Bosco", "Torino Sud", "Moncalieri",
    "Nichelino", "Vinovo", "La Loggia", "Trofarello", "Chieri",
    "Orbassano", "Alba", "Bra", "Canale", "Savigliano", "Fossano", "Saluzzo",
  ],
  social: {
    instagram: "https://www.instagram.com/rebelesteticaepigenetica/",
    tiktok: "https://www.tiktok.com/@rebelesteticaepigenetica",
    whatsapp: "https://wa.me/393516919416",
    maps: "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
    googleCard: "https://share.google/uIgDtrcX56skSZQrb",
    treatwell: "https://www.treatwell.it/salone/rebel-estetica-epigenetica/",
  },
  // Real opening hours (Google Business Profile aligned).
  // Closed on Sun and Mon. Schema-org day-prefix codes are used here.
  openingHours: [
    "Tu 09:00-19:00",
    "We 14:00-19:00",
    "Th 09:00-19:00",
    "Fr 09:00-19:00",
    "Sa 09:00-14:00",
  ],
  // Brands and technologies we work with in cabin. Used in JSON-LD `brand[]`,
  // in the homepage Brand strip and in the footer trust line. Order matters:
  // it is the order shown to users and search engines.
  brands: [
    {
      name: "Thory",
      kind: "Tecnologia laser",
      url: "https://www.thory-tech.com/",
      blurb:
        "THORY Lumina X1 Pro integra quattro lunghezze d’onda e raffreddamento a contatto in zaffiro Ice Point Cooling. Nei percorsi REBEL il comfort ICE Polar accompagna la seduta come elemento distinto.",
    },
    {
      name: "Marbellas",
      kind: "Linea epigenetica viso",
      url: undefined,
      blurb:
        "Linea cosmetica di nuova generazione con attivi epigenetici: la usiamo nei protocolli viso più avanzati per qualità di pelle, tono e luminosità.",
    },
    {
      name: "Eberlin",
      kind: "Biocosmetica professionale",
      url: undefined,
      blurb:
        "Brand spagnolo di riferimento nella biocosmetica: linee Firmezza, Calming, Gold e attivi biotecnologici come fattori di crescita e RetiLAB.",
    },
    {
      name: "RBL Nails",
      kind: "Smalti e gel cabina",
      url: undefined,
      blurb:
        "Gamma colori e tonalità sviluppata per cabina: tenuta, finiture e shade dalla classica alla stagionale.",
    },
    {
      name: "Thory Academy",
      kind: "Formazione professionale",
      url: "https://academy.thory-tech.com/",
      blurb:
        "Il team segue un percorso di formazione continua Thory Academy, dedicato all'uso consapevole delle tecnologie e all'aggiornamento professionale.",
    },
  ],
  // Sister sites in the Thory / DOGO network. Used in the footer.
  network: [
    { label: "thory-tech.com", url: "https://www.thory-tech.com/", note: "Tecnologia laser" },
    { label: "academy.thory-tech.com", url: "https://academy.thory-tech.com/", note: "Formazione" },
  ],
  // Branding & web by DOGO Studio (footer credit).
  credit: {
    label: "Powered by DOGO",
    url: "https://www.dogostudio.it/",
  },
} as const;

export const localSeoKeywords = [
  // Money keyword #1 — "centro estetico Carmagnola"
  "centro estetico Carmagnola",
  "centro estetico Carmagnola TO",
  "centro estetico vicino a me",
  "centro estetico vicino a me Carmagnola",
  "estetista Carmagnola",
  "estetista vicino a me",
  "estetista Carmagnola centro",
  "centro estetico aperto Carmagnola",
  "miglior centro estetico Carmagnola",

  // Money keyword #2 — "epilazione laser vicino a me"
  "epilazione laser Carmagnola",
  "epilazione laser vicino a me",
  "epilazione laser Carmagnola prezzi",
  "laser Carmagnola",
  "laser vicino a me",
  "laser diodo Carmagnola",
  "Ice Polar Carmagnola",
  "epilazione definitiva Carmagnola",
  "epilazione progressiva Carmagnola",
  "depilazione laser Carmagnola",

  // Money keyword #3 — "manicure semipermanente"
  "manicure semipermanente Carmagnola",
  "semipermanente Carmagnola",
  "semipermanente vicino a me",
  "manicure Carmagnola",
  "smalto semipermanente Carmagnola",
  "ricostruzione unghie Carmagnola",
  "nail art Carmagnola",
  "RBL Nails Carmagnola",

  // Money keyword #4 — "laminazione ciglia / sopracciglia"
  "laminazione ciglia Carmagnola",
  "laminazione sopracciglia Carmagnola",
  "laminazione ciglia vicino a me",
  "laminazione sopracciglia vicino a me",
  "lash lift Carmagnola",
  "brow lamination Carmagnola",
  "ciglia laminate Carmagnola",
  "sopracciglia laminate Carmagnola",

  // Generic local intent (catches "near me" + service combinations)
  "estetica avanzata Carmagnola",
  "estetica epigenetica Carmagnola",
  "centro epigenetico Carmagnola",
  "trattamenti viso Carmagnola",
  "trattamenti corpo Carmagnola",
  "pulizia viso Carmagnola",
  "ceretta Carmagnola",
  "massaggio Carmagnola",
  "centro estetico Carmagnola Viale Barbaroux",
];

export const brandSeoKeywords = [
  "Rebel",
  "Rebel Carmagnola",
  "Rebel Estetica Epigenetica",
  "Rebel centro estetico Carmagnola",
  "Rebel Carmagnola recensioni",
  "Rebel telefono",
  "centro estetico Rebel",
  "Rebel epilazione laser",
  "epilazione laser Rebel",
  "Rebel trattamenti viso corpo",
];
