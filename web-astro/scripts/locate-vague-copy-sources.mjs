import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const roots = [resolve(projectRoot, "src"), resolve(projectRoot, "public")];
const reportPath = resolve(projectRoot, "source-vague-copy-report.json");
const extensions = new Set([".astro", ".ts", ".tsx", ".js", ".jsx", ".json", ".html", ".md", ".txt"]);

const ignored = new Set([
  "src/lib/copy-clarity.ts",
  "src/lib/copy-clarity-bootstrap.ts",
  "scripts/check-copy-clarity.mjs",
  "scripts/check-rendered-copy.mjs",
  "scripts/rewrite-rendered-copy.mjs",
  "scripts/locate-vague-copy-sources.mjs",
]);

const patterns = [
  ["gesto", /\bgesto(?: singolo)?\b/gi],
  ["regia", /\bregia\b/gi],
  ["architettura", /\barchitettura\b/gi],
  ["progressione", /\bprogressione\b/gi],
  ["ritmo", /\britmo\b/gi],
  ["traiettoria", /\btraiettoria\b/gi],
  ["quando serve", /quando serve(?: davvero)?/gi],
  ["cosa viene prima", /(?:cosa|che cosa|ciò che) viene prima/gi],
  ["da dove partire", /da dove partire/gi],
  ["punto di partenza", /punto di partenza/gi],
  ["porta d’ingresso", /porta d[’']ingresso/gi],
  ["passo successivo", /passo successivo/gi],
  ["alzare l’asticella", /alzare l[’']asticella/gi],
  ["fatto come si deve", /fatt[oi] come si deve/gi],
  ["risposte oneste", /risposte oneste/gi],
  ["claim gonfiati", /claim gonfiati/gi],
  ["sentirti a posto", /sentirt[ei] a posto/gi],
  ["piacevole da abitare", /piacevole da abitare/gi],
  ["resta addosso", /resta addosso/gi],
  ["prima la tua esigenza", /prima la tua esigenza/gi],
  ["prima la pelle", /prima la pelle/gi],
  ["la bellezza segue il tuo ritmo", /la bellezza segue il tuo ritmo/gi],
  ["ogni pelle ha una priorità", /ogni pelle ha una priorità/gi],
  ["il percorso evolve", /il percorso evolve/gi],
  ["scelta coerente", /scelta coerente/gi],
  ["risultato pulito", /risultato pulito/gi],
];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(absolute));
    else if (extensions.has(extname(entry.name))) files.push(absolute);
  }
  return files;
}

const files = [];
for (const root of roots) files.push(...await collectFiles(root));

const findings = [];
for (const absolute of files) {
  const path = relative(projectRoot, absolute).replaceAll("\\", "/");
  if (ignored.has(path)) continue;
  const source = await readFile(absolute, "utf8");
  const lines = source.split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const [label, pattern] of patterns) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        findings.push({ path, line: index + 1, label, excerpt: line.trim().slice(0, 240) });
      }
    }
  });
}

await writeFile(reportPath, `${JSON.stringify({ filesScanned: files.length, findings }, null, 2)}\n`, "utf8");
console.log(`Source locator scanned ${files.length} file(s) and found ${findings.length} candidate line(s).`);
