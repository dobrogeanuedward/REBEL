import { protocolPages } from "@/lib/protocol-pages";

export const editorialImageAssets = {
  pedicure: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/dd34e324-2953-4a98-18ee-ef36b7c59e00/public",
  linfodrenante: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/0d01138f-a507-4cb2-4c48-a70aa8b5ad00/public",
  laserInverno: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b01b968e-9ca9-4bd9-62eb-41cfea80bb00/public",
  pressoterapia: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/ba59e49d-5727-4c34-4b78-5ed055fb6f00/public",
  peliIncarniti: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b0f43f31-21d2-4834-4ddc-36a50a511200/public",
  puliziaViso: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
  laserViso: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public",
  laserCorpo: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
  laserEstate: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/02c98ad7-1a83-4d09-0d43-9b3b2184ac00/public",
  laserSoleGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/f8320c32-3b0a-4496-4564-e3ebf421b500/public",
  laserAscelleGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2db75699-255f-4361-1071-45f4378af100/public",
  laserInguineGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/3c13dc18-0615-4e12-1da0-254ed590c800/public",
  laserGambeGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/d31436bd-c15a-47b4-6ce8-1f050a376500/public",
  laserPalestraGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2e6108a2-6286-4732-fb18-d54b51500000/public",
  laserInvernoGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e2911bf3-8fce-4bd5-4a04-112386f17b00/public",
  scrubCorpo: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public",
  manicureSemipermanente: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public",
  laminazione: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/5ed3dbec-4e69-449d-548c-d9d28b4fb100/public",
  massaggioRilassante: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/965f95e4-c556-424d-abca-77a5c7b1ae00/public",
} as const;

export type ServicePage = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceHint: string;
  category: "estetica-classica" | "laser";
  benefits: string[];
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
  relatedCompetenceSlugs: string[];
  // Curated links to protocol detail pages (advanced next step).
  relatedProtocolSlugs?: string[];
  editorialSections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  sourceLinks?: Array<{
    label: string;
    url: string;
  }>;
  heroImage?: {
    src: string;
    alt: string;
  };
};

