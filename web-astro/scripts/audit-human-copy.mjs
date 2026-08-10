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
  ["formula commerciale incoerente", /\b(?:home care|prenota gratis|gratuit[aeio]\s+quando\s+finalizzat[aeio]|finalizzat[aeio]\s+alla\s+costruzione\s+del\s+percorso)\b/giu],
  ["promessa sul sole", /\b(?:il sole non è un ostacolo|puoi partire in qualsiasi stagione|qualsiasi stagione)\b/giu],
  ["claim sanitario o assoluto", /\b(?:irritazione cronica|scioglie? le contrazioni|riduce il gonfiore|leggerezza (?:diventa|resta) stabile|tenuta reale|dura davvero|pedicure curativo|piede sano)\b/giu],
  ["confronto locale non verificato", /\b(?:il laser che nel Roero non trovi|offerta locale ridotta|offerta ridotta)\b/giu],
  ["comfort laser improprio", /\b(?:terminazioni nervose|una seduta sopportabile)\b/giu],
  ["informazione operativa non verificata", /\b(?:parcheggio gratuito|niente ZTL|senza ZTL|senza pedaggio|senza autostrada|entro poche ore|proposta scritta|prezzo totale)\b/giu],
  ["tempo di viaggio statico", /\b(?:circa\s+)?(?:\d{1,2}|dieci|venti|trenta)(?:[–-](?:\d{1,2}|quattordici|venticinque|trentacinque|trentasette))?\s+minuti\s+(?:di auto|d[’']auto|in auto|di strada|per arrivare)\b/giu],
  ["formato prezzo non uniforme", /\bEUR\s*\d/gu],
  ["errore grammaticale noto", /\b(?:una obiettivo|una trattamento|la obiettivo|frequenza realistico|un ottimo condizioni|obiettivo Torino|adatto a il)\b/giu],
  ["tono artificiale o autocelebrativo", /\b(?:comfort reale|valutazione reale|tenuta reale|risposte oneste|risposte dirette|piano vero|nome in vetrina|nero su bianco|vedrai che vedrai|settaggio gentile|percorso già rodato|si tiene da solo|è quasi un automatismo|staccare davvero|stacco vero|ottimizzi davvero|cosa puoi fare davvero|dura davvero|senza pensieri|senza ritocchi|piedi davvero a posto|pelle reale, non a uno schema fisso)\b/giu],
  ["formula SEO o slogan artificiale", /\b(?:un piano che si porta avanti|la pelle curata si nota prima di ogni parola|le risposte che servono|vuoi un piano più ampio|non è l[’']unico motivo per venire|tra Langhe e pianura|dritti in studio|vicinissimi)\b/giu],
  ["frase potenzialmente spezzata", /\b(?:si i tempi di percorrenza|possibilità di parcheggio nelle vicinanze)\b/giu],
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

const readAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "iu"));
  return match?.[2] ?? "";
};

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
const pageMetadata = [];
for (const path of htmlFiles) {
  const html = readFileSync(path, "utf8");
  const file = relative(distDir, path);
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/giu)].map((match) => match[0]);
  const metaCopy = metaTags
    .map((tag) => readAttribute(tag, "content"))
    .join(" ");
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/giu)]
    .map((match) => match[1])
    .join(" ");
  const accessibilityCopy = [...html.matchAll(/\b(?:alt|aria-label|title|placeholder)\s*=\s*(["'])([\s\S]*?)\1/giu)]
    .map((match) => match[2])
    .join(" ");
  const copy = toText(`${html} ${metaCopy} ${jsonLd} ${accessibilityCopy}`);

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/giu)) {
    const href = decodeHtml(readAttribute(match[1], "href")).trim();
    const label = toText(match[2]);
    const promisesWhatsApp = /^(?:prenota|scrivi|scrivici|contattaci|chiedi)[^→]{0,48}\bWhatsApp\b/iu.test(label);
    if (promisesWhatsApp && !/^(?:https?:\/\/(?:wa\.me|api\.whatsapp\.com)|whatsapp:)/iu.test(href)) {
      findings.push({ file, label: "CTA WhatsApp con destinazione incoerente", matches: [`${label} → ${href || "href mancante"}`] });
    }
  }

  for (const [label, pattern] of rules) {
    pattern.lastIndex = 0;
    const matches = [...copy.matchAll(pattern)];
    if (matches.length === 0) continue;
    findings.push({
      file,
      label,
      matches: [...new Set(matches.map((match) => match[0]))],
    });
  }

  if (!file.startsWith("google")) {
    const descriptionTag = metaTags.find((tag) => readAttribute(tag, "name").toLowerCase() === "description");
    const description = decodeHtml(readAttribute(descriptionTag ?? "", "content")).trim();
    const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/iu)?.[1] ?? "")
      .replace(/<[^>]+>/gu, " ")
      .replace(/\s+/gu, " ")
      .trim();

    pageMetadata.push({ file, title, description });

    if (description.length < 95 || description.length > 165) {
      findings.push({ file, label: "meta description da rivedere", matches: [`${description.length} caratteri`] });
    }
    if (title.length < 20 || title.length > 72) {
      findings.push({ file, label: "titolo pagina da rivedere", matches: [`${title.length} caratteri`] });
    }
  }
}

for (const field of ["title", "description"]) {
  const occurrences = new Map();
  for (const page of pageMetadata) {
    const value = page[field];
    if (!value) continue;
    const files = occurrences.get(value) ?? [];
    files.push(page.file);
    occurrences.set(value, files);
  }
  for (const [value, files] of occurrences) {
    if (files.length < 2) continue;
    findings.push({
      file: files.join(", "),
      label: `${field} duplicata`,
      matches: [value],
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
