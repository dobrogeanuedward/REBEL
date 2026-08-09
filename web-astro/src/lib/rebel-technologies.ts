export type RebelTechnology = {
  slug: string;
  name: string;
  descriptor: string;
  technicalDescriptor: string;
  headline: string;
  summary: string;
  imageSlot: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  highlights: Array<{ value: string; label: string }>;
  journeyLinks: Array<{ label: string; href: string }>;
  note: string;
  reviewLevel: "approved" | "descriptive-only";
};

/**
 * Client-facing extract from the approved THORY main branch at commit
 * 4ff59a04537f0ff7978de11a19a3c10eb7a450d3 (2026-08-09).
 * Keep blocked/pending performance claims out of this public inventory.
 */
export const thoryTechnologies: RebelTechnology[] = [
  {
    slug: "lumina-x1-pro",
    name: "Lumina X1 Pro",
    descriptor: "Pro 1 in 1",
    technicalDescriptor: "Laser a diodo multi-lunghezza d’onda",
    headline: "Una missione. Quattro lunghezze d’onda.",
    summary: "La piattaforma THORY scelta per il percorso Libertà: parametri configurabili e raffreddamento a contatto in zaffiro documentato nel manipolo.",
    imageSlot: "home.hero.laser.desktop",
    imageAlt: "Professionista REBEL durante una seduta con Lumina X1 Pro e comfort ICE Polar",
    imageWidth: 1536,
    imageHeight: 1024,
    highlights: [
      { value: "755 · 808 · 940 · 1064 nm", label: "Quattro lunghezze d’onda documentate" },
      { value: "1–10 Hz", label: "Frequenza regolabile" },
      { value: "Zaffiro", label: "Raffreddamento a contatto" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }],
    note: "Area, fototipo, caratteristiche del pelo, parametri e calendario vengono definiti durante la valutazione.",
    reviewLevel: "approved",
  },
  {
    slug: "lumina-x3",
    name: "Lumina X3",
    descriptor: "Expert 3 in 1",
    technicalDescriptor: "Laser, fotobiostimolazione e analisi intelligente",
    headline: "Tre funzioni. Una sola regia.",
    summary: "Epilazione, fotobiostimolazione e analisi della pelle possono essere coordinate nello stesso incontro, quando il percorso richiede più di una direzione.",
    imageSlot: "technologies.thory.luminaX3",
    imageAlt: "Piattaforma THORY Lumina X3 su carrello con display e manipoli",
    imageWidth: 1055,
    imageHeight: 1491,
    highlights: [
      { value: "3 tecnologie", label: "Epilazione, fotobiostimolazione e analisi" },
      { value: "Smart + Expert", label: "Due modalità di gestione" },
      { value: "Percorso coordinato", label: "Lettura e funzioni nello stesso incontro" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }, { label: "Structure", href: "/percorsi/structure" }],
    note: "La valutazione chiarisce quale funzione può accompagnare la tua priorità e in quale momento del percorso.",
    reviewLevel: "approved",
  },
  {
    slug: "lumina-k3",
    name: "Lumina K3",
    descriptor: "Kompact 3 in 1",
    technicalDescriptor: "Smart compact laser platform",
    headline: "Tre funzioni, scelte a partire dalla tua pelle.",
    summary: "Epilazione, fotobiostimolazione e analisi smart possono essere coordinate quando la tua priorità richiede più di un gesto.",
    imageSlot: "technologies.thory.luminaK3",
    imageAlt: "Lumina K3 THORY da banco con display touch e due manipoli",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "3 funzioni", label: "Epilazione, fotobiostimolazione e analisi" },
      { value: "Analisi smart", label: "La pelle viene letta prima della scelta" },
      { value: "Controllo", label: "Parametri impostati dopo la valutazione" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }],
    note: "La funzione utilizzata viene scelta dopo aver osservato pelle, zona e priorità.",
    reviewLevel: "approved",
  },
  {
    slug: "aura-q2",
    name: "Aura Q2",
    descriptor: "Plasma 2 in 1",
    technicalDescriptor: "Plasma Flash e Plasma a Ozono",
    headline: "Due modalità al plasma. Una piattaforma.",
    summary: "Plasma Flash e Plasma a Ozono offrono due modalità diverse. La professionista sceglie quella coerente con la priorità della pelle e con la fase del percorso.",
    imageSlot: "technologies.thory.auraQ2",
    imageAlt: "Piattaforma THORY Aura Q2 su carrello con display e due manipoli",
    imageWidth: 1122,
    imageHeight: 1402,
    highlights: [
      { value: "2 in 1", label: "Plasma Flash e Plasma a Ozono" },
      { value: "2 manipoli", label: "Uno dedicato a ogni modalità" },
      { value: "Valutazione", label: "Impiego definito prima della proposta" },
    ],
    journeyLinks: [{ label: "Structure", href: "/percorsi/structure" }],
    note: "Durante la valutazione ti spieghiamo quale modalità può avere senso per la tua pelle e perché.",
    reviewLevel: "descriptive-only",
  },
  {
    slug: "cryoshape-x2",
    name: "CryoShape X2",
    descriptor: "Dual Cryo System",
    technicalDescriptor: "Sistema di criolipolisi a doppio canale",
    headline: "Aree diverse, nella stessa seduta.",
    summary: "Due canali e applicatori intercambiabili permettono di costruire la seduta su aree differenti, all’interno di un programma corpo Forma.",
    imageSlot: "technologies.thory.cryoShapeX2",
    imageAlt: "CryoShape X2 THORY con due manipoli e display touch",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "2 canali", label: "Gestione indipendente o sincronizzata" },
      { value: "6 applicatori", label: "Forme dedicate ad aree differenti" },
      { value: "360°", label: "Distribuzione del raffreddamento sull’applicatore" },
    ],
    journeyLinks: [{ label: "Forma", href: "/percorsi/forma" }],
    note: "Area e applicatore vengono scelti dopo la valutazione dei tessuti e della priorità corpo.",
    reviewLevel: "approved",
  },
  {
    slug: "infrapress-x2",
    name: "InfraPress X2",
    descriptor: "Pressure + Infrared 2 in 1",
    technicalDescriptor: "Compressione pneumatica e infrarosso lontano",
    headline: "Pressione sequenziale. Calore integrato.",
    summary: "Compressione pneumatica sequenziale e infrarosso possono entrare nello stesso programma corpo, con zone e intensità costruite sulla tua priorità.",
    imageSlot: "technologies.thory.infraPressX2",
    imageAlt: "Unità di controllo THORY InfraPress X2 con display touch",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "10 canali", label: "Gestione pneumatica sequenziale" },
      { value: "20 camere", label: "Distribuite sugli accessori corpo" },
      { value: "5 zone IR", label: "Controllabili separatamente" },
    ],
    journeyLinks: [{ label: "Forma", href: "/percorsi/forma" }],
    note: "Zone, pressione e sequenza vengono adattate alle sensazioni e alla risposta osservata.",
    reviewLevel: "approved",
  },
  {
    slug: "tecar-448-revolution",
    name: "Tecar 448Revolution",
    descriptor: "CET + RET 2 in 1",
    technicalDescriptor: "Sistema di diatermia CET e RET a 448 kHz",
    headline: "448 kHz. Due modalità. Più controllo.",
    summary: "Le modalità capacitiva e resistiva a 448 kHz offrono due modi di lavorare sui tessuti. La scelta dipende dall’obiettivo e dal momento del percorso.",
    imageSlot: "technologies.thory.tecar448",
    imageAlt: "Tecar 448Revolution THORY con display ed elettrodi CET e RET",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "448 kHz", label: "Frequenza operativa documentata" },
      { value: "CET + RET", label: "Due modalità di trasferimento energetico" },
      { value: "8 elettrodi", label: "Applicatori dedicati alle due modalità" },
    ],
    journeyLinks: [{ label: "Structure", href: "/percorsi/structure" }, { label: "Forma", href: "/percorsi/forma" }],
    note: "La modalità viene scelta in relazione a zona, tessuti e obiettivo condiviso.",
    reviewLevel: "approved",
  },
];

export const luminaX1Pro = thoryTechnologies[0];
