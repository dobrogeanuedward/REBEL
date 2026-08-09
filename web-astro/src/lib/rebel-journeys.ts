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
    name: "Glow",
    eyebrow: "Luce · equilibrio · uniformità",
    summary: "Il mondo viso che raccoglie preparazione, barriera, equilibrio, luminosità e uniformità del tono.",
    href: "/percorsi#glow",
    heroSlot: "journeys.glow.hero.desktop",
  },
  {
    id: "longevity" as const,
    name: "Longevity",
    eyebrow: "Struttura · qualità nel tempo",
    summary: "Il mondo dedicato a tono, elasticità, compattezza e continuità della cura.",
    href: "/percorsi#longevity",
    heroSlot: "journeys.longevity.hero.desktop",
  },
  {
    id: "forma" as const,
    name: "Forma",
    eyebrow: "Corpo · rimodellare",
    summary: "Programmi corpo costruiti su tessuti, tono, microcircolo, ritenzione e priorità personali.",
    href: "/percorsi/forma",
    heroSlot: "journeys.forma.hero.desktop",
  },
  {
    id: "liberta" as const,
    name: "Libertà",
    eyebrow: "Epilazione progressiva",
    summary: "Area, fototipo, caratteristiche del pelo e calendario diventano un programma leggibile.",
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
    summary: "La soglia d’ingresso del Metodo REBEL: prepara la pelle prima di chiedere un risultato più specifico.",
    recognize: "Quando la pelle appare spenta, ruvida, irregolare o poco ricettiva ai trattamenti abituali.",
    objective: "Detergere, riequilibrare e rinnovare la superficie, migliorando grana e ricettività.",
    duration: "circa 60 min",
    price: "da €69",
    priceNote: "Il prezzo finale dipende dalla combinazione definita dopo la valutazione.",
    heroDesktopSlot: "home.hero.epigenetics.desktop",
    heroMobileSlot: "services.face.activesTopshot.mobile",
    heroAlt: "Preparazione professionale della pelle nel Metodo REBEL",
    chapters: [
      { eyebrow: "01 · Leggere", title: "Prima di intervenire, osserviamo.", body: "Texture, comfort e ricettività indicano quanto la pelle sia pronta e quale intensità abbia senso scegliere." },
      { eyebrow: "02 · Preparare", title: "Una pulizia che ha una direzione.", body: "Detersione, esfoliazione e supporto minerale vengono modulati per preparare il terreno ai passaggi successivi." },
      { eyebrow: "03 · Continuare", title: "Skin Reset apre la Mappa.", body: "La risposta della pelle orienta il percorso successivo: Barrier, Balance, Glow, White, Structure o Longevity." },
    ],
    actives: [
      { name: "Acido mandelico", role: "Esfoliazione selezionata della superficie." },
      { name: "Bromelina + papaina", role: "Enzimi da ananas e papaya inseriti nella fase di preparazione." },
      { name: "Perlite + matrice NMF", role: "Supporto alla qualità e al comfort della superficie." },
    ],
    botanicals: [
      { name: "Avena biologica", role: "Firma botanica dedicata al comfort." },
      { name: "Ananas + papaya", role: "Origine botanica degli enzimi scelti." },
      { name: "Pool minerale", role: "Componente minerale del protocollo." },
    ],
    technologies: [],
    technologyNote: "Skin Reset non parte da una macchina: eventuali strumenti professionali vengono selezionati solo dopo la Mappa REBEL.",
  },
  {
    slug: "barrier",
    number: "02",
    name: "Barrier",
    priority: "Proteggere",
    world: "glow",
    area: "Viso",
    summary: "Un percorso dedicato a comfort, idratazione e qualità della barriera cutanea.",
    recognize: "Quando la pelle tira, reagisce facilmente, perde comfort o mostra disidratazione.",
    objective: "Sostenere la barriera e la capacità della pelle di trattenere acqua, con una progressione rispettosa.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "La proposta viene calibrata sulle condizioni osservate durante la valutazione.",
    heroDesktopSlot: "journeys.longevity.hero.desktop",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Pelle reale e comfort nel percorso Barrier REBEL",
    chapters: [
      { eyebrow: "01 · Ascoltare", title: "Il comfort è un’informazione.", body: "Sensazioni, reattività e routine quotidiana entrano nella valutazione insieme all’aspetto della pelle." },
      { eyebrow: "02 · Sostenere", title: "Acqua e lipidi, senza sovraccaricare.", body: "La seduta viene costruita attorno a umettanti, ceramidi, lipidi e botaniche selezionate." },
      { eyebrow: "03 · Verificare", title: "La barriera detta il ritmo.", body: "Frequenza e abbinamenti vengono rivalutati in base al comfort percepito e alla risposta visibile." },
    ],
    actives: [
      { name: "Acido ialuronico multi-peso", role: "Supporto all’idratazione su più livelli della routine professionale." },
      { name: "Ceramidi + lipidi", role: "Componenti scelti per sostenere la barriera." },
      { name: "Vitamina B12", role: "Attivo inserito nella combinazione Barrier." },
    ],
    botanicals: [
      { name: "Calendula", role: "Botanica legata al comfort della pelle." },
      { name: "Manna", role: "Firma botanica complementare del percorso." },
    ],
    technologies: [],
    technologyNote: "Nel percorso Barrier la priorità è la tollerabilità. Una tecnologia entra soltanto se coerente con la valutazione e con il momento della pelle.",
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
    objective: "Lavorare sull’equilibrio dell’ecosistema cutaneo e sulla qualità della superficie.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "Attivi e frequenza dipendono dalla sensibilità e dalla priorità osservata.",
    heroDesktopSlot: "home.hero.face.desktop",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Pelle reale nel percorso Balance REBEL",
    chapters: [
      { eyebrow: "01 · Calibrare", title: "Non tutte le impurità chiedono la stessa cosa.", body: "Lucidità, pori, comfort e sensibilità vengono letti insieme per evitare automatismi." },
      { eyebrow: "02 · Riequilibrare", title: "Acidi, minerali e fermenti in dialogo.", body: "La combinazione cambia in base a zona, reattività e momento del percorso." },
      { eyebrow: "03 · Stabilizzare", title: "Il controllo conta quanto la seduta.", body: "La Mappa registra come cambia la superficie e quando è utile modificare intensità o cadenza." },
    ],
    actives: [
      { name: "Acido salicilico + azelaico", role: "Coppia di attivi selezionata per il lavoro sulla superficie." },
      { name: "Zinco, magnesio, rame, ferro e silicio", role: "Pool minerale della combinazione Balance." },
      { name: "Kombucha + CARYSOFT PROBIO", role: "Componenti fermentate del complesso professionale." },
    ],
    botanicals: [
      { name: "Bixa orellana", role: "Firma botanica del percorso Balance." },
      { name: "Kombucha", role: "Elemento fermentato della combinazione." },
    ],
    technologies: [],
    technologyNote: "La tecnologia non è automatica: strumenti come dermabrasione o ozono possono essere valutati dalla professionista solo quando pertinenti.",
  },
  {
    slug: "glow",
    number: "04",
    name: "Glow",
    priority: "Illuminare",
    world: "glow",
    area: "Viso",
    summary: "Luminosità, freschezza e qualità della superficie diventano una priorità misurabile nel tempo.",
    recognize: "Quando la pelle appare spenta, stanca o con texture poco uniforme.",
    objective: "Sostenere luminosità, freschezza e uniformità della superficie senza cancellare l’identità della pelle.",
    duration: "circa 60 min",
    price: "da €89",
    priceNote: "Il prezzo finale varia con attivi, preparazione ed eventuali integrazioni.",
    heroDesktopSlot: "journeys.glow.hero.desktop",
    heroMobileSlot: "journeys.glow.hero.mobile",
    heroAlt: "Luminosità naturale nel percorso Glow REBEL",
    chapters: [
      { eyebrow: "01 · Preparare", title: "La luce comincia dalla superficie.", body: "Quando serve, Skin Reset precede il percorso per rendere la pelle più ricettiva." },
      { eyebrow: "02 · Illuminare", title: "Attivi scelti, non sovrapposti.", body: "Vitamina C, acido ialuronico e mandelico vengono combinati secondo tollerabilità e obiettivo." },
      { eyebrow: "03 · Preservare", title: "Il Glow non finisce in cabina.", body: "Controlli e routine essenziale aiutano a conservare la qualità raggiunta." },
    ],
    actives: [
      { name: "Vitamina C stabilizzata", role: "Attivo centrale della combinazione Glow." },
      { name: "Acido ialuronico", role: "Supporto all’idratazione e al comfort." },
      { name: "Acido mandelico", role: "Esfoliazione selezionata quando la pelle lo consente." },
    ],
    botanicals: [
      { name: "Melograno", role: "Firma botanica della materia Glow." },
      { name: "Vinaccioli", role: "Botanica complementare del percorso." },
    ],
    technologies: [],
    technologyNote: "Glow può restare interamente cosmetico e manuale oppure integrare una tecnologia dopo valutazione: non esiste un abbinamento obbligatorio.",
  },
  {
    slug: "white",
    number: "05",
    name: "White",
    priority: "Uniformare",
    world: "glow",
    area: "Viso",
    summary: "Un percorso per discromie e tono irregolare, raccontato come uniformità e precisione — mai come cancellazione della pelle.",
    recognize: "Quando macchie e differenze di tono rendono l’incarnato visivamente irregolare.",
    objective: "Accompagnare una maggiore uniformità del tono preservando identità, texture e caratteristiche reali della pelle.",
    duration: "circa 60 min",
    price: "da €99",
    priceNote: "La combinazione è definita dopo valutazione; protezione e routine domiciliare sono proposte separatamente.",
    heroDesktopSlot: "home.hero.face.desktop",
    heroMobileSlot: "services.face.skinTexture.mobile",
    heroAlt: "Incarnato naturale nel percorso White Uniformare REBEL",
    chapters: [
      { eyebrow: "01 · Mappare", title: "Ogni differenza di tono ha un contesto.", body: "Osserviamo distribuzione, sensibilità, routine ed esposizione prima di scegliere la combinazione." },
      { eyebrow: "02 · Uniformare", title: "Precisione, non aggressività.", body: "Gli attivi vengono selezionati e alternati in funzione della tollerabilità e della fase del percorso." },
      { eyebrow: "03 · Proteggere", title: "Il mantenimento è parte del metodo.", body: "La rivalutazione guida la continuità e l’eventuale proposta home care." },
    ],
    actives: [
      { name: "Acido tranexamico + kojico", role: "Coppia di attivi della combinazione professionale." },
      { name: "Acido azelaico + ferulico", role: "Seconda coppia selezionabile nel percorso." },
      { name: "White Satsuma complex", role: "Complesso cosmetico dedicato all’uniformità del tono." },
    ],
    botanicals: [
      { name: "Boerhavia diffusa", role: "Firma botanica del percorso White." },
      { name: "Satsuma", role: "Componente botanica del complesso cosmetico." },
    ],
    technologies: [],
    technologyNote: "Il percorso parte dall’analisi della pelle e dagli attivi. Un eventuale supporto tecnologico viene deciso solo dopo la valutazione.",
  },
  {
    slug: "structure",
    number: "06",
    name: "Structure",
    priority: "Rigenerare",
    world: "longevity",
    area: "Viso",
    summary: "Materia e tecnologia si incontrano per lavorare su tono, elasticità e compattezza percepita.",
    recognize: "Quando tono, elasticità e compattezza diventano la priorità principale.",
    objective: "Sostenere la matrice cutanea con attivi selezionati, gesti professionali e tecnologie pertinenti.",
    duration: "circa 60 min",
    price: "da €109",
    priceNote: "La tecnologia non è inclusa automaticamente: il prezzo dipende dalla combinazione proposta.",
    heroDesktopSlot: "journeys.longevity.hero.desktop",
    heroMobileSlot: "journeys.longevity.hero.mobile",
    heroAlt: "Qualità della pelle nel percorso Structure REBEL",
    chapters: [
      { eyebrow: "01 · Definire", title: "Tono e qualità non sono sinonimi.", body: "La valutazione distingue la priorità e decide se partire da materia, manualità o tecnologia." },
      { eyebrow: "02 · Costruire", title: "Peptidi, ialuronico e gesti professionali.", body: "Gli elementi vengono combinati in una sequenza leggibile, senza sovrapposizioni automatiche." },
      { eyebrow: "03 · Controllare", title: "La struttura si osserva nel tempo.", body: "La Mappa guida il confronto fra sedute e l’eventuale evoluzione del programma." },
    ],
    actives: [
      { name: "Peptidi selezionati", role: "Attivi centrali della combinazione Structure." },
      { name: "Acido ialuronico multiforme", role: "Supporto a idratazione e qualità della superficie." },
      { name: "Coenzima Q10", role: "Componente della materia professionale." },
    ],
    botanicals: [
      { name: "Centella", role: "Botanica inserita nella combinazione Structure." },
      { name: "Olivello spinoso", role: "Firma botanica complementare." },
    ],
    technologies: ["Radiofrequenza", "Plasma", "Needling", "Vacuum ed endomassaggio viso"],
    technologyNote: "La professionista seleziona una tecnologia soltanto quando zona, condizioni iniziali e obiettivo la rendono pertinente.",
  },
  {
    slug: "longevity",
    number: "07",
    name: "Longevity",
    priority: "Preservare",
    world: "longevity",
    area: "Viso",
    summary: "Un percorso dinamico per mantenere barriera, luminosità, tono ed elasticità nel tempo.",
    recognize: "Quando l’obiettivo non è inseguire una singola imperfezione, ma preservare la qualità globale della pelle.",
    objective: "Costruire continuità attraverso valutazioni, sedute mirate, controlli e una routine sostenibile.",
    duration: "circa 60 min",
    price: "da €79",
    priceNote: "Membership: 2 sedute al mese da €149/mese; controllo cutaneo trimestrale incluso. Home care separata.",
    heroDesktopSlot: "journeys.longevity.hero.desktop",
    heroMobileSlot: "journeys.longevity.hero.mobile",
    heroAlt: "Bellezza adulta e autentica nel percorso Longevity REBEL",
    chapters: [
      { eyebrow: "01 · Fotografare il presente", title: "Longevity parte da come stai oggi.", body: "Barriera, luce, tono, elasticità e abitudini formano la base della Mappa." },
      { eyebrow: "02 · Alternare", title: "Non la stessa seduta, ogni volta.", body: "Il programma può alternare priorità e strumenti seguendo la risposta della pelle." },
      { eyebrow: "03 · Preservare", title: "La continuità diventa il risultato.", body: "Controlli periodici mantengono il percorso leggibile e correggibile." },
    ],
    actives: [
      { name: "Ceramidi + lipidi", role: "Supporto alla barriera nel programma di continuità." },
      { name: "Acido ialuronico multi-peso", role: "Elemento idratante modulabile." },
      { name: "Vitamina C + peptidi", role: "Attivi selezionabili secondo la priorità del momento." },
    ],
    botanicals: [
      { name: "Avena + calendula", role: "Botaniche orientate al comfort." },
      { name: "Aloe + curcuma", role: "Botaniche complementari del percorso." },
    ],
    technologies: [],
    technologyNote: "Longevity può integrare le tecnologie di Structure o altre piattaforme REBEL, ma solo in base alla priorità rilevata in quella fase.",
  },
  {
    slug: "forma",
    number: "08",
    name: "Forma",
    priority: "Rimodellare",
    world: "forma",
    area: "Corpo",
    summary: "Un programma corpo personalizzato che mette in relazione tessuti, tono, microcircolo, ritenzione e obiettivo.",
    recognize: "Quando pesantezza, ritenzione, tonicità, compattezza o silhouette richiedono una priorità chiara.",
    objective: "Costruire un programma corpo leggibile combinando materia, manualità e tecnologie selezionate.",
    duration: "60–90 min",
    price: "da €79",
    priceNote: "START 10 sedute da €690 · ADVANCED 15 da €960 · TOP 20 da €1.180.",
    heroDesktopSlot: "journeys.forma.hero.desktop",
    heroMobileSlot: "journeys.forma.hero.mobile",
    heroAlt: "Movimento e forma reale nel percorso corpo REBEL",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Il corpo non è una lista di zone.", body: "Tessuti, tono, sensazioni, abitudini e tempo disponibile costruiscono la priorità iniziale." },
      { eyebrow: "02 · Programmare", title: "DREN, SLIM, PHC o TON.", body: "La direzione guida la scelta di attivi, gesti e tecnologia, senza formule identiche per tutti." },
      { eyebrow: "03 · Misurare", title: "Il programma cambia con te.", body: "Controlli e rivalutazioni permettono di aggiornare sequenza, intensità e frequenza." },
    ],
    actives: [
      { name: "DREN · meliloto + rutina", role: "Direzione dedicata a leggerezza e gestione dei liquidi." },
      { name: "SLIM · guaranà + fucus", role: "Combinazione cosmetica della direzione SLIM." },
      { name: "PHC · L-carnitina + fosfatidilcolina", role: "Coppia di attivi della direzione PHC." },
      { name: "TON · kigelia + Lythrum", role: "Botaniche della direzione TON." },
    ],
    botanicals: [
      { name: "Fumaria + cardo mariano", role: "Botaniche complementari della direzione DREN." },
      { name: "Guaranà + fucus", role: "Materia botanica della direzione SLIM." },
      { name: "Kigelia + Lythrum", role: "Firma botanica della direzione TON." },
    ],
    technologies: ["Pressomassaggio", "Vacuum", "LPG endomassaggio", "Lipolaser + radiofrequenza", "Infrarosso", "Calzino termico", "Needling corpo"],
    technologyNote: "La sequenza tecnologica viene costruita dopo la valutazione. Nessuna piattaforma è inserita per abitudine o promessa di risultato.",
  },
  {
    slug: "liberta",
    number: "09",
    name: "Libertà",
    priority: "Semplificare",
    world: "liberta",
    area: "Epilazione",
    summary: "Epilazione progressiva con area, fototipo, caratteristiche del pelo e calendario definiti prima di iniziare.",
    recognize: "Quando desideri ridurre progressivamente la ricrescita e rendere più semplice la gestione quotidiana.",
    objective: "Impostare un percorso laser trasparente, con parametri, frequenza e controlli legati alla zona e al ciclo del pelo.",
    duration: "variabile per area",
    price: "da €25,90 per area",
    priceNote: "Prezzo di partenza per singola area. Estensione, numero e frequenza delle sedute sono definiti dopo la valutazione; promozioni e condizioni vanno verificate alla prenotazione.",
    heroDesktopSlot: "journeys.liberta.hero.desktop",
    heroMobileSlot: "journeys.liberta.hero.mobile",
    heroAlt: "Percorso Libertà per epilazione progressiva REBEL",
    chapters: [
      { eyebrow: "01 · Valutare", title: "Prima la pelle e il pelo, poi i parametri.", body: "Area, fototipo, caratteristiche del pelo e abitudini entrano nella Mappa prima della prima seduta." },
      { eyebrow: "02 · Programmare", title: "Un calendario legato al ciclo del pelo.", body: "Frequenza e controlli sono definiti per zona e vengono aggiornati durante il percorso." },
      { eyebrow: "03 · Accompagnare", title: "Comfort e supporto post-trattamento.", body: "Il freddo accompagna la seduta; il supporto cosmetico viene scelto per il momento successivo." },
    ],
    actives: [
      { name: "Allantoina", role: "Componente del supporto cosmetico post-trattamento." },
      { name: "Acido ialuronico", role: "Supporto all’idratazione dopo la seduta." },
    ],
    botanicals: [
      { name: "Aloe vera", role: "Botanica del supporto post-trattamento." },
      { name: "Boswellia serrata", role: "Componente botanica della combinazione." },
      { name: "Calendula", role: "Botanica dedicata al comfort." },
    ],
    technologies: ["Lumina X1 Pro di THORY", "ICE Polar per il comfort del freddo"],
    technologyNote: "Lumina X1 Pro è il dispositivo laser indicato nella brochure REBEL. ICE Polar accompagna la seduta come sistema di comfort; valutazione e parametri restano sempre personalizzati.",
  },
];

export const getJourney = (slug: string) => rebelJourneys.find((journey) => journey.slug === slug);

export const getJourneysByWorld = (world: RebelWorldId) =>
  rebelJourneys.filter((journey) => journey.world === world);
