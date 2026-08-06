import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distRoot = resolve(projectRoot, "dist");
const reportPath = resolve(projectRoot, "copy-audit-report.json");
const maxReportedViolations = 30;

const forbidden = [
  ["regia", /\bregia\b/gi],
  ["architettura", /\barchitettura\b/gi],
  ["progressione", /\bprogressione\b/gi],
  ["ritmo", /\britmo\b/gi],
  ["direzione", /\bdirezione\b/gi],
  ["traiettoria", /\btraiettoria\b/gi],
  ["orchestrare", /\borchestrat\w*/gi],
  ["interpolare", /\binterpolat\w*/gi],
  ["quando serve", /quando serve(?: davvero)?/gi],
  ["cosa viene prima", /(?:cosa|che cosa|ciò che) viene prima/gi],
  ["da dove partire", /da dove partire/gi],
  ["punto di partenza", /punto di partenza/gi],
  ["porta d’ingresso", /porta d[’']ingresso/gi],
  ["passo successivo", /passo successivo/gi],
  ["alzare l’asticella", /alzare l[’']asticella/gi],
  ["fatto come si deve", /fatt[oi] come si deve/gi],
  ["claim gonfiati", /claim gonfiati/gi],
  ["risposte oneste", /risposte oneste/gi],
  ["sentirti a posto", /sentirt[ei] a posto/gi],
  ["piacevole da abitare", /piacevole da abitare/gi],
  ["resta addosso", /resta addosso/gi],
  ["prima la tua esigenza", /prima la tua esigenza/gi],
  ["prima la pelle", /prima la pelle/gi],
  ["la bellezza segue il tuo ritmo", /la bellezza segue il tuo ritmo/gi],
  ["ogni pelle ha una priorità", /ogni pelle ha una priorità/gi],
  ["il percorso evolve", /il percorso evolve/gi],
  ["scelta coerente", /scelta coerente/gi],
  ["che abbia senso", /(?:che|abbia) senso per te/gi],
  ["senza confusione", /senza confusione/gi],
  ["risultato pulito", /risultato pulito/gi],
  ["gesto", /\bgesto(?: singolo)?\b/gi],
  ["movimenti", /\bmovimenti\b/gi],
  ["slancio", /\bslancio\b/gi],
];

const entityMap = new Map([
  ["&nbsp;", " "],
  ["&amp;", "&"],
  ["&quot;", '"'],
  ["&#39;", "’"],
  ["&apos;", "’"],
  ["&lt;", "<"],
  ["&gt;", ">"],
]);

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

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--([\s\S]*?)-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|amp|quot|apos|lt|gt);|&#39;/g, (entity) => entityMap.get(entity) ?? " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(text, index, length) {
  const start = Math.max(0, index - 70);
  const end = Math.min(text.length, index + length + 90);
  return text.slice(start, end).trim();
}

const files = await collectHtml(distRoot);
const violations = [];

for (const absolutePath of files) {
  const html = await readFile(absolutePath, "utf8");
  const text = visibleText(html);
  for (const [label, pattern] of forbidden) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      violations.push({
        page: relative(distRoot, absolutePath),
        label,
        match: match[0],
        excerpt: excerpt(text, match.index ?? 0, match[0].length),
      });
    }
  }
}

const grouped = new Map();
for (const violation of violations) {
  const key = `${violation.page}::${violation.label}`;
  if (!grouped.has(key)) grouped.set(key, violation);
}

const fullReport = {
  generatedAt: new Date().toISOString(),
  pagesScanned: files.length,
  occurrences: violations.length,
  groups: grouped.size,
  violations: [...grouped.values()],
};
await writeFile(reportPath, `${JSON.stringify(fullReport, null, 2)}\n`, "utf8");

if (violations.length > 0) {
  const report = fullReport.violations.slice(0, maxReportedViolations);
  console.error(`\nRendered-copy audit failed with ${violations.length} occurrence(s) across ${grouped.size} page/phrase group(s). Full JSON report written to copy-audit-report.json.\n`);
  for (const violation of report) {
    console.error(`- ${violation.page} [${violation.label}] ${violation.excerpt}`);
  }
  if (grouped.size > report.length) {
    console.error(`\n...and ${grouped.size - report.length} additional page/phrase group(s). Download the CI artifact for the complete report.`);
  }
  process.exit(1);
}

console.log(`Rendered-copy audit passed across ${files.length} generated HTML pages.`);
