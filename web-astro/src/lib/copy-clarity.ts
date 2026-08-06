type Faq = { q: string; a: string };
type EditorialSection = { heading: string; paragraphs: string[] };

type CopyContent = {
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  faqs: Faq[];
  editorialSections?: EditorialSection[];
};

const sentenceRules: Array<[RegExp, string]> = [
  [/Prima la tua esigenza\. Poi la tecnologia\./gi, "Valutiamo la zona e l’obiettivo, poi scegliamo la tecnologia e i parametri adatti."],
  [/Prima la pelle\. Poi la tecnologia\./gi, "Valutiamo la pelle, poi scegliamo prodotti, manualità e tecnologie adatti."],
  [/Prima di scegliere un trattamento, capiamo (?:cosa|che cosa) viene prima\./gi, "Valutiamo pelle o corpo e definiamo quale esigenza trattare per prima."],
  [/La tua pelle cambia\. Anche il percorso deve cambiare\./gi, "Controlliamo la risposta della pelle e aggiorniamo trattamenti e frequenza quando necessario."],
  [/La pelle cambia\. Il percorso evolve\./gi, "Controlliamo la pelle durante gli appuntamenti e aggiorniamo il programma di trattamento."],
  [/La bellezza segue il tuo ritmo\./gi, "Trattamenti definiti in base alla tua pelle, al tuo corpo e al risultato desiderato."],
  [/Ogni pelle ha una priorità\./gi, "Ogni pelle può avere esigenze diverse: idratazione, luminosità, uniformità, tono o comfort."],
  [/Ogni percorso nasce da una priorità precisa\./gi, "Ogni programma parte dall’esigenza da trattare: luminosità, tono, drenaggio o ricrescita dei peli."],
  [/Un mondo di bellezza, guidato dal metodo\./gi, "Trattamenti viso, corpo, laser e beauty disponibili nello stesso centro estetico."],
  [/La tecnologia più adatta è quella che serve adesso\./gi, "La tecnologia viene scelta in base alla zona, alle condizioni osservate e al risultato concordato."],
  [/Il prezzo è la porta[^.]*\./gi, "Il prezzo viene comunicato prima della prenotazione insieme a modalità e durata del trattamento."],
  [/Il prezzo è una scelta[^.]*\./gi, "Il prezzo dipende dal servizio, dalla zona e dalla durata indicati nella scheda."],
  [/Il risultato migliore è quello che[^.]*\./gi, "Il trattamento viene adattato alla sensibilità e all’obiettivo concordato."],
  [/La differenza la fa l['’]impostazione:[^.]*\./gi, "Pressione, zone e frequenza vengono adattate alle condizioni della pelle."],
  [/L['’]idea è partire bene, non fare tutto insieme\./gi, "Gli altri servizi possono essere aggiunti in un secondo momento, solo se utili."],
  [/Meglio un[^.]*che una[^.]*\./gi, "La frequenza viene scelta in modo realistico e compatibile con i tuoi impegni."],
  [/Se non sai da dove partire/gi, "Se non sai quale trattamento scegliere"],
  [/Non sai da dove partire/gi, "Non sai quale trattamento scegliere"],
  [/Scritte da chi lo fa in cabina, non da un copy\./gi, "Basate sui servizi e sulle modalità utilizzate nello studio."],
  [/Hai letto, hai capito[^.]*\./gi, "Dopo la guida puoi prenotare una valutazione gratuita e ricevere indicazioni specifiche."],
  [/Si parte da quello che ti serve adesso[^.]*\./gi, "Il trattamento viene scelto in base alla zona e al risultato che vuoi ottenere."],
];

const phraseRules: Array<[RegExp, string]> = [
  [/\buna regia professionale\b/gi, "un programma professionale"],
  [/\bla regia Rebel\b/gi, "il programma Rebel"],
  [/\bregia\b/gi, "programma"],
  [/\barchitettura del percorso\b/gi, "programma di trattamento"],
  [/\barchitettura Rebel\b/gi, "programma Rebel"],
  [/\barchitettura\b/gi, "programma"],
  [/\buna progressione coerente\b/gi, "un programma con frequenza definita"],
  [/\bprogressione personalizzata\b/gi, "programma personalizzato"],
  [/\bprogressione luminosa\b/gi, "programma dedicato alla luminosità"],
  [/\bprogressione\b/gi, "programma di sedute"],
  [/\bun ritmo ben costruito\b/gi, "una frequenza regolare"],
  [/\bun ritmo coerente\b/gi, "una frequenza regolare"],
  [/\bun ritmo sensato\b/gi, "una frequenza adatta"],
  [/\bun ritmo che ti viene naturale\b/gi, "una frequenza compatibile con i tuoi impegni"],
  [/\britmo regolare\b/gi, "frequenza regolare"],
  [/\britmo\b/gi, "frequenza"],
  [/\bcadenza coerente\b/gi, "frequenza definita"],
  [/\bdirezione più coerente\b/gi, "trattamento più adatto"],
  [/\bdirezione iniziale\b/gi, "obiettivo iniziale"],
  [/\bdirezione Rebel\b/gi, "obiettivo del trattamento"],
  [/\bdirezione\b/gi, "obiettivo"],
  [/\binterpolat([ioa]|e)\b/gi, "combinat$1"],
  [/\borchestrat([ioa]|e)\b/gi, "combinat$1"],
  [/\bresa estetica\b/gi, "risultato estetico"],
  [/\bresa\b/gi, "risultato"],
  [/\bpresenza più raffinata\b/gi, "aspetto più uniforme"],
  [/\bpresenza\b/gi, "aspetto"],
  [/\bcustodire\b/gi, "mantenere"],
  [/\bcustodisce\b/gi, "mantiene"],
  [/\bcustodita\b/gi, "mantenuta"],
  [/\bquando serve davvero\b/gi, "quando la valutazione lo indica"],
  [/\bquando serve\b/gi, "quando la valutazione lo indica"],
  [/\bquando ha senso\b/gi, "quando può essere indicato"],
  [/\bcosa viene prima\b/gi, "quale esigenza trattare per prima"],
  [/\bciò che viene prima\b/gi, "l’esigenza da trattare per prima"],
  [/\bda dove partire\b/gi, "quale trattamento iniziare"],
  [/\bpunto di partenza\b/gi, "condizioni iniziali"],
  [/\bquello che ti serve adesso\b/gi, "l’esigenza che vuoi trattare"],
  [/\bscelta coerente\b/gi, "scelta adatta alla zona e all’obiettivo"],
  [/\bscelta più pulita\b/gi, "scelta più adatta"],
  [/\bpiù coerente\b/gi, "più adatto"],
  [/\bcoerente con\b/gi, "adatto a"],
  [/\bporta d['’]ingresso al risultato\b/gi, "prezzo iniziale del trattamento"],
  [/\bpasso più avanzato\b/gi, "protocollo collegato"],
  [/\bpasso successivo\b/gi, "trattamento successivo"],
  [/\balzare l['’]asticella\b/gi, "valutare un protocollo più specifico"],
  [/\bapri consulenza\b/gi, "prenota la prima visita"],
  [/\bpiacevole da abitare\b/gi, "più confortevole"],
  [/\bresta addosso\b/gi, "si mantiene più a lungo"],
  [/\bleggerezza che diventa presenza\b/gi, "riduzione di gonfiore e pesantezza"],
  [/\bpercezione di cura\b/gi, "aspetto ordinato"],
  [/\bstrumenti della stessa [^.]+\b/gi, "trattamenti combinati nello stesso programma"],
  [/\bstrumenti dentro un programma più grande\b/gi, "trattamenti combinati in base all’obiettivo"],
  [/\bevolutiv([oaie])\b/gi, "personalizzat$1"],
  [/\btraiettoria\b/gi, "programma"],
  [/\bslancio\b/gi, "tono"],
  [/\bmovimenti\b/gi, "fasi"],
  [/\bgesto singolo\b/gi, "singolo trattamento"],
  [/\bgesto\b/gi, "trattamento"],
  [/\bdialogano\b/gi, "vengono combinati"],
  [/\bdialoga\b/gi, "viene combinato"],
  [/\battivato\b/gi, "utilizzato"],
  [/\battivati\b/gi, "utilizzati"],
  [/\bfar crescere\b/gi, "migliorare"],
  [/\bfar durare\b/gi, "mantenere"],
  [/\btrasformare il sollievo iniziale in\b/gi, "mantenere"],
  [/\bnon dal pacchetto più costoso\b/gi, "in base alla zona e all’obiettivo"],
  [/\bsenza stravolgere\b/gi, "con un risultato naturale"],
  [/\bsenza eccessi\b/gi, "con un risultato naturale"],
  [/\bfatto come si deve\b/gi, "eseguito con modalità professionali"],
  [/\bfatti come si deve\b/gi, "eseguiti con modalità professionali"],
  [/\blavori in profondità\b/gi, "agisca su un obiettivo specifico"],
  [/\blavorare in profondità\b/gi, "trattare un obiettivo specifico"],
  [/\bleggere la pelle\b/gi, "valutare la pelle"],
  [/\bleggiamo la pelle\b/gi, "valutiamo la pelle"],
  [/\blegge la pelle\b/gi, "valuta la pelle"],
  [/\baccendere il risultato\b/gi, "migliorare luminosità e uniformità"],
  [/\bluce più leggibile\b/gi, "maggiore luminosità"],
  [/\brisposte oneste\b/gi, "risposte pratiche"],
  [/\bsenza claim gonfiati\b/gi, "con informazioni su modalità, durata e limiti"],
  [/\bsentirti a posto\b/gi, "avere un aspetto curato"],
  [/\bsentirsi a posto\b/gi, "avere un aspetto curato"],
  [/\bstep\b/gi, "fase"],
];

const accentRules: Array<[RegExp, string]> = [
  [/\bpiu['’]/gi, "più"],
  [/\bqualita['’]/gi, "qualità"],
  [/\bluminosita['’]/gi, "luminosità"],
  [/\bsensibilita['’]/gi, "sensibilità"],
  [/\btonicita['’]/gi, "tonicità"],
  [/\bmodalita['’]/gi, "modalità"],
  [/\bprofondita['’]/gi, "profondità"],
  [/\bintensita['’]/gi, "intensità"],
  [/\bcontinuita['’]/gi, "continuità"],
  [/\bnecessita['’]/gi, "necessità"],
  [/\battivita['’]/gi, "attività"],
  [/\bpossibilita['’]/gi, "possibilità"],
  [/\breattivita['’]/gi, "reattività"],
  [/\belasticita['’]/gi, "elasticità"],
  [/\buniformita['’]/gi, "uniformità"],
  [/\bcitta['’]/gi, "città"],
  [/\bcosi['’]/gi, "così"],
  [/\bperche['’]/gi, "perché"],
  [/\bgia['’]/gi, "già"],
  [/\b[Ee]['’](?=\s|$|[.,;:!?])/g, (match) => (match[0] === "E" ? "È" : "è") as unknown as string],
];

function normalizeItalianTypography(value: string): string {
  let result = value;
  for (const [pattern, replacement] of accentRules) {
    result = typeof replacement === "string" ? result.replace(pattern, replacement) : result;
  }
  return result
    .replace(/\bE['’](?=\s|$|[.,;:!?])/g, "È")
    .replace(/\be['’](?=\s|$|[.,;:!?])/g, "è")
    .replace(/'/g, "’")
    .replace(/\bun frequenza\b/gi, "una frequenza")
    .replace(/\bil frequenza\b/gi, "la frequenza")
    .replace(/\bquesto frequenza\b/gi, "questa frequenza")
    .replace(/\bun obiettivo iniziale\b/gi, "un obiettivo iniziale")
    .replace(/\bun programma di sedute personalizzata\b/gi, "un programma di sedute personalizzato");
}

export function clarifyCopy(value: string): string {
  let result = normalizeItalianTypography(value);
  for (const [pattern, replacement] of sentenceRules) result = result.replace(pattern, replacement);
  for (const [pattern, replacement] of phraseRules) result = result.replace(pattern, replacement);
  result = normalizeItalianTypography(result);
  return result
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([.!?]){2,}/g, "$1")
    .trim();
}

export function clarifyContent<T extends CopyContent>(content: T): T {
  return {
    ...content,
    shortDescription: clarifyCopy(content.shortDescription),
    longDescription: clarifyCopy(content.longDescription),
    benefits: content.benefits.map(clarifyCopy),
    faqs: content.faqs.map((faq) => ({ q: clarifyCopy(faq.q), a: clarifyCopy(faq.a) })),
    editorialSections: content.editorialSections?.map((section) => ({
      heading: clarifyCopy(section.heading),
      paragraphs: section.paragraphs.map(clarifyCopy),
    })),
  };
}

export function clarifyCollection<T extends CopyContent>(items: T[]): T[] {
  return items.map(clarifyContent);
}
