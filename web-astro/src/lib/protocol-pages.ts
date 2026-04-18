export type ProtocolPage = {
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  benefits: string[];
  faqs: Array<{ q: string; a: string }>;
  editorialSections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  relatedLinks: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
};

export const protocolPages: ProtocolPage[] = [
  {
    slug: "rebel-lift-protocol",
    name: "Rebel Lift Protocol",
    price: "EUR 148",
    shortDescription: "Un protocollo su tono, ovale e luminosita', pensato per dare al viso una presenza piu' elegante.",
    longDescription:
      "Rebel Lift Protocol e' pensato per chi desidera un viso piu' tonico, definito e luminoso. La lettura iniziale individua la priorita' estetica e apre una progressione capace di accompagnare la pelle verso una resa piu' alta e piu' raffinata.",
    keywords: [
      "Rebel Lift Protocol",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
      "trattamento tono viso Carmagnola",
    ],
    benefits: [
      "Progressione costruita su priorita' estetiche e sedute che dialogano tra loro",
      "Focus su tono, ovale e luminosita' con scelte calibrate sulla pelle",
      "Ritmo e mantenimento orientati a far restare il risultato piu' stabile e visibile",
    ],
    faqs: [
      {
        q: "È adatto a tutte?",
        a: "Dipende da pelle e obiettivo. In lettura iniziale capiamo se questo è il protocollo più sensato o se conviene partire da un passo più semplice.",
      },
      {
        q: "Quante sedute servono?",
        a: "Non esiste un numero fisso valido per tutte. Impostiamo una progressione e la adattiamo in base a risposta reale della pelle e tempi che hai a disposizione.",
      },
      {
        q: "Serve fare tante cose a casa?",
        a: "No. Preferiamo pochi passaggi coerenti: detersione, idratazione e protezione. Se serve, aggiungiamo un solo attivo mirato.",
      },
    ],
    editorialSections: [
      {
        heading: "Tono e ovale: la differenza la fa la progressione",
        paragraphs: [
          "Quando il desiderio e' un viso piu' sollevato e luminoso, la differenza la fa una direzione precisa portata avanti con continuita'.",
          "Il protocollo esprime il meglio quando ogni seduta accende la successiva: scelte mirate, ritmo coerente e piccoli aggiustamenti di alta qualita'.",
        ],
      },
      {
        heading: "Lettura iniziale: capire la pelle oggi",
        paragraphs: [
          "La pelle cambia con stagione, stress, sonno e routine. Per questo leggiamo il momento reale e scegliamo cio' che puo' valorizzarla di piu' adesso.",
          "Da li' definiamo se il focus deve essere tono, comfort, luminosita' o una combinazione gerarchica di questi elementi.",
        ],
      },
      {
        heading: "Mantenimento: quello che fa durare",
        paragraphs: [
          "Il mantenimento migliore e' quello che custodisce il risultato con naturalezza e continuita'.",
          "Ti lasciamo un piano essenziale per mantenere il viso acceso, definito e coerente tra una seduta e l'altra.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota lettura iniziale", href: "/contatti", description: "Raccontaci obiettivo e tempi per aprire il protocollo piu' adatto." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa dei protocolli Rebel." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Guida per orientarti tra obiettivi, comfort e luminosità." },
      { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola", description: "Un punto di partenza ottimo quando serve mettere ordine alla pelle." },
    ],
  },
  {
    slug: "rebirth-60-plus",
    name: "Rebirth 60+",
    price: "EUR 148",
    shortDescription: "Dedicato alle pelli mature: nutrimento, densita' e luminosita' con una firma beauty piu' ricca.",
    longDescription:
      "Rebirth 60+ e' un protocollo dedicato alle pelli mature quando il desiderio e' ritrovare comfort, pienezza e una qualita' cutanea piu' preziosa. La progressione rispetta sensibilita' e ritmo reale, accompagnando il viso verso una presenza piu' piena e luminosa.",
    keywords: [
      "Rebirth 60+",
      "pelle matura Carmagnola",
      "protocollo viso pelli mature",
      "estetica avanzata Carmagnola",
    ],
    benefits: [
      "Approccio rispettoso pensato per esaltare pelli piu' delicate e piu' esigenti",
      "Progressione su comfort, densita' percepita e luminosita' con calendario coerente",
      "Routine casa essenziale pensata per custodire la qualita' del risultato",
    ],
    faqs: [
      { q: "È solo per over 60?", a: "No: il nome è un riferimento, ma decide la pelle. Se l'esigenza è quella (comfort, stabilità, nutrimento), può avere senso anche prima." },
      { q: "Se ho pelle reattiva posso farlo?", a: "Spesso sì, proprio perché impostiamo tutto in modo graduale e adattato. In lettura iniziale scegliamo intensità e frequenza." },
      { q: "Si vede subito?", a: "Alcune sensazioni migliorano presto (comfort, “pelle più comoda”), ma la parte più bella è quella che arriva con continuità e ritmo." },
    ],
    editorialSections: [
      {
        heading: "Pelli mature: meno eccessi, più precisione",
        paragraphs: [
          "Quando la pelle e' piu' sottile o reattiva, la precisione eleva il risultato e protegge il comfort.",
          "Qui lavoriamo con priorita' nitide, progressione elegante e una gestione essenziale tra una seduta e l'altra.",
        ],
      },
      {
        heading: "Calendario: quello che riesci a seguire",
        paragraphs: [
          "Il percorso migliore entra bene nella tua agenda e continua a valorizzarti nel tempo.",
          "Quando la pelle cambia, il protocollo si aggiorna con lei e resta fedele al risultato desiderato.",
        ],
      },
      {
        heading: "Routine a casa: essenziale",
        paragraphs: [
          "Detersione delicata, idratazione, protezione e, quando utile, un attivo mirato.",
          "La costanza rende il viso piu' bello della ricerca infinita del prodotto perfetto.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Scrivici: capiamo insieme se Rebirth 60+ è adatto alla tua pelle." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Come impostiamo percorsi su misura in modo serio." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Vedi tutti i protocolli e scegli la direzione." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Obiettivi reali e primi passi sensati." },
    ],
  },
  {
    slug: "eye-genesis",
    name: "Eye Genesis",
    price: "EUR 120",
    shortDescription: "Focus contorno occhi: gonfiore, segni e stanchezza, per uno sguardo piu' disteso e curato.",
    longDescription:
      "Eye Genesis e' un protocollo perioculare pensato per chi desidera uno sguardo piu' riposato, levigato e armonioso. La progressione si adatta a sensibilita', abitudini e ritmo di vita per rendere il contorno occhi piu' fresco e luminoso.",
    keywords: [
      "Eye Genesis",
      "contorno occhi Carmagnola",
      "trattamento occhi Carmagnola",
      "gonfiore occhiaie Carmagnola",
    ],
    benefits: [
      "Percorso perioculare calibrato su sensibilita' e obiettivo estetico",
      "Aiuta a rendere lo sguardo piu' riposato, ordinato e luminoso nel tempo",
      "Indicazioni essenziali per custodire il risultato anche a casa",
    ],
    faqs: [
      { q: "È adatto se ho occhi sensibili?", a: "Dipende dal momento e dalla reattività. In studio lavoriamo in modo graduale e scegliamo intensità e prodotti con criterio." },
      { q: "Posso truccarmi dopo?", a: "Di solito sì, ma in base alla seduta e alla tua pelle. Ti diciamo cosa è meglio fare nelle ore successive." },
      { q: "Quanto spesso si fa?", a: "Si decide in base a obiettivo e risposta reale. Meglio un ritmo che riesci a tenere che una corsa per due settimane." },
    ],
    editorialSections: [
      {
        heading: "Contorno occhi: meglio precisione che trattamenti a caso",
        paragraphs: [
          "Il contorno occhi richiede finezza. Il risultato piu' bello nasce da piccoli step, precisione e controllo.",
          "Qui costruiamo una progressione delicata che mantiene comfort e lascia emergere uno sguardo piu' elegante.",
        ],
      },
      {
        heading: "Abitudini che contano: sonno, struccaggio, sfregamenti",
        paragraphs: [
          "Lo sguardo risponde molto a struccaggio, riposo, sfregamenti e stress del momento.",
          "In studio trasformiamo queste abitudini in pochi gesti capaci di sostenere un risultato piu' fresco e armonioso.",
        ],
      },
      {
        heading: "Progressione: l'effetto più bello è quello che resta naturale",
        paragraphs: [
          "Il risultato piu' elegante sul contorno occhi e' quello che ti fa apparire piu' riposata, luminosa e curata.",
          "Il protocollo e' costruito per questo: comfort, continuita' e una bellezza che resta credibile.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota", href: "/contatti", description: "Raccontaci in due righe cosa vedi/che cosa senti sul contorno occhi." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Vedi tutti i protocolli e le differenze principali." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Una guida utile per scegliere da dove partire sul viso." },
      { label: "Laminazione", href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola", description: "Un classico che valorizza lo sguardo con effetto naturale." },
    ],
  },
  {
    slug: "catalysis-ritual",
    name: "Catalysis Ritual",
    price: "EUR 150",
    shortDescription: "Quando la pelle appare spenta o disordinata: reset, comfort e nuova luminosita'.",
    longDescription:
      "Catalysis Ritual e' il protocollo dedicato alla pelle opaca, ispessita o poco uniforme quando desideri riportare luce, finezza e comfort. Lettura iniziale, progressione e mantenimento lavorano insieme per restituire una pelle piu' nitida e piu' viva.",
    keywords: [
      "Catalysis Ritual",
      "pelle opaca Carmagnola",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Riporta ordine quando la pelle appare opaca, congestionata o poco omogenea",
      "Approccio delicato che rimette il comfort al centro della resa estetica",
      "Progressione e mantenimento costruiti per dare continuita' al cambiamento",
    ],
    faqs: [
      { q: "È un trattamento aggressivo?", a: "No: la logica è l'opposto. Lavoriamo per riportare comfort e ordine, non per stressare la pelle." },
      { q: "Serve una routine complicata a casa?", a: "No. Preferiamo pochi passaggi e, se serve, un solo attivo mirato." },
      { q: "A chi lo consigliate più spesso?", a: "Quando la pelle è opaca, piena di micro-irregolarità o semplicemente “fuori equilibrio” per un periodo." },
    ],
    editorialSections: [
      {
        heading: "Opacità e disordine: spesso è questione di eccessi",
        paragraphs: [
          "Molte pelli perdono luce quando accumulano troppi stimoli, troppi attivi e troppe correzioni.",
          "Qui si riporta la pelle in una traiettoria piu' elegante: meno rumore, piu' continuita', piu' resa.",
        ],
      },
      {
        heading: "Reset: significa riportare comfort",
        paragraphs: [
          "Un reset ben costruito lascia la pelle piu' comoda, piu' liscia e piu' disponibile a ricevere il lavoro successivo.",
          "Per questo scegliamo intensita' e calendario in base alla risposta reale della pelle.",
        ],
      },
      {
        heading: "Mantenimento: il passo che evita di ricadere nel caos",
        paragraphs: [
          "Il mantenimento custodisce la luminosita' conquistata. Con pochi gesti coerenti, il risultato resta piu' stabile e piu' leggibile.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Se ti senti la pelle “spessa” o opaca, scrivici: ti diciamo da dove partire." },
      { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola", description: "Spesso è il primo step più sensato per rimettere ordine." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Cosa intendiamo per percorsi avanzati, nella pratica." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica protocolli Rebel." },
    ],
  },
  {
    slug: "collagen-code",
    name: "Collagen Code",
    price: "EUR 135",
    shortDescription: "Supporto su compattezza e rimpolpamento, con una progressione che rende il viso piu' pieno e raffinato.",
    longDescription:
      "Collagen Code e' un protocollo pensato per chi desidera compattezza, pienezza e una qualita' cutanea piu' ricca. La progressione accompagna la pelle nel tempo per rendere il viso piu' corposo, luminoso e armonioso.",
    keywords: [
      "Collagen Code",
      "rimpolpamento viso Carmagnola",
      "compattezza pelle Carmagnola",
      "protocollo viso Carmagnola",
    ],
    benefits: [
      "Progressione su compattezza e resa della pelle con aspettative eleganti e credibili",
      "Priorita', calendario e micro-aggiustamenti costruiti sulla risposta reale del viso",
      "Routine casa essenziale e coerente con la progressione del protocollo",
    ],
    faqs: [
      { q: "È un trattamento singolo o un percorso?", a: "È un percorso. La differenza la fa la progressione e la continuità, non la singola seduta." },
      { q: "Posso abbinarlo al laser?", a: "Spesso sì, ma con calendario coerente. In consulenza decidiamo priorità e come incastrare le cose senza sovraccaricare." },
      { q: "Serve fare spesso sedute?", a: "Serve un ritmo realistico. Meglio poche sedute fatte con criterio che un calendario impossibile da seguire." },
    ],
    editorialSections: [
      {
        heading: "Compatezza: la parte importante è la continuità",
        paragraphs: [
          "Quando si parla di compattezza, il risultato piu' bello arriva da un tempo ben guidato.",
          "Collagen Code lavora al meglio quando resta lineare: poche scelte di valore, un ritmo coerente e una progressione che si sente sulla pelle.",
        ],
      },
      {
        heading: "Lettura iniziale: decidere la priorità giusta",
        paragraphs: [
          "A volte il bisogno e' densita', a volte comfort, a volte luminosita'. La priorita' giusta rende il protocollo molto piu' efficace.",
          "Per questo partiamo sempre da una lettura iniziale e da obiettivi concreti, estetici e percepibili.",
        ],
      },
      {
        heading: "Abbinamenti sensati: non fare tutto insieme",
        paragraphs: [
          "Gli abbinamenti funzionano quando restano ordinati e gerarchici. Il viso risponde meglio a una regia precisa che a una somma di stimoli.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Per lavorare su compattezza, scrivici: scegliamo insieme la direzione." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Guida per scegliere il punto di partenza." },
      { label: "Laser a Carmagnola", href: "/epilazione-laser-carmagnola", description: "Se desideri abbinare laser, qui trovi come lo impostiamo." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa protocolli." },
    ],
  },
  {
    slug: "rebel-cell-regeneration",
    name: "Rebel Cell Regeneration",
    price: "EUR 159",
    shortDescription: "Percorso intensivo viso e corpo per una rigenerazione progressiva e una resa estetica piu' alta.",
    longDescription:
      "Rebel Cell Regeneration e' un protocollo intensivo dedicato a chi desidera lavorare in modo piu' deciso su qualita' cutanea e resa complessiva di viso e corpo. Progressione, controllo e mantenimento accompagnano un cambiamento percepibile e raffinato.",
    keywords: [
      "Rebel Cell Regeneration",
      "rigenerazione pelle Carmagnola",
      "protocollo viso corpo Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Protocollo intensivo con progressione, controllo e lettura costante",
      "Focus su qualita' cutanea e resa complessiva per un risultato piu' visibile",
      "Mantenimento essenziale per custodire il cambiamento tra una seduta e l'altra",
    ],
    faqs: [
      { q: "È troppo intenso per una pelle sensibile?", a: "Dipende da come sta la pelle. In lettura iniziale decidiamo intensità e ritmo; se serve, partiamo più soft." },
      { q: "È solo viso o anche corpo?", a: "Si decide in base all'obiettivo. Alcune persone lo scelgono per il viso, altre per un lavoro più completo." },
      { q: "Posso partire anche se ho poco tempo?", a: "Sì: l'importante è impostare un calendario che riesci davvero a seguire. Anche un passo al mese può essere sensato." },
    ],
    editorialSections: [
      {
        heading: "Intensivo non significa aggressivo",
        paragraphs: [
          "Intensivo significa dare alla pelle una direzione piu' decisa e mantenerla viva con continuita'.",
          "Il risultato migliore arriva quando il protocollo resta leggibile e la pelle continua a rispondere con comfort.",
        ],
      },
      {
        heading: "Progressione: il protocollo si adatta, non si impone",
        paragraphs: [
          "La pelle cambia con stagione, stress e routine. Per questo il protocollo evolve insieme a lei.",
          "E' questa elasticita' controllata che rende il percorso piu' serio, piu' credibile e piu' performante.",
        ],
      },
      {
        heading: "Mantenimento: pochi gesti, ma coerenti",
        paragraphs: [
          "Detersione, idratazione, protezione e, quando utile, un attivo mirato.",
          "Il mantenimento migliore sostiene la bellezza raggiunta e rende il protocollo facile da custodire.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Raccontaci obiettivo e tempi per aprire il protocollo piu' adatto." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa protocolli." },
      { label: "Trattamenti corpo", href: "/competenze/trattamenti-corpo-carmagnola", description: "Guida per orientarti tra corpo, comfort e drenaggio." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Cosa significa 'avanzata' nella pratica." },
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocolPages.find((item) => item.slug === slug);
}

