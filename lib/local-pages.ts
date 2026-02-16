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
    title: "Centro estetico vicino Sommariva del Bosco: laser con calendario chiaro",
    description:
      "Epilazione laser a Carmagnola per chi vive a Sommariva del Bosco: valutazione, parametri su misura, comfort Ice Polar e gestione sensata del sole.",
    intro:
      "Il dubbio più comune quando si pensa al laser è legato al periodo: sole, vacanze, abitudini. In Rebel impostiamo il percorso in modo organizzato e realistico, così sai cosa aspettarti e come muoverti.",
    whyRebel: [
      "Valutazione iniziale e piano sedute costruito su zona, pelle e obiettivo",
      "Gestione chiara di calendario e indicazioni tra una seduta e l'altra",
      "Tecnologia Thory con manipolo Ice Polar per migliorare il comfort",
      "Un solo studio per laser, viso, corpo e percorsi epigenetici",
    ],
    directions: {
      heading: "Come arrivare da Sommariva del Bosco a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Sommariva+del+Bosco&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Sommariva+del+Bosco&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Il modo più semplice è aprire Google Maps e seguire il percorso aggiornato in tempo reale: traffico e lavori possono cambiare. La destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se vuoi organizzare bene le sedute rispetto a lavoro, famiglia e weekend fuori, scrivici su WhatsApp: ti aiutiamo a impostare un calendario che riesci a seguire davvero.",
      ],
    },
    focus: {
      heading: "Sommariva del Bosco: laser, stagionalità e comfort (senza ansia)",
      paragraphs: [
        "Molte persone rimandano il laser per paura del sole o perché hanno in programma vacanze. La verità è che non serve vivere il percorso con ansia: serve impostarlo bene, con indicazioni chiare e scelte sensate su zone e tempi.",
        "La parte più importante non è \"fare presto\": è avere un calendario coerente e adattabile. Se in un periodo ti esponi di più o cambiano le abitudini, il percorso si può ritarare senza perdere la direzione.",
        "In studio lavoriamo anche con manipolo Ice Polar per migliorare il comfort durante la seduta. È un aiuto concreto, ma resta un pezzo del metodo: parametri impostati con competenza e una progressione che puoi seguire con serenità.",
        "Se arrivi da Sommariva del Bosco e vuoi capire se questo è il momento giusto (e da quali zone partire), scrivici: ti orientiamo in modo semplice, senza promesse esagerate.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Sommariva+del+Bosco&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Viale Barbaroux 20, Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Da dove partire e come lavoriamo: valutazione, calendario e metodo.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, spiegato senza tecnicismi inutili.",
        },
        {
          label: "Laser corpo: zone, tempi e piano sedute",
          href: "/competenze/epilazione-laser-corpo-carmagnola-zone-tempi",
          description: "Come scegliere priorità, stagionalità e calendario in modo sostenibile.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Dettagli sulle zone corpo e su come organizziamo il percorso.",
        },
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per chiedere un consiglio veloce e fissare la prima valutazione.",
        },
      ],
    },
    faqs: [
      {
        q: "Posso iniziare il laser se ho già in programma sole o vacanze?",
        a: "Spesso sì, ma va pianificato con buon senso: zone, calendario e indicazioni tra una seduta e l'altra contano molto. In studio ti spieghiamo cosa fare e cosa evitare in base alle tue abitudini.",
      },
      {
        q: "Ice Polar rende il laser più facile da tollerare?",
        a: "Sì, aiuta il comfort durante la seduta. La differenza vera resta nel metodo: parametri su misura e percorso seguito nel tempo, senza corse.",
      },
      {
        q: "Quante sedute servono e ogni quanto si fanno?",
        a: "Dipende da zona, pelo e risposta individuale. Impostiamo un calendario realistico in consulenza e lo adattiamo se la pelle o le abitudini cambiano.",
      },
    ],
    keywords: [
      "centro estetico Sommariva del Bosco",
      "estetista Sommariva del Bosco",
      "epilazione laser Sommariva del Bosco",
      "laser Sommariva del Bosco",
    ],
  },
  {
    slug: "poirino",
    city: "Poirino",
    cluster: "asse-carmagnola",
    title: "Centro estetico vicino Poirino: laser organizzato, senza confusione",
    description:
      "Da Poirino a Carmagnola per l'epilazione laser: valutazione iniziale, parametri su misura e un calendario che riesci a seguire.",
    intro:
      "La parte difficile non è decidere \"faccio il laser\": è scegliere le zone e impostare un calendario che non si incasina dopo due settimane. In Rebel facciamo chiarezza da subito, con un percorso pratico e sostenibile.",
    whyRebel: [
      "Valutazione iniziale e priorità chiare (zona per zona)",
      "Calendario e indicazioni semplici tra una seduta e l'altra",
      "Tecnologia Thory con manipolo Ice Polar per maggiore comfort",
      "Listino trasparente e percorso costruito su tempi reali",
    ],
    directions: {
      heading: "Come arrivare da Poirino a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Poirino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Poirino&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per arrivare senza perdere tempo, apri la mappa e segui il percorso aggiornato in tempo reale. La destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se vuoi incastrare bene gli appuntamenti con lavoro e famiglia, scrivici su WhatsApp: ti aiutiamo a scegliere un ritmo sostenibile e a non \"mollare\" dopo le prime sedute.",
      ],
    },
    focus: {
      heading: "Poirino: scegliere le zone giuste (e farlo con buon senso)",
      paragraphs: [
        "Molte persone partono con l'idea di fare tutto insieme. In realtà, per vivere bene il percorso, spesso conviene scegliere 1-2 zone prioritarie e impostare un calendario pulito: meno stress, più continuità.",
        "La differenza la fa l'organizzazione: parametri su misura, intervalli coerenti e piccoli aggiustamenti quando la pelle o la risposta cambiano. Il laser funziona meglio quando lo segui con serenità, non quando lo rincorri.",
        "Ice Polar è un aiuto concreto sul comfort durante la seduta, ma il risultato non è \"una macchina\": è metodo + calendario + indicazioni chiare tra una seduta e l'altra.",
        "Se arrivi da Poirino e vuoi capire da quali zone partire (anche in base a tempo e budget), scrivici: ti diciamo subito una strategia semplice e realistica.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Poirino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Viale Barbaroux 20, Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Panoramica chiara su come impostiamo il percorso (valutazione + calendario).",
        },
        {
          label: "Laser corpo: zone, tempi e piano sedute",
          href: "/competenze/epilazione-laser-corpo-carmagnola-zone-tempi",
          description: "Per scegliere priorità e stagionalità con un criterio semplice.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Dettagli sulle zone corpo e sulle domande più comuni.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei servizi disponibili in studio.",
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
        q: "Da quale zona conviene partire se ho poco tempo?",
        a: "Dipende da abitudini e obiettivo. In consulenza scegliamo insieme una priorità (o due) e costruiamo un calendario che riesci a seguire, senza incastrarti.",
      },
      {
        q: "Posso trattare più zone nello stesso periodo?",
        a: "Sì, se ha senso per il tuo tempo e per la tollerabilità. A volte è più sostenibile partire gradualmente: l'importante è non rendere il percorso ingestibile.",
      },
      {
        q: "Ice Polar cambia davvero il comfort durante la seduta?",
        a: "Aiuta molto la tollerabilità, ma la percezione varia da zona a zona. Per noi resta fondamentale anche il settaggio corretto e la progressione del percorso.",
      },
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
    title: "Centro estetico vicino Pancalieri: laser seguito, con indicazioni chiare",
    description:
      "Da Pancalieri a Carmagnola per l'epilazione laser: valutazione, settaggio su misura e indicazioni pratiche tra una seduta e l'altra.",
    intro:
      "Il laser funziona meglio quando sai cosa aspettarti prima e cosa fare dopo. In Rebel puntiamo su regole semplici, comunicazione chiara e un percorso che resta gestibile anche quando la vita è piena.",
    whyRebel: [
      "Indicazioni pratiche pre e post-seduta (senza confusione)",
      "Calendario coerente e adattabile alle tue abitudini",
      "Tecnologia Thory con manipolo Ice Polar per migliorare il comfort",
      "Supporto rapido su WhatsApp durante tutto il percorso",
    ],
    directions: {
      heading: "Come arrivare da Pancalieri a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Pancalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Pancalieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: è il modo più comodo per arrivare a Viale Barbaroux 20, Carmagnola.",
        "Se vuoi partire con un piano ordinato (zone + calendario), scrivici su WhatsApp: ti guidiamo passo per passo, senza accelerazioni inutili.",
      ],
    },
    focus: {
      heading: "Pancalieri: la parte che fa la differenza è tra una seduta e l'altra",
      paragraphs: [
        "Il laser non è solo quello che succede in cabina: è anche il modo in cui la pelle viene gestita tra una seduta e l'altra. Quando le indicazioni sono chiare, la pelle resta più tranquilla e il percorso diventa più facile da seguire.",
        "In studio impostiamo il lavoro in modo progressivo: valutazione iniziale, parametri su misura e un calendario coerente. Se cambiano abitudini, stagione o sensibilità, si adatta anche il piano.",
        "Ice Polar aiuta molto il comfort durante la seduta, ma non è l'unica variabile. La differenza vera è una gestione ordinata: niente promesse esagerate, solo una progressione chiara.",
        "Se arrivi da Pancalieri e vuoi iniziare senza dubbi confusi, scrivici: ti spieghiamo cosa aspettarti e da dove partire (viso, corpo o una zona alla volta).",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Pancalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione, calendario e percorso spiegati in modo semplice.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e domande frequenti.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per orientarti tra tecnologie e scelte sensate, senza confusione.",
        },
        {
          label: "Contatti",
          href: "/contatti",
          description: "Per prenotare la prima valutazione o chiedere un consiglio.",
        },
      ],
    },
    faqs: [
      {
        q: "Cosa devo fare dopo una seduta laser?",
        a: "Ti diamo indicazioni semplici e coerenti con le zone trattate. In generale puntiamo a mantenere la pelle tranquilla: niente eccessi, niente ansia, solo regole chiare da seguire.",
      },
      {
        q: "Se ho la pelle sensibile posso fare il laser?",
        a: "Spesso sì, ma serve valutazione iniziale e settaggio corretto. Lavoriamo in modo graduale e adattiamo il piano in base alla risposta della pelle.",
      },
      {
        q: "Posso iniziare anche se faccio sport o ho una routine intensa?",
        a: "Sì: proprio per questo impostiamo calendario e indicazioni in modo realistico. L'obiettivo è un percorso che si incastra nella tua vita, non il contrario.",
      },
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
    title: "Centro estetico vicino Nichelino: laser e cura pelle, con metodo",
    description:
      "Da Nichelino a Carmagnola per epilazione laser e trattamenti mirati viso/corpo: valutazione iniziale, percorso su misura e indicazioni chiare.",
    intro:
      "A volte il problema non è scegliere un trattamento: è riuscire a seguirlo. In Rebel impostiamo un piano semplice, con appuntamenti realistici e indicazioni chiare tra una seduta e l'altra.",
    whyRebel: [
      "Valutazione iniziale e percorso costruito su pelle, zona e obiettivo",
      "Indicazioni pratiche tra le sedute (così non vai a tentativi)",
      "Tecnologia Thory con manipolo Ice Polar per maggiore comfort",
      "Un solo studio per laser e cura della pelle (viso e corpo)",
    ],
    directions: {
      heading: "Come arrivare da Nichelino a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Nichelino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Nichelino&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi partire con un piano ordinato (zone + calendario), scrivici su WhatsApp: ti aiutiamo a scegliere il ritmo più comodo fin dall'inizio.",
      ],
    },
    focus: {
      heading: "Nichelino: laser e pelle più comoda da gestire (anche tra le sedute)",
      paragraphs: [
        "Un percorso laser fatto bene non riguarda solo la riduzione progressiva della ricrescita: riguarda anche la quotidianità. Meno corse con ceretta e lametta, meno improvvisazione, una pelle più semplice da gestire.",
        "Per questo insistiamo sulle basi: calendario coerente, parametri impostati con attenzione e indicazioni chiare tra una seduta e l'altra. È lì che spesso si evitano gli errori più comuni.",
        "Se serve, integriamo anche trattamenti corpo molto semplici (come uno scrub impostato con buon senso) per aiutare la pelle a restare più uniforme e confortevole, senza esagerare.",
        "Se arrivi da Nichelino e vuoi un percorso laser organizzato (senza dubbi confusi), scrivici: ti diciamo da dove partire e cosa aspettarti, zona per zona.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Nichelino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come impostiamo valutazione, parametri e calendario in studio.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e FAQ rapide.",
        },
        {
          label: "Scrub corpo",
          href: "/servizi/scrub-corpo-carmagnola",
          description: "Esfoliazione controllata per pelle più uniforme (quando ha senso).",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per orientarti tra tecnologie e scelte sensate, senza promesse.",
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
        q: "Tra una seduta e l'altra posso fare ceretta o epilatore?",
        a: "In generale, durante un percorso laser si evita l'epilazione a strappo perché interferisce con il ciclo del pelo. Di solito si preferisce il rasoio e seguiamo indicazioni chiare in base alle zone.",
      },
      {
        q: "Posso fare scrub o trattamenti corpo durante il percorso laser?",
        a: "Spesso sì, ma con timing e delicatezza. Ti diciamo quando farlo e quando invece è meglio aspettare, così la pelle resta tranquilla.",
      },
      {
        q: "Quando si iniziano a vedere cambiamenti?",
        a: "Dipende da zona e risposta individuale. In genere i cambiamenti sono progressivi: per questo contano costanza e calendario, non la singola seduta.",
      },
    ],
    keywords: [
      "centro estetico Nichelino",
      "estetista Nichelino",
      "epilazione laser Nichelino",
      "laser Nichelino",
    ],
  },
  {
    slug: "vinovo",
    city: "Vinovo",
    cluster: "torino-sud",
    title: "Centro estetico vicino Vinovo: laser con aspettative chiare e percorso seguito",
    description:
      "Da Vinovo a Carmagnola per l'epilazione laser: valutazione iniziale, parametri su misura e un percorso monitorato nel tempo.",
    intro:
      "Quando inizi il laser, la cosa più utile è sapere cosa aspettarti: tempi, calendario, cambiamenti progressivi e mantenimento. In Rebel lavoriamo con chiarezza e continuità, senza promesse esagerate.",
    whyRebel: [
      "Valutazione iniziale e piano sedute costruito su zona, pelle e obiettivo",
      "Calendario coerente e aggiustamenti quando serve (senza confusione)",
      "Tecnologia Thory con manipolo Ice Polar per migliorare il comfort",
      "Indicazioni chiare su mantenimento e richiami",
    ],
    directions: {
      heading: "Come arrivare da Vinovo a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Vinovo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Vinovo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per arrivare in modo semplice, apri Google Maps e segui il percorso aggiornato in tempo reale. La destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se vuoi impostare bene gli appuntamenti fin dall'inizio (e non perderti per strada), scrivici su WhatsApp: ti aiutiamo a scegliere un ritmo realistico.",
      ],
    },
    focus: {
      heading: "Vinovo: laser con aspettative chiare (e mantenimento sensato)",
      paragraphs: [
        "Il laser è un percorso progressivo: il cambiamento si costruisce seduta dopo seduta. Per questo preferiamo parlare subito di calendario e tempi, invece di vendere certezze.",
        "Un altro punto spesso sottovalutato è il mantenimento. In molti casi servono richiami nel tempo: non è un fallimento, è parte di una gestione intelligente e realistica.",
        "La tecnologia conta (e Ice Polar aiuta il comfort), ma la differenza vera è il metodo: parametri su misura, monitoraggio e comunicazione chiara. Così sai sempre dove sei nel percorso e cosa aspettarti.",
        "Se arrivi da Vinovo e vuoi partire con una strategia pulita (zone + calendario + aspettative), scrivici: ti orientiamo in modo semplice e concreto.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Vinovo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come lavoriamo: valutazione iniziale, settaggio e percorso monitorato.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta, senza confusione.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Dettagli e domande frequenti sulle zone del viso.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo, con percorso su misura.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei servizi in studio.",
        },
      ],
    },
    faqs: [
      {
        q: "Il laser è definitivo?",
        a: "Parliamo di riduzione progressiva e prolungata della ricrescita. In molti casi, nel tempo, possono servire richiami: l'importante è impostare bene il piano e monitorare la risposta.",
      },
      {
        q: "Cosa succede se salto una seduta?",
        a: "Non succede \"un disastro\", ma il calendario perde continuità. Se capita, riorganizziamo il piano in modo sensato e ti diciamo come riprendere senza confusione.",
      },
      {
        q: "Ice Polar significa che non sentirò nulla?",
        a: "Aiuta molto il comfort, ma la percezione varia da zona a zona e da persona a persona. In studio lavoriamo sempre in modo graduale e su misura.",
      },
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
    title: "Centro estetico vicino La Loggia: laser spiegato bene fin dalla prima seduta",
    description:
      "Da La Loggia a Carmagnola per l'epilazione laser: valutazione iniziale, parametri su misura e un percorso seguito con indicazioni chiare.",
    intro:
      "Le prime sedute sono quelle che decidono se ti fidi del percorso: capire cosa aspettarti, leggere i segnali giusti e avere un calendario coerente. In Rebel partiamo da chiarezza e progressione, non da promesse.",
    whyRebel: [
      "Spiegazioni chiare su cosa aspettarti dopo le prime sedute",
      "Calendario e controlli per mantenere il percorso coerente",
      "Tecnologia Thory con manipolo Ice Polar per migliorare il comfort",
      "Supporto rapido su WhatsApp, prima e dopo",
    ],
    directions: {
      heading: "Come arrivare da La Loggia a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=La+Loggia&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=La+Loggia&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se vuoi partire con un piano ordinato (zone + calendario), scrivici su WhatsApp: ti aiutiamo a scegliere il ritmo più comodo fin dall'inizio.",
      ],
    },
    focus: {
      heading: "La Loggia: cosa aspettarti dalle prime sedute (senza ansia)",
      paragraphs: [
        "Dopo la prima seduta molte persone si chiedono: \"e adesso cosa devo vedere?\". Nel laser, la parola chiave è progressione: i cambiamenti arrivano nel tempo e vanno letti nel modo giusto, senza pretendere tutto subito.",
        "Nelle settimane iniziali ti spieghiamo cosa aspettarti e cosa evitare tra una seduta e l'altra. È così che la pelle resta più tranquilla e il percorso resta chiaro, senza tentativi casuali.",
        "Ice Polar aiuta a migliorare il comfort durante la seduta, ma la differenza vera resta nel metodo: parametri su misura e calendario coerente. Una seduta ben impostata vale più di una seduta \"forte\" fatta a caso.",
        "Se arrivi da La Loggia e vuoi iniziare con un percorso laser seguito e spiegato bene, scrivici: ti diciamo da dove partire e come organizzare le prime sedute.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=La+Loggia&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, settaggio e calendario: come lavoriamo in studio.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per orientarti tra tecnologie e scelte sensate, senza confusione.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e domande frequenti.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei servizi disponibili in studio.",
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
        q: "Dopo la prima seduta laser cosa succede?",
        a: "Dipende da zona e risposta individuale. In genere il percorso è progressivo: ti spieghiamo cosa aspettarti nei giorni e nelle settimane successive e come gestire la pelle in modo semplice.",
      },
      {
        q: "Se ho paura del fastidio, posso comunque iniziare?",
        a: "Sì: lavoriamo in modo graduale e su misura. Ice Polar aiuta il comfort durante la seduta, e il settaggio viene sempre adattato alla risposta della pelle.",
      },
      {
        q: "Quante sedute servono per un risultato stabile?",
        a: "Dipende da zona, pelo e risposta individuale. In consulenza impostiamo un calendario realistico e lo monitoriamo seduta dopo seduta.",
      },
    ],
    keywords: [
      "centro estetico La Loggia",
      "estetista La Loggia",
      "epilazione laser La Loggia",
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

