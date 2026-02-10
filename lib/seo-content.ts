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
};

export const servicePages: ServicePage[] = [
  {
    slug: "pulizia-viso-carmagnola",
    name: "Pulizia viso a Carmagnola",
    shortDescription:
      "Pulizia viso completa per pelle impura, spenta o appesantita.",
    longDescription:
      "Iniziamo guardando bene la tua pelle, poi facciamo detersione profonda, esfoliazione delicata e fase riequilibrante. Il risultato e una pelle piu pulita, luminosa e confortevole.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Riduce impurita e ispessimenti",
      "Migliora grana e luminosita della pelle",
      "Prepara il viso a percorsi avanzati",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare una pulizia viso?",
        a: "Di solito ogni 4-6 settimane, ma lo decidiamo in base alla tua pelle e alla tua routine.",
      },
      {
        q: "E indicata anche per pelli sensibili?",
        a: "Si, con manovre e prodotti adattati al tuo profilo cutaneo.",
      },
    ],
    keywords: [
      "pulizia viso Carmagnola",
      "trattamento viso pelle impura Carmagnola",
      "estetista viso Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
  },
  {
    slug: "scrub-corpo-carmagnola",
    name: "Scrub corpo a Carmagnola",
    shortDescription:
      "Esfoliazione corpo per pelle liscia, morbida e uniforme.",
    longDescription:
      "Lo scrub corpo aiuta a togliere le cellule superficiali e lascia la pelle subito piu liscia. E ottimo anche come preparazione ad altri trattamenti corpo.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Pelle subito piu liscia e uniforme",
      "Stimola il rinnovamento superficiale",
      "Ottima base per protocolli corpo",
    ],
    faqs: [
      {
        q: "Lo scrub e adatto tutto l'anno?",
        a: "Si, basta adattare frequenza e intensita al periodo e alla sensibilita della tua pelle.",
      },
      {
        q: "Ogni quanto e consigliato?",
        a: "Generalmente ogni 3-5 settimane.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola",
      "esfoliazione corpo Carmagnola",
      "trattamento corpo levigante Carmagnola",
    ],
    relatedCompetenceSlugs: ["trattamenti-corpo-carmagnola"],
  },
  {
    slug: "massaggio-linfodrenante-carmagnola",
    name: "Massaggio linfodrenante a Carmagnola",
    shortDescription:
      "Massaggio drenante per alleggerire e sgonfiare.",
    longDescription:
      "Il linfodrenaggio aiuta a ridurre la sensazione di gonfiore e pesantezza, soprattutto su gambe e addome. E un trattamento delicato e molto graduale.",
    priceHint: "da EUR 69",
    category: "estetica-classica",
    benefits: [
      "Riduce sensazione di gonfiore",
      "Aiuta la leggerezza corporea",
      "Supporta percorsi rimodellanti personalizzati",
    ],
    faqs: [
      {
        q: "Il linfodrenante e doloroso?",
        a: "No, e una tecnica delicata e progressiva.",
      },
      {
        q: "Quante sedute servono per vedere beneficio?",
        a: "La sensazione di leggerezza spesso si sente gia dalle prime sedute, poi si stabilizza con il ciclo.",
      },
    ],
    keywords: [
      "massaggio linfodrenante Carmagnola",
      "trattamento drenante Carmagnola",
      "gambe gonfie Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "trattamenti-corpo-carmagnola",
    ],
  },
  {
    slug: "laminazione-ciglia-sopracciglia-carmagnola",
    name: "Laminazione ciglia e sopracciglia a Carmagnola",
    shortDescription:
      "Definizione di ciglia e sopracciglia con effetto naturale.",
    longDescription:
      "La laminazione mette ordine a ciglia e sopracciglia senza stravolgere il viso: il risultato e pulito, armonioso e molto naturale.",
    priceHint: "da EUR 79",
    category: "estetica-classica",
    benefits: [
      "Sguardo visivamente piu aperto",
      "Sopracciglia disciplinate e piene",
      "Risultato elegante e naturale",
    ],
    faqs: [
      {
        q: "Quanto dura il risultato?",
        a: "In media tra 4 e 6 settimane, a seconda di abitudini e crescita naturale.",
      },
      {
        q: "Serve una cura a casa?",
        a: "Si, semplice e rapida, con consigli dedicati.",
      },
    ],
    keywords: [
      "laminazione ciglia Carmagnola",
      "laminazione sopracciglia Carmagnola",
      "trattamento sguardo Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola",
    name: "Manicure semipermanente a Carmagnola",
    shortDescription:
      "Manicure semipermanente curata, resistente e ordinata.",
    longDescription:
      "La manicure semipermanente include preparazione accurata, rifinitura e applicazione colore. L'obiettivo e un risultato pulito, elegante e che duri davvero.",
    priceHint: "da EUR 26",
    category: "estetica-classica",
    benefits: [
      "Durata elevata rispetto allo smalto classico",
      "Unghia ordinata e valorizzata",
      "Colori e stile personalizzabili",
    ],
    faqs: [
      {
        q: "Il semipermanente rovina l'unghia?",
        a: "No, se applicazione e rimozione sono fatte in modo corretto.",
      },
      {
        q: "Ogni quanto fare il refill?",
        a: "Indicativamente ogni 2-3 settimane.",
      },
    ],
    keywords: [
      "manicure semipermanente Carmagnola",
      "centro unghie Carmagnola",
      "semipermanente Carmagnola prezzi",
    ],
    relatedCompetenceSlugs: ["beauty-routine-carmagnola"],
  },
  {
    slug: "epilazione-laser-viso-carmagnola",
    name: "Epilazione laser viso a Carmagnola",
    shortDescription:
      "Laser viso per ridurre progressivamente la ricrescita.",
    longDescription:
      "Con Thory impostiamo il laser in base a fototipo, zona e obiettivo. Il manipolo Ice Polar aiuta a rendere la seduta piu confortevole. Il percorso e graduale, con controlli regolari e attenzione al comfort.",
    priceHint: "da EUR 25.90 per zona",
    category: "laser",
    benefits: [
      "Ricrescita progressivamente ridotta",
      "Migliore gestione dei peli incarniti",
      "Protocollo personalizzato e monitorato",
    ],
    faqs: [
      {
        q: "Il laser viso e adatto alle pelli sensibili?",
        a: "Si, dopo valutazione iniziale e settaggio corretto.",
      },
      {
        q: "Quante sedute servono?",
        a: "Dipende da zona e risposta personale. In genere serve un ciclo completo per un risultato stabile.",
      },
    ],
    keywords: [
      "laser viso Carmagnola",
      "epilazione baffetti Carmagnola",
      "epilazione mento Carmagnola",
    ],
    relatedCompetenceSlugs: ["epilazione-laser-carmagnola", "laser-diodo-carmagnola"],
  },
  {
    slug: "epilazione-laser-corpo-carmagnola",
    name: "Epilazione laser corpo a Carmagnola",
    shortDescription:
      "Laser corpo su aree singole o multiple, con percorso su misura.",
    longDescription:
      "Il laser corpo viene pianificato sulle zone che vuoi trattare, con Thory e manipolo Ice Polar per migliorare la tollerabilita durante la seduta.",
    priceHint: "da EUR 25.90 a 103.60",
    category: "laser",
    benefits: [
      "Riduzione progressiva della ricrescita",
      "Migliore comfort nel tempo",
      "Piano strutturato su zone e stagionalita",
    ],
    faqs: [
      {
        q: "Il laser corpo e doloroso?",
        a: "Dipende dalla sensibilita personale, ma impostiamo sempre il trattamento per renderlo tollerabile.",
      },
      {
        q: "Posso trattare piu zone nello stesso appuntamento?",
        a: "Si, con pianificazione adeguata.",
      },
    ],
    keywords: [
      "laser corpo Carmagnola",
      "epilazione laser ascelle Carmagnola",
      "epilazione laser inguine Carmagnola",
    ],
    relatedCompetenceSlugs: ["epilazione-laser-carmagnola", "laser-diodo-carmagnola"],
  },
];

