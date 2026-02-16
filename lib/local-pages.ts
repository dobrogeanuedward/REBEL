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
    directions: {
      heading: "Dove siamo a Carmagnola",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
      embedUrl: "https://www.google.com/maps?q=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Rebel si trova a Carmagnola, in Viale Barbaroux 20. Se vuoi arrivare senza perdere tempo, apri la mappa: ti porta direttamente all'indirizzo.",
        "Se stai scegliendo da dove partire, il consiglio più semplice è questo: raccontaci obiettivo e tempi (anche pochi), e ti proponiamo un percorso che abbia senso per te.",
      ],
    },
    focus: {
      heading: "Se sei a Carmagnola: trattamenti viso fatti bene, senza confusione",
      paragraphs: [
        "Molte persone iniziano dai trattamenti viso quando vogliono rivedere luminosità, grana della pelle e sensazione di comfort. La differenza, per noi, non è fare \"il trattamento del momento\": è scegliere la cosa giusta in base a pelle, stagione e abitudini.",
        "Per questo partiamo sempre da una lettura iniziale: capiamo che tipo di pelle hai oggi, cosa vuoi ottenere e in che tempi. Poi costruiamo una progressione semplice da seguire, tra sedute in studio e mantenimento a casa.",
      ],
      links: [
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per prenotare o chiedere un consiglio prima di iniziare.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei percorsi disponibili a Carmagnola.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Un punto di partenza utile per orientarti tra obiettivi e opzioni.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Quando ha senso e come la impostiamo in modo delicato.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Ordine e definizione con effetto naturale, curato nei dettagli.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "50 minuti dedicati a schiena, spalle e cervicale, con ritmo graduale.",
        },
        {
          label: "Scrub corpo",
          href: "/servizi/scrub-corpo-carmagnola",
          description: "Esfoliazione controllata per pelle più uniforme e una routine corpo più semplice.",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Mani curate e ordinate, con un risultato pulito che dura.",
        },
        {
          label: "Massaggio linfodrenante",
          href: "/servizi/massaggio-linfodrenante-carmagnola",
          description: "Per alleggerire la sensazione di gonfiore e impostare un ritmo sostenibile.",
        },
        {
          label: "Protocolli epigenetici",
          href: "/protocolli-epigenetici",
          description: "Percorsi evoluti viso/corpo, scelti in base al tuo punto di partenza.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Una pagina dedicata al comfort durante la seduta e a come impostiamo il percorso.",
        },
      ],
    },
    faqs: [
      {
        q: "Sono a Carmagnola: da cosa mi consigliate di partire?",
        a: "Dipende da obiettivo e tempi. Se vuoi un consiglio veloce, scrivici: ti orientiamo tra viso, corpo, laser e protocolli in base alla tua situazione.",
      },
      {
        q: "Posso vedere prezzi e servizi prima di prenotare?",
        a: "Sì: trovi il listino completo online. Poi, se vuoi, in studio lo traduciamo in un percorso su misura.",
      },
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
    title: "Da Carignano a Rebel Carmagnola: laser con metodo e comfort",
    description:
      "Se vivi a Carignano e vuoi iniziare il laser con serenità, Rebel a Carmagnola ti segue con un percorso chiaro e comfort grazie a Ice Polar.",
    intro:
      "Da Carignano arrivano clienti che vogliono una cosa semplice: fare il laser bene, senza improvvisare e senza cambiare idea ogni mese.",
    whyRebel: [
      "Valutazione iniziale e settaggio su misura (zona, pelle, obiettivo)",
      "Percorso seguito nel tempo, con calendario e controlli",
      "Manipolo Ice Polar per migliorare il comfort durante la seduta",
    ],
    directions: {
      heading: "Come arrivare da Carignano a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Carignano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Carignano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per arrivare da Carignano, il modo più semplice è aprire la mappa e seguire il percorso aggiornato in tempo reale. La destinazione è Viale Barbaroux 20, Carmagnola.",
        "Se vuoi organizzarti bene con gli orari, scrivici su WhatsApp: ti aiutiamo a capire da dove partire e come impostare le prime sedute in modo comodo.",
      ],
    },
    focus: {
      heading: "Da Carignano: cosa fa davvero la differenza nel laser (oltre alla tecnologia)",
      paragraphs: [
        "La parte più sottovalutata del laser non è il \"nome\" della macchina: è come viene impostato il percorso. Parametri, zona, risposta della pelle e calendario devono essere coerenti tra loro, altrimenti si accumulano solo dubbi.",
        "In Rebel usiamo anche Ice Polar per lavorare con più comfort, ma soprattutto ti spieghiamo cosa stiamo facendo e perché: così sai sempre a che punto sei, cosa aspettarti e come prenderti cura della pelle tra una seduta e l'altra.",
        "Se vieni da Carignano e hai poco tempo, si può comunque costruire un piano sostenibile: poche cose fatte bene, con priorità chiare (ad esempio una zona alla volta, oppure più zone con una gestione sensata).",
      ],
      links: [
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Panoramica chiara su come lavoriamo e come iniziare.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Zone viso, indicazioni e domande frequenti.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi e panoramica dei servizi in studio.",
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
        q: "Da Carignano: il laser si sente tanto?",
        a: "Dipende da zona e sensibilità personale. Ice Polar aiuta il comfort e noi impostiamo sempre in modo graduale, senza forzare.",
      },
      {
        q: "Posso iniziare anche se ho una routine incasinata?",
        a: "Sì. Pianifichiamo un calendario che riesci a seguire davvero: meglio costanza e chiarezza che corse e stress.",
      },
      {
        q: "Meglio partire da una zona o farne più di una?",
        a: "Si decide insieme in base a priorità, tempo e tollerabilità. L'obiettivo è un percorso semplice da portare avanti.",
      },
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
    title: "Da Racconigi a Rebel Carmagnola: laser seguito, con comfort e metodo",
    description:
      "Se vivi a Racconigi e vuoi iniziare il laser in modo serio, Rebel a Carmagnola ti segue con percorso chiaro e comfort grazie a Ice Polar.",
    intro:
      "Da Racconigi arrivano spesso clienti stanche di improvvisare: vogliono un calendario sensato, qualcuno che spieghi bene cosa sta facendo e un trattamento confortevole.",
    whyRebel: [
      "Valutazione iniziale e settaggio su misura (zona, pelle, obiettivo)",
      "Percorso seguito seduta dopo seduta, con micro-aggiustamenti quando serve",
      "Manipolo Ice Polar per migliorare il comfort durante il laser",
    ],
    directions: {
      heading: "Come arrivare da Racconigi a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Racconigi&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Racconigi&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Se arrivi da Racconigi, ti consigliamo di aprire la mappa e seguire il percorso aggiornato in tempo reale. La destinazione è Viale Barbaroux 20, Carmagnola.",
        "Se preferisci organizzarti con anticipo (soprattutto nelle settimane più piene), scrivici su WhatsApp: ti aiutiamo a capire da dove partire e come distribuire le sedute in modo comodo.",
      ],
    },
    focus: {
      heading: "Da Racconigi: laser e peli incarniti, come lo impostiamo in modo intelligente",
      paragraphs: [
        "Una delle richieste più frequenti, quando si parla di laser, è legata ai peli incarniti: non è solo un tema estetico, è anche una questione di comfort quotidiano (soprattutto su inguine, ascelle e gambe).",
        "Quando impostiamo un percorso laser fatto bene, ragioniamo per zone e per risposta della pelle. Questo vuol dire due cose pratiche: calendario coerente e parametri adattati nel tempo. Il laser non è un pulsante \"on/off\": è un lavoro di precisione.",
        "Ice Polar ci aiuta a rendere la seduta più confortevole, ma la parte decisiva resta l'organizzazione: scegliamo priorità realistiche (una zona alla volta oppure più zone, se ha senso) e ti diamo indicazioni chiare tra una seduta e l'altra.",
        "Se arrivi da Racconigi e vuoi partire con un piano chiaro (zone + calendario), scrivici o prenota una valutazione: ti diciamo subito da dove iniziare e cosa aspettarti.",
      ],
      links: [
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Da dove si parte e come lavoriamo in studio, spiegato bene.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e domande frequenti.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Per le zone più delicate: attenzione alla pelle e indicazioni pratiche.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per orientarti tra tecnologie e impostazioni, senza confusione.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei servizi disponibili in studio.",
        },
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per prenotare o farti guidare nella scelta delle prime zone.",
        },
      ],
    },
    faqs: [
      {
        q: "Da Racconigi: posso partire dal laser anche se ho peli incarniti?",
        a: "Sì, ed è uno dei motivi per cui molte persone iniziano. Serve valutare zona e pelle, poi impostare il percorso con calendario e indicazioni chiare tra le sedute.",
      },
      {
        q: "Ice Polar rende il laser indolore?",
        a: "Aiuta molto il comfort, ma la percezione cambia in base a zona e sensibilità. Noi regoliamo sempre in modo graduale e sensato.",
      },
      {
        q: "Meglio trattare tante zone insieme o una alla volta?",
        a: "Dipende da priorità, tempo e tollerabilità. In consulenza scegliamo la strategia più sostenibile: così il percorso resta facile da seguire.",
      },
    ],
    keywords: [
      "centro estetico Racconigi",
      "epilazione laser Racconigi",
      "laser Racconigi",
      "laser diodo Racconigi",
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
      "Da Villastellone a Carmagnola per il laser: competenza, percorso chiaro e comfort con Ice Polar.",
    intro:
      "Di solito non si cerca \"la seduta\": si cerca un percorso laser fatto bene, spiegato con calma e seguito nel tempo. Se arrivi da Villastellone, Rebel a Carmagnola è una scelta comoda per iniziare con un piano chiaro.",
    whyRebel: [
      "Distanza comoda da Villastellone",
      "Competenza e settaggio su misura in base a pelle, zona e obiettivo",
      "Percorso chiaro, con calendario e controlli durante il ciclo",
      "Manipolo Ice Polar per un'esperienza più confortevole",
    ],
    directions: {
      heading: "Come arrivare da Villastellone a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Villastellone&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Villastellone&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Se arrivi da Villastellone, il modo più semplice è aprire la mappa e seguire il percorso aggiornato in tempo reale. La destinazione è Viale Barbaroux 20, Carmagnola.",
        "Se vuoi incastrare bene gli orari con lavoro e famiglia, scrivici su WhatsApp: ti aiutiamo a scegliere il momento più comodo per iniziare il percorso.",
      ],
    },
    focus: {
      heading: "Da Villastellone: laser fatto bene (e confortevole) con Ice Polar",
      paragraphs: [
        "Se vivi a Villastellone e stai pensando al laser, capiamo benissimo il dubbio più comune: \"Sarò a mio agio durante la seduta?\". Per questo in studio lavoriamo con manipolo Ice Polar, che aiuta a rendere il trattamento più confortevole.",
        "Ma il comfort da solo non basta. Quello che fa davvero la differenza è la competenza con cui si impostano parametri e calendario: zona per zona, pelle per pelle, con una progressione chiara e senza corse.",
        "Di solito si parte da una valutazione semplice, poi scegliamo insieme le priorità (ad esempio viso o corpo, una zona alla volta oppure più zone nello stesso periodo). L'obiettivo è che il percorso resti facile da seguire anche con la vita piena di tutti i giorni.",
      ],
      links: [
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come lavoriamo in studio e da dove partire, spiegato in modo semplice.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Dettagli per le zone del viso, indicazioni e domande frequenti.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo, con percorso su misura.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per orientarti tra tecnologie e scegliere con più serenità.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi e panoramica dei servizi disponibili in studio.",
        },
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per prenotare o chiedere un consiglio rapido prima di iniziare.",
        },
      ],
    },
    faqs: [
      {
        q: "Da Villastellone posso fare un percorso, anche se ho poco tempo?",
        a: "Sì. Impostiamo il piano in base al tempo reale che hai: meglio poche sedute fatte bene che un programma impossibile da seguire.",
      },
      {
        q: "Ice Polar vuol dire che il laser non si sente?",
        a: "Aiuta molto il comfort, ma la percezione cambia da persona a persona e da zona a zona. In studio regoliamo sempre in modo graduale e sensato.",
      },
      {
        q: "Meglio iniziare dal viso o dal corpo?",
        a: "Dipende da priorità e abitudini. Durante la valutazione iniziale decidiamo insieme l'ordine delle zone, così il percorso resta semplice da seguire.",
      },
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
      "Da Pancalieri a Carmagnola: centro estetico avanzato con servizi viso/corpo e laser, con un metodo chiaro.",
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
    title: "Centro estetico vicino Nichelino: percorsi Rebel",
    description:
      "Da Nichelino a Rebel Carmagnola per trattamenti mirati viso/corpo ed epilazione laser su misura.",
    intro:
      "Quando cerchi una gestione più personalizzata, la differenza la fa il metodo: ascolto, piano e continuità. Se arrivi da Nichelino, Carmagnola è una soluzione comoda per viso, corpo e laser.",
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
      "Lettura iniziale: capiamo priorità, tempi e obiettivi prima di proporti qualcosa",
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
        "Il modo più semplice e affidabile è aprire Google Maps e seguire il percorso aggiornato in tempo reale (traffico e lavori cambiano spesso). La destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se arrivi per la prima volta e vuoi evitare stress, scrivici su WhatsApp: ti confermiamo l'indirizzo e, se serve, ti aiutiamo a orientarti.",
      ],
    },
    focus: {
      heading: "Se vieni da Trofarello: come impostiamo un percorso laser (senza protocolli standard)",
      paragraphs: [
        "Molte persone ci raccontano la stessa storia: hanno provato soluzioni veloci, offerte a seduta singola o percorsi poco chiari. Il punto, con il laser, non è fare \"una seduta\": è costruire una sequenza sensata, con parametri calibrati e un calendario coerente.",
        "Da Rebel lavoriamo per zone (viso e corpo), obiettivi e risposta della pelle. Spieghiamo cosa aspettarti, cosa evitare tra una seduta e l'altra e quando ha senso rallentare o ritarare. Il comfort è parte del metodo, non un dettaglio.",
        "Se vuoi farti un'idea prima di prenotare, trovi alcuni approfondimenti dedicati (laser viso, laser corpo, laser diodo) e le pagine dei trattamenti con le domande più frequenti. Così arrivi alla consulenza con domande giuste, non con dubbi confusi. Se arrivi da Trofarello, scrivici pure: ti diciamo subito da dove partire.",
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
          description: "Aspettative, tempi e attenzione alle zone più delicate del viso.",
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
        a: "Dipende da traffico e orario. Per una stima aggiornata, ti consigliamo di aprire il link Maps: è la fonte più affidabile nel momento in cui parti.",
      },
      {
        q: "Posso fare laser e poi impostare anche un percorso viso/corpo?",
        a: "Sì. Molte clienti combinano laser e protocolli viso/corpo, ma la sequenza la decidiamo in base a obiettivo, tempi e tollerabilità della pelle.",
      },
      {
        q: "Cosa devo avere chiaro prima di iniziare un ciclo laser?",
        a: "Zona, obiettivo e calendario: in consulenza ti spieghiamo frequenza, aspettative e indicazioni pre/post seduta, così il percorso resta semplice da seguire.",
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
    title: "Centro estetico vicino Orbassano: percorsi Rebel",
    description:
      "Da Orbassano a Rebel Carmagnola: percorsi su misura per estetica avanzata, benessere ed epilazione laser.",
    intro:
      "Quando cerchi un centro organizzato, la cosa che ti fa respirare è avere obiettivi chiari e risultati progressivi. Se arrivi da Orbassano, in Rebel trovi questo tipo di impostazione: semplice, concreta, seguita.",
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
      "Da Alba a Carmagnola: trattamenti viso/corpo ed epilazione laser in uno studio avanzato, con metodo e continuità.",
    intro:
      "La differenza, quando vuoi migliorare davvero, è avere un metodo chiaro e una gestione umana. Se arrivi da Alba, Rebel a Carmagnola è una scelta concreta per impostare un percorso che si regge nel tempo.",
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
    title: "Centro estetico vicino Savigliano: percorsi Rebel",
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
      "La scelta spesso è legata alla combinazione tra approccio umano, tecnica e continuità: tre cose che insieme fanno davvero la differenza. Se arrivi da Fossano, in Rebel trovi un percorso pensato per essere seguito e verificabile nel tempo.",
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

