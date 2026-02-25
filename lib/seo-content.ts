import { protocolPages } from "@/lib/protocol-pages";

export const editorialImageAssets = {
  pedicure: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/dd34e324-2953-4a98-18ee-ef36b7c59e00/public",
  linfodrenante: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/0d01138f-a507-4cb2-4c48-a70aa8b5ad00/public",
  laserInverno: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b01b968e-9ca9-4bd9-62eb-41cfea80bb00/public",
  pressoterapia: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/ba59e49d-5727-4c34-4b78-5ed055fb6f00/public",
  peliIncarniti: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/b0f43f31-21d2-4834-4ddc-36a50a511200/public",
  puliziaViso: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public",
  laserViso: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8d07afc2-b036-4eff-d34e-523a6c656d00/public",
  laserCorpo: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e3635dd7-e046-46af-56a5-cf36d8239c00/public",
  laserEstate: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/02c98ad7-1a83-4d09-0d43-9b3b2184ac00/public",
  laserSoleGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/f8320c32-3b0a-4496-4564-e3ebf421b500/public",
  laserAscelleGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2db75699-255f-4361-1071-45f4378af100/public",
  laserInguineGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/3c13dc18-0615-4e12-1da0-254ed590c800/public",
  laserGambeGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/d31436bd-c15a-47b4-6ce8-1f050a376500/public",
  laserPalestraGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/2e6108a2-6286-4732-fb18-d54b51500000/public",
  laserInvernoGuida: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e2911bf3-8fce-4bd5-4a04-112386f17b00/public",
  scrubCorpo: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public",
  manicureSemipermanente: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public",
  laminazione: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/5ed3dbec-4e69-449d-548c-d9d28b4fb100/public",
  massaggioRilassante: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/965f95e4-c556-424d-abca-77a5c7b1ae00/public",
} as const;

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
  // Curated links to protocol detail pages (advanced next step).
  relatedProtocolSlugs?: string[];
  editorialSections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  sourceLinks?: Array<{
    label: string;
    url: string;
  }>;
  heroImage?: {
    src: string;
    alt: string;
  };
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
  // Curated guide-to-guide links (fallbacks to auto-related if missing).
  relatedCompetenceSlugs?: string[];
  // Curated links to protocol detail pages (advanced next step).
  relatedProtocolSlugs?: string[];
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
      "Pulizia viso completa e delicata per pelle impura, spenta o appesantita: comfort, pori più puliti e grana più uniforme.",
    longDescription:
      "Una pulizia viso fatta bene parte dall'osservazione della pelle e lavora per step: detersione, esfoliazione delicata, pulizia mirata e fase lenitiva. L'obiettivo non è stressare, ma lasciare la pelle più pulita, luminosa e comoda nei giorni successivi. È anche uno dei servizi migliori per iniziare con chiarezza: ti fa vedere subito il metodo (e ci permette di leggere la pelle prima di impostare qualsiasi percorso).",
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
        a: "Spesso tra 4 e 6 settimane, ma la frequenza giusta dipende da pelle, stagione e routine a casa. Dopo la prima seduta ti proponiamo un ritmo realistico, coerente con la tua pelle.",
      },
      {
        q: "Non so da cosa partire: la pulizia viso ha senso?",
        a: "Sì: è uno dei modi più semplici per rimettere ordine e capire la pelle. Dopo la seduta hai una direzione chiara (routine e ritmo) e, se serve, ti proponiamo un passo successivo coerente, senza confusione.",
      },
      {
        q: "Dopo la pulizia viso avrò rossore?",
        a: "Può succedere un lieve rossore, soprattutto se la pelle è reattiva. Lavoriamo in modo graduale e chiudiamo sempre con una fase lenitiva per lasciare la pelle il più tranquilla possibile.",
      },
      {
        q: "Cosa conviene fare (e non fare) dopo la seduta?",
        a: "Ti lasciamo due consigli pratici: detersione delicata, idratazione e protezione solare. In generale evitiamo di sovraccaricare la pelle con troppi attivi aggressivi nei giorni immediatamente successivi.",
      },
    ],
    keywords: [
      "pulizia viso Carmagnola",
      "pulizia del viso Carmagnola",
      "trattamento viso pelle impura Carmagnola",
      "pulizia viso pelle sensibile Carmagnola",
      "estetista viso Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.puliziaViso,
      alt: "Pulizia viso professionale in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pulizia-viso-carmagnola-frequenza-benefici",
      "trattamenti-viso-carmagnola",
      "estetica-avanzata-carmagnola",
      "beauty-routine-carmagnola",
    ],
    relatedProtocolSlugs: ["catalysis-ritual", "rebel-lift-protocol", "collagen-code"],
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
          "Dopo la prima pulizia viso ti proponiamo un ritmo realistico: così non rincorri la pelle, la accompagni.",
        ],
      },
      {
        heading: "Primo appuntamento: il gancio più intelligente per iniziare bene",
        paragraphs: [
          "Se non sai da cosa partire, la pulizia viso è spesso la scelta più \"pulita\": ti fa stare meglio subito e, soprattutto, ci permette di leggere la pelle con calma.",
          "Da lì il percorso diventa semplice: o mantieni con un ritmo distanziato e routine essenziale, oppure (se serve davvero) costruiamo una progressione più avanzata con obiettivo chiaro.",
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
      "Scrub corpo con esfoliazione controllata per pelle più liscia e uniforme, utile per semplificare idratazione e mantenimento.",
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
        a: "Dipende da come risponde la tua pelle. In genere, nelle prime ore è meglio evitare calore eccessivo e sfregamenti intensi; ti lasciamo due dritte in base alle zone trattate.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola",
      "esfoliazione corpo Carmagnola",
      "trattamento corpo levigante Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.scrubCorpo,
      alt: "Scrub corpo professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
    ],
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
          "Dopo la prima seduta ti diciamo una frequenza realistica, senza trasformare la routine corpo in un lavoro.",
        ],
      },
      {
        heading: "Dopo la seduta: far durare la morbidezza",
        paragraphs: [
          "Il post è semplice: idratazione e protezione. Pochi gesti, ma coerenti. Se ti fa comodo, ti suggeriamo anche come scegliere i prodotti in base a stagione e sensazione della pelle (secca, che tira, più spessa).",
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
      "Massaggio linfodrenante drenante e progressivo per gonfiore e pesantezza: manualità delicata, ritmo realistico e comfort.",
    longDescription:
      "Il linfodrenante è un massaggio drenante delicato e progressivo: aiuta a ridurre la sensazione di gonfiore e pesantezza e a ritrovare una percezione più leggera del corpo (soprattutto su gambe e addome). In studio lo impostiamo con manualità graduali, ascolto e un piano coerente: l'obiettivo è farti stare meglio, senza esagerare e senza promesse.",
    priceHint: "da EUR 69",
    category: "estetica-classica",
    benefits: [
      "Aiuta a ridurre la sensazione di gonfiore e pesantezza",
      "Sensazione di leggerezza più stabile quando inserito con un ritmo coerente",
      "Supporta percorsi corpo con un piano personalizzato che puoi mantenere nel tempo",
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
        a: "Ti lasciamo due dritte pratiche: idratarti, muoverti con calma e non sovraccaricare subito il corpo con calore eccessivo o attività troppo intensa se ti senti già \"scarica\". Poi adattiamo tutto alla tua giornata.",
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
    heroImage: {
      src: editorialImageAssets.linfodrenante,
      alt: "Massaggio linfodrenante professionale Rebel a Carmagnola",
    },
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
        heading: "Quanto spesso farlo: un ritmo che ti viene naturale",
        paragraphs: [
          "C'è chi lo sceglie come seduta singola nei periodi più carichi, e chi preferisce una serie di sedute per dare continuità. La scelta dipende da tempo, obiettivo e risposta del corpo.",
          "La regola che usiamo è pratica: meglio poche sedute fatte con costanza e buon senso che un'intensità difficile da mantenere.",
        ],
      },
      {
        heading: "Piccoli gesti che aiutano tra una seduta e l'altra",
        paragraphs: [
          "Il drenaggio in studio è un pezzo del puzzle. Tra una seduta e l'altra, anche solo camminare un po' di più, idratarsi e non stare sempre ferma può aiutare la sensazione di leggerezza.",
          "Se serve, ti lasciamo due dritte (senza stravolgerti la routine) per far durare meglio l'effetto percepito.",
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
    heroImage: {
      src: editorialImageAssets.massaggioRilassante,
      alt: "Massaggio rilassante professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "massaggio-rilassante-carmagnola-cervicale-stress",
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
          "Se ti va, ti suggeriamo anche come integrare il massaggio dentro una routine più ampia di benessere (senza complicarti la vita).",
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
    heroImage: {
      src: editorialImageAssets.laminazione,
      alt: "Laminazione ciglia e sopracciglia Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
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
          "Se serve, ti consigliamo anche ogni quanto rifarla in base alla tua crescita e alle tue abitudini.",
        ],
      },
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola",
    name: "Manicure semipermanente a Carmagnola",
    shortDescription:
      "Manicure semipermanente curata e ordinata: effetto pulito, durata stabile e mani subito \"a posto\".",
    longDescription:
      "La manicure semipermanente è un servizio di precisione: preparazione accurata, rifinitura pulita e applicazione colore con attenzione ai dettagli. L'obiettivo non è solo \"durare\": è avere un risultato ordinato, elegante e confortevole, che ti piaccia anche da vicino. Se cerchi qualcosa di pratico (per sentirti subito curata, senza stravolgerti), è una delle scelte più semplici e soddisfacenti.",
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
        q: "Voglio sentirmi subito in ordine: è una buona scelta?",
        a: "Sì: è un servizio immediato e molto \"utile\" nella vita reale. Puoi partire con un effetto naturale e poi valutare con calma se fare anche altri servizi (viso, laminazione o laser) in base al tuo periodo.",
      },
      {
        q: "Cosa conviene evitare per farlo durare meglio?",
        a: "Piccole cose: non usare le unghie come \"attrezzi\", idratare mani e cuticole e proteggere le mani quando fai lavori domestici. Ti lasciamo due dritte, non una lista infinita di regole.",
      },
    ],
    keywords: [
      "manicure semipermanente Carmagnola",
      "centro unghie Carmagnola",
      "semipermanente Carmagnola prezzi",
      "unghie semipermanente Carmagnola",
      "manicure Carmagnola",
      "semipermanente naturale Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.manicureSemipermanente,
      alt: "Manicure semipermanente Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "come-scegliere-centro-estetico-carmagnola",
      "beauty-routine-carmagnola",
      "trattamenti-viso-carmagnola",
      "manicure-semipermanente-carmagnola-durata-rimozione",
    ],
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
          "Se preferisci alternare periodi con e senza semipermanente, possiamo organizzarlo in modo che l'unghia resti bella e stabile.",
        ],
      },
      {
        heading: "Effetto naturale: si può (e viene benissimo)",
        paragraphs: [
          "Un effetto naturale non significa \"anonimo\": significa mani curate, pulite, armoniose. Possiamo scegliere insieme colore e finitura per valorizzare la tua mano senza eccessi.",
          "È una scelta perfetta se vuoi un look ordinato anche senza trucco o se ti piace l'eleganza semplice.",
        ],
      },
      {
        heading: "Per partire semplice: semplifica la vita (e alza subito la percezione di cura)",
        paragraphs: [
          "Molte persone iniziano da qui perché è un servizio che non richiede \"ristrutturazioni\": esci curata e ordinata, senza dover imparare regole nuove o gestire post complessi.",
          "Se poi vuoi impostare anche viso o laser, lo fai con calma e con un piano. L'idea è partire bene, non fare tutto insieme.",
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
    slug: "pedicure-carmagnola",
    name: "Pedicure VIP con scrub a Carmagnola",
    shortDescription:
      "Pedicure VIP con scrub: piedi più ordinati, pelle più liscia e una sensazione di comfort che dura (senza eccessi).",
    longDescription:
      "Il pedicure VIP con scrub, quando è fatto bene, non è solo estetica: è ordine e comfort. In studio lavoriamo in modo pulito e concreto: valutiamo pelle e unghie, scegliamo intensità e passaggi sensati e chiudiamo con una rifinitura che ti fa uscire davvero \"a posto\". Se hai talloni secchi o pelle più ispessita, impostiamo il lavoro con delicatezza: l'obiettivo è migliorare nel tempo, non stressare in una sola seduta.",
    priceHint: "EUR 44",
    category: "estetica-classica",
    benefits: [
      "Piedi più ordinati e curati, anche da vicino",
      "Pelle più liscia e confortevole (soprattutto su talloni secchi)",
      "Riduce la sensazione di \"piede trascurato\" nella routine quotidiana",
    ],
    faqs: [
      {
        q: "Quanto dura il Pedicure VIP?",
        a: "Circa 1 ora e 15 minuti. È una durata comoda perché ci permette di lavorare con calma su ordine, pelle e rifinitura, senza fare le cose di corsa.",
      },
      {
        q: "Ogni quanto conviene fare il pedicure?",
        a: "Dipende da pelle, abitudini e stagione. Alcune persone stanno bene con un ritmo distanziato, altre preferiscono un mantenimento più regolare nei mesi in cui portano scarpe aperte. In studio ti consigliamo una finestra realistica, non un calendario fisso uguale per tutte.",
      },
      {
        q: "Se ho talloni secchi o pelle ispessita, si può fare?",
        a: "Sì: si lavora con buonsenso e delicatezza. Preferiamo migliorare progressivamente e lasciare la pelle comoda, piuttosto che essere aggressivi e irritare.",
      },
      {
        q: "Posso mettere lo smalto dopo il pedicure?",
        a: "Sì. Per un effetto molto naturale, possiamo orientarti su finiture pulite e discrete. Se preferisci colore, lo scegliamo insieme in base allo stile che ti piace.",
      },
      {
        q: "Se ho una situazione dolorosa o sospetta (unghia, infezione), cosa devo fare?",
        a: "Se c'è dolore importante o un dubbio clinico, preferiamo essere prudenti: ci scrivi e valutiamo insieme, e se serve ti consigliamo un parere medico/podologico prima di procedere. Il nostro focus qui è il pedicure estetico, fatto bene e in sicurezza.",
      },
    ],
    keywords: [
      "pedicure Carmagnola",
      "pedicure VIP Carmagnola",
      "pedicure VIP con scrub Carmagnola",
      "pedicure estetico Carmagnola",
      "cura piedi Carmagnola",
      "talloni secchi Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure professionale Rebel con finish naturale a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "come-scegliere-centro-estetico-carmagnola",
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
      "pedicure-carmagnola-ogni-quanto-talloni",
    ],
    editorialSections: [
      {
        heading: "Pedicure: la differenza tra \"bello\" e \"comodo\"",
        paragraphs: [
          "Un pedicure ben fatto si vede, ma soprattutto si sente: pelle più confortevole, unghie ordinate, piedi che non ti \"distraggono\" durante la giornata.",
          "Noi preferiamo un risultato pulito e naturale: ordine vero, senza esagerazioni e senza stressare la pelle.",
        ],
      },
      {
        heading: "Talloni secchi e pelle ispessita: meglio progressione che aggressività",
        paragraphs: [
          "Quando la pelle è molto secca, la tentazione è fare troppo in una volta. Funziona meglio l'opposto: un lavoro sensato in studio e un mantenimento semplice a casa.",
          "Ti lasciamo due indicazioni pratiche su idratazione e abitudini: poche cose, ma quelle giuste.",
        ],
      },
      {
        heading: "Quando farlo: stagione, scarpe e routine reale",
        paragraphs: [
          "Nei mesi caldi spesso lo si desidera di più, ma in realtà il pedicure funziona tutto l'anno: ti fa sentire più ordinata e ti semplifica la gestione dei piedi.",
          "In studio ti consigliamo un ritmo realistico in base alle tue abitudini (sport, lavoro, scarpe chiuse o aperte).",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Nail care basics",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/nail-care-basics",
      },
    ],
  },
  {
    slug: "pedicure-estetico-carmagnola",
    name: "Pedicure estetico a Carmagnola",
    shortDescription:
      "Pedicure estetico (45 min) per piedi più ordinati e una sensazione di comfort immediata, con rifinitura pulita.",
    longDescription:
      "Il pedicure estetico è la scelta più semplice per rimettere in ordine i piedi: lavoriamo in modo pulito e preciso su unghie e pelle, con una rifinitura che resta bella anche da vicino. È un servizio utile tutto l'anno, soprattutto se vuoi sentirti più a posto senza trasformarlo in un percorso complicato.",
    priceHint: "EUR 33",
    category: "estetica-classica",
    benefits: [
      "Piedi più ordinati e curati in poco tempo",
      "Rifinitura pulita e naturale, senza eccessi",
      "Ottimo come mantenimento tra una seduta e l'altra",
    ],
    faqs: [
      {
        q: "Quanto dura il pedicure estetico?",
        a: "Circa 45 minuti.",
      },
      {
        q: "È adatto anche se ho pelle secca?",
        a: "Sì, ma lavoriamo con delicatezza. Se la secchezza è importante, può essere più adatto un Pedicure VIP con scrub o una progressione più ordinata nel tempo.",
      },
      {
        q: "Ogni quanto conviene farlo?",
        a: "Dipende da abitudini e stagione. In studio ti consigliamo una finestra realistica in base a come risponde la pelle e a quanto vuoi tenere i piedi sempre \"in ordine\".",
      },
    ],
    keywords: [
      "pedicure estetico Carmagnola",
      "pedicure Carmagnola",
      "cura piedi Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure estetico Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
    ],
  },
  {
    slug: "pedicure-estetico-con-smalto-carmagnola",
    name: "Pedicure estetico con smalto a Carmagnola",
    shortDescription:
      "Pedicure estetico con smalto (50 min): ordine e rifinitura, con un risultato curato e coerente con il tuo stile.",
    longDescription:
      "Se cerchi un pedicure ordinato con smalto, questa versione unisce cura del piede e finitura estetica. L'obiettivo è un risultato pulito, non \"pesante\": ti guidiamo su colore e finitura in base alla stagione e a quanto lo vuoi naturale.",
    priceHint: "EUR 35",
    category: "estetica-classica",
    benefits: [
      "Piedi più ordinati + smalto applicato con precisione",
      "Risultato curato e naturale (se lo vuoi)",
      "Comodo prima di periodi in cui porti scarpe più aperte",
    ],
    faqs: [
      {
        q: "Quanto dura il trattamento?",
        a: "Circa 50 minuti.",
      },
      {
        q: "Posso scegliere un colore discreto?",
        a: "Sì. Possiamo orientarti su finiture e colori molto naturali, puliti e facili da portare.",
      },
      {
        q: "Se ho poco tempo, conviene questa versione o il pedicure estetico?",
        a: "Se la priorità è l'ordine del piede, il pedicure estetico è già ottimo. Se preferisci anche lo smalto, questa è la scelta più diretta.",
      },
    ],
    keywords: [
      "pedicure con smalto Carmagnola",
      "pedicure Carmagnola",
      "piedi curati Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure con smalto naturale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
    ],
  },
  {
    slug: "pedicure-semipermanente-carmagnola",
    name: "Pedicure estetico semipermanente a Carmagnola",
    shortDescription:
      "Pedicure estetico con semipermanente (1 ora): piedi ordinati e finitura più stabile rispetto allo smalto classico.",
    longDescription:
      "Il pedicure estetico con semipermanente è pensato per chi vuole piedi curati più a lungo, con una finitura ordinata e stabile. Anche qui vale la regola Rebel: precisione e rispetto. La parte che protegge davvero è una gestione corretta, inclusa la rimozione (senza strappi o improvvisazioni).",
    priceHint: "EUR 39",
    category: "estetica-classica",
    benefits: [
      "Finitura più stabile rispetto allo smalto classico",
      "Piedi ordinati e curati, anche nei periodi pieni",
      "Risultato pulito, non eccessivo",
    ],
    faqs: [
      {
        q: "Quanto dura il trattamento?",
        a: "Circa 1 ora.",
      },
      {
        q: "Il semipermanente rovina l'unghia del piede?",
        a: "Non dovrebbe, se applicazione e rimozione sono fatte correttamente. Il punto è evitare strappi e rimozioni aggressive.",
      },
      {
        q: "Posso fare una pausa tra un semipermanente e l'altro?",
        a: "Sì. Se preferisci fare una pausa, la facciamo in modo ordinato e rispettoso dell'unghia.",
      },
    ],
    keywords: [
      "pedicure semipermanente Carmagnola",
      "semipermanente piedi Carmagnola",
      "pedicure Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure semipermanente Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "manicure-semipermanente-carmagnola-durata-rimozione",
      "pedicure-carmagnola-ogni-quanto-talloni",
      "beauty-routine-carmagnola",
    ],
    sourceLinks: [
      {
        label: "AAD - Gel manicures: Tips for healthy nails",
        url: "https://www.aad.org/media/news-releases/gel-manicures-dermatologists-share-tips-to-keep-nails-healthy",
      },
    ],
  },
  {
    slug: "taglio-unghie-piedi-carmagnola",
    name: "Taglio unghie piedi a Carmagnola",
    shortDescription:
      "Taglio unghie piedi (15 min): servizio rapido e preciso per rimettere ordine con una rifinitura pulita.",
    longDescription:
      "A volte non serve un trattamento lungo: serve solo rimettere ordine. Il taglio unghie piedi è un servizio rapido e preciso, utile come mantenimento o quando vuoi sistemarti senza perdere tempo.",
    priceHint: "EUR 17",
    category: "estetica-classica",
    benefits: [
      "Servizio veloce e concreto",
      "Unghie più ordinate e rifinite",
      "Utile come mantenimento tra pedicure",
    ],
    faqs: [
      {
        q: "Quanto dura?",
        a: "Circa 15 minuti.",
      },
      {
        q: "Quando conviene farlo?",
        a: "Quando vuoi rimettere ordine senza fare un pedicure completo, oppure come mantenimento tra una seduta e l'altra.",
      },
      {
        q: "Se ho dolore o un dubbio clinico, posso farlo lo stesso?",
        a: "Se c'è dolore importante o una situazione sospetta, preferiamo valutare prima: ci scrivi e, se serve, ti consigliamo un parere medico/podologico.",
      },
    ],
    keywords: [
      "taglio unghie piedi Carmagnola",
      "taglio unghie Carmagnola",
      "cura piedi Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Taglio unghie piedi professionale Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: ["pedicure-carmagnola-ogni-quanto-talloni", "beauty-routine-carmagnola"],
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
        a: "Di solito sì: il rasoio è la scelta più semplice prima del laser. In fase di prenotazione ti diciamo tempistiche e cosa evitare, senza complicazioni.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o pinzetta?",
        a: "In generale, durante un percorso laser si evita l'epilazione a strappo perché interferisce con il ciclo del pelo. Per mantenere ordine tra le sedute, di solito si usa il rasoio e si seguono poche regole mirate per la zona viso.",
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
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Epilazione laser viso in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-viso-carmagnola-guida-realistica",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-uomo-carmagnola-guida-pratica",
    ],
    relatedProtocolSlugs: ["eye-genesis"],
    editorialSections: [
      {
        heading: "Zone viso: come scegliamo la priorità (senza fare tutto insieme a caso)",
        paragraphs: [
          "Sul viso la differenza la fa l'ordine: scegliamo prima la zona che ti dà più fastidio nella quotidianità e impostiamo un piano che riesci a portare avanti.",
          "Se devi trattare più aree (ad esempio baffetti e mento), lo decidiamo insieme in base a sensibilità cutanea, obiettivo e tollerabilità: meglio un piano chiaro che mille tentativi.",
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
      "Consigli pratici pre/post per una pelle più tranquilla",
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
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser corpo in cabina Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-inguine-carmagnola-guida-pratica",
      "epilazione-laser-ascelle-carmagnola-guida-pratica",
      "laser-uomo-carmagnola-guida-pratica",
    ],
    relatedProtocolSlugs: ["rebel-cell-regeneration"],
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
        heading: "Preparazione e post-seduta: consigli pratici, senza liste infinite",
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
  {
    slug: "epilazione-laser-viso-uomo-carmagnola",
    name: "Epilazione laser viso uomo a Carmagnola",
    shortDescription:
      "Laser viso uomo su barba/collo/zigomi: percorso su misura, con gestione pratica della rasatura.",
    longDescription:
      "Il laser viso uomo da Rebel è pensato per chi vuole ridurre o rendere più gestibile la ricrescita su barba e collo, oppure mettere ordine in zone specifiche (zigomi, baffi, contorni). Impostiamo parametri e calendario in base a pelle, pelo e obiettivo reale, con manipolo Ice Polar per migliorare il comfort. Tra una seduta e l'altra ti diciamo come gestire rasatura e pelle senza improvvisare.",
    priceHint: "EUR 51.80 / EUR 25.90 per zona",
    category: "laser",
    benefits: [
      "Percorso su misura su barba/collo e zone viso più richieste",
      "Gestione pratica della rasatura tra le sedute (senza confusione)",
      "Progressione chiara e monitorata: parametri adattati alla risposta della pelle",
      "Comfort migliorato con Ice Polar e settaggio graduale",
    ],
    faqs: [
      {
        q: "Si può fare laser su barba e collo?",
        a: "Dipende dall'obiettivo: riduzione, ordine della ricrescita o gestione delle irritazioni. In consulenza capiamo cosa vuoi ottenere e impostiamo zone, parametri e calendario in modo coerente.",
      },
      {
        q: "Tra una seduta e l'altra posso radermi?",
        a: "Di solito sì: il rasoio è la scelta più semplice durante un percorso laser. In genere si evita invece l'epilazione a strappo perché interferisce con il ciclo del pelo.",
      },
      {
        q: "Fa male sul collo o sulla linea barba?",
        a: "La percezione cambia molto da zona a zona. In studio lavoriamo in modo graduale e su misura; Ice Polar aiuta sul comfort, e il settaggio viene adattato alla risposta della pelle.",
      },
      {
        q: "Posso iniziare anche se faccio sport all'aperto o mi espongo al sole?",
        a: "Spesso sì, ma va gestita l'esposizione in modo sensato. La guida su laser e sole chiarisce cosa fare e quando conviene distanziare una seduta.",
      },
    ],
    keywords: [
      "epilazione laser viso uomo Carmagnola",
      "laser barba Carmagnola",
      "laser collo uomo Carmagnola",
      "laser zigomi uomo Carmagnola",
      "laser viso uomo Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Epilazione laser viso uomo Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola-guida-pratica",
      "laser-barba-collo-carmagnola-guida-pratica",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Barba e collo: l'obiettivo prima del trattamento",
        paragraphs: [
          "Sul viso uomo la domanda non è solo \"si può fare?\": è cosa vuoi ottenere. Ridurre? Mettere ordine? Alleggerire irritazioni da rasatura? La scelta delle zone e del calendario cambia in base a questo.",
          "Noi partiamo sempre da una valutazione e da un piano pulito: priorità chiare e progressione che puoi seguire, senza corse.",
        ],
      },
      {
        heading: "Rasatura tra le sedute: la gestione che rende il percorso sostenibile",
        paragraphs: [
          "Se non sai come gestire la rasatura tra una seduta e l'altra, il percorso diventa stressante. Preferiamo darti poche regole pratiche e adattarle alla tua routine (lavoro, sport, esposizione).",
          "Il risultato migliore arriva quando la pelle resta tranquilla e il calendario resta coerente.",
        ],
      },
      {
        heading: "Comfort: Ice Polar e settaggio graduale",
        paragraphs: [
          "Ice Polar aiuta il comfort, soprattutto su collo e contorni. Ma la parte decisiva è sempre il metodo: settaggio su misura e progressione, non intensità a caso.",
          "Se la pelle cambia, cambiamo anche noi: piccoli aggiustamenti seduta dopo seduta, senza perdere la direzione.",
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
    ],
  },
  {
    slug: "epilazione-laser-corpo-uomo-carmagnola",
    name: "Epilazione laser corpo uomo a Carmagnola",
    shortDescription:
      "Laser corpo uomo su schiena, torace e aree ampie: strategia, calendario e percorso su misura.",
    longDescription:
      "Il laser corpo uomo da Rebel viene impostato come un percorso: scegliamo priorità, calendario e controlli, in base a zone e obiettivo (schiena, torace, addome, spalle). Usiamo Thory con manipolo Ice Polar per migliorare il comfort durante la seduta e lavoriamo con settaggio su misura. Tra una seduta e l'altra ti diciamo cosa fare per tenere la pelle tranquilla e rendere il risultato più stabile.",
    priceHint: "da EUR 25.90 a 103.60",
    category: "laser",
    benefits: [
      "Strategia chiara su aree ampie (schiena/torace): priorità e calendario",
      "Percorso monitorato e adattato alla risposta individuale",
      "Comfort migliorato durante la seduta con Ice Polar",
      "Regole pratiche pre/post per evitare irritazioni inutili",
    ],
    faqs: [
      {
        q: "Schiena e torace richiedono più sedute?",
        a: "Sono zone ampie e la risposta cambia molto da persona a persona. Per questo la cosa più utile è impostare un calendario realistico e adattarlo nel tempo, invece di inseguire promesse veloci.",
      },
      {
        q: "Posso trattare più zone nello stesso appuntamento?",
        a: "Spesso sì, se ha senso per tempi e tollerabilità. A volte conviene partire da una zona prioritaria (per leggere meglio la risposta), poi aggiungere il resto.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o epilatore?",
        a: "In generale si evita l'epilazione a strappo durante un percorso laser. Di solito si usa il rasoio e si seguono poche regole pratiche per la pelle.",
      },
      {
        q: "Laser e sole: devo sospendere se lavoro all'aperto?",
        a: "Non per forza, ma va gestito con criterio. In consulenza valutiamo esposizione e zone, così il percorso resta sostenibile senza complicarti la vita.",
      },
    ],
    keywords: [
      "epilazione laser corpo uomo Carmagnola",
      "laser schiena Carmagnola",
      "laser torace Carmagnola",
      "laser uomo Carmagnola",
      "laser spalle Carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Epilazione laser corpo uomo Rebel a Carmagnola",
    },
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola-guida-pratica",
      "laser-schiena-carmagnola-guida-pratica",
      "laser-gambe-carmagnola-guida-pratica",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Aree ampie: la differenza la fa l'organizzazione",
        paragraphs: [
          "Sulle zone grandi la tentazione è fare tutto insieme e subito. In realtà funziona meglio una strategia pulita: priorità, calendario realistico e controlli.",
          "Quando il percorso è organizzato, si vive meglio anche la parte pratica: appuntamenti, sport, sole e gestione della pelle tra le sedute.",
        ],
      },
      {
        heading: "Preparazione e post: poche regole pratiche",
        paragraphs: [
          "Prima della seduta ti diciamo cosa fare e cosa evitare. Dopo, l'obiettivo è tenere la pelle tranquilla: niente esperimenti aggressivi e attenzione a calore/sfregamenti se sei sensibile.",
          "Se hai dubbi, ci scrivi: preferiamo una domanda in più a una gestione improvvisata.",
        ],
      },
      {
        heading: "Comfort: Ice Polar aiuta, ma è il settaggio che conta",
        paragraphs: [
          "Ice Polar migliora il comfort durante la seduta, ma la vera differenza è il settaggio su misura: parametri, zona e progressione.",
          "Un percorso serio si adatta: se la pelle risponde in modo diverso, si corregge la rotta senza perdere la direzione.",
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
    ],
  },
];

export const competencePages: CompetencePage[] = [
  {
    slug: "come-scegliere-centro-estetico-carmagnola",
    title: "Come scegliere un centro estetico a Carmagnola",
    shortDescription:
      "Una guida concreta per scegliere bene: domande da fare, segnali da evitare e come capire se ti stanno proponendo un percorso serio.",
    longDescription:
      "Quando confronti più centri estetici è facile perdersi tra promesse, pacchetti e parole nuove. Qui trovi una checklist pratica per scegliere con lucidità: metodo, chiarezza sui prezzi, competenze reali, regole tra le sedute e continuità del percorso.",
    localAngle:
      "Perfetta se stai confrontando più opzioni a Carmagnola prima di prenotare.",
    intent: "informational",
    benefits: [
      "Riduce confusione nella fase di confronto",
      "Aiuta a scegliere su criteri oggettivi",
      "Migliora la qualità della decisione prima di prenotare",
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
        a: "Non sempre. A parità di servizio, conta molto la qualità dell'esecuzione, la chiarezza su cosa viene fatto e la continuità del percorso. Un prezzo più basso può diventare più caro se ti costringe a ripartire da zero ogni volta.",
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
      "manicure-semipermanente-carmagnola",
      "pedicure-carmagnola",
      "laminazione-ciglia-sopracciglia-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "estetica-avanzata-carmagnola",
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "beauty-routine-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Prima di scegliere: chiarisci obiettivo e priorità (non il nome del trattamento)",
        paragraphs: [
          "La domanda più utile non è \"che trattamento fate?\", ma \"cosa voglio ottenere e in che tempi?\". Luminosità, comfort della pelle, gestione della ricrescita, mani ordinate: sono obiettivi diversi e richiedono strade diverse.",
          "Quando un centro ti aiuta a chiarire priorità e ritmo, la scelta diventa più semplice e anche il percorso è più realistico.",
        ],
      },
      {
        heading: "Se sei indecisa: scegli un \"gancio\" che ti faccia capire il metodo",
        paragraphs: [
          "Se sei indecisa, la prima seduta dovrebbe fare due cose: farti stare meglio subito e darti una direzione chiara (anche minima).",
          "Per questo spesso consigliamo di partire da servizi richiesti e molto pratici: pulizia viso (per rimettere ordine), manicure semipermanente (per mani curate), pedicure (per piedi più comodi e ordinati), laminazione (per uno sguardo più ordinato). Sono scelte semplici, ma dicono tanto su come lavora un centro.",
        ],
      },
      {
        heading: "Le domande che cambiano la decisione (anche con un messaggio su WhatsApp)",
        paragraphs: [
          "Chiedi chi imposta il protocollo, come ti spiegano cosa fare dopo e cosa succede se devi spostare una seduta. Un centro serio risponde con chiarezza e ti fa capire il perché delle scelte.",
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
          "Puoi partire anche con un singolo servizio (ad esempio una pulizia viso o una valutazione laser) e poi decidere con calma il resto.",
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
      "Percorsi estetici evoluti su viso e corpo: lettura iniziale, progressione e mantenimento, con scelte sensate e risultati misurabili.",
    longDescription:
      "Per noi estetica avanzata significa una cosa semplice: lavorare con precisione e continuità. Si parte dalla lettura iniziale (pelle, obiettivo, tempi), si sceglie un trattamento mirato e si costruisce una progressione che puoi mantenere davvero. Manualità, attivi e tecnologia entrano solo quando aggiungono valore reale: niente sedute \"random\", niente formule identiche per tutti.",
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
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    relatedProtocolSlugs: [
      "catalysis-ritual",
      "rebel-lift-protocol",
      "collagen-code",
      "rebel-cell-regeneration",
      "rebirth-60-plus",
    ],
    editorialSections: [
      {
        heading: "Estetica avanzata: non è \"più forte\", è più precisa",
        paragraphs: [
          "Per noi avanzata significa precisione: capire cosa serve davvero, evitare eccessi e lavorare con una progressione sensata. Non è un trattamento \"standard\" uguale per tutti.",
          "La qualità si vede quando il percorso resta lineare: poche cose fatte bene, con continuità.",
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
          "Per orientarti subito, puoi iniziare da un servizio base (come la pulizia viso) oppure da una consulenza: da lì costruiamo la progressione.",
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
    slug: "estetica-epigenetica-carmagnola-cosa-significa",
    title: "Estetica epigenetica a Carmagnola: cosa intendiamo e da dove partire",
    shortDescription:
      "Una spiegazione chiara (e senza fumo) dei protocolli epigenetici Rebel: che approccio è e come scegliere il primo step su viso o corpo.",
    longDescription:
      "Se senti parlare di estetica epigenetica e ti chiedi cosa significhi davvero, la risposta è più semplice di quanto sembri: per noi è un modo di impostare i percorsi con ordine. Si parte dalla lettura iniziale, si definisce un obiettivo concreto e si costruisce una progressione con pochi step, controlli e mantenimento. Qui trovi come orientarti e cosa chiedere prima di iniziare, senza rincorrere trattamenti \"a caso\".",
    localAngle:
      "Utile se sei a Carmagnola (o arrivi dai comuni vicini) e vuoi capire se un protocollo epigenetico può essere il passo giusto, con aspettative sane.",
    intent: "informational",
    benefits: [
      "Capisci cosa intendiamo per \"protocolli epigenetici\" in modo pratico",
      "Ti aiuta a scegliere un primo step sensato (viso o corpo) senza fare confusione",
      "Ti dà criteri semplici per valutare metodo, calendario e mantenimento",
    ],
    faqs: [
      {
        q: "È un trattamento singolo o un percorso?",
        a: "Dipende dall'obiettivo. Alcune persone partono con un singolo step per \"capire\" la pelle, altre scelgono subito un percorso. La differenza la fa il piano: priorità, ritmo e controlli.",
      },
      {
        q: "Serve per forza una lettura iniziale?",
        a: "Sì, perché evita tentativi: capire punto di partenza, abitudini e tempi cambia tutto. Anche quando l'obiettivo è semplice, partire ordinati fa risparmiare tempo e sedute inutili.",
      },
      {
        q: "Posso abbinarlo a pulizia viso o servizi più \"classici\"?",
        a: "Certo. Spesso la parte classica è quella che tiene la pelle in equilibrio: pulizia viso fatta bene, routine semplice, e poi si inserisce il protocollo quando serve davvero.",
      },
      {
        q: "Quanto tempo serve per vedere qualcosa?",
        a: "Dipende da obiettivo e costanza. Noi preferiamo parlare di progressione: cosa ti aspetti dopo il primo step, cosa cambia dopo qualche settimana, e come mantenere senza rincorrere.",
      },
    ],
    keywords: [
      "estetica epigenetica Carmagnola",
      "protocolli epigenetici Carmagnola",
      "trattamenti epigenetici viso Carmagnola",
      "trattamenti epigenetici corpo Carmagnola",
    ],
    relatedServiceSlugs: [
      "pulizia-viso-carmagnola",
      "massaggio-linfodrenante-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "estetica-avanzata-carmagnola",
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    relatedProtocolSlugs: [
      "catalysis-ritual",
      "collagen-code",
      "rebel-cell-regeneration",
      "rebel-lift-protocol",
    ],
    editorialSections: [
      {
        heading: "Partiamo dal concreto: non è una parola magica, è un metodo",
        paragraphs: [
          "Quando senti \"epigenetica\" è facile immaginare cose complicate. In realtà, per noi vuol dire solo una cosa: impostare i percorsi con ordine e continuità.",
          "Lettura iniziale, obiettivo chiaro, progressione e controlli. Poche cose fatte bene, invece di cambiare strada ogni mese.",
        ],
      },
      {
        heading: "Da dove partire: viso o corpo (dipende da cosa ti pesa di più)",
        paragraphs: [
          "Se il tema è il viso, di solito si parte da comfort, grana e luminosità. Se il tema è il corpo, spesso la priorità è leggerezza, tono o una sensazione di \"ordine\" che duri.",
          "Non serve fare tutto insieme. Scegliere una priorità rende il percorso più semplice e anche più leggibile.",
        ],
      },
      {
        heading: "Calendario e mantenimento: la parte che decide se dura",
        paragraphs: [
          "Un protocollo non vive solo in cabina. Vive anche nella routine tra una seduta e l'altra: pochi accorgimenti, sostenibili, che non ti complicano la giornata.",
          "Per questo parliamo sempre di ritmo: quanto spesso, per quanto tempo, e cosa cambia quando la stagione o la settimana cambiano.",
        ],
      },
      {
        heading: "La domanda giusta in consulenza",
        paragraphs: [
          "Non chiedere solo \"che trattamento fate\". Chiedi: qual è l'obiettivo, come si misura, cosa succede tra le sedute e come si adatta il piano se la pelle cambia.",
          "Se le risposte sono chiare e pratiche, di solito anche il percorso lo sarà.",
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
    slug: "epilazione-laser-carmagnola",
    title: "Epilazione laser a Carmagnola: come funziona e da dove partire",
    shortDescription:
      "Chiarimenti su sedute, tempi e aspettative: cosa aspettarti davvero dal laser.",
    longDescription:
      "Una guida per capire come impostiamo un percorso laser da Rebel: valutazione iniziale, settaggio su misura e calendario che puoi tenere. Dentro trovi anche le regole pratiche tra una seduta e l'altra (sole, rasoio, prodotti) e come scegliere le zone da cui partire senza fare confusione.",
    localAngle:
      "Utile se sei in fase di scelta e vuoi capire cosa aspettarti davvero.",
    intent: "commercial",
    benefits: [
      "Capisci da quali zone conviene partire (e perché)",
      "Hai regole pratiche tra una seduta e l'altra, senza ansie",
      "Imposti aspettative realistiche su tempi, progressione e mantenimento",
      "Sai cosa chiedere in consulenza per capire se il percorso è impostato bene",
    ],
    faqs: [
      {
        q: "Quante sedute servono davvero per vedere un cambiamento?",
        a: "Dipende da zona, tipo di pelo e risposta individuale. I risultati sono progressivi: spesso si vede una ricrescita più gestibile già nelle prime fasi, poi si lavora su continuità e stabilità. In consulenza ti diamo una stima realistica, e la ritaramo seduta dopo seduta.",
      },
      {
        q: "Posso iniziare anche se è estate o mi espongo al sole?",
        a: "Spesso sì, ma va gestita l'esposizione in modo sensato: protezione, attenzione ai tempi e scelta delle zone. Se hai dubbi, la guida su laser e sole chiarisce cosa fare senza complicarti la vita.",
      },
      {
        q: "Devo radermi prima della seduta? E ceretta/epilatore?",
        a: "Di solito sì: il rasoio è l'opzione più semplice prima del laser. Durante un percorso laser, in genere si evita l'epilazione a strappo (ceretta/epilatore/pinzette) perché interferisce con il ciclo del pelo. Ti diciamo noi tempistiche e regole in base alle zone.",
      },
      {
        q: "Fa male? Ho paura del fastidio su alcune zone.",
        a: "La percezione cambia da persona a persona e da zona a zona. In studio lavoriamo in modo graduale e su misura; Ice Polar aiuta molto sul comfort, ma la differenza vera la fa il settaggio corretto e la progressione.",
      },
      {
        q: "Quando serve il mantenimento?",
        a: "Il mantenimento non è uguale per tutti: dipende da ormoni, zona e risposta individuale. Per noi la regola è semplice: prima si costruisce la progressione, poi si decide un ritmo che ti viene naturale e che puoi tenere senza stress.",
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
    relatedCompetenceSlugs: [
      "laser-diodo-carmagnola",
      "epilazione-laser-viso-carmagnola-guida-realistica",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-inverno-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
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
      {
        heading: "Tra una seduta e l'altra: la gestione pratica fa metà del lavoro",
        paragraphs: [
          "Il percorso non è solo quello che succede in cabina. Conta anche cosa fai nei giorni successivi: come gestisci sole e protezione, che prodotti usi, e come tieni la pelle tranquilla.",
          "Noi preferiamo poche regole pratiche (chiare e applicabili): sono quelle che rendono il laser più facile da seguire e più stabile nel tempo.",
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
      "Guida pratica al laser diodo: cosa significa davvero, differenze con IPL e cosa guardare in consulenza (parametri, calendario, post-seduta).",
    longDescription:
      "Cosa significa davvero \"laser diodo\" per l'epilazione: differenze con IPL, cosa aspettarsi, come valutare un centro serio e come impostare un percorso coerente.",
    localAngle:
      "Ideale se stai confrontando diverse tecnologie prima di iniziare.",
    intent: "informational",
    benefits: [
      "Capisci la differenza tra laser e IPL senza marketing",
      "Sai quali domande fare in consulenza (parametri, calendario, post-seduta)",
      "Metti a fuoco limiti e aspettative (zone, tempi, risposta individuale)",
      "Scegli con più lucidità da dove partire (viso, corpo, zone prioritarie)",
    ],
    faqs: [
      {
        q: "Laser diodo e luce pulsata sono la stessa cosa?",
        a: "No. L'IPL è una luce a spettro ampio; il laser lavora con una lunghezza d'onda più specifica. Tradotto: cambiano impostazione, sensazioni e criteri di trattamento. Per questo non ha senso confrontarli solo a colpi di slogan.",
      },
      {
        q: "Il laser diodo è sempre adatto?",
        a: "Va valutato su pelle e pelo reali: fototipo, colore e spessore del pelo, zona e obiettivo. In alcune situazioni serve adattare parametri e calendario, e a volte è meglio rimandare (ad esempio dopo un'esposizione solare recente).",
      },
      {
        q: "Funziona anche sui peli molto chiari o sottili?",
        a: "In generale il laser è più efficace quando c'è contrasto tra pelo e pelle. Se il pelo è molto chiaro o molto fine, la risposta può essere diversa: in studio lo valutiamo e ti diciamo subito cosa aspettarti, senza promesse.",
      },
      {
        q: "Perché servono più sedute?",
        a: "Perché il pelo ha cicli diversi nel tempo e nelle diverse zone. Un percorso serio lavora per step: sedute distanziate, controllo e adattamenti. La costanza conta più della singola seduta \"forte\".",
      },
      {
        q: "Come capisco se un centro è affidabile, oltre alla tecnologia?",
        a: "Guarda metodo e chiarezza: valutazione iniziale, spiegazione di parametri e calendario, regole pratiche tra le sedute, e disponibilità a rispondere ai dubbi. La tecnologia da sola non basta se manca la gestione.",
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
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-viso-carmagnola-guida-realistica",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
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
          "Se desideri andare più nel dettaglio, trovi anche le guide su laser viso e laser corpo, oltre alle schede servizio con FAQ pratiche per partire senza dubbi.",
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
      "Una guida pratica per scegliere il trattamento viso giusto partendo dalla pelle di oggi (non dalla moda del momento). In Rebel lavoriamo per step: lettura iniziale, trattamento mirato e pochi consigli per mantenere il risultato anche a casa.",
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
        a: "Spesso tra 4 e 6 settimane, ma il ritmo giusto dipende da pelle, stagione e obiettivo. In studio lo rendiamo semplice: ti diciamo una frequenza che sta nella tua settimana, non una tabella impossibile.",
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
    relatedCompetenceSlugs: [
      "beauty-routine-carmagnola",
      "pulizia-viso-carmagnola-frequenza-benefici",
      "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
      "estetica-avanzata-carmagnola",
      "contorno-occhi-gonfiore-occhiaie-carmagnola",
      "pelle-matura-carmagnola-trattamenti-routine",
      "pelle-opaca-grana-irregolare-carmagnola",
      "tono-viso-ovale-carmagnola-percorso",
    ],
    relatedProtocolSlugs: ["catalysis-ritual", "rebel-lift-protocol", "collagen-code", "eye-genesis"],
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
          "Dopo la seduta ti indichiamo una micro-routine adatta a te: non ti complica la giornata, anche nelle settimane più piene.",
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
        a: "Dipende dall'obiettivo. Se cerchi leggerezza e gestione del gonfiore, spesso ha senso il linfodrenante; se vuoi sciogliere tensione e \"staccare\", il rilassante è perfetto. In studio scegliamo insieme senza giri di parole.",
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
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "linfodrenante-carmagnola-guida-pratica",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
      "beauty-routine-carmagnola",
    ],
    relatedProtocolSlugs: ["rebel-cell-regeneration"],
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
    title: "Drenaggio corpo a Carmagnola: gambe più leggere e percorso realistico",
    shortDescription:
      "Quando senti pesantezza o gonfiore: cosa facciamo, con che ritmo e cosa aspettarti (senza promesse gonfiate).",
    longDescription:
      "La parola \"drenaggio\" viene usata per tante cose diverse: per noi significa aiutarti a ritrovare una sensazione di leggerezza reale (soprattutto su gambe e corpo), con manualità e calendario coerenti con la tua vita. Qui trovi una guida concreta: come capire se è il trattamento giusto per il tuo periodo, quante sedute ha senso fare, cosa evitare tra una seduta e l'altra e come proteggere il risultato nel tempo. Nessuna corsa \"tutto e subito\": solo un percorso ordinato e sostenibile.",
    localAngle:
      "Utile soprattutto nei periodi in cui gonfiore e pesantezza si fanno sentire di più (caldo, molte ore in piedi, viaggi, settimane stressanti).",
    intent: "commercial",
    benefits: [
      "Ti aiuta a capire se il drenaggio ha senso per te (ora, non in teoria)",
      "Imposta un calendario realistico che riesci davvero a seguire",
      "Riduce gli errori più comuni che \"spengono\" l'effetto in poche ore",
      "Chiarisce differenze tra drenaggio, linfodrenante e massaggi più rilassanti",
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
        q: "Deve fare male per \"funzionare\"?",
        a: "No. Un drenaggio ben fatto non è una prova di resistenza: l'obiettivo è migliorare comfort e leggerezza senza lasciare il corpo in difesa. In studio regoliamo sempre intensità e manualità in base alla tua sensibilità.",
      },
      {
        q: "Meglio drenaggio generico o linfodrenante?",
        a: "Se cerchi un approccio più specifico, il linfodrenante è spesso la scelta più mirata. Abbiamo anche una guida dedicata: ti aiuta a capire quando ha davvero senso e come impostarlo bene.",
      },
      {
        q: "Cosa conviene fare nelle ore dopo la seduta?",
        a: "Semplificare: acqua, un minimo di movimento (anche una passeggiata) e niente eccessi immediati. Se ti alleni, ti diciamo come incastrarlo senza stressarti: spesso basta un po' di buon senso nelle prime ore.",
      },
      {
        q: "Ci sono casi in cui è meglio essere prudenti o chiedere un parere medico?",
        a: "Sì. Se hai condizioni cliniche particolari o situazioni recenti importanti, preferiamo valutare con attenzione e, se serve, chiederti un via libera medico. La qualità, per noi, è anche saper dire quando non è il momento giusto.",
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
    relatedCompetenceSlugs: [
      "trattamenti-corpo-carmagnola",
      "linfodrenante-carmagnola-guida-pratica",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
    ],
    editorialSections: [
      {
        heading: "Drenaggio: cosa intendiamo davvero (e cosa no)",
        paragraphs: [
          "Quando una persona dice \"mi serve drenaggio\", spesso intende una cosa semplice: sentirsi più leggera e meno gonfia, soprattutto su gambe e corpo. È un obiettivo reale, ma va impostato con aspettative corrette.",
          "Da Rebel non vendiamo miracoli o \"centimetri in un giorno\": impostiamo un percorso che migliora comfort e gestione quotidiana, con una progressione che puoi seguire davvero.",
        ],
      },
      {
        heading: "Calendario: il segreto non è fare tanto, è fare giusto",
        paragraphs: [
          "La domanda non è solo quante sedute, ma come distribuirle. Un calendario realistico evita l'effetto \"tutto subito\" e ti permette di capire cosa cambia davvero su di te.",
          "In studio impostiamo un ritmo iniziale e lo adattiamo: stagione, stress, lavoro e sport cambiano il corpo. Un percorso serio si aggiusta senza perdere il filo.",
        ],
      },
      {
        heading: "Tra una seduta e l'altra: 3 cose che salvano l'effetto",
        paragraphs: [
          "Spesso basta poco: acqua, un minimo di movimento e una routine corpo essenziale. Non ti riempiamo di regole: scegliamo insieme due o tre accorgimenti che riesci a fare davvero.",
          "Per un approfondimento più specifico, la guida sul linfodrenante entra nei dettagli e ti aiuta a capire quando è la scelta migliore e come impostarla in modo ordinato.",
        ],
      },
      {
        heading: "Da Rebel: drenaggio come parte di un percorso corpo (non come seduta isolata)",
        paragraphs: [
          "Quando serve, integriamo il drenaggio con trattamenti corpo semplici (ad esempio scrub) o con sedute di relax, per un approccio più completo e piacevole.",
          "Il punto è sempre lo stesso: creare un piano che ti faccia stare meglio e che tu riesca a seguire nel tempo, senza trasformarlo in un impegno infinito.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
      {
        label: "NHS - Oedema (swelling)",
        url: "https://www.nhs.uk/conditions/oedema/",
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
      "pedicure-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "trattamenti-corpo-carmagnola",
      "pulizia-viso-carmagnola-frequenza-benefici",
      "scrub-corpo-carmagnola-quando-farlo",
      "epilazione-laser-estate-sole-carmagnola",
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
          "Se devi cambiare routine, lo facciamo in modo ordinato: un passaggio alla volta, così capiamo cosa funziona davvero su di te.",
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
        a: "Parliamo di riduzione progressiva e prolungata della ricrescita. In molti casi ci sono richiami nel tempo: non è una promessa \"una volta e via\", è un percorso gestito bene.",
      },
      {
        q: "Ogni quanto si fanno le sedute viso?",
        a: "Il calendario si imposta su intervalli di alcune settimane e si adatta in base a zona, tipo di pelo e risposta della pelle. Il punto è la costanza: un ritmo chiaro batte una seduta \"a caso\".",
      },
      {
        q: "Come mi preparo prima della seduta (viso)?",
        a: "Ti diamo indicazioni semplici in base alla zona: di solito si arriva con pelle pulita e senza improvvisare con ceretta/epilatore nei giorni prima. Se usi attivi forti in skincare, diccelo: preferiamo gestirli in modo ordinato, non a intuito.",
      },
      {
        q: "Cosa succede dopo la seduta? Posso truccarmi?",
        a: "Dipende da come reagisce la tua pelle. In genere puntiamo a un post semplice: comfort, pochi prodotti e protezione. Se hai un evento, lo pianifichiamo: sul viso la serenità vale più della fretta.",
      },
      {
        q: "E se ho pelle sensibile o una zona già irritata?",
        a: "Non è un \"no\" automatico, ma è una valutazione: si decide intensità, parametri e timing con prudenza. Se serve, si rimanda o si rende la seduta più soft: l'obiettivo è una pelle tranquilla, non una pelle stressata.",
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
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "laser-uomo-carmagnola-guida-pratica",
    ],
    heroImage: {
      src: editorialImageAssets.laserViso,
      alt: "Laser viso: estetista in cabina, focus su zone delicate (baffetti/mento), atmosfera pulita e rassicurante.",
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
        heading: "Zone viso: baffetti, mento, basette (e perché i tempi possono cambiare)",
        paragraphs: [
          "Sul viso non esiste una sola \"zona\". Ogni area ha densità, sensibilità e abitudini diverse (rasatura, skincare, trucco). È normale che il percorso venga personalizzato anche solo cambiando punto di partenza.",
          "Il nostro lavoro è rendere tutto chiaro: cosa trattiamo, con che priorità, e come leggiamo i progressi seduta dopo seduta.",
        ],
      },
      {
        heading: "Preparazione e post: poche regole, ma pensate per la tua pelle",
        paragraphs: [
          "La qualità del percorso si vede anche tra le sedute: niente esperimenti aggressivi, attenzione al sole e una routine più semplice quando serve.",
          "Ti diciamo noi cosa fare (e cosa evitare) in modo pratico: il laser deve semplificarti la vita, non complicartela.",
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
        a: "Sì, quando c'è una strategia: priorità, timing e gestione della pelle. In consulenza definiamo cosa ha senso fare insieme e cosa conviene scaglionare per restare costanti.",
      },
      {
        q: "Estate e laser sono incompatibili?",
        a: "Non in assoluto. Serve una gestione attenta di esposizione e protezione, e soprattutto un calendario pensato. Se hai vacanze o sport all'aperto, lo impostiamo insieme senza stress.",
      },
      {
        q: "Da quali zone conviene partire se ho poco tempo o budget?",
        a: "Da quelle che ti cambiano davvero la routine: zone più visibili, più fastidiose o con peli incarniti frequenti. Partire bene è meglio che partire da tutto e mollare dopo due sedute.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o epilatore?",
        a: "In genere no, perché l'epilazione a strappo interferisce con il ciclo del pelo. Per tenere ordine tra le sedute si usa di solito il rasoio: ti spieghiamo noi il perché e le tempistiche.",
      },
      {
        q: "Quante sedute servono per il laser corpo?",
        a: "Dipende da zona, tipo di pelo e risposta individuale. La cosa importante è leggere i cambiamenti nel tempo e non inseguire promesse: un percorso serio è progressivo e si adatta.",
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
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-inguine-carmagnola-guida-pratica",
      "epilazione-laser-ascelle-carmagnola-guida-pratica",
    ],
    heroImage: {
      src: editorialImageAssets.laserCorpo,
      alt: "Laser corpo: manipolo e cabina, concetto di progressione zona per zona e calendario sedute ordinato.",
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
        heading: "Stagionalità, sole e vacanze: come si gestiscono senza ansia",
        paragraphs: [
          "Il punto non è \"si può\" o \"non si può\". Il punto è come lo gestisci: esposizione, protezione, timing e buon senso nei giorni vicini alla seduta.",
          "Se hai già in mente mare, montagna o sport intenso, lo mettiamo sul tavolo subito: un calendario realistico vale più di un calendario perfetto sulla carta.",
        ],
      },
      {
        heading: "Post-seduta e routine corpo: la semplicità è la scelta più elegante",
        paragraphs: [
          "Tra una seduta e l'altra non serve fare mille cose: serve evitare gli errori classici e tenere la pelle tranquilla. È così che il percorso scorre senza intoppi.",
          "Quando vuoi, ti suggeriamo una micro-routine corpo che riesci a mantenere davvero: pochi gesti, coerenti con la stagione.",
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
    slug: "epilazione-laser-inguine-carmagnola-guida-pratica",
    title: "Laser inguine a Carmagnola: fastidio, preparazione e tempi",
    shortDescription:
      "Guida pratica su laser inguine (classico o totale): come prepararti, cosa evitare e come impostare un calendario realistico.",
    longDescription:
      "Se stai valutando il laser inguine a Carmagnola, qui trovi risposte pratiche: fastidio (e comfort con Ice Polar), preparazione, post-seduta e differenza tra inguine classico e totale. L'obiettivo è partire con un piano chiaro, non con dubbi confusi.",
    localAngle:
      "Una delle zone più richieste: utile se vuoi sentirti a tuo agio già dalla prima seduta.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a scegliere tra inguine classico e totale in base alla tua quotidianità",
      "Chiarisce preparazione e regole tra le sedute (rasoio, sole, prodotti)",
      "Imposta aspettative realistiche su tempi, progressione e mantenimento",
    ],
    faqs: [
      {
        q: "Il laser inguine fa male?",
        a: "La percezione varia da persona a persona e la zona è più sensibile rispetto ad altre. In studio lavoriamo in modo graduale e su misura; Ice Polar aiuta molto sul comfort, ma la differenza vera la fa il settaggio corretto e una progressione ordinata.",
      },
      {
        q: "Devo radermi prima della seduta?",
        a: "Di solito sì: il rasoio è l'opzione più semplice prima del laser. In prenotazione ti diciamo tempistiche e cosa evitare, così arrivi tranquilla e senza improvvisare.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta o epilatore?",
        a: "In genere no, perché l'epilazione a strappo interferisce con il ciclo del pelo. Per gestire l'ordine tra le sedute si usa di solito il rasoio: ti spieghiamo noi le regole per la zona inguine.",
      },
      {
        q: "Posso fare il laser inguine in estate?",
        a: "Spesso sì, ma va gestita l'esposizione in modo sensato: protezione, timing e attenzione ai giorni immediatamente vicini alla seduta. Se hai vacanze in programma, lo pianifichiamo insieme.",
      },
      {
        q: "Inguine classico o inguine totale: come si decide?",
        a: "Si decide su obiettivo e comfort. Alcune persone preferiscono iniziare dal classico e poi valutare; altre vogliono subito il totale. La scelta migliore è quella che riesci a seguire con serenità nel calendario.",
      },
    ],
    keywords: [
      "laser inguine Carmagnola",
      "epilazione laser inguine Carmagnola",
      "laser bikini Carmagnola",
      "laser inguine totale Carmagnola",
    ],
    relatedServiceSlugs: ["epilazione-laser-corpo-carmagnola"],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserInguineGuida,
      alt: "Laser inguine: guida pratica con focus su comfort, preparazione e aspettative realistiche.",
    },
    editorialSections: [
      {
        heading: "Perché l'inguine è una zona particolare (e perché serve metodo)",
        paragraphs: [
          "Sull'inguine la differenza la fa la gestione: pelle più sensibile, abitudini diverse (sport, intimo, mare) e una soglia di comfort che cambia molto da persona a persona.",
          "Per questo un percorso serio non parte con promesse: parte con una valutazione, un settaggio su misura e un calendario che puoi seguire davvero.",
        ],
      },
      {
        heading: "Comfort: Ice Polar aiuta, ma la progressione è la parte decisiva",
        paragraphs: [
          "Ice Polar migliora il comfort durante la seduta, soprattutto in una zona delicata. Ma non è una bacchetta magica: il cuore è lavorare in modo graduale, ascoltando la risposta della pelle.",
          "Quando la seduta è impostata bene, anche il post è più semplice e la pelle resta più tranquilla.",
        ],
      },
      {
        heading: "Preparazione e post-seduta: poche regole, ma fatte bene",
        paragraphs: [
          "Il punto non è avere una checklist infinita. Il punto è non fare errori classici: epilazione a strappo tra le sedute, prodotti aggressivi, esposizione non gestita.",
          "In studio ti lasciamo regole pratiche in base alla tua routine (sport, mare, lavoro), così non devi indovinare.",
        ],
      },
      {
        heading: "Calendario: quante sedute e perché conta la costanza",
        paragraphs: [
          "Il laser è un percorso: si lavora con i cicli del pelo e con la risposta individuale. Per questo i tempi cambiano da persona a persona.",
          "La cosa che aiuta di più è avere un calendario coerente e mantenerlo: meno salti, più risultati leggibili seduta dopo seduta.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal preparation",
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
    ],
  },
  {
    slug: "epilazione-laser-ascelle-carmagnola-guida-pratica",
    title: "Laser ascelle a Carmagnola: quante sedute e cosa aspettarti",
    shortDescription:
      "Una guida pratica per le ascelle: calendario, preparazione e gestione della pelle tra una seduta e l'altra.",
    longDescription:
      "Il laser ascelle è una delle richieste più frequenti perché semplifica la quotidianità: meno ricrescita da inseguire e una pelle più tranquilla nel tempo. Qui trovi cosa aspettarti, come prepararti e come impostare un percorso ordinato.",
    localAngle:
      "Ottima per partire da una zona piccola ma molto \"strategica\" nella routine di tutti i giorni.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a impostare un calendario realistico per le ascelle",
      "Chiarisce cosa fare prima e dopo la seduta (deodorante, sport, sole)",
      "Riduce confusione tra promesse online e metodo reale in studio",
    ],
    faqs: [
      {
        q: "Posso mettere il deodorante prima della seduta?",
        a: "Dipende dal tipo di prodotto. In prenotazione ti diciamo cosa evitare e quando, così arrivi preparata senza complicazioni.",
      },
      {
        q: "Dopo il laser ascelle posso allenarmi?",
        a: "Spesso sì, ma nelle ore subito successive è meglio evitare calore e sfregamenti eccessivi se la pelle è sensibile. Ti diamo indicazioni pratiche in base a come reagisci.",
      },
      {
        q: "Quante sedute servono per le ascelle?",
        a: "Dipende da risposta individuale e tipo di pelo. I cambiamenti sono progressivi: la cosa importante è la costanza del calendario e l'adattamento dei parametri seduta dopo seduta.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta?",
        a: "In genere si evita l'epilazione a strappo durante un percorso laser perché interferisce con il ciclo del pelo. Di solito si usa il rasoio e si seguono poche regole pratiche.",
      },
    ],
    keywords: [
      "laser ascelle Carmagnola",
      "epilazione laser ascelle Carmagnola",
      "epilazione ascelle Carmagnola",
    ],
    relatedServiceSlugs: ["epilazione-laser-corpo-carmagnola"],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserAscelleGuida,
      alt: "Laser ascelle: gestione pratica tra sedute, comfort e calendario sostenibile.",
    },
    editorialSections: [
      {
        heading: "Perché le ascelle sono una zona \"furba\" da cui partire",
        paragraphs: [
          "È una zona piccola, quindi è facile seguire il calendario e capire subito come vivi la seduta. E spesso è proprio quello che serve per partire: un percorso ordinato che non ti stressa.",
          "Quando la gestione è chiara, il laser diventa semplice: sedute distanziate bene e poche regole tra un appuntamento e l'altro.",
        ],
      },
      {
        heading: "Preparazione e post: la pelle resta più tranquilla se non fai esperimenti",
        paragraphs: [
          "Tra i motivi per cui una zona si irrita ci sono quasi sempre eccessi: prodotti aggressivi, sfregamenti, calore, o depilazione a strappo nel momento sbagliato.",
          "Noi preferiamo darti regole pratiche e personalizzate: così la pelle resta confortevole e il percorso scorre meglio.",
        ],
      },
      {
        heading: "Calendario: costanza > seduta singola",
        paragraphs: [
          "Il risultato non arriva perché una seduta è \"forte\". Arriva perché il percorso è coerente: sedute distanziate bene e parametri adattati alla risposta della pelle.",
          "Se cambi lavoro, stagione o abitudini, si ritarano le sedute: senza perdere la direzione.",
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
    ],
  },
  {
    slug: "laser-uomo-carmagnola-guida-pratica",
    title: "Laser uomo a Carmagnola: barba, schiena e zone più richieste",
    shortDescription:
      "Guida per uomini: cosa cambia, quali zone sono più richieste (barba/collo/schiena) e come impostare un calendario realistico.",
    longDescription:
      "Il laser uomo non è \"un'altra cosa\": è lo stesso metodo, ma cambia spesso la zona (barba/collo, schiena, torace) e cambia la gestione della pelle tra una seduta e l'altra. Qui trovi un orientamento pratico per partire bene e senza aspettative sbagliate.",
    localAngle:
      "Utile se cerchi a Carmagnola un percorso laser seguito e non vuoi perdere tempo in tentativi.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a capire come impostare un percorso su barba/collo o schiena",
      "Chiarisce aspettative realistiche su tempi, progressione e mantenimento",
      "Spiega come gestire rasatura e pelle tra una seduta e l'altra",
    ],
    faqs: [
      {
        q: "Si può fare il laser sulla barba?",
        a: "Dipende dall'obiettivo: riduzione, ordine, gestione della ricrescita. In consulenza capiamo cosa vuoi ottenere e impostiamo parametri e calendario in modo coerente.",
      },
      {
        q: "Schiena e torace richiedono più tempo?",
        a: "Sono zone ampie e la risposta cambia da persona a persona. Per questo si parte con una strategia chiara (priorità + calendario) e si adatta seduta dopo seduta.",
      },
      {
        q: "Tra una seduta e l'altra posso radermi?",
        a: "Di solito sì: il rasoio è la scelta più semplice durante un percorso laser. Evitiamo invece l'epilazione a strappo perché interferisce con il ciclo del pelo.",
      },
      {
        q: "Posso iniziare anche se mi espongo al sole per lavoro o sport?",
        a: "Spesso sì, ma va gestito bene. La guida su laser e sole chiarisce cosa considerare e quando conviene distanziare una seduta.",
      },
    ],
    keywords: [
      "laser uomo Carmagnola",
      "epilazione laser uomo Carmagnola",
      "laser barba Carmagnola",
      "laser schiena Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-uomo-carmagnola",
      "epilazione-laser-corpo-uomo-carmagnola",
      "epilazione-laser-viso-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "laser-barba-collo-carmagnola-guida-pratica",
      "laser-schiena-carmagnola-guida-pratica",
      "laser-gambe-carmagnola-guida-pratica",
    ],
    editorialSections: [
      {
        heading: "Barba e collo: l'obiettivo conta più del \"nome\" della zona",
        paragraphs: [
          "C'è chi vuole ridurre la ricrescita, chi vuole solo mettere ordine e chi vuole gestire irritazioni da rasatura. Sono obiettivi diversi e cambiano il modo in cui si imposta il percorso.",
          "La prima cosa è parlarne chiaro: poi si decide una priorità e si costruisce una progressione che abbia senso.",
        ],
      },
      {
        heading: "Schiena e aree ampie: strategia e calendario prima di tutto",
        paragraphs: [
          "Sulle aree grandi la tentazione è fare tutto insieme e subito. In realtà funziona meglio una strategia pulita: calendario realistico e controlli, così il percorso resta gestibile.",
          "Se serve, si possono concentrare più zone in una giornata, ma solo se ha senso per tempi e tollerabilità.",
        ],
      },
      {
        heading: "Gestione tra le sedute: la parte che ti fa vivere bene il percorso",
        paragraphs: [
          "Tra una seduta e l'altra contano le cose semplici: sole, prodotti, rasatura, sport. Se sai cosa fare, la pelle resta più tranquilla e il percorso scorre.",
          "Noi puntiamo a regole pratiche, non a divieti inutili: così riesci davvero a essere costante.",
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
    ],
  },
  {
    slug: "laser-barba-collo-carmagnola-guida-pratica",
    title: "Laser barba e collo a Carmagnola: ordine, rasatura e calendario",
    shortDescription:
      "Guida pratica su barba/collo: cosa aspettarti, come gestire la rasatura e come impostare un percorso coerente.",
    longDescription:
      "Il laser su barba e collo si imposta in base all'obiettivo (riduzione, ordine della ricrescita, gestione irritazioni da rasatura). Qui trovi una guida concreta: cosa chiedere in consulenza, come prepararti, cosa fare tra una seduta e l'altra e come evitare errori che complicano il percorso.",
    localAngle:
      "Pensata per chi vuole una gestione più comoda della rasatura e uno stile più ordinato, senza improvvisare.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a chiarire obiettivo: ridurre o mettere ordine sulla ricrescita",
      "Spiega come gestire rasatura e pelle tra le sedute senza confusione",
      "Imposta aspettative realistiche su tempi, progressione e mantenimento",
    ],
    faqs: [
      {
        q: "È possibile fare laser sulla barba senza \"rovinare\" la forma?",
        a: "Sì, quando l'obiettivo è ordine e gestione della ricrescita: si scelgono zone e priorità in modo preciso. In consulenza capiamo insieme cosa vuoi ottenere e cosa è sensato fare.",
      },
      {
        q: "Tra una seduta e l'altra posso radermi?",
        a: "Di solito sì: il rasoio è la scelta più semplice durante un percorso laser. In genere si evita invece l'epilazione a strappo perché interferisce con il ciclo del pelo.",
      },
      {
        q: "Come si gestiscono irritazioni e follicolite da rasatura?",
        a: "Prima si mette ordine: routine più semplice, niente prodotti aggressivi, e regole pratiche tra le sedute. Se la pelle è irritata, si imposta il percorso con gradualità e si adatta il calendario.",
      },
      {
        q: "È una zona più sensibile?",
        a: "Spesso sì, soprattutto su collo e contorni. Ice Polar aiuta il comfort, e noi lavoriamo in modo graduale: settaggio su misura e progressione pulita.",
      },
    ],
    keywords: [
      "laser barba Carmagnola",
      "laser collo uomo Carmagnola",
      "epilazione laser barba Carmagnola",
      "laser barba e collo Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-viso-uomo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola-guida-pratica",
      "peli-incarniti-laser-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Prima di tutto: obiettivo e confini della zona",
        paragraphs: [
          "Sulla barba non esiste una soluzione uguale per tutti. C'è chi vuole ridurre molto, chi vuole solo mettere ordine su collo e contorni, chi vuole gestire irritazioni ricorrenti.",
          "La parte importante è decidere una priorità e impostare un percorso coerente: zone scelte bene + calendario sostenibile.",
        ],
      },
      {
        heading: "Rasatura tra le sedute: la gestione che rende il percorso vivibile",
        paragraphs: [
          "Se la gestione tra le sedute è confusa, il percorso si inceppa. Noi preferiamo poche regole pratiche: cosa fare, cosa evitare e come tenere la pelle tranquilla.",
          "È la differenza tra un percorso ordinato e una sequenza di tentativi.",
        ],
      },
      {
        heading: "Comfort e progressione: Ice Polar aiuta, ma il metodo decide",
        paragraphs: [
          "Ice Polar migliora il comfort, ma la vera differenza è il settaggio: gradualità e adattamento alla risposta della pelle.",
          "Se la pelle cambia (stagione, stress, sport), si ritarano parametri e ritmo senza perdere la direzione.",
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
    ],
  },
  {
    slug: "laser-schiena-carmagnola-guida-pratica",
    title: "Laser schiena a Carmagnola: strategia, tempi e gestione delle aree ampie",
    shortDescription:
      "Una guida concreta per la schiena: come impostare il percorso, cosa aspettarti e come organizzare il calendario.",
    longDescription:
      "Sulla schiena la differenza la fa l'organizzazione: zona ampia, risposta individuale variabile e bisogno di un calendario realistico. Qui trovi come impostiamo un percorso serio (priorità, controlli, post-seduta) e cosa chiedere prima di iniziare.",
    localAngle:
      "Ideale se vuoi smettere di inseguire la ricrescita e preferisci un percorso chiaro e seguito nel tempo.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a impostare un calendario realistico sulle aree ampie",
      "Chiarisce cosa fare tra una seduta e l'altra per tenere la pelle tranquilla",
      "Riduce confusione su tempi e aspettative (progressione reale)",
    ],
    faqs: [
      {
        q: "Devo radermi prima della seduta schiena?",
        a: "Di solito sì: il rasoio è l'opzione più semplice. Se serve, ti diciamo tempistiche e cosa evitare, così non improvvisi.",
      },
      {
        q: "Quanto dura una seduta su una zona ampia?",
        a: "Dipende dall'estensione e dalle zone incluse (schiena alta/bassa/spalle). In consulenza ti diciamo tempi realistici e cosa conviene trattare per primo.",
      },
      {
        q: "Il laser schiena è doloroso?",
        a: "La percezione varia. Lavoriamo in modo graduale e su misura; Ice Polar aiuta sul comfort, e il settaggio viene adattato alla risposta della pelle.",
      },
      {
        q: "Posso fare più zone nello stesso appuntamento?",
        a: "Spesso sì, ma conviene farlo con criterio: priorità e tempi. A volte è più utile partire da una zona e poi aggiungere il resto.",
      },
    ],
    keywords: [
      "laser schiena Carmagnola",
      "epilazione laser schiena Carmagnola",
      "laser spalle Carmagnola",
      "laser corpo uomo Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-uomo-carmagnola",
      "epilazione-laser-corpo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "laser-uomo-carmagnola-guida-pratica",
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Aree ampie: calendario prima di tutto",
        paragraphs: [
          "Sulla schiena la cosa più importante è non improvvisare. Un percorso serio parte da una strategia: cosa trattare per primo, con che ritmo, e come gestire i periodi con più sole o sport.",
          "Un calendario realistico è quello che puoi seguire: è lì che si costruiscono risultati più stabili.",
        ],
      },
      {
        heading: "Post-seduta e vita reale: sport, doccia, sole",
        paragraphs: [
          "Tra una seduta e l'altra contano le abitudini: calore, sfregamenti, esposizione. Ti diamo indicazioni pratiche in base a come vivi la settimana.",
          "Il punto è tenere la pelle tranquilla, così il percorso scorre senza intoppi.",
        ],
      },
      {
        heading: "Progressione: parametri su misura e controlli",
        paragraphs: [
          "La risposta cambia da persona a persona. Per questo monitoriamo e aggiustiamo: la qualità sta nella continuità e nella precisione, non nella singola seduta.",
          "Puoi partire dalla schiena e poi includere altre aree: l'importante è tenere il filo del piano.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal preparation",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
    ],
  },
  {
    slug: "laser-gambe-carmagnola-guida-pratica",
    title: "Laser gambe a Carmagnola: tempi, ricrescita e mantenimento",
    shortDescription:
      "Guida pratica sulle gambe: calendario, cosa aspettarti davvero e come gestire sole, sport e routine tra le sedute.",
    longDescription:
      "Il laser gambe è spesso scelto per comodità: meno ricrescita da inseguire e gestione più semplice nel tempo. Qui trovi cosa aspettarti, come impostare un calendario realistico e come gestire il percorso nei mesi più luminosi senza stress.",
    localAngle:
      "Ideale per iniziare dalle gambe e avere un piano pulito che sta nella tua routine.",
    intent: "commercial",
    benefits: [
      "Chiarisce tempi e progressione (senza promesse veloci)",
      "Aiuta a impostare un calendario realistico su gambe (mezze o intere)",
      "Spiega come gestire sole e post-seduta con buon senso",
    ],
    faqs: [
      {
        q: "Meglio partire da mezza gamba o gamba intera?",
        a: "Dipende da obiettivo e budget. Spesso partire da una priorità è più facile da seguire, poi si amplia. In consulenza ti diciamo cosa conviene fare per te.",
      },
      {
        q: "Quante sedute servono per le gambe?",
        a: "Dipende da risposta individuale e dalla zona. I cambiamenti sono progressivi: conta la costanza del calendario e l'adattamento dei parametri nel tempo.",
      },
      {
        q: "Posso fare il laser gambe in estate?",
        a: "Spesso sì, ma va gestita l'esposizione. La guida su laser e sole ti aiuta a capire quando programmare e quando distanziare una seduta.",
      },
      {
        q: "Tra una seduta e l'altra posso fare ceretta?",
        a: "In genere si evita l'epilazione a strappo durante un percorso laser. Di solito si usa il rasoio e si seguono poche regole pratiche per la pelle.",
      },
    ],
    keywords: [
      "laser gambe Carmagnola",
      "epilazione laser gambe Carmagnola",
      "laser mezza gamba Carmagnola",
      "laser gamba intera Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-corpo-uomo-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-corpo-carmagnola-zone-tempi",
      "epilazione-laser-estate-sole-carmagnola",
      "peli-incarniti-laser-carmagnola",
      "laser-diodo-carmagnola",
      "epilazione-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserGambeGuida,
      alt: "Laser gambe: strategia, stagionalita e mantenimento con piano realistico.",
    },
    editorialSections: [
      {
        heading: "Gambe: la comodità arriva quando il calendario è coerente",
        paragraphs: [
          "Sulle gambe è facile partire con entusiasmo e poi mollare. Il modo migliore per evitarlo è impostare un calendario realistico fin da subito.",
          "Noi preferiamo poche regole chiare e una progressione leggibile: così sai sempre dove sei nel percorso.",
        ],
      },
      {
        heading: "Estate e routine: come non incasinarsi",
        paragraphs: [
          "Tra sole, weekend fuori e sport, il percorso va pianificato. Non serve ansia: serve buon senso e indicazioni pratiche.",
          "Se hai periodi di esposizione intensa, si ritarano sedute e zone, mantenendo la direzione.",
        ],
      },
      {
        heading: "Post-seduta: pelle tranquilla = percorso più semplice",
        paragraphs: [
          "La pelle resta più comoda quando eviti eccessi: niente prodotti aggressivi, attenzione a calore e sfregamenti se sei sensibile.",
          "Se hai dubbi, ci scrivi: è così che il percorso resta pulito e senza intoppi.",
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
    ],
  },
  {
    slug: "epilazione-laser-estate-sole-carmagnola",
    title: "Laser in estate a Carmagnola: sole, SPF e calendario senza ansia",
    shortDescription:
      "Quando si può fare, cosa evitare e come pianificare vacanze e sedute in modo sensato.",
    longDescription:
      "Una guida pratica per gestire laser e sole: non è una questione di divieti assoluti, ma di calendario e protezione. Qui trovi cosa chiedere prima di iniziare e come muoverti tra una seduta e l'altra.",
    localAngle:
      "Pensata per chi vive a Carmagnola (o arriva dai comuni vicini) e vuole programmare il laser senza complicarsi l'estate.",
    intent: "informational",
    benefits: [
      "Chiarisce come gestire sole, SPF e vacanze senza stress",
      "Aiuta a capire quando conviene rimandare e quando si può programmare",
      "Rende più semplice tenere un calendario coerente tra sedute",
    ],
    faqs: [
      {
        q: "Si può fare il laser in estate?",
        a: "Dipende da esposizione, abitudini e zona. Non è un no automatico: in consulenza pianifichiamo calendario e protezione in base ai tuoi impegni.",
      },
      {
        q: "Se ho preso sole o mi sono abbronzata devo fermarmi?",
        a: "A volte sì, a volte basta distanziare la seduta. La scelta dipende da quanto è recente/intensa l'esposizione e da come sta la pelle.",
      },
      {
        q: "SPF: quanto conta davvero?",
        a: "Conta molto. La protezione riduce rischi di irritazione e discromie e ti aiuta a vivere il percorso con più tranquillità, soprattutto nei mesi luminosi.",
      },
      {
        q: "Posso programmare il laser prima di una vacanza?",
        a: "Spesso sì, ma va fatto con criterio: meglio decidere insieme timing e zone, così non ti ritrovi a cambiare piano all'ultimo.",
      },
    ],
    keywords: [
      "laser estate Carmagnola",
      "epilazione laser estate Carmagnola",
      "laser e sole Carmagnola",
      "laser prima vacanze Carmagnola",
      "SPF dopo laser Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-inverno-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "laser-gambe-carmagnola-guida-pratica",
      "epilazione-laser-inguine-carmagnola-guida-pratica",
      "epilazione-laser-ascelle-carmagnola-guida-pratica",
    ],
    heroImage: {
      src: editorialImageAssets.laserSoleGuida,
      alt: "Laser e sole: agenda/calendario, SPF e luce estiva, concetto di gestione stagionalità senza ansia.",
    },
    editorialSections: [
      {
        heading: "La verità semplice: laser e sole non vanno improvvisati",
        paragraphs: [
          "Il tema non è \"si può\" o \"non si può\". Il tema è: come sta la pelle, quanta esposizione hai in programma e quanto vuoi essere costante con il percorso.",
          "Quando il calendario è pensato bene (e non deciso di corsa), il laser diventa gestibile anche nei mesi più luminosi.",
        ],
      },
      {
        heading: "Vacanze, weekend fuori e abitudini reali: da qui si decide",
        paragraphs: [
          "In consulenza chiediamo sempre due cose: quando sei al sole e come ti proteggi. Non per giudicare, ma per costruire un piano che funzioni davvero per te.",
          "Se sai già che avrai giornate piene di sole, possiamo scegliere zone prioritarie e momenti più comodi, senza rovinarti l'estate.",
        ],
      },
      {
        heading: "Protezione: poche cose fatte bene (SPF, abbigliamento, buon senso)",
        paragraphs: [
          "La protezione non è una mania: è la base per tenere la pelle tranquilla e ridurre il rischio di irritazioni o macchie.",
          "Meglio una routine semplice e costante che dieci prodotti usati a caso. Se hai dubbi, te la impostiamo in modo pulito.",
        ],
      },
      {
        heading: "Quando conviene rimandare",
        paragraphs: [
          "Se la pelle è molto abbronzata o irritata, spesso conviene aspettare. Rimandare una seduta può essere la scelta più intelligente per non creare problemi dopo.",
          "Un percorso ben fatto è flessibile: l'obiettivo è arrivare al risultato, non fare sedute \"a tutti i costi\".",
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
        label: "NHS - Laser hair removal",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "epilazione-laser-inverno-carmagnola",
    title: "Laser in inverno a Carmagnola: perché conviene e come impostare il calendario",
    shortDescription:
      "In inverno è spesso il periodo più facile per essere costanti: meno sole, meno imprevisti e più continuità. Qui trovi come partire bene e tenere il filo fino alla primavera.",
    longDescription:
      "Molte persone iniziano il laser in inverno perché è il periodo più semplice per tenere un calendario: meno esposizione, meno weekend \"al sole\" e più margine per fare le cose con calma. In questa guida trovi come scegliere le zone da cui partire, come gestire rasatura e pelle secca, e come collegare inverno e primavera senza perdere la direzione.",
    localAngle:
      "Pensata per chi vive a Carmagnola e dintorni e vuole arrivare ai mesi più luminosi con un percorso già impostato (senza corse all'ultimo).",
    intent: "informational",
    benefits: [
      "Ti aiuta a scegliere le zone prioritarie senza fare tutto insieme",
      "Chiarisce come gestire pelle secca, rasatura e post-seduta in inverno",
      "Rende più semplice pianificare primavera/estate senza interrompere il percorso",
    ],
    faqs: [
      {
        q: "Quanto prima dell'estate conviene iniziare?",
        a: "Prima inizi con un calendario coerente, più arrivi avanti. Non esiste una data magica: in consulenza si decide in base a zone, esposizione e abitudini, senza ansia e senza promesse veloci.",
      },
      {
        q: "In inverno la pelle è più secca: è un problema?",
        a: "Non per forza, ma va gestita. In studio ti diciamo come tenere la pelle confortevole tra una seduta e l'altra (senza caricarla di prodotti inutili).",
      },
      {
        q: "Che zone conviene fare per prime?",
        a: "Spesso ascelle e inguine sono ottime priorità, perché cambiano davvero la gestione quotidiana. Se preferisci partire dalle gambe, si può: l'importante è scegliere un ordine e seguirlo.",
      },
      {
        q: "Se faccio sport posso comunque iniziare in inverno?",
        a: "Sì. L'idea è pianificare bene e gestire calore/sfregamenti nel post-seduta. Se ti alleni spesso, la guida su laser e palestra entra nei dettagli pratici.",
      },
      {
        q: "In inverno posso ignorare la protezione?",
        a: "Meglio di no: anche nei mesi freddi la pelle va trattata con buon senso (soprattutto se ti esponi o usi attivi). Ti diamo indicazioni semplici e adatte alla tua routine.",
      },
    ],
    keywords: [
      "laser inverno Carmagnola",
      "epilazione laser inverno Carmagnola",
      "quando iniziare laser Carmagnola",
      "laser primavera Carmagnola",
      "calendario sedute laser Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "laser-diodo-carmagnola",
      "laser-e-palestra-sport-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "epilazione-laser-inguine-carmagnola-guida-pratica",
      "epilazione-laser-ascelle-carmagnola-guida-pratica",
      "laser-gambe-carmagnola-guida-pratica",
      "peli-incarniti-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserInvernoGuida,
      alt: "Laser in inverno: calendario sedute, luce invernale morbida, concetto di costanza e continuità.",
    },
    editorialSections: [
      {
        heading: "Perché tante persone partono in inverno (ed è una scelta intelligente)",
        paragraphs: [
          "In inverno è più facile essere costanti: la pelle è meno esposta al sole e la vita ha meno \"interruzioni\" legate a vacanze e weekend lunghi. Questo rende più semplice tenere il calendario.",
          "Il laser premia la continuità. Iniziare in inverno vuol dire dare tempo al percorso di ingranare, senza fare tutto di fretta a ridosso dell'estate.",
        ],
      },
      {
        heading: "Scegliere l'ordine delle zone: la parte che evita confusione",
        paragraphs: [
          "La tentazione è partire da tutto insieme. Funziona meglio scegliere una priorità (o due) e impostare un ritmo che puoi rispettare davvero.",
          "Ascelle e inguine sono spesso scelte molto pratiche. Se invece il tuo obiettivo sono le gambe, si lavora su calendario e gestione della stagione: l'importante è non perdere il filo.",
        ],
      },
      {
        heading: "Pelle secca, docce calde e attrito: come gestire l'inverno senza stress",
        paragraphs: [
          "Tra freddo, docce calde e tessuti più pesanti, la pelle può essere più reattiva. Non è un problema: basta gestirlo con poche regole chiare.",
          "Noi puntiamo al comfort: se la pelle cambia, si adatta anche il piano (parametri, timing e accorgimenti tra le sedute).",
        ],
      },
      {
        heading: "Dall'inverno alla primavera: mantenere direzione e flessibilità",
        paragraphs: [
          "Quando la stagione cambia, non si butta via tutto: si ritarano sedute e abitudini con buon senso. Così arrivi ai mesi più luminosi con un percorso già stabile.",
          "Se ti esponi di più o hai sport all'aperto, lo si mette nel piano. L'obiettivo è rendere il percorso sostenibile, non perfetto sulla carta.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        label: "Mayo Clinic - Laser hair removal (after the procedure)",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - Laser hair removal",
        url: "https://www.nhs.uk/conditions/cosmetic-procedures/non-surgical-cosmetic-procedures/laser-hair-removal/",
      },
    ],
  },
  {
    slug: "laser-e-palestra-sport-carmagnola",
    title: "Laser e palestra a Carmagnola: sport, doccia e calore (senza paranoia)",
    shortDescription:
      "Allenamento, doccia, sauna, leggings e sudore: cosa fare nelle prime 24-48 ore e come pianificare le sedute se ti alleni spesso.",
    longDescription:
      "Se ti alleni con costanza, la domanda è normale: posso andare in palestra dopo il laser? La risposta non è un divieto, ma una gestione. Qui trovi indicazioni pratiche su calore, sudore e sfregamento (soprattutto su ascelle e inguine), e come programmare sedute e allenamenti senza complicarti la settimana.",
    localAngle:
      "Pensata per chi si allena tra Carmagnola e Torino Sud e vuole un percorso laser compatibile con sport e routine reali.",
    intent: "informational",
    benefits: [
      "Riduce dubbi su sport, doccia e calore nel post-seduta",
      "Ti aiuta a evitare irritazioni da sudore e sfregamenti su zone sensibili",
      "Ti dà un modo semplice per pianificare sedute e allenamenti senza saltare",
    ],
    faqs: [
      {
        q: "Posso allenarmi lo stesso il giorno della seduta?",
        a: "Se puoi, meglio evitare attività che scaldano molto e aumentano sudore/sfregamento nelle prime 24 ore. Se hai un allenamento fisso, lo dici in consulenza e pianifichiamo in modo sensato.",
      },
      {
        q: "Doccia calda, sauna e bagno turco?",
        a: "Nel dubbio, meglio evitare il calore intenso subito dopo: la pelle può essere arrossata e più sensibile. Ti diamo indicazioni pratiche in base alla zona trattata e a come reagisci.",
      },
      {
        q: "Quali zone risentono di più dello sport?",
        a: "Di solito ascelle e inguine (sudore + attrito). Anche sulle gambe, se usi leggings stretti o fai sport con sfregamento, serve un po' di attenzione nel post.",
      },
      {
        q: "Se mi alleno tutti i giorni, ha senso iniziare?",
        a: "Sì. Non serve fermarti: serve un calendario furbo e qualche accorgimento nel post-seduta. Molte persone iniziano proprio per semplificare la gestione quotidiana.",
      },
      {
        q: "Quanto dura il rossore dopo il laser?",
        a: "Dipende da pelle e zona. Spesso è temporaneo. Se hai una pelle reattiva, si imposta il percorso in modo più graduale e si gestisce il post con buon senso.",
      },
    ],
    keywords: [
      "laser e palestra Carmagnola",
      "sport dopo laser Carmagnola",
      "doccia dopo laser Carmagnola",
      "sauna dopo laser Carmagnola",
      "laser e sudore ascelle inguine",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "epilazione-laser-viso-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "epilazione-laser-carmagnola",
      "epilazione-laser-inverno-carmagnola",
      "epilazione-laser-estate-sole-carmagnola",
      "epilazione-laser-ascelle-carmagnola-guida-pratica",
      "epilazione-laser-inguine-carmagnola-guida-pratica",
      "laser-gambe-carmagnola-guida-pratica",
      "peli-incarniti-laser-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.laserPalestraGuida,
      alt: "Laser e palestra: regole pratiche su sport, doccia, calore e tessuti nelle prime 24-48 ore.",
    },
    editorialSections: [
      {
        heading: "La regola semplice: nelle prime 24-48 ore abbassa calore e sfregamenti",
        paragraphs: [
          "Dopo una seduta la pelle può essere arrossata e un po' più sensibile. Se aggiungi subito sudore, tessuti stretti e calore, è più facile irritarsi (soprattutto su ascelle e inguine).",
          "Non serve paranoia: basta un minimo di gestione. Se hai allenamenti importanti, li mettiamo nel calendario e si evita di incastrare tutto nello stesso giorno.",
        ],
      },
      {
        heading: "Zone e sport: ascelle e inguine sono le più \"esposte\"",
        paragraphs: [
          "Ascelle e inguine sommano tutto: sudore, frizione, deodoranti, tessuti. Qui è dove conviene essere più ordinati nel post-seduta.",
          "Se hai dubbi, preferiamo una domanda in più (anche su WhatsApp) piuttosto che una gestione a tentativi.",
        ],
      },
      {
        heading: "Se ti alleni spesso: come pianificare sedute e settimana",
        paragraphs: [
          "Il modo più semplice è scegliere un giorno \"comodo\" e lasciare un piccolo margine per il post. Non serve sospendere lo sport, serve non sovraccaricare la pelle nello stesso momento.",
          "Quando il calendario è sensato, è anche più facile essere costanti. E la costanza è una parte grossa del risultato.",
        ],
      },
      {
        heading: "Cosa osservare dopo la seduta (e quando scriverci)",
        paragraphs: [
          "Un po' di rossore e una sensazione di calore possono essere normali. Quello che ci interessa è che la pelle torni tranquilla senza trascinarsi irritazione per giorni.",
          "Se noti qualcosa che non ti convince, scrivici: aggiustare in tempo è sempre meglio che ignorare e poi interrompere il percorso.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Laser hair removal",
        url: "https://my.clevelandclinic.org/health/treatments/21757-laser-hair-removal",
      },
      {
        label: "Mayo Clinic - Laser hair removal (after the procedure)",
        url: "https://www.mayoclinic.org/tests-procedures/laser-hair-removal/about/pac-20394555",
      },
      {
        label: "NHS - After your laser treatment (Leeds Teaching Hospitals)",
        url: "https://www.leedsth.nhs.uk/patients/resources/after-your-laser-treatment/",
      },
    ],
  },
  {
    slug: "peli-incarniti-laser-carmagnola",
    title: "Peli incarniti: quando il laser aiuta davvero (guida a Carmagnola)",
    shortDescription:
      "Cause comuni, routine quotidiana e criteri pratici per capire se un percorso laser ha senso.",
    longDescription:
      "I peli incarniti non sono solo un fastidio: spesso sono infiammazione, attrito e ricrescita gestita male. Qui trovi cosa funziona davvero (e cosa peggiora la situazione) e quando il laser può diventare la scelta più comoda.",
    localAngle:
      "Utile se cerchi a Carmagnola una soluzione concreta per peli incarniti frequenti su gambe, inguine o ascelle.",
    intent: "commercial",
    benefits: [
      "Chiarisce cosa scatena i peli incarniti più spesso",
      "Ti aiuta a costruire una routine più gentile (senza aggressività)",
      "Spiega quando il laser può ridurre ricrescita e infiammazione nel tempo",
    ],
    faqs: [
      {
        q: "Lo scrub risolve i peli incarniti?",
        a: "Può aiutare se è delicato e fatto con il ritmo giusto. Esfoliare troppo o troppo spesso, invece, può irritare e peggiorare.",
      },
      {
        q: "Ceretta e pinzetta peggiorano?",
        a: "In alcune persone sì, soprattutto su peli che tendono a rientrare. Dipende da zona, tipo di pelo e sensibilità della pelle.",
      },
      {
        q: "Il laser funziona se ho peli incarniti frequenti?",
        a: "Spesso sì: riducendo progressivamente la ricrescita, diminuisce anche la probabilità che il pelo rientri. Va impostato con metodo e calendario coerente.",
      },
      {
        q: "Quali zone sono le più problematiche?",
        a: "Spesso inguine, ascelle e alcune aree delle gambe, soprattutto con attrito e rasatura frequente.",
      },
    ],
    keywords: [
      "peli incarniti Carmagnola",
      "laser peli incarniti Carmagnola",
      "peli sottopelle inguine Carmagnola",
      "peli incarniti ascelle Carmagnola",
      "peli incarniti gambe Carmagnola",
    ],
    relatedServiceSlugs: [
      "epilazione-laser-corpo-carmagnola",
      "scrub-corpo-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.peliIncarniti,
      alt: "Peli incarniti e comfort: pelle più uniforme, texture naturale, focus su ricrescita più gestibile (gambe/inguine).",
    },
    editorialSections: [
      {
        heading: "Prima di tutto: i peli incarniti sono un mix di ricrescita, attrito e infiammazione",
        paragraphs: [
          "Quando il pelo fatica a uscire, la pelle si infiamma. A volte è colpa della rasatura, a volte della ceretta, a volte dell'attrito (leggings, sport, caldo).",
          "La soluzione non è essere più aggressive: è diventare più precise e più gentili.",
        ],
      },
      {
        heading: "Scrub sì, ma fatto bene: ritmo, delicatezza e timing",
        paragraphs: [
          "Lo scrub può essere utilissimo, ma deve rispettare la pelle. Se lo fai con troppa forza o troppo spesso, la pelle si irrita e i peli incarniti aumentano.",
          "In studio ti diciamo come impostarlo in base alla tua pelle e, se stai facendo laser, anche in base al calendario.",
        ],
      },
      {
        heading: "Quando il laser diventa la scelta più comoda",
        paragraphs: [
          "Se hai peli incarniti ricorrenti su zone specifiche, spesso il laser aiuta perché riduce progressivamente la ricrescita. Meno ricrescita = meno probabilità di pelo che rientra.",
          "La differenza la fa come si imposta il percorso: parametri su misura, progressione e controlli, non sedute buttate lì.",
        ],
      },
      {
        heading: "La cosa più importante: scegliere una priorità e seguirla",
        paragraphs: [
          "In molti casi conviene partire da una o due zone, non da tutto insieme. Così capiamo come risponde la pelle e impostiamo un piano più chiaro.",
          "Scrivici su WhatsApp e ti diciamo come partire in modo pratico (zone, tempi, preparazione).",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Ingrown hair",
        url: "https://my.clevelandclinic.org/health/diseases/17722-ingrown-hair",
      },
      {
        label: "Mayo Clinic - Ingrown hair",
        url: "https://www.mayoclinic.org/diseases-conditions/ingrown-hair/symptoms-causes/syc-20373893",
      },
      {
        label: "AAD - Laser hair removal overview",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-overview",
      },
    ],
  },
  {
    slug: "contorno-occhi-gonfiore-occhiaie-carmagnola",
    title: "Contorno occhi a Carmagnola: gonfiore, occhiaie e cosa fare davvero",
    shortDescription:
      "Una guida pratica sul contorno occhi: perché cambia, cosa peggiora gonfiore/occhiaie e quali scelte sono sensate (senza eccessi).",
    longDescription:
      "Il contorno occhi è una delle zone che tradisce subito stanchezza, stress e abitudini (struccaggio, sfregamenti, sonno). Qui trovi un orientamento concreto: cosa puoi fare a casa, quando ha senso un trattamento in studio e come impostare un percorso ordinato.",
    localAngle:
      "Ideale per uno sguardo più riposato e \"in ordine\" senza inseguire effetti finti.",
    intent: "informational",
    benefits: [
      "Chiarisce cosa influenza gonfiore e occhiaie nella vita reale",
      "Ti aiuta a evitare errori comuni (sfregamenti, attivi a caso, routine pesanti)",
      "Ti orienta su quando serve un percorso mirato e quando basta semplificare",
    ],
    faqs: [
      {
        q: "Occhiaie e gonfiore sono la stessa cosa?",
        a: "No. Il gonfiore è spesso legato a ritenzione e abitudini (sonno, sale, stress); le occhiaie possono dipendere anche da pigmentazione e struttura. La cosa utile è capire cosa vedi e quando cambia: da lì si sceglie il primo step.",
      },
      {
        q: "Posso usare qualunque crema occhi?",
        a: "Meglio no: sul contorno occhi l'eccesso si paga. Preferiamo pochi passaggi e prodotti delicati. Se stai facendo trattamenti, ti diciamo cosa tenere e cosa evitare per non stressare la zona.",
      },
      {
        q: "Struccaggio: quanto incide davvero?",
        a: "Tantissimo. Sfregamenti e fretta possono irritare e rendere la zona più \"stanca\". In studio ti diamo consigli pratici per struccare bene senza trasformarlo in un rituale infinito.",
      },
      {
        q: "Quando ha senso un percorso in studio?",
        a: "Quando vuoi un risultato più ordinato e progressivo, soprattutto se gonfiore e segni sono ricorrenti. In questi casi un protocollo mirato contorno occhi può essere la scelta più pulita.",
      },
    ],
    keywords: [
      "contorno occhi Carmagnola",
      "occhiaie Carmagnola trattamento",
      "gonfiore contorno occhi Carmagnola",
      "trattamento occhi Carmagnola",
    ],
    relatedServiceSlugs: ["laminazione-ciglia-sopracciglia-carmagnola", "pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    relatedProtocolSlugs: ["eye-genesis"],
    editorialSections: [
      {
        heading: "La zona più delicata: meglio precisione che \"tanto prodotto\"",
        paragraphs: [
          "Sul contorno occhi la pelle è più sottile e più reattiva: se fai troppo, spesso ottieni l'effetto opposto (irritazione, sensibilità, instabilità).",
          "La strategia che funziona davvero è semplice: pochi gesti coerenti e, quando serve, un percorso mirato in studio.",
        ],
      },
      {
        heading: "Gonfiore: abitudini e routine contano più dei miracoli",
        paragraphs: [
          "Il gonfiore cambia da un giorno all'altro: sonno, stress, sale e postura contano. Per questo preferiamo ragionare su cosa succede nella tua settimana, non su promesse generiche.",
          "Quando la gestione è chiara, anche la scelta del trattamento diventa più sensata e sostenibile.",
        ],
      },
      {
        heading: "Quando serve un protocollo mirato (e perché il risultato migliore è naturale)",
        paragraphs: [
          "Un risultato elegante sul contorno occhi è quello che ti fa sembrare riposata, non diversa. Si ottiene con progressione, non con una singola seduta \"forte\".",
          "Se cerchi un percorso mirato, Eye Genesis è pensato proprio per questo: ordine e continuità, con una gestione rispettosa della zona.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "pelle-matura-carmagnola-trattamenti-routine",
    title: "Pelle matura a Carmagnola: comfort, densità e routine che regge",
    shortDescription:
      "Cosa cambia davvero, come scegliere un percorso viso e come evitare eccessi che irritano e \"assottigliano\" la costanza.",
    longDescription:
      "Quando la pelle cambia (più secca, meno elastica, più reattiva, a volte più \"sottile\" al tatto), la qualità non è fare di più: è fare meglio. Qui trovi un orientamento pratico e molto concreto su comfort, densità percepita e progressione: come scegliere un primo step che non stressa, come costruire un calendario che regge e quali micro-gesti a casa fanno davvero la differenza. L'obiettivo è una pelle più stabile e più \"comoda\" nel tempo, non un effetto forte di un giorno.",
    localAngle:
      "Pensata per chi vuole un percorso viso serio e rispettoso, senza inseguire mode o trattamenti random.",
    intent: "commercial",
    benefits: [
      "Aiuta a impostare aspettative realistiche e un calendario sostenibile",
      "Riduce errori tipici: attivi troppo aggressivi e routine troppo complicate",
      "Ti orienta su percorsi mirati per comfort e densità percepita",
    ],
    faqs: [
      {
        q: "Che cosa vuol dire davvero \"pelle matura\"?",
        a: "Non è solo una questione di età: è come si comporta la pelle oggi. Può essere più secca, più reattiva, meno piena o più sottile. Per questo la lettura iniziale è il primo passo utile.",
      },
      {
        q: "Serve per forza fare tanti trattamenti?",
        a: "No. Spesso la qualità è scegliere poche cose, ma quelle giuste, e seguirle con un ritmo realistico. Il percorso migliore è quello che riesci a tenere.",
      },
      {
        q: "Se la pelle è reattiva conviene evitare tutto?",
        a: "No: conviene essere più precise. Si lavora su comfort e barriera, con intensità e calendario adattati. L'obiettivo è una pelle più stabile, non una pelle stressata.",
      },
      {
        q: "Da cosa conviene partire se mi vedo più secca e \"spenta\"?",
        a: "Spesso dal riportare comfort e ordine: una pulizia viso fatta bene (delicata) e una routine casa essenziale. Poi si valuta se ha senso un protocollo dedicato per densità e tono, con progressione.",
      },
      {
        q: "Che cosa posso fare a casa senza complicarmi la vita?",
        a: "Pochi passaggi coerenti: detersione delicata, idratazione e protezione. Se serve, un solo attivo mirato. La costanza vale più del prodotto perfetto usato due volte.",
      },
      {
        q: "È meglio fare tutto ravvicinato per \"recuperare\"?",
        a: "Di solito no. Sulle pelli più mature e reattive l'eccesso è il modo più veloce per irritare e perdere continuità. Preferiamo una progressione pulita: poche sedute ben distanziate e un mantenimento semplice.",
      },
    ],
    keywords: [
      "pelle matura Carmagnola",
      "trattamenti viso pelli mature Carmagnola",
      "routine pelle matura Carmagnola",
      "comfort pelle viso Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    relatedProtocolSlugs: ["rebirth-60-plus", "collagen-code"],
    editorialSections: [
      {
        heading: "La pelle matura non chiede \"più forte\": chiede \"più intelligente\"",
        paragraphs: [
          "Quando la pelle è più sottile o più reattiva, l'eccesso è la cosa che rovina tutto: attivi aggressivi, troppi cambi e sedute \"forti\" possono renderla instabile.",
          "Qui funziona la precisione: poche scelte fatte bene, distanziate con criterio. Il risultato migliore è quello che rende la pelle più comoda e più stabile nel tempo.",
        ],
      },
      {
        heading: "Progressione: comfort prima, densità poi (e luce come conseguenza)",
        paragraphs: [
          "Una seduta può darti una bella sensazione, ma la qualità vera arriva con un percorso: calendario realistico e piccoli aggiustamenti quando serve.",
          "Noi ragioniamo spesso in questa sequenza: comfort/barriera, poi densità percepita e tono, poi luminosità più stabile. Se cerchi un protocollo pensato per queste esigenze, Rebirth 60+ è orientato proprio a comfort e densità percepita, con metodo e rispetto della pelle.",
        ],
      },
      {
        heading: "Routine a casa: il minimo efficace che non ti stanca",
        paragraphs: [
          "Non serve avere dieci prodotti. Serve coerenza. Se la routine è troppo complicata, smette di funzionare perché non la segui.",
          "In studio, dopo la seduta, possiamo consigliarti una micro-routine che ti viene naturale e che sostiene il percorso.",
        ],
      },
      {
        heading: "Quando ha senso un protocollo dedicato (e quando basta semplificare)",
        paragraphs: [
          "Se la pelle è solo \"un po' stanca\", spesso basta rimettere ordine e comfort: detersione delicata, idratazione, protezione e un primo step professionale fatto bene.",
          "Se invece la sensazione di secchezza, svuotamento o perdita di tono è più stabile, ha senso un protocollo dedicato: Collagen Code è spesso scelto quando si cerca compattezza e densità percepita con una progressione pulita.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
      {
        label: "AAD - Skin aging",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/skin/skin-aging",
      },
    ],
  },
  {
    slug: "pelle-opaca-grana-irregolare-carmagnola",
    title: "Pelle opaca a Carmagnola: grana irregolare, comfort e reset sensato",
    shortDescription:
      "Quando la pelle è spenta o \"disordinata\": cosa peggiora la situazione e come rimetterla in carreggiata con una progressione pulita.",
    longDescription:
      "Se ti sembra che la pelle sia opaca, più ruvida o fuori equilibrio, spesso non serve aggiungere: serve semplificare e scegliere un reset fatto bene. Qui trovi come impostiamo un primo step sensato e cosa evitare per non irritare.",
    localAngle:
      "Utile se hai provato tanti prodotti e ti senti più confusa di prima.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a capire perché la pelle diventa opaca (spesso per eccessi)",
      "Imposta un primo step chiaro per comfort e luminosità",
      "Riduce tentativi casuali tra prodotti, attivi e trattamenti",
    ],
    faqs: [
      {
        q: "Perché la pelle diventa opaca anche se la idrato?",
        a: "Perché l'opacità non è solo idratazione: entrano in gioco routine, esfoliazione, sensibilità e stress della pelle. A volte stai facendo troppo e la pelle si difende.",
      },
      {
        q: "Devo esfoliare di più per avere più luce?",
        a: "Non per forza. Esfoliare troppo può irritare e rendere la pelle instabile. La regola che funziona è delicatezza + ritmo, non intensità.",
      },
      {
        q: "La pulizia viso basta?",
        a: "Spesso è un primo step ottimo quando serve mettere ordine. Se però la pelle è davvero disordinata o opaca da tempo, può avere senso un protocollo reset impostato in progressione.",
      },
      {
        q: "Cosa posso fare a casa senza impazzire?",
        a: "Pochi passaggi coerenti e niente esperimenti aggressivi. Se serve, ti indichiamo un solo attivo mirato, ma prima viene la costanza.",
      },
    ],
    keywords: [
      "pelle opaca Carmagnola",
      "grana pelle irregolare Carmagnola",
      "pelle spenta Carmagnola trattamento",
      "reset pelle Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: ["trattamenti-viso-carmagnola", "beauty-routine-carmagnola"],
    relatedProtocolSlugs: ["catalysis-ritual"],
    editorialSections: [
      {
        heading: "Opacità e disordine: spesso è questione di \"troppo\"",
        paragraphs: [
          "Molte pelli diventano opache perché fanno troppo: troppi attivi insieme, troppi cambi di routine, troppe prove. La pelle si stressa e diventa instabile.",
          "La soluzione più elegante è semplificare e costruire continuità: un reset sensato e un calendario che regge.",
        ],
      },
      {
        heading: "Reset in studio: quando ha senso (e quando basta un primo step)",
        paragraphs: [
          "Se la pelle è solo un po' spenta, spesso una pulizia viso fatta bene rimette ordine. Se invece l'opacità è ricorrente e la grana è disordinata, ha senso un protocollo più strutturato.",
          "Catalysis Ritual nasce proprio per questo: riportare comfort e luce senza inseguire l'effetto forte.",
        ],
      },
      {
        heading: "Progressione: la parte che rende il risultato più stabile",
        paragraphs: [
          "Il risultato bello è quello che non dura solo un giorno. Per questo parliamo sempre di progressione e mantenimento, anche minimale.",
          "Pochi gesti a casa, scelti bene, valgono più di una routine piena di prodotti che non riesci a seguire.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "tono-viso-ovale-carmagnola-percorso",
    title: "Tono viso e ovale a Carmagnola: come impostare un percorso che si vede",
    shortDescription:
      "Quando cerchi tono e \"tenuta\": cosa aspettarti davvero e come costruire una progressione pulita (senza rincorrere trattamenti a caso).",
    longDescription:
      "Se l'obiettivo è un viso più compatto e luminoso, la differenza la fa la progressione: sedute distanziate bene, poche scelte coerenti e un mantenimento semplice. Qui trovi come orientarti e quali segnali cercare in consulenza.",
    localAngle:
      "Ideale per un risultato elegante e progressivo, non un effetto \"solo in giornata\".",
    intent: "commercial",
    benefits: [
      "Imposta aspettative realistiche su tono, tempi e mantenimento",
      "Ti aiuta a scegliere una priorità e tenere il filo del percorso",
      "Riduce tentativi casuali e sedute scollegate tra loro",
    ],
    faqs: [
      {
        q: "Quanto tempo ci vuole per vedere un cambiamento sul tono?",
        a: "Dipende da pelle e punto di partenza. Il tono è una progressione: si costruisce seduta dopo seduta, con un ritmo coerente. In studio ti diciamo cosa aspettarti in modo realistico.",
      },
      {
        q: "Serve fare tante cose insieme?",
        a: "No. Spesso funziona meglio il contrario: poche cose fatte bene e tenute nel tempo. La pelle ama la coerenza.",
      },
      {
        q: "Da cosa si parte di solito?",
        a: "Spesso da una lettura iniziale e da un primo step che rimette comfort e ordine (anche una pulizia viso fatta bene). Poi si decide la progressione in base a priorità e tempi reali.",
      },
      {
        q: "Che cosa posso fare a casa per non perdere il filo?",
        a: "Pochi gesti coerenti: detersione, idratazione e protezione. Se serve, un attivo mirato. La costanza è la parte che fa durare.",
      },
    ],
    keywords: [
      "tono viso Carmagnola",
      "ovale viso Carmagnola",
      "viso compatto Carmagnola",
      "trattamento tono viso Carmagnola",
    ],
    relatedServiceSlugs: ["pulizia-viso-carmagnola"],
    relatedCompetenceSlugs: ["trattamenti-viso-carmagnola", "estetica-avanzata-carmagnola"],
    relatedProtocolSlugs: ["rebel-lift-protocol", "collagen-code"],
    editorialSections: [
      {
        heading: "Tono: si costruisce, non si compra",
        paragraphs: [
          "Quando l'obiettivo è \"tenuta\" e luminosità, la cosa più importante è avere una direzione chiara e seguirla nel tempo.",
          "La differenza tra un percorso serio e una sequenza casuale di sedute è proprio questa: progressione e controllo, non promesse veloci.",
        ],
      },
      {
        heading: "La progressione giusta è quella che riesci a seguire",
        paragraphs: [
          "Un calendario impossibile ti porta a mollare. Un calendario realistico ti porta risultati più stabili.",
          "In studio impostiamo una proposta semplice e la adattiamo: la pelle cambia, e anche il percorso deve saper cambiare senza perdere il filo.",
        ],
      },
      {
        heading: "Quando ha senso un protocollo dedicato",
        paragraphs: [
          "Se cerchi un lavoro progressivo su tono e ovale, Rebel Lift Protocol è pensato proprio per questo. Se invece vuoi un focus più su compattezza e densità percepita, Collagen Code è spesso la strada più pulita.",
          "La scelta migliore è sempre quella coerente con la pelle di oggi e con il ritmo che puoi tenere.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Basic skin care",
        url: "https://www.aad.org/public/everyday-care/skin-care-basics/care",
      },
    ],
  },
  {
    slug: "manicure-semipermanente-carmagnola-durata-rimozione",
    title: "Semipermanente a Carmagnola: durata, ricrescita e rimozione senza danni",
    shortDescription:
      "Cosa incide sulla durata e come si rimuove bene (senza strappi o limature aggressive).",
    longDescription:
      "Una guida pratica (e concreta) per chi vuole un semipermanente bello e ordinato nel tempo: cosa fa durare di più il risultato, come gestire ricrescita e piccoli sollevamenti, quando conviene rifarlo e perché la rimozione è la parte che protegge davvero l'unghia. Il nostro obiettivo è un effetto pulito, curato da vicino, che ti semplifica la vita senza rovinare la base.",
    localAngle:
      "Utile se cerchi a Carmagnola un servizio unghie curato e vuoi capire come mantenerlo senza rovinare l'unghia.",
    intent: "informational",
    benefits: [
      "Ti aiuta a capire perché a volte dura di più (e a volte no)",
      "Spiega come gestire ricrescita e calendario senza stress",
      "Chiarisce la rimozione corretta per rispettare l'unghia",
    ],
    faqs: [
      {
        q: "Quanto dura davvero il semipermanente?",
        a: "In media 2-3 settimane, ma dipende da ricrescita e da quanto usi le mani. Anche detergenti e lavori manuali incidono molto.",
      },
      {
        q: "È normale che si sollevi prima su alcune unghie?",
        a: "Sì: alcune unghie vengono \"stressate\" di più (mani dominanti, lavori manuali, detersivi, sport). La cosa importante è non staccare o strappare: se succede, meglio una sistemazione piccola fatta bene.",
      },
      {
        q: "La rimozione è quella che rovina l'unghia?",
        a: "Spesso sì, se viene fatta male. Strappare o limare troppo assottiglia l'unghia. La rimozione corretta è paziente e rispettosa.",
      },
      {
        q: "Posso rimuoverlo da sola a casa?",
        a: "Si può, ma se non hai pratica rischi di strappare. Se scegli di farlo a casa, ti consigliamo di farlo con calma e senza forzare.",
      },
      {
        q: "Posso fare una pausa tra un semipermanente e l'altro?",
        a: "Sì. Se preferisci fare una pausa, la cosa più importante è farla bene: rimozione corretta, unghia non assottigliata e una fase di \"riposo\" con idratazione semplice. In studio ti consigliamo il ritmo più sensato per te.",
      },
      {
        q: "Se un'unghia si scheggia cosa faccio?",
        a: "Meglio non 'aggiustare' a tentativi con limate aggressive. Scrivici o passa in studio: spesso basta una sistemazione piccola fatta bene.",
      },
      {
        q: "Cosa posso fare a casa per farlo durare di più?",
        a: "Guanti con detersivi e lavori aggressivi, cuticole idratate e niente gesto \"strappa\" quando vedi un angolino sollevato. Sono piccole cose, ma fanno durare moltissimo l'ordine delle mani.",
      },
    ],
    keywords: [
      "semipermanente Carmagnola durata",
      "manicure semipermanente Carmagnola rimozione",
      "rimozione semipermanente Carmagnola",
      "semipermanente unghie Carmagnola",
      "semipermanente rovina unghie",
    ],
    relatedServiceSlugs: ["manicure-semipermanente-carmagnola", "pedicure-semipermanente-carmagnola"],
    editorialSections: [
      {
        heading: "Durata: non è solo 'quanto dura', è come resta dopo una settimana",
        paragraphs: [
          "Una manicure fatta bene si vede anche dopo giorni: bordi puliti, cuticole ordinate, finitura bella da vicino. La durata non è solo il numero di giorni, è anche come ti senti guardando le mani.",
          "Per questo lavoriamo molto sulla preparazione e sulla rifinitura: sono le parti che fanno la differenza.",
        ],
      },
      {
        heading: "Le 7 cose che più spesso accorciano la durata (e come evitarle)",
        paragraphs: [
          "Detersivi senza guanti, lavori manuali intensi, uso \"strumentale\" delle unghie (apri-chiudi), cuticole secche, sollevamenti ignorati, rimozioni fai-da-te aggressive e ritocchi improvvisati.",
          "Non serve essere perfette: serve solo sapere cosa incide davvero, così il servizio resta bello più a lungo.",
        ],
      },
      {
        heading: "Ricrescita: il momento giusto per rifarlo non è uguale per tutte",
        paragraphs: [
          "C'è chi ha ricrescita veloce e preferisce tenere sempre un look perfetto. C'è chi vuole semplicemente mani ordinate e torna quando sente che è il momento.",
          "In studio ti diciamo una finestra realistica, così non aspetti troppo e non ti ritrovi a dover 'salvare' la situazione.",
        ],
      },
      {
        heading: "Rimozione: la parte che protegge l'unghia nel tempo",
        paragraphs: [
          "Molti danni non arrivano dal semipermanente in sé, ma da rimozioni aggressive: strappi, fretta, limature eccessive.",
          "La regola è semplice: mai forzare. Se preferisci fare una pausa, la facciamo in modo che l'unghia resti sana e bella.",
        ],
      },
      {
        heading: "Se lavori tanto con le mani (o fai sport): come tenere il risultato più ordinato",
        paragraphs: [
          "Se usi molto le mani, non è un problema: significa solo che il tuo calendario e la tua gestione devono essere più intelligenti. A volte basta accorciare leggermente la lunghezza o programmare i richiami nel momento giusto.",
          "Il semipermanente migliore non è quello che \"dura per forza\": è quello che resta bello e ti semplifica davvero la vita.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Gel manicures: Tips for healthy nails",
        url: "https://www.aad.org/media/news-releases/gel-manicures-dermatologists-share-tips-to-keep-nails-healthy",
      },
      {
        label: "AAD - Dermatologist's secret for removing gel nail polish at home",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/pedicures/removing-gel-polish",
      },
    ],
  },
  {
    slug: "laminazione-ciglia-sopracciglia-carmagnola-durata-cura",
    title: "Laminazione a Carmagnola: durata e cura nelle prime ore (ciglia e sopracciglia)",
    shortDescription:
      "Quanto dura davvero, cosa evitare subito dopo e come farla restare ordinata più a lungo.",
    longDescription:
      "Una guida pratica sulla laminazione: cosa aspettarti, cosa cambia nelle prime ore e quali piccole attenzioni fanno la differenza sulla durata del risultato. L'obiettivo è un effetto pulito e naturale, che ti semplifica la mattina: per questo ti diciamo cosa fare subito dopo e come mantenere ciglia e sopracciglia ordinate senza stressare la zona.",
    localAngle:
      "Scritta per chi cerca a Carmagnola un effetto naturale e pulito, senza eccessi e senza sorprese.",
    intent: "informational",
    benefits: [
      "Chiarisce cosa aspettarti nelle prime ore dopo la seduta",
      "Aiuta a far durare il risultato senza complicazioni",
      "Spiega come scegliere un effetto naturale, coerente con il tuo viso",
    ],
    faqs: [
      {
        q: "Quanto dura la laminazione?",
        a: "In media 4-6 settimane, ma dipende da crescita naturale e abitudini (struccaggio, prodotti, sfregamenti).",
      },
      {
        q: "Cosa conviene evitare subito dopo?",
        a: "Nelle prime ore è meglio trattare la zona con delicatezza: evitare sfregamenti e gestire struccaggio e detersione con più calma.",
      },
      {
        q: "Se ho ciglia o sopracciglia sottili ha senso?",
        a: "Spesso sì. L'obiettivo è ordine e armonia, non un effetto pesante. In studio adattiamo impostazione e intensità al tuo punto di partenza.",
      },
      {
        q: "È un effetto molto evidente?",
        a: "Dipende da come lo vuoi. Il nostro stile è naturale: preferiamo un risultato curato che ti somigli, non un cambiamento eccessivo.",
      },
    ],
    keywords: [
      "laminazione Carmagnola durata",
      "laminazione ciglia Carmagnola quanto dura",
      "laminazione sopracciglia Carmagnola cura",
      "laminazione ciglia dopo trattamento",
      "laminazione effetto naturale Carmagnola",
    ],
    relatedServiceSlugs: ["laminazione-ciglia-sopracciglia-carmagnola"],
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "come-scegliere-centro-estetico-carmagnola",
    ],
    editorialSections: [
      {
        heading: "Perché dura di più quando l'effetto è 'giusto' (non eccessivo)",
        paragraphs: [
          "Quando l'impostazione è coerente con la tua struttura, la laminazione resta bella più a lungo: non è tirata, non è pesante, non ti costringe a correggere ogni giorno.",
          "Il punto è uscire ordinata. Non uscire 'diversa'.",
        ],
      },
      {
        heading: "Prime ore: poche attenzioni che salvano la durata",
        paragraphs: [
          "È la fase più semplice, ma anche quella che viene sottovalutata. Se nelle prime ore tratti la zona con delicatezza, il risultato resta più stabile.",
          "In studio ti diciamo esattamente cosa fare in base a ciglia/sopracciglia e alle tue abitudini quotidiane.",
        ],
      },
      {
        heading: "Mantenimento: come restare ordinata senza fare 'troppo'",
        paragraphs: [
          "Detersione delicata, struccaggio senza sfregare e prodotti scelti con criterio. Non servono rituali lunghi: serve non stressare la zona.",
          "Se serve, ti consigliamo anche quando rifarla, così non aspetti che l'effetto 'collassi'.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAO - Eyelash extension facts and safety",
        url: "https://www.aao.org/eye-health/tips-prevention/eyelash-extension-facts-safety",
      },
      {
        label: "FDA - Use eye cosmetics safely",
        url: "https://www.fda.gov/consumers/consumer-updates/use-eye-cosmetics-safely",
      },
    ],
  },
  {
    slug: "scrub-corpo-carmagnola-quando-farlo",
    title: "Scrub corpo a Carmagnola: ogni quanto farlo e come non irritare la pelle",
    shortDescription:
      "Frequenza, stagioni e accorgimenti pratici prima/dopo per avere pelle più uniforme senza stress.",
    longDescription:
      "Una guida concreta sullo scrub corpo: come scegliere la frequenza giusta, cosa evitare per non irritare e come farlo diventare un aiuto vero (non un gesto aggressivo).",
    localAngle:
      "Utile se cerchi a Carmagnola uno scrub corpo fatto bene e vuoi evitare l'effetto 'pelle sensibilizzata'.",
    intent: "informational",
    benefits: [
      "Ti aiuta a scegliere una frequenza sensata per la tua pelle",
      "Riduce il rischio di irritazione da esfoliazione eccessiva",
      "Spiega come abbinarlo a idratazione e mantenimento per far durare l'effetto",
    ],
    faqs: [
      {
        q: "Ogni quanto si fa lo scrub corpo?",
        a: "Dipende da sensibilità e stagione. Spesso 3-5 settimane è una buona base, ma alcune pelli preferiscono tempi più lunghi.",
      },
      {
        q: "È meglio farlo prima o dopo la doccia?",
        a: "Dipende dal tipo di scrub e da come reagisce la pelle. In studio lo scegliamo e lo impostiamo in modo che resti confortevole anche dopo.",
      },
      {
        q: "Se ho pelle secca posso farlo?",
        a: "Sì, ma in modo delicato e con una buona fase finale di idratazione. Se la pelle è molto reattiva, distanziamo e scegliamo un approccio più soft.",
      },
      {
        q: "Esfoliare di più rende la pelle più liscia?",
        a: "Nel breve può sembrare, ma l'eccesso spesso porta sensibilità e instabilità. Il risultato migliore arriva quando non si esagera.",
      },
    ],
    keywords: [
      "scrub corpo Carmagnola ogni quanto",
      "esfoliazione corpo frequenza",
      "scrub corpo pelle sensibile",
      "scrub corpo estate sole",
      "scrub corpo idratazione",
    ],
    relatedServiceSlugs: ["scrub-corpo-carmagnola"],
    editorialSections: [
      {
        heading: "La regola che funziona: meglio delicato e regolare che 'forte' una volta",
        paragraphs: [
          "L'esfoliazione non deve lasciare la pelle in difesa. Se dopo lo scrub senti bruciore o pelle che tira per giorni, qualcosa va rivisto.",
          "Quando lo scrub è impostato bene, la pelle resta più uniforme e più comoda anche nei giorni successivi.",
        ],
      },
      {
        heading: "Frequenza: pelle, stagione e abitudini contano più della teoria",
        paragraphs: [
          "La frequenza giusta cambia in base a come vivi: docce, sport, attrito, prodotti che usi. Non esiste una tabella valida per tutte.",
          "In studio ti proponiamo un ritmo realistico: non vogliamo trasformare la routine corpo in un lavoro.",
        ],
      },
      {
        heading: "Dopo lo scrub: la parte che fa durare la pelle liscia",
        paragraphs: [
          "Idratazione e protezione. Pochi gesti, coerenti. Se serve, ti consigliamo prodotti in base a stagione e sensazione della pelle.",
          "L'obiettivo è far durare il comfort, non inseguire l'effetto 'wow' per un giorno.",
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
    slug: "massaggio-rilassante-carmagnola-cervicale-stress",
    title: "Massaggio rilassante e cervicale a Carmagnola: cosa aspettarti in 50 minuti",
    shortDescription:
      "Quando serve, come lo impostiamo e come far durare la sensazione di sollievo dopo la seduta.",
    longDescription:
      "Una guida chiara per chi sente tensione su cervicale, spalle e schiena: come si svolge una seduta, che tipo di pressione si può scegliere e come inserire il massaggio in un periodo più stressante.",
    localAngle:
      "Pensata per chi lavora tanto, guida molto o passa molte ore al computer tra Carmagnola e dintorni.",
    intent: "informational",
    benefits: [
      "Aiuta a capire se il massaggio rilassante è adatto al tuo momento",
      "Chiarisce come gestiamo pressione e zone sensibili",
      "Ti dà idee pratiche per far durare la sensazione di leggerezza",
    ],
    faqs: [
      {
        q: "È un massaggio 'forte'?",
        a: "Non per forza. Si decide insieme: preferiamo un lavoro graduale e su misura, soprattutto su cervicale e spalle.",
      },
      {
        q: "Su cosa lavorate di più?",
        a: "Schiena, spalle e cervicale, con attenzione a come rispondi seduta per seduta.",
      },
      {
        q: "Quante sedute servono?",
        a: "Dipende da quanto è carico il periodo. C'è chi fa una seduta singola ogni tanto e chi preferisce un ritmo più regolare per qualche settimana.",
      },
      {
        q: "Cosa posso fare dopo per far durare l'effetto?",
        a: "Bere acqua, evitare di correre subito e ascoltare il corpo. Anche una passeggiata lenta può aiutare a mantenere la sensazione di distensione.",
      },
    ],
    keywords: [
      "massaggio cervicale Carmagnola",
      "massaggio rilassante Carmagnola cervicale",
      "tensione spalle Carmagnola massaggio",
      "massaggio schiena Carmagnola",
      "massaggio antistress Carmagnola",
    ],
    relatedServiceSlugs: ["massaggio-rilassante-carmagnola"],
    editorialSections: [
      {
        heading: "Il punto non è 'fare forte': è sciogliere senza lasciare il corpo in difesa",
        paragraphs: [
          "Su cervicale e spalle, l'effetto migliore arriva quando il corpo si fida: ritmo graduale, pressione calibrata, ascolto durante la seduta.",
          "Se una zona è troppo sensibile o troppo carica, la gestiamo con buon senso: non serve 'resistere' per avere un risultato.",
        ],
      },
      {
        heading: "Quando ha più senso farlo (e quando conviene essere più prudenti)",
        paragraphs: [
          "Ha senso quando senti tensione ricorrente, sonno agitato o periodi in cui ti 'stringi' senza accorgertene. Se invece c'è un dolore acuto o recente, prima capiamo bene cosa succede.",
          "In studio ti facciamo domande semplici e impostiamo la seduta in modo che sia davvero confortevole.",
        ],
      },
      {
        heading: "Mantenimento: micro-gesti che aiutano tra una seduta e l'altra",
        paragraphs: [
          "Non servono rivoluzioni. Basta non tornare subito in modalità corsa: acqua, respiro, qualche minuto di calma e meno tensione su spalle e mandibola quando puoi.",
          "Se vuoi inserire il massaggio in un periodo stressante, scegliamo insieme un ritmo sostenibile.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Massage therapy",
        url: "https://my.clevelandclinic.org/departments/wellness/integrative/treatments-services/massage-therapy",
      },
      {
        label: "NHS - Neck pain and stiff neck",
        url: "https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/",
      },
    ],
  },
  {
    slug: "pulizia-viso-carmagnola-frequenza-benefici",
    title: "Pulizia viso a Carmagnola: ogni quanto farla e per chi ha senso",
    shortDescription:
      "Frequenza, pelle sensibile, errori comuni e come mantenere bene il risultato.",
    longDescription:
      "Una guida naturale e concreta per capire quando la pulizia viso serve davvero, come integrarla nella routine e come evitare eccessi che irritano la pelle. Dentro trovi anche criteri pratici per decidere il ritmo (non uguale per tutti) e cosa chiedere in consulenza se hai pelle reattiva o un periodo \"strano\" per la tua pelle.",
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
      {
        q: "La pulizia viso elimina davvero i punti neri?",
        a: "Può aiutare molto a ridurre impurità e a rendere la pelle più pulita e uniforme, ma serve un approccio realistico: costanza, routine semplice e, se necessario, una progressione. L'obiettivo è migliorare la situazione nel tempo, non \"svuotare tutto\" in una seduta.",
      },
      {
        q: "Meglio farla prima di un evento importante?",
        a: "Se hai un evento, meglio non arrivare all'ultimo: ogni pelle reagisce a modo suo. In studio ti diciamo tempi e aspettative in base al tuo punto di partenza, così eviti sorprese.",
      },
      {
        q: "Se ho brufoli infiammati o una situazione particolare, cosa faccio?",
        a: "Scrivici prima e raccontaci due righe: preferiamo capire bene la situazione e, se serve, rendere la seduta più delicata o chiederti un parere medico prima di procedere.",
      },
      {
        q: "Ogni quanto ha senso farla, in pratica?",
        a: "Dipende da sebo, sensibilità, stagione e obiettivo. Alcune persone stanno bene con un ritmo più distanziato, altre beneficiano di una fase iniziale più ravvicinata e poi mantenimento. In consulenza ti proponiamo una finestra realistica, non un calendario fisso uguale per tutte.",
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
    relatedCompetenceSlugs: [
      "trattamenti-viso-carmagnola",
      "beauty-routine-carmagnola",
      "pelle-opaca-grana-irregolare-carmagnola",
      "pelle-matura-carmagnola-trattamenti-routine",
      "contorno-occhi-gonfiore-occhiaie-carmagnola",
      "estetica-avanzata-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.puliziaViso,
      alt: "Pulizia viso in cabina: manualità delicata, pelle luminosa, texture morbida, atmosfera rilassante.",
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
        heading: "Le 48 ore dopo: come non rovinare il lavoro fatto in cabina",
        paragraphs: [
          "Dopo una pulizia viso fatta bene, la pelle va trattata con calma: niente esperimenti aggressivi, niente attivi \"a caso\" e soprattutto niente fretta nello struccaggio o nella detersione.",
          "Noi preferiamo indicazioni semplici e pratiche: cosa usare, cosa sospendere e quando tornare alla routine normale. Così l'effetto resta più stabile e la pelle non si irrita.",
        ],
      },
      {
        heading: "Routine casa + cabina: il duo che fa la differenza",
        paragraphs: [
          "La cabina dà direzione, la routine casa consolida. Anche pochi passaggi fatti con costanza possono migliorare molto la resa del trattamento professionale.",
          "Il nostro approccio resta semplice: leggere la pelle, scegliere priorità e costruire una routine che non ti complichi la giornata.",
        ],
      },
      {
        heading: "Quando conviene fare un passo in più (senza esagerare)",
        paragraphs: [
          "A volte la pulizia viso è esattamente il primo step giusto. Altre volte è il primo step che ti fa capire che serve un percorso più strutturato (per grana, opacità o instabilità ricorrente).",
          "In quel caso non si \"aggiunge a caso\": si costruisce una progressione pulita, con mantenimento chiaro e un ritmo che riesci a sostenere.",
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
      "Un articolo pratico e onesto per capire quando il linfodrenante può aiutarti davvero, quali aspettative avere e come inserirlo in un percorso corpo coerente. Parliamo di sensazioni (leggerezza, gonfiore, \"gambe pesanti\") e di organizzazione: quante sedute ha senso fare, con che ritmo, e cosa cambia nei periodi in cui stai molte ore in piedi, viaggi o fa caldo.",
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
        a: "No. Funziona meglio come parte di un piano più ampio: calendario coerente, abitudini sostenibili e un minimo di continuità. La sensazione di leggerezza diventa più stabile quando non è un episodio isolato.",
      },
      {
        q: "Quante sedute servono?",
        a: "Dipende da situazione e obiettivo. Di solito si parte con un ciclo breve e poi si decide insieme il mantenimento: il percorso migliore è quello che riesci a tenere davvero.",
      },
      {
        q: "Quanto dura la sensazione dopo una seduta?",
        a: "Varia molto: stile di vita, periodo (caldo, viaggi, molte ore in piedi) e risposta personale contano. Il nostro obiettivo è costruire un effetto più stabile con progressione e non con una seduta \"miracolosa\".",
      },
      {
        q: "Cosa conviene fare dopo il linfodrenante?",
        a: "Semplificare: bere acqua, evitare stress eccessivo immediato e ascoltare il corpo. Se ti va, ti diamo due dritte pratiche in base a lavoro/sport/stagione, così la sensazione di leggerezza dura di più.",
      },
      {
        q: "Ci sono momenti in cui è meglio rimandare o chiedere un parere medico?",
        a: "Se hai condizioni cliniche particolari o situazioni recenti importanti, preferiamo essere prudenti: ci scrivi e valutiamo insieme (o ti chiediamo un via libera medico). La qualità, per noi, è anche saper dire quando non è il momento giusto.",
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
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
      "massaggio-rilassante-carmagnola-cervicale-stress",
    ],
    heroImage: {
      src: editorialImageAssets.linfodrenante,
      alt: "Massaggio linfodrenante: manualità su gambe, sensazione di leggerezza, luce calda e calma.",
    },
    editorialSections: [
      {
        heading: "Partiamo da una verità semplice: il drenaggio non è una bacchetta magica",
        paragraphs: [
          "Il linfodrenante può dare una sensazione di leggerezza concreta e aiutare nella gestione del gonfiore, ma non sostituisce tutto il resto.",
          "Quando viene inserito in un piano coerente, con tempi adeguati e monitoraggio, diventa molto più utile nel tempo.",
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
        heading: "Calendario: progressione e mantenimento (senza trasformarlo in un impegno infinito)",
        paragraphs: [
          "Il calendario è la parte che fa la differenza: un ciclo breve impostato bene ti permette di capire come rispondi e di leggere i cambiamenti in modo più chiaro.",
          "Poi si decide il mantenimento: alcune persone preferiscono richiami periodici, altre un ritmo più concentrato in certi mesi. L'importante è che sia sostenibile per la tua vita reale.",
        ],
      },
      {
        heading: "Approccio professionale: ascolto, adattamento, continuità",
        paragraphs: [
          "Un percorso drenante efficace nasce da osservazione e adattamento: non tutte le settimane sono uguali e non tutte le persone rispondono allo stesso modo.",
          "La qualità del risultato dipende da quanto il piano resta umano: chiaro da capire e lineare da portare avanti.",
        ],
      },
      {
        heading: "Dopo la seduta: far durare il comfort con pochi gesti",
        paragraphs: [
          "Se subito dopo corri, stringi di nuovo tutto e torni a mille, spesso la sensazione si spegne prima. È normale: il corpo ti sta solo dicendo di rallentare un attimo.",
          "Noi preferiamo consigli semplici: una camminata leggera, acqua, e una routine corpo essenziale. Il risultato più bello è quello che senti anche nei giorni successivi, non solo all'uscita.",
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
    slug: "pressoterapia-carmagnola-guida-pratica",
    title: "Pressoterapia a Carmagnola: quando ha senso e cosa aspettarti",
    shortDescription:
      "Guida pratica: a chi può essere utile, che sensazioni aspettarti e come inserirla in un percorso drenante ordinato.",
    longDescription:
      "La pressoterapia viene spesso cercata quando si sente pesantezza, gonfiore o bisogno di \"leggerezza\" sulle gambe. Qui trovi una guida concreta: cosa aspettarti davvero, come si inserisce in un percorso fatto bene (senza esagerare) e quando invece conviene essere prudenti. L'obiettivo è semplice: scegliere con lucidità e costruire un calendario sostenibile, non inseguire promesse.",
    localAngle:
      "Scritta per chi cerca pressoterapia a Carmagnola e vuole capire se e come inserirla in un percorso corpo.",
    intent: "commercial",
    benefits: [
      "Chiarisce quando ha senso e quali aspettative avere",
      "Aiuta a impostare un calendario realistico e sostenibile",
      "Ti orienta su prudenza e controindicazioni, con buonsenso",
    ],
    faqs: [
      {
        q: "La pressoterapia è uguale al linfodrenante?",
        a: "No: sono strumenti diversi. Il linfodrenante è manualità; la pressoterapia è una compressione controllata. In studio scegliamo quello più coerente con il tuo obiettivo e con la risposta del corpo.",
      },
      {
        q: "Quante sedute servono?",
        a: "Dipende da obiettivo e periodo. Di solito si parte con un ciclo breve e poi si decide insieme il mantenimento: la scelta migliore è quella che riesci davvero a tenere.",
      },
      {
        q: "Che sensazione devo aspettarmi durante e dopo?",
        a: "In genere una sensazione di compressione ritmica e poi di leggerezza. La percezione cambia da persona a persona: per noi conta che tu stia comoda e che il percorso resti gestibile nel tempo.",
      },
      {
        q: "Ci sono casi in cui è meglio essere prudenti?",
        a: "Sì. Se hai condizioni cliniche particolari o situazioni recenti importanti, preferiamo valutare con attenzione e, se serve, chiederti un via libera medico. La qualità è anche sapere quando non è il momento giusto.",
      },
      {
        q: "Si può abbinare ad altri trattamenti corpo?",
        a: "Spesso sì. In molti casi ha senso abbinarla a un percorso drenante (manualità) o a una routine corpo semplice. L'importante è non fare tutto insieme: scegliamo una priorità e teniamo il filo.",
      },
    ],
    keywords: [
      "pressoterapia Carmagnola",
      "pressoterapia gambe Carmagnola",
      "pressodren Carmagnola",
      "gambe pesanti Carmagnola pressoterapia",
      "trattamento drenante Carmagnola",
    ],
    relatedServiceSlugs: ["massaggio-linfodrenante-carmagnola"],
    relatedCompetenceSlugs: [
      "drenaggio-corpo-carmagnola",
      "linfodrenante-carmagnola-guida-pratica",
      "trattamenti-corpo-carmagnola",
      "beauty-routine-carmagnola",
    ],
    heroImage: {
      src: editorialImageAssets.pressoterapia,
      alt: "Pressoterapia: gambali e compressione ritmica, sensazione di leggerezza, atmosfera pulita e confortevole.",
    },
    editorialSections: [
      {
        heading: "Perché viene richiesta spesso: leggerezza nella vita reale",
        paragraphs: [
          "Molte persone non cercano una parola tecnica: cercano una sensazione. Gambe più leggere, meno gonfiore percepito, più comfort nella giornata.",
          "Il punto è scegliere lo strumento giusto e inserirlo in un ritmo sostenibile: è così che un trattamento corpo diventa utile davvero.",
        ],
      },
      {
        heading: "Metodo: ciclo breve, poi mantenimento (senza trasformarlo in un impegno infinito)",
        paragraphs: [
          "Preferiamo partire con un ciclo breve e poi decidere insieme il mantenimento. Un percorso serio si adatta: periodo, lavoro, sport e risposta del corpo cambiano.",
          "Il calendario migliore è quello che riesci a seguire: la costanza vale più della corsa.",
        ],
      },
      {
        heading: "Pressoterapia e manualità: come scegliere (senza confondere tutto)",
        paragraphs: [
          "La pressoterapia è compressione controllata; il linfodrenante è manualità. A volte si integrano, altre volte conviene scegliere una priorità e tenere il percorso più pulito.",
          "In studio ti spieghiamo il perché della scelta, in modo semplice: così sai cosa stai facendo e cosa aspettarti.",
        ],
      },
      {
        heading: "Prudenza: quando è meglio fermarsi un attimo e valutare",
        paragraphs: [
          "Se c'è una condizione clinica particolare o una situazione recente importante, preferiamo essere prudenti. Ci scrivi, capiamo insieme e, se serve, chiediamo un via libera medico.",
          "Per noi qualità significa anche sicurezza e trasparenza: non fare trattamenti \"a tutti i costi\".",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Cleveland Clinic - Intermittent Pneumatic Compression (IPC) Device",
        url: "https://my.clevelandclinic.org/health/treatments/14791-intermittent-pneumatic-compression-ipc-device",
      },
      {
        label: "Cleveland Clinic - Lymphatic Drainage Massage",
        url: "https://my.clevelandclinic.org/health/treatments/21768-lymphatic-drainage-massage",
      },
    ],
  },
  {
    slug: "pedicure-carmagnola-ogni-quanto-talloni",
    title: "Pedicure a Carmagnola: ogni quanto farlo e come gestire talloni secchi",
    shortDescription:
      "Frequenza, mantenimento e piccoli accorgimenti pratici per piedi più in ordine (senza essere aggressive).",
    longDescription:
      "Il pedicure non è solo un dettaglio estetico: quando è fatto bene, è comfort. In questa guida trovi criteri pratici per capire ogni quanto farlo, come gestire talloni secchi e pelle più ispessita senza stressarla e come mantenere l'effetto con poche abitudini sostenibili. L'obiettivo è semplice: piedi più ordinati e comodi, con un ritmo che riesci a tenere nel tempo.",
    localAngle:
      "Scritta per chi cerca a Carmagnola un pedicure curato e vuole capire come impostarlo senza improvvisare.",
    intent: "commercial",
    benefits: [
      "Ti aiuta a scegliere una frequenza realistica per la tua pelle e le tue abitudini",
      "Riduce errori comuni su talloni secchi (troppa aggressività, troppa fretta)",
      "Rende più semplice il mantenimento tra una seduta e l'altra",
    ],
    faqs: [
      {
        q: "Ogni quanto conviene fare un pedicure?",
        a: "Dipende da pelle, scarpe, sport e stagione. Alcune persone stanno bene con un ritmo distanziato, altre preferiscono un mantenimento più regolare nei periodi in cui i piedi sono più esposti. In studio ti consigliamo una finestra realistica, non un calendario fisso uguale per tutte.",
      },
      {
        q: "Talloni secchi: cosa aiuta davvero?",
        a: "Di solito aiutano due cose: un pedicure fatto con delicatezza (senza eccessi) e un mantenimento semplice a casa. La costanza vince sulla forza: meglio poco e spesso che troppo una volta e poi stop.",
      },
      {
        q: "È meglio \"togliere tutto\" in una seduta sola?",
        a: "Quasi mai. Quando la pelle è molto secca o ispessita, l'eccesso può irritare e rendere il problema più fastidioso. Funziona meglio una progressione pulita: sedute sensate e mantenimento.",
      },
      {
        q: "Posso fare pedicure e poi mettere lo smalto?",
        a: "Sì. Se preferisci un effetto naturale, puoi scegliere un finish pulito e discreto; se desideri colore, lo decidiamo insieme in base allo stile e alla stagione.",
      },
      {
        q: "Se ho una situazione dolorosa o sospetta, come mi comporto?",
        a: "Se c'è dolore importante o un dubbio clinico, preferiamo essere prudenti: ci scrivi e valutiamo insieme, e se serve ti consigliamo un parere medico/podologico prima di procedere. Il nostro focus qui è il pedicure estetico, fatto bene e in sicurezza.",
      },
    ],
    keywords: [
      "pedicure Carmagnola",
      "pedicure VIP Carmagnola",
      "pedicure Carmagnola ogni quanto",
      "talloni secchi Carmagnola",
      "cura piedi Carmagnola",
      "piedi curati Carmagnola",
    ],
    relatedServiceSlugs: [
      "pedicure-carmagnola",
      "pedicure-estetico-carmagnola",
      "pedicure-estetico-con-smalto-carmagnola",
      "pedicure-semipermanente-carmagnola",
      "taglio-unghie-piedi-carmagnola",
    ],
    relatedCompetenceSlugs: [
      "beauty-routine-carmagnola",
      "trattamenti-corpo-carmagnola",
      "scrub-corpo-carmagnola-quando-farlo",
    ],
    heroImage: {
      src: editorialImageAssets.pedicure,
      alt: "Pedicure: piedi ordinati, pelle più liscia, atmosfera pulita e rilassante in cabina.",
    },
    editorialSections: [
      {
        heading: "Pedicure: quando e perché ha senso (anche se non porti scarpe aperte)",
        paragraphs: [
          "Il punto non è solo \"piedi belli\": è piedi comodi. Quando la pelle è più liscia e le unghie sono ordinate, cambia anche la sensazione nella giornata.",
          "Per questo molte persone lo inseriscono come base: un servizio semplice, che ti rimette a posto senza complicarti la settimana.",
        ],
      },
      {
        heading: "Talloni secchi: il metodo migliore è delicato e ripetibile",
        paragraphs: [
          "Se la pelle è molto secca, la tentazione è fare troppo. Funziona meglio l'opposto: un lavoro sensato in studio, poi un mantenimento minimo che riesci a fare davvero.",
          "La regola che ripetiamo spesso è semplice: non serve \"grattare\", serve migliorare nel tempo.",
        ],
      },
      {
        heading: "Frequenza: la risposta giusta dipende da abitudini e stagione",
        paragraphs: [
          "Sport, docce, scarpe chiuse, piedi che sudano di più: sono tutte variabili che cambiano la frequenza ideale.",
          "In studio non ti diamo un calendario standard: ti proponiamo una finestra realistica e poi la aggiustiamo in base a come risponde la pelle.",
        ],
      },
      {
        heading: "Mantenimento a casa: due gesti che fanno davvero la differenza",
        paragraphs: [
          "Non servono rituali lunghi. Di solito basta idratazione costante e un po' di attenzione alle abitudini che seccano (detergenti aggressivi, attrito, scarpe).",
          "Dopo la seduta ti diciamo cosa fare in modo semplice: una micro-routine che non ti stanca.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "AAD - Nail care basics",
        url: "https://www.aad.org/public/everyday-care/nail-care-secrets/basics/nail-care-basics",
      },
    ],
  },
];

type SeoContentValidation = {
  errors: string[];
  warnings: string[];
};

function validateSeoContent(): SeoContentValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenServiceSlugs = new Set<string>();
  const seenCompetenceSlugs = new Set<string>();
  const normalizeForDupCheck = (value: string) =>
    value
      .toLowerCase()
      .replace(/<[^>]+>/g, " ")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const duplicateWarnings: string[] = [];
  const trackDuplicates = (
    bucket: Map<string, string[]>,
    value: string | undefined,
    label: string,
    slug: string,
  ) => {
    const normalized = normalizeForDupCheck(value ?? "");
    // Skip very short strings: too noisy to validate.
    if (normalized.length < 48) return;
    const list = bucket.get(normalized) ?? [];
    list.push(`${label}/${slug}`);
    bucket.set(normalized, list);
  };

  const dupServiceShort = new Map<string, string[]>();
  const dupServiceLong = new Map<string, string[]>();
  const dupCompetenceShort = new Map<string, string[]>();
  const dupCompetenceLong = new Map<string, string[]>();

  const editorialCharCount = (
    sections?: Array<{
      heading: string;
      paragraphs: string[];
    }>,
  ) =>
    (sections ?? [])
      .flatMap((s) => s.paragraphs ?? [])
      .join(" ")
      .replace(/\s+/g, " ")
      .trim().length;

  for (const service of servicePages) {
    if (seenServiceSlugs.has(service.slug)) errors.push(`Duplicate service slug: ${service.slug}`);
    seenServiceSlugs.add(service.slug);

    if ((service.benefits || []).length < 3) warnings.push(`[servizi/${service.slug}] benefits < 3`);
    if ((service.faqs || []).length < 2) warnings.push(`[servizi/${service.slug}] faqs < 2`);
    if ((service.keywords || []).length < 3) warnings.push(`[servizi/${service.slug}] keywords < 3`);

    if ((service.editorialSections ?? []).length < 2)
      warnings.push(`[servizi/${service.slug}] editorialSections < 2 (may be thin)`);

    if ((service.shortDescription || "").trim().length < 70)
      warnings.push(`[servizi/${service.slug}] shortDescription looks short (may be thin)`);
    if ((service.longDescription || "").trim().length < 160)
      warnings.push(`[servizi/${service.slug}] longDescription looks short (may be thin)`);
    if (editorialCharCount(service.editorialSections) < 420)
      warnings.push(`[servizi/${service.slug}] editorial content looks short (may be thin)`);

    trackDuplicates(dupServiceShort, service.shortDescription, "servizi", service.slug);
    trackDuplicates(dupServiceLong, service.longDescription, "servizi", service.slug);
  }

  for (const competence of competencePages) {
    if (seenCompetenceSlugs.has(competence.slug))
      errors.push(`Duplicate competence slug: ${competence.slug}`);
    seenCompetenceSlugs.add(competence.slug);

    if ((competence.benefits || []).length < 3)
      warnings.push(`[competenze/${competence.slug}] benefits < 3`);
    if ((competence.faqs || []).length < 2)
      warnings.push(`[competenze/${competence.slug}] faqs < 2`);
    if ((competence.keywords || []).length < 3)
      warnings.push(`[competenze/${competence.slug}] keywords < 3`);

    if ((competence.editorialSections ?? []).length < 2)
      warnings.push(`[competenze/${competence.slug}] editorialSections < 2 (may be thin)`);

    if ((competence.shortDescription || "").trim().length < 70)
      warnings.push(`[competenze/${competence.slug}] shortDescription looks short (may be thin)`);
    if ((competence.longDescription || "").trim().length < 160)
      warnings.push(`[competenze/${competence.slug}] longDescription looks short (may be thin)`);
    if (editorialCharCount(competence.editorialSections) < 520)
      warnings.push(`[competenze/${competence.slug}] editorial content looks short (may be thin)`);

    trackDuplicates(dupCompetenceShort, competence.shortDescription, "competenze", competence.slug);
    trackDuplicates(dupCompetenceLong, competence.longDescription, "competenze", competence.slug);
  }

  // Cross-link integrity (warn only).
  const competenceSlugSet = new Set(competencePages.map((c) => c.slug));
  const serviceSlugSet = new Set(servicePages.map((s) => s.slug));
  const protocolSlugSet = new Set(protocolPages.map((p) => p.slug));

  for (const service of servicePages) {
    for (const related of service.relatedCompetenceSlugs ?? []) {
      if (!competenceSlugSet.has(related))
        warnings.push(`[servizi/${service.slug}] missing competence reference: ${related}`);
    }

    for (const related of service.relatedProtocolSlugs ?? []) {
      if (!protocolSlugSet.has(related))
        warnings.push(`[servizi/${service.slug}] missing protocol reference: ${related}`);
    }
  }

  for (const competence of competencePages) {
    for (const related of competence.relatedServiceSlugs ?? []) {
      if (!serviceSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing service reference: ${related}`);
    }

    for (const related of competence.relatedCompetenceSlugs ?? []) {
      if (related === competence.slug)
        warnings.push(`[competenze/${competence.slug}] relatedCompetenceSlugs references itself`);
      else if (!competenceSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing competence reference: ${related}`);
    }

    for (const related of competence.relatedProtocolSlugs ?? []) {
      if (!protocolSlugSet.has(related))
        warnings.push(`[competenze/${competence.slug}] missing protocol reference: ${related}`);
    }
  }

  const pushDupGroupWarnings = (bucket: Map<string, string[]>, kind: string) => {
    const groups = Array.from(bucket.values()).filter((slugs) => slugs.length > 1);
    if (groups.length === 0) return;
    groups
      .slice(0, 12)
      .forEach((slugs) =>
        duplicateWarnings.push(`[dup] ${kind} appears identical across: ${slugs.slice(0, 6).join(", ")}${slugs.length > 6 ? " ..." : ""}`),
      );
    if (groups.length > 12) {
      duplicateWarnings.push(`[dup] ${kind}: ${groups.length - 12} more duplicate groups not shown`);
    }
  };

  pushDupGroupWarnings(dupServiceShort, "service shortDescription");
  pushDupGroupWarnings(dupServiceLong, "service longDescription");
  pushDupGroupWarnings(dupCompetenceShort, "competence shortDescription");
  pushDupGroupWarnings(dupCompetenceLong, "competence longDescription");
  warnings.push(...duplicateWarnings);

  return { errors, warnings };
}

const seoContentValidation = validateSeoContent();
if (seoContentValidation.errors.length > 0) {
  throw new Error(`[seo-content] Invalid content:\n${seoContentValidation.errors.join("\n")}`);
}

if (process.env.NODE_ENV !== "production" && seoContentValidation.warnings.length > 0) {
  // eslint-disable-next-line no-console
  console.warn(`[seo-content] Quality warnings:\n${seoContentValidation.warnings.join("\n")}\n`);
}

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getCompetenceBySlug(slug: string) {
  return competencePages.find((item) => item.slug === slug);
}

