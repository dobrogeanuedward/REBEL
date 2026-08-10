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
    descriptor: "Laser a diodo",
    technicalDescriptor: "Laser a diodo multi-lunghezza d’onda",
    headline: "Quattro lunghezze d’onda nello stesso laser.",
    summary: "Il laser THORY utilizzato nel percorso Libertà, con parametri regolabili e raffreddamento a contatto in zaffiro.",
    imageSlot: "home.hero.laser.desktop",
    imageAlt: "Professionista REBEL durante una seduta con Lumina X1 Pro",
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
    descriptor: "Laser e analisi della pelle",
    technicalDescriptor: "Laser, trattamento con luce (fotobiostimolazione) e analisi della pelle",
    headline: "Tre funzioni, utilizzate quando servono.",
    summary: "Epilazione, analisi della pelle e trattamento con luce (fotobiostimolazione) sono riuniti nello stesso apparecchio. Utilizziamo solo le funzioni utili al trattamento.",
    imageSlot: "technologies.thory.luminaX3",
    imageAlt: "Apparecchiatura THORY Lumina X3 su carrello con display e manipoli",
    imageWidth: 1055,
    imageHeight: 1491,
    highlights: [
      { value: "3 tecnologie", label: "Epilazione, trattamento con luce e analisi" },
      { value: "Smart + Expert", label: "Due modalità di utilizzo" },
      { value: "3 funzioni", label: "Riunite nello stesso apparecchio" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }, { label: "Structure", href: "/percorsi/structure" }],
    note: "Dopo aver osservato la pelle scegliamo la funzione utile e ti spieghiamo come verrà utilizzata.",
    reviewLevel: "approved",
  },
  {
    slug: "lumina-k3",
    name: "Lumina K3",
    descriptor: "Sistema compatto multifunzione",
    technicalDescriptor: "Sistema laser compatto multifunzione",
    headline: "Tre funzioni, scelte dopo aver osservato la pelle.",
    summary: "Epilazione, trattamento con luce (fotobiostimolazione) e analisi della pelle sono riuniti in un sistema compatto. Scegliamo la funzione utile dopo la valutazione.",
    imageSlot: "technologies.thory.luminaK3",
    imageAlt: "Apparecchiatura Lumina K3 THORY da banco con display e due manipoli",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "3 funzioni", label: "Epilazione, trattamento con luce e analisi" },
      { value: "Analisi della pelle", label: "Valutazione prima della scelta" },
      { value: "Parametri regolabili", label: "Impostati dopo la valutazione" },
    ],
    journeyLinks: [{ label: "Libertà", href: "/percorsi/liberta" }],
    note: "Dopo aver osservato la pelle scegliamo la funzione utile alla seduta.",
    reviewLevel: "approved",
  },
  {
    slug: "aura-q2",
    name: "Aura Q2",
    descriptor: "Due modalità al plasma",
    technicalDescriptor: "Plasma Flash e Plasma a Ozono",
    headline: "Due modalità al plasma, scelte in base alla pelle.",
    summary: "Aura Q2 offre due modalità: Plasma Flash e Plasma a Ozono. Dopo aver osservato la pelle scegliamo quella più adatta e ti spieghiamo perché.",
    imageSlot: "technologies.thory.auraQ2",
    imageAlt: "Apparecchiatura THORY Aura Q2 su carrello con display e due manipoli",
    imageWidth: 1122,
    imageHeight: 1402,
    highlights: [
      { value: "2 in 1", label: "Plasma Flash e Plasma a Ozono" },
      { value: "2 manipoli", label: "Uno dedicato a ogni modalità" },
      { value: "Valutazione", label: "Modalità scelta dopo aver osservato la pelle" },
    ],
    journeyLinks: [{ label: "Structure", href: "/percorsi/structure" }],
    note: "La modalità viene scelta dopo la valutazione, in base alla pelle e al trattamento previsto.",
    reviewLevel: "descriptive-only",
  },
  {
    slug: "cryoshape-x2",
    name: "CryoShape X2",
    descriptor: "Criolipolisi a doppio canale",
    technicalDescriptor: "Sistema di criolipolisi a doppio canale",
    headline: "Due applicatori per aree differenti.",
    summary: "Nel percorso Forma, due applicatori possono lavorare su aree diverse nella stessa seduta.",
    imageSlot: "technologies.thory.cryoShapeX2",
    imageAlt: "Apparecchiatura CryoShape X2 THORY con due manipoli e display",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "2 canali", label: "Gestione indipendente o sincronizzata" },
      { value: "6 applicatori", label: "Forme dedicate ad aree differenti" },
      { value: "360°", label: "Distribuzione del raffreddamento sull’applicatore" },
    ],
    journeyLinks: [{ label: "Forma", href: "/percorsi/forma" }],
    note: "Area e applicatore vengono scelti dopo la valutazione iniziale.",
    reviewLevel: "approved",
  },
  {
    slug: "infrapress-x2",
    name: "InfraPress X2",
    descriptor: "Pressomassaggio e infrarosso",
    technicalDescriptor: "Compressione pneumatica e infrarosso lontano",
    headline: "Pressione sequenziale. Calore integrato.",
    summary: "La pressione avanza in sequenza lungo la zona trattata e può essere abbinata al calore a infrarossi. Regoliamo zone e intensità in base alle tue sensazioni.",
    imageSlot: "technologies.thory.infraPressX2",
    imageAlt: "Unità di controllo THORY InfraPress X2 con display",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "10 canali", label: "Gestione pneumatica sequenziale" },
      { value: "20 camere", label: "Distribuite sugli accessori corpo" },
      { value: "5 zone IR", label: "Controllabili separatamente" },
    ],
    journeyLinks: [{ label: "Forma", href: "/percorsi/forma" }],
    note: "Zone, pressione e sequenza vengono adattate alle sensazioni durante la seduta.",
    reviewLevel: "approved",
  },
  {
    slug: "tecar-448-revolution",
    name: "Tecar 448Revolution",
    descriptor: "Tecnologia a 448 kHz per viso e corpo",
    technicalDescriptor: "Sistema di diatermia CET e RET a 448 kHz",
    headline: "Due modalità a 448 kHz, scelte in base alla zona.",
    summary: "Le modalità capacitiva (CET) e resistiva (RET) lavorano a 448 kHz. Dopo la valutazione scegliamo quella adatta alla zona e al trattamento previsto.",
    imageSlot: "technologies.thory.tecar448",
    imageAlt: "Tecar 448Revolution THORY con display ed elettrodi CET e RET",
    imageWidth: 1024,
    imageHeight: 1024,
    highlights: [
      { value: "448 kHz", label: "Frequenza di lavoro" },
      { value: "CET + RET", label: "Due modalità" },
      { value: "8 elettrodi", label: "Applicatori dedicati alle due modalità" },
    ],
    journeyLinks: [{ label: "Structure", href: "/percorsi/structure" }, { label: "Forma", href: "/percorsi/forma" }],
    note: "Dopo la valutazione scegliamo la modalità adatta alla zona e al trattamento previsto.",
    reviewLevel: "approved",
  },
];

export const luminaX1Pro = thoryTechnologies[0];
