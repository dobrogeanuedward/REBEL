export type ServiceSearchCopy = Readonly<{ title: string; description: string }>;

// Each service has a distinct booking intent. Broad discovery belongs to the
// service directory; promotional laser prices belong to the campaign page.
export const serviceSearchCopy: Readonly<Record<string, ServiceSearchCopy>> = {
  "pulizia-viso-carmagnola": {
    title: "Pulizia viso a Carmagnola: varianti e prezzi | REBEL",
    description: "Pulizia viso REBEL a Carmagnola: purificante, con acidi o ultrasuoni. Confronta le varianti, la durata e i prezzi prima di prenotare.",
  },
  "scrub-corpo-carmagnola": {
    title: "Scrub corpo a Carmagnola: seduta e prezzi | REBEL",
    description: "Scrub corpo REBEL a Carmagnola: come si svolge, prezzo e durata. Confronta scrub, peeling e abbinamento con massaggio prima di scegliere.",
  },
  "massaggio-linfodrenante-carmagnola": {
    title: "Massaggio linfodrenante a Carmagnola | REBEL",
    description: "Massaggio drenante e linfodrenante estetico a Carmagnola: manualità, frequenza e prezzo REBEL. Confronta le proposte e richiedi un appuntamento.",
  },
  "massaggio-rilassante-carmagnola": {
    title: "Massaggio rilassante a Carmagnola: prezzi | REBEL",
    description: "Massaggio rilassante REBEL a Carmagnola: durata, prezzo e manualità adattate alle tue preferenze. Confronta anche schiena, cervicale e piedi.",
  },
  "laminazione-ciglia-sopracciglia-carmagnola": {
    title: "Laminazione ciglia e sopracciglia Carmagnola | REBEL",
    description: "Laminazione ciglia, sopracciglia o combinata da REBEL a Carmagnola. Scopri le differenze, i tempi e i prezzi per scegliere il tuo appuntamento.",
  },
  "manicure-semipermanente-carmagnola": {
    title: "Manicure e semipermanente a Carmagnola | REBEL",
    description: "Manicure e semipermanente RBL Nails da REBEL a Carmagnola: colori, finiture e linea gel vegan, HEMA free e TPO free. Scegli la tua manicure.",
  },
  "pedicure-carmagnola": {
    title: "Pedicure a Carmagnola: cura e colore | REBEL",
    description: "Pedicure REBEL a Carmagnola: estetico, VIP con scrub, taglio unghie, smalto o semipermanente. Esplora i servizi e il mondo colore RBL Nails.",
  },
  "pedicure-estetico-carmagnola": {
    title: "Pedicure estetico a Carmagnola: cura piedi | REBEL",
    description: "Pedicure estetico REBEL a Carmagnola: cura di unghie, cuticole e rifinitura del piede. Scopri prezzo, durata e differenze rispetto alla formula VIP.",
  },
  "pedicure-estetico-con-smalto-carmagnola": {
    title: "Pedicure con smalto a Carmagnola | REBEL",
    description: "Pedicure con smalto da REBEL a Carmagnola: cura del piede, forma delle unghie e scelta del colore. Trova l’ispirazione e coordina mani e piedi.",
  },
  "pedicure-semipermanente-carmagnola": {
    title: "Semipermanente piedi e pedicure a Carmagnola | REBEL",
    description: "Semipermanente piedi RBL Nails da REBEL a Carmagnola: cura, colori e finiture. Esplora la linea gel vegan, HEMA free e TPO free e scegli il tuo stile.",
  },
  "taglio-unghie-piedi-carmagnola": {
    title: "Taglio unghie piedi a Carmagnola | REBEL",
    description: "Taglio e rifinitura estetica delle unghie dei piedi da REBEL a Carmagnola. Scopri durata, prezzo e quando scegliere questo servizio o un pedicure.",
  },
  "epilazione-laser-viso-carmagnola": {
    title: "Laser viso donna a Carmagnola: zone e sedute | REBEL",
    description: "Laser viso donna da REBEL a Carmagnola: baffetti, mento e altre zone da concordare. Valutazione della pelle, preparazione e calendario delle sedute.",
  },
  "epilazione-laser-corpo-carmagnola": {
    title: "Laser corpo donna a Carmagnola: zone e sedute | REBEL",
    description: "Epilazione laser corpo donna a Carmagnola: gambe, ascelle, inguine e altre zone. REBEL ti aiuta a definire aree, conteggio e calendario delle sedute.",
  },
  "epilazione-laser-viso-uomo-carmagnola": {
    title: "Laser barba e collo uomo a Carmagnola | REBEL",
    description: "Laser viso uomo a Carmagnola: definizione delle zone di barba e collo, rasatura e appuntamenti. Valutiamo pelle e caratteristiche del pelo da REBEL.",
  },
  "epilazione-laser-corpo-uomo-carmagnola": {
    title: "Laser schiena e corpo uomo a Carmagnola | REBEL",
    description: "Laser corpo uomo da REBEL a Carmagnola: schiena, torace, addome e altre zone. Scopri come concordiamo le aree e organizziamo gli appuntamenti.",
  },
  "ceretta-carmagnola": {
    title: "Ceretta donna e uomo a Carmagnola: prezzi | REBEL",
    description: "Ceretta donna e uomo a Carmagnola: viso, inguine, gambe, schiena e Total Body. Confronta cera e varianti brasiliane nel listino REBEL e prenota.",
  },
};

export const getServiceSearchCopy = (slug: string): ServiceSearchCopy | undefined => serviceSearchCopy[slug];
