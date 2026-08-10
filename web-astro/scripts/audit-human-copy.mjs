import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist/client/", import.meta.url));

if (!existsSync(distDir)) {
  console.error("[copy-audit] Build non trovato. Esegui prima `astro build`.");
  process.exit(1);
}

const rules = [
  ["gergo interno", /\b(?:naming|materia|piattaforme?) REBEL\b/giu],
  ["riferimento editoriale interno", /\b(?:brochure REBEL|pagina pillar|pagina panoramica|scheda completa|guide collegate|stessa categoria|documenti utilizzati)\b/giu],
  ["formula da backstage", /\b(?:tecnologie selezionabili|firma botanica|soglia d[’']ingresso|programma leggibile|percorso leggibile|apri la materia|la pagina spiega)\b/giu],
  ["box tecnologia interno", /\bvoce\s+[“"']?tecnologie[”"']?/giu],
  ["formula commerciale burocratica", /\b(?:home care|gratuit[ao] quando finalizzat[ao]|finalizzat[ao] alla costruzione del percorso)\b/giu],
  ["promessa sul sole", /\b(?:il sole non è un ostacolo|puoi partire in qualsiasi stagione|qualsiasi stagione)\b/giu],
  ["claim sanitario o assoluto", /\b(?:irritazione cronica|scioglie? le contrazioni|riduce il gonfiore|leggerezza (?:diventa|resta) stabile|tenuta reale|dura davvero|pedicure curativo|piede sano)\b/giu],
  ["confronto locale non verificato", /\b(?:il laser che nel Roero non trovi|offerta locale ridotta|offerta ridotta)\b/giu],
  ["comfort laser improprio", /\b(?:terminazioni nervose|una seduta sopportabile)\b/giu],
  ["informazione operativa non verificata", /\b(?:parcheggio gratuito|niente ZTL|senza ZTL|entro poche ore|proposta scritta|prezzo totale)\b/giu],
  ["formato prezzo non uniforme", /\bEUR\s*\d/gu],
  ["errore grammaticale noto", /\b(?:una obiettivo|una trattamento|la obiettivo|frequenza realistico|un ottimo condizioni|obiettivo Torino|adatto a il)\b/giu],
  ["percorso sorgente esposto", /\bsrc\/lib\//giu],
];

const decodeHtml = (value) => value
  .replaceAll("&nbsp;", " ")
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#39;", "'")
  .replaceAll("&#x27;", "'")
  .replaceAll("&apos;", "'")
  .replaceAll("&egrave;", "è")
  .replaceAll("&Egrave;", "È")
  .replaceAll("&agrave;", "à")
  .replaceAll("&ograve;", "ò")
  .replaceAll("&ugrave;", "ù")
  .replaceAll("&igrave;", "ì");

const toText = (value) => decodeHtml(value)
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/giu, " ")
  .replace(/<script\b(?![^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/giu, " ")
  .replace(/<[^>]+>/gu, " ")
  .replace(/\s+/gu, " ")
  .trim();

const htmlFiles = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (extname(entry.name) === ".html") htmlFiles.push(path);
  }
};
visit(distDir);

const findings = [];
for (const path of htmlFiles) {
  const html = readFileSync(path, "utf8");
  const metaCopy = [...html.matchAll(/<meta\b[^>]*\bcontent=["']([^"']*)["'][^>]*>/giu)]
    .map((match) => match[1])
    .join(" ");
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/giu)]
    .map((match) => match[1])
    .join(" ");
  const copy = toText(`${html} ${metaCopy} ${jsonLd}`);

  for (const [label, pattern] of rules) {
    pattern.lastIndex = 0;
    const matches = [...copy.matchAll(pattern)];
    if (matches.length === 0) continue;
    findings.push({
      file: relative(distDir, path),
      label,
      matches: [...new Set(matches.map((match) => match[0]))],
    });
  }
}

if (findings.length > 0) {
  console.error(`[copy-audit] ${findings.length} problemi trovati in ${htmlFiles.length} pagine:`);
  for (const finding of findings) {
    console.error(`- ${finding.file} · ${finding.label}: ${finding.matches.join(", ")}`);
  }
  process.exit(1);
}

console.log(`[copy-audit] OK: ${htmlFiles.length} pagine controllate.`);
