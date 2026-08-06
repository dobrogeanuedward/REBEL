type Faq = { q: string; a: string };
type EditorialSection = { heading: string; paragraphs: string[] };

type CopyContent = {
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  faqs: Faq[];
  editorialSections?: EditorialSection[];
};

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
  [/\bcosa viene prima\b/gi, "quale esigenza trattare per prima"],
  [/\bciò che viene prima\b/gi, "l’esigenza da trattare per prima"],
  [/\bda dove partire\b/gi, "quale trattamento iniziare"],
  [/\bquello che ti serve adesso\b/gi, "l’esigenza che vuoi trattare"],
  [/\bscelta coerente\b/gi, "scelta adatta alla zona e all’obiettivo"],
  [/\bpiù coerente\b/gi, "più adatto"],
  [/\bcoerente con\b/gi, "adatto a"],
  [/\bporta d['’]ingresso al risultato\b/gi, "prezzo iniziale del trattamento"],
  [/\bpasso più avanzato\b/gi, "protocollo collegato"],
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
];

const sentenceRules: Array<[RegExp, string]> = [
  [/Il prezzo è la porta[^.]*\./gi, "Il prezzo viene comunicato prima della prenotazione insieme a modalità e durata del trattamento."],
  [/Il prezzo è una scelta[^.]*\./gi, "Il prezzo dipende dal servizio, dalla zona e dalla durata indicati nella scheda."],
  [/Il risultato migliore è quello che[^.]*\./gi, "Il trattamento viene adattato alla sensibilità e all’obiettivo concordato."],
  [/La differenza la fa l['’]impostazione:[^.]*\./gi, "Pressione, zone e frequenza vengono adattate alle condizioni della pelle."],
  [/L['’]idea è partire bene, non fare tutto insieme\./gi, "Gli altri servizi possono essere aggiunti in un secondo momento, solo se utili."],
  [/Meglio un[^.]*che una[^.]*\./gi, "La frequenza viene scelta in modo realistico e compatibile con i tuoi impegni."],
];

export function clarifyCopy(value: string): string {
  let result = value;
  for (const [pattern, replacement] of sentenceRules) result = result.replace(pattern, replacement);
  for (const [pattern, replacement] of phraseRules) result = result.replace(pattern, replacement);
  return result
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
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
