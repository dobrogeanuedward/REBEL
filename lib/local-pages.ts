export type LocalAreaPage = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  whyRebel: string[];
  keywords: string[];
};

export const localAreaPages: LocalAreaPage[] = [
  {
    slug: "carmagnola",
    city: "Carmagnola",
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
    slug: "torino-sud",
    city: "Torino Sud",
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
    slug: "alba",
    city: "Alba",
    title: "Da Alba a Rebel Carmagnola",
    description:
      "Per chi arriva da Alba: trattamenti viso/corpo ed epilazione laser in uno studio avanzato a Carmagnola.",
    intro:
      "Chi arriva da Alba ci sceglie per la combinazione tra approccio umano, metodo e risultati realistici.",
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
];

export function getLocalAreaBySlug(slug: string) {
  return localAreaPages.find((item) => item.slug === slug);
}

