export type RebelWorldId = "glow" | "longevity" | "forma" | "liberta";

export type JourneyChapter = {
  eyebrow: string;
  title: string;
  body: string;
};

export type JourneyIngredient = {
  name: string;
  role: string;
};

export type RebelJourney = {
  slug: string;
  number: string;
  name: string;
  priority: string;
  world: RebelWorldId;
  area: "Viso" | "Corpo" | "Epilazione";
  summary: string;
  recognize: string;
  objective: string;
  duration: string;
  price: string;
  priceNote: string;
  heroDesktopSlot: string;
  heroMobileSlot: string;
  heroAlt: string;
  chapters: JourneyChapter[];
  actives: JourneyIngredient[];
  botanicals: JourneyIngredient[];
  technologies: string[];
  technologyNote: string;
};

export const rebelWorlds = [
  {
    id: "glow" as const,
    name: "Pelle in equilibrio",
    eyebrow: "Viso · preparazione, idratazione e luminosità",
    summary: "Percorsi viso per preparare la pelle e lavorare su barriera, impurità, luminosità e uniformità del tono.",
    href: "/percorsi#glow",
    heroSlot: "journeys.glow.hero.desktop",
  },
  {
    id: "longevity" as const,
    name: "Tono e cura nel tempo",
    eyebrow: "Viso · compattezza ed elasticità",
    summary: "Percorsi viso dedicati a tono, elasticità, compattezza e continuità dei trattamenti.",
    href: "/percorsi#longevity",
    heroSlot: "journeys.longevity.hero.desktop",
  },
  {
    id: "forma" as const,
    name: "Trattamenti corpo",
    eyebrow: "Corpo · leggerezza, tono e compattezza",
    summary: "Programmi corpo per pesantezza, ritenzione, tono e compattezza.",
    href: "/percorsi/forma",
    heroSlot: "journeys.forma.hero.desktop",
  },
  {
    id: "liberta" as const,
    name: "Epilazione progressiva",
    eyebrow: "Laser · viso e corpo",
    summary: "Un percorso di epilazione progressiva definito in base a zona, fototipo e caratteristiche del pelo.",
    href: "/percorsi/liberta",
    heroSlot: "journeys.liberta.hero.desktop",
  },
] as const;