export type CompetencePage = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  localAngle: string;
  intent: "informational" | "commercial";
  benefits: string[];
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
  relatedServiceSlugs: string[];
  // Curated guide-to-guide links (fallbacks to auto-related if missing).
  relatedCompetenceSlugs?: string[];
  // Curated links to protocol detail pages (advanced next step).
  relatedProtocolSlugs?: string[];
  heroImage?: {
    src: string;
    alt: string;
  };
  editorialSections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  sourceLinks?: Array<{
    label: string;
    url: string;
  }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "pulizia-viso-carmagnola",
    name: "Pulizia viso a Carmagnola",
    shortDescription:
      "Pulizia viso delicata per rimuovere le impurità superficiali e lasciare la pelle più fresca, uniforme e luminosa.",
    longDescription:
      "La seduta inizia con l’osservazione della pelle e comprende detersione, esfoliazione delicata, pulizia mirata e una fase finale lenitiva. Adattiamo prodotti e intensità alle condizioni della pelle, sia come trattamento singolo sia come preparazione a un percorso viso.",
    priceHint: "da 49 €",
    category: "estetica-classica",
    benefits: [
      "Pelle più fresca, pulita e uniforme",
      "Grana più levigata e aspetto più luminoso",
      "Prodotti e intensità scelti in base alla sensibilità della pelle",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare una pulizia viso?",
        a: "In molti casi si lascia passare da quattro a sei settimane, ma la frequenza dipende dalla pelle, dalla stagione e dalla routine a casa. Dopo la prima seduta possiamo indicarti una cadenza adatta alle tue esigenze.",
      },
      {
        q: "Non so da cosa partire: la pulizia viso ha senso?",
        a: "Può essere un buon punto di partenza se desideri rimuovere le impurità superficiali e capire di che cosa ha bisogno la pelle. Dopo la seduta ti spieghiamo se può essere utile proseguire con altri trattamenti.",
      },
      {
        q: "Dopo la pulizia viso avrò rossore?",
        a: "Può succedere un lieve rossore, soprattutto se la pelle è reattiva. Lavoriamo in modo graduale e chiudiamo sempre con una fase lenitiva per lasciare la pelle il più tranquilla possibile.",
      },
      {
        q: "Cosa conviene fare (e non fare) dopo la seduta?",
        a: "Consigliamo detersione delicata, idratazione e protezione solare. Nei giorni immediatamente successivi è preferibile evitare prodotti esfolianti o potenzialmente irritanti.",
      },
    ],
    keywords: [
      "pulizia viso Carmagnola",
      "pulizia del viso Carmagnola",
      "trattamento viso pelle impura Carmagnola",
      "pulizia viso pelle sensibile Carmagnola",
      "estetista viso Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.puliziaViso,
      alt: "Pulizia viso professionale in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pulizia-viso-carmagnola-frequenza-benefici",
      "trattamenti-viso-carmagnola",
      "estetica-avanzata-carmagnola",
      "beauty-routine-carmagnola",
    ],
    relatedProtocolSlugs: ["catalysis-ritual", "rebel-lift-protocol", "collagen-code"],
    editorialSections: [
      {
        heading: "Che cosa comprende la pulizia viso",
        paragraphs: [
          "La pulizia viso rimuove le impurità superficiali e può lasciare la pelle più fresca, uniforme e luminosa.",
          "La seduta comprende osservazione iniziale, detersione, esfoliazione delicata, pulizia mirata e una fase finale riequilibrante.",
        ],
      },
      {
        heading: "Quando può essere utile",
        paragraphs: [
          "Può essere indicata quando la pelle appare opaca, irregolare o presenta impurità superficiali. Può anche preparare il viso a trattamenti successivi.",
          "Se la pelle è particolarmente sensibile, adattiamo prodotti, tempi e intensità per rispettarne il comfort.",
        ],
      },
      {
        heading: "Frequenza e cura a casa",
        paragraphs: [
          "Una routine delicata a casa aiuta a mantenere la pelle confortevole tra un appuntamento e l’altro.",
          "Dopo la prima pulizia viso possiamo indicarti quando ripetere il trattamento in base alla risposta della pelle.",
        ],
      },
      {
        heading: "Come primo appuntamento",
        paragraphs: [
          "La pulizia viso può essere scelta come trattamento singolo o come primo passo per osservare la pelle e definire le esigenze principali.",
          "Al termine della seduta ti spieghiamo se è sufficiente una cura periodica o se può essere utile valutare un percorso dedicato.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Face washing 101",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101",
      },
      {
        label: "AAD - How to safely exfoliate at home",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "scrub-corpo-carmagnola",
    name: "Scrub corpo a Carmagnola",
    shortDescription:
      "Scrub corpo con esfoliazione controllata per lasciare la pelle più liscia, uniforme e morbida al tatto.",
    longDescription:
      "Lo scrub corpo è un trattamento esfoliante che rimuove le cellule superficiali in eccesso. Scegliamo prodotto, pressione e durata in base alla zona e alla sensibilità della pelle, poi completiamo la seduta con una fase idratante o lenitiva.",
    priceHint: "da 49 €",
    category: "estetica-classica",
    benefits: [
      "Pelle più morbida, uniforme e levigata al tatto",
      "Esfoliazione adattata alle diverse zone del corpo",
      "Preparazione della pelle ai prodotti idratanti applicati dopo la seduta",
    ],
    faqs: [
      {
        q: "Lo scrub è adatto tutto l'anno?",
        a: "Può essere eseguito durante tutto l’anno, adattando intensità e frequenza alla stagione, all’esposizione solare e alla sensibilità della pelle. Dopo l’esfoliazione è importante proteggere dal sole le zone esposte.",
      },
      {
        q: "Ogni quanto è consigliato?",
        a: "In molti casi ogni tre-cinque settimane, ma la frequenza varia in base alla stagione, alla sensibilità e all’obiettivo estetico.",
      },
      {
        q: "Può aiutare con pelle ruvida e piccoli ispessimenti?",
        a: "Può levigare la ruvidità superficiale. Durante la seduta valutiamo anche l’idratazione della pelle e ti diamo indicazioni per la cura a casa.",
      },
      {
        q: "Dopo lo scrub corpo posso fare palestra o sauna?",
        a: "Dipende dalla sensibilità della pelle e dalle zone trattate. Nelle prime ore è generalmente preferibile evitare calore eccessivo e sfregamenti intensi; al termine della seduta ti diamo indicazioni specifiche.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola",
      "esfoliazione corpo Carmagnola",
      "trattamento corpo levigante Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.scrubCorpo,
      alt: "Scrub corpo professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
    ],
    editorialSections: [
      {
        heading: "Come agisce lo scrub corpo",
        paragraphs: [
          "Lo scrub agisce sulla superficie della pelle e rimuove le cellule in eccesso, lasciandola più liscia e uniforme.",
          "Prodotto, pressione e durata cambiano in base alla zona e alla sensibilità individuale.",
        ],
      },
      {
        heading: "Zone, pressione e sensibilità",
        paragraphs: [
          "Le zone del corpo hanno caratteristiche diverse: alcune tollerano un’esfoliazione più intensa, altre richiedono maggiore delicatezza. Adattiamo quindi pressione e manovre durante la seduta.",
          "Quando la pelle appare secca o ruvida, completiamo il trattamento con una fase finale idratante o lenitiva.",
        ],
      },
      {
        heading: "Quanto spesso ripetere lo scrub",
        paragraphs: [
          "La frequenza dipende dalla sensibilità della pelle, dalla stagione e dai prodotti usati a casa.",
          "Dopo la prima seduta possiamo suggerirti una cadenza adatta alle zone trattate.",
        ],
      },
      {
        heading: "Dopo la seduta",
        paragraphs: [
          "Idratazione e protezione solare sulle zone esposte aiutano a prendersi cura della pelle appena esfoliata.",
          "Nelle ore successive è preferibile evitare sfregamenti intensi e prodotti potenzialmente irritanti.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - How to safely exfoliate at home",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "massaggio-linfodrenante-carmagnola",
    name: "Massaggio linfodrenante a Carmagnola",
    shortDescription:
      "Massaggio linfodrenante manuale e delicato, pensato per chi avverte pesantezza e desidera una sensazione di maggiore leggerezza.",
    longDescription:
      "Il linfodrenante è un massaggio manuale delicato, scelto soprattutto quando avverti pesantezza e desideri una sensazione di maggiore leggerezza. Durante la seduta adattiamo zone, pressione e manualità al tuo comfort; in presenza di condizioni particolari chiediamo prima un parere medico.",
    priceHint: "da 69 €",
    category: "estetica-classica",
    benefits: [
      "Può attenuare la sensazione di pesantezza",
      "Manualità delicate adattate alle zone trattate",
      "Possibilità di inserirlo in un programma di trattamenti corpo",
    ],
    faqs: [
      {
        q: "Il linfodrenante è doloroso?",
        a: "Le manualità sono generalmente delicate e non dovrebbero provocare dolore. Se avverti fastidio, adattiamo subito pressione e movimenti.",
      },
      {
        q: "Quante sedute possono essere utili?",
        a: "Dipende dalla sensazione di partenza, dalle zone e dalla risposta individuale. Dopo la prima seduta possiamo valutare insieme se programmare altri appuntamenti.",
      },
      {
        q: "Su quali zone lavorate di solito?",
        a: "Spesso su gambe e addome, ma adattiamo sempre le zone in base a come ti senti e a che tipo di obiettivo hai in mente.",
      },
      {
        q: "C'è qualcosa da fare dopo la seduta?",
        a: "Al termine ti diamo indicazioni adatte alla tua giornata. In genere consigliamo di idratarsi e di evitare subito calore eccessivo o attività molto intensa se ci si sente affaticati.",
      },
      {
        q: "Se ho una condizione specifica, posso farlo comunque?",
        a: "Segnalacela prima di prenotare. In base alla situazione potremmo chiederti un parere medico prima di eseguire il trattamento.",
      },
    ],
    keywords: [
      "massaggio linfodrenante Carmagnola",
      "linfodrenaggio Carmagnola",
      "trattamento drenante Carmagnola",
      "gambe gonfie Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.linfodrenante,
      alt: "Massaggio linfodrenante professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "trattamenti-corpo-carmagnola",
      "linfodrenante-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Che cos'è il massaggio linfodrenante",
        paragraphs: [
          "Il linfodrenante utilizza manualità lente e delicate ed è scelto soprattutto da chi avverte una sensazione di pesantezza.",
          "Prima della seduta definiamo le zone da trattare e ti chiediamo di segnalarci eventuali condizioni per le quali sia necessario un parere medico.",
        ],
      },
      {
        heading: "Come si svolge una seduta da Rebel",
        paragraphs: [
          "Prima di iniziare ti chiediamo dove avverti pesantezza e in quali momenti della giornata. Poi scegliamo zone, pressione e manualità.",
          "Se una zona è più sensibile, riduciamo l’intensità o modifichiamo il trattamento per mantenere la seduta confortevole.",
        ],
      },
      {
        heading: "Seduta singola o più appuntamenti",
        paragraphs: [
          "Puoi scegliere una seduta singola oppure programmare più appuntamenti, in base alle tue esigenze e alla risposta individuale.",
          "Dopo il primo trattamento possiamo proporti una frequenza compatibile con il tuo tempo e con l’obiettivo concordato.",
        ],
      },
      {
        heading: "Tra una seduta e l'altra",
        paragraphs: [
          "Movimento regolare e idratazione possono accompagnare il programma, quando sono compatibili con le tue condizioni e le indicazioni del medico.",
          "Al termine di ogni seduta ti lasciamo soltanto le indicazioni pertinenti al trattamento svolto.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "massaggio-rilassante-carmagnola",
    name: "Massaggio rilassante a Carmagnola",
    shortDescription:
      "Massaggio distensivo dedicato a schiena, spalle e zona cervicale, con pressione adattata alle tue preferenze.",
    longDescription:
      "Il massaggio rilassante è una seduta di 50 minuti dedicata al riposo e al comfort. Lavoriamo soprattutto su schiena, spalle e zona cervicale con manualità graduali, scegliendo la pressione in base alla sensibilità e alle preferenze del momento.",
    priceHint: "59 € (50 min)",
    category: "estetica-classica",
    benefits: [
      "Cinquanta minuti dedicati al relax",
      "Sensazione di distensione su schiena, spalle e cervicale",
      "Pressione e manualità adattate a sensibilità e preferenze",
    ],
    faqs: [
      {
        q: "Il massaggio rilassante è forte o delicato?",
        a: "Dipende da come ti senti: lo impostiamo in modo graduale e lo adattiamo in base alle tue preferenze.",
      },
      {
        q: "Su quali zone lavorate di più?",
        a: "Soprattutto su schiena, spalle e cervicale, con attenzione al comfort.",
      },
      {
        q: "Devo fare qualcosa prima della seduta?",
        a: "Nulla di complicato: arriva con qualche minuto di anticipo e, se vuoi, dicci subito dove senti più tensione. Al resto pensiamo noi.",
      },
      {
        q: "Se ho un punto molto dolorante, posso fare comunque il massaggio?",
        a: "Avvisaci prima di prenotare. Se il dolore è intenso, recente o non ne conosci la causa, è opportuno chiedere un parere medico prima del massaggio.",
      },
    ],
    keywords: [
      "massaggio rilassante Carmagnola",
      "massaggio relax Carmagnola",
      "massaggio antistress Carmagnola",
      "massaggio schiena Carmagnola",
      "massaggio cervicale Carmagnola",
      "massaggio distensivo Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.massaggioRilassante,
      alt: "Massaggio rilassante professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "massaggio-rilassante-carmagnola-cervicale-stress",
    ],
    editorialSections: [
      {
        heading: "Un appuntamento dedicato al relax",
        paragraphs: [
          "La seduta dura 50 minuti e si concentra soprattutto su schiena, spalle e zona cervicale, dove molte persone avvertono una sensazione di affaticamento.",
          "Le manualità sono graduali e vengono adattate durante il trattamento in base al tuo comfort.",
        ],
      },
      {
        heading: "Come si svolge la seduta",
        paragraphs: [
          "Prima di iniziare ti chiediamo quali zone preferisci trattare e quale pressione trovi più confortevole.",
          "Durante il massaggio puoi segnalarci qualsiasi fastidio: modifichiamo subito pressione o manualità.",
        ],
      },
      {
        heading: "Seduta singola o appuntamenti periodici",
        paragraphs: [
          "Puoi prenotare il massaggio quando senti il bisogno di una pausa oppure scegliere appuntamenti periodici.",
          "La frequenza dipende dalle tue preferenze e dal tempo che desideri dedicare al relax.",
        ],
      },
      {
        heading: "Dopo il massaggio",
        paragraphs: [
          "Se puoi, concediti qualche minuto prima di riprendere le attività della giornata e presta attenzione a come ti senti.",
          "Se desideri inserire il massaggio nella tua routine di benessere, possiamo aiutarti a scegliere una cadenza semplice da mantenere.",
        ],
      },
    ],
  },
  {
    slug: "laminazione-ciglia-sopracciglia-carmagnola",
    name: "Laminazione ciglia e sopracciglia a Carmagnola",
    shortDescription:
      "Ciglia e sopracciglia più ordinate e definite, con effetto naturale e armonioso.",
    longDescription:
      "La laminazione disciplina ciglia e sopracciglia e ne valorizza forma e direzione. Prima del trattamento osserviamo lineamenti e caratteristiche del pelo, poi concordiamo un effetto naturale o più definito.",
    priceHint: "da 79 €",
    category: "estetica-classica",
    benefits: [
      "Effetto visivo di sguardo più aperto",
      "Ciglia e sopracciglia più ordinate e definite",
      "Forma concordata in base ai lineamenti e alle preferenze",
    ],
    faqs: [
      {
        q: "Quanto dura il risultato?",
        a: "In media tra 4 e 6 settimane, a seconda di abitudini e crescita naturale.",
      },
      {
        q: "Serve una cura a casa?",
        a: "Sì, semplice e rapida, con consigli dedicati.",
      },
      {
        q: "È adatta anche se ho ciglia/sopracciglia sottili?",
        a: "Dipende dalle caratteristiche e dalle condizioni di ciglia e sopracciglia. Le osserviamo prima del trattamento e ti spieghiamo quale effetto è possibile ottenere.",
      },
      {
        q: "È un effetto molto evidente?",
        a: "Dipende dall’effetto concordato. Possiamo mantenere un risultato molto naturale oppure scegliere una definizione più visibile, nel rispetto dei tuoi lineamenti.",
      },
      {
        q: "Cosa conviene evitare subito dopo?",
        a: "Ti spieghiamo cosa fare nelle prime ore per mantenere il risultato più stabile. In generale, meglio evitare sfregamenti e trattare la zona con delicatezza.",
      },
    ],
    keywords: [
      "laminazione ciglia Carmagnola",
      "laminazione sopracciglia Carmagnola",
      "laminazione ciglia vicino a me",
      "laminazione sopracciglia vicino a me",
      "lash lift Carmagnola",
      "brow lamination Carmagnola",
      "ciglia laminate Carmagnola",
      "sopracciglia laminate Carmagnola",
      "ciglia naturali Carmagnola",
      "sopracciglia ordinate Carmagnola",
      "trattamento sguardo Carmagnola",
      "laminazione ciglia prezzi Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laminazione,
      alt: "Laminazione ciglia e sopracciglia Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
    ],
    editorialSections: [
      {
        heading: "Che cosa cambia con la laminazione",
        paragraphs: [
          "La laminazione modifica temporaneamente la direzione di ciglia e sopracciglia, rendendole più ordinate e definite.",
          "Scegliamo forma e intensità dopo aver osservato i lineamenti e ascoltato le tue preferenze.",
        ],
      },
      {
        heading: "Ciglia e sopracciglia nella routine quotidiana",
        paragraphs: [
          "Ciglia e sopracciglia più disciplinate possono richiedere meno interventi nella routine quotidiana.",
          "L’effetto può essere discreto e naturale oppure più definito, in base a ciò che concordiamo prima della seduta.",
        ],
      },
      {
        heading: "Durata e mantenimento",
        paragraphs: [
          "La durata dipende dalla crescita naturale e dalle abitudini personali. Dopo la seduta ti spieghiamo come trattare la zona nelle prime ore.",
          "Possiamo indicarti quando ripetere il trattamento osservando la ricrescita di ciglia e sopracciglia.",
        ],
      },
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola",
    name: "Manicure semipermanente a Carmagnola",
    shortDescription:
      "Manicure semipermanente con preparazione accurata, colore uniforme e una finitura ordinata che dura più dello smalto classico.",
    longDescription:
      "Prepariamo unghie e cuticole, definiamo forma e lunghezza e applichiamo il colore con precisione. Scegliamo insieme tonalità e finitura per ottenere mani ordinate e un risultato adatto al tuo stile.",
    priceHint: "da 26 €",
    category: "estetica-classica",
    benefits: [
      "Aspetto ordinato e curato per più tempo",
      "Finitura più resistente rispetto allo smalto classico",
      "Colore e finitura scelti in base al tuo stile",
    ],
    faqs: [
      {
        q: "Il semipermanente rovina l'unghia?",
        a: "Applicazione e rimozione scorrette possono danneggiare la superficie dell’unghia. Per ridurre il rischio evitiamo strappi e limature aggressive e consigliamo una rimozione professionale.",
      },
      {
        q: "Ogni quanto è consigliato rifarlo?",
        a: "Spesso ogni due-tre settimane, ma dipende dalla ricrescita e da quanto usi le mani nel lavoro, in casa o nello sport. Ti consigliamo una frequenza adatta alle condizioni delle unghie e al risultato desiderato.",
      },
      {
        q: "Posso scegliere un effetto molto naturale?",
        a: "Sì. Possiamo scegliere tonalità neutre e finiture discrete, adatte al colore della pelle e alla forma dell’unghia.",
      },
      {
        q: "Voglio sentirmi subito in ordine: è una buona scelta?",
        a: "Sì, se desideri mani curate e un colore che richieda meno ritocchi dello smalto classico. Possiamo realizzare sia effetti naturali sia finiture più visibili.",
      },
      {
        q: "Cosa conviene evitare per farlo durare meglio?",
        a: "Evita di usare le unghie come strumenti, idrata mani e cuticole e proteggile durante i lavori domestici. Al termine della seduta ti diamo le indicazioni necessarie.",
      },
    ],
    keywords: [
      "manicure semipermanente Carmagnola",
      "semipermanente Carmagnola",
      "semipermanente vicino a me",
      "manicure semipermanente vicino a me",
      "centro unghie Carmagnola",
      "smalto semipermanente Carmagnola",
      "semipermanente Carmagnola prezzi",
      "unghie semipermanente Carmagnola",
      "manicure Carmagnola",
      "semipermanente naturale Carmagnola",
      "RBL Nails Carmagnola",
      "ricostruzione unghie Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.manicureSemipermanente,
      alt: "Manicure semipermanente Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "come-scegliere-centro-estetico-carmagnola",
      "beauty-routine-carmagnola",
      "trattamenti-viso-carmagnola",
      "manicure-semipermanente-carmagnola-durata-rimozione",
    ],
    editorialSections: [
      {
        heading: "Che cosa comprende la manicure semipermanente",
        paragraphs: [
          "La seduta comprende preparazione di unghie e cuticole, definizione della forma e applicazione del colore.",
          "Curiamo bordi e finitura per ottenere un risultato uniforme e adatto alla forma della mano.",
        ],
      },
      {
        heading: "Che cosa influisce sulla durata",
        paragraphs: [
          "La durata varia in base alla crescita dell’unghia, alle attività quotidiane e al contatto con detergenti. Anche colore e finitura possono richiedere attenzioni diverse.",
          "Prima dell’applicazione ti aiutiamo a scegliere una soluzione compatibile con la tua routine.",
        ],
      },
      {
        heading: "Rimozione e cura dell'unghia",
        paragraphs: [
          "Strappi e limature eccessive possono danneggiare la superficie dell’unghia. Per questo eseguiamo la rimozione in modo controllato.",
          "Se desideri alternare periodi con e senza semipermanente, possiamo programmare applicazione e rimozione di conseguenza.",
        ],
      },
      {
        heading: "Colori e finiture naturali",
        paragraphs: [
          "Per un effetto discreto possiamo scegliere tonalità neutre e finiture leggere, adatte al colore della pelle e alla forma dell’unghia.",
          "Se preferisci un risultato più evidente, valutiamo insieme colore e dettagli prima dell’applicazione.",
        ],
      },
      {
        heading: "Per chi cerca una manicure pratica",
        paragraphs: [
          "Il semipermanente è indicato per chi desidera mantenere il colore più a lungo rispetto allo smalto classico.",
          "Prima di iniziare ti spieghiamo tempi, rimozione e semplici accorgimenti per la cura quotidiana.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Nail care basics",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/nail-care-basics",
      },
      {
        label: "AAD - How to prevent brittle nails",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/prevent-brittle-nails",
      },
    ],
  },
  {
    slug: "pedicure-carmagnola",
    name: "Pedicure VIP con scrub a Carmagnola",
    shortDescription:
      "Pedicure VIP con scrub per rifinire unghie e pelle e lasciare i piedi più lisci, ordinati e confortevoli.",
    longDescription:
      "Il Pedicure VIP unisce la cura estetica di unghie e cuticole a uno scrub dedicato alla pelle del piede. Adattiamo intensità e passaggi alle condizioni osservate, con particolare delicatezza su talloni secchi o zone più ispessite.",
    priceHint: "44 €",
    category: "estetica-classica",
    benefits: [
      "Piedi più ordinati e curati, anche da vicino",
      "Pelle più liscia e confortevole, soprattutto sui talloni secchi",
      "Scrub e rifinitura adattati alle condizioni della pelle",
    ],
    faqs: [
      {
        q: "Quanto dura il Pedicure VIP?",
        a: "Circa un’ora e 15 minuti, così possiamo dedicare il tempo necessario a unghie, cuticole, scrub e rifinitura.",
      },
      {
        q: "Ogni quanto conviene fare il pedicure?",
        a: "Dipende dalla pelle, dalle abitudini e dalla stagione. Dopo la seduta possiamo suggerirti quando ripeterlo in base alle condizioni dei piedi e al tipo di mantenimento che desideri.",
      },
      {
        q: "Se ho talloni secchi o pelle ispessita, si può fare?",
        a: "Sì, se si tratta di una condizione estetica compatibile con il trattamento. Adattiamo lo scrub e la rifinitura, evitando interventi aggressivi sulle zone più sensibili.",
      },
      {
        q: "Posso mettere lo smalto dopo il pedicure?",
        a: "Sì. Per un effetto molto naturale, possiamo orientarti su finiture pulite e discrete. Se preferisci colore, lo scegliamo insieme in base allo stile che ti piace.",
      },
      {
        q: "Se ho dolore o noto un possibile problema all’unghia, cosa devo fare?",
        a: "In presenza di dolore, lesioni o sospetta infezione, rivolgiti a un medico o a un podologo prima di prenotare. Il servizio è esclusivamente estetico.",
      },
    ],
    keywords: [
      "pedicure Carmagnola",
      "pedicure VIP Carmagnola",
      "pedicure VIP con scrub Carmagnola",
      "pedicure estetico Carmagnola",
      "cura piedi Carmagnola",
      "talloni secchi Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure professionale Rebel con finish naturale a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "come-scegliere-centro-estetico-carmagnola",
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
      "pedicure-carmagnola-ogni-quanto-talloni",
    ],
    editorialSections: [
      {
        heading: "Che cosa comprende il Pedicure VIP",
        paragraphs: [
          "Il trattamento comprende la cura estetica di unghie e cuticole, uno scrub dedicato alla pelle del piede e la rifinitura finale.",
          "Adattiamo i passaggi alle condizioni della pelle per lasciare i piedi ordinati e confortevoli.",
        ],
      },
      {
        heading: "Talloni secchi e pelle ispessita",
        paragraphs: [
          "Sulle zone secche o ispessite procediamo con particolare delicatezza e senza forzare la pelle in una sola seduta.",
          "Al termine ti diamo indicazioni semplici per l’idratazione e la cura a casa.",
        ],
      },
      {
        heading: "Quando programmare il pedicure",
        paragraphs: [
          "Il pedicure può essere prenotato durante tutto l’anno, anche se la frequenza può cambiare con stagione, attività e tipo di calzature.",
          "Dopo la seduta possiamo suggerirti una cadenza in base alle tue abitudini e alle condizioni della pelle.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Nail care basics",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/nail-care-basics",
      },
    ],
  },
  {
    slug: "pedicure-estetico-carmagnola",
    name: "Pedicure estetico a Carmagnola",
    shortDescription:
      "Pedicure estetico di 45 minuti dedicato a unghie, cuticole e rifinitura del piede.",
    longDescription:
      "Il pedicure estetico comprende la cura di unghie e cuticole e una rifinitura della pelle. Dura circa 45 minuti ed è indicato come trattamento singolo o come mantenimento tra servizi più completi.",
    priceHint: "33 €",
    category: "estetica-classica",
    benefits: [
      "Unghie e cuticole curate in circa 45 minuti",
      "Rifinitura estetica della pelle del piede",
      "Adatto come mantenimento tra trattamenti più completi",
    ],
    faqs: [
      {
        q: "Quanto dura il pedicure estetico?",
        a: "Circa 45 minuti.",
      },
      {
        q: "È adatto anche se ho pelle secca?",
        a: "Dipende dal grado di secchezza. Per esigenze leggere possiamo adattare la rifinitura; se serve un’esfoliazione più completa, può essere più indicato il Pedicure VIP con scrub.",
      },
      {
        q: "Ogni quanto conviene farlo?",
        a: "Dipende dalle abitudini, dalla stagione e dalla crescita delle unghie. Dopo la seduta possiamo indicarti quando ripetere il trattamento.",
      },
    ],
    keywords: [
      "pedicure estetico Carmagnola",
      "pedicure Carmagnola",
      "cura piedi Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure estetico Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
    ],
  },
  {
    slug: "pedicure-estetico-con-smalto-carmagnola",
    name: "Pedicure estetico con smalto a Carmagnola",
    shortDescription:
      "Pedicure estetico di 50 minuti con cura di unghie e cuticole, rifinitura e applicazione dello smalto.",
    longDescription:
      "Questa versione aggiunge l’applicazione dello smalto al pedicure estetico. Scegliamo insieme colore e finitura in base al tuo stile e completiamo il trattamento in circa 50 minuti.",
    priceHint: "35 €",
    category: "estetica-classica",
    benefits: [
      "Cura estetica di unghie, cuticole e pelle del piede",
      "Smalto applicato con precisione",
      "Colore e finitura scelti in base alle tue preferenze",
    ],
    faqs: [
      {
        q: "Quanto dura il trattamento?",
        a: "Circa 50 minuti.",
      },
      {
        q: "Posso scegliere un colore discreto?",
        a: "Sì. Possiamo orientarti su finiture e colori molto naturali, puliti e facili da portare.",
      },
      {
        q: "Se ho poco tempo, conviene questa versione o il pedicure estetico?",
        a: "Il pedicure estetico dura circa 45 minuti; la versione con smalto richiede circa 50 minuti. Scegli quest’ultima se desideri completare il trattamento con il colore.",
      },
    ],
    keywords: [
      "pedicure con smalto Carmagnola",
      "pedicure Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure con smalto naturale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
    ],
  },
  {
    slug: "pedicure-semipermanente-carmagnola",
    name: "Pedicure estetico semipermanente a Carmagnola",
    shortDescription:
      "Pedicure estetico con semipermanente della durata di circa un’ora, con una finitura più stabile rispetto allo smalto classico.",
    longDescription:
      "Il trattamento comprende pedicure estetico e applicazione del semipermanente. La finitura dura più dello smalto classico; per limitare il rischio di danneggiare l’unghia, applicazione e rimozione devono essere eseguite senza strappi o limature eccessive.",
    priceHint: "39 €",
    category: "estetica-classica",
    benefits: [
      "Finitura più stabile rispetto allo smalto classico",
      "Cura estetica di unghie, cuticole e pelle del piede",
      "Colore e finitura personalizzabili",
    ],
    faqs: [
      {
        q: "Quanto dura il trattamento?",
        a: "Circa 1 ora.",
      },
      {
        q: "Il semipermanente rovina l'unghia del piede?",
        a: "Applicazione e rimozione scorrette possono danneggiare la superficie dell’unghia. Per ridurre il rischio evitiamo strappi e limature aggressive.",
      },
      {
        q: "Posso fare una pausa tra un semipermanente e l'altro?",
        a: "Sì. Possiamo rimuovere il prodotto e lasciare le unghie senza smalto fino all’applicazione successiva.",
      },
    ],
    keywords: [
      "pedicure semipermanente Carmagnola",
      "semipermanente piedi Carmagnola",
      "pedicure Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure semipermanente Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "manicure-semipermanente-carmagnola-durata-rimozione",
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
    ],
    sourceLinks: [
      {
        label: "AAD - Gel manicures: Tips for healthy nails",
        url: "https://www.aad.org/media/news-releases/gel-manicures-dermatologists-share-tips-to-keep-nails-healthy",
      },
    ],
  },
  {
    slug: "taglio-unghie-piedi-carmagnola",
    name: "Taglio unghie piedi a Carmagnola",
    shortDescription:
      "Taglio e rifinitura estetica delle unghie dei piedi in circa 15 minuti.",
    longDescription:
      "Il servizio comprende taglio e rifinitura estetica delle unghie dei piedi. Dura circa 15 minuti e può essere prenotato da solo o come mantenimento tra due pedicure.",
    priceHint: "17 €",
    category: "estetica-classica",
    benefits: [
      "Durata indicativa di 15 minuti",
      "Taglio e rifinitura delle unghie",
      "Possibilità di prenotarlo come mantenimento tra due pedicure",
    ],
    faqs: [
      {
        q: "Quanto dura?",
        a: "Circa 15 minuti.",
      },
      {
        q: "Quando conviene farlo?",
        a: "Quando hai bisogno soltanto di taglio e rifinitura, oppure come mantenimento tra due pedicure completi.",
      },
      {
        q: "Se provo dolore o noto qualcosa di insolito, posso farlo lo stesso?",
        a: "In presenza di dolore, lesioni o sospetta infezione, rivolgiti a un medico o a un podologo prima di prenotare. Il servizio è esclusivamente estetico.",
      },
    ],
    keywords: [
      "taglio unghie piedi Carmagnola",
      "taglio unghie Carmagnola",
      "cura piedi Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Taglio unghie piedi professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: ["pedicure-carmagnola-ogni-quanto-talloni", "beauty-routine-carmagnola"],
  },
  {
    slug: "epilazione-laser-viso-carmagnola",
    name: "Epilazione laser viso a Carmagnola",
    shortDescription:
      "Epilazione laser viso per baffetti, mento e altre piccole aree, con parametri e calendario definiti durante la valutazione.",
    longDescription:
      "Per l’epilazione laser del viso definiamo parametri e calendario in base a fototipo, zona e caratteristiche del pelo. Utilizziamo Lumina X1 Pro di THORY; ICE Polar aiuta a rendere più confortevole la seduta sulle aree più sensibili.",
    priceHint: "da 25,90 € per zona",
    category: "laser",
    benefits: [
      "Ricrescita progressivamente più gestibile nel tempo",
      "Parametri adattati a fototipo, pelo e zona",
      "Calendario definito e aggiornato durante il percorso",
      "ICE Polar per rendere la seduta più confortevole",
    ],
    faqs: [
      {
        q: "Il laser viso è adatto alle pelli sensibili?",
        a: "Dipende dalle condizioni della pelle e dalla zona. Prima di iniziare facciamo una valutazione e, se il trattamento è indicato, adattiamo i parametri alla risposta cutanea.",
      },
      {
        q: "Devo radermi prima della seduta?",
        a: "Di solito sì. Al momento della prenotazione ti indichiamo quando usare il rasoio e quali metodi di epilazione evitare prima dell’appuntamento.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o pinzetta?",
        a: "In generale, durante un percorso laser si evita l’epilazione a strappo perché interferisce con il ciclo del pelo. Tra le sedute si usa di solito il rasoio, seguendo le indicazioni ricevute per la zona del viso.",
      },
      {
        q: "Quando iniziano a vedersi cambiamenti?",
        a: "I cambiamenti sono progressivi e variano in base alla zona, alle caratteristiche del pelo e alla risposta individuale. Li osserviamo durante i controlli e, quando serve, aggiorniamo il programma.",
      },
    ],
    keywords: [
      "epilazione laser viso Carmagnola",
      "laser viso Carmagnola",
      "epilazione baffetti Carmagnola",
      "epilazione mento Carmagnola",
      "laser basette Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Epilazione laser viso in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-viso-carmagnola-cosa-sapere",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-uomo-carmagnola",
    ],
    relatedProtocolSlugs: ["eye-genesis"],
    editorialSections: [
      {
        heading: "Come scegliamo le zone del viso",
        paragraphs: [
          "Durante la valutazione individuiamo la zona o le zone che desideri trattare e definiamo la priorità in base alle tue esigenze.",
          "Se vuoi trattare più aree, per esempio baffetti e mento, consideriamo sensibilità cutanea, caratteristiche del pelo e durata dell’appuntamento.",
        ],
      },
      {
        heading: "Parametri del trattamento e comfort",
        paragraphs: [
          "La sensibilità del viso varia da persona a persona. ICE Polar aiuta a rendere la seduta più confortevole, soprattutto sulle aree più sensibili.",
          "Impostiamo i parametri in base a fototipo, pelo, zona e risposta della pelle, con eventuali modifiche durante il percorso.",
        ],
      },
      {
        heading: "Prima e dopo la seduta",
        paragraphs: [
          "Prima dell’appuntamento ti spieghiamo quando usare il rasoio, come gestire l’esposizione solare e quali prodotti sospendere temporaneamente, se necessario.",
          "Dopo la seduta ti diamo indicazioni per detergere, idratare e proteggere la zona in base alla risposta della pelle.",
        ],
      },
      {
        heading: "Come definiamo il calendario",
        paragraphs: [
          "Il calendario viene definito in base alla zona e viene aggiornato osservando la risposta della pelle e l’andamento della ricrescita.",
          "Rispettare gli intervalli concordati ci aiuta a confrontare i cambiamenti da una seduta all’altra.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal: Preparation",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Laser hair removal",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "epilazione-laser-corpo-carmagnola",
    name: "Epilazione laser corpo a Carmagnola",
    shortDescription:
      "Epilazione laser corpo per una o più aree, con calendario e controlli definiti in base alla zona.",
    longDescription:
      "Definiamo le aree da trattare, il calendario e i controlli prima di iniziare. Utilizziamo Lumina X1 Pro di THORY con parametri personalizzati; ICE Polar aiuta a rendere più confortevole la seduta.",
    priceHint: "da 25,90 € a 103,60 €",
    category: "laser",
    benefits: [
      "Obiettivo di riduzione progressiva della ricrescita",
      "Zone, calendario e controlli definiti prima di iniziare",
      "ICE Polar per rendere la seduta più confortevole",
      "Indicazioni personalizzate prima e dopo l’appuntamento",
    ],
    faqs: [
      {
        q: "Il laser corpo è doloroso?",
        a: "La percezione varia in base alla zona e alla sensibilità personale. Adattiamo i parametri alla risposta della pelle; ICE Polar aiuta a rendere la seduta più confortevole.",
      },
      {
        q: "Posso trattare più zone nello stesso appuntamento?",
        a: "Sì. Decidiamo insieme in base a zone, tempi e tollerabilità: a volte conviene fare più aree, altre volte è meglio impostare una priorità per mantenere il percorso più semplice.",
      },
      {
        q: "Cosa conviene fare prima della seduta?",
        a: "Ti diciamo come preparare la zona e cosa evitare. In generale, il rasoio è la scelta più comune, mentre l'epilazione a strappo di solito si evita durante il percorso.",
      },
      {
        q: "Tra una seduta e l'altra posso fare scrub o trattamenti corpo?",
        a: "Dipende dal tipo di trattamento, dalla zona e dalla risposta della pelle. Ti indichiamo quanto attendere prima di usare scrub o prenotare altri trattamenti corpo.",
      },
    ],
    keywords: [
      "epilazione laser corpo Carmagnola",
      "laser corpo Carmagnola",
      "epilazione laser ascelle Carmagnola",
      "epilazione laser inguine Carmagnola",
      "epilazione laser gambe Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser corpo in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-inguine-carmagnola",
      "epilazione-laser-ascelle-carmagnola",
      "laser-uomo-carmagnola",
    ],
    relatedProtocolSlugs: ["rebel-cell-regeneration"],
    editorialSections: [
      {
        heading: "Una zona o più zone nello stesso appuntamento",
        paragraphs: [
          "Il numero di zone dipende dal risultato desiderato, dal tempo disponibile e dalla sensibilità individuale.",
          "Durante la valutazione definiamo le priorità, la durata degli appuntamenti e il calendario dei controlli.",
        ],
      },
      {
        heading: "Calendario ed esposizione solare",
        paragraphs: [
          "Il calendario comprende più sedute e viene adattato in base alla risposta della pelle e all’andamento della ricrescita.",
          "Se cambiano l’esposizione solare o le tue abitudini, valutiamo se modificare la data dell’appuntamento o i parametri del trattamento.",
        ],
      },
      {
        heading: "Preparazione e indicazioni dopo la seduta",
        paragraphs: [
          "Prima della seduta ti spieghiamo come preparare la zona, quando usare il rasoio e come gestire l’esposizione solare.",
          "Dopo l’appuntamento ti diamo indicazioni specifiche su sport, doccia, prodotti e protezione della pelle.",
        ],
      },
      {
        heading: "Parametri del trattamento e comfort",
        paragraphs: [
          "ICE Polar aiuta a rendere la seduta più confortevole. I parametri vengono scelti in base a zona, fototipo, caratteristiche del pelo e risposta della pelle.",
          "Controlliamo la zona durante ogni appuntamento e modifichiamo i parametri quando è necessario.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal: Preparation",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Laser hair removal",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "epilazione-laser-viso-uomo-carmagnola",
    name: "Epilazione laser viso uomo a Carmagnola",
    shortDescription:
      "Epilazione laser per barba, collo e zigomi, con parametri personalizzati e indicazioni pratiche per la rasatura tra le sedute.",
    longDescription:
      "Il trattamento può interessare barba, collo, zigomi, baffi o contorni, in base al risultato che desideri. Definiamo parametri e calendario dopo aver valutato pelle, pelo e zona; utilizziamo Lumina X1 Pro di THORY e ICE Polar per migliorare il comfort della seduta.",
    priceHint: "51,80 € / 25,90 € per zona",
    category: "laser",
    benefits: [
      "Zone di barba, collo e viso definite durante la valutazione",
      "Indicazioni pratiche per la rasatura tra le sedute",
      "Parametri adattati alla risposta della pelle",
      "ICE Polar per rendere la seduta più confortevole",
    ],
    faqs: [
      {
        q: "Si può fare laser su barba e collo?",
        a: "Dipende dal risultato desiderato e dalle caratteristiche di pelle e pelo. Durante la valutazione definiamo le zone, per esempio collo, zigomi o contorni, e impostiamo parametri e calendario.",
      },
      {
        q: "Tra una seduta e l'altra posso radermi?",
        a: "Di solito sì: il rasoio è la scelta più semplice durante un percorso laser. In genere si evita invece l'epilazione a strappo perché interferisce con il ciclo del pelo.",
      },
      {
        q: "Fa male sul collo o sulla linea barba?",
        a: "La percezione varia in base alla zona e alla sensibilità personale. Adattiamo i parametri alla risposta della pelle; ICE Polar aiuta a rendere la seduta più confortevole.",
      },
      {
        q: "Posso iniziare anche se faccio sport all'aperto o mi espongo al sole?",
        a: "L’esposizione solare va valutata prima di ogni appuntamento. In base alla zona e all’abbronzatura possiamo confermare la seduta, modificarne i parametri o rimandarla.",
      },
    ],
    keywords: [
      "epilazione laser viso uomo Carmagnola",
      "laser barba Carmagnola",
      "laser collo uomo Carmagnola",
      "laser zigomi uomo Carmagnola",
      "laser viso uomo Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Epilazione laser viso uomo Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola",
      "laser-barba-collo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Definire le zone di barba e collo",
        paragraphs: [
          "Prima del trattamento chiariamo il risultato desiderato e individuiamo le zone da trattare, come collo, zigomi o contorni della barba.",
          "La valutazione serve a osservare pelle e pelo e a definire parametri, calendario e controlli.",
        ],
      },
      {
        heading: "Come radersi tra le sedute",
        paragraphs: [
          "Durante il percorso si usa generalmente il rasoio e si evitano i metodi a strappo. Ti indichiamo quando raderti prima di ogni appuntamento.",
          "Adattiamo le indicazioni alla tua routine, tenendo conto di lavoro, sport ed esposizione solare.",
        ],
      },
      {
        heading: "Parametri del trattamento e comfort",
        paragraphs: [
          "ICE Polar aiuta a rendere la seduta più confortevole, soprattutto su collo e contorni.",
          "Controlliamo la risposta della pelle a ogni appuntamento e modifichiamo i parametri quando è necessario.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "epilazione-laser-corpo-uomo-carmagnola",
    name: "Epilazione laser corpo uomo a Carmagnola",
    shortDescription:
      "Epilazione laser su schiena, torace e altre aree del corpo, con zone, calendario e controlli definiti prima di iniziare.",
    longDescription:
      "Per schiena, torace, addome e spalle definiamo insieme le aree da trattare, il calendario e i controlli. Utilizziamo Lumina X1 Pro di THORY con parametri personalizzati; ICE Polar aiuta a rendere più confortevole la seduta.",
    priceHint: "da 25,90 € a 103,60 €",
    category: "laser",
    benefits: [
      "Priorità e calendario definiti per schiena, torace e altre aree",
      "Percorso monitorato e adattato alla risposta individuale",
      "ICE Polar per rendere la seduta più confortevole",
      "Indicazioni personalizzate prima e dopo l’appuntamento",
    ],
    faqs: [
      {
        q: "Schiena e torace richiedono più sedute?",
        a: "Sono zone ampie e la risposta varia da persona a persona. Definiamo un calendario iniziale e lo aggiorniamo in base ai cambiamenti osservati durante i controlli.",
      },
      {
        q: "Posso trattare più zone nello stesso appuntamento?",
        a: "Dipende dalle aree, dalla durata dell’appuntamento e dalla sensibilità personale. Durante la valutazione decidiamo se trattare più zone insieme o iniziare da quella prioritaria.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o epilatore?",
        a: "In generale si evita l'epilazione a strappo durante un percorso laser. Di solito si usa il rasoio e si seguono poche regole pratiche per la pelle.",
      },
      {
        q: "Laser e sole: devo sospendere se lavoro all'aperto?",
        a: "L’esposizione solare va valutata prima di ogni appuntamento. In base alla zona e all’abbronzatura possiamo confermare la seduta, modificarne i parametri o rimandarla.",
      },
    ],
    keywords: [
      "epilazione laser corpo uomo Carmagnola",
      "laser schiena Carmagnola",
      "laser torace Carmagnola",
      "laser uomo Carmagnola",
      "laser spalle Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser corpo uomo Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola",
      "laser-schiena-carmagnola",
      "laser-gambe-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Come organizziamo il trattamento delle aree ampie",
        paragraphs: [
          "Per schiena, torace, addome e spalle definiamo quali zone trattare per prime e quanto tempo dedicare a ogni appuntamento.",
          "Il calendario tiene conto anche di sport, esposizione solare e gestione della pelle tra le sedute.",
        ],
      },
      {
        heading: "Prima e dopo la seduta",
        paragraphs: [
          "Prima dell’appuntamento ti spieghiamo quando usare il rasoio e come gestire l’esposizione solare.",
          "Dopo la seduta ti diamo indicazioni specifiche su prodotti, calore, sfregamenti e attività sportiva.",
        ],
      },
      {
        heading: "Parametri del trattamento e comfort",
        paragraphs: [
          "ICE Polar aiuta a rendere la seduta più confortevole. I parametri vengono scelti in base alla zona, al fototipo e alle caratteristiche del pelo.",
          "A ogni appuntamento controlliamo la risposta della pelle e modifichiamo i parametri quando è necessario.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
];

export const competencePages: CompetencePage[] = [
  {
    slug: "come-scegliere-centro-estetico-carmagnola",
    title: "Come scegliere un centro estetico a Carmagnola",
    shortDescription:
      "Criteri pratici per confrontare i centri estetici: quali domande fare e quali informazioni chiedere prima di prenotare.",
    longDescription:
      "Quando confronti più centri estetici puoi incontrare proposte, prezzi e termini molto diversi. Questa guida raccoglie gli aspetti da verificare prima di scegliere: valutazione iniziale, spiegazione del trattamento, prezzo, indicazioni tra le sedute e gestione degli appuntamenti.",
    localAngle:
      "Utile se stai confrontando più centri a Carmagnola prima di prenotare.",
    intent: "informational",
    benefits: [
      "Raccoglie le informazioni da chiedere prima di prenotare",
      "Aiuta a confrontare servizi e prezzi con criteri chiari",
      "Spiega che cosa dovrebbe comprendere una prima valutazione",
    ],
    faqs: [
      {
        q: "Quali segnali indicano un centro estetico affidabile?",
        a: "Informazioni chiare sul trattamento, sul prezzo e sulle indicazioni da seguire prima e dopo la seduta. È importante anche che il centro spieghi i limiti del servizio e non prometta risultati garantiti.",
      },
      {
        q: "Cosa conviene chiedere durante la prima consulenza?",
        a: "Chiedi come viene scelto il trattamento, che cosa comprende il prezzo, quali indicazioni riceverai dopo la seduta e come verrà rivisto il piano se le tue esigenze cambiano.",
      },
      {
        q: "Il prezzo più basso è sempre la scelta migliore?",
        a: "Il prezzo è uno degli elementi da confrontare. Verifica anche che cosa include, la durata prevista, chi esegue il servizio e se sono indicati eventuali costi aggiuntivi.",
      },
      {
        q: "Come capisco se un percorso è personalizzato?",
        a: "La proposta dovrebbe partire da una valutazione iniziale e indicare obiettivo, trattamenti, frequenza e controlli. Se le condizioni della pelle o le tue disponibilità cambiano, il piano dovrebbe poter essere aggiornato.",
      },
    ],
    keywords: [
      "miglior centro estetico Carmagnola",
      "come scegliere estetista Carmagnola",
      "confronto centri estetici Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "manicure-semipermanente-carmagnola",
      "pedicure-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "estetica-avanzata-carmagnola",
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "beauty-routine-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Prima di scegliere, chiarisci l’obiettivo",
        paragraphs: [
          "Luminosità del viso, cura delle mani e gestione della ricrescita sono esigenze diverse. Spiegare che cosa desideri aiuta il centro a proporti il servizio più adatto.",
          "Chiedi anche quali risultati sono ragionevoli, in quanto tempo verranno valutati e se sono previsti appuntamenti successivi.",
        ],
      },
      {
        heading: "Un primo appuntamento per conoscere il centro",
        paragraphs: [
          "Se hai dubbi, puoi iniziare da una valutazione o da un servizio singolo e osservare come vengono spiegati passaggi, prodotti e indicazioni successive.",
          "Pulizia viso, manicure semipermanente, pedicure e laminazione sono servizi diversi: scegli quello che risponde alla tua esigenza, dopo aver verificato contenuto e prezzo.",
        ],
      },
      {
        heading: "Che cosa chiedere, anche con un messaggio",
        paragraphs: [
          "Puoi chiedere chi esegue il trattamento, che cosa dovrai fare prima e dopo e come vengono gestiti gli spostamenti degli appuntamenti.",
          "Risposte precise ti permettono di confrontare i centri e di arrivare al primo appuntamento con le informazioni necessarie.",
        ],
      },
      {
        heading: "Prezzi: che cosa verificare prima di prenotare",
        paragraphs: [
          "Verifica che cosa comprende il prezzo e quali elementi possono modificarlo, per esempio la zona trattata, la durata o la frequenza degli appuntamenti.",
          "Se viene proposto un pacchetto, chiedi numero di sedute, condizioni, scadenza ed eventuali servizi esclusi.",
        ],
      },
      {
        heading: "Tecnologie e termini tecnici",
        paragraphs: [
          "Il nome di una tecnologia o di un attivo non basta a descrivere un servizio. Chiedi perché viene proposto nel tuo caso e quali limiti ha.",
          "Le spiegazioni dovrebbero essere comprensibili e permetterti di decidere senza affidarti a slogan o promesse assolute.",
        ],
      },
      {
        heading: "Decidere con calma",
        paragraphs: [
          "Dopo la consulenza dovresti sapere che cosa è stato proposto, quanto costa, quali appuntamenti prevede e quali risultati possono essere valutati.",
          "Puoi anche iniziare con un singolo servizio, come una pulizia viso, oppure con una valutazione laser e decidere in seguito se proseguire.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "estetica-avanzata-carmagnola",
    title: "Estetica avanzata a Carmagnola",
    shortDescription:
      "Trattamenti viso e corpo scelti dopo una valutazione iniziale, con obiettivi, calendario e controlli definiti insieme.",
    longDescription:
      "Da REBEL, estetica avanzata significa valutare le condizioni della pelle, chiarire l’obiettivo e scegliere manualità, attivi o tecnologie adatti al caso. Prima di iniziare definiamo anche frequenza degli appuntamenti e modalità di controllo.",
    localAngle:
      "Per chi cerca a Carmagnola trattamenti viso e corpo con una valutazione iniziale e un piano spiegato con chiarezza.",
    intent: "commercial",
    benefits: [
      "Proposta definita in base a pelle, obiettivo e disponibilità",
      "Frequenza e controlli indicati prima di iniziare",
      "Manualità, attivi e tecnologie scelti per viso o corpo",
    ],
    faqs: [
      {
        q: "Qual è la differenza con un trattamento estetico standard?",
        a: "Nel nostro approccio il trattamento viene scelto dopo una valutazione e può far parte di un piano con obiettivi, frequenza e controlli. La proposta cambia in base alla pelle e alle esigenze della persona.",
      },
      {
        q: "Serve sempre tecnologia?",
        a: "No. In base all’obiettivo possiamo proporre manualità, prodotti cosmetici, tecnologie o una combinazione di questi elementi. Durante la valutazione spieghiamo che cosa è previsto e perché.",
      },
      {
        q: "Da cosa si parte se non so cosa scegliere?",
        a: "Da una valutazione iniziale di pelle, obiettivo, abitudini e disponibilità. Al termine ricevi una proposta con i trattamenti consigliati, la frequenza e i costi.",
      },
    ],
    keywords: [
      "estetica avanzata Carmagnola",
      "centro estetico avanzato Carmagnola",
      "trattamenti estetici evoluti Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "massaggio-linfodrenante-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    relatedProtocolSlugs: [
      "catalysis-ritual",
      "rebel-lift-protocol",
      "collagen-code",
      "rebel-cell-regeneration",
      "rebirth-60-plus",
    ],
    editorialSections: [
      {
        heading: "Che cosa intendiamo per estetica avanzata",
        paragraphs: [
          "Con questa espressione indichiamo trattamenti viso e corpo scelti dopo una valutazione estetica, con obiettivi e controlli concordati.",
          "La proposta può comprendere manualità, attivi cosmetici e tecnologie, in base alle condizioni osservate e al risultato desiderato.",
        ],
      },
      {
        heading: "Manualità, attivi e tecnologia: come decidiamo cosa usare",
        paragraphs: [
          "Prima osserviamo la pelle e raccogliamo informazioni su obiettivo, abitudini e tempi disponibili. Poi spieghiamo quali strumenti proponiamo e con quale funzione.",
          "Se durante i controlli cambiano le esigenze, possiamo aggiornare prodotti, trattamento o frequenza degli appuntamenti.",
        ],
      },
      {
        heading: "Calendario, controlli e mantenimento",
        paragraphs: [
          "Il calendario deve essere compatibile con le tue disponibilità. Prima di iniziare indichiamo la frequenza proposta e ciò che puoi fare a casa tra gli appuntamenti.",
          "Ai controlli valutiamo la risposta della pelle e, se necessario, modifichiamo il piano.",
        ],
      },
      {
        heading: "Come iniziare",
        paragraphs: [
          "Puoi prenotare una valutazione oppure iniziare da un servizio singolo, come la pulizia viso, se è adatto alle condizioni della pelle.",
          "La frequenza non è uguale per tutti: viene proposta dopo la valutazione e può essere rivista durante il percorso.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "estetica-epigenetica-carmagnola-cosa-significa",
    title: "Estetica epigenetica a Carmagnola: cosa intendiamo e da dove partire",
    shortDescription:
      "Che cosa indica l’espressione “protocolli epigenetici” in REBEL e come viene scelto un primo trattamento per viso o corpo.",
    longDescription:
      "REBEL usa l’espressione “protocolli epigenetici” per indicare un metodo estetico che parte da una valutazione, definisce un obiettivo e organizza trattamenti, controlli e mantenimento. È una denominazione del nostro approccio cosmetico: non indica una diagnosi né un trattamento medico.",
    localAngle:
      "Utile se vuoi capire che cosa comprende un protocollo REBEL prima di prenotare a Carmagnola.",
    intent: "informational",
    benefits: [
      "Spiega che cosa intendiamo per “protocolli epigenetici”",
      "Descrive come scegliamo il primo trattamento per viso o corpo",
      "Chiarisce valutazione, calendario, controlli e mantenimento",
    ],
    faqs: [
      {
        q: "È un trattamento singolo o un percorso?",
        a: "Dipende dall’obiettivo e dalla proposta formulata dopo la valutazione. Può trattarsi di una singola seduta oppure di più appuntamenti con controlli intermedi.",
      },
      {
        q: "È prevista una valutazione iniziale?",
        a: "Sì. Serve a raccogliere informazioni sulla pelle, sull’obiettivo, sulle abitudini e sulle disponibilità, così possiamo spiegare quali trattamenti proponiamo e con quale frequenza.",
      },
      {
        q: "Posso abbinarlo alla pulizia viso o ad altri servizi?",
        a: "Sì, se la combinazione è adatta alla pelle e all’obiettivo. Durante la valutazione indichiamo quali servizi possono essere inseriti nello stesso periodo e come distanziarli.",
      },
      {
        q: "Quando vengono valutati i risultati?",
        a: "Dipende dall’obiettivo e dai trattamenti scelti. Prima di iniziare spieghiamo quali cambiamenti possono essere osservati e quando è previsto il controllo, senza garantire lo stesso esito per tutti.",
      },
    ],
    keywords: [
      "estetica epigenetica Carmagnola",
      "protocolli epigenetici Carmagnola",
      "trattamenti epigenetici viso Carmagnola",
      "trattamenti epigenetici corpo Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "massaggio-linfodrenante-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "estetica-avanzata-carmagnola",
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    relatedProtocolSlugs: [
      "catalysis-ritual",
      "collagen-code",
      "rebel-cell-regeneration",
      "rebel-lift-protocol",
    ],
    editorialSections: [
      {
        heading: "Che cosa significa in REBEL",
        paragraphs: [
          "“Protocolli epigenetici” è il nome che usiamo per un metodo estetico organizzato in valutazione, trattamenti, controlli e mantenimento.",
          "Il termine descrive il nostro approccio cosmetico e non implica modifiche genetiche, diagnosi o trattamenti sanitari.",
        ],
      },
      {
        heading: "Scegliere tra viso e corpo",
        paragraphs: [
          "Per il viso possiamo lavorare, in ambito estetico, su luminosità, uniformità e comfort. Per il corpo definiamo l’obiettivo in base ai servizi disponibili e alle tue preferenze.",
          "Se hai più esigenze, concordiamo da quale iniziare e come organizzare gli eventuali appuntamenti successivi.",
        ],
      },
      {
        heading: "Calendario e mantenimento",
        paragraphs: [
          "Il protocollo può comprendere indicazioni cosmetiche da seguire a casa tra una seduta e l’altra.",
          "Frequenza e durata vengono proposte dopo la valutazione e possono cambiare in base alla risposta della pelle e alle tue disponibilità.",
        ],
      },
      {
        heading: "Che cosa chiedere durante la valutazione",
        paragraphs: [
          "Chiedi qual è l’obiettivo estetico, quali trattamenti comprende la proposta, quando sono previsti i controlli e che cosa dovrai fare a casa.",
          "Prima di decidere, verifica anche prezzo, frequenza e condizioni del percorso.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "epilazione-laser-carmagnola",
    title: "Epilazione laser a Carmagnola: come funziona e da dove partire",
    shortDescription:
      "Come vengono definiti zone, parametri, calendario e indicazioni tra le sedute in un percorso di epilazione laser.",
    longDescription:
      "Una guida al percorso laser di REBEL: valutazione iniziale, parametri scelti in base a pelle, pelo e zona, calendario e indicazioni da seguire tra una seduta e l’altra. Trovi anche i criteri usati per decidere da quali aree iniziare.",
    localAngle:
      "Utile se stai valutando l’epilazione laser a Carmagnola e vuoi conoscere il nostro metodo prima di prenotare.",
    intent: "commercial",
    benefits: [
      "Spiega come scegliamo le zone da cui iniziare",
      "Raccoglie le indicazioni generali tra una seduta e l’altra",
      "Chiarisce perché numero e frequenza degli appuntamenti variano",
      "Indica quali informazioni chiedere durante la valutazione",
    ],
    faqs: [
      {
        q: "Quante sedute servono per vedere un cambiamento?",
        a: "Il numero varia in base alla zona, alle caratteristiche del pelo e alla risposta individuale. Durante la valutazione forniamo una stima e la aggiorniamo in base ai cambiamenti osservati.",
      },
      {
        q: "Posso iniziare anche se è estate o mi espongo al sole?",
        a: "Dipende dall’esposizione recente, dal fototipo e dalla zona. Segnala abbronzatura, vacanze o attività all’aperto prima di prenotare: valuteremo se eseguire, spostare o rimodulare la seduta e ti daremo indicazioni sulla protezione solare.",
      },
      {
        q: "Devo radermi prima della seduta? E ceretta/epilatore?",
        a: "Di solito viene indicato il rasoio, mentre durante il percorso si evita l’epilazione a strappo perché rimuove il pelo su cui deve agire il laser. Ti comunichiamo tempi e modalità in base alla zona trattata.",
      },
      {
        q: "Fa male? Ho paura del fastidio su alcune zone.",
        a: "La sensibilità varia da persona a persona e tra le diverse zone. Impostiamo i parametri in modo graduale; ICE Polar raffredda la pelle durante la seduta e può rendere l’esperienza più confortevole.",
      },
      {
        q: "Quando serve il mantenimento?",
        a: "Gli eventuali richiami dipendono dalla zona e dalla risposta individuale. Li valutiamo dopo il ciclo iniziale, in base alla ricrescita osservata.",
      },
    ],
    keywords: [
      "epilazione laser Carmagnola",
      "epilazione laser Rebel",
      "laser Carmagnola",
      "centro laser Carmagnola",
      "laser estetico Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "laser-diodo-carmagnola",
      "epilazione-laser-viso-carmagnola-cosa-sapere",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-inverno-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Prima consulenza: la parte più importante del percorso",
        paragraphs: [
          "Il numero di sedute non può essere stabilito senza considerare zona, pelle, caratteristiche del pelo e abitudini.",
          "Durante la valutazione definiamo le aree da trattare, spieghiamo come scegliamo i parametri e proponiamo un calendario iniziale.",
        ],
      },
      {
        heading: "Calendario e controlli",
        paragraphs: [
          "Gli intervalli vengono stabiliti in base alla zona e alla ricrescita osservata. Rispettare il calendario consente di valutare il percorso con maggiore continuità.",
          "Ai controlli possiamo modificare parametri o distanza tra gli appuntamenti in base alla risposta individuale.",
        ],
      },
      {
        heading: "Comfort durante la seduta con ICE Polar",
        paragraphs: [
          "La sensibilità cambia tra persone e zone. In REBEL utilizziamo Lumina X1 Pro di THORY con ICE Polar, che raffredda la pelle durante la seduta.",
          "Il raffreddamento non rende identica la percezione per tutti: parametri e modalità vengono adattati alla zona e alla risposta della pelle.",
        ],
      },
      {
        heading: "Cosa chiedere a un centro prima di iniziare",
        paragraphs: [
          "Chiedi chi imposta i parametri, quali indicazioni riceverai dopo la seduta e come verrà aggiornato il piano se la pelle reagisce in modo inatteso.",
          "Verifica inoltre prezzo, zone incluse, calendario previsto ed eventuali condizioni del pacchetto.",
        ],
      },
      {
        heading: "Indicazioni tra una seduta e l’altra",
        paragraphs: [
          "Prima e dopo ogni appuntamento forniamo indicazioni su esposizione solare, rasoio e prodotti da applicare sulla zona.",
          "Se compaiono reazioni non previste o persistenti, contatta lo studio prima di applicare nuovi prodotti o fissare la seduta successiva.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "laser-diodo-carmagnola",
    title: "Laser diodo a Carmagnola",
    shortDescription:
      "Che cos’è il laser a diodo, in che cosa differisce dall’IPL e quali informazioni chiedere durante la valutazione.",
    longDescription:
      "Una guida al laser a diodo per l’epilazione: differenze rispetto alla luce pulsata, fattori che influenzano la risposta e criteri usati per definire parametri e calendario.",
    localAngle:
      "Ideale se stai confrontando diverse tecnologie prima di iniziare.",
    intent: "informational",
    benefits: [
      "Spiega la differenza generale tra laser a diodo e IPL",
      "Indica che cosa chiedere su parametri, calendario e dopo-seduta",
      "Chiarisce i fattori che possono influenzare la risposta",
      "Aiuta a scegliere le zone da cui iniziare",
    ],
    faqs: [
      {
        q: "Laser diodo e luce pulsata sono la stessa cosa?",
        a: "No. L’IPL emette luce a spettro ampio, mentre il laser utilizza una lunghezza d’onda specifica. Sono tecnologie diverse e devono essere valutate in base a pelle, pelo, zona e modalità di utilizzo.",
      },
      {
        q: "Il laser diodo è sempre adatto?",
        a: "No. Prima di iniziare vanno considerati fototipo, colore e spessore del pelo, zona, esposizione solare recente ed eventuali controindicazioni. In alcuni casi la seduta deve essere modificata o rimandata.",
      },
      {
        q: "Funziona anche sui peli molto chiari o sottili?",
        a: "Il laser tende a rispondere meglio quando il pelo contiene sufficiente pigmento. Su peli molto chiari o fini l’esito può essere limitato; lo valutiamo prima di proporre il percorso.",
      },
      {
        q: "Perché servono più sedute?",
        a: "I peli non si trovano tutti nella stessa fase di crescita nello stesso momento. Per questo gli appuntamenti vengono distanziati e il piano viene controllato nel tempo.",
      },
      {
        q: "Come capisco se un centro è affidabile, oltre alla tecnologia?",
        a: "Verifica che siano previste una valutazione iniziale, la spiegazione di parametri e calendario e indicazioni chiare prima e dopo la seduta. Chiedi anche chi esegue il trattamento e che cosa comprende il prezzo.",
      },
    ],
    keywords: [
      "laser diodo Carmagnola",
      "differenza laser e luce pulsata Carmagnola",
      "tecnologia laser Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-viso-carmagnola-cosa-sapere",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Che cos’è il laser a diodo",
        paragraphs: [
          "Il laser a diodo utilizza una lunghezza d’onda specifica e viene impiegato per la riduzione progressiva della ricrescita.",
          "L’idoneità e i parametri dipendono da fototipo, caratteristiche del pelo, zona ed esposizione solare. Il nome della tecnologia, da solo, non consente di prevedere l’esito.",
        ],
      },
      {
        heading: "Differenza tra laser a diodo e luce pulsata",
        paragraphs: [
          "La luce pulsata emette uno spettro ampio di luce; il laser a diodo utilizza una lunghezza d’onda specifica. Richiedono quindi apparecchiature e impostazioni differenti.",
          "La scelta va valutata considerando pelle, pelo, zona, obiettivo e competenza di chi esegue il trattamento.",
        ],
      },
      {
        heading: "Perché sono previste più sedute",
        paragraphs: [
          "Il trattamento interessa i peli che si trovano in una fase utile del ciclo di crescita; non tutti i peli sono nella stessa fase nello stesso momento.",
          "Numero e distanza degli appuntamenti variano tra persone e zone. Per questo una stima iniziale deve essere verificata durante il percorso.",
        ],
      },
      {
        heading: "Che cosa verificare prima di iniziare a Carmagnola",
        paragraphs: [
          "Chiedi chi imposta i parametri, quali indicazioni riceverai dopo la seduta, come viene aggiornato il piano e che cosa accade se devi spostare un appuntamento.",
          "Prima di acquistare un pacchetto, verifica inoltre zone incluse, numero di sedute, scadenza e costi aggiuntivi.",
        ],
      },
      {
        heading: "Come lavoriamo in studio",
        paragraphs: [
          "Da REBEL a Carmagnola il percorso comprende valutazione iniziale, scelta dei parametri, calendario e controlli. Utilizziamo Lumina X1 Pro di THORY con ICE Polar per il raffreddamento durante la seduta.",
          "Per informazioni specifiche puoi consultare anche le guide dedicate a viso e corpo e le relative pagine dei servizi.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "trattamenti-viso-carmagnola",
    title: "Trattamenti viso a Carmagnola",
    shortDescription:
      "Trattamenti viso per luminosità, uniformità e comfort, scelti dopo una valutazione della pelle.",
    longDescription:
      "Come scegliamo un trattamento viso in REBEL: osserviamo le condizioni della pelle, definiamo l’obiettivo estetico e proponiamo una seduta o un calendario. Al termine forniamo indicazioni semplici per la cura a casa.",
    localAngle:
      "Utile se cerchi un trattamento viso a Carmagnola e vuoi conoscere valutazione, frequenza e cura a casa.",
    intent: "commercial",
    benefits: [
      "Aiuta a scegliere tra pulizia, luminosità, comfort e cura quotidiana",
      "Spiega come vengono definiti trattamento e frequenza",
      "Collega gli appuntamenti in studio alle indicazioni cosmetiche per casa",
    ],
    faqs: [
      {
        q: "Da cosa si parte se ho la pelle spenta o opaca?",
        a: "Partiamo da una valutazione della pelle e scegliamo un trattamento orientato a luminosità e comfort, con prodotti e intensità adatti alla sensibilità osservata.",
      },
      {
        q: "La pulizia viso è sempre il primo passo?",
        a: "No. Può essere indicata in presenza di impurità superficiali, ma una pelle molto sensibile può richiedere prodotti e passaggi più delicati o un trattamento diverso.",
      },
      {
        q: "Ogni quanto conviene fare un trattamento viso?",
        a: "La frequenza dipende dal tipo di trattamento, dalle condizioni della pelle e dall’obiettivo. Dopo il primo appuntamento possiamo proporre una cadenza e aggiornarla ai controlli.",
      },
      {
        q: "Cosa posso fare a casa per far durare di più il risultato?",
        a: "In genere consigliamo detersione delicata, idratazione e protezione solare adeguata all’esposizione. Gli eventuali attivi vengono scelti in base alla pelle e al trattamento eseguito.",
      },
    ],
    keywords: [
      "trattamenti viso Carmagnola",
      "centro viso Carmagnola",
      "estetista viso Carmagnola",
      "trattamento viso luminosità Carmagnola",
      "pulizia viso Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "beauty-routine-carmagnola",
      "pulizia-viso-carmagnola-frequenza-benefici",
      "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
      "estetica-avanzata-carmagnola",
      "contorno-occhi-gonfiore-occhiaie-carmagnola",
      "pelle-matura-carmagnola-trattamenti-routine",
      "pelle-opaca-grana-irregolare-carmagnola",
      "tono-viso-ovale-carmagnola-percorso",
    ],
    relatedProtocolSlugs: ["catalysis-ritual", "rebel-lift-protocol", "collagen-code", "eye-genesis"],
    editorialSections: [
      {
        heading: "La valutazione prima del trattamento",
        paragraphs: [
          "Le condizioni della pelle possono variare nel tempo. Prima della seduta osserviamo sensibilità, impurità superficiali, idratazione e prodotti usati a casa.",
          "Queste informazioni ci aiutano a scegliere il trattamento e a indicare se può essere utile programmare altri appuntamenti.",
        ],
      },
      {
        heading: "Quando valutare la pulizia viso",
        paragraphs: [
          "La pulizia viso può essere indicata quando la pelle appare opaca o presenta impurità superficiali.",
          "Se la pelle è sensibile, adattiamo prodotto, durata e intensità e concludiamo con una fase lenitiva.",
        ],
      },
      {
        heading: "Luminosità e uniformità della pelle",
        paragraphs: [
          "Per lavorare su luminosità e uniformità possiamo proporre trattamenti distanziati e una routine essenziale a casa.",
          "Introduciamo gli eventuali attivi con gradualità, così è più semplice osservare come risponde la pelle.",
        ],
      },
      {
        heading: "Come definiamo la frequenza",
        paragraphs: [
          "Non esiste una frequenza uguale per tutti i trattamenti viso. Dipende dalla tecnica, dalla sensibilità della pelle e dall’obiettivo.",
          "Dopo la prima seduta proponiamo un calendario e lo rivediamo in base alla risposta osservata.",
        ],
      },
      {
        heading: "Cura della pelle a casa",
        paragraphs: [
          "Una routine essenziale può comprendere detersione delicata, idratazione e protezione solare adeguata all’esposizione.",
          "Dopo la seduta indichiamo quali prodotti continuare, sospendere o introdurre in base al trattamento eseguito.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Face washing 101",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101",
      },
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
      {
        label: "AAD - How to safely exfoliate at home",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
    ],
  },
  {
    slug: "trattamenti-corpo-carmagnola",
    title: "Trattamenti corpo a Carmagnola",
    shortDescription:
      "Massaggi, scrub e percorsi corpo con obiettivi e frequenza definiti in base alle tue esigenze.",
    longDescription:
      "Una panoramica dei trattamenti corpo disponibili in REBEL: massaggio linfodrenante, massaggio rilassante, scrub e percorsi estetici. Durante la valutazione scegliamo il servizio e concordiamo un calendario compatibile con le tue disponibilità.",
    localAngle:
      "Per chi cerca a Carmagnola un trattamento corpo e vuole confrontare servizi, obiettivi e frequenza.",
    intent: "commercial",
    benefits: [
      "Aiuta a scegliere tra linfodrenante, massaggio rilassante e scrub",
      "Spiega come vengono definiti calendario e controlli",
      "Chiarisce che cosa comprende ogni servizio",
    ],
    faqs: [
      {
        q: "Meglio linfodrenante o massaggio rilassante?",
        a: "Dipende dall’obiettivo. Il linfodrenante è una manualità delicata scelta soprattutto per una sensazione di leggerezza; il rilassante è rivolto al comfort e al relax. Un gonfiore persistente o improvviso richiede invece un parere medico.",
      },
      {
        q: "Quanto tempo serve per vedere cambiamenti sul corpo?",
        a: "Dipende dal servizio e dall’obiettivo estetico. Prima di iniziare spieghiamo che cosa può essere osservato dopo la singola seduta e che cosa richiede più appuntamenti, senza garantire lo stesso esito per tutti.",
      },
      {
        q: "Posso combinare scrub e massaggio nello stesso periodo?",
        a: "Sì, se la pelle lo consente. Lo scrub esfolia la superficie, mentre il massaggio ha finalità e manualità diverse. Valutiamo come distanziarli e con quale intensità.",
      },
      {
        q: "Meglio una seduta singola o un percorso?",
        a: "Puoi scegliere una seduta singola per relax o cura della pelle. Se l’obiettivo richiede continuità, proponiamo un calendario e alcuni controlli, indicando prima costi e frequenza.",
      },
    ],
    keywords: [
      "trattamenti corpo Carmagnola",
      "centro corpo Carmagnola",
      "rimodellamento corpo Carmagnola",
      "massaggio drenante Carmagnola",
    ],
    relatedServiceSlugs: [
      "scrub-corpo-carmagnola",
      "massaggio-linfodrenante-carmagnola",
      "massaggio-rilassante-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "linfodrenante-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
      "beauty-routine-carmagnola",
    ],
    relatedProtocolSlugs: ["rebel-cell-regeneration"],
    editorialSections: [
      {
        heading: "Scegliere l’obiettivo del trattamento corpo",
        paragraphs: [
          "Puoi cercare una sensazione di leggerezza, un momento di relax oppure una pelle più liscia e uniforme. A ogni esigenza corrisponde un servizio diverso.",
          "Durante la valutazione spieghiamo che cosa può offrire il trattamento scelto e se ha senso programmare più appuntamenti.",
        ],
      },
      {
        heading: "Drenaggio e massaggi: scegliere la manualità giusta",
        paragraphs: [
          "Il linfodrenante utilizza manovre delicate ed è scelto soprattutto per una sensazione di leggerezza. Il massaggio rilassante è pensato per il comfort e il relax.",
          "Prima della seduta raccogliamo le informazioni necessarie per scegliere manualità, zone e pressione. Segnala sempre eventuali condizioni o indicazioni mediche.",
        ],
      },
      {
        heading: "Scrub corpo e sensibilità della pelle",
        paragraphs: [
          "Lo scrub rimuove le cellule superficiali in eccesso e può lasciare la pelle più liscia e uniforme al tatto.",
          "Su una pelle sensibile adattiamo prodotto e intensità; in presenza di irritazione può essere opportuno rimandare il trattamento.",
        ],
      },
      {
        heading: "Come organizziamo il calendario",
        paragraphs: [
          "Se viene proposto un percorso, concordiamo numero indicativo di sedute, frequenza e controlli in base all’obiettivo e alle disponibilità.",
          "Prima di iniziare indichiamo anche che cosa fare tra un appuntamento e l’altro.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "drenaggio-corpo-carmagnola",
    title: "Drenaggio corpo a Carmagnola: seduta, frequenza e indicazioni",
    shortDescription:
      "Come si svolge il massaggio drenante, quando può essere scelto e quali informazioni comunicare prima della seduta.",
    longDescription:
      "In REBEL il drenaggio corpo è un massaggio estetico manuale e delicato, scelto soprattutto da chi desidera una sensazione di leggerezza. Questa guida spiega come valutiamo manualità, zone e frequenza. Non è un trattamento sanitario e non sostituisce una valutazione medica in presenza di gonfiore persistente, improvviso o doloroso.",
    localAngle:
      "Utile se stai valutando un massaggio drenante a Carmagnola e vuoi sapere come si svolge e quando è necessario chiedere prima un parere medico.",
    intent: "commercial",
    benefits: [
      "Descrive finalità estetica e svolgimento della seduta",
      "Spiega come vengono scelti zone, pressione e frequenza",
      "Indica quali informazioni comunicare prima di prenotare",
      "Chiarisce la differenza rispetto a un massaggio rilassante",
    ],
    faqs: [
      {
        q: "Il drenaggio è utile solo nei mesi caldi?",
        a: "Può essere prenotato durante tutto l’anno. Zone, pressione ed eventuale frequenza vengono scelte in base all’obiettivo, al comfort e alle informazioni raccolte prima della seduta.",
      },
      {
        q: "Il drenaggio sostituisce sport e alimentazione?",
        a: "No. È un massaggio estetico e di benessere; non sostituisce attività fisica, alimentazione, terapie o indicazioni di un professionista sanitario.",
      },
      {
        q: "Quante sedute servono?",
        a: "Puoi prenotare una seduta singola oppure valutare più appuntamenti. La frequenza dipende dall’obiettivo e dalla risposta individuale e non consente di garantire lo stesso effetto per tutti.",
      },
      {
        q: "Il massaggio drenante deve fare male?",
        a: "No. Le manovre sono generalmente delicate e la pressione viene adattata alla sensibilità della persona. Se avverti dolore durante la seduta, comunicalo subito all’operatrice.",
      },
      {
        q: "Meglio drenaggio generico o linfodrenante?",
        a: "I nomi possono indicare manualità diverse. Prima di prenotare chiedi che tipo di massaggio viene eseguito, con quale finalità estetica e da chi. In REBEL valutiamo la proposta in base alle informazioni raccolte.",
      },
      {
        q: "Cosa conviene fare nelle ore dopo la seduta?",
        a: "Al termine ti diamo indicazioni coerenti con la seduta e con le tue abitudini. In caso di sintomi inattesi o persistenti, contatta un professionista sanitario.",
      },
      {
        q: "Ci sono casi in cui è meglio essere prudenti o chiedere un parere medico?",
        a: "Sì. Segnala prima di prenotare condizioni diagnosticate, terapie, interventi o sintomi recenti. In caso di dubbio possiamo rinviare la seduta e chiedere un parere medico.",
      },
    ],
    keywords: [
      "drenaggio corpo Carmagnola",
      "massaggio drenante Carmagnola",
      "gambe gonfie Carmagnola trattamento",
      "gambe pesanti Carmagnola",
    ],
    relatedServiceSlugs: [
      "massaggio-linfodrenante-carmagnola",
      "massaggio-rilassante-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "linfodrenante-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
    ],
    editorialSections: [
      {
        heading: "Che cosa intendiamo per drenaggio corpo",
        paragraphs: [
          "In REBEL è un massaggio estetico manuale, eseguito con pressioni delicate e adattato alle zone indicate durante la valutazione.",
          "Può essere scelto per il benessere e per una sensazione soggettiva di leggerezza, ma non cura patologie né sostituisce una valutazione medica.",
        ],
      },
      {
        heading: "Seduta singola o calendario",
        paragraphs: [
          "Puoi prenotare un singolo massaggio oppure concordare più appuntamenti, in base all’obiettivo e alle disponibilità.",
          "Se viene proposto un calendario, indichiamo frequenza, costo e momento del controllo senza promettere esiti uguali per tutti.",
        ],
      },
      {
        heading: "Indicazioni dopo la seduta",
        paragraphs: [
          "Al termine spieghiamo come gestire le ore successive in base alla seduta e alle informazioni che ci hai comunicato.",
          "La guida dedicata al linfodrenante approfondisce la manualità e le precauzioni da conoscere prima di prenotare.",
        ],
      },
      {
        heading: "Come può inserirsi in un percorso corpo",
        paragraphs: [
          "Se la pelle e le informazioni raccolte lo consentono, il massaggio può essere programmato nello stesso periodo di uno scrub o alternato a sedute rilassanti.",
          "Prima di proporre più servizi spieghiamo finalità, frequenza, costi e precauzioni di ciascuno.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
      {
        label: "NHS - Oedema (swelling)",
        url: "https://www.nhs.uk/conditions/oedema/",
      },
    ],
  },
  {
    slug: "beauty-routine-carmagnola",
    title: "Beauty routine professionale a Carmagnola",
    shortDescription:
      "Come costruire una routine essenziale per il viso e adattarla ai trattamenti eseguiti in studio.",
    longDescription:
      "Una guida per scegliere detersione, idratazione, protezione solare ed eventuali attivi in base alla pelle. La routine viene adattata quando cambiano stagione, prodotti o trattamenti in studio.",
    localAngle:
      "Pensata per chi desidera indicazioni cosmetiche semplici da seguire tra una seduta e l’altra.",
    intent: "informational",
    benefits: [
      "Aiuta a scegliere i passaggi essenziali della routine",
      "Spiega come introdurre gli attivi con gradualità",
      "Collega i prodotti usati a casa ai trattamenti in studio",
    ],
    faqs: [
      {
        q: "Quanti prodotti servono?",
        a: "La base può comprendere detersione, idratazione e protezione solare adeguata all’esposizione. Gli eventuali attivi si aggiungono in base alle esigenze della pelle e alla tollerabilità.",
      },
      {
        q: "Quando aggiornare la routine?",
        a: "Quando cambiano stagione, obiettivo, condizioni della pelle o trattamenti in studio. È preferibile modificare un prodotto alla volta e osservare la risposta.",
      },
      {
        q: "È meglio cambiare spesso prodotti o restare costante?",
        a: "Cambiare molti prodotti insieme rende difficile capire che cosa è tollerato dalla pelle. Una routine semplice e stabile può essere aggiornata gradualmente quando serve.",
      },
      {
        q: "La protezione solare serve anche in città?",
        a: "La protezione va scelta in base all’esposizione e alle indicazioni associate ai prodotti o ai trattamenti utilizzati. Ti spieghiamo quale livello di protezione considerare e come applicarla.",
      },
    ],
    keywords: [
      "beauty routine Carmagnola",
      "consulenza skincare Carmagnola",
      "cura pelle Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
      "manicure-semipermanente-carmagnola",
      "pedicure-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "pulizia-viso-carmagnola-frequenza-benefici",
      "scrub-corpo-carmagnola-quando-farlo",
      "epilazione-laser-estate-sole-carmagnola",
    ],
    editorialSections: [
      {
        heading: "I passaggi essenziali della routine",
        paragraphs: [
          "In molti casi la base comprende detersione, idratazione e protezione solare adeguata all’esposizione.",
          "Gli eventuali attivi vengono scelti in base all’obiettivo, alla sensibilità e ai prodotti già utilizzati.",
        ],
      },
      {
        heading: "Scegliere la detersione",
        paragraphs: [
          "Un detergente troppo aggressivo può aumentare secchezza o fastidio. La scelta dipende dalle caratteristiche della pelle e dalla frequenza d’uso.",
          "Dopo un trattamento viso possiamo indicare se continuare il prodotto abituale o utilizzare temporaneamente una formula più delicata.",
        ],
      },
      {
        heading: "Come introdurre gli attivi",
        paragraphs: [
          "L’uso contemporaneo di più attivi può aumentare il rischio di irritazione e rende difficile attribuire eventuali reazioni a un prodotto.",
          "Per questo consigliamo di introdurre un cambiamento alla volta e di rispettare modalità e frequenza indicate.",
        ],
      },
      {
        heading: "Quando rivedere la routine",
        paragraphs: [
          "La routine può richiedere modifiche quando cambia la stagione, compare sensibilità o viene eseguito un nuovo trattamento.",
          "Durante l’appuntamento possiamo rivedere i prodotti utilizzati e indicare che cosa mantenere, sospendere o sostituire.",
        ],
      },
      {
        heading: "Protezione solare e trattamenti",
        paragraphs: [
          "La protezione solare va adeguata all’esposizione e alle indicazioni dei trattamenti o degli attivi utilizzati.",
          "Possiamo aiutarti a scegliere una consistenza compatibile con la pelle e a capire quantità e modalità di applicazione.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
      {
        label: "AAD - Face washing 101",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101",
      },
      {
        label: "AAD - How to safely exfoliate at home",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD - How to apply sunscreen",
        url: "https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen",
      },
    ],
  },
  {
    slug: "epilazione-laser-viso-carmagnola-cosa-sapere",
    title: "Epilazione laser viso a Carmagnola: cosa sapere prima di iniziare",
    shortDescription:
      "Come vengono valutati zona, pelle, pelo, calendario e indicazioni prima di iniziare il laser viso.",
    longDescription:
      "Se stai valutando l’epilazione laser viso a Carmagnola, questa guida spiega come prepararti, perché numero e frequenza delle sedute variano e quali informazioni chiedere durante la valutazione.",
    localAngle:
      "Pensata per chi confronta più centri a Carmagnola e vuole conoscere il percorso prima di prenotare.",
    intent: "commercial",
    benefits: [
      "Chiarisce perché numero e frequenza delle sedute possono cambiare",
      "Spiega preparazione e indicazioni dopo la seduta",
      "Indica quali informazioni chiedere durante la valutazione",
    ],
    faqs: [
      {
        q: "L’epilazione laser viso è definitiva?",
        a: "Si parla di riduzione progressiva e prolungata della ricrescita, non di eliminazione garantita per sempre. Possono essere necessari richiami, in base alla zona e alla risposta individuale.",
      },
      {
        q: "Ogni quanto si fanno le sedute viso?",
        a: "Gli intervalli dipendono dalla zona, dalle caratteristiche del pelo e dalla risposta osservata. Proponiamo un calendario iniziale e lo aggiorniamo durante i controlli.",
      },
      {
        q: "Come mi preparo prima della seduta (viso)?",
        a: "Le indicazioni cambiano in base alla zona. In genere la pelle deve essere pulita e durante il percorso va evitata l’epilazione a strappo. Comunica i prodotti e gli attivi che usi sul viso: ti diremo se e quando sospenderli.",
      },
      {
        q: "Cosa succede dopo la seduta? Posso truccarmi?",
        a: "Dipende dalla risposta della pelle e dai prodotti utilizzati. Dopo la seduta ti indichiamo quando applicare trucco e skincare. Se hai un evento, segnalalo prima così possiamo valutare la data più adatta.",
      },
      {
        q: "E se ho pelle sensibile o una zona già irritata?",
        a: "La zona va valutata prima della seduta. Possiamo modificare i parametri o rimandare il trattamento; in presenza di irritazione importante o persistente chiediamo un parere medico.",
      },
    ],
    keywords: [
      "epilazione laser viso Carmagnola",
      "laser baffetti Carmagnola",
      "laser mento Carmagnola",
      "epilazione viso donna Carmagnola",
      "centro laser viso Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "laser-uomo-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Operatrice durante una seduta di epilazione laser su una piccola zona del viso.",
    },
    editorialSections: [
      {
        heading: "Che cosa viene valutato prima di iniziare",
        paragraphs: [
          "Per definire la proposta osserviamo fototipo, sensibilità della pelle, caratteristiche del pelo, zona e prodotti usati sul viso.",
          "Al termine spieghiamo parametri, calendario indicativo, prezzo e istruzioni da seguire prima e dopo la seduta.",
        ],
      },
      {
        heading: "Riduzione progressiva e possibili richiami",
        paragraphs: [
          "L’epilazione laser è finalizzata a una riduzione progressiva e prolungata della ricrescita. Sono previste più sedute e, per alcune persone, richiami nel tempo.",
          "Numero e frequenza non possono essere garantiti in anticipo perché la risposta varia tra persone e zone.",
        ],
      },
      {
        heading: "Baffetti, mento e basette",
        paragraphs: [
          "Ogni area del viso può avere densità del pelo, sensibilità e abitudini di cura diverse. Per questo zone e parametri vengono definiti con precisione.",
          "Prima di iniziare concordiamo i confini dell’area e il modo in cui verranno controllati i cambiamenti.",
        ],
      },
      {
        heading: "Preparazione e indicazioni dopo la seduta",
        paragraphs: [
          "Ti indichiamo come gestire rasoio, esposizione solare, trucco e prodotti cosmetici nei giorni vicini all’appuntamento.",
          "Comunica sempre eventuali reazioni e non introdurre prodotti potenzialmente irritanti senza aver verificato che siano compatibili con la seduta.",
        ],
      },
      {
        heading: "Come riconoscere un centro affidabile a Carmagnola",
        paragraphs: [
          "Durante la consulenza chiedi chi imposta i parametri, quali indicazioni vengono date dopo la seduta e come si modifica il piano se la risposta della pelle cambia.",
          "Il centro dovrebbe spiegare benefici attesi, limiti, possibili reazioni, calendario e prezzo senza garantire un esito identico per tutti.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Choosing who will do your cosmetic procedure",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "epilazione-laser-corpo-carmagnola-zone-tempi",
    title: "Epilazione laser corpo a Carmagnola: zone, tempi e piano sedute",
    shortDescription:
      "Come scegliere le zone da trattare e organizzare calendario, controlli e indicazioni tra le sedute.",
    longDescription:
      "Una guida al laser corpo a Carmagnola: criteri per scegliere le zone, fattori che determinano gli intervalli e gestione di esposizione solare, rasoio e prodotti tra gli appuntamenti.",
    localAngle:
      "Utile se arrivi da Carmagnola o dai comuni vicini e vuoi organizzare uno o più trattamenti sul corpo.",
    intent: "commercial",
    benefits: [
      "Aiuta a scegliere le zone in base alle tue priorità",
      "Spiega come viene impostato il calendario",
      "Raccoglie le indicazioni generali su sole, rasoio e prodotti",
    ],
    faqs: [
      {
        q: "Si possono trattare più zone nello stesso periodo?",
        a: "Sì, se la valutazione lo consente. In consulenza definiamo quali aree trattare nello stesso appuntamento e quali eventualmente programmare in momenti diversi.",
      },
      {
        q: "Estate e laser sono incompatibili?",
        a: "Dipende da esposizione recente, fototipo e zona. Comunica vacanze e attività all’aperto prima di prenotare: valuteremo calendario, protezione e l’eventuale necessità di rimandare la seduta.",
      },
      {
        q: "Da quali zone conviene partire se ho poco tempo o budget?",
        a: "Puoi iniziare dalle zone che richiedono più tempo nella tua routine o che desideri trattare per prime. Durante la valutazione confrontiamo durata, prezzo e calendario delle diverse aree.",
      },
      {
        q: "Tra una seduta e l’altra posso fare ceretta o epilatore?",
        a: "In genere no, perché l’epilazione a strappo rimuove il pelo su cui deve agire il laser. Di solito viene indicato il rasoio; ti comunichiamo modalità e tempi per ciascuna zona.",
      },
      {
        q: "Quante sedute servono per il laser corpo?",
        a: "Il numero varia in base alla zona, alle caratteristiche del pelo e alla risposta individuale. Forniamo una stima iniziale e la aggiorniamo durante i controlli.",
      },
    ],
    keywords: [
      "epilazione laser corpo Carmagnola",
      "laser gambe Carmagnola",
      "laser inguine Carmagnola",
      "laser ascelle Carmagnola",
      "epilazione laser tempi Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-inguine-carmagnola",
      "epilazione-laser-ascelle-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Manipolo per epilazione laser durante un trattamento su una zona del corpo.",
    },
    editorialSections: [
      {
        heading: "Come scegliere le prime zone",
        paragraphs: [
          "Se vuoi trattare più aree, puoi stabilire una priorità in base alla routine, al tempo disponibile e al budget.",
          "Prima di prenotare confrontiamo durata, prezzo e calendario delle zone selezionate.",
        ],
      },
      {
        heading: "Cicli del pelo e intervalli",
        paragraphs: [
          "I peli non si trovano tutti nella stessa fase di crescita e le zone possono richiedere intervalli differenti.",
          "Il calendario iniziale viene quindi controllato e, se necessario, aggiornato insieme ai parametri.",
        ],
      },
      {
        heading: "Sole, vacanze e attività all’aperto",
        paragraphs: [
          "Esposizione recente, abbronzatura e zona trattata possono richiedere di modificare o rimandare una seduta.",
          "Comunica in anticipo vacanze e attività all’aperto: potremo organizzare il calendario e darti indicazioni sulla protezione solare.",
        ],
      },
      {
        heading: "Cura della zona tra le sedute",
        paragraphs: [
          "Dopo ogni appuntamento ricevi indicazioni su rasoio, prodotti, sfregamento, calore ed esposizione solare.",
          "Se la pelle presenta una reazione inattesa o persistente, contatta lo studio prima di applicare nuovi prodotti o fissare la seduta successiva.",
        ],
      },
      {
        heading: "Valutazione, parametri e controlli",
        paragraphs: [
          "Il percorso comprende valutazione iniziale, scelta dei parametri e controlli della risposta di pelle e pelo.",
          "Spieghiamo che cosa trattiamo, perché proponiamo un determinato calendario e quali cambiamenti osserviamo nel tempo.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal overview",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-overview",
      },
      {
        label: "AAD - Laser hair removal preparation",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "epilazione-laser-inguine-carmagnola",
    title: "Laser inguine a Carmagnola: fastidio, preparazione e tempi",
    shortDescription:
      "Laser inguine classico o totale: preparazione, indicazioni tra le sedute e criteri per definire il calendario.",
    longDescription:
      "Se stai valutando il laser inguine a Carmagnola, questa guida spiega la differenza tra classico e totale, come prepararti, quali indicazioni seguire dopo la seduta e come ICE Polar raffredda la pelle durante il trattamento.",
    localAngle:
      "Utile se vuoi conoscere modalità e confini del trattamento prima della valutazione in studio.",
    intent: "commercial",
    benefits: [
      "Aiuta a scegliere tra inguine classico e totale",
      "Chiarisce le indicazioni su rasoio, sole e prodotti",
      "Spiega perché numero e frequenza delle sedute possono variare",
    ],
    faqs: [
      {
        q: "Il laser inguine fa male?",
        a: "La sensibilità varia da persona a persona e la zona può risultare più sensibile di altre. Impostiamo i parametri in modo graduale; ICE Polar raffredda la pelle durante la seduta e può renderla più confortevole.",
      },
      {
        q: "Devo radermi prima della seduta?",
        a: "Di solito sì. Al momento della prenotazione indichiamo quando usare il rasoio e quali prodotti o metodi di epilazione evitare prima dell’appuntamento.",
      },
      {
        q: "Tra una seduta e l’altra posso fare ceretta o epilatore?",
        a: "In genere no, perché l’epilazione a strappo rimuove il pelo su cui deve agire il laser. Di solito viene indicato il rasoio; ti comunichiamo modalità e tempi per la zona.",
      },
      {
        q: "Posso fare il laser inguine in estate?",
        a: "Dipende dall’esposizione recente e prevista. Se hai vacanze in programma, comunicalo prima di prenotare: valuteremo calendario, protezione e l’eventuale necessità di rimandare la seduta.",
      },
      {
        q: "Inguine classico o inguine totale: come si decide?",
        a: "La scelta dipende dalle aree che desideri trattare. Durante la valutazione definiamo con precisione i confini della zona e puoi decidere se iniziare dal classico o dal totale.",
      },
    ],
    keywords: [
      "laser inguine Carmagnola",
      "epilazione laser inguine Carmagnola",
      "laser bikini Carmagnola",
      "laser inguine totale Carmagnola",
    ],
    relatedServiceSlugs: ["epilazione-laser-corpo-carmagnola"],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserInguineGuida,
      alt: "Cabina preparata per una seduta di epilazione laser sulla zona inguine.",
    },
    editorialSections: [
      {
        heading: "Che cosa valutiamo sulla zona inguine",
        paragraphs: [
          "La sensibilità della pelle, le abitudini, l’esposizione solare e i confini dell’area influenzano la proposta.",
          "Prima di iniziare definiamo zona, parametri, calendario e indicazioni da seguire tra gli appuntamenti.",
        ],
      },
      {
        heading: "Raffreddamento con ICE Polar",
        paragraphs: [
          "ICE Polar raffredda la pelle durante la seduta e può ridurre la sensazione di calore. La percezione resta soggettiva.",
          "L’operatrice adatta i parametri alla zona e alla risposta della pelle. Comunica subito qualunque fastidio anomalo durante la seduta.",
        ],
      },
      {
        heading: "Preparazione e indicazioni dopo la seduta",
        paragraphs: [
          "Durante il percorso si evita l’epilazione a strappo. Prodotti, sfregamento ed esposizione solare vanno gestiti secondo le indicazioni ricevute.",
          "Comunica in anticipo sport, vacanze o prodotti applicati sulla zona, così possiamo darti istruzioni specifiche.",
        ],
      },
      {
        heading: "Calendario: quante sedute e perché conta la costanza",
        paragraphs: [
          "Numero e frequenza dipendono dai cicli del pelo e dalla risposta individuale, quindi possono cambiare durante il percorso.",
          "Ai controlli osserviamo la ricrescita e aggiorniamo il calendario o i parametri quando necessario.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal preparation",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "epilazione-laser-ascelle-carmagnola",
    title: "Laser ascelle a Carmagnola: quante sedute e cosa aspettarti",
    shortDescription:
      "Come preparare la zona, organizzare il calendario e seguire le indicazioni tra una seduta e l’altra.",
    longDescription:
      "Il laser ascelle è richiesto da chi desidera ridurre progressivamente la ricrescita in una zona piccola. Questa guida spiega valutazione, preparazione, indicazioni dopo la seduta e fattori che determinano numero e frequenza degli appuntamenti.",
    localAngle:
      "Utile se vuoi iniziare da una zona circoscritta e conoscere prima modalità, tempi e prezzo.",
    intent: "commercial",
    benefits: [
      "Spiega come viene impostato il calendario per le ascelle",
      "Chiarisce le indicazioni su deodorante, sport e sole",
      "Indica quali informazioni vengono raccolte durante la valutazione",
    ],
    faqs: [
      {
        q: "Posso mettere il deodorante prima della seduta?",
        a: "Dipende dal prodotto e dalle indicazioni dello studio. Al momento della prenotazione ti diciamo se sospenderlo e come presentarti alla seduta.",
      },
      {
        q: "Dopo il laser ascelle posso allenarmi?",
        a: "Dipende dalla risposta della pelle e dal tipo di attività. Se sono presenti rossore o sensibilità può essere necessario evitare temporaneamente calore e sfregamento; al termine ricevi indicazioni specifiche.",
      },
      {
        q: "Quante sedute servono per le ascelle?",
        a: "Il numero dipende dalle caratteristiche del pelo e dalla risposta individuale. Forniamo una stima iniziale e la aggiorniamo durante i controlli.",
      },
      {
        q: "Tra una seduta e l’altra posso fare ceretta?",
        a: "In genere si evita l’epilazione a strappo perché rimuove il pelo su cui deve agire il laser. Di solito viene indicato il rasoio, con modalità e tempi comunicati dallo studio.",
      },
    ],
    keywords: [
      "laser ascelle Carmagnola",
      "epilazione laser ascelle Carmagnola",
      "epilazione ascelle Carmagnola",
    ],
    relatedServiceSlugs: ["epilazione-laser-corpo-carmagnola"],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserAscelleGuida,
      alt: "Operatrice durante una seduta di epilazione laser sulla zona ascellare.",
    },
    editorialSections: [
      {
        heading: "Iniziare dalle ascelle",
        paragraphs: [
          "Le ascelle sono una zona circoscritta e possono essere scelte come prima area da trattare.",
          "Durante la valutazione spieghiamo durata della seduta, calendario indicativo, prezzo e istruzioni tra gli appuntamenti.",
        ],
      },
      {
        heading: "Preparazione e indicazioni successive",
        paragraphs: [
          "Prima e dopo la seduta può essere necessario gestire deodorante, prodotti cosmetici, sfregamento, calore ed esposizione solare.",
          "Le indicazioni dipendono dalla pelle e dalla risposta osservata. Se compare una reazione inattesa o persistente, contatta lo studio.",
        ],
      },
      {
        heading: "Calendario e controlli",
        paragraphs: [
          "Gli appuntamenti vengono distanziati in base ai cicli del pelo e alla ricrescita osservata.",
          "Se cambiano esposizione solare, disponibilità o risposta della pelle, possiamo aggiornare intervalli e parametri.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "laser-uomo-carmagnola",
    title: "Laser uomo a Carmagnola: barba, schiena e zone più richieste",
    shortDescription:
      "Epilazione laser su barba, collo, schiena e torace: valutazione delle zone, parametri e calendario.",
    longDescription:
      "Per il laser uomo valutiamo pelle, caratteristiche del pelo, area e obiettivo, come in ogni percorso di epilazione laser. Questa guida raccoglie le informazioni utili per barba, collo, schiena e torace e spiega come gestire la rasatura tra le sedute.",
    localAngle:
      "Utile se cerchi a Carmagnola un percorso laser per il viso o per aree ampie del corpo.",
    intent: "commercial",
    benefits: [
      "Spiega come vengono valutati barba, collo, schiena e torace",
      "Chiarisce perché numero e frequenza delle sedute possono variare",
      "Raccoglie le indicazioni su rasatura e cura della zona",
    ],
    faqs: [
      {
        q: "Si può fare il laser sulla barba?",
        a: "Sì, se la valutazione lo consente. Prima definiamo l’obiettivo, per esempio ridurre la ricrescita o trattare solo collo e contorni, poi concordiamo con precisione le aree.",
      },
      {
        q: "Schiena e torace richiedono più tempo?",
        a: "Sono aree ampie e richiedono sedute più lunghe rispetto a piccole zone. Durata, prezzo e calendario vengono definiti dopo aver stabilito le aree da trattare.",
      },
      {
        q: "Tra una seduta e l’altra posso radermi?",
        a: "Di solito sì. Il rasoio viene generalmente indicato durante il percorso, mentre si evita l’epilazione a strappo perché rimuove il pelo su cui deve agire il laser.",
      },
      {
        q: "Posso iniziare anche se mi espongo al sole per lavoro o sport?",
        a: "Dipende da esposizione, fototipo e zona. Comunica le attività all’aperto prima di prenotare: valuteremo il calendario, la protezione e l’eventuale necessità di rimandare una seduta.",
      },
    ],
    keywords: [
      "laser uomo Carmagnola",
      "epilazione laser uomo Carmagnola",
      "laser barba Carmagnola",
      "laser schiena Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-uomo-carmagnola",
      "epilazione-laser-corpo-uomo-carmagnola",
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "laser-barba-collo-carmagnola",
      "laser-schiena-carmagnola",
      "laser-gambe-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Definire le aree di barba e collo",
        paragraphs: [
          "Puoi scegliere di trattare una parte della barba, il collo o i contorni. Prima di iniziare concordiamo obiettivo e confini della zona.",
          "Se la pelle presenta irritazioni ricorrenti, le valutiamo prima della seduta; sintomi importanti o persistenti richiedono un parere medico.",
        ],
      },
      {
        heading: "Schiena, torace e aree ampie",
        paragraphs: [
          "Per le aree ampie definiamo con precisione le zone, la durata prevista e il calendario prima di iniziare.",
          "È possibile trattare più zone nello stesso appuntamento se la valutazione lo consente e se durata e comfort sono compatibili.",
        ],
      },
      {
        heading: "Rasatura e cura tra le sedute",
        paragraphs: [
          "Tra gli appuntamenti segui le indicazioni ricevute su rasoio, esposizione solare, prodotti e attività fisica.",
          "Se compare una reazione inattesa o persistente, contatta lo studio prima di applicare nuovi prodotti o confermare la seduta successiva.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "laser-barba-collo-carmagnola",
    title: "Laser barba e collo a Carmagnola: zone, rasatura e calendario",
    shortDescription:
      "Come definire le zone di barba e collo, gestire la rasatura e organizzare il calendario delle sedute.",
    longDescription:
      "Il laser su barba e collo viene impostato in base all’obiettivo e alle aree concordate, per esempio collo, zigomi o contorni. Questa guida spiega valutazione, preparazione, rasatura tra gli appuntamenti e fattori che determinano il calendario.",
    localAngle:
      "Pensata per chi vuole ridurre progressivamente la ricrescita su zone precise di barba e collo.",
    intent: "commercial",
    benefits: [
      "Aiuta a definire obiettivo e confini delle zone",
      "Spiega come gestire rasatura e pelle tra le sedute",
      "Chiarisce perché numero e frequenza degli appuntamenti possono variare",
    ],
    faqs: [
      {
        q: "È possibile trattare solo alcune parti della barba?",
        a: "Sì. Prima di iniziare concordiamo con precisione i confini delle aree, per esempio collo, zigomi o contorni, in base al risultato desiderato.",
      },
      {
        q: "Tra una seduta e l’altra posso radermi?",
        a: "Di solito sì. Il rasoio viene generalmente indicato durante il percorso, mentre si evita l’epilazione a strappo perché rimuove il pelo su cui deve agire il laser.",
      },
      {
        q: "Come vi regolate se la pelle è irritata dalla rasatura?",
        a: "Valutiamo la zona prima della seduta e, se necessario, modifichiamo i parametri o rimandiamo il trattamento. Irritazioni importanti, dolore, lesioni o follicolite persistente richiedono una valutazione medica.",
      },
      {
        q: "È una zona più sensibile?",
        a: "Collo e contorni possono risultare sensibili. Impostiamo i parametri in modo graduale; ICE Polar raffredda la pelle durante la seduta e può renderla più confortevole.",
      },
    ],
    keywords: [
      "laser barba Carmagnola",
      "laser collo uomo Carmagnola",
      "epilazione laser barba Carmagnola",
      "laser barba e collo Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-uomo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Prima di tutto: obiettivo e confini della zona",
        paragraphs: [
          "Puoi scegliere di trattare una parte della barba, il collo o i contorni. Durante la valutazione definiamo insieme l’obiettivo e le aree.",
          "Prima di iniziare indichiamo parametri, calendario, prezzo e istruzioni per la rasatura.",
        ],
      },
      {
        heading: "Rasatura tra le sedute",
        paragraphs: [
          "Durante il percorso viene generalmente indicato il rasoio e si evita l’epilazione a strappo.",
          "Comunica prodotti usati, frequenza di rasatura ed eventuali reazioni, così possiamo darti indicazioni adatte alla zona.",
        ],
      },
      {
        heading: "Comfort e regolazione dei parametri",
        paragraphs: [
          "ICE Polar raffredda la pelle durante la seduta; la sensibilità resta comunque soggettiva.",
          "Ai controlli valutiamo la risposta della pelle e del pelo e, se necessario, aggiorniamo parametri o intervalli.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "laser-schiena-carmagnola",
    title: "Laser schiena a Carmagnola: zone, sedute e calendario",
    shortDescription:
      "Come definiamo le aree della schiena, la durata degli appuntamenti e il calendario del percorso laser.",
    longDescription:
      "La schiena può comprendere aree estese o zone più circoscritte, come spalle, parte alta e parte bassa. Prima di iniziare definiamo i confini del trattamento, valutiamo pelle e pelo e indichiamo durata, calendario e istruzioni tra le sedute.",
    localAngle:
      "Utile se stai valutando l’epilazione laser della schiena a Carmagnola e vuoi conoscere modalità, tempi e prezzo.",
    intent: "commercial",
    benefits: [
      "Spiega come vengono definite le aree da trattare",
      "Chiarisce durata, calendario e controlli",
      "Raccoglie le indicazioni su rasatura, sole e prodotti",
    ],
    faqs: [
      {
        q: "Devo radermi prima della seduta schiena?",
        a: "Di solito sì. Al momento della prenotazione indichiamo quando usare il rasoio e quali metodi di epilazione o prodotti evitare prima della seduta.",
      },
      {
        q: "Quanto dura una seduta su una zona ampia?",
        a: "Dipende dall’estensione e dalle aree incluse, per esempio schiena alta, bassa e spalle. Comunichiamo la durata prevista dopo aver definito le zone.",
      },
      {
        q: "Il laser schiena è doloroso?",
        a: "La sensibilità varia tra persone e zone. Impostiamo i parametri in modo graduale; ICE Polar raffredda la pelle durante la seduta e può renderla più confortevole.",
      },
      {
        q: "Posso fare più zone nello stesso appuntamento?",
        a: "Sì, se la valutazione lo consente. Prima concordiamo aree, durata e costo; puoi anche iniziare da una parte della schiena e aggiungere altre zone in seguito.",
      },
    ],
    keywords: [
      "laser schiena Carmagnola",
      "epilazione laser schiena Carmagnola",
      "laser spalle Carmagnola",
      "laser corpo uomo Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-uomo-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Definire le aree prima di iniziare",
        paragraphs: [
          "Schiena alta, parte bassa e spalle possono essere trattate insieme oppure in momenti diversi. La scelta incide sulla durata della seduta e sul prezzo.",
          "Dopo la valutazione proponiamo un calendario iniziale e indichiamo quando verrà controllata la ricrescita.",
        ],
      },
      {
        heading: "Sport, doccia e sole dopo la seduta",
        paragraphs: [
          "Dopo l’appuntamento ricevi indicazioni su calore, sfregamento, prodotti ed esposizione solare in base alla zona trattata.",
          "Se compare una reazione inattesa o persistente, contatta lo studio prima di applicare nuovi prodotti o confermare la seduta successiva.",
        ],
      },
      {
        heading: "Parametri e controlli",
        paragraphs: [
          "La risposta varia da persona a persona. Ai controlli osserviamo pelle, pelo e ricrescita e, se necessario, modifichiamo parametri o intervalli.",
          "Se desideri aggiungere altre aree del corpo, aggiorniamo insieme durata, calendario e costo del percorso.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Preparazione all’epilazione laser",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "AAD — Domande frequenti sull’epilazione laser",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
    ],
  },
  {
    slug: "laser-gambe-carmagnola",
    title: "Laser gambe a Carmagnola: tempi, ricrescita e mantenimento",
    shortDescription:
      "Mezza gamba o gamba intera: valutazione, calendario e indicazioni su sole, sport e rasatura tra le sedute.",
    longDescription:
      "Il laser sulle gambe può interessare mezza gamba, gamba intera o aree definite durante la valutazione. Questa guida spiega come scegliamo zone e parametri, perché gli intervalli possono cambiare e quali indicazioni seguire tra gli appuntamenti.",
    localAngle:
      "Utile se stai valutando il laser gambe a Carmagnola e vuoi confrontare aree, durata e prezzo.",
    intent: "commercial",
    benefits: [
      "Chiarisce la differenza tra mezza gamba e gamba intera",
      "Spiega come viene impostato il calendario",
      "Raccoglie le indicazioni su sole, rasoio e prodotti",
    ],
    faqs: [
      {
        q: "Meglio partire da mezza gamba o gamba intera?",
        a: "Dipende dalle aree che desideri trattare, dal tempo disponibile e dal budget. Durante la valutazione confrontiamo durata e prezzo delle due opzioni.",
      },
      {
        q: "Quante sedute servono per le gambe?",
        a: "Il numero varia in base alla zona, alle caratteristiche del pelo e alla risposta individuale. Forniamo una stima iniziale e la aggiorniamo durante i controlli.",
      },
      {
        q: "Posso fare il laser gambe in estate?",
        a: "Dipende dall’esposizione recente e prevista, dal fototipo e dalla zona. Comunica vacanze e attività all’aperto: valuteremo se programmare, modificare o rimandare la seduta.",
      },
      {
        q: "Tra una seduta e l’altra posso fare ceretta?",
        a: "In genere si evita l’epilazione a strappo perché rimuove il pelo su cui deve agire il laser. Di solito viene indicato il rasoio, con modalità e tempi comunicati dallo studio.",
      },
    ],
    keywords: [
      "laser gambe Carmagnola",
      "epilazione laser gambe Carmagnola",
      "laser mezza gamba Carmagnola",
      "laser gamba intera Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-corpo-uomo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserGambeGuida,
      alt: "Operatrice durante una seduta di epilazione laser sulla gamba.",
    },
    editorialSections: [
      {
        heading: "Come organizziamo il calendario",
        paragraphs: [
          "Gli intervalli dipendono dai cicli del pelo e dalla ricrescita osservata sulla zona trattata.",
          "Dopo la valutazione proponiamo le prime date e spieghiamo quando verranno controllati i cambiamenti.",
        ],
      },
      {
        heading: "Esposizione solare e attività all’aperto",
        paragraphs: [
          "Abbronzatura ed esposizione recente possono richiedere di cambiare data o parametri. Per questo è importante comunicare vacanze e sport all’aperto.",
          "Prima e dopo la seduta ricevi indicazioni specifiche sulla protezione solare per le zone esposte.",
        ],
      },
      {
        heading: "Indicazioni dopo la seduta",
        paragraphs: [
          "Ti indichiamo come gestire prodotti, calore, sfregamento e attività fisica in base alla risposta della pelle.",
          "In presenza di una reazione inattesa o persistente, contatta lo studio prima di applicare altri prodotti.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Domande frequenti sull’epilazione laser",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic — Epilazione laser",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
    ],
  },
  {
    slug: "epilazione-laser-estate-sole-carmagnola",
    title: "Laser in estate a Carmagnola: sole, protezione e calendario",
    shortDescription:
      "Come valutare esposizione, abbronzatura e vacanze prima di programmare una seduta laser.",
    longDescription:
      "L’esposizione solare recente o prevista può richiedere di modificare o rimandare una seduta laser. Questa guida spiega quali informazioni comunicare, come viene organizzato il calendario e quali indicazioni seguire per la protezione delle zone trattate.",
    localAngle:
      "Pensata per chi vuole programmare il laser a Carmagnola in presenza di vacanze o attività all’aperto.",
    intent: "informational",
    benefits: [
      "Spiega quali informazioni dare su sole e abbronzatura",
      "Chiarisce quando la seduta può dover essere rimandata",
      "Indica come inserire vacanze e attività all’aperto nel calendario",
    ],
    faqs: [
      {
        q: "Si può fare il laser in estate?",
        a: "Dipende dall’esposizione recente e prevista, dal fototipo e dalla zona. Prima di prenotare valutiamo questi elementi e, se necessario, rimandiamo la seduta.",
      },
      {
        q: "Se ho preso sole o mi sono abbronzata devo fermarmi?",
        a: "Comunicalo sempre allo studio. La decisione dipende da quanto è recente l’esposizione, dal grado di abbronzatura, dalla zona e dalle condizioni della pelle.",
      },
      {
        q: "Come devo gestire la protezione solare?",
        a: "Segui le indicazioni ricevute per le zone trattate e comunica eventuali esposizioni. Tipo di prodotto, modalità e durata d’uso dipendono dalla zona e dal periodo.",
      },
      {
        q: "Posso programmare il laser prima di una vacanza?",
        a: "La data va valutata in base alla destinazione, all’esposizione prevista e alla zona. Comunica la vacanza prima di fissare l’appuntamento.",
      },
    ],
    keywords: [
      "laser estate Carmagnola",
      "epilazione laser estate Carmagnola",
      "laser e sole Carmagnola",
      "laser prima vacanze Carmagnola",
      "SPF dopo laser Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-inverno-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "laser-gambe-carmagnola",
      "epilazione-laser-inguine-carmagnola",
      "epilazione-laser-ascelle-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserSoleGuida,
      alt: "Agenda, protezione solare e luce estiva per programmare le sedute laser.",
    },
    editorialSections: [
      {
        heading: "Che cosa valutare prima di prenotare",
        paragraphs: [
          "Comunica abbronzatura, esposizione recente, vacanze e attività all’aperto. Sono informazioni necessarie per valutare la seduta.",
          "In base a pelle, zona e calendario possiamo confermare l’appuntamento, modificarlo o rimandarlo.",
        ],
      },
      {
        heading: "Vacanze e attività all’aperto",
        paragraphs: [
          "Se conosci già le date di una vacanza, inseriscile nel calendario prima di iniziare il percorso.",
          "Può essere opportuno cambiare l’ordine delle zone o spostare una seduta, soprattutto quando le aree saranno esposte.",
        ],
      },
      {
        heading: "Protezione delle zone trattate",
        paragraphs: [
          "Lo studio fornisce indicazioni su protezione solare, abbigliamento e prodotti da applicare sulle aree trattate.",
          "Se la pelle presenta arrossamento o sensibilità, evita di aggiungere prodotti non concordati e contatta lo studio in caso di dubbio.",
        ],
      },
      {
        heading: "Quando la seduta può essere rimandata",
        paragraphs: [
          "Abbronzatura recente, irritazione o un’esposizione intensa già programmata possono rendere necessario spostare l’appuntamento.",
          "La decisione viene presa dopo aver valutato la zona; non nascondere esposizioni o reazioni della pelle.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Domande frequenti sull’epilazione laser",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic — Epilazione laser",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS — Epilazione laser",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "epilazione-laser-inverno-carmagnola",
    title: "Laser in inverno a Carmagnola: calendario e protezione",
    shortDescription:
      "Come programmare le sedute in inverno e aggiornare il calendario quando aumenta l’esposizione solare.",
    longDescription:
      "In inverno le zone del corpo sono spesso meno esposte, ma sole, abbronzatura e condizioni della pelle vanno comunque considerati. Questa guida spiega come scegliere le prime aree, gestire rasatura e prodotti e rivedere il calendario in primavera.",
    localAngle:
      "Pensata per chi vuole iniziare un percorso laser a Carmagnola durante i mesi invernali.",
    intent: "informational",
    benefits: [
      "Aiuta a scegliere le prime zone da trattare",
      "Chiarisce le indicazioni su rasatura, prodotti e pelle sensibile",
      "Spiega come aggiornare il calendario in primavera",
    ],
    faqs: [
      {
        q: "Quanto prima dell’estate conviene iniziare?",
        a: "Non esiste una data uguale per tutti. Il calendario dipende da zone, pelo, esposizione prevista e disponibilità; durante la valutazione ricevi una stima degli appuntamenti.",
      },
      {
        q: "In inverno la pelle è più secca: è un problema?",
        a: "La secchezza o la sensibilità vanno comunicate prima della seduta. Possiamo adattare i parametri e indicare quali prodotti utilizzare o sospendere sulla zona.",
      },
      {
        q: "Che zone conviene fare per prime?",
        a: "Dipende dalle tue priorità, dal tempo e dal budget. Durante la valutazione confrontiamo durata e prezzo di ascelle, inguine, gambe o altre aree.",
      },
      {
        q: "Se faccio sport posso comunque iniziare in inverno?",
        a: "Sì, ma allenamenti, calore e sfregamento vanno considerati nel calendario. Comunica la tua attività prima di prenotare e segui le indicazioni ricevute dopo la seduta.",
      },
      {
        q: "In inverno posso ignorare la protezione?",
        a: "No. Le zone esposte richiedono protezione anche nei mesi freddi, secondo le indicazioni dello studio e in base alle attività all’aperto.",
      },
    ],
    keywords: [
      "laser inverno Carmagnola",
      "epilazione laser inverno Carmagnola",
      "quando iniziare laser Carmagnola",
      "laser primavera Carmagnola",
      "calendario sedute laser Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "epilazione-laser-inguine-carmagnola",
      "epilazione-laser-ascelle-carmagnola",
      "laser-gambe-carmagnola",
      "peli-incarniti-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserInvernoGuida,
      alt: "Agenda delle sedute laser accanto a prodotti per la cura della pelle in inverno.",
    },
    editorialSections: [
      {
        heading: "Iniziare il percorso in inverno",
        paragraphs: [
          "Per molte persone l’inverno comporta una minore esposizione delle zone del corpo e rende più semplice programmare gli appuntamenti.",
          "Questo non elimina le precauzioni: abbronzatura, sport all’aperto e condizioni della pelle vanno sempre comunicati.",
        ],
      },
      {
        heading: "Scegliere l’ordine delle zone",
        paragraphs: [
          "Puoi iniziare da una sola area oppure trattarne più di una nello stesso periodo, se la valutazione lo consente.",
          "Confrontiamo durata, prezzo e calendario delle diverse zone prima di definire la proposta.",
        ],
      },
      {
        heading: "Pelle secca, docce calde e attrito",
        paragraphs: [
          "Freddo, docce calde e tessuti pesanti possono aumentare secchezza o sensibilità in alcune persone.",
          "Se la zona cambia, comunicalo: potremo aggiornare parametri, data o indicazioni sui prodotti.",
        ],
      },
      {
        heading: "Aggiornare il calendario in primavera",
        paragraphs: [
          "Con l’aumento dell’esposizione solare può essere necessario cambiare intervalli o zone trattate.",
          "Comunica per tempo vacanze e attività all’aperto, così lo studio può rivedere le date prima dell’appuntamento.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Domande frequenti sull’epilazione laser",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic — Indicazioni dopo l’epilazione laser",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS — Epilazione laser",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "laser-e-palestra-sport-carmagnola",
    title: "Laser e palestra a Carmagnola: sport, doccia e calore",
    shortDescription:
      "Come organizzare allenamento, doccia e attività che producono calore nei giorni vicini alla seduta laser.",
    longDescription:
      "Dopo una seduta la zona può presentare rossore o sensibilità. Questa guida spiega quali informazioni dare sul tuo allenamento e come gestire calore, sudore e sfregamento secondo le indicazioni ricevute dallo studio.",
    localAngle:
      "Pensata per chi si allena regolarmente e vuole programmare le sedute laser a Carmagnola.",
    intent: "informational",
    benefits: [
      "Chiarisce come inserire gli allenamenti nel calendario",
      "Spiega che cosa considerare per calore, sudore e sfregamento",
      "Indica quando contattare lo studio dopo una reazione inattesa",
    ],
    faqs: [
      {
        q: "Posso allenarmi lo stesso il giorno della seduta?",
        a: "Dipende dalla zona, dalla risposta della pelle e dal tipo di attività. Comunica gli allenamenti prima di prenotare e segui le indicazioni ricevute sul tempo da lasciare tra seduta e sport.",
      },
      {
        q: "Doccia calda, sauna e bagno turco?",
        a: "Il calore intenso può essere sconsigliato quando la zona è arrossata o sensibile. Lo studio ti indica quando riprendere queste attività in base al trattamento e alla risposta della pelle.",
      },
      {
        q: "Quali zone risentono di più dello sport?",
        a: "Ascelle e inguine sono spesso esposte a sudore e attrito; sulle gambe possono incidere tessuti aderenti o attività con sfregamento. Le indicazioni vengono adattate alla zona.",
      },
      {
        q: "Se mi alleno tutti i giorni, ha senso iniziare?",
        a: "Può essere possibile, ma il calendario va organizzato intorno agli allenamenti e alla risposta della pelle. Portare con te il programma settimanale aiuta a scegliere le date.",
      },
      {
        q: "Quanto dura il rossore dopo il laser?",
        a: "La durata varia in base a pelle e zona. Segui le indicazioni ricevute; se il rossore è intenso, peggiora o persiste oltre il tempo indicato, contatta lo studio e valuta un parere medico.",
      },
    ],
    keywords: [
      "laser e palestra Carmagnola",
      "sport dopo laser Carmagnola",
      "doccia dopo laser Carmagnola",
      "sauna dopo laser Carmagnola",
      "laser e sudore ascelle inguine",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-inverno-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "epilazione-laser-ascelle-carmagnola",
      "epilazione-laser-inguine-carmagnola",
      "laser-gambe-carmagnola",
      "peli-incarniti-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserPalestraGuida,
      alt: "Abbigliamento sportivo e agenda accanto alle indicazioni per una seduta laser.",
    },
    editorialSections: [
      {
        heading: "Calore e sfregamento dopo la seduta",
        paragraphs: [
          "La zona può presentare rossore o sensibilità. Sudore, tessuti aderenti e calore possono aumentare il fastidio in alcune persone.",
          "Comunica gli allenamenti prima dell’appuntamento, così potrai ricevere indicazioni specifiche sui tempi di ripresa.",
        ],
      },
      {
        heading: "Ascelle, inguine e tessuti aderenti",
        paragraphs: [
          "Su ascelle e inguine vanno considerati sudore, attrito, deodoranti e tessuti. Per le gambe possono incidere leggings o protezioni sportive.",
          "Se non sai se riprendere un’attività, contatta lo studio e descrivi la zona e la reazione osservata.",
        ],
      },
      {
        heading: "Come pianificare sedute e allenamenti",
        paragraphs: [
          "Condividi giorni, intensità e tipo di allenamento durante la valutazione. Lo studio potrà proporti date compatibili con le indicazioni successive.",
          "Se una gara o una sessione intensa cambia programma, avvisa prima della seduta.",
        ],
      },
      {
        heading: "Che cosa osservare dopo la seduta",
        paragraphs: [
          "Osserva rossore, sensibilità e calore della zona e segui le istruzioni consegnate al termine dell’appuntamento.",
          "Contatta lo studio per reazioni inattese; dolore importante, vescicole o sintomi persistenti richiedono una valutazione medica.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic — Epilazione laser",
        url: "https://my.clevelandclinic.org/health/treatments/21757-laser-hair-removal",
      },
      {
        label: "Mayo Clinic — Indicazioni dopo l’epilazione laser",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "Leeds Teaching Hospitals NHS Trust — Dopo il trattamento laser",
        url: "https://www.leedsth.nhs.uk/patients/resources/after-your-laser-treatment/",
      },
    ],
  },
  {
    slug: "peli-incarniti-laser-carmagnola",
    title: "Peli incarniti a Carmagnola: quando valutare l’epilazione laser",
    shortDescription:
      "Cura cosmetica della zona e criteri usati per valutare l’epilazione laser in presenza di peli incarniti.",
    longDescription:
      "I peli incarniti possono essere accompagnati da rossore e fastidio, soprattutto nelle zone soggette a rasatura o attrito. Qui trovi indicazioni cosmetiche generali e i criteri usati per valutare un percorso laser; in presenza di dolore, lesioni o infiammazione persistente è necessario rivolgersi a un medico.",
    localAngle:
      "Utile se vuoi valutare a Carmagnola la gestione cosmetica di peli incarniti su gambe, inguine o ascelle.",
    intent: "commercial",
    benefits: [
      "Spiega quali abitudini possono contribuire al problema",
      "Indica quando evitare scrub e prodotti irritanti",
      "Chiarisce quando chiedere un parere medico prima del laser",
    ],
    faqs: [
      {
        q: "Lo scrub risolve i peli incarniti?",
        a: "Non sempre. Un’esfoliazione delicata può essere utile in alcuni casi, ma su pelle irritata, lesionata o infiammata può peggiorare il fastidio. Prima di applicare uno scrub valuta le condizioni della zona.",
      },
      {
        q: "Ceretta e pinzetta peggiorano?",
        a: "Possono contribuire in alcune persone, ma la risposta dipende da zona, pelo e pelle. Se il problema è ricorrente, evita interventi aggressivi e chiedi una valutazione.",
      },
      {
        q: "Il laser funziona se ho peli incarniti frequenti?",
        a: "La riduzione progressiva della ricrescita può rendere meno frequente il problema in alcune persone. Prima di iniziare valutiamo pelle, pelo e zona; se sono presenti dolore, lesioni o infiammazione persistente chiediamo un parere medico.",
      },
      {
        q: "Quali zone sono le più problematiche?",
        a: "Inguine, ascelle e gambe sono zone spesso soggette a rasatura e attrito. Dolore, lesioni o infiammazione persistente non vanno trattati come un semplice problema estetico.",
      },
    ],
    keywords: [
      "peli incarniti Carmagnola",
      "laser peli incarniti Carmagnola",
      "peli sottopelle inguine Carmagnola",
      "peli incarniti ascelle Carmagnola",
      "peli incarniti gambe Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.peliIncarniti,
      alt: "Dettaglio della pelle della gamba per una guida sui peli incarniti.",
    },
    editorialSections: [
      {
        heading: "Ricrescita, rasatura e attrito: che cosa osservare",
        paragraphs: [
          "Quando il pelo fatica a emergere possono comparire rossore e fastidio. Rasatura, ceretta e attrito possono contribuire, ma non tutte le situazioni hanno la stessa causa.",
          "Per la cura cosmetica della zona preferiamo gesti delicati. Dolore, lesioni o infiammazione persistente richiedono invece una valutazione medica.",
        ],
      },
      {
        heading: "Quando valutare lo scrub",
        paragraphs: [
          "Lo scrub non va applicato su una zona irritata, lesionata o infiammata. Su pelle integra può essere valutata un’esfoliazione delicata.",
          "Se stai seguendo un percorso laser, chiedi quando sospendere e riprendere i prodotti esfolianti.",
        ],
      },
      {
        heading: "Quando valutare il laser",
        paragraphs: [
          "Riducendo progressivamente la ricrescita, l’epilazione laser può semplificare la gestione di alcune zone soggette a peli incarniti.",
          "Prima di iniziare valutiamo pelle, pelo e zona, poi definiamo parametri, calendario e controlli. Il trattamento estetico non sostituisce una valutazione medica quando sono presenti sintomi persistenti.",
        ],
      },
      {
        heading: "Scegliere le prime zone",
        paragraphs: [
          "Puoi iniziare da una o due aree e valutare la risposta prima di aggiungerne altre.",
          "Durante la valutazione definiamo zone, calendario, preparazione e costo del percorso.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic — Peli incarniti",
        url: "https://my.clevelandclinic.org/health/diseases/17722-ingrown-hair",
      },
      {
        label: "Mayo Clinic — Peli incarniti",
        url: "https://www.mayoclinic.org/diseases-conditions/ingrown-hair/symptoms-causes/syc-20373893",
      },
      {
        label: "AAD — Epilazione laser: panoramica",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-overview",
      },
    ],
  },
  {
    slug: "contorno-occhi-gonfiore-occhiaie-carmagnola",
    title: "Contorno occhi a Carmagnola: gonfiore, occhiaie e cura cosmetica",
    shortDescription:
      "Come scegliere prodotti e trattamenti estetici per il contorno occhi e quando è opportuno chiedere un parere medico.",
    longDescription:
      "Gonfiore e occhiaie possono avere caratteristiche e cause diverse. Questa guida riguarda la cura cosmetica della zona: detersione, prodotti delicati e trattamenti estetici. Un gonfiore improvviso, persistente, doloroso o associato ad altri sintomi richiede una valutazione medica.",
    localAngle:
      "Utile se vuoi valutare a Carmagnola una routine o un trattamento estetico per il contorno occhi.",
    intent: "informational",
    benefits: [
      "Distingue la cura cosmetica dalle condizioni da valutare con un medico",
      "Spiega come detergere e applicare i prodotti sulla zona",
      "Descrive il protocollo estetico disponibile in REBEL",
    ],
    faqs: [
      {
        q: "Occhiaie e gonfiore sono la stessa cosa?",
        a: "No. Il gonfiore riguarda un aumento di volume, mentre l’aspetto delle occhiaie può dipendere da pigmentazione, anatomia e trasparenza della pelle. Un trattamento estetico non può intervenire su tutte le cause.",
      },
      {
        q: "Posso usare qualunque crema occhi?",
        a: "È preferibile scegliere prodotti formulati per la zona e seguire le modalità d’uso. Se compaiono bruciore, gonfiore o irritazione, sospendi il prodotto e chiedi indicazioni a un professionista sanitario.",
      },
      {
        q: "Come struccare il contorno occhi?",
        a: "Usa un prodotto adatto e movimenti delicati, evitando sfregamenti ripetuti. Se porti lenti a contatto o hai una condizione oculare, segui le indicazioni del medico oculista.",
      },
      {
        q: "Quando ha senso un percorso in studio?",
        a: "Quando desideri una cura cosmetica professionale della zona e la valutazione non evidenzia motivi per rimandare. In REBEL il protocollo dedicato è Eye Genesis; durante la consulenza ne spieghiamo obiettivi estetici e limiti.",
      },
    ],
    keywords: [
      "contorno occhi Carmagnola",
      "occhiaie Carmagnola trattamento",
      "gonfiore contorno occhi Carmagnola",
      "trattamento occhi Carmagnola",
    ],
    relatedServiceSlugs: ["laminazione-ciglia-sopracciglia-carmagnola", "pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    relatedProtocolSlugs: ["eye-genesis"],
    editorialSections: [
      {
        heading: "Prodotti e detersione della zona",
        paragraphs: [
          "La pelle del contorno occhi è sottile e può reagire a sfregamenti o prodotti non adatti. Detersione e applicazione richiedono movimenti delicati.",
          "Durante la valutazione chiediamo quali cosmetici usi e segnaliamo quelli da sospendere prima o dopo il trattamento.",
        ],
      },
      {
        heading: "Gonfiore e occhiaie: limiti del trattamento estetico",
        paragraphs: [
          "Aspetto e intensità possono variare, ma non tutte le cause sono cosmetiche. Per questo non promettiamo di eliminare gonfiore o occhiaie.",
          "Un cambiamento improvviso, persistente, doloroso o asimmetrico deve essere valutato da un medico prima di prenotare un trattamento estetico.",
        ],
      },
      {
        heading: "Il protocollo Eye Genesis",
        paragraphs: [
          "Eye Genesis è il protocollo estetico REBEL dedicato al contorno occhi. La proposta viene adattata alla sensibilità della zona e all’obiettivo cosmetico.",
          "Prima di iniziare spieghiamo trattamenti previsti, frequenza, costo, risultati osservabili e limiti.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "pelle-matura-carmagnola-trattamenti-routine",
    title: "Pelle matura a Carmagnola: comfort, luminosità e routine",
    shortDescription:
      "Come adattare trattamenti viso e prodotti quando la pelle diventa più secca o sensibile.",
    longDescription:
      "Con il tempo la pelle può diventare più secca, sottile o sensibile. In REBEL partiamo da una valutazione estetica e scegliamo trattamento, frequenza e routine in base alle condizioni osservate, senza promettere di modificare i processi biologici dell’invecchiamento.",
    localAngle:
      "Pensata per chi cerca a Carmagnola trattamenti viso e indicazioni cosmetiche adatti a una pelle matura.",
    intent: "commercial",
    benefits: [
      "Spiega come viene valutata una pelle matura",
      "Aiuta a scegliere una routine essenziale e tollerabile",
      "Descrive i protocolli REBEL collegati a comfort, tono e luminosità",
    ],
    faqs: [
      {
        q: "Che cosa si intende per pelle matura?",
        a: "È un’espressione cosmetica usata quando la pelle mostra cambiamenti legati al tempo, come maggiore secchezza, minore elasticità o sensibilità. La valutazione serve a scegliere prodotti e trattamenti adatti alle condizioni presenti.",
      },
      {
        q: "Serve per forza fare tanti trattamenti?",
        a: "No. Puoi iniziare da un solo trattamento o da una routine essenziale. Se viene proposto un percorso, frequenza e controlli vengono spiegati prima di iniziare.",
      },
      {
        q: "Se la pelle è reattiva conviene evitare tutto?",
        a: "Non necessariamente. Valutiamo sensibilità e prodotti già utilizzati e possiamo scegliere una seduta più delicata o rimandare. Una reazione importante o persistente richiede un parere dermatologico.",
      },
      {
        q: "Da cosa conviene partire se la pelle appare secca e opaca?",
        a: "Da una valutazione e da una routine delicata. La pulizia viso può essere proposta se adatta alla pelle; in alternativa scegliamo un trattamento orientato a idratazione, comfort o luminosità.",
      },
      {
        q: "Che cosa posso fare a casa?",
        a: "Una routine può comprendere detersione delicata, idratazione e protezione solare adeguata all’esposizione. Gli eventuali attivi vanno introdotti gradualmente e in base alla tollerabilità.",
      },
      {
        q: "È utile fare trattamenti ravvicinati?",
        a: "Dipende dal trattamento e dalla pelle. Una frequenza eccessiva può aumentare la sensibilità; definiamo il calendario dopo la valutazione e lo aggiorniamo ai controlli.",
      },
    ],
    keywords: [
      "pelle matura Carmagnola",
      "trattamenti viso pelli mature Carmagnola",
      "routine pelle matura Carmagnola",
      "comfort pelle viso Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    relatedProtocolSlugs: ["rebirth-60-plus", "collagen-code"],
    editorialSections: [
      {
        heading: "Valutazione e scelta del trattamento",
        paragraphs: [
          "Prima della seduta osserviamo secchezza, sensibilità, uniformità e prodotti usati a casa.",
          "Queste informazioni guidano la scelta di tecnica, intensità e frequenza e aiutano a evitare combinazioni poco tollerate.",
        ],
      },
      {
        heading: "Comfort, tono e luminosità",
        paragraphs: [
          "Gli obiettivi estetici vengono concordati in base alle condizioni della pelle e non hanno lo stesso esito per tutte le persone.",
          "Rebirth 60+ è il protocollo REBEL dedicato alle esigenze cosmetiche della pelle matura; durante la valutazione ne spieghiamo contenuto, frequenza e limiti.",
        ],
      },
      {
        heading: "Routine a casa",
        paragraphs: [
          "Una routine essenziale può comprendere detersione, idratazione e protezione solare. Gli attivi vengono scelti in base a sensibilità e obiettivo.",
          "Dopo la seduta indichiamo quali prodotti mantenere, sospendere o introdurre e con quale frequenza.",
        ],
      },
      {
        heading: "Quando valutare un protocollo dedicato",
        paragraphs: [
          "Puoi scegliere una seduta singola oppure valutare un percorso quando desideri controlli e più appuntamenti.",
          "Collagen Code è uno dei protocolli REBEL collegati a tono e densità percepita. La proposta viene formulata dopo la valutazione e non garantisce cambiamenti strutturali.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
      {
        label: "AAD — Invecchiamento cutaneo",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/skin/skin-aging",
      },
    ],
  },
  {
    slug: "pelle-opaca-grana-irregolare-carmagnola",
    title: "Pelle opaca a Carmagnola: grana irregolare e trattamenti viso",
    shortDescription:
      "Come valutare luminosità, uniformità e sensibilità prima di scegliere prodotti o trattamenti viso.",
    longDescription:
      "Se la pelle appare opaca o irregolare, osserviamo sensibilità, impurità superficiali, idratazione e routine. In base alla valutazione possiamo proporre una pulizia viso, un trattamento dedicato o una semplificazione dei prodotti usati a casa.",
    localAngle:
      "Utile se cerchi a Carmagnola una valutazione estetica per pelle opaca o grana irregolare.",
    intent: "commercial",
    benefits: [
      "Spiega che cosa osserviamo durante la valutazione",
      "Aiuta a scegliere tra pulizia viso e trattamento dedicato",
      "Indica come modificare la routine con gradualità",
    ],
    faqs: [
      {
        q: "Perché la pelle diventa opaca anche se la idrato?",
        a: "L’aspetto può dipendere da più fattori, tra cui idratazione, esfoliazione, prodotti e condizioni della pelle. Una valutazione estetica non sostituisce il dermatologo se il cambiamento è improvviso o persistente.",
      },
      {
        q: "Devo esfoliare di più per avere più luce?",
        a: "Non necessariamente. Un’esfoliazione eccessiva può aumentare secchezza o irritazione. Frequenza e prodotto vanno scelti in base alla sensibilità e agli altri attivi utilizzati.",
      },
      {
        q: "La pulizia viso basta?",
        a: "Dipende dalle condizioni osservate e dall’obiettivo. Può essere proposta per impurità superficiali; per altre esigenze possiamo consigliare un trattamento o una routine diversa.",
      },
      {
        q: "Che cosa posso fare a casa?",
        a: "Mantieni una routine essenziale e modifica un prodotto alla volta. Gli eventuali attivi vanno introdotti gradualmente e sospesi se causano irritazione.",
      },
    ],
    keywords: [
      "pelle opaca Carmagnola",
      "grana pelle irregolare Carmagnola",
      "pelle spenta Carmagnola trattamento",
      "reset pelle Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: ["trattamenti-viso-carmagnola", "beauty-routine-carmagnola"],
    relatedProtocolSlugs: ["catalysis-ritual"],
    editorialSections: [
      {
        heading: "Che cosa valutiamo sulla pelle opaca",
        paragraphs: [
          "Osserviamo uniformità, impurità superficiali, secchezza, sensibilità e prodotti usati a casa.",
          "Se la routine comprende molti attivi, può essere utile semplificarla e introdurre le modifiche una alla volta.",
        ],
      },
      {
        heading: "Pulizia viso o protocollo dedicato",
        paragraphs: [
          "La pulizia viso può essere indicata in presenza di impurità superficiali, mentre altre esigenze richiedono una proposta diversa.",
          "Catalysis Ritual è il protocollo REBEL collegato a comfort e luminosità. Durante la valutazione ne spieghiamo contenuto, frequenza e limiti.",
        ],
      },
      {
        heading: "Calendario e cura a casa",
        paragraphs: [
          "Se sono previsti più appuntamenti, definiamo frequenza e momento del controllo prima di iniziare.",
          "A casa indichiamo quali prodotti mantenere e come introdurre eventuali cambiamenti senza sovrapporre troppi attivi.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "tono-viso-ovale-carmagnola-percorso",
    title: "Tono viso e ovale a Carmagnola: valutazione e percorso",
    shortDescription:
      "Come definiamo obiettivi, trattamenti e controlli per chi desidera lavorare sull’aspetto del tono e dell’ovale.",
    longDescription:
      "Per lavorare in ambito estetico sull’aspetto del tono e dell’ovale partiamo dalle condizioni della pelle e da un obiettivo concordato. La proposta può comprendere uno o più trattamenti e controlli, senza garantire un effetto lifting o un cambiamento strutturale.",
    localAngle:
      "Utile se cerchi a Carmagnola un trattamento viso con obiettivi, frequenza e costi spiegati prima di iniziare.",
    intent: "commercial",
    benefits: [
      "Chiarisce gli obiettivi estetici e i limiti del trattamento",
      "Spiega come vengono definiti calendario e controlli",
      "Descrive i protocolli REBEL collegati a tono e ovale",
    ],
    faqs: [
      {
        q: "Quanto tempo ci vuole per vedere un cambiamento sul tono?",
        a: "Dipende dalle condizioni della pelle e dal trattamento scelto. Prima di iniziare spieghiamo quali cambiamenti estetici possono essere osservati e quando è previsto il controllo.",
      },
      {
        q: "Serve fare tante cose insieme?",
        a: "No. La proposta può comprendere un solo trattamento oppure più appuntamenti. Contenuto e frequenza vengono scelti dopo la valutazione.",
      },
      {
        q: "Da cosa si parte di solito?",
        a: "Da una valutazione della pelle e dell’obiettivo. La pulizia viso può essere proposta se indicata, oppure si può iniziare direttamente da un protocollo dedicato.",
      },
      {
        q: "Che cosa posso fare a casa?",
        a: "Segui le indicazioni su detersione, idratazione, protezione solare ed eventuali attivi. I prodotti vengono scelti in base alla pelle e al trattamento eseguito.",
      },
    ],
    keywords: [
      "tono viso Carmagnola",
      "ovale viso Carmagnola",
      "viso compatto Carmagnola",
      "trattamento tono viso Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: ["trattamenti-viso-carmagnola", "estetica-avanzata-carmagnola"],
    relatedProtocolSlugs: ["rebel-lift-protocol", "collagen-code"],
    editorialSections: [
      {
        heading: "Definire l’obiettivo estetico",
        paragraphs: [
          "Durante la valutazione descrivi il cambiamento che desideri e indica i prodotti o trattamenti già utilizzati.",
          "Spieghiamo che cosa può offrire il percorso estetico e quali risultati non può garantire.",
        ],
      },
      {
        heading: "Calendario e controlli",
        paragraphs: [
          "Se viene proposto un percorso, indichiamo numero previsto di appuntamenti, frequenza, costi e momento del controllo.",
          "La proposta può essere aggiornata in base alla risposta della pelle e alle tue disponibilità.",
        ],
      },
      {
        heading: "Rebel Lift Protocol e Collagen Code",
        paragraphs: [
          "Rebel Lift Protocol è collegato agli obiettivi estetici di tono e ovale; Collagen Code è collegato a compattezza e densità percepita.",
          "La scelta tra i protocolli avviene dopo la valutazione e non implica un risultato medico o strutturale.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola-durata-rimozione",
    title: "Semipermanente a Carmagnola: durata, ricrescita e rimozione",
    shortDescription:
      "Che cosa influisce sulla durata e come gestire ricrescita, sollevamenti e rimozione.",
    longDescription:
      "La durata del semipermanente varia in base a ricrescita, preparazione, lunghezza e uso delle mani. Questa guida spiega quando programmare il nuovo appuntamento, che cosa fare in caso di sollevamento e perché il prodotto non va strappato dall’unghia.",
    localAngle:
      "Utile se cerchi una manicure semipermanente a Carmagnola e vuoi conoscere durata e modalità di rimozione.",
    intent: "informational",
    benefits: [
      "Spiega quali fattori possono modificare la durata",
      "Indica che cosa fare in caso di sollevamento o scheggiatura",
      "Chiarisce perché il prodotto non va strappato",
    ],
    faqs: [
      {
        q: "Quanto dura in genere il semipermanente?",
        a: "In genere circa due–tre settimane, ma ricrescita, lunghezza, detergenti e lavori manuali possono modificare la durata.",
      },
      {
        q: "È normale che si sollevi prima su alcune unghie?",
        a: "Può succedere, soprattutto sulle dita più utilizzate. Non tirare il prodotto e non coprire il sollevamento: contatta lo studio per valutare una sistemazione o la rimozione.",
      },
      {
        q: "La rimozione può danneggiare l’unghia?",
        a: "Strappare il prodotto o limare in modo eccessivo può assottigliare la superficie dell’unghia. Per questo consigliamo una rimozione professionale o il rispetto delle istruzioni specifiche del prodotto.",
      },
      {
        q: "Posso rimuoverlo da sola a casa?",
        a: "È preferibile prenotare la rimozione. Se scegli di farla a casa, segui le indicazioni del produttore e non forzare il prodotto; interrompi in caso di dolore o danno visibile.",
      },
      {
        q: "Posso fare una pausa tra un semipermanente e l’altro?",
        a: "Sì. Dopo la rimozione valutiamo lo stato delle unghie e puoi decidere se applicare di nuovo il prodotto o lasciare le unghie naturali per un periodo.",
      },
      {
        q: "Se un’unghia si scheggia cosa faccio?",
        a: "Evita di strappare il prodotto o limare in profondità. Contatta lo studio e invia una foto, così possiamo indicare se fissare una riparazione o una rimozione.",
      },
      {
        q: "Cosa posso fare a casa per farlo durare di più?",
        a: "Usa guanti con detergenti e lavori manuali, idrata le cuticole e non usare le unghie come strumenti. Se compare un sollevamento, non tirarlo.",
      },
    ],
    keywords: [
      "semipermanente Carmagnola durata",
      "manicure semipermanente Carmagnola rimozione",
      "rimozione semipermanente Carmagnola",
      "semipermanente unghie Carmagnola",
      "semipermanente rovina unghie",
    ],
    relatedServiceSlugs: ["manicure-semipermanente-carmagnola", "pedicure-semipermanente-carmagnola"],
    editorialSections: [
      {
        heading: "Che cosa influisce sulla durata",
        paragraphs: [
          "Ricrescita, lunghezza, preparazione e uso quotidiano delle mani possono modificare la durata del semipermanente.",
          "Prima dell’applicazione definiamo forma e lunghezza e verifichiamo che l’unghia non presenti condizioni che richiedano di rimandare il servizio.",
        ],
      },
      {
        heading: "Abitudini che possono accorciare la durata",
        paragraphs: [
          "Detergenti senza guanti, lavori manuali, urti e uso delle unghie come strumenti possono favorire scheggiature o sollevamenti.",
          "Non applicare colla o altri prodotti su una parte sollevata: chiedi allo studio come intervenire.",
        ],
      },
      {
        heading: "Ricrescita e nuovo appuntamento",
        paragraphs: [
          "La velocità di ricrescita varia da persona a persona. Al termine della seduta possiamo suggerire quando controllare o rimuovere il prodotto.",
          "Non aspettare se compaiono sollevamenti estesi, dolore o cambiamenti dell’unghia: contatta lo studio e, se necessario, un medico.",
        ],
      },
      {
        heading: "Rimozione del semipermanente",
        paragraphs: [
          "Strappi e limature eccessive possono danneggiare la superficie dell’unghia. Il metodo di rimozione deve essere compatibile con il prodotto applicato.",
          "Dopo la rimozione valutiamo l’unghia prima di procedere con una nuova applicazione.",
        ],
      },
      {
        heading: "Lavoro manuale e sport",
        paragraphs: [
          "Se usi molto le mani, una lunghezza più corta può ridurre urti e sollecitazioni. Lo valutiamo insieme prima dell’applicazione.",
          "Guanti e attenzione ai sollevamenti aiutano a gestire il risultato tra un appuntamento e l’altro.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Manicure in gel: consigli per le unghie",
        url: "https://www.aad.org/media/news-releases/gel-manicures-dermatologists-share-tips-to-keep-nails-healthy",
      },
      {
        label: "AAD — Rimozione dello smalto gel a casa",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/pedicures/removing-gel-polish",
      },
    ],
  },
  {
    slug: "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
    title: "Laminazione a Carmagnola: durata e cura nelle prime ore (ciglia e sopracciglia)",
    shortDescription:
      "Durata indicativa, indicazioni successive e scelta dell’effetto per ciglia e sopracciglia.",
    longDescription:
      "La laminazione modifica temporaneamente la forma visibile di ciglia o sopracciglia. Prima del servizio concordiamo l’effetto e raccogliamo le informazioni necessarie; al termine forniamo le indicazioni da seguire per detergere e trattare la zona.",
    localAngle:
      "Utile se stai valutando una laminazione ciglia o sopracciglia a Carmagnola e vuoi conoscere durata e cura successiva.",
    intent: "informational",
    benefits: [
      "Spiega la durata indicativa e i fattori che la modificano",
      "Raccoglie le indicazioni per detergere la zona dopo il servizio",
      "Aiuta a concordare forma e intensità prima di iniziare",
    ],
    faqs: [
      {
        q: "Quanto dura la laminazione?",
        a: "In genere circa quattro–sei settimane, ma la durata varia con il ciclo naturale del pelo, i prodotti usati e le abitudini di detersione.",
      },
      {
        q: "Cosa conviene evitare subito dopo?",
        a: "Segui le indicazioni consegnate al termine del servizio su acqua, calore, prodotti e sfregamento. I tempi possono dipendere dal prodotto professionale utilizzato.",
      },
      {
        q: "Se ho ciglia o sopracciglia sottili ha senso?",
        a: "Dipende dalle condizioni e dal risultato desiderato. Valutiamo la zona e spieghiamo quale effetto è possibile ottenere prima di procedere.",
      },
      {
        q: "È un effetto molto evidente?",
        a: "Dipende dalla forma iniziale e dall’impostazione scelta. Durante la valutazione puoi indicare se preferisci un effetto discreto o più definito.",
      },
    ],
    keywords: [
      "laminazione Carmagnola durata",
      "laminazione ciglia Carmagnola quanto dura",
      "laminazione sopracciglia Carmagnola cura",
      "laminazione ciglia dopo trattamento",
      "laminazione effetto naturale Carmagnola",
    ],
    relatedServiceSlugs: ["laminazione-ciglia-sopracciglia-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Scegliere l’effetto prima del servizio",
        paragraphs: [
          "Prima di iniziare osserviamo direzione, lunghezza e condizioni di ciglia o sopracciglia e concordiamo il risultato desiderato.",
          "La durata dipende soprattutto dal ciclo naturale del pelo e dalle abitudini successive, non solo dall’intensità dell’effetto.",
        ],
      },
      {
        heading: "Indicazioni dopo la laminazione",
        paragraphs: [
          "Al termine ricevi indicazioni su detersione, acqua, calore, sfregamento e prodotti cosmetici.",
          "Se compaiono bruciore, gonfiore o una reazione inattesa, contatta lo studio e chiedi un parere medico se i sintomi sono importanti o persistenti.",
        ],
      },
      {
        heading: "Detersione e nuovo appuntamento",
        paragraphs: [
          "Detergi la zona secondo le indicazioni ricevute ed evita di aggiungere prodotti potenzialmente irritanti.",
          "La data del nuovo appuntamento viene valutata in base alla ricrescita e alle condizioni di ciglia o sopracciglia.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAO — Extension ciglia: informazioni e sicurezza",
        url: "https://www.aao.org/eye-health/tips-prevention/eyelash-extension-facts-safety",
      },
      {
        label: "FDA — Uso sicuro dei cosmetici per gli occhi",
        url: "https://www.fda.gov/consumers/consumer-updates/use-eye-cosmetics-safely",
      },
    ],
  },
  {
    slug: "scrub-corpo-carmagnola-quando-farlo",
    title: "Scrub corpo a Carmagnola: ogni quanto farlo e come non irritare la pelle",
    shortDescription:
      "Come scegliere frequenza e intensità dello scrub in base alla zona, alla stagione e alla sensibilità.",
    longDescription:
      "Lo scrub rimuove le cellule superficiali in eccesso e può lasciare la pelle più liscia al tatto. Questa guida spiega come adattare prodotto, pressione e frequenza e quando rimandare il trattamento per evitare di irritare una zona già sensibile.",
    localAngle:
      "Utile se stai valutando uno scrub corpo a Carmagnola e vuoi conoscere modalità e indicazioni successive.",
    intent: "informational",
    benefits: [
      "Spiega come vengono scelti prodotto, pressione e durata",
      "Indica quando è preferibile rimandare l’esfoliazione",
      "Raccoglie le indicazioni su idratazione e protezione solare",
    ],
    faqs: [
      {
        q: "Ogni quanto si fa lo scrub corpo?",
        a: "Dipende dalla sensibilità, dalla zona, dalla stagione e dai prodotti usati a casa. Dopo la prima seduta possiamo suggerire una frequenza adatta alla pelle.",
      },
      {
        q: "È meglio farlo prima o dopo la doccia?",
        a: "Dipende dal prodotto e dalle sue istruzioni. In studio prepariamo la pelle e completiamo il trattamento con la fase finale prevista.",
      },
      {
        q: "Se ho pelle secca posso farlo?",
        a: "Può essere possibile con un’esfoliazione delicata e una fase idratante. Su pelle irritata, lesionata o molto sensibile può essere preferibile rimandare.",
      },
      {
        q: "Esfoliare di più rende la pelle più liscia?",
        a: "Non necessariamente. Una frequenza o un’intensità eccessive possono aumentare secchezza e irritazione. La scelta va adattata alla risposta della pelle.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola ogni quanto",
      "esfoliazione corpo frequenza",
      "scrub corpo pelle sensibile",
      "scrub corpo estate sole",
      "scrub corpo idratazione",
    ],
    relatedServiceSlugs: ["scrub-corpo-carmagnola"],
    editorialSections: [
      {
        heading: "Prodotto, pressione e sensibilità",
        paragraphs: [
          "Le diverse zone del corpo possono richiedere prodotti e pressioni differenti. Prima della seduta segnala sensibilità e prodotti esfolianti usati a casa.",
          "Se avverti bruciore durante il trattamento, comunicalo subito; una reazione importante o persistente richiede un parere medico.",
        ],
      },
      {
        heading: "Come definiamo la frequenza",
        paragraphs: [
          "Frequenza e intensità dipendono da pelle, stagione, attrito e prodotti utilizzati tra gli appuntamenti.",
          "Dopo la prima seduta osserviamo la risposta e indichiamo quando eventualmente ripetere il trattamento.",
        ],
      },
      {
        heading: "Dopo lo scrub",
        paragraphs: [
          "Al termine indichiamo come gestire idratazione, prodotti, sfregamento e protezione solare sulle zone esposte.",
          "Evita di sovrapporre altri esfolianti finché non è trascorso il tempo indicato dallo studio.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Esfoliazione sicura a casa",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "massaggio-rilassante-carmagnola-cervicale-stress",
    title: "Massaggio rilassante a Carmagnola: seduta da 50 minuti",
    shortDescription:
      "Come si svolge la seduta, quali zone può comprendere e come viene scelta la pressione.",
    longDescription:
      "Il massaggio rilassante da 50 minuti può concentrarsi su schiena, spalle e zona cervicale in base alle preferenze comunicate prima della seduta. È un servizio di benessere e non sostituisce una valutazione o un trattamento sanitario per dolore e disturbi muscolo-scheletrici.",
    localAngle:
      "Utile se vuoi prenotare a Carmagnola un massaggio rilassante e conoscere prima durata, zone e pressione.",
    intent: "informational",
    benefits: [
      "Descrive durata e svolgimento della seduta",
      "Spiega come vengono scelte zone e pressione",
      "Chiarisce i limiti rispetto a un trattamento sanitario",
    ],
    faqs: [
      {
        q: "È un massaggio intenso?",
        a: "La pressione viene concordata e adattata durante la seduta. Non è necessario sopportare dolore: comunica subito qualsiasi fastidio.",
      },
      {
        q: "Su cosa lavorate di più?",
        a: "La seduta può concentrarsi su schiena, spalle e zona cervicale. Prima di iniziare concordiamo le aree e verifichiamo se ci sono motivi per escluderne alcune.",
      },
      {
        q: "Quante sedute servono?",
        a: "Puoi prenotare una seduta singola oppure scegliere più appuntamenti per il benessere e il relax. Non indichiamo un ciclo per trattare dolore o condizioni cliniche.",
      },
      {
        q: "Che cosa devo fare dopo la seduta?",
        a: "Al termine ti diamo indicazioni in base al massaggio eseguito e a come ti senti. Se compare dolore inatteso o persistente, chiedi un parere medico.",
      },
    ],
    keywords: [
      "massaggio cervicale Carmagnola",
      "massaggio rilassante Carmagnola cervicale",
      "tensione spalle Carmagnola massaggio",
      "massaggio schiena Carmagnola",
      "massaggio antistress Carmagnola",
    ],
    relatedServiceSlugs: ["massaggio-rilassante-carmagnola"],
    editorialSections: [
      {
        heading: "Come scegliamo la pressione",
        paragraphs: [
          "Prima della seduta chiediamo quali zone desideri trattare e quale pressione preferisci. Durante il massaggio puoi chiedere di modificarla in qualsiasi momento.",
          "Dolore o fastidio non sono obiettivi del servizio. Se una zona è sensibile, possiamo lavorare più delicatamente o escluderla.",
        ],
      },
      {
        heading: "Quando chiedere prima un parere medico",
        paragraphs: [
          "Dolore acuto o recente, trauma, sintomi neurologici o una condizione diagnosticata non vanno gestiti con un semplice massaggio rilassante.",
          "Comunica condizioni e terapie prima di prenotare; in caso di dubbio rimandiamo la seduta e chiediamo un parere medico.",
        ],
      },
      {
        heading: "Seduta singola o appuntamenti periodici",
        paragraphs: [
          "Il massaggio può essere prenotato come esperienza singola o come appuntamento periodico dedicato al relax.",
          "Prima di fissare più sedute spieghiamo frequenza e costi, senza attribuire al servizio finalità terapeutiche.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic — Massoterapia",
        url: "https://my.clevelandclinic.org/departments/wellness/integrative/treatments-services/massage-therapy",
      },
      {
        label: "NHS — Dolore e rigidità del collo",
        url: "https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/",
      },
    ],
  },
  {
    slug: "pulizia-viso-carmagnola-frequenza-benefici",
    title: "Pulizia viso a Carmagnola: ogni quanto farla e per chi ha senso",
    shortDescription:
      "Come scegliamo frequenza, prodotti e intensità in base alle condizioni della pelle.",
    longDescription:
      "La pulizia viso comprende detersione, esfoliazione delicata, rimozione mirata delle impurità superficiali e una fase finale lenitiva. Valutiamo sensibilità, prodotti usati e obiettivo prima di definire intensità ed eventuale frequenza.",
    localAngle:
      "Utile se stai valutando una pulizia viso a Carmagnola e vuoi sapere quando può essere indicata.",
    intent: "commercial",
    benefits: [
      "Spiega che cosa comprende la pulizia viso",
      "Chiarisce come vengono adattati prodotti e intensità",
      "Indica come viene definita l’eventuale frequenza",
    ],
    faqs: [
      {
        q: "Pulizia viso e pelle sensibile: si può fare?",
        a: "Può essere possibile usando prodotti e passaggi più delicati. Valutiamo la zona prima della seduta e, in presenza di irritazione importante, possiamo rimandare.",
      },
      {
        q: "Più trattamenti ravvicinati danno risultati migliori?",
        a: "Non necessariamente. Frequenza e intensità dipendono dalla pelle e dal tipo di trattamento; appuntamenti troppo ravvicinati possono aumentare la sensibilità.",
      },
      {
        q: "La pulizia viso elimina i punti neri?",
        a: "Può rimuovere alcune impurità superficiali e migliorare temporaneamente l’aspetto della pelle, ma non garantisce l’eliminazione completa o permanente dei punti neri.",
      },
      {
        q: "Meglio farla prima di un evento importante?",
        a: "La pelle può presentare rossore o sensibilità dopo la seduta. Comunica la data dell’evento prima di prenotare, così possiamo suggerire un intervallo adeguato.",
      },
      {
        q: "Se ho brufoli infiammati o una situazione particolare, cosa faccio?",
        a: "Comunicalo prima dell’appuntamento. Lesioni, dolore, infiammazione importante o acne persistente richiedono una valutazione dermatologica; il trattamento estetico non sostituisce la cura medica.",
      },
      {
        q: "Ogni quanto ha senso farla, in pratica?",
        a: "Dipende da sensibilità, prodotti, stagione e obiettivo. Dopo la prima seduta possiamo proporre una cadenza e aggiornarla in base alla risposta della pelle.",
      },
    ],
    keywords: [
      "pulizia viso Carmagnola ogni quanto",
      "pulizia viso pelle sensibile Carmagnola",
      "trattamento viso professionale Carmagnola",
      "estetista viso Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "pelle-opaca-grana-irregolare-carmagnola",
      "pelle-matura-carmagnola-trattamenti-routine",
      "contorno-occhi-gonfiore-occhiaie-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.puliziaViso,
      alt: "Operatrice durante una fase delicata della pulizia viso in cabina.",
    },
    editorialSections: [
      {
        heading: "Che cosa comprende la pulizia viso",
        paragraphs: [
          "La seduta comprende osservazione iniziale, detersione, esfoliazione delicata, pulizia mirata e una fase finale lenitiva.",
          "Prodotti, durata e intensità vengono adattati alle condizioni e alla sensibilità della pelle.",
        ],
      },
      {
        heading: "Come definiamo la frequenza",
        paragraphs: [
          "La frequenza dipende da sensibilità, prodotti usati a casa, stagione e obiettivo estetico.",
          "Dopo la prima seduta osserviamo la risposta e indichiamo quando eventualmente ripetere il trattamento.",
        ],
      },
      {
        heading: "Indicazioni dopo la seduta",
        paragraphs: [
          "Al termine spieghiamo quali prodotti usare o sospendere e quando riprendere la routine abituale.",
          "Se compare una reazione inattesa o persistente, contatta lo studio e non applicare nuovi attivi senza indicazioni.",
        ],
      },
      {
        heading: "Routine a casa",
        paragraphs: [
          "Una routine essenziale può comprendere detersione delicata, idratazione e protezione solare adeguata all’esposizione.",
          "Dopo la seduta indichiamo se mantenere i prodotti abituali o introdurre modifiche graduali.",
        ],
      },
      {
        heading: "Quando valutare altri trattamenti",
        paragraphs: [
          "La pulizia viso può essere scelta come servizio singolo oppure come preparazione a un percorso dedicato.",
          "Se proponiamo altri trattamenti, spieghiamo obiettivo, frequenza, costo e momento del controllo prima di iniziare.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Esfoliazione sicura a casa",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD — Detersione del viso",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101",
      },
      {
        label: "AAD — Cura di base della pelle",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "linfodrenante-carmagnola",
    title: "Linfodrenante a Carmagnola: seduta, frequenza e precauzioni",
    shortDescription:
      "Come si svolge il massaggio linfodrenante estetico e quali informazioni comunicare prima di prenotare.",
    longDescription:
      "In REBEL il linfodrenante è un massaggio estetico manuale e delicato, scelto soprattutto da chi desidera una sensazione di leggerezza. Non è un trattamento sanitario e non sostituisce una valutazione medica in presenza di gonfiore persistente, improvviso o doloroso.",
    localAngle:
      "Utile se stai valutando un massaggio linfodrenante a Carmagnola e vuoi conoscere modalità, frequenza e precauzioni.",
    intent: "commercial",
    benefits: [
      "Descrive finalità estetica e svolgimento della seduta",
      "Spiega come vengono scelti zone, pressione e frequenza",
      "Indica quando chiedere prima un parere medico",
    ],
    faqs: [
      {
        q: "Il linfodrenante cura gonfiore o ritenzione?",
        a: "No. Il servizio offerto in studio ha finalità estetica e di benessere. Un gonfiore persistente, improvviso, doloroso o associato ad altri sintomi richiede una valutazione medica.",
      },
      {
        q: "Quante sedute servono?",
        a: "Puoi prenotare una seduta singola oppure valutare più appuntamenti. Frequenza e numero dipendono dall’obiettivo estetico e dalla risposta individuale e non consentono di garantire lo stesso effetto per tutti.",
      },
      {
        q: "Quanto dura la sensazione dopo una seduta?",
        a: "È una percezione soggettiva e la durata varia da persona a persona. Prima di proporre altri appuntamenti valutiamo come hai vissuto la seduta.",
      },
      {
        q: "Cosa conviene fare dopo il linfodrenante?",
        a: "Al termine ricevi indicazioni coerenti con il massaggio eseguito e con le informazioni comunicate. In presenza di sintomi inattesi o persistenti, contatta un professionista sanitario.",
      },
      {
        q: "Ci sono momenti in cui è meglio rimandare o chiedere un parere medico?",
        a: "Sì. Comunica condizioni diagnosticate, terapie, interventi o sintomi recenti prima di prenotare. In caso di dubbio rimandiamo la seduta e chiediamo un parere medico.",
      },
    ],
    keywords: [
      "linfodrenante Carmagnola",
      "massaggio drenante Carmagnola",
      "gambe pesanti Carmagnola trattamento",
      "drenaggio corpo Carmagnola",
    ],
    relatedServiceSlugs: [
      "massaggio-linfodrenante-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
    ],
    heroImage: {
      src: editorialImageAssets.linfodrenante,
      alt: "Operatrice durante un massaggio linfodrenante manuale sulle gambe.",
    },
    editorialSections: [
      {
        heading: "Che cosa intendiamo per linfodrenante",
        paragraphs: [
          "È un massaggio manuale eseguito con pressioni delicate e adattato alle zone concordate prima della seduta.",
          "In questo contesto ha finalità estetica e di benessere e non viene proposto per curare patologie o sintomi clinici.",
        ],
      },
      {
        heading: "Prima della seduta",
        paragraphs: [
          "Raccogliamo informazioni su obiettivo, zone, sensibilità e condizioni che potrebbero richiedere di rimandare.",
          "Segnala sempre diagnosi, terapie, interventi e sintomi recenti, anche se pensi che non siano collegati al massaggio.",
        ],
      },
      {
        heading: "Seduta singola o più appuntamenti",
        paragraphs: [
          "Puoi prenotare un singolo massaggio oppure concordare più appuntamenti in base all’obiettivo estetico e alle disponibilità.",
          "Se proponiamo un calendario, indichiamo frequenza, costi e momento del controllo senza promettere esiti uguali per tutti.",
        ],
      },
      {
        heading: "Zone e pressione",
        paragraphs: [
          "Zone e pressione vengono concordate prima della seduta e possono essere modificate in base al comfort.",
          "Comunica subito dolore o fastidio anomalo: non è necessario sopportarlo per ottenere un beneficio estetico.",
        ],
      },
      {
        heading: "Dopo la seduta",
        paragraphs: [
          "Al termine spieghiamo come gestire le ore successive in base alla seduta e alle informazioni che ci hai comunicato.",
          "Sintomi inattesi o persistenti non vanno attribuiti automaticamente al massaggio e richiedono un parere sanitario.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic — Massaggio linfodrenante",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
      {
        label: "NHS — Come scegliere chi esegue una procedura cosmetica",
        url: "https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/",
      },
    ],
  },
  {
    slug: "pressoterapia-carmagnola",
    title: "Pressoterapia a Carmagnola: come funziona e precauzioni",
    shortDescription:
      "Come si svolge una seduta di pressoterapia estetica e quali informazioni comunicare prima di iniziare.",
    longDescription:
      "La pressoterapia estetica utilizza gambali che esercitano una compressione sequenziale. Questa guida descrive la sensazione durante la seduta, le differenze rispetto al massaggio manuale e le precauzioni. Non è un trattamento medico e non va usata per gestire gonfiore o dolore senza una valutazione sanitaria.",
    localAngle:
      "Scritta per chi cerca pressoterapia a Carmagnola e vuole capire se e come inserirla in un percorso corpo.",
    intent: "commercial",
    benefits: [
      "Descrive apparecchiatura e sensazione durante la seduta",
      "Chiarisce la differenza rispetto al linfodrenante manuale",
      "Indica quando è necessario un parere medico",
    ],
    faqs: [
      {
        q: "La pressoterapia è uguale al linfodrenante?",
        a: "No. Il linfodrenante è un massaggio manuale; la pressoterapia usa gambali che applicano una compressione sequenziale. Finalità, sensazioni e precauzioni sono differenti.",
      },
      {
        q: "Quante sedute servono?",
        a: "Puoi valutare una seduta singola o più appuntamenti per finalità estetiche e di benessere. Numero e frequenza vengono proposti dopo la valutazione e non garantiscono lo stesso effetto per tutti.",
      },
      {
        q: "Che sensazione devo aspettarmi durante e dopo?",
        a: "Durante la seduta si avverte la pressione dei gambali in sequenza. La percezione varia; comunica subito dolore, intorpidimento o qualsiasi fastidio anomalo.",
      },
      {
        q: "Ci sono casi in cui è meglio essere prudenti?",
        a: "Sì. Comunica condizioni diagnosticate, terapie, interventi, gravidanza o sintomi recenti. In caso di dubbio non eseguiamo la seduta senza un parere medico.",
      },
      {
        q: "Si può abbinare ad altri trattamenti corpo?",
        a: "Può essere possibile, ma va valutata la compatibilità tra servizi e condizioni della persona. Prima di proporre un abbinamento spieghiamo finalità, frequenza e precauzioni.",
      },
    ],
    keywords: [
      "pressoterapia Carmagnola",
      "pressoterapia gambe Carmagnola",
      "pressodren Carmagnola",
      "gambe pesanti Carmagnola pressoterapia",
      "trattamento drenante Carmagnola",
    ],
    relatedServiceSlugs: ["massaggio-linfodrenante-carmagnola"],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "linfodrenante-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pressoterapia,
      alt: "Gambali per una seduta di pressoterapia estetica in cabina.",
    },
    editorialSections: [
      {
        heading: "Come si svolge la seduta",
        paragraphs: [
          "I gambali si gonfiano in sequenza ed esercitano una pressione impostata dall’operatrice. La sensazione deve restare tollerabile per tutta la seduta.",
          "Prima di iniziare raccogliamo le informazioni necessarie e spieghiamo come segnalare eventuale fastidio.",
        ],
      },
      {
        heading: "Seduta singola o calendario",
        paragraphs: [
          "Puoi prenotare una seduta singola o valutare più appuntamenti per finalità estetiche e di benessere.",
          "Se viene proposto un calendario, indichiamo frequenza, costo e momento del controllo senza attribuire finalità terapeutiche.",
        ],
      },
      {
        heading: "Differenza rispetto al massaggio manuale",
        paragraphs: [
          "La pressoterapia applica una compressione attraverso i gambali, mentre il linfodrenante viene eseguito manualmente dall’operatrice.",
          "Durante la valutazione spieghiamo quale servizio proponiamo, con quali limiti e perché.",
        ],
      },
      {
        heading: "Quando chiedere un parere medico",
        paragraphs: [
          "Condizioni diagnosticate, terapie, interventi, gravidanza o sintomi recenti devono essere comunicati prima della seduta.",
          "Gonfiore improvviso, persistente o doloroso richiede una valutazione medica e non va trattato come una semplice esigenza estetica.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic — Compressione pneumatica intermittente",
        url: "https://my.clevelandclinic.org/health/treatments/14791-intermittent-pneumatic-compression-ipc-device",
      },
      {
        label: "Cleveland Clinic — Massaggio linfodrenante",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
    ],
  },
  {
    slug: "pedicure-carmagnola-ogni-quanto-talloni",
    title: "Pedicure a Carmagnola: ogni quanto farlo e come gestire talloni secchi",
    shortDescription:
      "Come definiamo frequenza, intensità e mantenimento per un pedicure estetico e per i talloni secchi.",
    longDescription:
      "Il pedicure estetico cura l’aspetto di unghie, cuticole e pelle superficiale del piede. Questa guida spiega come adattiamo i passaggi in presenza di talloni secchi e quando dolore, lesioni o alterazioni richiedono invece un medico o un podologo.",
    localAngle:
      "Utile se cerchi un pedicure estetico a Carmagnola e vuoi conoscere frequenza e cura a casa.",
    intent: "commercial",
    benefits: [
      "Spiega che cosa comprende il pedicure estetico",
      "Chiarisce come lavoriamo sui talloni secchi senza eccessi",
      "Indica quando rivolgersi a un medico o a un podologo",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare un pedicure?",
        a: "Dipende da pelle, unghie, scarpe, sport e stagione. Dopo la prima seduta possiamo suggerire quando ripetere il servizio in base alle condizioni osservate.",
      },
      {
        q: "Come vengono trattati i talloni secchi?",
        a: "Adattiamo prodotto e intensità alla pelle e completiamo la seduta con la fase prevista. A casa segui le indicazioni ricevute e non usare strumenti taglienti o abrasivi su lesioni e fissurazioni.",
      },
      {
        q: "È possibile rimuovere tutto l’ispessimento in una seduta?",
        a: "Non sempre ed è importante non eccedere. Una rimozione aggressiva può irritare la pelle; definiamo i passaggi in base alle condizioni osservate.",
      },
      {
        q: "Posso fare pedicure e poi mettere lo smalto?",
        a: "Sì, se le unghie sono adatte all’applicazione. Puoi scegliere smalto classico, semipermanente o una finitura naturale tra i servizi disponibili.",
      },
      {
        q: "Se ho una situazione dolorosa o sospetta, come mi comporto?",
        a: "Dolore, lesioni, sanguinamento, sospetta infezione o alterazioni persistenti richiedono una valutazione medica o podologica prima del pedicure estetico.",
      },
    ],
    keywords: [
      "pedicure Carmagnola",
      "pedicure VIP Carmagnola",
      "pedicure Carmagnola ogni quanto",
      "talloni secchi Carmagnola",
      "cura piedi Carmagnola",
      "piedi curati Carmagnola",
    ],
    relatedServiceSlugs: [
      "pedicure-carmagnola",
      "pedicure-estetico-carmagnola",
      "pedicure-estetico-con-smalto-carmagnola",
      "pedicure-semipermanente-carmagnola",
      "taglio-unghie-piedi-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Operatrice durante una fase del pedicure estetico in cabina.",
    },
    editorialSections: [
      {
        heading: "Che cosa comprende il pedicure estetico",
        paragraphs: [
          "Il servizio riguarda unghie, cuticole e pelle superficiale del piede. I passaggi cambiano in base alle condizioni osservate e alla finitura scelta.",
          "Non comprende diagnosi o trattamento di patologie del piede, che spettano a medici e podologi.",
        ],
      },
      {
        heading: "Talloni secchi e pelle ispessita",
        paragraphs: [
          "Prodotto, strumenti e intensità vengono adattati alla zona. Evitiamo rimozioni eccessive che possono irritare la pelle.",
          "Fissurazioni profonde, dolore, sanguinamento o sospetta infezione richiedono un parere sanitario prima del servizio.",
        ],
      },
      {
        heading: "Come definiamo la frequenza",
        paragraphs: [
          "Scarpe, sport, stagione e velocità di ricrescita possono modificare la frequenza degli appuntamenti.",
          "Dopo la prima seduta osserviamo pelle e unghie e suggeriamo quando ripetere il pedicure.",
        ],
      },
      {
        heading: "Mantenimento a casa",
        paragraphs: [
          "Dopo la seduta ricevi indicazioni su idratazione, prodotti e cura delle unghie tra gli appuntamenti.",
          "Non usare lame o strumenti aggressivi a casa e chiedi un parere sanitario se compaiono dolore, lesioni o cambiamenti persistenti.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD — Cura di base delle unghie",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/nail-care-basics",
      },
    ],
  },
];

type SeoContentValidation = {
  errors: string[];
  warnings: string[];
};

function validateSeoContent(): SeoContentValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenServiceSlugs = new Set<string>();
  const seenCompetenceSlugs = new Set<string>();
  const normalizeForDupCheck = (value: string) =>
    value
      .toLowerCase()
      .replace(/<[^>]+>/g, " ")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const duplicateWarnings: string[] = [];
  const trackDuplicates = (
    bucket: Map<string, string[]>,
    value: string | undefined,
    label: string,
    slug: string,
  ) => {
    const normalized = normalizeForDupCheck(value ?? "");
    // Skip very short strings: too noisy to validate.
    if (normalized.length < 48) return;
    const list = bucket.get(normalized) ?? [];
    list.push(`${label}/${slug}`);
    bucket.set(normalized, list);
  };

  const dupServiceShort = new Map<string, string[]>();
  const dupServiceLong = new Map<string, string[]>();
  const dupCompetenceShort = new Map<string, string[]>();
  const dupCompetenceLong = new Map<string, string[]>();

  const editorialCharCount = (
    sections?: Array<{
      heading: string;
      paragraphs: string[];
    }>,
  ) =>
    (sections ?? [])
      .flatMap((s) => s.paragraphs ?? [])
      .join(" ")
      .replace(/\s+/g, " ")
      .trim().length;

  for (const service of servicePages) {
    if (seenServiceSlugs.has(service.slug)) errors.push(`Duplicate service slug: ${service.slug}`);
    seenServiceSlugs.add(service.slug);

    if ((service.benefits || []).length < 3) warnings.push(`[servizi/${service.slug}] benefits < 3`);
    if ((service.faqs || []).length < 2) warnings.push(`[servizi/${service.slug}] faqs < 2`);
    if ((service.keywords || []).length < 3) warnings.push(`[servizi/${service.slug}] keywords < 3`);

    if ((service.editorialSections ?? []).length < 2)
      warnings.push(`[servizi/${service.slug}] editorialSections < 2 (may be thin)`);

    if ((service.shortDescription || "").trim().length < 70)
      warnings.push(`[servizi/${service.slug}] shortDescription looks short (may be thin)`);
    if ((service.longDescription || "").trim().length < 160)
      warnings.push(`[servizi/${service.slug}] longDescription looks short (may be thin)`);
    if (editorialCharCount(service.editorialSections) < 420)
      warnings.push(`[servizi/${service.slug}] editorial content looks short (may be thin)`);

    trackDuplicates(dupServiceShort, service.shortDescription, "servizi", service.slug);
    trackDuplicates(dupServiceLong, service.longDescription, "servizi", service.slug);
  }

  for (const competence of competencePages) {
    if (seenCompetenceSlugs.has(competence.slug))
      errors.push(`Duplicate competence slug: ${competence.slug}`);
    seenCompetenceSlugs.add(competence.slug);

    if ((competence.benefits || []).length < 3)
      warnings.push(`[competenze/${competence.slug}] benefits < 3`);
    if ((competence.faqs || []).length < 2)
      warnings.push(`[competenze/${competence.slug}] faqs < 2`);
    if ((competence.keywords || []).length < 3)
      warnings.push(`[competenze/${competence.slug}] keywords < 3`);

    if ((competence.editorialSections ?? []).length < 2)
      warnings.push(`[competenze/${competence.slug}] editorialSections < 2 (may be thin)`);

    if ((competence.shortDescription || "").trim().length < 70)
      warnings.push(`[competenze/${competence.slug}] shortDescription looks short (may be thin)`);
    if ((competence.longDescription || "").trim().length < 160)
      warnings.push(`[competenze/${competence.slug}] longDescription looks short (may be thin)`);
    if (editorialCharCount(competence.editorialSections) < 520)
      warnings.push(`[competenze/${competence.slug}] editorial content looks short (may be thin)`);

    trackDuplicates(dupCompetenceShort, competence.shortDescription, "competenze", competence.slug);
    trackDuplicates(dupCompetenceLong, competence.longDescription, "competenze", competence.slug);
  }

  // Cross-link integrity (warn only).
  const competenceSlugSet = new Set(competencePages.map((c) => c.slug));
  const serviceSlugSet = new Set(servicePages.map((s) => s.slug));
  const protocolSlugSet = new Set(protocolPages.map((p) => p.slug));

  for (const service of servicePages) {
    for (const related of service.relatedCompetenceSlugs ?? []) {
      if (!competenceSlugSet.has(related))
        warnings.push(`[servizi/${service.slug}] missing competence reference: ${related}`);
    }

    for (const related of service.relatedProtocolSlugs ?? []) {
      if (!protocolSlugSet.has(related))
        warnings.push(`[servizi/${service.slug}] missing protocol reference: ${related}`);
    }
  }

  for (const competence of competencePages) {
    for (const related of competence.relatedServiceSlugs ?? []) {
      if (!serviceSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing service reference: ${related}`);
    }

    for (const related of competence.relatedCompetenceSlugs ?? []) {
      if (related === competence.slug)
        warnings.push(`[competenze/${competence.slug}] relatedCompetenceSlugs references itself`);
      else if (!competenceSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing competence reference: ${related}`);
    }

    for (const related of competence.relatedProtocolSlugs ?? []) {
      if (!protocolSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing protocol reference: ${related}`);
    }
  }

  const pushDupGroupWarnings = (bucket: Map<string, string[]>, kind: string) => {
    const groups = Array.from(bucket.values()).filter((slugs) => slugs.length > 1);
    if (groups.length === 0) return;
    groups
      .slice(0, 12)
      .forEach((slugs) =>
        duplicateWarnings.push(`[dup] ${kind} appears identical across: ${slugs.slice(0, 6).join(", ")}${slugs.length > 6 ? " ..." : ""}`),
      );
    if (groups.length > 12) {
      duplicateWarnings.push(`[dup] ${kind}: ${groups.length - 12} more duplicate groups not shown`);
    }
  };

  pushDupGroupWarnings(dupServiceShort, "service shortDescription");
  pushDupGroupWarnings(dupServiceLong, "service longDescription");
  pushDupGroupWarnings(dupCompetenceShort, "competence shortDescription");
  pushDupGroupWarnings(dupCompetenceLong, "competence longDescription");
  warnings.push(...duplicateWarnings);

  return { errors, warnings };
}

const seoContentValidation = validateSeoContent();
if (seoContentValidation.errors.length > 0) {
  throw new Error(`[seo-content] Invalid content:\n${seoContentValidation.errors.join("\n")}`);
}

if (process.env.NODE_ENV !== "production" && seoContentValidation.warnings.length > 0) {
  // eslint-disable-next-line no-console
  console.warn(`[seo-content] Quality warnings:\n${seoContentValidation.warnings.join("\n")}\n`);
}

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getCompetenceBySlug(slug: string) {
  return competencePages.find((item) => item.slug === slug);
}
