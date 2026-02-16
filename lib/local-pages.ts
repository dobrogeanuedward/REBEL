export type LocalAreaPage = {
  slug: string;
  city: string;
  cluster: "asse-carmagnola" | "torino-sud" | "cuneo";
  title: string;
  description: string;
  intro: string;
  whyRebel: string[];
  keywords: string[];
  directions?: {
    heading: string;
    mapsUrl: string;
    embedUrl?: string;
    paragraphs: string[];
  };
  focus?: {
    heading: string;
    paragraphs: string[];
    links?: Array<{
      label: string;
      href: string;
      external?: boolean;
      description?: string;
    }>;
  };
  faqs?: Array<{ q: string; a: string }>;
};

export const localAreaPages: LocalAreaPage[] = [
  {
    slug: "carmagnola",
    city: "Carmagnola",
    cluster: "asse-carmagnola",
    title: "Centro estetico a Carmagnola: benvenuta da Rebel",
    description:
      "Rebel è a Carmagnola: trattamenti viso e corpo, epilazione laser a Carmagnola e percorsi costruiti su misura.",
    intro:
      "Se sei di Carmagnola e cerchi un centro estetico serio, qui trovi un approccio chiaro: prima ascolto, poi piano personalizzato.",
    whyRebel: [
      "Ti seguiamo in modo personalizzato, non con pacchetti preconfezionati",
      "Un unico studio per estetica classica, percorsi avanzati ed epilazione laser",
      "Contatto diretto e veloce su WhatsApp",
    ],
    keywords: [
      "centro estetico Carmagnola",
      "estetista Carmagnola",
      "epilazione laser Carmagnola",
    ],
  },
  {
    slug: "carignano",
    city: "Carignano",
    cluster: "asse-carmagnola",
    title: "Da Carignano a Rebel: percorso estetico su misura",
    description:
      "Se vivi a Carignano, Rebel Carmagnola è una soluzione comoda per viso, corpo ed epilazione laser a Carmagnola.",
    intro:
      "Tante clienti da Carignano ci scelgono perché vogliono un percorso chiaro, non un trattamento uguale per tutte.",
    whyRebel: [
      "Ci raggiungi facilmente da Carignano",
      "In un solo posto trovi servizi base e trattamenti avanzati",
      "Ogni piano parte dai tuoi obiettivi reali",
    ],
    keywords: [
      "centro estetico Carignano",
      "estetista vicino Carignano",
      "laser Carignano",
    ],
  },
  {
    slug: "racconigi",
    city: "Racconigi",
    cluster: "asse-carmagnola",
    title: "Centro estetico per chi arriva da Racconigi",
    description:
      "Da Racconigi a Carmagnola: Rebel propone trattamenti viso/corpo ed epilazione laser con metodo personalizzato.",
    intro:
      "Se arrivi da Racconigi e vuoi essere seguita bene, con tempi e obiettivi chiari, qui sei nel posto giusto.",
    whyRebel: [
      "Percorsi modulabili in base al tempo che hai",
      "Prezzi chiari e spiegazioni semplici",
      "Supporto costante tra una seduta e l'altra",
    ],
    keywords: [
      "centro estetico Racconigi",
      "trattamenti viso Racconigi",
      "epilazione laser Racconigi",
    ],
  },
  {
    slug: "sommariva-del-bosco",
    city: "Sommariva del Bosco",
    cluster: "asse-carmagnola",
    title: "Da Sommariva del Bosco a Rebel Carmagnola",
    description:
      "Percorsi estetici evoluti a pochi minuti da Sommariva del Bosco.",
    intro:
      "Molte clienti da Sommariva del Bosco ci scelgono quando vogliono un percorso serio e continuativo.",
    whyRebel: [
      "Approccio completo viso e corpo",
      "Epilazione laser con tecnologia Thory e valutazione iniziale inclusa",
      "Percorso spiegato bene, con passaggi chiari",
    ],
    keywords: [
      "centro estetico Sommariva del Bosco",
      "estetista Sommariva del Bosco",
      "laser Sommariva del Bosco",
    ],
  },
  {
    slug: "poirino",
    city: "Poirino",
    cluster: "asse-carmagnola",
    title: "Da Poirino a Rebel: centro estetico a pochi minuti",
    description:
      "Rebel Carmagnola è una scelta comoda per chi vive a Poirino e cerca un centro estetico con metodo.",
    intro:
      "Se arrivi da Poirino puoi trovare in un unico studio estetica avanzata, benessere ed epilazione laser.",
    whyRebel: [
      "Percorsi personalizzati e spiegati in modo semplice",
      "Trattamenti viso/corpo e laser nello stesso centro",
      "Contatto rapido su WhatsApp per agenda e richiami",
    ],
    keywords: [
      "centro estetico Poirino",
      "estetista Poirino",
      "epilazione laser Poirino",
    ],
  },
  {
    slug: "villastellone",
    city: "Villastellone",
    cluster: "asse-carmagnola",
    title: "Centro estetico vicino Villastellone: percorsi Rebel",
    description:
      "Da Villastellone a Carmagnola: trattamenti viso, corpo ed epilazione laser con approccio personalizzato.",
    intro:
      "Molte clienti da Villastellone ci scelgono quando cercano un percorso serio, non soluzioni standard.",
    whyRebel: [
      "Distanza comoda da Villastellone",
      "Metodo progressivo con obiettivi concreti",
      "Piano di mantenimento chiaro",
    ],
    keywords: [
      "centro estetico Villastellone",
      "estetica avanzata Villastellone",
      "laser Villastellone",
    ],
  },
  {
    slug: "pancalieri",
    city: "Pancalieri",
    cluster: "asse-carmagnola",
    title: "Da Pancalieri a Rebel Carmagnola",
    description:
      "Per chi arriva da Pancalieri: centro estetico avanzato con servizi viso/corpo e laser a Carmagnola.",
    intro:
      "Se vivi a Pancalieri e vuoi un piano estetico ben organizzato, Rebel è una soluzione concreta e vicina.",
    whyRebel: [
      "Consulenza iniziale per capire priorità reali",
      "Trattamenti combinati in base al tuo obiettivo",
      "Supporto costante tra una seduta e l'altra",
    ],
    keywords: [
      "centro estetico Pancalieri",
      "estetista Pancalieri",
      "epilazione laser Pancalieri",
    ],
  },
  {
    slug: "torino-sud",
    city: "Torino Sud",
    cluster: "torino-sud",
    title: "Da Torino Sud a Rebel: un'alternativa concreta",
    description:
      "Rebel Carmagnola è scelto anche da clienti di Torino Sud che cercano metodo e continuità.",
    intro:
      "Se arrivi da Torino Sud e vuoi un percorso personalizzato, qui trovi ascolto, tecnica e organizzazione.",
    whyRebel: [
      "Percorsi personalizzati e trasparenti",
      "Specializzazione su estetica epigenetica",
      "Contatto rapido e agenda ben organizzata",
    ],
    keywords: [
      "centro estetico Torino Sud",
      "estetica epigenetica Torino Sud",
      "laser Torino Sud",
    ],
  },
  {
    slug: "moncalieri",
    city: "Moncalieri",
    cluster: "torino-sud",
    title: "Da Moncalieri a Rebel: centro estetico con metodo",
    description:
      "Rebel Carmagnola è una soluzione scelta anche da clienti di Moncalieri per percorsi viso, corpo e laser.",
    intro:
      "Da Moncalieri puoi raggiungerci facilmente se cerchi un centro estetico con approccio tecnico e umano.",
    whyRebel: [
      "Programma personalizzato fin dal primo incontro",
      "Risultati progressivi e non promesse esagerate",
      "Organizzazione precisa del percorso",
    ],
    keywords: [
      "centro estetico Moncalieri",
      "estetica epigenetica Moncalieri",
      "epilazione laser Moncalieri",
    ],
  },
  {
    slug: "nichelino",
    city: "Nichelino",
    cluster: "torino-sud",
    title: "Centro estetico per chi arriva da Nichelino",
    description:
      "Da Nichelino a Rebel Carmagnola per trattamenti mirati viso/corpo ed epilazione laser su misura.",
    intro:
      "Chi arriva da Nichelino cerca spesso una gestione più personalizzata: in Rebel trovi questo approccio.",
    whyRebel: [
      "Protocollo costruito sulle tue necessità",
      "Un solo studio per benessere, estetica e laser",
      "Comunicazione diretta e tempi chiari",
    ],
    keywords: [
      "centro estetico Nichelino",
      "estetista Nichelino",
      "laser Nichelino",
    ],
  },
  {
    slug: "vinovo",
    city: "Vinovo",
    cluster: "torino-sud",
    title: "Da Vinovo a Rebel Carmagnola",
    description:
      "Percorsi estetici avanzati per chi vive a Vinovo e vuole continuità, metodo e risultati concreti.",
    intro:
      "Da Vinovo ci raggiungono clienti che vogliono una guida chiara su trattamenti viso, corpo e laser.",
    whyRebel: [
      "Analisi iniziale accurata con obiettivo condiviso",
      "Percorsi modulabili in base ai tempi reali",
      "Mantenimento pianificato per risultati stabili",
    ],
    keywords: [
      "centro estetico Vinovo",
      "estetica avanzata Vinovo",
      "epilazione laser Vinovo",
    ],
  },
  {
    slug: "la-loggia",
    city: "La Loggia",
    cluster: "torino-sud",
    title: "Centro estetico vicino La Loggia: percorso Rebel",
    description:
      "Da La Loggia a Rebel Carmagnola: trattamenti personalizzati per viso, corpo e depilazione laser.",
    intro:
      "Se arrivi da La Loggia e vuoi evitare percorsi improvvisati, in Rebel trovi struttura e metodo.",
    whyRebel: [
      "Piano personalizzato senza pacchetti standard",
      "Spiegazioni semplici su servizi, tempi e costi",
      "Supporto costante durante il percorso",
    ],
    keywords: [
      "centro estetico La Loggia",
      "estetista La Loggia",
      "laser La Loggia",
    ],
  },
  {
    slug: "trofarello",
    city: "Trofarello",
    cluster: "torino-sud",
    title: "Da Trofarello a Rebel Carmagnola: estetica epigenetica e laser, con un metodo chiaro",
    description:
      "Se vivi a Trofarello e cerchi un centro estetico davvero organizzato, Rebel a Carmagnola unisce approccio epigenetico, protocolli viso/corpo e laser in un percorso personalizzato.",
    intro:
      "Da Trofarello ci raggiungono clienti che vogliono smettere di cambiare trattamento ogni mese: preferiscono un piano chiaro, spiegato bene e sostenibile nella vita reale.",
    whyRebel: [
      "Lettura iniziale: capiamo priorita, tempi e obiettivi prima di proporti qualcosa",
      "Un solo studio per laser, trattamenti viso/corpo e protocolli epigenetici",
      "Metodo progressivo: risultati ragionati, non promesse istantanee",
    ],
    directions: {
      heading: "Come arrivare da Trofarello a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Trofarello&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Trofarello&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Il modo piu semplice e affidabile e aprire Google Maps e seguire il percorso aggiornato in tempo reale (traffico e lavori cambiano spesso). La destinazione e Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se arrivi per la prima volta e vuoi evitare stress, scrivici su WhatsApp: ti confermiamo l'indirizzo e, se serve, ti aiutiamo a orientarti.",
      ],
    },
    focus: {
      heading: "Se vieni da Trofarello: come impostiamo un percorso laser (senza protocolli standard)",
      paragraphs: [
        "Chi arriva da Trofarello spesso ci racconta la stessa storia: ha provato soluzioni veloci, offerte a seduta singola o percorsi poco chiari. Il punto, con il laser, non e fare \"una seduta\": e costruire una sequenza sensata, con parametri calibrati e un calendario coerente.",
        "Da Rebel lavoriamo per zone (viso e corpo), obiettivi e risposta della pelle. Spieghiamo cosa aspettarti, cosa evitare tra una seduta e l'altra e quando ha senso rallentare o ritarare. Il comfort e parte del metodo, non un dettaglio.",
        "Se vuoi farti un'idea prima di prenotare, trovi alcuni approfondimenti dedicati (laser viso, laser corpo, laser diodo) e le pagine dei trattamenti con le domande piu frequenti. Cosi arrivi alla consulenza con domande giuste, non con dubbi confusi.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Trofarello&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale, con traffico e tempi stimati.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Panoramica chiara su come lavoriamo in studio e da dove partire.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa cambia rispetto ad altre tecnologie, senza confusione.",
        },
        {
          label: "Laser viso: cosa sapere prima di iniziare",
          href: "/competenze/epilazione-laser-viso-carmagnola-guida-realistica",
          description: "Aspettative, tempi e attenzione alle zone piu delicate del viso.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Dettagli per zone viso, indicazioni e FAQ rapide.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione delle sedute e percorso su misura.",
        },
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per prenotare o chiedere un consiglio prima di iniziare.",
        },
      ],
    },
    faqs: [
      {
        q: "Quanto ci vuole da Trofarello a Rebel Carmagnola?",
        a: "Dipende da traffico e orario. Per una stima aggiornata, ti consigliamo di aprire il link Maps: e la fonte piu affidabile nel momento in cui parti.",
      },
      {
        q: "Posso fare laser e poi impostare anche un percorso viso/corpo?",
        a: "Sì. Molte clienti combinano laser e protocolli viso/corpo, ma la sequenza la decidiamo in base a obiettivo, tempi e tollerabilita della pelle.",
      },
      {
        q: "Cosa devo avere chiaro prima di iniziare un ciclo laser?",
        a: "Zona, obiettivo e calendario: in consulenza ti spieghiamo frequenza, aspettative e indicazioni pre/post seduta, cosi il percorso resta semplice da seguire.",
      },
    ],
    keywords: [
      "centro estetico Trofarello",
      "estetica epigenetica Trofarello",
      "epilazione laser Trofarello",
    ],
  },
  {
    slug: "chieri",
    city: "Chieri",
    cluster: "torino-sud",
    title: "Da Chieri a Rebel Carmagnola",
    description:
      "Centro estetico di riferimento per clienti da Chieri che cercano trattamenti avanzati viso/corpo e laser.",
    intro:
      "Se arrivi da Chieri e desideri un percorso ben strutturato, Rebel offre consulenza, metodo e continuità.",
    whyRebel: [
      "Percorsi concreti costruiti sui tuoi obiettivi",
      "Attivi epigenetici e tecnologie mirate",
      "Comunicazione trasparente dall'inizio alla fine",
    ],
    keywords: [
      "centro estetico Chieri",
      "trattamenti viso Chieri",
      "epilazione laser Chieri",
    ],
  },
  {
    slug: "orbassano",
    city: "Orbassano",
    cluster: "torino-sud",
    title: "Centro estetico per chi arriva da Orbassano",
    description:
      "Da Orbassano a Rebel Carmagnola: percorsi su misura per estetica avanzata, benessere ed epilazione laser.",
    intro:
      "Chi arriva da Orbassano trova in Rebel un centro organizzato, con obiettivi chiari e risultati progressivi.",
    whyRebel: [
      "Approccio completo viso/corpo e laser",
      "Valutazione iniziale e piano personalizzato",
      "Risposte rapide su WhatsApp e supporto continuo",
    ],
    keywords: [
      "centro estetico Orbassano",
      "estetista Orbassano",
      "laser Orbassano",
    ],
  },
  {
    slug: "alba",
    city: "Alba",
    cluster: "cuneo",
    title: "Da Alba a Rebel Carmagnola",
    description:
      "Per chi arriva da Alba: trattamenti viso/corpo ed epilazione laser in uno studio avanzato a Carmagnola.",
    intro:
      "Chi arriva da Alba ci sceglie per la combinazione tra approccio umano, metodo e risultati concreti.",
    whyRebel: [
      "Piano personalizzato già dal primo incontro",
      "Spiegazioni semplici su servizi e tempi",
      "Focus sulla continuità nel tempo",
    ],
    keywords: [
      "centro estetico Alba",
      "estetista Alba trattamenti viso",
      "epilazione laser Alba",
    ],
  },
  {
    slug: "bra",
    city: "Bra",
    cluster: "cuneo",
    title: "Da Bra a Rebel: percorsi viso, corpo e laser",
    description:
      "Per chi vive a Bra, Rebel Carmagnola offre trattamenti personalizzati con approccio epigenetico e tecnico.",
    intro:
      "Da Bra ci scelgono clienti che cercano una strategia estetica più chiara e continuativa nel tempo.",
    whyRebel: [
      "Consulenza iniziale per definire priorità vere",
      "Integrazione tra manualità, attivi e tecnologie",
      "Gestione progressiva e sostenibile del percorso",
    ],
    keywords: [
      "centro estetico Bra",
      "estetica avanzata Bra",
      "epilazione laser Bra",
    ],
  },
  {
    slug: "savigliano",
    city: "Savigliano",
    cluster: "cuneo",
    title: "Centro estetico per chi arriva da Savigliano",
    description:
      "Da Savigliano a Carmagnola: Rebel propone percorsi viso/corpo e laser con obiettivi concreti.",
    intro:
      "Se vivi a Savigliano e vuoi un centro estetico con metodo, Rebel è una soluzione concreta e organizzata.",
    whyRebel: [
      "Percorso personalizzato senza formule preconfezionate",
      "Prezzi e tempi spiegati in modo chiaro",
      "Controllo progressi durante tutto il programma",
    ],
    keywords: [
      "centro estetico Savigliano",
      "estetista Savigliano",
      "laser Savigliano",
    ],
  },
  {
    slug: "fossano",
    city: "Fossano",
    cluster: "cuneo",
    title: "Da Fossano a Rebel Carmagnola",
    description:
      "Percorsi estetici evoluti per clienti da Fossano: trattamenti viso/corpo, epigenetica ed epilazione laser.",
    intro:
      "Chi arriva da Fossano sceglie Rebel per la combinazione tra approccio umano, tecnica e continuità.",
    whyRebel: [
      "Metodo personalizzato e verificabile",
      "Percorsi su misura in base al tuo obiettivo",
      "Supporto costante tra una seduta e la successiva",
    ],
    keywords: [
      "centro estetico Fossano",
      "estetica epigenetica Fossano",
      "epilazione laser Fossano",
    ],
  },
  {
    slug: "saluzzo",
    city: "Saluzzo",
    cluster: "cuneo",
    title: "Centro estetico vicino Saluzzo: percorso Rebel",
    description:
      "Da Saluzzo a Carmagnola per trattamenti estetici avanzati, percorsi epigenetici ed epilazione laser.",
    intro:
      "Se arrivi da Saluzzo e cerchi un centro con struttura e metodo, in Rebel trovi una guida chiara.",
    whyRebel: [
      "Valutazione iniziale approfondita",
      "Percorso costruito su esigenze concrete",
      "Comunicazione trasparente e supporto dedicato",
    ],
    keywords: [
      "centro estetico Saluzzo",
      "estetista Saluzzo",
      "laser Saluzzo",
    ],
  },
];

export function getLocalAreaBySlug(slug: string) {
  return localAreaPages.find((item) => item.slug === slug);
}