export const rebelJourneys: RebelJourney[] = [
  {
    slug: "skin-reset",
    number: "01",
    name: "Skin Reset",
    priority: "Preparare",
    world: "glow",
    area: "Viso",
    summary: "Il trattamento che prepara la pelle prima di affrontare esigenze più specifiche.",
    recognize: "Quando la pelle appare spenta, ruvida, irregolare o poco ricettiva ai trattamenti abituali.",
    objective: "Detergere, riequilibrare e rinnovare la superficie, migliorando grana e ricettività.",
    duration: "circa 60 min",
    price: "da €69",
    priceNote: "Il prezzo finale dipende dalla combinazione definita dopo la valutazione.",
    heroDesktopSlot: "home.hero.epigenetics.desktop",
    heroMobileSlot: "services.face.activesTopshot.mobile",
    heroAlt: "Prodotti e strumenti preparati per un trattamento viso",
    chapters: [
      { eyebrow: "01 · Osservare", title: "Prima di intervenire, osserviamo.", body: "Valutiamo grana, sensibilità e idratazione per scegliere il livello di trattamento più adatto." },
      { eyebrow: "02 · Preparare", title: "Pulizia ed esfoliazione, calibrate sulla pelle.", body: "Combiniamo detersione, esfoliazione e supporto minerale in base a ciò che osserviamo." },
      { eyebrow: "03 · Continuare", title: "Da qui capiamo come continuare.", body: "La risposta della pelle ci aiuta a scegliere il percorso successivo: Barrier, Balance, Glow, White, Structure o Longevity." },
    ],
    actives: [
      { name: "Acido mandelico", role: "Esfoliazione selezionata della superficie." },
      { name: "Bromelina + papaina", role: "Enzimi da ananas e papaya inseriti nella fase di preparazione." },
      { name: "Perlite + matrice NMF", role: "Componenti scelti per il comfort e l’idratazione della pelle." },
    ],
    botanicals: [
      { name: "Avena biologica", role: "Ingrediente scelto per il comfort della pelle." },
      { name: "Ananas + papaya", role: "Fonte vegetale degli enzimi utilizzati." },
      { name: "Pool minerale", role: "Componente minerale del protocollo." },
    ],
    technologies: [],
    technologyNote: "Skin Reset è soprattutto cosmetico e manuale. Eventuali strumenti vengono valutati dopo aver osservato la pelle.",
  },
  {
    slug: "barrier",
    number: "02",
    name: "Barrier",
    priority: "Proteggere",
    world: "glow",
    area: "Viso",
    summary: "Un percorso dedicato a comfort, idratazione e protezione della barriera cutanea.",
    recognize: "Quando la pelle tira, reagisce facilmente, perde comfort o mostra disidratazione.",
    objective: "Sostenere idratazione, comfort e barriera cutanea con trattamenti calibrati sulla sensibilità della pelle.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "Il trattamento e il prezzo finale vengono definiti dopo la valutazione della pelle.",
    heroDesktopSlot: "services.face.skinTexture.mobile",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Dettaglio ravvicinato della grana naturale della pelle",
    chapters: [
      { eyebrow: "01 · Ascoltare", title: "Il comfort è un’informazione.", body: "Sensazioni, reattività e routine quotidiana entrano nella valutazione insieme all’aspetto della pelle." },
      { eyebrow: "02 · Sostenere", title: "Idratazione e lipidi, senza sovraccaricare.", body: "La seduta viene costruita attorno a umettanti, ceramidi, lipidi ed estratti vegetali selezionati." },
      { eyebrow: "03 · Verificare", title: "Controlliamo come risponde la pelle.", body: "Rivediamo frequenza e abbinamenti in base al comfort percepito e ai cambiamenti osservati." },
    ],
    actives: [
      { name: "Acido ialuronico multi-peso", role: "Aiuta a sostenere l’idratazione della pelle." },
      { name: "Ceramidi + lipidi", role: "Componenti scelti per sostenere la barriera." },
      { name: "Vitamina B12", role: "Attivo inserito nella combinazione Barrier." },
    ],
    botanicals: [
      { name: "Calendula", role: "Estratto scelto per il comfort della pelle." },
      { name: "Manna", role: "Estratto vegetale presente nella formula Barrier." },
    ],
    technologies: [],
    technologyNote: "Le tecnologie vengono valutate solo se adatte alle condizioni e alla sensibilità della pelle.",
  },
  {
    slug: "balance",
    number: "03",
    name: "Balance",
    priority: "Equilibrare",
    world: "glow",
    area: "Viso",
    summary: "Un percorso per pelle lucida, impurità, pori visibili e superficie irregolare.",
    recognize: "Quando lucidità, comedoni, impurità o grana non uniforme convivono e cambiano nel tempo.",
    objective: "Lavorare su lucidità, impurità, pori visibili e grana irregolare, rispettando la sensibilità della pelle.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "Attivi e frequenza dipendono dalla sensibilità e dalla priorità osservata.",
    heroDesktopSlot: "home.hero.face.desktop",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Viso di una cliente in luce naturale",
    chapters: [
      { eyebrow: "01 · Calibrare", title: "Non tutte le impurità richiedono lo stesso trattamento.", body: "Valutiamo insieme lucidità, pori, comfort e sensibilità prima di scegliere attivi e intensità." },
      { eyebrow: "02 · Riequilibrare", title: "Una combinazione calibrata di acidi, minerali e fermenti.", body: "La combinazione cambia in base alla zona, alla sensibilità e alla risposta della pelle." },
      { eyebrow: "03 · Stabilizzare", title: "Il controllo conta quanto la seduta.", body: "Durante i controlli osserviamo come cambia la pelle e aggiorniamo intensità o frequenza quando necessario." },
    ],
    actives: [
      { name: "Acido salicilico + azelaico", role: "Coppia di attivi selezionata per il lavoro sulla superficie." },
      { name: "Zinco, magnesio, rame, ferro e silicio", role: "Pool minerale della combinazione Balance." },
      { name: "Kombucha + CARYSOFT PROBIO", role: "Componenti fermentati del complesso professionale." },
    ],
    botanicals: [
      { name: "Bixa orellana", role: "Estratto vegetale presente nella formula Balance." },
      { name: "Kombucha", role: "Elemento fermentato della combinazione." },
    ],
    technologies: [],
    technologyNote: "Dopo la valutazione, la professionista può proporre dermabrasione o ozono se adatti alla pelle.",
  },
  {
    slug: "glow",
    number: "04",
    name: "Glow",
    priority: "Illuminare",
    world: "glow",
    area: "Viso",
    summary: "Un percorso dedicato a luminosità, freschezza e uniformità della pelle.",
    recognize: "Quando la pelle appare spenta, stanca o con texture poco uniforme.",
    objective: "Lavorare su luminosità, freschezza e uniformità mantenendo un risultato naturale.",
    duration: "circa 60 min",
    price: "da €89",
    priceNote: "Il prezzo finale varia con attivi, preparazione ed eventuali integrazioni.",
    heroDesktopSlot: "journeys.glow.hero.desktop",
    heroMobileSlot: "journeys.glow.hero.mobile",
    heroAlt: "Viso di una cliente illuminato dalla luce laterale",
    chapters: [
      { eyebrow: "01 · Preparare", title: "Prepariamo la pelle al trattamento.", body: "Quando serve, Skin Reset precede il percorso per rendere la pelle più ricettiva." },
      { eyebrow: "02 · Illuminare", title: "La combinazione adatta alla tua pelle.", body: "Vitamina C, acido ialuronico e mandelico vengono combinati secondo sensibilità e obiettivo." },
      { eyebrow: "03 · Preservare", title: "Come mantenere il risultato a casa.", body: "Controlli e una routine essenziale aiutano a conservare i risultati raggiunti." },
    ],
    actives: [
      { name: "Vitamina C stabilizzata", role: "Attivo centrale della combinazione Glow." },
      { name: "Acido ialuronico", role: "Supporto all’idratazione e al comfort." },
      { name: "Acido mandelico", role: "Esfoliazione selezionata quando la pelle lo consente." },
    ],
    botanicals: [
      { name: "Melograno", role: "Estratto vegetale presente nella formula Glow." },
      { name: "Vinaccioli", role: "Ingrediente complementare del percorso." },
    ],
    technologies: [],
    technologyNote: "Glow può essere cosmetico e manuale; dopo la valutazione possiamo aggiungere una tecnologia se utile.",
  },
  {
    slug: "white",
    number: "05",
    name: "White",
    priority: "Uniformare",
    world: "glow",
    area: "Viso",
    summary: "Un percorso dedicato a macchie e tono irregolare, con un approccio graduale e rispettoso della pelle.",
    recognize: "Quando macchie e differenze di tono rendono l’incarnato visivamente irregolare.",
    objective: "Lavorare sull’uniformità del tono rispettando sensibilità e caratteristiche della pelle.",
    duration: "circa 60 min",
    price: "da €99",
    priceNote: "La combinazione viene definita dopo la valutazione. I prodotti consigliati per casa sono proposti separatamente.",
    heroDesktopSlot: "home.hero.face.desktop",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Viso di una cliente in luce naturale",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Osserviamo macchie e differenze di tono.", body: "Valutiamo distribuzione, sensibilità, routine ed esposizione prima di scegliere la combinazione." },
      { eyebrow: "02 · Uniformare", title: "Un lavoro graduale sull’uniformità.", body: "Gli attivi vengono selezionati e alternati in base alla sensibilità della pelle e alla fase del percorso." },
      { eyebrow: "03 · Proteggere", title: "Il mantenimento è parte del metodo.", body: "Ai controlli verifichiamo i cambiamenti e, se utile, consigliamo una routine da seguire a casa." },
    ],
    actives: [
      { name: "Acido tranexamico + kojico", role: "Coppia di attivi della combinazione professionale." },
      { name: "Acido azelaico + ferulico", role: "Seconda coppia selezionabile nel percorso." },
      { name: "White Satsuma complex", role: "Complesso cosmetico dedicato all’uniformità del tono." },
    ],
    botanicals: [
      { name: "Boerhavia diffusa", role: "Estratto vegetale presente nella formula White." },
      { name: "Satsuma", role: "Componente vegetale del complesso cosmetico." },
    ],
    technologies: [],
    technologyNote: "Il percorso parte dall’analisi della pelle e dagli attivi. Un eventuale supporto tecnologico viene deciso solo dopo la valutazione.",
  },
  {
    slug: "structure",
    number: "06",
    name: "Structure",
    priority: "Sostenere",
    world: "longevity",
    area: "Viso",
    summary: "Un percorso viso per lavorare su tono, elasticità e compattezza, con attivi e tecnologie scelti dopo la valutazione.",
    recognize: "Quando tono, elasticità e compattezza diventano la priorità principale.",
    objective: "Definire una combinazione di attivi, manualità e tecnologie adatta alla pelle e all’obiettivo.",
    duration: "circa 60 min",
    price: "da €109",
    priceNote: "Il prezzo varia in base agli attivi e all’eventuale tecnologia scelta.",
    heroDesktopSlot: "services.technologies.detail.desktop",
    heroMobileSlot: "services.technologies.detail.mobile",
    heroAlt: "Professionista durante un trattamento con tecnologia estetica",
    chapters: [
      { eyebrow: "01 · Definire", title: "Capiamo su cosa lavorare per primo.", body: "Durante la valutazione decidiamo se partire da attivi, manualità o tecnologia." },
      { eyebrow: "02 · Costruire", title: "Peptidi, ialuronico e manualità professionali.", body: "Combiniamo attivi e manualità in base alle condizioni della pelle." },
      { eyebrow: "03 · Controllare", title: "Valutiamo i cambiamenti nel tempo.", body: "Confrontiamo la risposta tra una seduta e l’altra e aggiorniamo il programma quando necessario." },
    ],
    actives: [
      { name: "Peptidi selezionati", role: "Attivi centrali della combinazione Structure." },
      { name: "Acido ialuronico multiforme", role: "Supporto all’idratazione e al comfort della pelle." },
      { name: "Coenzima Q10", role: "Attivo della formula professionale Structure." },
    ],
    botanicals: [
      { name: "Centella", role: "Estratto vegetale inserito nella combinazione Structure." },
      { name: "Olivello spinoso", role: "Estratto vegetale presente nella formula Structure." },
    ],
    technologies: ["Radiofrequenza", "Plasma", "Needling", "Vacuum ed endomassaggio viso"],
    technologyNote: "La tecnologia viene scelta in base alla zona, alle condizioni iniziali e all’obiettivo concordato.",
  },
  {
    slug: "longevity",
    number: "07",
    name: "Longevity",
    priority: "Mantenere",
    world: "longevity",
    area: "Viso",
    summary: "Un percorso continuativo per sostenere barriera, luminosità, tono ed elasticità nel tempo.",
    recognize: "Quando vuoi lavorare nel tempo su idratazione, luminosità, tono ed elasticità.",
    objective: "Seguire la pelle nel tempo con valutazioni, sedute mirate, controlli e una routine adatta alle tue abitudini.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "Seduta singola da €79. Formula mensile: 2 sedute a €149, con controllo cutaneo trimestrale incluso. Prodotti da usare a casa esclusi.",
    heroDesktopSlot: "journeys.longevity.hero.desktop",
    heroMobileSlot: "journeys.longevity.hero.mobile",
    heroAlt: "Cliente durante un trattamento viso",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Partiamo dalle condizioni attuali della pelle.", body: "Valutiamo barriera, luminosità, tono, elasticità e abitudini." },
      { eyebrow: "02 · Alternare", title: "Ogni seduta segue la risposta della pelle.", body: "Il programma può cambiare prodotti, manualità o tecnologie in base ai risultati dei controlli." },
      { eyebrow: "03 · Preservare", title: "Manteniamo il percorso nel tempo.", body: "I controlli periodici ci permettono di aggiornare trattamenti e frequenza." },
    ],
    actives: [
      { name: "Ceramidi + lipidi", role: "Supporto alla barriera nel programma di continuità." },
      { name: "Acido ialuronico multi-peso", role: "Elemento idratante modulabile." },
      { name: "Vitamina C + peptidi", role: "Attivi scelti in base alle esigenze osservate." },
    ],
    botanicals: [
      { name: "Avena + calendula", role: "Estratti scelti per il comfort della pelle." },
      { name: "Aloe + curcuma", role: "Estratti vegetali complementari del percorso." },
    ],
    technologies: [],
    technologyNote: "In base a come cambia la pelle, il percorso può includere attivi, manualità o tecnologie diverse.",
  },
  {
    slug: "forma",
    number: "08",
    name: "Forma",
    priority: "Rimodellare",
    world: "forma",
    area: "Corpo",
    summary: "Un programma corpo personalizzato per lavorare su pesantezza, ritenzione, tono e compattezza.",
    recognize: "Quando avverti pesantezza o vuoi lavorare su tono, compattezza e aspetto della silhouette.",
    objective: "Definire trattamenti, manualità e tecnologie in base a come ti senti e al risultato che cerchi.",
    duration: "60–90 min",
    price: "da €79",
    priceNote: "Pacchetti: Start, 10 sedute da €690; Advanced, 15 da €960; Top, 20 da €1.180.",
    heroDesktopSlot: "journeys.forma.hero.desktop",
    heroMobileSlot: "journeys.forma.hero.mobile",
    heroAlt: "Professionista durante un trattamento corpo",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Partiamo da come ti senti e dal risultato che cerchi.", body: "Valutiamo tessuti, tono, sensazioni, abitudini e tempo disponibile." },
      { eyebrow: "02 · Programmare", title: "Scegliamo l’obiettivo del programma.", body: "In base all’obiettivo scegliamo attivi, manualità e tecnologie." },
      { eyebrow: "03 · Controllare", title: "Aggiorniamo il programma durante i controlli.", body: "Le rivalutazioni permettono di modificare sequenza, intensità e frequenza quando serve." },
    ],
    actives: [
      { name: "DREN · meliloto + rutina", role: "Formula con meliloto e rutina." },
      { name: "SLIM · guaranà + fucus", role: "Formula cosmetica con guaranà e fucus." },
      { name: "PHC · L-carnitina + fosfatidilcolina", role: "Formula con L-carnitina e fosfatidilcolina." },
      { name: "TON · kigelia + Lythrum", role: "Formula con estratti di kigelia e Lythrum." },
    ],
    botanicals: [
      { name: "Fumaria + cardo mariano", role: "Estratti vegetali presenti nella formula DREN." },
      { name: "Guaranà + fucus", role: "Estratti vegetali presenti nella formula SLIM." },
      { name: "Kigelia + Lythrum", role: "Estratti vegetali presenti nella formula TON." },
    ],
    technologies: ["Pressomassaggio", "Vacuum", "LPG endomassaggio", "Lipolaser + radiofrequenza", "Infrarosso", "Calzino termico", "Needling corpo"],
    technologyNote: "Dopo la valutazione scegliamo le tecnologie più adatte all’obiettivo e definiamo sequenza, intensità e frequenza.",
  },
  {
    slug: "liberta",
    number: "09",
    name: "Libertà",
    priority: "Semplificare",
    world: "liberta",
    area: "Epilazione",
    summary: "Un percorso di epilazione progressiva costruito su zona, fototipo, caratteristiche del pelo e calendario delle sedute.",
    recognize: "Quando desideri ridurre progressivamente la ricrescita e rendere più semplice la gestione quotidiana.",
    objective: "Definire parametri, frequenza e controlli in base alla zona e al ciclo del pelo.",
    duration: "variabile per area",
    price: "da €25,90 per area",
    priceNote: "Il prezzo parte da €25,90 per singola area e varia in base all’estensione. Frequenza e numero di sedute vengono definiti dopo la valutazione; eventuali promozioni sono confermate al momento della prenotazione.",
    heroDesktopSlot: "journeys.liberta.hero.desktop",
    heroMobileSlot: "journeys.liberta.hero.mobile",
    heroAlt: "Professionista durante una seduta di epilazione laser",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Prima la pelle e il pelo, poi i parametri.", body: "Prima della prima seduta valutiamo area, fototipo, caratteristiche del pelo e abitudini." },
      { eyebrow: "02 · Programmare", title: "Un calendario legato al ciclo del pelo.", body: "Frequenza e controlli sono definiti per zona e vengono aggiornati durante il percorso." },
      { eyebrow: "03 · Accompagnare", title: "Comfort e supporto dopo il trattamento.", body: "ICE Polar aiuta a rendere la seduta più confortevole; dopo il trattamento scegliamo il supporto cosmetico più adatto." },
    ],
    actives: [
      { name: "Allantoina", role: "Componente del supporto cosmetico post-trattamento." },
      { name: "Acido ialuronico", role: "Supporto all’idratazione dopo la seduta." },
    ],
    botanicals: [
      { name: "Aloe vera", role: "Ingrediente utilizzato dopo il trattamento." },
      { name: "Boswellia serrata", role: "Componente vegetale della combinazione." },
      { name: "Calendula", role: "Estratto scelto per il comfort della pelle." },
    ],
    technologies: ["Lumina X1 Pro di THORY", "ICE Polar per il comfort durante la seduta"],
    technologyNote: "Utilizziamo Lumina X1 Pro di THORY con raffreddamento a contatto, che in REBEL chiamiamo ICE Polar. Parametri e frequenza vengono definiti dopo la valutazione.",
  },
];

export const getJourney = (slug: string) => rebelJourneys.find((journey) => journey.slug === slug);

export const getJourneysByWorld = (world: RebelWorldId) =>
  rebelJourneys.filter((journey) => journey.world === world);
