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
  editorialSections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  sourceLinks?: Array<{
    label: string;
    url: string;
  }>;
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
      "Una pulizia viso fatta bene parte dall'osservazione della pelle e lavora per step: detersione, esfoliazione delicata, pulizia mirata e fase lenitiva. L'obiettivo non è stressare, ma lasciare la pelle più pulita, luminosa e comoda nei giorni successivi.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Pelle più pulita e uniforme, senza eccessi",
      "Migliora la grana e la luminosità quando la pelle è spenta",
      "Riduce la sensazione di pelle \"appesantita\" e poco confortevole",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare una pulizia viso?",
        a: "Spesso tra 4 e 6 settimane, ma la frequenza giusta dipende da pelle, stagione e routine a casa. Dopo la prima seduta ti diciamo un ritmo semplice da seguire.",
      },
      {
        q: "Dopo la pulizia viso avrò rossore?",
        a: "Può succedere un lieve rossore, soprattutto se la pelle è reattiva. Lavoriamo in modo graduale e chiudiamo sempre con una fase lenitiva per lasciare la pelle il più tranquilla possibile.",
      },
      {
        q: "Cosa conviene fare (e non fare) dopo la seduta?",
        a: "Ti diamo indicazioni semplici: detersione delicata, idratazione e protezione solare. In generale evitiamo di sovraccaricare la pelle con troppi attivi aggressivi nei giorni immediatamente successivi.",
      },
    ],
    keywords: [
      "pulizia viso Carmagnola",
      "trattamento viso pelle impura Carmagnola",
      "estetista viso Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "pulizia-viso-carmagnola-frequenza-benefici",
      "trattamenti-viso-carmagnola",
      "estetica-avanzata-carmagnola",
      "beauty-routine-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Pulizia viso: cosa facciamo davvero (senza aggressività)",
        paragraphs: [
          "Molte persone arrivano pensando che una pulizia viso \"efficace\" debba essere forte. In realtà, quando la pelle è stressata, l'aggressività non aiuta: aumenta rossori, sensibilità e instabilità.",
          "Da Rebel costruiamo la seduta per step: osservazione iniziale, detersione accurata, esfoliazione delicata e pulizia mirata dove serve. Poi chiudiamo con una fase lenitiva e riequilibrante, così la pelle resta più comoda anche nei giorni successivi.",
        ],
      },
      {
        heading: "Quando ha senso farla (e quando è meglio cambiare strategia)",
        paragraphs: [
          "Ha senso quando senti la pelle spessa, opaca, piena di micro-impurità o semplicemente \"fuori equilibrio\". Spesso è anche un ottimo punto di partenza se vuoi poi impostare un percorso viso più avanzato.",
          "Se invece la pelle è molto reattiva o in un periodo delicato, la strategia cambia: possiamo rendere la seduta più soft, oppure lavorare prima su barriera e comfort. L'obiettivo non è fare tutto oggi, ma fare la cosa giusta.",
        ],
      },
      {
        heading: "Frequenza e mantenimento: la parte che fa durare il risultato",
        paragraphs: [
          "La seduta in studio dà direzione, ma il mantenimento fa durare. Non servono dieci prodotti: servono pochi passaggi coerenti (detersione, idratazione, protezione).",
          "Dopo la prima pulizia viso ti proponiamo un ritmo semplice e sostenibile: così non rincorri la pelle, la accompagni.",
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
      "Esfoliazione corpo per pelle liscia, morbida e uniforme.",
    longDescription:
      "Lo scrub corpo è un'esfoliazione controllata: rimuove le cellule superficiali in eccesso e lascia la pelle più uniforme al tatto. In studio lo impostiamo in modo sensato (zone, pressione, prodotto e tempi) per evitare irritazioni e ottenere un risultato piacevole anche nei giorni successivi.",
    priceHint: "da EUR 49",
    category: "estetica-classica",
    benefits: [
      "Pelle più morbida e uniforme al tatto",
      "Riduce la sensazione di pelle ruvida e \"spessa\" su alcune zone",
      "Rende più semplice la routine corpo (idratazione e mantenimento)",
    ],
    faqs: [
      {
        q: "Lo scrub è adatto tutto l'anno?",
        a: "Sì, ma cambia il ritmo: in base a stagione, sole e sensibilità della pelle si adattano intensità e frequenza. In ogni caso, dopo una buona esfoliazione la protezione solare è una buona abitudine.",
      },
      {
        q: "Ogni quanto è consigliato?",
        a: "Spesso ogni 3-5 settimane, ma se la pelle è reattiva o molto secca possiamo distanziare. La regola è semplice: meglio costanza e delicatezza che esagerare una volta.",
      },
      {
        q: "Può aiutare con pelle ruvida e piccoli ispessimenti?",
        a: "Sì, soprattutto quando la ruvidità è legata allo strato superficiale. In studio valutiamo anche idratazione e routine, perché lo scrub da solo non sostituisce la continuità a casa.",
      },
      {
        q: "Dopo lo scrub corpo posso fare palestra o sauna?",
        a: "Dipende da come risponde la tua pelle. In genere, nelle prime ore è meglio evitare calore eccessivo e sfregamenti intensi; ti diamo indicazioni semplici in base alle zone trattate.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola",
      "esfoliazione corpo Carmagnola",
      "trattamento corpo levigante Carmagnola",
    ],
    relatedCompetenceSlugs: ["trattamenti-corpo-carmagnola", "beauty-routine-carmagnola"],
    editorialSections: [
      {
        heading: "Cosa fa davvero lo scrub (e cosa no)",
        paragraphs: [
          "Lo scrub lavora sulla superficie: aiuta a rimuovere cellule in eccesso e a rendere la pelle più uniforme al tatto. È uno di quei trattamenti che danno una sensazione immediata di pelle \"più pulita\" e più morbida.",
          "Non è un trattamento medico e non è una promessa miracolosa. La differenza la fa l'impostazione (quanto è delicato, su quali zone, con che frequenza) e la continuità nel tempo.",
        ],
      },
      {
        heading: "Come lo impostiamo in studio: zone, pressione, sensibilità",
        paragraphs: [
          "Non tutte le zone del corpo reagiscono allo stesso modo. Alcune aree sono più resistenti, altre più reattive. Per questo adattiamo pressione e manovre, e non inseguiamo mai l'effetto \"forte\" a tutti i costi.",
          "Se l'obiettivo è anche migliorare il comfort quotidiano (pelle che tira, ruvidità, sensazione di ispessimento), abbiniamo sempre una fase finale che lascia la pelle più calma e confortevole.",
        ],
      },
      {
        heading: "Frequenza: il risultato migliore arriva quando non si esagera",
        paragraphs: [
          "Esfoliare troppo spesso può rendere la pelle più sensibile e meno stabile. Il nostro approccio è l'opposto: poche sedute, distanziate bene, e mantenimento semplice.",
          "Dopo la prima seduta ti diciamo una frequenza realistica, che riesci a seguire senza trasformare la routine corpo in un lavoro.",
        ],
      },
      {
        heading: "Dopo la seduta: far durare la morbidezza",
        paragraphs: [
          "Il post è semplice: idratazione e protezione. Pochi gesti, ma coerenti. Se vuoi, ti suggeriamo anche come scegliere i prodotti in base a stagione e sensazione della pelle (secca, che tira, più spessa).",
          "L'obiettivo è far durare la sensazione di pelle uniforme, non viverla solo per un giorno.",
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
      "Massaggio drenante delicato per alleggerire e ritrovare leggerezza.",
    longDescription:
      "Il linfodrenante è un massaggio drenante delicato e progressivo: aiuta a ridurre la sensazione di gonfiore e pesantezza e a ritrovare una percezione più leggera del corpo (soprattutto su gambe e addome). In studio lo impostiamo con manualità graduali, ascolto e un piano coerente: l'obiettivo è farti stare meglio, senza esagerare e senza promesse.",
    priceHint: "da EUR 69",
    category: "estetica-classica",
    benefits: [
      "Aiuta a ridurre la sensazione di gonfiore e pesantezza",
      "Sensazione di leggerezza più stabile quando inserito con un ritmo coerente",
      "Supporta percorsi corpo con un piano personalizzato e sostenibile",
    ],
    faqs: [
      {
        q: "Il linfodrenante è doloroso?",
        a: "No: è una tecnica delicata e progressiva. La sensazione tipica è \"leggera\" e rilassante; se una manovra è troppo intensa la adattiamo subito.",
      },
      {
        q: "Quante sedute servono per vedere beneficio?",
        a: "Spesso la sensazione di leggerezza si percepisce già dalle prime sedute; poi il beneficio diventa più stabile quando c'è continuità e un ritmo sensato.",
      },
      {
        q: "Su quali zone lavorate di solito?",
        a: "Spesso su gambe e addome, ma adattiamo sempre le zone in base a come ti senti e a che tipo di obiettivo hai in mente.",
      },
      {
        q: "C'è qualcosa da fare dopo la seduta?",
        a: "Ti consigliamo indicazioni semplici: idratarti, muoverti con calma e non sovraccaricare subito il corpo con calore eccessivo o attività troppo intensa se ti senti già \"scarica\". Ti orientiamo in base alla tua giornata.",
      },
      {
        q: "Se ho una condizione specifica, posso farlo comunque?",
        a: "In questi casi preferiamo capire prima la situazione: scrivici e raccontaci in due righe. Se serve, ti chiediamo un parere medico prima di impostare la seduta.",
      },
    ],
    keywords: [
      "massaggio linfodrenante Carmagnola",
      "linfodrenaggio Carmagnola",
      "trattamento drenante Carmagnola",
      "gambe gonfie Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "trattamenti-corpo-carmagnola",
      "linfodrenante-carmagnola-guida-pratica",
    ],
    editorialSections: [
      {
        heading: "Linfodrenante: aspettative sane (e perché funziona meglio così)",
        paragraphs: [
          "Il linfodrenante può dare una sensazione di leggerezza concreta, ma non è una bacchetta magica. Il risultato migliore arriva quando il trattamento è impostato bene e inserito in un ritmo coerente.",
          "Noi preferiamo un approccio semplice e onesto: capire come stai, scegliere le zone giuste e costruire una continuità sostenibile. È così che la sensazione di benessere dura, invece di sparire dopo poche ore.",
        ],
      },
      {
        heading: "Come si svolge una seduta da Rebel",
        paragraphs: [
          "Prima di iniziare ti chiediamo cosa senti (gonfiore, pesantezza, tensione) e in quali momenti della giornata. Poi lavoriamo con manualità graduali: il comfort è parte del trattamento.",
          "Se una zona è più sensibile o se preferisci un ritmo diverso, lo adattiamo. Il linfodrenante non deve essere una prova di resistenza: deve lasciarti più leggera.",
        ],
      },
      {
        heading: "Quanto spesso farlo: il ritmo che riesci a seguire",
        paragraphs: [
          "C'è chi lo sceglie come seduta singola nei periodi più carichi, e chi preferisce una serie di sedute per dare continuità. La scelta dipende da tempo, obiettivo e risposta del corpo.",
          "La regola che usiamo è pratica: meglio poche sedute fatte con costanza e buon senso che un'intensità difficile da mantenere.",
        ],
      },
      {
        heading: "Piccoli gesti che aiutano tra una seduta e l'altra",
        paragraphs: [
          "Il drenaggio in studio è un pezzo del puzzle. Tra una seduta e l'altra, anche solo camminare un po' di più, idratarsi e non stare sempre ferma può aiutare la sensazione di leggerezza.",
          "Se vuoi, ti diamo indicazioni semplici (senza stravolgerti la routine) per far durare meglio l'effetto percepito.",
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
      "Un massaggio distensivo su schiena, spalle e cervicale, per staccare davvero e respirare.",
    longDescription:
      "Il massaggio rilassante è un momento dedicato a decomprimere e ritrovare leggerezza. Lavoriamo su schiena, spalle e zona cervicale con manovre graduali, adattate a sensibilità e bisogno del momento: l'obiettivo è farti uscire più sciolta e con la testa più leggera, non \"stravolgere\" il corpo.",
    priceHint: "EUR 59 (50 min)",
    category: "estetica-classica",
    benefits: [
      "Momento di vero stacco (senza fretta)",
      "Sensazione di distensione su schiena, spalle e cervicale",
      "Pressione e ritmo adattati a sensibilità e preferenze",
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
        a: "Dipende dal motivo e da quanto è recente/forte. In questi casi avvisaci prima: possiamo lavorare più delicatamente, evitare alcune zone o consigliarti di rimandare se non è il momento giusto.",
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
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Non è solo \"coccole\": è un reset semplice, fatto bene",
        paragraphs: [
          "Quando la testa corre e il corpo resta sempre in tensione, anche 50 minuti possono fare la differenza. Il massaggio rilassante serve a rallentare, respirare e sciogliere la sensazione di carico che spesso si accumula su schiena e spalle.",
          "Non cerchiamo la seduta \"forte\" a tutti i costi: puntiamo a un lavoro graduale, che rispetta la tua sensibilità e ti lascia una sensazione pulita e leggera.",
        ],
      },
      {
        heading: "Come si svolge una seduta (e perché chiediamo sempre feedback)",
        paragraphs: [
          "Prima di iniziare ti chiediamo due cose: dove senti più tensione e che tipo di pressione preferisci. Poi lavoriamo su schiena, spalle e cervicale con un ritmo che può cambiare durante la seduta.",
          "Il feedback è parte del metodo: se una manovra è troppo intensa o se vuoi un tocco più profondo, lo adattiamo. Il risultato migliore è quello che ti fa stare bene, non quello che \"resisti\".",
        ],
      },
      {
        heading: "Quanto spesso farlo: singola seduta o ritmo regolare",
        paragraphs: [
          "C'è chi lo fa ogni tanto, quando sente di averne bisogno. E c'è chi preferisce un ritmo più regolare, soprattutto nei periodi stressanti o quando la tensione torna sempre nelle stesse zone.",
          "La scelta dipende da tempo e obiettivo. La regola che consigliamo è semplice: meglio un ritmo che riesci a tenere che una corsa fatta una volta e poi dimenticata.",
        ],
      },
      {
        heading: "Piccoli accorgimenti dopo: far durare la sensazione di leggerezza",
        paragraphs: [
          "Dopo la seduta, l'ideale è bere acqua, evitare di ripartire subito in modalità \"tutto di corsa\" e ascoltare come risponde il corpo. Anche una passeggiata lenta può aiutare a mantenere la sensazione di distensione.",
          "Se vuoi, ti suggeriamo anche come integrare il massaggio dentro una routine più ampia di benessere (senza complicarti la vita).",
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
      "La laminazione è un trattamento pensato per valorizzare senza stravolgere: mette ordine a ciglia e sopracciglia, le rende più definite e \"facili\" da gestire. In studio la impostiamo in modo delicato e curato nei dettagli, con un risultato pulito e coerente con i tuoi lineamenti.",
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
        a: "Sì, semplice e rapida, con consigli dedicati.",
      },
      {
        q: "È adatta anche se ho ciglia/sopracciglia sottili?",
        a: "Spesso sì: l'obiettivo è valorizzare e ordinare, senza appesantire. In studio valutiamo insieme la situazione e scegliamo un'impostazione coerente.",
      },
      {
        q: "È un effetto molto evidente?",
        a: "Dipende da come lo vuoi. Il nostro stile è naturale e armonioso: preferiamo un risultato curato che ti somigli, non un cambiamento eccessivo.",
      },
      {
        q: "Cosa conviene evitare subito dopo?",
        a: "Ti spieghiamo cosa fare nelle prime ore per mantenere il risultato più stabile. In generale, meglio evitare sfregamenti e trattare la zona con delicatezza.",
      },
    ],
    keywords: [
      "laminazione ciglia Carmagnola",
      "laminazione sopracciglia Carmagnola",
      "ciglia naturali Carmagnola",
      "sopracciglia ordinate Carmagnola",
      "trattamento sguardo Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Laminazione: ordine e armonia, senza eccessi",
        paragraphs: [
          "La richiesta più comune è semplice: \"voglio lo sguardo più ordinato, ma senza sembrare diversa\". È esattamente l'idea della laminazione fatta bene: valorizzare e definire restando naturale.",
          "Per questo curiamo l'impostazione in base al tuo viso: non esiste un effetto identico per tutte. Il risultato migliore è quello che ti somiglia.",
        ],
      },
      {
        heading: "Ciglia e sopracciglia: cosa cambia quando ti prepari (anche senza trucco)",
        paragraphs: [
          "Quando ciglia e sopracciglia sono più disciplinate, cambia anche il modo in cui ti prepari: meno tempo, meno correzioni, una sensazione di ordine che resta anche senza trucco.",
          "È un trattamento ideale se vuoi un look curato e pulito, ma non ami l'effetto artificiale.",
        ],
      },
      {
        heading: "Durata e mantenimento: farlo restare bello più a lungo",
        paragraphs: [
          "La durata dipende da crescita naturale e abitudini. Dopo la seduta ti diciamo come trattare la zona nelle prime ore, così il risultato resta più stabile e confortevole.",
          "Se vuoi, ti consigliamo anche ogni quanto rifarla in base alla tua crescita e alle tue abitudini.",
        ],
      },
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola",
    name: "Manicure semipermanente a Carmagnola",
    shortDescription:
      "Manicure semipermanente curata e ordinata, con un risultato pulito che dura.",
    longDescription:
      "La manicure semipermanente è un servizio di precisione: preparazione accurata, rifinitura pulita e applicazione colore con attenzione ai dettagli. L'obiettivo non è solo \"durare\": è avere un risultato ordinato, elegante e confortevole, che ti piaccia anche da vicino.",
    priceHint: "da EUR 26",
    category: "estetica-classica",
    benefits: [
      "Aspetto ordinato e curato per più tempo",
      "Smalto più stabile rispetto allo smalto classico",
      "Colori e stile personalizzabili senza appesantire la mano",
    ],
    faqs: [
      {
        q: "Il semipermanente rovina l'unghia?",
        a: "Non dovrebbe, se applicazione e rimozione sono fatte in modo corretto. Il punto è evitare strappi, limature aggressive e rimozioni \"fai da te\" improvvisate.",
      },
      {
        q: "Ogni quanto è consigliato rifarlo?",
        a: "Spesso ogni 2-3 settimane, ma dipende da ricrescita e da quanto usi le mani (lavoro, casa, sport). In studio ti consigliamo una frequenza che tenga il risultato ordinato e l'unghia in forma.",
      },
      {
        q: "Posso scegliere un effetto molto naturale?",
        a: "Sì. Se ti piace un look pulito e discreto, possiamo orientarti su colori e finiture che valorizzano senza essere troppo evidenti.",
      },
      {
        q: "Cosa conviene evitare per farlo durare meglio?",
        a: "Piccole cose: non usare le unghie come \"attrezzi\", idratare mani e cuticole e proteggere le mani quando fai lavori domestici. Ti diamo indicazioni semplici, non una lista infinita di regole.",
      },
    ],
    keywords: [
      "manicure semipermanente Carmagnola",
      "centro unghie Carmagnola",
      "semipermanente Carmagnola prezzi",
      "manicure Carmagnola",
      "semipermanente naturale Carmagnola",
    ],
    relatedCompetenceSlugs: ["beauty-routine-carmagnola", "trattamenti-viso-carmagnola"],
    editorialSections: [
      {
        heading: "È un dettaglio, ma cambia tutto: mani curate \"da vicino\"",
        paragraphs: [
          "La manicure semipermanente non è solo colore: è ordine. È quel tipo di cura che ti fa sentire a posto anche nei giorni pieni, senza dover ripassare lo smalto ogni due giorni.",
          "Per noi il punto è la pulizia del risultato: cuticole curate, bordi ordinati, finitura bella anche a distanza ravvicinata.",
        ],
      },
      {
        heading: "Durata: cosa influisce davvero",
        paragraphs: [
          "La durata cambia molto in base a quanto usi le mani: lavoro, sport, casa, detergenti. Anche lo stile conta: alcune finiture sono più \"delicate\" di altre.",
          "In studio ti consigliamo una soluzione sensata per la tua routine, non quella più complicata.",
        ],
      },
      {
        heading: "Rimozione e rispetto dell'unghia: la parte che protegge nel tempo",
        paragraphs: [
          "Molti danni attribuiti al semipermanente dipendono da rimozioni scorrette o troppo aggressive. La rimozione va fatta con criterio, senza strappare e senza assottigliare inutilmente.",
          "Se vuoi alternare periodi con e senza semipermanente, possiamo organizzarlo in modo che l'unghia resti bella e stabile.",
        ],
      },
      {
        heading: "Se vuoi un effetto naturale, si può (e viene benissimo)",
        paragraphs: [
          "Un effetto naturale non significa \"anonimo\": significa mani curate, pulite, armoniose. Possiamo scegliere insieme colore e finitura per valorizzare la tua mano senza eccessi.",
          "È una scelta perfetta se vuoi un look ordinato anche senza trucco o se ti piace l'eleganza semplice.",
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
    slug: "epilazione-laser-viso-carmagnola",
    name: "Epilazione laser viso a Carmagnola",
    shortDescription:
      "Laser viso (baffetti, mento e altre zone) con percorso su misura e comfort Ice Polar.",
    longDescription:
      "L'epilazione laser viso da Rebel è pensata per chi vuole mettere ordine nella ricrescita su zone delicate. Impostiamo parametri e calendario in base a fototipo, zona e obiettivo, con manipolo Ice Polar per un comfort migliore. Tra una seduta e l'altra ti lasciamo poche regole pratiche per tenere la pelle tranquilla.",
    priceHint: "da EUR 25.90 per zona",
    category: "laser",
    benefits: [
      "Ricrescita progressivamente più gestibile nel tempo",
      "Approccio delicato e graduale su una zona sensibile",
      "Percorso seguito, con consigli pratici tra una seduta e l'altra",
      "Comfort migliorato con Ice Polar e settaggio su misura",
    ],
    faqs: [
      {
        q: "Il laser viso è adatto alle pelli sensibili?",
        a: "Spesso sì, ma dipende dalla tua pelle oggi e dalla zona. Facciamo sempre una valutazione iniziale e impostiamo in modo graduale, adattando intensità e calendario alla risposta cutanea.",
      },
      {
        q: "Devo radermi prima della seduta?",
        a: "Di solito sì: il rasoio è la scelta più semplice prima del laser. In fase di prenotazione ti diamo indicazioni pratiche su tempistiche e cosa evitare.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o pinzetta?",
        a: "In generale, durante un percorso laser si evita l'epilazione a strappo perché interferisce con il ciclo del pelo. Per mantenere ordine tra le sedute, di solito si usa il rasoio e si seguono indicazioni mirate per la zona viso.",
      },
      {
        q: "Quando iniziano a vedersi cambiamenti?",
        a: "I cambiamenti sono progressivi e dipendono da zona e risposta individuale. In studio preferiamo darti aspettative chiare (seduta dopo seduta) piuttosto che promesse veloci.",
      },
    ],
    keywords: [
      "epilazione laser viso Carmagnola",
      "laser viso Carmagnola",
      "epilazione baffetti Carmagnola",
      "epilazione mento Carmagnola",
      "laser basette Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-viso-carmagnola-guida-realistica",
    ],
    editorialSections: [
      {
        heading: "Zone viso: come scegliamo la priorità (senza fare tutto insieme a caso)",
        paragraphs: [
          "Sul viso la differenza la fa l'ordine: scegliamo prima la zona che ti dà più fastidio nella quotidianità e impostiamo un piano che riesci a portare avanti.",
          "Se vuoi trattare più aree (ad esempio baffetti e mento), lo decidiamo insieme in base a sensibilità cutanea, obiettivo e tollerabilità: meglio un piano chiaro che mille tentativi.",
        ],
      },
      {
        heading: "Comfort: Ice Polar come aiuto, settaggio graduale come metodo",
        paragraphs: [
          "Il viso è una zona delicata e la percezione può cambiare molto da persona a persona. Ice Polar aiuta a rendere la seduta più confortevole, soprattutto su aree più sensibili.",
          "La parte più importante, però, resta il settaggio: lavoriamo in modo graduale, così la pelle resta più tranquilla e il percorso è più facile da portare avanti.",
        ],
      },
      {
        heading: "Preparazione e post-seduta: poche regole, ma fatte bene",
        paragraphs: [
          "Prima della seduta ti diciamo cosa fare (e cosa evitare), così arrivi preparata senza ansia. Dopo, l'obiettivo è tenere la pelle confortevole: niente eccessi, niente esperimenti, solo accorgimenti pratici.",
          "Se hai dubbi tra una seduta e l'altra, ci scrivi: preferiamo una domanda in più a una gestione improvvisata.",
        ],
      },
      {
        heading: "Calendario: perché la costanza conta più della singola seduta",
        paragraphs: [
          "Il laser è un percorso: per questo il calendario viene impostato e poi adattato in base alla risposta della pelle e alla progressione della ricrescita.",
          "Saltare spesso o cambiare ritmo ogni mese rende più difficile leggere i risultati. Noi puntiamo a un calendario coerente, che riesci a tenere.",
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
      "Laser corpo su aree singole o multiple, con piano sedute organizzato e comfort Ice Polar.",
    longDescription:
      "Il laser corpo da Rebel si pianifica sulle zone che vuoi trattare, mettendo in fila priorità, calendario e controlli. Usiamo Thory con manipolo Ice Polar per migliorare il comfort durante la seduta e lavoriamo con settaggio su misura. Tra una seduta e l'altra ti lasciamo regole pratiche per non irritare la pelle.",
    priceHint: "da EUR 25.90 a 103.60",
    category: "laser",
    benefits: [
      "Riduzione progressiva della ricrescita con percorso seguito",
      "Organizzazione sensata: zone, calendario e priorità chiare",
      "Comfort migliorato durante la seduta con Ice Polar",
      "Indicazioni pratiche pre/post per una pelle più tranquilla",
    ],
    faqs: [
      {
        q: "Il laser corpo è doloroso?",
        a: "Dipende da zona e sensibilità personale. In studio lavoriamo sempre in modo graduale e su misura; Ice Polar aiuta a migliorare il comfort durante la seduta.",
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
        a: "Spesso sì, ma con timing e delicatezza. Ti indichiamo quando è ok farlo e quando invece è meglio aspettare, così la pelle resta confortevole e non si irrita inutilmente.",
      },
    ],
    keywords: [
      "epilazione laser corpo Carmagnola",
      "laser corpo Carmagnola",
      "epilazione laser ascelle Carmagnola",
      "epilazione laser inguine Carmagnola",
      "epilazione laser gambe Carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
    ],
    editorialSections: [
      {
        heading: "Zone corpo: come organizziamo il ciclo (una zona alla volta o più zone)",
        paragraphs: [
          "Sul corpo la domanda più comune è: meglio fare tante zone insieme o partire da una? Non esiste una regola unica: dipende da obiettivo, tempo e tollerabilità.",
          "Noi preferiamo una strategia pulita: priorità chiare, calendario realistico e controlli regolari. Così il percorso resta gestibile e non diventa un puzzle.",
        ],
      },
      {
        heading: "Calendario e stagioni: il percorso funziona quando è coerente",
        paragraphs: [
          "Il laser non è una singola seduta: è una sequenza. Per questo il calendario viene impostato e poi adattato in base alla risposta della pelle e alla progressione della ricrescita.",
          "Se cambia la stagione o il tuo ritmo di vita, non si \"butta\" tutto: si ritarano le sedute in modo sensato, mantenendo continuità.",
        ],
      },
      {
        heading: "Preparazione e post-seduta: indicazioni pratiche, senza liste infinite",
        paragraphs: [
          "Prima della seduta ti diciamo cosa fare e cosa evitare. Dopo, puntiamo a una pelle tranquilla: poche regole, protezione e niente esperimenti aggressivi nei giorni immediatamente successivi.",
          "Se hai dubbi su sport, doccia, prodotti o routine, ci scrivi: meglio una gestione ordinata che una gestione \"a tentativi\".",
        ],
      },
      {
        heading: "Comfort: Ice Polar aiuta, ma la vera differenza è il settaggio su misura",
        paragraphs: [
          "Ice Polar migliora il comfort durante la seduta, ma la parte più importante è sempre come viene impostato il trattamento: parametri, zona, risposta della pelle e progressione.",
          "Lavoriamo con attenzione e gradualità: così il corpo si adatta meglio, e tu riesci a seguire il percorso con più serenità.",
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
        a: "Metodo chiaro, comunicazione trasparente, obiettivi concreti e continuità nel tempo. Se ti spiegano cosa fanno e perché, senza promesse esagerate, sei già su una buona strada.",
      },
      {
        q: "Cosa conviene chiedere durante la prima consulenza?",
        a: "Chiedi come viene impostato il percorso, cosa succede tra le sedute, come si gestisce il post-trattamento e come si adatta il piano se la risposta della pelle cambia. Sono domande semplici, ma fanno emergere subito quanto un centro è organizzato.",
      },
      {
        q: "Il prezzo più basso è sempre la scelta migliore?",
        a: "Non sempre. A parità di servizio, conta molto la qualità dell'esecuzione, la chiarezza delle indicazioni e la continuità del percorso. Un prezzo più basso può diventare più caro se ti costringe a ripartire da zero ogni volta.",
      },
      {
        q: "Come capisco se un percorso è davvero \"su misura\"?",
        a: "Quando non ti propongono una formula identica per tutti. Un percorso su misura parte da una lettura iniziale, definisce priorità e ritmo, e viene aggiustato nel tempo in base alla risposta reale.",
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
    editorialSections: [
      {
        heading: "Prima di scegliere: chiarisci obiettivo e priorità (non il nome del trattamento)",
        paragraphs: [
          "La domanda più utile non è \"che trattamento fate?\", ma \"cosa voglio ottenere e in che tempi?\". Luminosità, comfort della pelle, gestione della ricrescita, mani ordinate: sono obiettivi diversi e richiedono strade diverse.",
          "Quando un centro ti aiuta a chiarire priorità e ritmo, la scelta diventa più semplice e anche il percorso è più sostenibile.",
        ],
      },
      {
        heading: "Le domande che cambiano la decisione (anche con un messaggio su WhatsApp)",
        paragraphs: [
          "Chiedi chi imposta il protocollo, come vengono date le indicazioni post-trattamento e cosa succede se devi spostare una seduta. Un centro serio risponde con chiarezza e ti fa capire il perché delle scelte.",
          "Se invece la risposta è vaga o solo commerciale, spesso significa che anche il percorso sarà poco chiaro. La chiarezza, in estetica, è parte della qualità.",
        ],
      },
      {
        heading: "Prezzi e trasparenza: cosa dovrebbe essere chiaro fin dall'inizio",
        paragraphs: [
          "Non serve una lista infinita, ma serve capire cosa include il servizio, come si organizza il calendario e quali sono le variabili (zona, frequenza, mantenimento).",
          "Diffida delle promesse \"tutto e subito\": meglio un prezzo chiaro e un percorso realistico che un'offerta che cambia ogni settimana.",
        ],
      },
      {
        heading: "Tecnologia e parole nuove: quando aiutano davvero (e quando distraggono)",
        paragraphs: [
          "Tecnologia e attivi possono essere un grande aiuto, ma solo se inseriti con criterio. La domanda giusta è: \"cosa migliora davvero per me?\".",
          "Un centro affidabile non ti riempie di termini: ti spiega cosa fa, come lo fa, e cosa puoi aspettarti in modo umano e comprensibile.",
        ],
      },
      {
        heading: "Il consiglio più semplice: scegli un centro che ti fa capire, non un centro che ti confonde",
        paragraphs: [
          "Se dopo la consulenza esci più serena e con un piano in testa (anche minimale), probabilmente hai trovato l'approccio giusto.",
          "Se vuoi, puoi partire anche con un singolo servizio (ad esempio una pulizia viso o una valutazione laser) e poi decidere con calma il resto.",
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
        a: "La differenza è nella personalizzazione e nella logica di percorso: priorità chiare, progressione e mantenimento, invece di sedute scollegate tra loro.",
      },
      {
        q: "Serve sempre tecnologia?",
        a: "No. La tecnologia viene inserita solo quando aggiunge valore reale. A volte la scelta migliore è una manualità fatta bene, con attivi coerenti e un calendario sostenibile.",
      },
      {
        q: "Da cosa si parte se non so cosa scegliere?",
        a: "Dalla lettura iniziale: pelle, obiettivo, tempi e abitudini. Poi costruiamo una proposta semplice (anche minima), così sai subito cosa fare e cosa aspettarti.",
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
    editorialSections: [
      {
        heading: "Estetica avanzata: non è \"più forte\", è più precisa",
        paragraphs: [
          "Per noi avanzata significa precisione: capire cosa serve davvero, evitare eccessi e lavorare con una progressione sensata. Non è un trattamento \"standard\" uguale per tutti.",
          "La qualità si vede quando il percorso è chiaro da spiegare e facile da seguire: poche cose fatte bene, con continuità.",
        ],
      },
      {
        heading: "Manualità, attivi e tecnologia: come decidiamo cosa usare",
        paragraphs: [
          "La tecnologia può aiutare, ma non è un fine. Prima guardiamo pelle, obiettivo e tempi; poi scegliamo gli strumenti che migliorano davvero il risultato.",
          "Se una scelta non aggiunge valore, non la facciamo. Questo ti evita sedute inutili e ti dà un piano più pulito.",
        ],
      },
      {
        heading: "Percorso: ritmo, controllo e mantenimento (la parte che fa durare)",
        paragraphs: [
          "Un buon percorso non è quello più complesso: è quello che riesci a portare avanti. Per questo parliamo sempre di ritmo e mantenimento, oltre alla seduta singola.",
          "Quando serve, aggiustiamo: la pelle cambia con stagione, stress e abitudini. Un metodo serio si adatta, senza ricominciare ogni volta.",
        ],
      },
      {
        heading: "Quando iniziare: il momento giusto è quando puoi essere costante",
        paragraphs: [
          "Non serve partire \"perfetta\": serve partire con calma e con un piano realistico. Anche un solo appuntamento al mese può avere senso, se è coerente e ben impostato.",
          "Se vuoi orientarti subito, puoi iniziare da un servizio base (come la pulizia viso) oppure da una consulenza: da lì costruiamo la progressione.",
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
    slug: "epilazione-laser-carmagnola",
    title: "Epilazione laser a Carmagnola: come funziona e da dove partire",
    shortDescription:
      "Chiarimenti su sedute, tempi e aspettative: cosa aspettarti davvero dal laser.",
    longDescription:
      "Qui trovi come lavoriamo sul laser da Rebel: prima valutazione, poi settaggio su misura e un calendario pensato per te.",
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
    editorialSections: [
      {
        heading: "Prima consulenza: la parte più importante del percorso",
        paragraphs: [
          "Quando una persona ci contatta per il laser, spesso chiede subito: \"quante sedute servono?\". È una domanda normale, ma la risposta migliore arriva dopo una valutazione: zona, pelle, tipo di pelo e abitudini contano davvero.",
          "In studio impostiamo parametri e calendario e ti diciamo cosa stiamo facendo e perché. Così sai cosa aspettarti tra una seduta e l'altra, senza ansia.",
        ],
      },
      {
        heading: "Calendario e costanza: perché non è una corsa",
        paragraphs: [
          "Il laser lavora meglio quando le sedute hanno un ritmo coerente. Saltare spesso o cambiare piano di continuo non aiuta: ti fa perdere il filo e rende più difficile capire come sta andando.",
          "Per questo preferiamo un approccio semplice: poche regole chiare, controlli regolari e piccoli aggiustamenti quando la pelle o la risposta cambiano.",
        ],
      },
      {
        heading: "Comfort durante la seduta: Ice Polar come aiuto pratico",
        paragraphs: [
          "Molte persone temono il fastidio, soprattutto su alcune zone. In Rebel usiamo anche il manipolo Ice Polar per migliorare il comfort durante la seduta.",
          "È un aiuto concreto all'esperienza, ma non sostituisce il metodo: la differenza vera resta nel settaggio corretto e nel percorso seguito nel tempo.",
        ],
      },
      {
        heading: "Cosa chiedere a un centro prima di iniziare",
        paragraphs: [
          "Domande semplici, ma decisive: chi imposta i parametri, come si gestisce il post-seduta, come si adatta il piano se la pelle reagisce in modo diverso, e cosa ti dicono di fare tra un appuntamento e l'altro.",
          "Un centro serio ti risponde con chiarezza, senza promesse esagerate. La trasparenza è già parte del risultato.",
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
        heading: "Prima chiarezza: \"laser diodo\" non è una parola magica, è una tecnologia",
        paragraphs: [
          "Quando si cerca \"laser diodo\" online, spesso si trovano promesse veloci e confronti aggressivi. In realtà la domanda utile è un'altra: questa tecnologia è adatta al mio tipo di pelo e alla mia pelle, e viene gestita in modo competente?",
          "Il laser per epilazione lavora in modo selettivo sul pelo (non su \"tutta la pelle\"): proprio per questo parametri, protocollo e calendario contano più della sola etichetta commerciale.",
        ],
      },
      {
        heading: "Laser diodo vs luce pulsata (IPL): cosa cambia in pratica",
        paragraphs: [
          "La luce pulsata (IPL) è una luce a spettro più ampio; il laser usa una luce più specifica. Tradotto: sono strumenti diversi, con logiche diverse, e non sempre offrono la stessa esperienza o gli stessi criteri di impostazione.",
          "Il punto non è trovare \"il migliore\" in assoluto: è scegliere la soluzione più sensata per fototipo, colore del pelo, zona e obiettivo (riduzione progressiva e gestione della ricrescita nel tempo).",
        ],
      },
      {
        heading: "Perché servono più sedute (e perché la costanza è parte del risultato)",
        paragraphs: [
          "Molte persone partono con un'aspettativa sbagliata: pensano che basti una seduta \"forte\". In realtà il percorso è fatto di appuntamenti distanziati per accompagnare i cicli del pelo e lavorare in modo progressivo.",
          "Un centro serio ti spiega tempi e variabilità senza venderti certezze: la risposta cambia da persona a persona, e anche la stessa persona può rispondere in modo diverso tra viso e corpo.",
        ],
      },
      {
        heading: "Come riconoscere un centro affidabile a Carmagnola (prima di iniziare)",
        paragraphs: [
          "Fai domande semplici: chi imposta i parametri, come viene gestito il post-seduta, come si adatta il piano se la pelle cambia, e cosa succede se salti una seduta.",
          "Se prima ti rispondono senza giri di parole, di solito lo fanno anche dopo. Nel laser fa la differenza: ti aiuta a tenere il calendario e a gestire bene la pelle tra una seduta e l'altra, senza ansia.",
        ],
      },
      {
        heading: "Il nostro approccio in studio: tecnologia + metodo (non trattamenti standard)",
        paragraphs: [
          "Da Rebel a Carmagnola impostiamo l'epilazione laser come un percorso: valutazione iniziale, settaggio su misura e monitoraggio. La tecnologia serve a rendere il lavoro più preciso, ma il cuore resta il metodo.",
          "Se vuoi andare più nel dettaglio, trovi anche le guide su laser viso e laser corpo, oltre alle schede servizio con FAQ pratiche per partire senza dubbi.",
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
      "Trattamenti viso su luminosità, grana della pelle e comfort, con percorso su misura.",
    longDescription:
      "Una guida pratica per scegliere il trattamento viso giusto partendo dalla pelle di oggi (non dalla moda del momento). In Rebel lavoriamo per step: lettura iniziale, trattamento mirato e indicazioni semplici per mantenere il risultato anche a casa.",
    localAngle:
      "Utile se cerchi a Carmagnola un trattamento viso fatto bene e vuoi capire da dove partire.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a capire da dove partire (pulizia, luminosità, comfort, routine)",
      "Ti aiuta a impostare una progressione sensata, senza fare tentativi a caso",
      "Migliora coerenza tra obiettivo, sedute in studio e mantenimento a casa",
    ],
    faqs: [
      {
        q: "Da cosa si parte se ho la pelle spenta o opaca?",
        a: "Di solito partiamo da una lettura iniziale e da un trattamento che riporti comfort e luminosità senza stressare. Spesso la differenza non è fare \"di più\": è fare la cosa giusta con un ritmo sensato.",
      },
      {
        q: "La pulizia viso è sempre il primo passo?",
        a: "Non sempre. Per molte persone è un ottimo inizio, ma se la pelle è molto reattiva o in un momento delicato possiamo impostare una seduta più soft e lavorare prima su comfort e barriera.",
      },
      {
        q: "Ogni quanto conviene fare un trattamento viso?",
        a: "Spesso tra 4 e 6 settimane, ma il ritmo giusto dipende da pelle, stagione e obiettivo. In studio lo rendiamo semplice: ti diciamo una frequenza sostenibile, non una tabella impossibile.",
      },
      {
        q: "Cosa posso fare a casa per far durare di più il risultato?",
        a: "Pochi passaggi coerenti: detersione delicata, idratazione e protezione. Se serve, aggiungiamo uno o due attivi mirati (senza sovraccaricare).",
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
    editorialSections: [
      {
        heading: "Prima lettura: pelle di oggi, non pelle \"di sempre\"",
        paragraphs: [
          "Spesso ci si descrive con un'etichetta (pelle grassa, pelle secca), ma la pelle cambia: stagione, stress, sonno e routine fanno tantissimo. Per questo partiamo sempre da come sta la pelle oggi.",
          "Da lì scegliamo un trattamento mirato e un calendario che puoi tenere, così il risultato non è solo \"bello in giornata\": diventa più stabile nel tempo.",
        ],
      },
      {
        heading: "Pulizia viso: quando è la scelta più sensata",
        paragraphs: [
          "La pulizia viso non è aggressività: è ordine. Ha senso quando senti pelle appesantita, opaca, piena di micro-impurità o semplicemente fuori equilibrio.",
          "Se la pelle è reattiva, cambiamo strategia: lavoriamo in modo più delicato e chiudiamo sempre con una fase lenitiva. L'obiettivo è comfort, non stress.",
        ],
      },
      {
        heading: "Luminosità e grana della pelle: progressione, non trattamenti \"random\"",
        paragraphs: [
          "Se cerchi luminosità e una grana più uniforme, la chiave è la progressione: trattamenti mirati, distanziati correttamente, e mantenimento a casa con pochi passaggi coerenti.",
          "La cosa che rovina tutto è cambiare continuamente: prodotti, attivi, sedute. Noi preferiamo una strada pulita che puoi seguire davvero.",
        ],
      },
      {
        heading: "Frequenza: perché 4-6 settimane è spesso un buon ritmo (ma non per tutti)",
        paragraphs: [
          "Molto spesso un ritmo tra 4 e 6 settimane funziona bene perché rispetta i tempi della pelle e non ti sballa la routine. Ma è un punto di partenza, non una regola rigida.",
          "In studio adattiamo: se la pelle è sensibile rallentiamo; se serve continuità, impostiamo un calendario semplice e lo monitoriamo.",
        ],
      },
      {
        heading: "Routine a casa: pochi passaggi, ma fatti bene",
        paragraphs: [
          "Non serve avere dieci prodotti. Serve coerenza: una detersione fatta bene, idratazione e protezione solare quando serve.",
          "Se vuoi, dopo la seduta ti indichiamo una micro-routine adatta a te: non ti complica la giornata, anche nelle settimane più piene.",
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
      "Percorsi corpo per leggerezza, tono e benessere, con un calendario che sta nella tua settimana.",
    longDescription:
      "Una panoramica per orientarti tra trattamenti corpo: drenaggio/linfodrenante, relax, scrub e percorsi progressivi. In Rebel scegliamo insieme priorità e calendario, così il percorso sta nella tua settimana.",
    localAngle:
      "Per chi cerca un percorso corpo concreto a Carmagnola e dintorni.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a scegliere tra drenaggio, relax e scrub in base a quello che senti",
      "Aiuta a impostare un calendario realistico, che riesci davvero a tenere",
      "Ti dà aspettative concrete, seduta dopo seduta",
    ],
    faqs: [
      {
        q: "Meglio linfodrenante o massaggio rilassante?",
        a: "Dipende dall'obiettivo. Se cerchi leggerezza e gestione del gonfiore, spesso ha senso il linfodrenante; se vuoi sciogliere tensione e \"staccare\", il rilassante è perfetto. In studio ti aiutiamo a scegliere senza giri di parole.",
      },
      {
        q: "Quanto tempo serve per vedere cambiamenti sul corpo?",
        a: "Dipende da obiettivo, costanza e situazione di partenza. Parliamo sempre di progressione: alcune sensazioni migliorano presto, altri risultati richiedono un ciclo più lungo e un mantenimento coerente.",
      },
      {
        q: "Posso combinare scrub e massaggio nello stesso periodo?",
        a: "Sì, spesso è una combinazione sensata: lo scrub aiuta la pelle a essere più uniforme, il massaggio lavora su benessere e leggerezza. Decidiamo insieme timing e intensità per non irritare la pelle.",
      },
      {
        q: "Meglio una seduta singola o un percorso?",
        a: "Una singola seduta può essere piacevole, ma se vuoi un cambiamento più stabile di solito serve un percorso con calendario e controlli. Lo impostiamo in modo realistico: poche cose fatte bene.",
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
    editorialSections: [
      {
        heading: "Obiettivo reale: leggerezza, tono, o semplicemente sentirti meglio nel corpo",
        paragraphs: [
          "Molte persone cercano un trattamento corpo pensando a un singolo risultato. In realtà la domanda utile è: cosa vuoi sentire nella tua giornata? Più leggerezza, meno gonfiore, più comfort, più ordine nella routine.",
          "Quando l'obiettivo è chiaro, anche la scelta dei trattamenti diventa più semplice e il percorso si regge meglio nel tempo.",
        ],
      },
      {
        heading: "Drenaggio e massaggi: scegliere la manualità giusta",
        paragraphs: [
          "Il linfodrenante è spesso scelto quando c'è pesantezza o gonfiore; il rilassante quando serve staccare e sciogliere tensioni. Non è una gara: sono strumenti diversi.",
          "In studio ti consigliamo la scelta più sensata per il tuo periodo (lavoro, sport, stress, stagione), senza complicazioni.",
        ],
      },
      {
        heading: "Scrub corpo: quando aiuta davvero (e quando è meglio essere delicati)",
        paragraphs: [
          "Lo scrub è un dettaglio semplice ma utile: se la pelle è ruvida o \"spessa\" può migliorare la sensazione al tatto e rendere più piacevole anche la routine a casa.",
          "Se invece la pelle è irritata o molto sensibile, si lavora con più delicatezza. Il nostro obiettivo è comfort, non aggressività.",
        ],
      },
      {
        heading: "Calendario: se lo tieni, funziona",
        paragraphs: [
          "La cosa che fa davvero la differenza è la costanza. Non serve fare tutto: serve un ritmo realistico che si incastra nella tua settimana.",
          "Per questo impostiamo sempre un piano semplice: quante sedute, con che frequenza, e cosa fare tra un appuntamento e l'altro.",
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
    title: "Drenaggio corpo a Carmagnola",
    shortDescription:
      "Drenaggio su misura quando senti gambe pesanti, gonfiore o poca leggerezza.",
    longDescription:
      "Una guida rapida e concreta per capire cosa intendiamo davvero per \"drenaggio\" e come impostare un percorso sensato: obiettivo, calendario, e cosa fare tra una seduta e l'altra per rendere il risultato più stabile.",
    localAngle:
      "Utile soprattutto nei periodi in cui gonfiore e pesantezza si fanno sentire di più.",
    intent: "commercial",
    benefits: [
      "Aiuta a gestire la sensazione di pesantezza in modo più ordinato",
      "Imposta un ritmo che puoi tenere e aggiustare nel tempo",
      "Chiarisce limiti e aspettative, senza promesse gonfiate",
    ],
    faqs: [
      {
        q: "Il drenaggio è utile solo nei mesi caldi?",
        a: "No. Molte persone lo richiedono di più quando fa caldo, ma può essere utile tutto l'anno: cambiano ritmo e intensità in base al periodo e alle abitudini.",
      },
      {
        q: "Il drenaggio sostituisce sport e alimentazione?",
        a: "No. È un aiuto che si integra con abitudini coerenti. Quando lo inserisci in un piano realistico, la sensazione di leggerezza tende a essere più stabile.",
      },
      {
        q: "Quante sedute servono per sentirne l'effetto?",
        a: "Dipende da situazione e obiettivo. Spesso la sensazione migliora già dopo le prime sedute, ma la parte importante è la continuità: un ritmo che riesci a tenere vale più di una corsa di una settimana.",
      },
      {
        q: "Meglio drenaggio generico o linfodrenante?",
        a: "Se cerchi un approccio più specifico, il linfodrenante è spesso la scelta più mirata. Se vuoi, abbiamo anche una guida dedicata: ti aiuta a capire quando ha davvero senso e come impostarlo bene.",
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
    editorialSections: [
      {
        heading: "Drenaggio: cosa intendiamo davvero (e cosa no)",
        paragraphs: [
          "Quando una persona dice \"mi serve drenaggio\", spesso intende una cosa semplice: sentirsi più leggera e meno gonfia. È un obiettivo reale, ma va impostato con aspettative corrette.",
          "Non parliamo di miracoli: parliamo di un percorso che aiuta la sensazione di comfort, soprattutto se inserito in un ritmo coerente.",
        ],
      },
      {
        heading: "Calendario: la parte che rende il percorso sostenibile",
        paragraphs: [
          "La domanda non è solo quante sedute, ma come distribuirle. Un calendario realistico evita l'effetto \"tutto subito\" e ti permette di capire cosa funziona davvero su di te.",
          "In studio adattiamo intensità e frequenza in base al periodo e alla risposta: un percorso serio si aggiusta, non si improvvisa.",
        ],
      },
      {
        heading: "Tra una seduta e l'altra: cosa aiuta davvero",
        paragraphs: [
          "Spesso basta poco: movimento regolare, idratazione e routine semplici. Non ti riempiamo di regole: scegliamo insieme due o tre cose che riesci a fare davvero.",
          "Se vuoi un approfondimento più specifico, la guida sul linfodrenante entra nei dettagli e ti aiuta a capire quando è la scelta migliore.",
        ],
      },
      {
        heading: "Da Rebel: drenaggio come parte di un percorso corpo (non come seduta isolata)",
        paragraphs: [
          "Quando serve, integriamo il drenaggio con trattamenti corpo semplici (ad esempio scrub) o con sedute di relax, per un approccio più completo e piacevole.",
          "Il punto è sempre lo stesso: creare un piano che ti faccia stare meglio e che tu riesca a seguire nel tempo.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
    ],
  },
  {
    slug: "beauty-routine-carmagnola",
    title: "Beauty routine professionale a Carmagnola",
    shortDescription:
      "Come mantenere bene i risultati anche a casa, senza complicarti la vita.",
    longDescription:
      "Una guida semplice per costruire una routine sostenibile: pochi passaggi fatti bene, con costanza. Non serve avere dieci prodotti: serve coerenza e scelte sensate, soprattutto tra una seduta e l'altra.",
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
        a: "Pochi e coerenti: detersione, idratazione e protezione. Poi si aggiunge un attivo mirato solo se serve davvero (e se lo usi con costanza).",
      },
      {
        q: "Quando aggiornare la routine?",
        a: "Quando cambiano stagione, obiettivo o risposta della pelle. Anche un trattamento in studio può cambiare le priorità: per questo è utile avere una routine flessibile ma semplice.",
      },
      {
        q: "È meglio cambiare spesso prodotti o restare costante?",
        a: "La costanza vince quasi sempre. Meglio pochi prodotti che funzionano e che usi bene, rispetto a una routine che cambia ogni settimana.",
      },
      {
        q: "La protezione solare serve anche in città?",
        a: "Spesso sì: è uno dei gesti più semplici per proteggere la pelle nel tempo. Se stai facendo trattamenti o usi attivi specifici, diventa ancora più importante: ti diciamo noi come gestirla in modo pratico.",
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
    editorialSections: [
      {
        heading: "La routine che funziona davvero: poche cose, fatte bene",
        paragraphs: [
          "La routine perfetta non esiste. Esiste la routine che riesci a seguire. Per questo noi partiamo sempre dal minimo efficace: detersione, idratazione, protezione.",
          "Se serve, aggiungiamo un attivo mirato. Ma prima viene la costanza: è lì che si vede la differenza, settimana dopo settimana.",
        ],
      },
      {
        heading: "Detersione: meglio delicata e costante che aggressiva e sporadica",
        paragraphs: [
          "Molti problemi nascono da detersioni troppo aggressive o fatte male. La pelle, quando è stressata, diventa instabile: rossori, secchezza, impurità che vanno e vengono.",
          "Una detersione sensata e ripetibile è una base semplice che rende più efficaci anche i trattamenti in studio.",
        ],
      },
      {
        heading: "Attivi: meno ma meglio (e con un ritmo che puoi sostenere)",
        paragraphs: [
          "Se metti troppi attivi insieme, spesso la pelle si ribella. Noi preferiamo scegliere una priorità e lavorare con gradualità.",
          "Se vuoi cambiare routine, lo facciamo in modo ordinato: un passaggio alla volta, così capiamo cosa funziona davvero su di te.",
        ],
      },
      {
        heading: "Quando cambiare: i segnali che ti dicono che è ora di adattare",
        paragraphs: [
          "Cambio stagione, stress, sonno e sport cambiano la pelle. Se ti sembra \"diversa\" da un mese all'altro, è normale.",
          "La soluzione non è buttare tutto: è adattare con piccoli aggiustamenti. In studio, dopo una seduta, possiamo dirti cosa tenere e cosa semplificare.",
        ],
      },
      {
        heading: "Protezione: la parte semplice che fa la differenza nel tempo",
        paragraphs: [
          "La protezione solare non è una regola da influencer: è un gesto pratico. Ti aiuta a proteggere la pelle e a mantenere più stabili alcuni risultati.",
          "Se ti sembra complicata, la rendiamo facile: scegliamo una soluzione che userai davvero, non quella più teorica.",
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
      "Chiarisce tempi e frequenza delle sedute (e perché possono cambiare)",
      "Spiega preparazione e post-seduta, con attenzione alla pelle del viso",
      "Ti aiuta a capire cosa chiedere in consulenza, senza imbarazzo",
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
          "In pratica: se cerchi un risultato elegante e stabile, la costanza vince sempre sulla fretta. È qui che si vede la differenza tra protocollo improvvisato e metodo professionale.",
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
      "Come organizzare il laser corpo: quali zone dare priorità, tempi e calendario.",
    longDescription:
      "Una guida concreta per chi vuole iniziare il laser corpo a Carmagnola con una strategia chiara: zone prioritarie, stagionalità e gestione del percorso senza stress.",
    localAngle:
      "Ideale se arrivi da Carmagnola o comuni vicini e vuoi un programma coerente, non standard.",
    intent: "commercial",
    benefits: [
      "Ti fa scegliere le zone in base alle tue priorità, non ai pacchetti",
      "Ti aiuta a impostare un calendario che riesci a seguire",
      "Spiega cosa considerare con sole, routine e piccoli accorgimenti",
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
      "Frequenza, pelle sensibile, errori comuni e come mantenere bene il risultato.",
    longDescription:
      "Una guida naturale e concreta per capire quando la pulizia viso serve davvero, come integrarla nella routine e come evitare eccessi che irritano la pelle.",
    localAngle:
      "Scritta per chi cerca a Carmagnola un approccio viso professionale, delicato e progressivo.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a capire se serve davvero (e ogni quanto, per la tua pelle)",
      "Spiega come evitare irritazioni e sovraccarico della barriera cutanea",
      "Rende più semplice la routine tra una seduta e l'altra",
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
          "Il nostro approccio resta semplice: leggere la pelle, scegliere priorità e costruire una routine che non ti complichi la giornata.",
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
      "Un articolo pratico e onesto per capire quando il linfodrenante può aiutarti davvero, quali aspettative avere e come inserirlo in un percorso corpo coerente.",
    localAngle:
      "Dedicata a chi cerca a Carmagnola un trattamento drenante serio e personalizzato.",
    intent: "commercial",
    benefits: [
      "Chiarisce quando può essere utile (e quando no)",
      "Spiega come inserirlo in un percorso corpo con un ritmo che puoi tenere",
      "Aiuta a fare scelte più serene, senza aspettative gonfiate",
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
          "Quando viene inserito in un piano coerente, con tempi adeguati e monitoraggio, diventa molto più utile e sostenibile.",
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
          "La qualità del risultato dipende da quanto il piano resta umano: chiaro da capire, facile da seguire.",
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

