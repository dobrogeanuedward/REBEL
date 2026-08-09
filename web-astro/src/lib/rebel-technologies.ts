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
    imageSlot: "technologies.thory.luminaX1Pro",
    imageAlt: "Lumina X1 Pro THORY in vista frontale a tre quarti con display e manipolo",
    imageWidth: 1280,
    imageHeight: 725,
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
    summary: "Piattaforma integrata THORY che riunisce epilazione, fotobiostimolazione e analisi smart nello stesso workflow professionale.",
    imageSlot: "technologies.thory.luminaX3",
    imageAlt: "Piattaforma THORY Lumina X3 su carrello con display e manipoli",
    imageWidth: 1055,
    imageHeight: 1491,
    highlights: [
      { value: "3 tecnologie", label: "Epilazione, fotobiostimolazione e analisi" },
      { value: "Smart + Expert", label: "Due modalità di gestione" },
      { value: "Workflow cliente", label: "Dati e percorso nello stesso flusso" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }, { label: "Structure", href: "/percorsi/structure" }],
    note: "La configurazione pertinente viene confermata prima di inserirla in un percorso REBEL.",
    reviewLevel: "approved",
  },
  {
    slug: "lumina-k3",
    name: "Lumina K3",
    descriptor: "Kompact 3 in 1",
    technicalDescriptor: "Smart compact laser platform",
    headline: "La logica Lumina. In formato Kompact.",
    summary: "Una piattaforma THORY compatta che organizza epilazione, fotobiostimolazione e analisi smart in un flusso digitale.",
    imageSlot: "technologies.thory.luminaK3",
    imageAlt: "Lumina K3 THORY da banco con display touch e due manipoli",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "3 funzioni", label: "Epilazione, fotobiostimolazione e analisi" },
      { value: "Kompact", label: "Presenza più contenuta in cabina" },
      { value: "Controllo", label: "Parametri accessibili nel workflow" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }],
    note: "Configurazione e impiego vengono definiti prima di inserire la piattaforma nel percorso.",
    reviewLevel: "approved",
  },
  {
    slug: "aura-q2",
    name: "Aura Q2",
    descriptor: "Plasma 2 in 1",
    technicalDescriptor: "Plasma Flash e Plasma a Ozono",
    headline: "Due modalità al plasma. Una piattaforma.",
    summary: "Scheda descrittiva del portfolio THORY. Pertinenza, modalità e destinazione del trattamento vengono verificate prima di qualunque proposta REBEL.",
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
    note: "Modalità e impiego vengono illustrati soltanto dopo aver verificato la pertinenza nel percorso.",
    reviewLevel: "descriptive-only",
  },
  {
    slug: "cryoshape-x2",
    name: "CryoShape X2",
    descriptor: "Dual Cryo System",
    technicalDescriptor: "Sistema di criolipolisi a doppio canale",
    headline: "Due canali. Un solo workflow.",
    summary: "Sistema THORY a doppio canale con applicatori intercambiabili e configurazione dell’aspirazione per aree differenti.",
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
    note: "Area, applicatore e configurazione dipendono dalla valutazione professionale.",
    reviewLevel: "approved",
  },
  {
    slug: "infrapress-x2",
    name: "InfraPress X2",
    descriptor: "Pressure + Infrared 2 in 1",
    technicalDescriptor: "Compressione pneumatica e infrarosso lontano",
    headline: "Pressione sequenziale. Calore integrato.",
    summary: "Sistema THORY che riunisce compressione pneumatica sequenziale e zone a infrarosso configurabili.",
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
    note: "Impostazioni e sequenza vengono definite dalla professionista in relazione alla priorità del programma.",
    reviewLevel: "approved",
  },
  {
    slug: "tecar-448-revolution",
    name: "Tecar 448Revolution",
    descriptor: "CET + RET 2 in 1",
    technicalDescriptor: "Sistema di diatermia CET e RET a 448 kHz",
    headline: "448 kHz. Due modalità. Più controllo.",
    summary: "Piattaforma THORY a 448 kHz con modalità capacitiva e resistiva, elettrodi dedicati e controllo touchscreen.",
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
    note: "Modalità, elettrodi e sequenza vengono selezionati nel perimetro del percorso estetico professionale.",
    reviewLevel: "approved",
  },
];

export const luminaX1Pro = thoryTechnologies[0];