export const competencePages: CompetencePage[] = [
  {
    slug: "come-scegliere-centro-estetico-carmagnola",
    title: "Come scegliere un centro estetico a Carmagnola",
    shortDescription:
      "Una guida semplice per scegliere bene, con criteri pratici.",
    longDescription:
      "Quando confronti piu centri estetici e facile perdersi. Qui trovi criteri pratici per scegliere con lucidita: metodo, chiarezza prezzi, competenze reali e continuita del percorso.",
    localAngle:
      "Perfetta se stai confrontando piu opzioni a Carmagnola prima di prenotare.",
    intent: "informational",
    benefits: [
      "Riduce confusione nella fase di confronto",
      "Aiuta a scegliere su criteri oggettivi",
      "Migliora la qualita della decisione prima del primo appuntamento",
    ],
    faqs: [
      {
        q: "Quali segnali indicano un centro estetico affidabile?",
        a: "Metodo chiaro, comunicazione trasparente, obiettivi realistici e continuita nel tempo.",
      },
      {
        q: "Il prezzo piu basso e sempre la scelta migliore?",
        a: "Non sempre: conta il valore complessivo del percorso e la qualita dell'esecuzione.",
      },
    ],
    keywords: [
      "miglior centro estetico Carmagnola",
      "come scegliere estetista Carmagnola",
      "confronto centri estetici Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
  },
  {
    slug: "estetica-avanzata-carmagnola",
    title: "Estetica avanzata a Carmagnola",
    shortDescription:
      "Percorsi estetici costruiti su misura, con metodo e ascolto.",
    longDescription:
      "Per noi estetica avanzata significa lavorare in modo preciso: mani esperte, attivi mirati e tecnologia solo quando serve davvero.",
    localAngle:
      "Pensata per chi cerca a Carmagnola un centro serio, non improvvisato.",
    intent: "commercial",
    benefits: [
      "Percorsi su misura e misurabili",
      "Strategia progressiva e non standard",
      "Supporto completo viso e corpo",
    ],
    faqs: [
      {
        q: "Qual e la differenza con un trattamento estetico standard?",
        a: "La differenza e nella personalizzazione e nella logica di percorso.",
      },
      {
        q: "Serve sempre tecnologia?",
        a: "No, viene inserita solo quando migliora realmente il risultato.",
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
  },
  {
    slug: "epilazione-laser-carmagnola",
    title: "Epilazione laser a Carmagnola",
    shortDescription:
      "Guida chiara su sedute, tempi e risultati del laser.",
    longDescription:
      "Qui trovi spiegato bene come funziona il laser da Rebel: prima valutazione, poi impostazioni su misura e calendario sedute realistico.",
    localAngle:
      "Utile se sei in fase di scelta e vuoi capire cosa aspettarti davvero.",
    intent: "commercial",
    benefits: [
      "Chiarezza prima della prenotazione",
      "Aspettative realistiche sui tempi",
      "Riduzione incertezze sul trattamento",
    ],
    faqs: [
      {
        q: "Quante sedute sono necessarie?",
        a: "Mediamente 8-12, con variabilita in base alla persona e alla zona.",
      },
      {
        q: "Posso iniziare il laser in ogni periodo dell'anno?",
        a: "Si, pianificando correttamente esposizione solare e follow-up.",
      },
    ],
    keywords: [
      "epilazione laser Carmagnola",
      "centro laser Carmagnola",
      "laser estetico Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
  },
  {
    slug: "laser-diodo-carmagnola",
    title: "Laser diodo a Carmagnola",
    shortDescription:
      "Spiegazione pratica del laser diodo, chiara e concreta.",
    longDescription:
      "Spieghiamo cosa cambia tra laser diodo e altre tecnologie, cosi scegli in modo piu consapevole e adatto al tuo caso.",
    localAngle:
      "Ideale se stai confrontando diverse tecnologie prima di iniziare.",
    intent: "informational",
    benefits: [
      "Spiega differenze tra tecnologie",
      "Aiuta a scegliere in modo consapevole",
      "Migliora qualita dei lead in ingresso",
    ],
    faqs: [
      {
        q: "Laser diodo e luce pulsata sono la stessa cosa?",
        a: "No, hanno caratteristiche tecniche e indicazioni differenti.",
      },
      {
        q: "Il laser diodo e sempre adatto?",
        a: "Va valutato per fototipo, colore/struttura del pelo e obiettivo.",
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
  },
  {
    slug: "trattamenti-viso-carmagnola",
    title: "Trattamenti viso a Carmagnola",
    shortDescription:
      "Trattamenti viso su tono, luminosita e qualita della pelle.",
    longDescription:
      "In questa guida trovi i trattamenti viso disponibili e capisci quale puo essere piu adatto a te in base alla situazione della tua pelle.",
    localAngle:
      "Perfetta se stai cercando un trattamento viso mirato a Carmagnola.",
    intent: "commercial",
    benefits: [
      "Selezione trattamento piu rapida",
      "Progressione chiara del percorso",
      "Migliore coerenza tra obiettivo e protocollo",
    ],
    faqs: [
      {
        q: "Come capisco quale trattamento viso fare?",
        a: "Con una valutazione iniziale su pelle, obiettivi e tempi disponibili.",
      },
      {
        q: "Ogni quanto va ripetuto un trattamento viso?",
        a: "Dipende dal protocollo, di solito tra 4 e 6 settimane.",
      },
    ],
    keywords: [
      "trattamenti viso Carmagnola",
      "centro viso Carmagnola",
      "estetista viso Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
    ],
  },
  {
    slug: "trattamenti-corpo-carmagnola",
    title: "Trattamenti corpo a Carmagnola",
    shortDescription:
      "Percorsi corpo su drenaggio, tono e benessere quotidiano.",
    longDescription:
      "I percorsi corpo Rebel uniscono manualita e tecnologie selezionate per aiutarti a sentirti piu leggera, tonica e a tuo agio.",
    localAngle:
      "Per chi cerca un percorso corpo concreto a Carmagnola e dintorni.",
    intent: "commercial",
    benefits: [
      "Programma basato su obiettivi reali",
      "Approccio progressivo e monitorato",
      "Integrazione con routine quotidiana",
    ],
    faqs: [
      {
        q: "Quanto tempo serve per vedere risultati corpo?",
        a: "I primi segnali possono comparire presto, con consolidamento su ciclo completo.",
      },
      {
        q: "Meglio trattamento singolo o pacchetto?",
        a: "Dipende dall'obiettivo, ma il percorso strutturato e spesso piu efficace.",
      },
    ],
    keywords: [
      "trattamenti corpo Carmagnola",
      "centro corpo Carmagnola",
      "rimodellamento corpo Carmagnola",
    ],
    relatedServiceSlugs: [
      "scrub-corpo-carmagnola",
      "massaggio-linfodrenante-carmagnola",
    ],
  },
  {
    slug: "drenaggio-corpo-carmagnola",
    title: "Drenaggio corpo a Carmagnola",
    shortDescription:
      "Drenaggio su misura quando senti gambe pesanti o gonfiore.",
    longDescription:
      "Qui spieghiamo come impostare un percorso drenante realistico, considerando stagione, abitudini e continuita.",
    localAngle:
      "Utile soprattutto nei periodi in cui gonfiore e pesantezza si fanno sentire di piu.",
    intent: "commercial",
    benefits: [
      "Aiuta a ridurre la sensazione di gonfiore",
      "Sostiene benessere e leggerezza",
      "Percorso regolabile nel tempo",
    ],
    faqs: [
      {
        q: "Il drenaggio e utile solo nei mesi caldi?",
        a: "No, e utile tutto l'anno con intensita diversa secondo periodo.",
      },
      {
        q: "Il drenaggio sostituisce sport e alimentazione?",
        a: "No, li integra e ne potenzia i benefici percepiti.",
      },
    ],
    keywords: [
      "drenaggio corpo Carmagnola",
      "massaggio drenante Carmagnola",
      "gambe gonfie Carmagnola trattamento",
    ],
    relatedServiceSlugs: ["massaggio-linfodrenante-carmagnola"],
  },
  {
    slug: "beauty-routine-carmagnola",
    title: "Beauty routine professionale a Carmagnola",
    shortDescription:
      "Come mantenere bene i risultati anche a casa.",
    longDescription:
      "Una guida semplice per costruire una routine sostenibile: pochi passaggi fatti bene, con costanza.",
    localAngle:
      "Pensata per chi vuole risultati piu stabili anche tra una seduta e l'altra.",
    intent: "informational",
    benefits: [
      "Aumenta durata dei risultati",
      "Riduce errori frequenti nella skincare",
      "Rende il percorso piu sostenibile nel tempo",
    ],
    faqs: [
      {
        q: "Quanti prodotti servono davvero?",
        a: "Pochi e coerenti: detersione, trattamento mirato, protezione.",
      },
      {
        q: "Quando aggiornare la routine?",
        a: "Quando cambiano stagione, obiettivo o risposta della pelle.",
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
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getCompetenceBySlug(slug: string) {
  return competencePages.find((item) => item.slug === slug);
}

