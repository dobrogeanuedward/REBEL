import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));

const files = [
  "public/scripts/living-hero.js",
  "src/pages/index.astro",
  "src/pages/metodo-rebel.astro",
  "src/pages/protocolli-epigenetici.astro",
  "src/pages/tecnologie-rebel.astro",
  "src/pages/epilazione-laser-carmagnola.astro",
  "src/pages/listino-estetica-laser.astro",
  "src/pages/chi-siamo.astro",
  "src/pages/contatti.astro",
  "src/pages/centro-estetico-carmagnola.astro",
  "src/pages/servizi/index.astro",
  "src/pages/servizi/[slug].astro",
  "src/pages/competenze/index.astro",
  "src/pages/competenze/[slug].astro",
  "src/pages/protocolli/[slug].astro",
  "src/pages/localita/index.astro",
  "src/pages/localita/[slug].astro",
  "src/components/SiteHeader.tsx",
  "src/components/SiteFooter.astro",
  "src/components/PageHero.astro",
  "src/components/SectionHead.astro",
  "src/components/FeatureCard.astro",
  "src/components/FaqAccordion.astro",
  "src/components/EditorialSection.astro",
  "src/components/KeyPointsGrid.astro",
  "src/components/PriceRow.astro",
  "src/components/InlineCta.astro",
  "src/components/FullBleedBand.astro",
  "src/components/NearMeBlock.astro",
  "src/components/TableOfContents.astro",
  "src/components/StepStrip.astro",
  "src/lib/content.ts",
  "src/lib/protocol-pages.ts",
  "src/lib/navigation.ts",
];

const forbidden = [
  ["regia", /\bregia\b/i],
  ["architettura", /\barchitettura\b/i],
  ["progressione", /\bprogressione\b/i],
  ["ritmo", /\britmo\b/i],
  ["direzione", /\bdirezione\b/i],
  ["traiettoria", /\btraiettoria\b/i],
  ["orchestrare", /\borchestrat\w*/i],
  ["interpolare", /\binterpolat\w*/i],
  ["cosa viene prima", /cosa viene prima/i],
  ["ciò che viene prima", /ciò che viene prima/i],
  ["da dove partire", /da dove partire/i],
  ["quando serve", /quando serve/i],
  ["porta d’ingresso", /porta d[’']ingresso/i],
  ["passo successivo", /passo successivo/i],
  ["alzare l’asticella", /alzare l[’']asticella/i],
  ["fatto come si deve", /fatt[oi] come si deve/i],
  ["claim gonfiati", /claim gonfiati/i],
  ["risposte oneste", /risposte oneste/i],
  ["sentirti a posto", /sentirt[ei] a posto/i],
  ["piacevole da abitare", /piacevole da abitare/i],
  ["resta addosso", /resta addosso/i],
  ["Prima la tua esigenza", /prima la tua esigenza/i],
  ["Prima la pelle", /prima la pelle/i],
  ["La bellezza segue il tuo ritmo", /la bellezza segue il tuo ritmo/i],
  ["Ogni pelle ha una priorità", /ogni pelle ha una priorità/i],
  ["La pelle cambia. Il percorso evolve", /la pelle cambia\.\s*il percorso evolve/i],
];

function codeLinesWithoutComments(source) {
  const lines = source.split(/\r?\n/);
  let inBlockComment = false;
  return lines.map((line) => {
    let output = line;
    if (inBlockComment) {
      const end = output.indexOf("*/");
      if (end === -1) return "";
      output = output.slice(end + 2);
      inBlockComment = false;
    }
    while (true) {
      const start = output.indexOf("/*");
      if (start === -1) break;
      const end = output.indexOf("*/", start + 2);
      if (end === -1) {
        output = output.slice(0, start);
        inBlockComment = true;
        break;
      }
      output = output.slice(0, start) + output.slice(end + 2);
    }
    output = output.replace(/<!--.*?-->/g, "");
    const trimmed = output.trimStart();
    if (trimmed.startsWith("//")) return "";
    return output;
  });
}

const violations = [];
for (const relativePath of files) {
  const absolutePath = resolve(projectRoot, relativePath);
  const source = await readFile(absolutePath, "utf8");
  const lines = codeLinesWithoutComments(source);
  lines.forEach((line, index) => {
    for (const [label, pattern] of forbidden) {
      if (pattern.test(line)) {
        violations.push({
          file: relativePath,
          line: index + 1,
          label,
          excerpt: line.trim().slice(0, 180),
        });
      }
      pattern.lastIndex = 0;
    }
  });
}

if (violations.length > 0) {
  console.error("\nCopy clarity check failed. Replace vague language with service, zone, result, price, duration or process details:\n");
  for (const violation of violations) {
    console.error(`- ${violation.file}:${violation.line} [${violation.label}] ${violation.excerpt}`);
  }
  process.exit(1);
}

console.log(`Copy clarity check passed across ${files.length} customer-facing files.`);
