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
    shortDescription: "Un protocollo su tono, ovale e luminosità, con una progressione pulita.",
    longDescription:
      "Rebel Lift Protocol è pensato per chi vuole lavorare su tono e “tenuta” del viso con un percorso ordinato. Si parte da una lettura iniziale, si decide una priorità e si costruisce una progressione che abbia senso per la pelle di oggi (e per la tua agenda).",
    keywords: [
      "Rebel Lift Protocol",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
      "trattamento tono viso Carmagnola",
    ],
    benefits: [
      "Percorso impostato su priorità e progressione, non su sedute scollegate",
      "Focus su tono, ovale e luminosità con scelte calibrate",
      "Indicazione di ritmo e mantenimento: così il risultato resta più stabile",
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
          "Quando l'obiettivo è “tenuta” e luminosità, la cosa che funziona di più è avere una direzione chiara e seguirla nel tempo.",
          "Il protocollo diventa efficace quando è lineare: poche scelte fatte bene, distanziate con criterio, con micro-aggiustamenti quando serve.",
        ],
      },
      {
        heading: "Lettura iniziale: capire la pelle oggi",
        paragraphs: [
          "La pelle cambia con stagione, stress, sonno e routine. Per questo non lavoriamo per etichette: guardiamo come sta oggi e cosa ti dà fastidio davvero.",
          "Da lì decidiamo se il focus deve essere tono, comfort, luminosità o un mix (ma con una priorità chiara).",
        ],
      },
      {
        heading: "Mantenimento: quello che fa durare",
        paragraphs: [
          "Il mantenimento non deve diventare un lavoro. Deve diventare un'abitudine semplice che ti viene naturale.",
          "Se vuoi, ti lasciamo un piano minimale per non perdere il filo tra una seduta e l'altra.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota lettura iniziale", href: "/contatti", description: "Due righe su obiettivo e tempi, e ti orientiamo sul primo passo." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa dei protocolli Rebel." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Guida per orientarti tra obiettivi, comfort e luminosità." },
      { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola", description: "Un punto di partenza ottimo quando serve mettere ordine alla pelle." },
    ],
  },
  {
    slug: "rebirth-60-plus",
    name: "Rebirth 60+",
    price: "EUR 148",
    shortDescription: "Dedicato alle pelli mature: nutrimento e densità percepita con metodo.",
    longDescription:
      "Rebirth 60+ è un protocollo pensato per le pelli mature quando l'obiettivo è ritrovare comfort, pienezza e una sensazione di pelle più “stabile”. Non promette magie: imposta una progressione, con scelte che rispettano sensibilità e ritmo reale.",
    keywords: [
      "Rebirth 60+",
      "pelle matura Carmagnola",
      "protocollo viso pelli mature",
      "estetica avanzata Carmagnola",
    ],
    benefits: [
      "Approccio rispettoso: niente aggressività quando la pelle è più delicata",
      "Progressione su comfort e densità percepita, con calendario realistico",
      "Routine casa essenziale, pensata per essere fattibile",
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
          "Quando la pelle è più sottile o reattiva, l'eccesso è la cosa che rovina tutto: irrita e rende instabile il risultato.",
          "Qui lavoriamo con criterio: priorità chiare, progressione, e gestione semplice tra una seduta e l'altra.",
        ],
      },
      {
        heading: "Calendario: quello che riesci a seguire",
        paragraphs: [
          "Il percorso migliore è quello che sta nella tua settimana. Anche una seduta al mese può avere senso, se è impostata bene e non cambia direzione ogni volta.",
          "Se la pelle cambia, cambiamo anche noi: adattiamo, non ricominciamo da zero.",
        ],
      },
      {
        heading: "Routine a casa: essenziale",
        paragraphs: [
          "Detersione delicata, idratazione, protezione. Se serve, un attivo mirato. Stop.",
          "La costanza vale più del prodotto perfetto usato due volte.",
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
    shortDescription: "Focus contorno occhi: gonfiore, segni e stanchezza, con un percorso ordinato.",
    longDescription:
      "Eye Genesis è un protocollo perioculare: nasce per chi vuole uno sguardo più riposato e “in ordine”, senza cercare effetti finti. Si lavora con una progressione, adattata a sensibilità e abitudini (sonno, stress, trucco, struccaggio).",
    keywords: [
      "Eye Genesis",
      "contorno occhi Carmagnola",
      "trattamento occhi Carmagnola",
      "gonfiore occhiaie Carmagnola",
    ],
    benefits: [
      "Percorso perioculare calibrato su sensibilità e obiettivo",
      "Aiuta a rendere lo sguardo più ordinato e riposato nel tempo",
      "Indicazioni semplici per struccaggio e gestione a casa",
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
          "Il contorno occhi è delicato. Fare troppo (o troppo spesso) può peggiorare comfort e sensibilità.",
          "Qui preferiamo un percorso pulito: piccoli step, controllo, e zero stress per la pelle.",
        ],
      },
      {
        heading: "Abitudini che contano: sonno, struccaggio, sfregamenti",
        paragraphs: [
          "Lo sguardo cambia molto con abitudini semplici: come strucchi, quanto sfregi, quanto dormi, quanto stress c'è in quel periodo.",
          "In studio ti diamo consigli pratici, senza trasformare la routine in una checklist infinita.",
        ],
      },
      {
        heading: "Progressione: l'effetto più bello è quello che resta naturale",
        paragraphs: [
          "Un risultato elegante sul contorno occhi è quello che ti fa sembrare riposata, non “diversa”.",
          "Il protocollo è costruito per questo: ordine, comfort e continuità.",
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
    shortDescription: "Quando la pelle è spenta o disordinata: reset e comfort, senza eccessi.",
    longDescription:
      "Catalysis Ritual è un protocollo pensato quando la pelle appare opaca, “spessa” o poco uniforme. L'obiettivo è riportare ordine e comfort, senza inseguire l'effetto forte. Si lavora con criterio: lettura iniziale, progressione e mantenimento semplice.",
    keywords: [
      "Catalysis Ritual",
      "pelle opaca Carmagnola",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Aiuta a rimettere ordine quando la pelle è disordinata o opaca",
      "Approccio delicato: comfort prima di tutto",
      "Progressione e mantenimento chiari, senza cambiare idea ogni volta",
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
          "Molte pelli diventano opache perché fanno troppo: troppi attivi, troppe prove, troppo cambio di routine.",
          "Qui si fa il contrario: si semplifica e si costruisce continuità.",
        ],
      },
      {
        heading: "Reset: significa riportare comfort",
        paragraphs: [
          "Un reset fatto bene non lascia la pelle in difesa. Deve lasciarla più comoda e più “gestibile”.",
          "Per questo scegliamo intensità e calendario in base a come risponde la pelle, non in base a una tabella.",
        ],
      },
      {
        heading: "Mantenimento: il passo che evita di ricadere nel caos",
        paragraphs: [
          "Il mantenimento è la parte più sottovalutata. Con pochi gesti coerenti, il risultato resta più stabile e non devi ricominciare ogni mese.",
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
    shortDescription: "Supporto su compattezza e rimpolpamento, con lavoro progressivo.",
    longDescription:
      "Collagen Code è un protocollo pensato per chi vuole lavorare su compattezza e aspetto più pieno della pelle, senza rincorrere soluzioni “tutto e subito”. È un percorso: si imposta una progressione e si monitora la risposta nel tempo.",
    keywords: [
      "Collagen Code",
      "rimpolpamento viso Carmagnola",
      "compattezza pelle Carmagnola",
      "protocollo viso Carmagnola",
    ],
    benefits: [
      "Progressione su compattezza e resa della pelle, senza promesse irreali",
      "Metodo chiaro: priorità, calendario e micro-aggiustamenti",
      "Routine casa essenziale, coerente col percorso",
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
          "Quando si parla di compattezza, la pelle ha bisogno di tempo. La promessa veloce di solito porta solo a fare troppo e male.",
          "Collagen Code lavora bene quando resta lineare: poche scelte, fatte bene, con un ritmo che puoi tenere.",
        ],
      },
      {
        heading: "Lettura iniziale: decidere la priorità giusta",
        paragraphs: [
          "A volte il bisogno è densità, a volte comfort, a volte luminosità. Se scegliamo la priorità sbagliata, anche il protocollo migliore perde senso.",
          "Per questo partiamo sempre da una lettura iniziale e da obiettivi concreti.",
        ],
      },
      {
        heading: "Abbinamenti sensati: non fare tutto insieme",
        paragraphs: [
          "Si può abbinare, ma serve ordine. Meglio un percorso pulito che una lista di cose che non si riesce a seguire.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Se vuoi lavorare su compattezza, scrivici: scegliamo insieme la direzione." },
      { label: "Trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Guida per scegliere il punto di partenza." },
      { label: "Laser a Carmagnola", href: "/epilazione-laser-carmagnola", description: "Se vuoi abbinare laser, qui trovi come lo impostiamo." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa protocolli." },
    ],
  },
  {
    slug: "rebel-cell-regeneration",
    name: "Rebel Cell Regeneration",
    price: "EUR 159",
    shortDescription: "Percorso intensivo viso/corpo per una rigenerazione progressiva.",
    longDescription:
      "Rebel Cell Regeneration è un protocollo intensivo quando l'obiettivo è lavorare in modo più deciso su qualità cutanea e resa complessiva (viso e/o corpo). Resta comunque un percorso “umano”: progressione, controllo e mantenimento fattibile.",
    keywords: [
      "Rebel Cell Regeneration",
      "rigenerazione pelle Carmagnola",
      "protocollo viso corpo Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Protocollo intensivo con progressione e controllo",
      "Focus su qualità cutanea e resa complessiva, senza eccessi",
      "Mantenimento essenziale e realistico tra una seduta e l'altra",
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
          "Intensivo significa avere una direzione e seguirla con continuità. Non significa stressare la pelle.",
          "Il risultato migliore arriva quando la pelle resta confortevole e il percorso resta leggibile.",
        ],
      },
      {
        heading: "Progressione: il protocollo si adatta, non si impone",
        paragraphs: [
          "La pelle cambia. Se cambiano stress, stagione o routine, adattiamo anche il protocollo.",
          "È questo che rende il percorso più serio: non restare rigidi, ma restare coerenti.",
        ],
      },
      {
        heading: "Mantenimento: pochi gesti, ma coerenti",
        paragraphs: [
          "Detersione, idratazione, protezione. Se serve, un attivo mirato. Stop.",
          "Il mantenimento deve essere fattibile, altrimenti diventa un motivo per mollare.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Contatti", href: "/contatti", description: "Raccontaci obiettivo e tempi: impostiamo un primo passo sensato." },
      { label: "Protocolli epigenetici", href: "/protocolli-epigenetici", description: "Panoramica completa protocolli." },
      { label: "Trattamenti corpo", href: "/competenze/trattamenti-corpo-carmagnola", description: "Guida per orientarti tra corpo, comfort e drenaggio." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Cosa significa 'avanzata' nella pratica." },
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocolPages.find((item) => item.slug === slug);
}

