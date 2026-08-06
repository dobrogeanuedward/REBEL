import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distRoot = resolve(projectRoot, "dist");

const sentenceRules = [
  [/Prima la tua esigenza\. Poi la tecnologia\./gi, "Valutiamo la zona e l’obiettivo, poi scegliamo tecnologia e parametri adatti."],
  [/Prima la pelle\. Poi la tecnologia\./gi, "Valutiamo la pelle, poi scegliamo prodotti, manualità e tecnologie adatti."],
  [/Prima di scegliere un trattamento, capiamo (?:cosa|che cosa) viene prima\./gi, "Valutiamo pelle o corpo e definiamo quale esigenza trattare per prima."],
  [/La tua pelle cambia\. Anche il percorso deve cambiare\./gi, "Controlliamo la risposta della pelle e aggiorniamo trattamenti e frequenza quando necessario."],
  [/La pelle cambia\. Il percorso evolve\./gi, "Controlliamo la pelle durante gli appuntamenti e aggiorniamo il programma di trattamento."],
  [/La bellezza segue il tuo ritmo\./gi, "Trattamenti definiti in base alla pelle, al corpo e al risultato desiderato."],
  [/Ogni pelle ha una priorità\./gi, "Ogni pelle può avere esigenze diverse: idratazione, luminosità, uniformità, tono o comfort."],
  [/il gesto resta[^.!?]*[.!?]/gi, "il risultato rimane naturale e personalizzato."],
  [/il gesto giusto può[^.!?]*[.!?]/gi, "il trattamento di ciglia o sopracciglia può rendere lo sguardo più definito."],
];

const phraseRules = [
  [/\b(?:una |la )?regia(?: professionale| Rebel)?\b/gi, "programma"],
  [/\barchitettura(?: del percorso| Rebel)?\b/gi, "programma di trattamento"],
  [/\bprogressione\b/gi, "programma di sedute"],
  [/\britmo\b/gi, "frequenza"],
  [/\btraiettoria\b/gi, "programma"],
  [/\borchestrat\w*/gi, "combinati"],
  [/\binterpolat\w*/gi, "combinati"],
  [/\bquando serve davvero\b/gi, "quando la valutazione lo indica"],
  [/\bquando serve\b/gi, "quando la valutazione lo indica"],
  [/\b(?:cosa|che cosa|ciò che) viene prima\b/gi, "quale esigenza trattare per prima"],
  [/\bda dove partire\b/gi, "quale trattamento iniziare"],
  [/\bpunto di partenza\b/gi, "condizioni iniziali"],
  [/\bporta d[’']ingresso\b/gi, "prezzo iniziale"],
  [/\bpasso successivo\b/gi, "trattamento successivo"],
  [/\balzare l[’']asticella\b/gi, "valutare un protocollo più specifico"],
  [/\bfatt[oi] come si deve\b/gi, "eseguito con modalità professionali"],
  [/\brisposte oneste\b/gi, "risposte pratiche"],
  [/\bclaim gonfiati\b/gi, "promesse generiche"],
  [/\bsentirt[ei] a posto\b/gi, "avere un aspetto curato"],
  [/\bpiacevole da abitare\b/gi, "più confortevole"],
  [/\bresta addosso\b/gi, "si mantiene più a lungo"],
  [/\bscelta coerente\b/gi, "scelta adatta alla zona e all’obiettivo"],
  [/\br(?:e|i)sultato pulito\b/gi, "risultato uniforme e ordinato"],
  [/\bgesto singolo\b/gi, "singolo trattamento"],
  [/\bgesto\b/gi, "trattamento"],
  [/\bmovimenti\b/gi, "fasi"],
  [/\bslancio\b/gi, "tono"],
];

async function collectHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(absolute));
    else if (extname(entry.name) === ".html") files.push(absolute);
  }
  return files;
}

function rewriteText(text) {
  let result = text;
  for (const [pattern, replacement] of sentenceRules) result = result.replace(pattern, replacement);
  for (const [pattern, replacement] of phraseRules) result = result.replace(pattern, replacement);
  return result;
}

function rewriteHtml(html) {
  const protectedBlock = /(<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<svg\b[^>]*>[\s\S]*?<\/svg>|<template\b[^>]*>[\s\S]*?<\/template>|<!--([\s\S]*?)-->|<[^>]+>)/gi;
  return html
    .split(protectedBlock)
    .map((part) => {
      if (!part || part.startsWith("<")) return part ?? "";
      return rewriteText(part);
    })
    .join("");
}

const files = await collectHtml(distRoot);
let changedFiles = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  const rewritten = rewriteHtml(original);
  if (rewritten !== original) {
    await writeFile(file, rewritten, "utf8");
    changedFiles += 1;
  }
}

console.log(`Rendered-copy safety pass reviewed ${files.length} page(s) and updated ${changedFiles}.`);
