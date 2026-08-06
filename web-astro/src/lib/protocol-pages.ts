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
    shortDescription: "Trattamento viso dedicato a perdita di tono, ovale meno definito e pelle spenta.",
    longDescription:
      "Rebel Lift Protocol è un trattamento viso pensato per lavorare sull’aspetto di tonicità, definizione dell’ovale e luminosità. Durante la valutazione controlliamo elasticità, idratazione, sensibilità e routine, poi definiamo sedute, frequenza e mantenimento.",
    keywords: [
      "Rebel Lift Protocol",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
      "trattamento tono viso Carmagnola",
    ],
    benefits: [
      "Dedicato a perdita di tono, ovale meno definito e pelle dall’aspetto stanco",
      "Programma personalizzato in base a elasticità, idratazione e sensibilità",
      "Indicazioni su numero di sedute, frequenza e mantenimento domiciliare",
    ],
    faqs: [
      {
        q: "Per quali esigenze viene consigliato?",
        a: "Può essere indicato quando vuoi lavorare su tonicità, definizione dell’ovale e luminosità. La valutazione serve a verificare se è il trattamento adatto oppure se conviene iniziare con idratazione o Skin Reset.",
      },
      {
        q: "Quante sedute sono previste?",
        a: "Il numero dipende dalle condizioni iniziali e dal risultato desiderato. Dopo la prima visita ricevi un’indicazione su frequenza iniziale e data del controllo.",
      },
      {
        q: "Quale routine è consigliata a casa?",
        a: "In genere partiamo da detersione, idratazione e protezione solare. Eventuali attivi aggiuntivi vengono indicati in base alla pelle.",
      },
    ],
    editorialSections: [
      {
        heading: "Quando può essere indicato",
        paragraphs: [
          "Rebel Lift Protocol è dedicato a chi nota una minore tonicità, un ovale meno definito oppure una pelle che appare spenta e poco compatta.",
          "Prima di proporlo controlliamo anche idratazione e sensibilità, perché una pelle disidratata o reattiva può richiedere una preparazione iniziale.",
        ],
      },
      {
        heading: "Come viene programmato",
        paragraphs: [
          "La prima visita definisce obiettivo, prodotti, manualità ed eventuali tecnologie da utilizzare.",
          "Il programma riporta numero indicativo di sedute, intervallo tra gli appuntamenti e momento in cui controllare i risultati.",
        ],
      },
      {
        heading: "Mantenimento tra una seduta e l’altra",
        paragraphs: [
          "Una routine semplice aiuta a conservare comfort e idratazione: detersione delicata, crema adatta alla pelle e protezione solare.",
          "Al termine della fase iniziale possiamo programmare richiami periodici in base alla risposta ottenuta.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Valutiamo tonicità, idratazione e ovale e ti indichiamo sedute e prezzo." },
      { label: "Tutti i protocolli viso", href: "/protocolli-epigenetici", description: "Confronta i protocolli Rebel e i loro obiettivi principali." },
      { label: "Guida ai trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Luminosità, idratazione, impurità, tono e contorno occhi." },
      { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola", description: "Prezzo, durata e indicazioni della pulizia viso Rebel." },
    ],
  },
  {
    slug: "rebirth-60-plus",
    name: "Rebirth 60+",
    price: "EUR 148",
    shortDescription: "Protocollo per pelle matura, secca o sottile, dedicato a comfort, nutrimento e aspetto di maggiore pienezza.",
    longDescription:
      "Rebirth 60+ è un protocollo viso dedicato alla pelle matura oppure particolarmente secca, sottile e bisognosa di comfort. Valutiamo idratazione, sensibilità, elasticità e routine per definire prodotti, intensità, frequenza e mantenimento.",
    keywords: [
      "Rebirth 60+",
      "pelle matura Carmagnola",
      "protocollo viso pelli mature",
      "estetica avanzata Carmagnola",
    ],
    benefits: [
      "Dedicato a secchezza, minore elasticità e sensazione di pelle sottile o poco confortevole",
      "Prodotti e intensità scelti in base alla sensibilità della pelle matura",
      "Routine domiciliare semplice per idratazione, comfort e protezione",
    ],
    faqs: [
      { q: "È riservato alle persone sopra i 60 anni?", a: "No. Il nome indica il tipo di esigenza, non un limite anagrafico. Può essere adatto anche prima quando la pelle è molto secca, sottile o poco elastica." },
      { q: "È adatto a una pelle sensibile?", a: "La sensibilità viene valutata prima del trattamento. Prodotti, intensità e frequenza vengono adattati alle condizioni osservate." },
      { q: "Che cosa posso aspettarmi dopo la prima seduta?", a: "L’effetto immediato più comune riguarda comfort e idratazione percepita. Per tono ed elasticità viene normalmente proposto un programma su più appuntamenti." },
    ],
    editorialSections: [
      {
        heading: "Per quali caratteristiche della pelle",
        paragraphs: [
          "Rebirth 60+ è pensato per pelle matura, secca, sottile o meno elastica, soprattutto quando compaiono sensazione di tensione e bisogno di maggiore nutrimento.",
          "La valutazione controlla anche eventuale reattività, così possiamo scegliere prodotti e intensità compatibili.",
        ],
      },
      {
        heading: "Sedute e frequenza",
        paragraphs: [
          "Il programma viene costruito in base alle condizioni iniziali e alla disponibilità della cliente.",
          "Durante gli appuntamenti controlliamo comfort, idratazione e aspetto della pelle e aggiorniamo la frequenza quando necessario.",
        ],
      },
      {
        heading: "Cura quotidiana consigliata",
        paragraphs: [
          "La routine indicata è essenziale: detergente delicato, prodotto idratante o nutriente e protezione solare.",
          "Eventuali sieri o attivi vengono aggiunti solo dopo aver valutato tollerabilità e necessità reale.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Valutiamo idratazione, elasticità e sensibilità della pelle." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Tecnologie e protocolli disponibili nello studio Rebel." },
      { label: "Tutti i protocolli viso", href: "/protocolli-epigenetici", description: "Confronta obiettivi, prezzi e indicazioni dei protocolli." },
      { label: "Guida ai trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Una panoramica delle principali esigenze del viso." },
    ],
  },
  {
    slug: "eye-genesis",
    name: "Eye Genesis",
    price: "EUR 120",
    shortDescription: "Trattamento specifico per contorno occhi con gonfiore, segni di stanchezza, secchezza e linee sottili.",
    longDescription:
      "Eye Genesis è un protocollo dedicato al contorno occhi. Può essere proposto quando la zona appare gonfia, secca, segnata o affaticata. Prima della seduta valutiamo sensibilità, abitudini, prodotti utilizzati e risultato desiderato.",
    keywords: [
      "Eye Genesis",
      "contorno occhi Carmagnola",
      "trattamento occhi Carmagnola",
      "gonfiore occhiaie Carmagnola",
    ],
    benefits: [
      "Trattamento specifico per una zona sottile e sensibile come il contorno occhi",
      "Dedicato a gonfiore, secchezza, linee sottili e aspetto affaticato",
      "Indicazioni pratiche su struccaggio, prodotti e cura della zona a casa",
    ],
    faqs: [
      { q: "È adatto agli occhi sensibili?", a: "La sensibilità viene controllata prima della seduta. Prodotti e intensità vengono scelti in base alla zona e alle eventuali reazioni riferite." },
      { q: "Posso truccarmi dopo il trattamento?", a: "Dipende dalla seduta eseguita e dalla risposta della pelle. Al termine ricevi indicazioni precise sulle ore successive." },
      { q: "Quanto spesso viene eseguito?", a: "La frequenza dipende da gonfiore, secchezza, segni e risposta individuale. Viene indicata dopo la valutazione iniziale." },
    ],
    editorialSections: [
      {
        heading: "Che cosa valutiamo sul contorno occhi",
        paragraphs: [
          "Osserviamo gonfiore, secchezza, linee sottili, sensibilità e aspetto generale della zona perioculare.",
          "Chiediamo inoltre come strucchi gli occhi, quali prodotti usi e se porti lenti a contatto o hai particolari sensibilità note.",
        ],
      },
      {
        heading: "Come si svolge il programma",
        paragraphs: [
          "Il trattamento viene adattato alla zona e può essere programmato come seduta singola oppure all’interno di un percorso viso.",
          "La frequenza viene rivista in base alla risposta del contorno occhi e al risultato desiderato.",
        ],
      },
      {
        heading: "Indicazioni da seguire a casa",
        paragraphs: [
          "Uno struccaggio delicato e prodotti adatti alla zona aiutano a limitare sfregamenti e secchezza.",
          "Dopo la seduta indichiamo quali prodotti utilizzare e quando riprendere trucco o attività abituali.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Descrivi gonfiore, secchezza o segni che vuoi trattare." },
      { label: "Tutti i protocolli viso", href: "/protocolli-epigenetici", description: "Confronta i protocolli dedicati a viso e contorno occhi." },
      { label: "Guida ai trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Informazioni su luminosità, tono, impurità e contorno occhi." },
      { label: "Laminazione ciglia e sopracciglia", href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola", description: "Prezzo e informazioni sulla laminazione Rebel." },
    ],
  },
  {
    slug: "catalysis-ritual",
    name: "Catalysis Ritual",
    price: "EUR 150",
    shortDescription: "Protocollo viso per pelle opaca, ispessita, congestionata o poco uniforme.",
    longDescription:
      "Catalysis Ritual è dedicato alla pelle che appare opaca, ispessita, congestionata o irregolare. La valutazione controlla sensibilità, impurità, grana, idratazione e prodotti utilizzati, così possiamo definire trattamento, intensità e mantenimento.",
    keywords: [
      "Catalysis Ritual",
      "pelle opaca Carmagnola",
      "protocollo viso Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Dedicato a opacità, grana irregolare, impurità e sensazione di pelle ispessita",
      "Intensità adattata a sensibilità, idratazione e prodotti già utilizzati",
      "Routine domiciliare semplificata per evitare sovrapposizioni di attivi",
    ],
    faqs: [
      { q: "Il trattamento è aggressivo?", a: "L’intensità viene scelta dopo aver valutato sensibilità e barriera cutanea. L’obiettivo è migliorare grana e luminosità mantenendo un buon comfort." },
      { q: "Quale routine devo seguire a casa?", a: "In genere riduciamo la routine a detersione, idratazione e protezione. Gli attivi vengono indicati solo quando utili e compatibili." },
      { q: "Quando viene consigliato?", a: "Può essere indicato quando la pelle appare spenta, ispessita, congestionata, piena di piccole irregolarità o poco uniforme." },
    ],
    editorialSections: [
      {
        heading: "Quando la pelle appare opaca o congestionata",
        paragraphs: [
          "Catalysis Ritual viene valutato quando la superficie cutanea appare poco luminosa, irregolare o appesantita da impurità e prodotti sovrapposti.",
          "Prima del trattamento verifichiamo anche idratazione e sensibilità per scegliere un’intensità adeguata.",
        ],
      },
      {
        heading: "Come viene impostato il trattamento",
        paragraphs: [
          "La seduta e gli attivi vengono scelti in base a grana, impurità, comfort e routine utilizzata a casa.",
          "Il controllo successivo serve a verificare luminosità, uniformità e tollerabilità e a decidere se ripetere o modificare il programma.",
        ],
      },
      {
        heading: "Routine e mantenimento",
        paragraphs: [
          "Una routine essenziale limita sovrapposizioni e aiuta a conservare il risultato: detergente, idratante e protezione solare.",
          "Quando indicato aggiungiamo un solo attivo mirato, con istruzioni precise su frequenza e quantità.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Valutiamo opacità, impurità, grana e sensibilità." },
      { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola", description: "Prezzo e informazioni sulla pulizia viso Rebel." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Tecnologie e protocolli disponibili per il viso." },
      { label: "Tutti i protocolli viso", href: "/protocolli-epigenetici", description: "Confronta obiettivi e prezzi dei protocolli Rebel." },
    ],
  },
  {
    slug: "collagen-code",
    name: "Collagen Code",
    price: "EUR 135",
    shortDescription: "Protocollo viso dedicato a compattezza, idratazione e aspetto di maggiore pienezza della pelle.",
    longDescription:
      "Collagen Code è un protocollo viso per chi desidera lavorare sull’aspetto di compattezza, idratazione e pienezza. La valutazione controlla elasticità, secchezza, sensibilità e tono, poi definisce prodotti, sedute e frequenza.",
    keywords: [
      "Collagen Code",
      "rimpolpamento viso Carmagnola",
      "compattezza pelle Carmagnola",
      "protocollo viso Carmagnola",
    ],
    benefits: [
      "Dedicato a pelle meno compatta, disidratata o dall’aspetto meno pieno",
      "Programma adattato a elasticità, secchezza, sensibilità e tono del viso",
      "Indicazioni su sedute, controlli e routine domiciliare",
    ],
    faqs: [
      { q: "È una seduta singola o un percorso?", a: "Può essere provato come singola seduta, ma per lavorare su compattezza e idratazione viene spesso proposto un programma con più appuntamenti e controlli." },
      { q: "Può essere abbinato ad altri trattamenti?", a: "Sì, quando le condizioni della pelle lo permettono. Gli abbinamenti e le distanze tra le sedute vengono stabiliti durante la valutazione." },
      { q: "Quanto spesso si esegue?", a: "La frequenza dipende dalle condizioni iniziali e dal programma scelto. Ricevi un calendario indicativo prima di iniziare." },
    ],
    editorialSections: [
      {
        heading: "Perdita di compattezza e disidratazione",
        paragraphs: [
          "Collagen Code viene valutato quando la pelle appare meno compatta, disidratata o con un aspetto meno pieno.",
          "Controlliamo anche sensibilità e routine, perché la qualità dell’idratazione influenza il modo in cui la pelle appare e risponde.",
        ],
      },
      {
        heading: "Sedute e controlli",
        paragraphs: [
          "Il programma indica numero orientativo di sedute e intervalli, in base all’obiettivo e alla disponibilità della cliente.",
          "Ai controlli valutiamo comfort, idratazione e aspetto di compattezza e aggiorniamo il trattamento se necessario.",
        ],
      },
      {
        heading: "Abbinamenti con altri trattamenti",
        paragraphs: [
          "Il protocollo può essere inserito in un percorso viso insieme ad altri trattamenti compatibili.",
          "Le combinazioni vengono pianificate evitando sovrapposizioni e rispettando i tempi di recupero della pelle.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Valutiamo idratazione, elasticità e compattezza del viso." },
      { label: "Guida ai trattamenti viso", href: "/competenze/trattamenti-viso-carmagnola", description: "Confronta le principali esigenze trattate sul viso." },
      { label: "Epilazione laser", href: "/epilazione-laser-carmagnola", description: "Informazioni su tecnologia, zone e prezzi del Laser Ice Polar." },
      { label: "Tutti i protocolli viso", href: "/protocolli-epigenetici", description: "Confronta protocolli, obiettivi e prezzi." },
    ],
  },
  {
    slug: "rebel-cell-regeneration",
    name: "Rebel Cell Regeneration",
    price: "EUR 159",
    shortDescription: "Protocollo intensivo per viso o corpo dedicato a texture, luminosità e qualità complessiva della pelle.",
    longDescription:
      "Rebel Cell Regeneration è un protocollo intensivo utilizzabile su viso o corpo quando l’obiettivo riguarda texture, luminosità e qualità complessiva della pelle. La valutazione definisce zona, sensibilità, prodotti, intensità, sedute e mantenimento.",
    keywords: [
      "Rebel Cell Regeneration",
      "rigenerazione pelle Carmagnola",
      "protocollo viso corpo Carmagnola",
      "estetica epigenetica Carmagnola",
    ],
    benefits: [
      "Utilizzabile su viso o corpo dopo una valutazione specifica della zona",
      "Dedicato a texture irregolare, pelle spenta e qualità cutanea complessiva",
      "Programma con sedute, controlli e mantenimento definiti prima di iniziare",
    ],
    faqs: [
      { q: "È adatto a una pelle sensibile?", a: "La sensibilità viene valutata prima di proporre il protocollo. Intensità, prodotti e frequenza vengono adattati oppure può essere consigliata una fase preparatoria più delicata." },
      { q: "Si utilizza sul viso o sul corpo?", a: "Può essere inserito in programmi viso o corpo. La zona e l’obiettivo vengono definiti durante la prima visita." },
      { q: "È possibile programmare pochi appuntamenti?", a: "Sì. Il piano viene costruito in base all’obiettivo e al tempo disponibile, indicando quali risultati sono realistici con la frequenza scelta." },
    ],
    editorialSections: [
      {
        heading: "Che cosa significa protocollo intensivo",
        paragraphs: [
          "Intensivo indica un programma più strutturato, con obiettivo, sedute e controlli definiti, non un trattamento aggressivo.",
          "La sensibilità della zona viene sempre considerata nella scelta di prodotti, intensità e frequenza.",
        ],
      },
      {
        heading: "Viso o corpo: la valutazione cambia il programma",
        paragraphs: [
          "Sul viso osserviamo texture, luminosità, idratazione e sensibilità; sul corpo valutiamo area, qualità dei tessuti e obiettivo estetico.",
          "Queste informazioni determinano modalità del trattamento e numero indicativo di appuntamenti.",
        ],
      },
      {
        heading: "Controlli e mantenimento",
        paragraphs: [
          "Durante il programma verifichiamo la risposta della zona e aggiorniamo il trattamento quando necessario.",
          "Al termine indichiamo richiami e routine utili a conservare il risultato ottenuto.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prenota la prima visita", href: "/contatti", description: "Indica se l’obiettivo riguarda viso o corpo e quale aspetto vuoi migliorare." },
      { label: "Tutti i protocolli", href: "/protocolli-epigenetici", description: "Confronta protocolli, obiettivi e prezzi Rebel." },
      { label: "Guida ai trattamenti corpo", href: "/competenze/trattamenti-corpo-carmagnola", description: "Drenaggio, tonicità, compattezza e benessere del corpo." },
      { label: "Estetica avanzata", href: "/competenze/estetica-avanzata-carmagnola", description: "Tecnologie e protocolli disponibili nello studio." },
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocolPages.find((item) => item.slug === slug);
}
