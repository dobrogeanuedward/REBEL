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
      "Pulizia viso completa per pelle impura, spenta o appesantita.",
    longDescription:
      "Iniziamo guardando bene la tua pelle, poi facciamo detersione profonda, esfoliazione delicata e fase riequilibrante. Il risultato è una pelle più pulita, luminosa e confortevole.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Riduce impurità e ispessimenti",
      "Migliora grana e luminosità della pelle",
      "Prepara il viso a percorsi avanzati",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare una pulizia viso?",
        a: "Di solito ogni 4-6 settimane, ma lo decidiamo in base alla tua pelle e alla tua routine.",
      },
      {
        q: "E indicata anche per pelli sensibili?",
        a: "Sì, con manovre e prodotti adattati al tuo profilo cutaneo.",
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
      "Lo scrub corpo aiuta a togliere le cellule superficiali e lascia la pelle subito più liscia. È ottimo anche come preparazione ad altri trattamenti corpo.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Pelle subito più liscia e uniforme",
      "Stimola il rinnovamento superficiale",
      "Ottima base per protocolli corpo",
    ],
    faqs: [
      {
        q: "Lo scrub è adatto tutto l'anno?",
        a: "Sì, basta adattare frequenza e intensità al periodo e alla sensibilità della tua pelle.",
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
      "Il linfodrenaggio aiuta a ridurre la sensazione di gonfiore e pesantezza, soprattutto su gambe e addome. È un trattamento delicato e molto graduale.",
    priceHint: "da EUR 69",
    category: "estetica-classica",
    benefits: [
      "Riduce sensazione di gonfiore",
      "Aiuta la leggerezza corporea",
      "Supporta percorsi rimodellanti personalizzati",
    ],
    faqs: [
      {
        q: "Il linfodrenante è doloroso?",
        a: "No, è una tecnica delicata e progressiva.",
      },
      {
        q: "Quante sedute servono per vedere beneficio?",
        a: "La sensazione di leggerezza spesso si sente già dalle prime sedute, poi si stabilizza con il ciclo.",
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
      "Sguardo visivamente più aperto",
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
      "Con Thory impostiamo il laser in base a fototipo, zona e obiettivo. Il manipolo Ice Polar aiuta a rendere la seduta più confortevole. Il percorso è graduale, con controlli regolari e attenzione al comfort.",
    priceHint: "da EUR 25.90 per zona",
    category: "laser",
    benefits: [
      "Ricrescita progressivamente ridotta",
      "Migliore gestione dei peli incarniti",
      "Protocollo personalizzato e monitorato",
    ],
    faqs: [
      {
        q: "Il laser viso è adatto alle pelli sensibili?",
        a: "Sì, dopo valutazione iniziale e settaggio corretto.",
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
      "Il laser corpo viene pianificato sulle zone che vuoi trattare, con Thory e manipolo Ice Polar per migliorare la tollerabilità durante la seduta.",
    priceHint: "da EUR 25.90 a 103.60",
    category: "laser",
    benefits: [
      "Riduzione progressiva della ricrescita",
      "Migliore comfort nel tempo",
      "Piano strutturato su zone e stagionalità",
    ],
    faqs: [
      {
        q: "Il laser corpo è doloroso?",
        a: "Dipende dalla sensibilità personale, ma impostiamo sempre il trattamento per renderlo tollerabile.",
      },
      {
        q: "Posso trattare più zone nello stesso appuntamento?",
        a: "Sì, con pianificazione adeguata.",
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
      "Quando confronti più centri estetici è facile perdersi. Qui trovi criteri pratici per scegliere con lucidità: metodo, chiarezza prezzi, competenze reali e continuità del percorso.",
    localAngle:
      "Perfetta se stai confrontando più opzioni a Carmagnola prima di prenotare.",
    intent: "informational",
    benefits: [
      "Riduce confusione nella fase di confronto",
      "Aiuta a scegliere su criteri oggettivi",
      "Migliora la qualità della decisione prima del primo appuntamento",
    ],
    faqs: [
      {
        q: "Quali segnali indicano un centro estetico affidabile?",
        a: "Metodo chiaro, comunicazione trasparente, obiettivi concreti e continuita nel tempo.",
      },
      {
        q: "Il prezzo più basso è sempre la scelta migliore?",
        a: "Non sempre: conta il valore complessivo del percorso e la qualità dell'esecuzione.",
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
        q: "Qual è la differenza con un trattamento estetico standard?",
        a: "La differenza è nella personalizzazione e nella logica di percorso.",
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
    title: "Epilazione laser a Carmagnola: come funziona e da dove partire",
    shortDescription:
      "Chiarimenti su sedute, tempi e aspettative: cosa aspettarti davvero dal laser.",
    longDescription:
      "Qui trovi spiegato bene come funziona il laser da Rebel: prima valutazione, poi impostazioni su misura e un calendario sensato.",
    localAngle:
      "Utile se sei in fase di scelta e vuoi capire cosa aspettarti davvero.",
    intent: "commercial",
    benefits: [
      "Chiarezza prima della prenotazione",
      "Aspettative chiare sui tempi",
      "Riduzione incertezze sul trattamento",
    ],
    faqs: [
      {
        q: "Quante sedute sono necessarie?",
        a: "Mediamente 8-12, con variabilità in base alla persona e alla zona.",
      },
      {
        q: "Posso iniziare il laser in ogni periodo dell'anno?",
        a: "Sì, pianificando correttamente esposizione solare e follow-up.",
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
  },
  {
    slug: "laser-diodo-carmagnola",
    title: "Laser diodo a Carmagnola",
    shortDescription:
      "Spiegazione pratica del laser diodo, chiara e concreta.",
    longDescription:
      "Cosa significa davvero \"laser diodo\" per l'epilazione: differenze con IPL, cosa aspettarsi, come valutare un centro serio e come impostare un percorso coerente.",
    localAngle:
      "Ideale se stai confrontando diverse tecnologie prima di iniziare.",
    intent: "informational",
    benefits: [
      "Spiega differenze tra tecnologie",
      "Aiuta a scegliere in modo consapevole",
      "Migliora qualità dei lead in ingresso",
    ],
    faqs: [
      {
        q: "Laser diodo e luce pulsata sono la stessa cosa?",
        a: "No, hanno caratteristiche tecniche e indicazioni differenti.",
      },
      {
        q: "Il laser diodo è sempre adatto?",
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
    editorialSections: [
      {
        heading: "Prima chiarezza: \"laser diodo\" non e una parola magica, e una tecnologia",
        paragraphs: [
          "Quando si cerca \"laser diodo\" online, spesso si trovano promesse veloci e confronti aggressivi. In realta la domanda utile e un'altra: questa tecnologia e adatta al mio tipo di pelo e alla mia pelle, e viene gestita in modo competente?",
          "Il laser per epilazione lavora in modo selettivo sul pelo (non su \"tutta la pelle\"): proprio per questo parametri, protocollo e calendario contano piu della sola etichetta commerciale.",
        ],
      },
      {
        heading: "Laser diodo vs luce pulsata (IPL): cosa cambia in pratica",
        paragraphs: [
          "La luce pulsata (IPL) e una luce a spettro piu ampio; il laser usa una luce piu specifica. Tradotto: sono strumenti diversi, con logiche diverse, e non sempre offrono la stessa esperienza o gli stessi criteri di impostazione.",
          "Il punto non e trovare \"il migliore\" in assoluto: e scegliere la soluzione piu sensata per fototipo, colore del pelo, zona e obiettivo (riduzione progressiva e gestione della ricrescita nel tempo).",
        ],
      },
      {
        heading: "Perche servono piu sedute (e perche la costanza e parte del risultato)",
        paragraphs: [
          "Molte persone partono con un'aspettativa sbagliata: pensano che basti una seduta \"forte\". In realta il percorso e fatto di appuntamenti distanziati per accompagnare i cicli del pelo e lavorare in modo progressivo.",
          "Un centro serio ti spiega tempi e variabilita senza venderti certezze: la risposta cambia da persona a persona, e anche la stessa persona puo rispondere in modo diverso tra viso e corpo.",
        ],
      },
      {
        heading: "Come riconoscere un centro affidabile a Carmagnola (prima di iniziare)",
        paragraphs: [
          "Fai domande semplici: chi imposta i parametri, come viene gestito il post-seduta, come si adatta il piano se la pelle cambia, e cosa succede se salti una seduta.",
          "Se la comunicazione e chiara prima, lo sara anche dopo. E la chiarezza, in un percorso laser, e un vantaggio enorme: ti aiuta a seguire le indicazioni con serenita e a mantenere un ritmo sostenibile.",
        ],
      },
      {
        heading: "Il nostro approccio in studio: tecnologia + metodo (non trattamenti standard)",
        paragraphs: [
          "Da Rebel a Carmagnola impostiamo l'epilazione laser come un percorso: valutazione iniziale, settaggio su misura e monitoraggio. La tecnologia serve a rendere il lavoro piu preciso, ma il cuore resta il metodo.",
          "Se vuoi approfondire, trovi anche le guide dedicate a laser viso e laser corpo, oltre alle schede servizio con FAQ pratiche e indicazioni chiare su come iniziare.",
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
      "Trattamenti viso su tono, luminosità e qualità della pelle.",
    longDescription:
      "In questa guida trovi i trattamenti viso disponibili e capisci quale può essere più adatto a te in base alla situazione della tua pelle.",
    localAngle:
      "Perfetta se stai cercando un trattamento viso mirato a Carmagnola.",
    intent: "commercial",
    benefits: [
      "Selezione trattamento più rapida",
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
      "I percorsi corpo Rebel uniscono manualità e tecnologie selezionate per aiutarti a sentirti più leggera, tonica e a tuo agio.",
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
        a: "Dipende dall'obiettivo, ma il percorso strutturato è spesso più efficace.",
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
      "Qui spieghiamo come impostare un percorso drenante sensato, considerando stagione, abitudini e continuità.",
    localAngle:
      "Utile soprattutto nei periodi in cui gonfiore e pesantezza si fanno sentire di più.",
    intent: "commercial",
    benefits: [
      "Aiuta a ridurre la sensazione di gonfiore",
      "Sostiene benessere e leggerezza",
      "Percorso regolabile nel tempo",
    ],
    faqs: [
      {
        q: "Il drenaggio è utile solo nei mesi caldi?",
        a: "No, è utile tutto l'anno con intensità diversa secondo periodo.",
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
      "Pensata per chi vuole risultati più stabili anche tra una seduta e l'altra.",
    intent: "informational",
    benefits: [
      "Aumenta durata dei risultati",
      "Riduce errori frequenti nella skincare",
      "Rende il percorso più sostenibile nel tempo",
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
  {
    slug: "epilazione-laser-viso-carmagnola-guida-realistica",
    title: "Epilazione laser viso a Carmagnola: cosa sapere prima di iniziare",
    shortDescription:
      "Cosa aspettarti dal laser viso: tempi, sedute, attenzione alla pelle e scelte sensate prima di iniziare.",
    longDescription:
      "Se stai valutando l'epilazione laser viso a Carmagnola, qui trovi una guida chiara: cosa aspettarti davvero, come prepararti e quali segnali cercare per scegliere un centro serio.",
    localAngle:
      "Pensata per chi confronta più centri estetici a Carmagnola e vuole decidere con consapevolezza.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a fissare aspettative chiare gia dalla prima consulenza",
      "Riduce dubbi su sicurezza, tempi e frequenza delle sedute",
      "Ti guida nella scelta del percorso più adatto al tuo viso",
    ],
    faqs: [
      {
        q: "L'epilazione laser viso è definitiva?",
        a: "Parliamo di riduzione progressiva e prolungata della ricrescita: in molti casi servono anche richiami nel tempo.",
      },
      {
        q: "Ogni quanto si fanno le sedute viso?",
        a: "Di solito il calendario viene impostato in intervalli di alcune settimane e adattato in base alla risposta individuale.",
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
    heroImage: {
      src: "/editoriali/laser-viso-rebel.svg",
      alt: "Illustrazione Rebel con linee di luce dedicate al laser viso",
    },
    editorialSections: [
      {
        heading: "La domanda giusta non è solo \"quanto costa\"",
        paragraphs: [
          "Quando una cliente arriva in studio e ci chiede il prezzo, la capiamo. È normale. Ma per il viso, la domanda più utile è: che percorso serve davvero alla mia pelle e al mio tipo di pelo?",
          "Nel viso ogni dettaglio conta: fototipo, sensibilità cutanea, fase di crescita del pelo e abitudini quotidiane. Ecco perché un piano serio parte sempre da valutazione, test e parametri calibrati.",
        ],
      },
      {
        heading: "Aspettative reali: risultati progressivi, non magie",
        paragraphs: [
          "Le fonti cliniche più autorevoli spiegano che il laser riduce la ricrescita nel tempo, ma richiede più sedute e spesso mantenimento. È un percorso, non una promessa lampo.",
          "Tradotto nella vita vera: se cerchi un risultato elegante e stabile, la costanza vince sempre sulla fretta. È qui che si vede la differenza tra protocollo improvvisato e metodo professionale.",
        ],
      },
      {
        heading: "Come riconoscere un centro affidabile a Carmagnola",
        paragraphs: [
          "Durante la consulenza chiedi sempre: chi imposta i parametri, come viene gestito il post-seduta, come si adatta il piano se la risposta della pelle cambia.",
          "Un centro serio non promette l'impossibile: ti spiega benefici, limiti, rischi e tempi con linguaggio semplice. La trasparenza è già parte del risultato.",
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
      "Come organizzare il laser corpo in modo sostenibile e coerente: zone, tempi e calendario.",
    longDescription:
      "Una guida concreta per chi vuole iniziare il laser corpo a Carmagnola con una strategia chiara: zone prioritarie, stagionalità e gestione del percorso senza stress.",
    localAngle:
      "Ideale se arrivi da Carmagnola o comuni vicini e vuoi un programma coerente, non standard.",
    intent: "commercial",
    benefits: [
      "Aiuta a pianificare bene zone e calendario",
      "Riduce errori comuni prima e dopo la seduta",
      "Migliora continuità e qualità del risultato nel tempo",
    ],
    faqs: [
      {
        q: "Si possono trattare più zone nello stesso periodo?",
        a: "Sì, con priorità e timing corretti definiti in consulenza, in base a tollerabilità e obiettivo.",
      },
      {
        q: "Estate e laser sono incompatibili?",
        a: "Non in assoluto: serve una gestione attenta di esposizione e protezione solare, con linee guida precise.",
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
    heroImage: {
      src: "/editoriali/laser-corpo-rebel.svg",
      alt: "Illustrazione Rebel con linee luminose dinamiche dedicate al laser corpo",
    },
    editorialSections: [
      {
        heading: "Da dove partire: non tutte le zone hanno la stessa priorità",
        paragraphs: [
          "Nella pratica quotidiana, partire da tutto insieme non è sempre la scelta migliore. Spesso conviene definire priorità: zone più visibili, più fastidiose o con peli incarniti frequenti.",
          "Questo approccio riduce ansia, migliora aderenza al piano e permette di leggere meglio i risultati già nelle prime fasi.",
        ],
      },
      {
        heading: "Tempi e cicli: il laser lavora con la biologia del pelo",
        paragraphs: [
          "Le sedute non sono casuali: rispettano cicli di crescita diversi per area. Per questo i risultati migliori arrivano quando si segue il calendario senza salti continui.",
          "Un piano serio resta flessibile: se la pelle reagisce in modo diverso, i parametri si aggiornano. Il metodo è vivo, non rigido.",
        ],
      },
      {
        heading: "Il valore di un protocollo umano e trasparente",
        paragraphs: [
          "Nel nostro modo di lavorare, il laser non è una macchina da accendere: è una relazione professionale fatta di ascolto, monitoraggio e micro-regolazioni.",
          "Quando la cliente capisce cosa sta facendo e perché, il percorso diventa più semplice, più sostenibile e molto più efficace.",
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
    slug: "pulizia-viso-carmagnola-frequenza-benefici",
    title: "Pulizia viso a Carmagnola: ogni quanto farla e per chi ha senso",
    shortDescription:
      "Frequenza, pelle sensibile, errori comuni e come mantenere bene il risultato dopo la pulizia viso.",
    longDescription:
      "Una guida naturale e concreta per capire quando la pulizia viso serve davvero, come integrarla nella routine e come evitare eccessi che irritano la pelle.",
    localAngle:
      "Scritta per chi cerca a Carmagnola un approccio viso professionale, delicato e progressivo.",
    intent: "commercial",
    benefits: [
      "Aiuta a scegliere la frequenza giusta in base alla pelle reale",
      "Migliora la qualità della routine tra una seduta e l'altra",
      "Riduce i classici errori da sovra-trattamento",
    ],
    faqs: [
      {
        q: "Pulizia viso e pelle sensibile: si può fare?",
        a: "Sì, con manovre e prodotti calibrati: l'obiettivo è riequilibrare, non stressare la barriera cutanea.",
      },
      {
        q: "Più trattamenti ravvicinati danno risultati migliori?",
        a: "Non sempre. Frequenza e intensità vanno adattate, perché l'eccesso può aumentare irritazione e instabilità.",
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
    heroImage: {
      src: "/editoriali/pulizia-viso-rebel.svg",
      alt: "Illustrazione Rebel con onde luminose e texture delicate sul tema pulizia viso",
    },
    editorialSections: [
      {
        heading: "Pulizia viso fatta bene: meno aggressività, più strategia",
        paragraphs: [
          "Molte persone arrivano convinte che \"più forte\" significhi \"più efficace\". In realtà, quando la pelle è già stressata, serve precisione: detersione, esfoliazione delicata, riequilibrio.",
          "Una seduta ben costruita migliora comfort e luminosità senza lasciare la pelle in difesa per giorni.",
        ],
      },
      {
        heading: "Ogni quanto? Dipende dalla tua pelle, non dal calendario fisso",
        paragraphs: [
          "La frequenza ideale cambia in base a sebo, sensibilità, stagione, routine e obiettivo. Un protocollo professionale ragiona su questi fattori, non su automatismi.",
          "Quando la pelle cambia, cambia anche il piano. Questo è il modo più serio per mantenere risultati stabili nel tempo.",
        ],
      },
      {
        heading: "Routine casa + cabina: il duo che fa la differenza",
        paragraphs: [
          "La cabina dà direzione, la routine casa consolida. Anche pochi passaggi fatti con costanza possono migliorare molto la resa del trattamento professionale.",
          "Il nostro approccio resta semplice: leggere la pelle, scegliere priorità, e costruire un ritmo sostenibile nella vita vera.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - How to safely exfoliate at home",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home",
      },
      {
        label: "AAD - Face washing 101",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101",
      },
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "linfodrenante-carmagnola-guida-pratica",
    title: "Linfodrenante a Carmagnola: quando è utile e come impostare il percorso",
    shortDescription:
      "Massaggio linfodrenante: benefici percepiti, limiti e criteri per impostare un piano fatto bene.",
    longDescription:
      "Un articolo pratico e onesto per capire quando il linfodrenante puo aiutarti davvero, quali aspettative avere e come inserirlo in un percorso corpo coerente.",
    localAngle:
      "Dedicata a chi cerca a Carmagnola un trattamento drenante serio e personalizzato.",
    intent: "commercial",
    benefits: [
      "Distingue benefici concreti da aspettative gonfiate",
      "Aiuta a capire quando inserirlo in un percorso corpo",
      "Migliora la qualità della scelta prima di prenotare",
    ],
    faqs: [
      {
        q: "Il linfodrenante risolve tutto da solo?",
        a: "No, funziona meglio come parte di un piano più ampio con abitudini coerenti e monitoraggio nel tempo.",
      },
      {
        q: "Quante sedute servono?",
        a: "Dipende da situazione e obiettivo: la progressione si valuta seduta dopo seduta, con adattamenti reali.",
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
    heroImage: {
      src: "/editoriali/linfodrenante-rebel.svg",
      alt: "Illustrazione Rebel con linee fluide e glow morbido dedicato al drenaggio corpo",
    },
    editorialSections: [
      {
        heading: "Partiamo da una verità semplice: il drenaggio non è una bacchetta magica",
        paragraphs: [
          "Il linfodrenante può dare una sensazione di leggerezza concreta e aiutare nella gestione del gonfiore, ma non sostituisce tutto il resto.",
          "Quando viene inserito in un piano coerente, con tempi adeguati e monitoraggio, diventa molto piu utile e sostenibile.",
        ],
      },
      {
        heading: "A chi può servire di più",
        paragraphs: [
          "In studio lo consigliamo soprattutto quando c'è sensazione di pesantezza, ritenzione o periodi in cui il corpo fatica a \"sbloccarsi\".",
          "Il punto non è fare più sedute possibili, ma fare le sedute giuste, nella fase giusta.",
        ],
      },
      {
        heading: "Approccio professionale: ascolto, adattamento, continuità",
        paragraphs: [
          "Un percorso drenante efficace nasce da osservazione e adattamento: non tutte le settimane sono uguali e non tutte le persone rispondono allo stesso modo.",
          "La qualita del risultato dipende da quanto il piano resta umano: chiaro da capire, facile da seguire.",
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
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getCompetenceBySlug(slug: string) {
  return competencePages.find((item) => item.slug === slug);
}

