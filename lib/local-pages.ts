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
      "Se sei di Carmagnola e cerchi un centro estetico serio, qui trovi un modo di lavorare molto concreto: ti ascoltiamo, leggiamo la pelle da vicino e poi decidiamo cosa fare (e con che ritmo).",
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
      heading: "Carmagnola: viso più in ordine, laser impostato bene (senza confusione)",
      paragraphs: [
        "A Carmagnola spesso si parte da una richiesta semplice: vedersi più curate, ma senza incastrarsi in dieci cose diverse. È un obiettivo sacrosanto, e si può fare se scegliamo bene l'ordine.",
        "Sul viso lavoriamo per step: prima rimettiamo al centro comfort, grana e luminosità, poi (se serve) passiamo a protocolli più avanzati che hanno una progressione vera e non ti fanno cambiare strada ogni mese.",
        "Se invece la priorità è il laser, la chiave è una: zone e calendario realistici. Inguine e ascelle, per esempio, sono due aree che meritano una gestione precisa (sia per comfort, sia per la costanza tra una seduta e l'altra).",
        "E sì: seguiamo anche percorsi laser uomo (barba/collo e aree ampie come schiena/torace). Sono richieste frequenti, ma con logiche un po' diverse: densità del pelo, ricrescita e organizzazione fanno più della fretta.",
        "In pratica: poche scelte fatte bene, portate avanti con continuità. Se vuoi, da qui puoi leggere due guide rapide prima di scriverci.",
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
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Cosa significa davvero avanzata e come si costruisce un percorso fatto bene.",
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
          description: "Per alleggerire la sensazione di gonfiore e impostare un calendario che non ti stressi.",
        },
        {
          label: "Collagen Code",
          href: "/protocolli/collagen-code",
          description: "Un protocollo richiesto spesso quando si cerca tono e compattezza con una progressione pulita.",
        },
        {
          label: "Tutti i protocolli epigenetici",
          href: "/protocolli-epigenetici",
          description: "Panoramica completa con prezzi, FAQ e dettagli dei protocolli.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Sedute, calendario e cosa aspettarsi quando inizi.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Una pagina dedicata al comfort durante la seduta e a come impostiamo il percorso.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Tempistiche, gestione pratica e come evitare di perdersi tra una seduta e l'altra.",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Cosa aspettarsi davvero su una zona piccola ma intensa (e come renderla più semplice).",
        },
        {
          label: "Laser uomo: guida pratica",
          href: "/competenze/laser-uomo-carmagnola-guida-pratica",
          description: "Barba/collo, schiena, torace: strategia, calendario e gestione della ricrescita.",
        },
        {
          label: "Laser viso uomo",
          href: "/servizi/epilazione-laser-viso-uomo-carmagnola",
          description: "Scheda servizio dedicata: barba/collo e zone viso, con FAQ e regole pratiche.",
        },
        {
          label: "Laser corpo uomo",
          href: "/servizi/epilazione-laser-corpo-uomo-carmagnola",
          description: "Scheda servizio dedicata alle aree ampie (schiena, torace, addome) con piano ordinato.",
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
      "Se vivi a Carignano e vuoi iniziare il laser con serenità, Rebel a Carmagnola ti segue con un piano ordinato e comfort grazie a Ice Polar.",
    intro:
      "Da Carignano arrivano clienti che vogliono fare il laser bene e basta: senza mille ripartenze e senza sentirsi in balia del percorso dopo le prime due sedute.",
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
      heading: "Carignano: laser ordinato (e un viso più compatto, senza corse)",
      paragraphs: [
        "Da Carignano arrivano spesso persone con un'idea chiara: fare il laser in modo seguito e non \"a tentativi\". Il primo passo, per noi, è scegliere le zone giuste e un calendario che riesci a rispettare davvero.",
        "Inguine e ascelle, per esempio, sono due aree che sembrano \"semplici\" ma richiedono metodo: tempi corretti, gestione pratica tra le sedute e aspettative realistiche già da subito.",
        "E capita spesso che, mentre si imposta il laser, esca anche un tema viso: pelle più spenta, texture che non regge più bene sotto il make-up, sensazione di perdita di tono. In questi casi Collagen Code è uno dei protocolli che ci chiedono spesso: progressione pulita e obiettivo chiaro.",
        "Se ti interessa il laser uomo (barba/collo o zone ampie), vale la stessa regola: organizzazione prima di tutto. Meglio un piano ordinato che sedute sparse senza direzione.",
        "E per l'estetica classica? La inseriamo quando ti semplifica la vita: una pulizia viso fatta bene, uno scrub corpo o una manicure ordinata possono stare nello stesso percorso, ma con timing sensato.",
        "Se hai poco tempo, si fa lo stesso: scegliamo una priorità (laser su una zona oppure viso) e costruiamo il resto intorno, senza sovraccaricare.",
      ],
      links: [
        {
          label: "Collagen Code",
          href: "/protocolli/collagen-code",
          description: "Protocollo su compattezza e rimpolpamento, con lavoro progressivo e calendario pulito.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Criteri pratici: quando ha senso, quando no, e cosa chiedere in consulenza.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un ottimo primo passo se la pelle è spenta o \"appesantita\".",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un classico curato, perfetto da abbinare quando vuoi ottimizzare la giornata.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Panoramica chiara su come lavoriamo e come iniziare.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta (oltre al nome della tecnologia).",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Zone viso, consigli pratici e domande frequenti.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Per partire con ritmo e gestione pratica (senza improvvisare).",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Consigli concreti per una zona piccola ma intensa.",
        },
        {
          label: "Laser uomo: guida pratica",
          href: "/competenze/laser-uomo-carmagnola-guida-pratica",
          description: "Barba/collo e aree ampie: come impostiamo calendario e aspettative.",
        },
        {
          label: "Laser viso uomo",
          href: "/servizi/epilazione-laser-viso-uomo-carmagnola",
          description: "Scheda servizio dedicata: gestione barba/collo e comfort in seduta.",
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
        a: "Sì. Pianifichiamo un calendario che riesci a tenere davvero: meglio poche sedute coerenti che un programma perfetto che poi salta.",
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
      "Se vivi a Racconigi e vuoi iniziare il laser con più serenità, Rebel a Carmagnola ti segue con un piano ordinato e comfort grazie a Ice Polar.",
    intro:
      "Da Racconigi arrivano spesso clienti stanche di improvvisare: vogliono un calendario sensato, qualcuno che segua davvero il percorso e un trattamento confortevole.",
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
      heading: "Da Racconigi: peli incarniti + laser (e un focus occhi molto richiesto: Eye Genesis)",
      paragraphs: [
        "Una delle richieste più frequenti, quando si parla di laser, è legata ai peli incarniti: non è solo un tema estetico, è anche una questione di comfort quotidiano (soprattutto su inguine, ascelle e gambe).",
        "Quando impostiamo un percorso laser fatto bene, ragioniamo per zone e per risposta della pelle. Questo vuol dire due cose pratiche: calendario coerente e parametri adattati nel tempo. Il laser non è un pulsante \"on/off\": è un lavoro di precisione.",
        "Ice Polar ci aiuta a rendere la seduta più confortevole, ma la parte decisiva resta l'organizzazione: scegliamo priorità realistiche (una zona alla volta oppure più zone, se ha senso) e ti diciamo cosa fare tra una seduta e l'altra.",
        "E spesso, quando una persona viene per il laser, esce anche un tema viso: sguardo stanco, gonfiore perioculare, segni più evidenti. In questi casi un protocollo richiesto spesso è Eye Genesis, pensato proprio per la zona occhi (gonfiore, micro-segni, pelle più stanca).",
        "Se invece vuoi restare sull'estetica classica, una cosa molto semplice (ma fatta bene) è lo scrub corpo: aiuta a tenere la pelle più uniforme. La regola è farlo nel momento giusto, senza irritare e senza esagerare.",
        "La cosa bella è che non devi fare tutto insieme: se la priorità è il laser, si parte da quello. Il viso lo inseriamo quando ha senso, con un calendario che non ti stressa e senza sovrapporre troppe cose.",
        "Se arrivi da Racconigi e vuoi partire con un piano chiaro (zone + calendario), scrivici o prenota una valutazione: ti diciamo subito da dove iniziare e cosa aspettarti. Se ti aiuta, qui sotto trovi anche guide specifiche su inguine, ascelle e gambe.",
      ],
      links: [
        {
          label: "Eye Genesis",
          href: "/protocolli/eye-genesis",
          description: "Protocollo contorno occhi: focus su gonfiore, segni e stanchezza, con progressione ordinata.",
        },
        {
          label: "Peli incarniti e laser: guida pratica",
          href: "/competenze/peli-incarniti-laser-carmagnola",
          description: "Cause comuni, errori tipici e come impostare un percorso più pulito.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Per capire la logica dei percorsi (e non perdere tempo in prove a caso).",
        },
        {
          label: "Scrub corpo",
          href: "/servizi/scrub-corpo-carmagnola",
          description: "Esfoliazione controllata per pelle più uniforme (se e quando ha senso).",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Da dove si parte e come lavoriamo: valutazione, settaggio e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e domande frequenti.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Gestione pratica della zona e aspettative realistiche su tempi e ricrescita.",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Cosa cambia tra sudorazione, sensibilità e calendario: in parole semplici.",
        },
        {
          label: "Guida laser gambe",
          href: "/competenze/laser-gambe-carmagnola-guida-pratica",
          description: "Strategia, stagionalità e mantenimento quando la priorità sono le gambe.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Per le zone più delicate: attenzione alla pelle e regole pratiche.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta (oltre al nome della macchina).",
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
        a: "Sì, ed è uno dei motivi per cui molte persone iniziano. Serve valutare zona e pelle, poi impostare calendario e settaggio in modo coerente.",
      },
      {
        q: "Ice Polar rende il laser indolore?",
        a: "Aiuta molto il comfort, ma la percezione cambia in base a zona e sensibilità. Noi regoliamo sempre in modo graduale e sensato.",
      },
      {
        q: "Meglio trattare tante zone insieme o una alla volta?",
        a: "Dipende da priorità, tempo e tollerabilità. In consulenza scegliamo una strategia che sta nella tua settimana, così non ti perdi per strada.",
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
      "Il dubbio più comune quando si pensa al laser è legato al periodo: sole, vacanze, abitudini. In Rebel lo impostiamo con calma, così sai cosa aspettarti e non ti blocchi per mesi a rimandare.",
    whyRebel: [
      "Valutazione iniziale e piano sedute costruito su zona, pelle e obiettivo",
      "Calendario ordinato e consigli pratici tra una seduta e l'altra",
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
      heading: "Sommariva del Bosco: laser ben pianificato (e un protocollo viso lift richiesto spesso)",
      paragraphs: [
        "Da Sommariva del Bosco la domanda ricorrente è sempre quella: \"Posso iniziare anche se tra un po' mi espongo al sole o ho le vacanze?\". La risposta non è uguale per tutti, ma quasi sempre si può pianificare bene senza bloccarsi mesi.",
        "La parte più importante non è \"fare presto\": è avere un calendario coerente e adattabile. Se in un periodo ti esponi di più o cambiano le abitudini, il percorso si può ritarare senza perdere la direzione.",
        "In studio lavoriamo anche con manipolo Ice Polar per migliorare il comfort durante la seduta. È un aiuto concreto, ma resta un pezzo del metodo: parametri impostati con competenza e una progressione che puoi seguire con serenità.",
        "Quando invece la richiesta è viso più fresco (ovale, tono, luminosità), spesso consigliamo Rebel Lift Protocol: è un protocollo epigenetico orientato a tono e luce, pensato per risultati progressivi e non solo \"bella in giornata\".",
        "Se arrivi da Sommariva del Bosco, l'idea è ottimizzare: o parti dal laser e poi inseriamo il viso, oppure fai il contrario. L'importante è scegliere una priorità e tenere il filo.",
        "E se vuoi aggiungere un classico mentre sei in studio (senza complicarti la giornata), spesso funziona bene abbinare una manicure ordinata o una laminazione, giusto per uscire \"a posto\" senza fare due viaggi.",
        "Se arrivi da Sommariva del Bosco e vuoi capire se questo è il momento giusto (e da quali zone partire), scrivici: ti diciamo come impostarlo senza fretta.",
      ],
      links: [
        {
          label: "Rebel Lift Protocol",
          href: "/protocolli/rebel-lift-protocol",
          description: "Protocollo su tono, ovale e luminosità, con progressione pulita e ritmo realistico.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Cosa guardiamo in consulenza e come evitiamo percorsi \"a tentativi\".",
        },
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
          description: "Cosa cambia sul comfort durante la seduta, raccontato senza tecnicismi inutili.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Come scegliere da dove partire sul viso (luminosità, grana, comfort).",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un classico veloce da abbinare quando sei già in zona.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Sguardo più ordinato con effetto naturale (ottima se vuoi ottimizzare la giornata).",
        },
        {
          label: "Laser corpo: zone, tempi e piano sedute",
          href: "/competenze/epilazione-laser-corpo-carmagnola-zone-tempi",
          description: "Come scegliere priorità, stagionalità e calendario senza fare corse.",
        },
        {
          label: "Laser e sole: cosa sapere davvero",
          href: "/competenze/epilazione-laser-estate-sole-carmagnola",
          description: "Regole pratiche e buonsenso: quando si può, quando conviene aspettare, e come organizzarsi.",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Una zona spesso scelta come \"prima partenza\": tempi, gestione e comfort.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Strategia e gestione pratica su una zona delicata, senza ansie inutili.",
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
        a: "Spesso sì, ma va pianificato con buon senso: zone, calendario e regole pratiche tra una seduta e l'altra contano molto. In studio ti diciamo cosa fare e cosa evitare in base alle tue abitudini.",
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
    title: "Centro estetico vicino Poirino: laser organizzato, con un piano ordinato",
    description:
      "Da Poirino a Carmagnola per l'epilazione laser: valutazione iniziale, parametri su misura e un calendario che riesci a seguire.",
    intro:
      "La parte difficile non è decidere \"faccio il laser\": è scegliere le zone e impostare un calendario che non si incasina dopo due settimane. In Rebel lo rendiamo gestibile da subito: priorità, appuntamenti realistici e una gestione semplice tra le sedute.",
    whyRebel: [
      "Valutazione iniziale e priorità chiare (zona per zona)",
      "Calendario e regole pratiche tra una seduta e l'altra",
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
        "Se vuoi incastrare bene gli appuntamenti con lavoro e famiglia, scrivici su WhatsApp: ti aiutiamo a scegliere un calendario che riesci a tenere (e a non \"mollare\" dopo le prime sedute).",
      ],
    },
    focus: {
      heading: "Poirino: laser con priorità (e un protocollo viso molto richiesto: Rebirth 60+)",
      paragraphs: [
        "Da Poirino arrivano spesso persone indecise tra più zone (e capisco il perché). Il modo migliore per non incasinarsi è scegliere 1-2 priorità e impostare un calendario pulito: meno stress, più continuità.",
        "La differenza la fa l'organizzazione: parametri su misura, intervalli coerenti e piccoli aggiustamenti quando la pelle o la risposta cambiano. Il laser funziona meglio quando lo segui con serenità, non quando lo rincorri.",
        "Ice Polar è un aiuto concreto sul comfort durante la seduta, ma il risultato non è \"una macchina\": è metodo + calendario + cosa fare tra una seduta e l'altra.",
        "Se invece la richiesta è viso (pelle che cambia, più secca, più sottile o semplicemente meno piena), un protocollo molto richiesto è Rebirth 60+: è pensato per pelli mature, su densità e nutrimento, con un'idea chiara di progressione.",
        "Anche qui vale la regola d'oro: una priorità alla volta. Se inizi dal laser, il viso lo inseriamo quando serve; se inizi dal viso, il laser lo programmiamo con la stessa logica, senza accavallare tutto.",
        "Se vuoi restare su servizi classici, lo stesso approccio vale anche per mani e corpo: manicure ordinata, massaggio relax o linfodrenante, ma sempre con un calendario che non ti stressa.",
        "Se arrivi da Poirino e vuoi capire da quali zone partire (anche in base a tempo e budget), scrivici: ti diciamo subito una strategia semplice e realistica.",
      ],
      links: [
        {
          label: "Rebirth 60+",
          href: "/protocolli/rebirth-60-plus",
          description: "Dedicato alle pelli mature: nutrimento e densità percepita con metodo e continuità.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Per capire come si imposta un percorso viso fatto bene, senza correre dietro alle mode.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Quando vuoi semplicemente staccare (schiena, spalle, cervicale).",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un classico curato, comodo da abbinare quando sei già in studio.",
        },
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
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata con criterio.",
        },
        {
          label: "Laser corpo: zone, tempi e piano sedute",
          href: "/competenze/epilazione-laser-corpo-carmagnola-zone-tempi",
          description: "Per scegliere priorità e stagionalità con un criterio semplice.",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Se vuoi partire da una zona \"smart\": come gestire tempi e sedute.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Per capire prima regole pratiche, comfort e aspettative sul percorso.",
        },
        {
          label: "Laser uomo: guida pratica",
          href: "/competenze/laser-uomo-carmagnola-guida-pratica",
          description: "Se cerchi un percorso uomo (barba/collo o aree ampie): come lo impostiamo.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Guida pratica per scegliere il trattamento viso giusto partendo dalla pelle di oggi.",
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
      "Da Villastellone a Carmagnola per il laser: competenza, piano ordinato e comfort con Ice Polar.",
    intro:
      "Di solito non si cerca \"la seduta\": si cerca un percorso laser fatto bene, raccontato con calma e seguito nel tempo. Se arrivi da Villastellone, Rebel a Carmagnola è una scelta comoda per iniziare con un piano chiaro.",
    whyRebel: [
      "Distanza comoda da Villastellone",
      "Competenza e settaggio su misura in base a pelle, zona e obiettivo",
      "Percorso ordinato, con calendario e controlli durante il ciclo",
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
      heading: "Da Villastellone: laser confortevole + un protocollo rigenerazione molto richiesto",
      paragraphs: [
        "Se vivi a Villastellone e stai pensando al laser, capiamo benissimo il dubbio più comune: \"Sarò a mio agio durante la seduta?\". Per questo in studio lavoriamo con manipolo Ice Polar, che aiuta a rendere il trattamento più confortevole.",
        "Ma il comfort da solo non basta. Quello che fa davvero la differenza è la competenza con cui si impostano parametri e calendario: zona per zona, pelle per pelle, con una progressione chiara e senza corse.",
        "E succede spesso che, mentre si parla di laser, emerga anche un desiderio più ampio: pelle più compatta, più luminosa, più uniforme. In questi casi un protocollo molto richiesto è Rebel Cell Regeneration, un percorso intensivo viso/corpo pensato per rigenerazione progressiva.",
        "Un'altra richiesta tipica (anche in coppia) è il laser uomo: schiena e torace, oppure barba/collo. In quel caso si ragiona ancora di più per strategia, perché densità e ricrescita chiedono un calendario ordinato.",
        "Se invece vuoi partire da qualcosa di classico (ma fatto bene), spesso il massaggio rilassante è il primo step: ti rimette in ordine schiena e spalle, e non ti incastra in un percorso infinito.",
        "La scelta la facciamo insieme: se la priorità è il laser, si parte dalle zone e si costruisce calendario e gestione. Se invece vuoi lavorare prima sul viso/corpo, il laser lo programmiamo in modo coerente, senza accavallare troppe cose nello stesso periodo.",
      ],
      links: [
        {
          label: "Rebel Cell Regeneration",
          href: "/protocolli/rebel-cell-regeneration",
          description: "Protocollo intensivo viso/corpo per rigenerazione progressiva, con percorso seguito nel tempo.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Per capire come unire attivi, manualità e tecnologia con una logica chiara.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "50 minuti dedicati a schiena, spalle e cervicale.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come lavoriamo in studio e da dove partire (valutazione, settaggio e calendario).",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione seguita nel tempo.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Dettagli per le zone del viso, consigli pratici e domande frequenti.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo, con percorso su misura.",
        },
        {
          label: "Laser uomo: guida pratica",
          href: "/competenze/laser-uomo-carmagnola-guida-pratica",
          description: "Per capire come impostiamo un percorso uomo (barba/collo e aree ampie).",
        },
        {
          label: "Guida laser schiena",
          href: "/competenze/laser-schiena-carmagnola-guida-pratica",
          description: "Strategia, calendario e post-seduta quando la zona è la schiena.",
        },
        {
          label: "Laser corpo uomo",
          href: "/servizi/epilazione-laser-corpo-uomo-carmagnola",
          description: "Scheda servizio dedicata: schiena, torace, addome e aree ampie.",
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
    title: "Centro estetico vicino Pancalieri: laser seguito, con un piano ordinato",
    description:
      "Da Pancalieri a Carmagnola per l'epilazione laser: valutazione, settaggio su misura e regole pratiche tra una seduta e l'altra.",
    intro:
      "Il laser funziona meglio quando sai cosa aspettarti prima e cosa fare dopo. In Rebel puntiamo su poche regole pratiche, una progressione ordinata e un percorso che resta gestibile anche quando la settimana è piena.",
    whyRebel: [
      "Pre e post-seduta: regole pratiche (senza liste infinite)",
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
      heading: "Pancalieri: tra una seduta e l'altra (e un reset viso richiesto spesso: Catalysis Ritual)",
      paragraphs: [
        "Il laser non è solo quello che succede in cabina: è anche come gestisci la pelle tra una seduta e l'altra. Quando sai cosa fare, la pelle resta più tranquilla e il percorso scorre meglio (soprattutto su zone come ascelle e inguine).",
        "In studio impostiamo il lavoro in modo progressivo: valutazione iniziale, parametri su misura e un calendario coerente. Se cambiano abitudini, stagione o sensibilità, si adatta anche il piano.",
        "Ice Polar aiuta molto il comfort durante la seduta, ma non è l'unica variabile. La differenza vera è una gestione ordinata: niente promesse esagerate, solo una progressione chiara.",
        "E spesso, mentre si fa il laser, nasce anche una richiesta viso molto concreta: pelle più opaca, grana più spessa, sensazione di disordine (anche con prodotti a casa). In questi casi un protocollo richiesto spesso è Catalysis Ritual: un reset cutaneo con maschere enzimatiche e biostimolatori, pensato per rimettere la pelle in carreggiata.",
        "Se arrivi da Pancalieri, l'idea è non mischiare tutto: scegliamo una priorità (laser su una zona oppure viso) e poi costruiamo il resto intorno, con un calendario che si regge.",
        "E se vuoi un classico che funziona sempre come primo step sul viso, spesso partiamo dalla pulizia viso: fatta bene, ti rimette la pelle in ordine e ti fa capire da dove iniziare davvero.",
        "Se arrivi da Pancalieri e vuoi iniziare senza dubbi confusi, scrivici: ti spieghiamo cosa aspettarti e da dove partire (viso, corpo o una zona alla volta).",
      ],
      links: [
        {
          label: "Catalysis Ritual",
          href: "/protocolli/catalysis-ritual",
          description: "Quando la pelle è opaca o disordinata: reset e comfort, senza eccessi.",
        },
        {
          label: "Estetica avanzata a Carmagnola",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Per capire quando serve un protocollo e quando basta un primo step fatto bene.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un classico che rimette ordine e prepara la pelle al resto.",
        },
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Pancalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione, settaggio e calendario: come si parte e cosa aspettarsi.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Guida laser ascelle",
          href: "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica",
          description: "Tempi, gestione pratica e piccoli dettagli che fanno la differenza.",
        },
        {
          label: "Guida laser inguine",
          href: "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica",
          description: "Come impostare la zona in modo confortevole e coerente, senza stressarti.",
        },
        {
          label: "Laser e sole: cosa sapere davvero",
          href: "/competenze/epilazione-laser-estate-sole-carmagnola",
          description: "Regole pratiche per non farti bloccare da stagione, weekend e vacanze.",
        },
        {
          label: "Peli incarniti e laser: guida pratica",
          href: "/competenze/peli-incarniti-laser-carmagnola",
          description: "Per capire cosa cambia nel quotidiano quando la priorità è il comfort.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Per scegliere da dove partire sul viso (pulizia, luminosità, comfort, routine).",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e domande frequenti.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa chiedere (e cosa guardare) prima di iniziare.",
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
        a: "Ti diamo regole semplici e coerenti con le zone trattate. In generale puntiamo a mantenere la pelle tranquilla: niente eccessi, niente ansia, solo poche cose fatte bene.",
      },
      {
        q: "Se ho la pelle sensibile posso fare il laser?",
        a: "Spesso sì, ma serve valutazione iniziale e settaggio corretto. Lavoriamo in modo graduale e adattiamo il piano in base alla risposta della pelle.",
      },
      {
        q: "Posso iniziare anche se faccio sport o ho una routine intensa?",
        a: "Sì: proprio per questo impostiamo calendario e regole pratiche in modo realistico. L'obiettivo è un percorso che si incastra nella tua vita, non il contrario.",
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
    title: "Da Torino Sud a Rebel Carmagnola: percorsi chiari per viso, corpo e laser",
    description:
      "Rebel a Carmagnola è scelto anche da clienti di Torino Sud che vogliono un centro estetico organizzato: laser con metodo, percorsi viso/corpo e regole pratiche tra le sedute.",
    intro:
      "Se arrivi da Torino Sud, la cosa che fa la differenza è avere un piano semplice: obiettivo chiaro, calendario realistico e una gestione umana (senza mille cambi di rotta).",
    whyRebel: [
      "Lettura iniziale: capiamo priorità e tempi prima di proporti qualcosa",
      "Laser, viso e corpo nello stesso studio (con percorso ordinato)",
      "Consigli pratici tra le sedute, così non vai a tentativi",
      "Risposte rapide su WhatsApp per gestire dubbi e calendario",
    ],
    directions: {
      heading: "Dove siamo (comodo anche da Torino Sud)",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
      embedUrl:
        "https://www.google.com/maps?q=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Se sei in zona Torino Sud (Moncalieri, Nichelino, La Loggia, Vinovo e comuni vicini), puoi raggiungerci a Carmagnola in modo comodo. La sede è in Viale Barbaroux 20.",
        "Per una navigazione aggiornata in tempo reale, apri la mappa: è il modo più affidabile per stimare tempi e percorso nel momento in cui parti.",
      ],
    },
    focus: {
      heading: "Torino Sud: come scegliere un percorso che si regge nel tempo",
      paragraphs: [
        "Molte persone arrivano da Torino Sud dopo aver provato soluzioni rapide e poco coerenti: una seduta qua, un'offerta là, e alla fine rimane la sensazione di non avere una direzione.",
        "In Rebel facciamo il contrario: partiamo dall'obiettivo e lo traduciamo in un piano semplice (viso, corpo o laser), con un calendario realistico e regole pratiche tra una seduta e l'altra.",
        "Se l'idea è alzare il livello sul viso, i protocolli epigenetici servono proprio a questo: lavorare con una progressione ordinata, invece di cambiare trattamento ogni mese. Se vuoi restare sui classici, pulizia viso e massaggio relax sono spesso i primi step più utili (e facili da incastrare).",
        "Se vuoi orientarti meglio, trovi anche pagine dedicate ai comuni più vicini e alle guide sulle competenze principali: così arrivi alla consulenza con domande chiare, non con dubbi confusi.",
      ],
      links: [
        {
          label: "Apri la mappa",
          href: "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
          external: true,
          description: "Posizione Rebel (Viale Barbaroux 20, Carmagnola).",
        },
        {
          label: "Località: Moncalieri",
          href: "/localita/moncalieri",
          description: "Una pagina dedicata con mappa e link utili.",
        },
        {
          label: "Località: Nichelino",
          href: "/localita/nichelino",
          description: "Laser con metodo e gestione pratica tra le sedute.",
        },
        {
          label: "Località: Vinovo",
          href: "/localita/vinovo",
          description: "Aspettative chiare, mantenimento e percorso seguito.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come impostiamo valutazione, parametri e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Percorsi epigenetici viso/corpo",
          href: "/protocolli-epigenetici",
          description: "Panoramica dei protocolli e link agli approfondimenti dedicati.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un classico che rimette ordine quando la pelle è spenta o appesantita.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Per sciogliere tensioni su schiena e spalle (ottimo anche come primo step).",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi chiari e panoramica dei servizi in studio.",
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
        q: "Posso fare laser e trattamenti viso/corpo nello stesso percorso?",
        a: "Sì. Molte clienti combinano laser e percorsi viso/corpo: la sequenza si decide in base a obiettivo, tempi e tollerabilità della pelle, così il piano resta ordinato.",
      },
      {
        q: "Se arrivo da Torino Sud e ho poco tempo, come organizziamo gli appuntamenti?",
        a: "Partiamo dalle priorità e costruiamo un calendario realistico. Meglio poche sedute coerenti che un piano perfetto ma impossibile da seguire.",
      },
      {
        q: "Come prenoto?",
        a: "Il modo più rapido è scriverci su WhatsApp: ti rispondiamo con il primo passo consigliato e ti aiutiamo a scegliere l'appuntamento più comodo.",
      },
    ],
    keywords: [
      "centro estetico Torino Sud",
      "estetica epigenetica Torino Sud",
      "laser Torino Sud",
      "epilazione laser Torino Sud",
      "trattamenti viso Torino Sud",
    ],
  },
  {
    slug: "moncalieri",
    city: "Moncalieri",
    cluster: "torino-sud",
    title: "Da Moncalieri a Rebel Carmagnola: viso, corpo e laser con un metodo chiaro",
    description:
      "Rebel Carmagnola è una soluzione scelta anche da clienti di Moncalieri per percorsi viso, corpo e laser.",
    intro:
      "Da Moncalieri ci raggiungono persone che vogliono una cosa semplice: capire da dove partire e seguire un percorso ordinato, senza mille cambi di rotta.",
    whyRebel: [
      "Lettura iniziale e piano sedute costruito su obiettivo reale",
      "Trattamenti viso/corpo e laser nello stesso studio, con progressione",
      "Consigli pratici tra le sedute (routine e post-trattamento)",
      "Supporto rapido su WhatsApp per dubbi e calendario",
    ],
    directions: {
      heading: "Come arrivare da Moncalieri a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Moncalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Moncalieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per una stima aggiornata di tempi e traffico, apri Google Maps: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se arrivi per la prima volta e vuoi evitare stress, scrivici su WhatsApp: ti confermiamo indirizzo e primo passo consigliato.",
      ],
    },
    focus: {
      heading: "Moncalieri: trattamenti viso scelti bene (e una routine che sta nella tua giornata)",
      paragraphs: [
        "Molte persone arrivano con un problema pratico: la pelle cambia, ma la routine non tiene il passo. Il risultato è confusione: prodotti accumulati, sedute a caso, aspettative troppo alte.",
        "In Rebel partiamo dalla pelle di oggi e costruiamo un percorso viso: un trattamento mirato, un calendario che riesci a tenere e due o tre cose a casa che non ti complicano la vita.",
        "Quando serve un passo più avanti, i protocolli epigenetici aiutano a mettere ordine e a lavorare in progressione (non a colpi di \"trattamento del mese\"). Un esempio richiesto spesso, quando la pelle è opaca e \"disordinata\", è Catalysis Ritual: un reset pensato per rimettere la pelle in carreggiata.",
        "E se vuoi restare sui classici, nessun problema: pulizia viso fatta bene e laminazione ciglia/sopracciglia sono due scelte super pratiche quando vuoi vederti più curata senza fare mille cose.",
        "Se ti interessa anche il laser, lo integriamo con metodo (calendario e comfort): così non fai tutto insieme, e non ti perdi per strada.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Moncalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Come scegliere un trattamento viso in modo chiaro e sensato.",
        },
        {
          label: "Catalysis Ritual",
          href: "/protocolli/catalysis-ritual",
          description: "Protocollo reset per pelle opaca o disordinata: progressione, comfort e metodo.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Quando ha senso e come la facciamo in modo delicato.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Sguardo più ordinato con un effetto naturale (perfetta da abbinare).",
        },
        {
          label: "Beauty routine",
          href: "/competenze/beauty-routine-carmagnola",
          description: "Routine semplice per mantenere meglio i risultati tra una seduta e l'altra.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi e panoramica dei servizi disponibili in studio.",
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
        q: "Da Moncalieri: da cosa conviene partire?",
        a: "Dipende da obiettivo e tempi. Spesso il modo più semplice è iniziare con una lettura iniziale e scegliere una priorità (viso, corpo o laser) invece di fare tutto insieme.",
      },
      {
        q: "Posso vedere prezzi e servizi prima di prenotare?",
        a: "Sì: trovi il listino online. Se vuoi, poi traduciamo il listino in un percorso su misura in base alla tua situazione.",
      },
      {
        q: "Prenoto via WhatsApp?",
        a: "Sì: è il modo più rapido. Ti rispondiamo con consigli pratici e ti aiutiamo a scegliere l'appuntamento più comodo.",
      },
    ],
    keywords: [
      "centro estetico Moncalieri",
      "estetica epigenetica Moncalieri",
      "epilazione laser Moncalieri",
      "trattamenti viso Moncalieri",
    ],
  },
  {
    slug: "nichelino",
    city: "Nichelino",
    cluster: "torino-sud",
    title: "Centro estetico vicino Nichelino: laser e cura pelle, con metodo",
    description:
      "Da Nichelino a Carmagnola per epilazione laser e trattamenti mirati viso/corpo: valutazione iniziale, settaggio su misura e consigli pratici tra le sedute.",
    intro:
      "A volte il problema non è scegliere un trattamento: è riuscire a seguirlo. In Rebel impostiamo un piano ordinato, con appuntamenti realistici e poche regole pratiche tra una seduta e l'altra.",
    whyRebel: [
      "Valutazione iniziale e percorso costruito su pelle, zona e obiettivo",
      "Consigli pratici tra le sedute (così non vai a tentativi)",
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
        "Per questo insistiamo sulle basi: calendario coerente, parametri impostati con attenzione e una gestione pratica tra una seduta e l'altra. È lì che spesso si evitano gli errori più comuni.",
        "Se serve, integriamo anche trattamenti corpo molto semplici (come uno scrub impostato con buon senso) per aiutare la pelle a restare più uniforme e confortevole, senza esagerare.",
        "E se oltre al laser vuoi lavorare anche su qualità pelle (viso o corpo) con un passo più avanzato, i protocolli epigenetici sono la strada più ordinata: un esempio richiesto spesso quando si vuole rigenerazione progressiva è Rebel Cell Regeneration.",
        "Se invece vuoi restare sui classici, massaggio rilassante o linfodrenante possono essere un'ottima base: ti fanno stare meglio e si incastrano bene nel calendario.",
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
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Rebel Cell Regeneration",
          href: "/protocolli/rebel-cell-regeneration",
          description: "Protocollo intensivo viso/corpo richiesto spesso quando si cerca rigenerazione progressiva.",
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
          label: "Massaggio linfodrenante",
          href: "/servizi/massaggio-linfodrenante-carmagnola",
          description: "Per leggerezza e gonfiore, con un ritmo che riesci a tenere.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Per sciogliere tensione su schiena e spalle (50 minuti).",
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
        a: "In generale, durante un percorso laser si evita l'epilazione a strappo perché interferisce con il ciclo del pelo. Di solito si preferisce il rasoio e ti diciamo cosa fare in base alle zone.",
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
      "Calendario coerente e aggiustamenti quando serve (senza perdere il filo)",
      "Tecnologia Thory con manipolo Ice Polar per migliorare il comfort",
      "Consigli pratici su mantenimento e richiami",
    ],
    directions: {
      heading: "Come arrivare da Vinovo a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Vinovo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Vinovo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, in Viale Barbaroux 20 a Carmagnola.",
        "Se vuoi impostare bene gli appuntamenti fin dall'inizio (e non perderti per strada), scrivici su WhatsApp: ti aiutiamo a scegliere un ritmo realistico.",
      ],
    },
    focus: {
      heading: "Vinovo: laser con aspettative chiare (e mantenimento sensato)",
      paragraphs: [
        "Il laser è un percorso progressivo: il cambiamento si costruisce seduta dopo seduta. Per questo preferiamo parlare subito di calendario e tempi, invece di vendere certezze.",
        "Un altro punto spesso sottovalutato è il mantenimento. In molti casi servono richiami nel tempo: non è un fallimento, è parte di una gestione intelligente e realistica.",
        "La tecnologia conta (e Ice Polar aiuta il comfort), ma la differenza vera è il metodo: parametri su misura, monitoraggio e comunicazione chiara. Così sai sempre dove sei nel percorso e cosa aspettarti.",
        "Se nel frattempo vuoi lavorare anche sul viso, spesso la richiesta è molto concreta: sguardo stanco, gonfiore, segni più evidenti. Un protocollo richiesto spesso è Eye Genesis, pensato per la zona perioculare (e perfetto se vuoi un risultato curato senza stravolgere).",
        "E se vuoi inserire un classico che ti semplifica la vita, manicure semipermanente e laminazione sono due servizi \"puliti\": ti sistemano in fretta e si abbinano bene quando sei già in studio.",
        "Se arrivi da Vinovo e vuoi partire con una strategia pulita (zone + calendario + aspettative), scrivici: ti diciamo da quali zone conviene partire e come organizzare le prime sedute.",
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
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Eye Genesis",
          href: "/protocolli/eye-genesis",
          description: "Protocollo contorno occhi: focus su gonfiore, micro-segni e pelle più stanca.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta (e cosa chiedere in consulenza).",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un classico curato e ordinato, perfetto da abbinare.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Sguardo più ordinato con effetto naturale.",
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
        a: "Non succede \"un disastro\", ma il calendario perde continuità. Se capita, riorganizziamo il piano in modo sensato e ti diciamo come riprendere senza perdere il filo.",
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
    title: "Centro estetico vicino La Loggia: laser chiaro fin dalla prima seduta",
    description:
      "Da La Loggia a Carmagnola per l'epilazione laser: valutazione iniziale, parametri su misura e un percorso seguito con consigli pratici tra le sedute.",
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
        "Se in parallelo vuoi curare anche il viso (tono, luminosità, pelle più compatta), spesso consigliamo Rebel Lift Protocol: è uno dei protocolli epigenetici più richiesti quando si vuole un risultato progressivo e pulito. E se preferisci restare sui classici, una pulizia viso fatta bene è spesso il miglior punto di partenza: ti rimette la pelle in ordine e ti fa capire cosa serve davvero dopo.",
        "Se arrivi da La Loggia e vuoi iniziare con un percorso laser seguito dall'inizio, scrivici: ti diciamo da dove partire e come organizzare le prime sedute.",
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
          label: "Rebel Lift Protocol",
          href: "/protocolli/rebel-lift-protocol",
          description: "Protocollo viso orientato a tono e luminosità, con progressione ordinata e ritmo realistico.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un classico fatto bene: ordine, comfort e base giusta per il resto.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta (oltre al nome della tecnologia).",
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
        a: "Dipende da zona e risposta individuale. In genere il percorso è progressivo: ti spieghiamo cosa aspettarti nei giorni e nelle settimane successive e come gestire la pelle con pochi accorgimenti pratici.",
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
      "Da Trofarello ci raggiungono clienti che vogliono smettere di cambiare trattamento ogni mese: preferiscono un piano ordinato, con tempi realistici e una continuità che si riesce a tenere anche quando la settimana è piena.",
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
        "Se oltre al laser vuoi lavorare anche sul viso con un percorso avanzato, Rebirth 60+ è uno dei protocolli più richiesti quando la pelle è più secca, più sottile o semplicemente meno piena. Non è un \"trattamento una tantum\": è una progressione pensata per durare.",
        "E se vuoi restare sui servizi classici (che spesso fanno la differenza nella vita vera), manicure semipermanente e massaggio rilassante sono due scelte molto pratiche: esci curata, e non ti incastri in un calendario infinito.",
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
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e impostazione graduale, zona per zona.",
        },
        {
          label: "Rebirth 60+",
          href: "/protocolli/rebirth-60-plus",
          description: "Protocollo pensato per pelli mature: densità e nutrimento percepito con una progressione pulita.",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un classico curato, perfetto da abbinare quando sei già in studio.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "50 minuti su schiena e spalle, per staccare davvero.",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa cambia rispetto ad altre tecnologie (e cosa chiedere in consulenza).",
        },
        {
          label: "Laser viso: cosa sapere prima di iniziare",
          href: "/competenze/epilazione-laser-viso-carmagnola-guida-realistica",
          description: "Aspettative, tempi e attenzione alle zone più delicate del viso.",
        },
        {
          label: "Epilazione laser viso",
          href: "/servizi/epilazione-laser-viso-carmagnola",
          description: "Dettagli per zone viso, consigli pratici e FAQ rapide.",
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
        a: "Zona, obiettivo e calendario: in consulenza ti spieghiamo frequenza, aspettative e cosa fare prima/dopo la seduta, così il percorso resta semplice da seguire.",
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
    title: "Da Chieri a Rebel Carmagnola: estetica avanzata con metodo e routine semplice",
    description:
      "Da Chieri a Carmagnola per trattamenti viso/corpo e laser: un piano ordinato, con tempi realistici e progressione.",
    intro:
      "Da Chieri arrivano persone che vogliono smettere di inseguire la \"novità\" e preferiscono un piano semplice: poche cose, fatte bene, con continuità.",
    whyRebel: [
      "Lettura iniziale e obiettivo chiaro prima di iniziare",
      "Percorsi viso/corpo costruiti per essere seguiti davvero",
      "Tecnologie mirate solo quando aggiungono valore",
      "Comunicazione trasparente (prima, durante e dopo)",
    ],
    directions: {
      heading: "Come arrivare da Chieri a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Chieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Chieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi arrivare con un'idea più chiara del percorso (viso/corpo/laser), scrivici prima: ti diciamo da dove conviene partire.",
      ],
    },
    focus: {
      heading: "Chieri: estetica avanzata senza eccessi (e una routine che non ti stanca)",
      paragraphs: [
        "Quando cerchi estetica \"avanzata\", la trappola è pensare che debba essere tutto complicato. In realtà la qualità spesso è il contrario: scegliere poche cose, ma quelle giuste, e tenerle nel tempo.",
        "In Rebel puntiamo a costruire una routine minimale che regge: quello che fai in cabina dà direzione, quello che fai a casa consolida. Senza sovraccaricare la pelle e senza liste infinite.",
        "Se vuoi un protocollo epigenetico (quelli più richiesti quando si cerca tono e compattezza), Collagen Code è spesso la scelta giusta: lavora in progressione e si inserisce bene in un calendario realistico.",
        "E se vuoi restare sui classici, pulizia viso e manicure sono spesso il combo più semplice: ti rimette in ordine senza trasformare la routine in un lavoro.",
        "Se ti interessa anche il laser, lo impostiamo come un percorso (zone + calendario + comfort), così sai sempre a che punto sei e cosa aspettarti.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Chieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Estetica avanzata",
          href: "/competenze/estetica-avanzata-carmagnola",
          description: "Cosa significa davvero, in pratica, e come si costruisce un percorso.",
        },
        {
          label: "Collagen Code",
          href: "/protocolli/collagen-code",
          description: "Protocollo richiesto spesso quando si cerca tono e compattezza con una progressione realistica.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Quando ha senso e come la facciamo (senza stressare la pelle).",
        },
        {
          label: "Beauty routine",
          href: "/competenze/beauty-routine-carmagnola",
          description: "Routine semplice per mantenere meglio i risultati tra una seduta e l'altra.",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un risultato pulito, ordinato e curato anche da vicino.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e impostazione graduale.",
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
        q: "Da Chieri: posso iniziare anche se non so quale trattamento scegliere?",
        a: "Sì. Partiamo da una lettura iniziale e scegliamo una priorità: così il percorso è chiaro fin da subito e non diventa una sequenza casuale di sedute.",
      },
      {
        q: "Posso fare un percorso viso e, in parallelo, il laser?",
        a: "Spesso sì, ma lo organizziamo con criterio. La sequenza dipende da pelle, obiettivo e tempi: l'obiettivo è un piano semplice da seguire.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a scegliere l'appuntamento più comodo.",
      },
    ],
    keywords: [
      "centro estetico Chieri",
      "trattamenti viso Chieri",
      "epilazione laser Chieri",
      "estetica avanzata Chieri",
    ],
  },
  {
    slug: "orbassano",
    city: "Orbassano",
    cluster: "torino-sud",
    title: "Centro estetico vicino Orbassano: percorsi corpo e laser, con un calendario realistico",
    description:
      "Da Orbassano a Rebel Carmagnola: percorsi su misura per estetica avanzata, benessere ed epilazione laser.",
    intro:
      "Da Orbassano arrivano persone che vogliono ritrovare ordine: un percorso corpo fatto bene (leggerezza, comfort) o un laser impostato con criterio, senza fare mille tentativi.",
    whyRebel: [
      "Percorsi corpo e drenaggio impostati con obiettivo e calendario realistico",
      "Laser con metodo: parametri su misura e comfort (Ice Polar)",
      "Consigli pratici tra le sedute, senza liste infinite",
      "Supporto rapido su WhatsApp, prima e dopo",
    ],
    directions: {
      heading: "Come arrivare da Orbassano a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Orbassano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Orbassano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi partire con un piano ordinato (corpo o laser), scrivici su WhatsApp: ti orientiamo sul primo passo e sul ritmo più comodo.",
      ],
    },
    focus: {
      heading: "Orbassano: percorsi corpo che non ti complicano la settimana",
      paragraphs: [
        "Quando si parla di corpo, la cosa che fa la differenza è la costanza. Non serve un piano perfetto: serve un ritmo che riesci a seguire davvero, senza stress.",
        "In Rebel impostiamo il percorso in modo molto pratico: obiettivo (leggerezza, comfort, tono), scelta della manualità giusta e calendario realistico. Se serve, integriamo uno scrub o un drenaggio mirato con buon senso, senza eccessi.",
        "Se invece la tua priorità è il laser, lo gestiamo con lo stesso approccio: parametri su misura, comfort e cosa fare tra una seduta e l'altra.",
        "E se vuoi spostarti sull'estetica avanzata, i protocolli epigenetici sono perfetti quando cerchi risultati progressivi su viso o corpo: Rebel Cell Regeneration è uno di quelli che ci chiedono spesso quando l'obiettivo è rigenerazione e qualità cutanea, non la seduta \"forte\".",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Orbassano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Trattamenti corpo",
          href: "/competenze/trattamenti-corpo-carmagnola",
          description: "Come orientarti tra percorsi corpo, drenaggio e relax.",
        },
        {
          label: "Rebel Cell Regeneration",
          href: "/protocolli/rebel-cell-regeneration",
          description: "Protocollo intensivo viso/corpo: rigenerazione progressiva e percorso seguito nel tempo.",
        },
        {
          label: "Linfodrenante",
          href: "/servizi/massaggio-linfodrenante-carmagnola",
          description: "Massaggio drenante impostato con ritmo e monitoraggio.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Per sciogliere tensioni e staccare davvero (schiena, spalle, cervicale).",
        },
        {
          label: "Drenaggio corpo",
          href: "/competenze/drenaggio-corpo-carmagnola",
          description: "Guida rapida: aspettative, calendario e mantenimento.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
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
        q: "Da Orbassano: posso iniziare con un percorso corpo anche se ho poco tempo?",
        a: "Sì. Impostiamo un ritmo realistico e scegliamo una priorità: poche sedute coerenti valgono più di un piano perfetto che non riesci a seguire.",
      },
      {
        q: "Drenaggio e linfodrenante sono la stessa cosa?",
        a: "Non sempre. Il linfodrenante è spesso un approccio più specifico; in studio ti spieghiamo cosa ha più senso per il tuo obiettivo e per il periodo.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a organizzare il primo appuntamento.",
      },
    ],
    keywords: [
      "centro estetico Orbassano",
      "estetista Orbassano",
      "laser Orbassano",
      "massaggio drenante Orbassano",
    ],
  },
  {
    slug: "alba",
    city: "Alba",
    cluster: "cuneo",
    title: "Da Alba a Rebel Carmagnola: percorso laser e trattamenti in studio, organizzati bene",
    description:
      "Da Alba a Carmagnola: trattamenti viso/corpo ed epilazione laser in uno studio avanzato, con metodo e continuità.",
    intro:
      "Se arrivi da Alba, la cosa più utile è organizzare bene le sedute: calendario chiaro, priorità e (quando ha senso) più servizi nella stessa giornata per evitare viaggi inutili.",
    whyRebel: [
      "Percorso ordinato: obiettivo, calendario e consigli pratici tra le sedute",
      "Possibilità di organizzare servizi nella stessa giornata (quando ha senso)",
      "Laser con metodo e comfort (Ice Polar), senza promesse esagerate",
      "Contatto rapido su WhatsApp per gestire dubbi e appuntamenti",
    ],
    directions: {
      heading: "Come arrivare da Alba a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Alba&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Alba&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per una stima aggiornata di tempi e traffico, apri Google Maps: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi pianificare il percorso con calma (zone + calendario), scrivici su WhatsApp: ti aiutiamo a impostare le priorità prima di partire.",
      ],
    },
    focus: {
      heading: "Da Alba: come organizzare gli appuntamenti quando vieni da più lontano",
      paragraphs: [
        "Quando la distanza aumenta, l'organizzazione diventa parte della qualità. Per questo, con chi arriva da Alba, partiamo sempre da una cosa semplice: quali sono le priorità e quante sedute puoi gestire davvero.",
        "Se ha senso, possiamo concentrare alcuni servizi nella stessa giornata (ad esempio viso + mani, oppure una consulenza + prima seduta): così riduci gli spostamenti e il percorso resta sostenibile.",
        "Anche nel laser, la continuità conta: meglio un calendario chiaro e realistico che una sequenza di appuntamenti improvvisati.",
        "Se vuoi un passo più avanti sul viso, Collagen Code è uno dei protocolli epigenetici che ci chiedono spesso quando l'obiettivo è tono e compattezza in modo progressivo. Se invece vuoi restare sui classici, manicure e massaggio relax sono perfetti da abbinare quando sei già in studio.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Alba&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Come lavoriamo: valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Collagen Code",
          href: "/protocolli/collagen-code",
          description: "Protocollo viso richiesto spesso quando si cerca tono e compattezza: progressione pulita e chiara.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi e panoramica dei servizi in studio.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Guida pratica per scegliere bene il trattamento viso.",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un servizio perfetto da abbinare quando vuoi ottimizzare la giornata.",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Per staccare e sciogliere tensioni (schiena e spalle).",
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
        q: "Da Alba: posso fare più servizi nello stesso appuntamento?",
        a: "Spesso sì, se lo organizziamo bene. Decidiamo insieme priorità e tempi, così la giornata resta comoda e il percorso coerente.",
      },
      {
        q: "Quanto prima conviene prenotare se devo organizzarmi con gli spostamenti?",
        a: "Meglio scriverci con un po' di anticipo: così troviamo insieme gli slot più adatti e impostiamo un calendario realistico fin dall'inizio.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a organizzare il primo passo.",
      },
    ],
    keywords: [
      "centro estetico Alba",
      "estetista Alba trattamenti viso",
      "epilazione laser Alba",
      "laser Alba",
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
      "Da Bra arrivano clienti che vogliono un piano chiaro: laser impostato bene (zone + calendario) e percorsi viso/corpo senza perdere tempo in prove a caso.",
    whyRebel: [
      "Valutazione iniziale e percorso laser con aspettative chiare",
      "Comfort durante la seduta (Ice Polar) e settaggio su misura",
      "Percorsi viso/corpo organizzati per obiettivo reale",
      "Consigli pratici tra le sedute e supporto su WhatsApp",
    ],
    directions: {
      heading: "Come arrivare da Bra a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Bra&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Bra&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi capire da dove partire (laser, viso o corpo), scrivici prima: ti diciamo da dove conviene iniziare, senza fretta.",
      ],
    },
    focus: {
      heading: "Bra: laser e stagionalità, senza farsi bloccare dai dubbi",
      paragraphs: [
        "Una delle domande più comuni è: \"posso iniziare il laser anche se sto spesso all'aperto?\". La risposta non è un sì/no secco: dipende da esposizione solare, zona e come ti organizzi tra una seduta e l'altra.",
        "In Rebel impostiamo il percorso con chiarezza: calendario realistico, regole pratiche e attenzione al comfort. Ice Polar aiuta, ma la differenza vera è il metodo: settaggio su misura e monitoraggio.",
        "Se oltre al laser vuoi lavorare sul viso, spesso la richiesta è molto concreta: sguardo più riposato e pelle più \"in ordine\". Eye Genesis è uno dei protocolli epigenetici che ci chiedono spesso per la zona occhi (gonfiore, micro-segni, stanchezza).",
        "E se vuoi restare sui classici, laminazione e pulizia viso sono due step che funzionano sempre: ti fanno uscire curata senza trasformare il percorso in una maratona.",
        "Se arrivi da Bra, l'obiettivo è semplice: avere un piano ordinato che puoi seguire senza ansia e senza cambiare idea ogni mese.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Bra&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Eye Genesis",
          href: "/protocolli/eye-genesis",
          description: "Protocollo contorno occhi: focus su gonfiore, micro-segni e sguardo più riposato.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Sguardo più ordinato con effetto naturale.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Ordine e comfort quando la pelle è opaca o \"appesantita\".",
        },
        {
          label: "Laser diodo: differenze e criteri di scelta",
          href: "/competenze/laser-diodo-carmagnola",
          description: "Per capire cosa conta davvero nella scelta (oltre al nome della tecnologia).",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo e organizzazione del ciclo, con percorso su misura.",
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
        q: "Da Bra: posso iniziare il laser in qualsiasi periodo dell'anno?",
        a: "Spesso sì, ma va gestita l'esposizione solare in modo sensato. In consulenza ti spieghiamo come organizzare calendario e protezione, così il percorso resta semplice.",
      },
      {
        q: "Ice Polar significa che non sentirò nulla?",
        a: "Aiuta molto il comfort, ma la percezione varia da zona a zona e da persona a persona. In studio lavoriamo sempre in modo graduale e su misura.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e impostiamo il primo passo in modo chiaro.",
      },
    ],
    keywords: [
      "centro estetico Bra",
      "estetica avanzata Bra",
      "epilazione laser Bra",
      "laser Bra",
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
      "Da Savigliano arrivano persone che vogliono un laser impostato bene e una gestione più semplice della pelle tra una seduta e l'altra.",
    whyRebel: [
      "Laser con metodo: parametri su misura, calendario e controlli",
      "Consigli pratici tra le sedute (così eviti errori comuni)",
      "Comfort durante la seduta con Ice Polar",
      "Un solo studio per laser e percorsi viso/corpo",
    ],
    directions: {
      heading: "Come arrivare da Savigliano a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Savigliano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Savigliano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi partire con un piano ordinato (zone + calendario), scrivici su WhatsApp: ti diciamo da dove partire e come organizzare le prime sedute.",
      ],
    },
    focus: {
      heading: "Savigliano: pelle più tranquilla tra le sedute (e meno improvvisazione)",
      paragraphs: [
        "Un percorso laser fatto bene non riguarda solo la seduta: riguarda anche quello che fai tra una seduta e l'altra. È lì che spesso nascono i dubbi (e gli errori).",
        "In Rebel ti diamo consigli pratici: come gestire la pelle, cosa evitare e quando ha senso fare uno scrub delicato per mantenere comfort e uniformità.",
        "Se arrivi da Savigliano, l'obiettivo è costruire un percorso ordinato fin dall'inizio: meno improvvisazione, più continuità.",
        "Se vuoi aggiungere estetica avanzata, Rebel Cell Regeneration è uno dei protocolli epigenetici più richiesti quando l'obiettivo è rigenerazione progressiva (viso o corpo). Se invece vuoi restare sui classici, scrub corpo e massaggio rilassante sono spesso la coppia più semplice: pelle più uniforme e schiena più leggera, senza complicazioni.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Savigliano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Epilazione laser corpo",
          href: "/servizi/epilazione-laser-corpo-carmagnola",
          description: "Zone corpo, organizzazione del ciclo e FAQ rapide.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata bene.",
        },
        {
          label: "Rebel Cell Regeneration",
          href: "/protocolli/rebel-cell-regeneration",
          description: "Protocollo intensivo viso/corpo per rigenerazione progressiva e qualità cutanea più uniforme.",
        },
        {
          label: "Laser corpo: zone e tempi",
          href: "/competenze/epilazione-laser-corpo-carmagnola-zone-tempi",
          description: "Guida pratica su calendario e aspettative.",
        },
        {
          label: "Scrub corpo",
          href: "/servizi/scrub-corpo-carmagnola",
          description: "Esfoliazione controllata per pelle più uniforme (quando ha senso).",
        },
        {
          label: "Massaggio rilassante",
          href: "/servizi/massaggio-rilassante-carmagnola",
          description: "Per sciogliere tensioni e staccare (50 minuti).",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
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
        a: "In generale, durante un percorso laser si evita l'epilazione a strappo perché interferisce con il ciclo del pelo. Di solito si preferisce il rasoio e ti diciamo cosa fare in base alle zone.",
      },
      {
        q: "Quando iniziano a vedersi cambiamenti?",
        a: "Dipende da zona e risposta individuale. I cambiamenti sono progressivi: per questo contano costanza e calendario, non la singola seduta.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a organizzare il primo passo.",
      },
    ],
    keywords: [
      "centro estetico Savigliano",
      "estetista Savigliano",
      "laser Savigliano",
      "epilazione laser Savigliano",
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
      "Da Fossano ci scelgono persone che vogliono una cosa concreta: un piano ordinato, con tempi realistici, e una continuità che si riesce a mantenere anche con una vita piena.",
    whyRebel: [
      "Metodo personalizzato: obiettivo, calendario e progressione chiari",
      "Percorsi su misura (viso, corpo o laser) senza formule standard",
      "Supporto tra una seduta e l'altra, anche su WhatsApp",
      "Possibilità di pianificare bene gli appuntamenti se arrivi da fuori",
    ],
    directions: {
      heading: "Come arrivare da Fossano a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Fossano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Fossano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Per una stima aggiornata di tempi e traffico, apri Google Maps: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi impostare un percorso con calma (priorità + calendario), scrivici su WhatsApp: ti aiutiamo a decidere da dove partire.",
      ],
    },
    focus: {
      heading: "Fossano: impostare un piano 90 giorni (senza inseguire offerte e sedute random)",
      paragraphs: [
        "Quando si arriva da fuori, la cosa migliore è avere una direzione: cosa facciamo nei prossimi 2-3 mesi? Qual è la priorità? Con che ritmo riesci davvero a venire in studio?",
        "In Rebel impostiamo un piano semplice: scegliamo l'obiettivo principale (laser, viso o corpo) e costruiamo una progressione con controlli. Se serve, aggiungiamo un secondo servizio solo quando ha senso.",
        "Se l'obiettivo è viso e vuoi un percorso davvero avanzato, Rebirth 60+ è uno dei protocolli epigenetici più richiesti sulle pelli mature (densità, nutrimento, progressione). Se invece vuoi restare sui classici, pulizia viso e manicure semipermanente sono spesso le scelte più pratiche quando vuoi ottimizzare la giornata.",
        "Così il percorso resta chiaro, e tu non hai la sensazione di ripartire da zero ogni volta.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Fossano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Come scegliere un centro estetico",
          href: "/competenze/come-scegliere-centro-estetico-carmagnola",
          description: "Criteri pratici per scegliere bene, prima di prenotare.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Comfort durante la seduta e progressione impostata con criterio.",
        },
        {
          label: "Rebirth 60+",
          href: "/protocolli/rebirth-60-plus",
          description: "Protocollo dedicato alle pelli mature: densità, nutrimento e progressione seguita nel tempo.",
        },
        {
          label: "Trattamenti viso",
          href: "/competenze/trattamenti-viso-carmagnola",
          description: "Guida pratica per orientarti tra viso, luminosità e comfort.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un classico fatto bene: ordine, comfort e base giusta per il resto.",
        },
        {
          label: "Manicure semipermanente",
          href: "/servizi/manicure-semipermanente-carmagnola",
          description: "Un servizio veloce e curato da abbinare quando vieni da fuori.",
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
        q: "Da Fossano: posso iniziare anche con poche sedute al mese?",
        a: "Sì. L'importante è che il ritmo sia coerente e realistico. Costruiamo un piano che riesci a seguire davvero, senza stress.",
      },
      {
        q: "Meglio partire dal laser o dai trattamenti viso/corpo?",
        a: "Dipende dalla tua priorità. In consulenza scegliamo insieme l'obiettivo principale e impostiamo il percorso con chiarezza, evitando di fare tutto insieme a caso.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a organizzare il primo passo.",
      },
    ],
    keywords: [
      "centro estetico Fossano",
      "estetica epigenetica Fossano",
      "epilazione laser Fossano",
      "laser Fossano",
    ],
  },
  {
    slug: "saluzzo",
    city: "Saluzzo",
    cluster: "cuneo",
    title: "Centro estetico vicino Saluzzo: laser chiaro e percorsi seguiti nel tempo",
    description:
      "Da Saluzzo a Carmagnola per trattamenti estetici avanzati, percorsi epigenetici ed epilazione laser.",
    intro:
      "Da Saluzzo arrivano persone che vogliono chiarezza: capire cosa aspettarsi, come organizzare le sedute e come gestire la pelle tra un appuntamento e l'altro.",
    whyRebel: [
      "Percorso laser con metodo: parametri su misura e calendario coerente",
      "Comfort durante la seduta con Ice Polar e settaggio graduale",
      "Regole pratiche pre/post, senza ansia e senza eccessi",
      "Comunicazione trasparente e supporto dedicato su WhatsApp",
    ],
    directions: {
      heading: "Come arrivare da Saluzzo a Rebel (Carmagnola)",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Saluzzo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl:
        "https://www.google.com/maps?f=d&source=s_d&saddr=Saluzzo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
      paragraphs: [
        "Apri Google Maps e segui il percorso aggiornato in tempo reale: la destinazione è Rebel, Viale Barbaroux 20, Carmagnola.",
        "Se vuoi partire con aspettative chiare (zone + calendario), scrivici su WhatsApp: ti orientiamo sul primo passo senza fretta.",
      ],
    },
    focus: {
      heading: "Saluzzo: aspettative chiare fin dall'inizio (e un percorso che non ti confonde)",
      paragraphs: [
        "Quando inizi un percorso, soprattutto sul laser, la cosa più importante è sapere cosa aspettarti: progressione, tempi e gestione tra le sedute.",
        "In Rebel preferiamo spiegarti bene subito: cosa stiamo facendo, perché, e come si mantiene la pelle tranquilla. Ice Polar aiuta il comfort, ma la parte decisiva resta il metodo e il calendario coerente.",
        "Se oltre al laser vuoi lavorare sul viso in modo avanzato, Catalysis Ritual è uno dei protocolli epigenetici richiesti spesso quando la pelle è opaca, \"spessa\" o disordinata. Se invece vuoi restare sui classici, pulizia viso e laminazione sono due scelte semplici e molto efficaci per uscire curata (e capire subito da dove partire).",
        "Se arrivi da Saluzzo e vuoi un percorso seguito e leggibile, scrivici: ti diciamo da dove partire e come organizzare le prime sedute in modo comodo.",
      ],
      links: [
        {
          label: "Apri il percorso su Google Maps",
          href: "https://www.google.com/maps/dir/?api=1&origin=Saluzzo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
          external: true,
          description: "Navigazione aggiornata in tempo reale fino a Rebel Carmagnola.",
        },
        {
          label: "Laser a Carmagnola",
          href: "/epilazione-laser-carmagnola",
          description: "Valutazione iniziale, parametri su misura e calendario.",
        },
        {
          label: "Laser con Ice Polar",
          href: "/epilazione-laser-ice-polar-carmagnola",
          description: "Cosa cambia sul comfort durante la seduta, nella pratica.",
        },
        {
          label: "Catalysis Ritual",
          href: "/protocolli/catalysis-ritual",
          description: "Protocollo reset quando la pelle è opaca o disordinata: progressione, comfort e metodo.",
        },
        {
          label: "Pulizia viso",
          href: "/servizi/pulizia-viso-carmagnola",
          description: "Un classico fatto bene: ordine, comfort e base giusta per il resto.",
        },
        {
          label: "Laminazione ciglia e sopracciglia",
          href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
          description: "Sguardo più ordinato con un effetto naturale.",
        },
        {
          label: "Come scegliere un centro estetico",
          href: "/competenze/come-scegliere-centro-estetico-carmagnola",
          description: "Criteri pratici per scegliere bene, con domande concrete.",
        },
        {
          label: "Listino completo",
          href: "/listino-estetica-laser",
          description: "Prezzi e panoramica dei servizi disponibili in studio.",
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
        q: "Da Saluzzo: quante sedute servono per un risultato stabile?",
        a: "Dipende da zona, pelo e risposta individuale. In consulenza impostiamo un calendario realistico e lo monitoriamo seduta dopo seduta, con aggiustamenti quando serve.",
      },
      {
        q: "Se ho paura del fastidio posso comunque iniziare?",
        a: "Sì. Lavoriamo in modo graduale e su misura; Ice Polar aiuta il comfort durante la seduta e il settaggio viene adattato alla risposta della pelle.",
      },
      {
        q: "Come prenoto?",
        a: "Scrivici su WhatsApp: ti rispondiamo rapidamente e ti aiutiamo a organizzare il primo passo.",
      },
    ],
    keywords: [
      "centro estetico Saluzzo",
      "estetista Saluzzo",
      "laser Saluzzo",
      "epilazione laser Saluzzo",
    ],
  },
];

type LocalPagesValidation = {
  errors: string[];
  warnings: string[];
};

function validateLocalAreaPages(pages: LocalAreaPage[]): LocalPagesValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenSlugs = new Set<string>();
  const seenTitles = new Set<string>();

  for (const page of pages) {
    if (!page.slug || !page.city) warnings.push(`[${page.slug || "?"}] slug/city missing`);

    if (seenSlugs.has(page.slug)) errors.push(`Duplicate localita slug: ${page.slug}`);
    seenSlugs.add(page.slug);

    if (page.title) {
      if (seenTitles.has(page.title)) warnings.push(`[${page.slug}] duplicate title text`);
      seenTitles.add(page.title);
    }

    if ((page.intro || "").trim().length < 120) warnings.push(`[${page.slug}] intro looks too short`);
    if ((page.whyRebel || []).length < 3) warnings.push(`[${page.slug}] whyRebel should have >= 3 bullets`);

    if (page.directions) {
      if ((page.directions.paragraphs || []).length < 2)
        warnings.push(`[${page.slug}] directions paragraphs should have >= 2 items`);
      if (!page.directions.mapsUrl?.startsWith("https://"))
        warnings.push(`[${page.slug}] directions.mapsUrl should be https://...`);
    }

    if (page.focus) {
      if ((page.focus.paragraphs || []).length < 3)
        warnings.push(`[${page.slug}] focus paragraphs should have >= 3 items`);

      const links = page.focus.links ?? [];
      if (links.length < 4) warnings.push(`[${page.slug}] focus links should have >= 4 items`);

      const hrefs = links.map((l) => l.href);
      const hasContatti = hrefs.some((href) => href === "/contatti");
      const hasListino = hrefs.some((href) => href === "/listino-estetica-laser");
      const hasLaser = hrefs.some(
        (href) =>
          href.includes("/epilazione-laser") ||
          (href.startsWith("/servizi/") && href.includes("laser")),
      );
      const hasAdvanced = hrefs.some(
        (href) =>
          href === "/protocolli-epigenetici" ||
          href.startsWith("/protocolli/") ||
          href.includes("/competenze/estetica-avanzata"),
      );
      const hasClassic = hrefs.some(
        (href) =>
          href.startsWith("/servizi/") &&
          !href.includes("laser") &&
          !href.includes("epilazione-laser"),
      );

      if (!hasContatti) warnings.push(`[${page.slug}] focus links missing /contatti`);
      if (!hasListino) warnings.push(`[${page.slug}] focus links missing /listino-estetica-laser`);
      if (!hasLaser) warnings.push(`[${page.slug}] focus links missing a laser-related page`);
      if (!hasAdvanced) warnings.push(`[${page.slug}] focus links missing advanced/protocol link`);
      if (!hasClassic) warnings.push(`[${page.slug}] focus links missing a classic service link`);
    } else {
      warnings.push(`[${page.slug}] focus section missing`);
    }

    if ((page.faqs ?? []).length < 3) warnings.push(`[${page.slug}] faqs should have >= 3 items`);
  }

  return { errors, warnings };
}

const localPagesValidation = validateLocalAreaPages(localAreaPages);
if (localPagesValidation.errors.length > 0) {
  // Duplicated slugs or broken data should fail fast (routes/SEO will be wrong).
  throw new Error(
    `[local-pages] Invalid local area content:\n${localPagesValidation.errors.join("\n")}`,
  );
}

if (process.env.NODE_ENV !== "production" && localPagesValidation.warnings.length > 0) {
  // Warnings are intentionally non-blocking: we prefer shipping, but keep quality visible in dev.
  // eslint-disable-next-line no-console
  console.warn(
    `[local-pages] Quality warnings:\n${localPagesValidation.warnings.join("\n")}\n`,
  );
}

export function getLocalAreaBySlug(slug: string) {
  return localAreaPages.find((item) => item.slug === slug);
}

