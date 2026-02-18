import fs from "node:fs";

const sourcePath = "lib/seo-content.ts";
const src = fs.readFileSync(sourcePath, "utf8");

const marker = "export const competencePages";
const markerIndex = src.indexOf(marker);
if (markerIndex < 0) {
  throw new Error(`Marker not found: ${marker}`);
}

// `export const competencePages: CompetencePage[] = [` contains a `[]` before `=`.
// We want the `[` that starts the actual array literal, so we jump after `=`.
const equalsIndex = src.indexOf("=", markerIndex);
if (equalsIndex < 0) {
  throw new Error("Could not locate competencePages '=' token");
}
const arrayStart = src.indexOf("[", equalsIndex);
if (arrayStart < 0) {
  throw new Error("Could not locate competencePages array start");
}

// Extract the full top-level `[ ... ]` block for competencePages.
let i = arrayStart;
let depth = 0;
let inString = false;
let quote = "";
for (; i < src.length; i++) {
  const ch = src[i];
  const prev = src[i - 1];
  if (inString) {
    if (ch === quote && prev !== "\\") inString = false;
    continue;
  }
  if (ch === '"' || ch === "'") {
    inString = true;
    quote = ch;
    continue;
  }
  if (ch === "[") depth++;
  else if (ch === "]") {
    depth--;
    if (depth === 0) {
      i++;
      break;
    }
  }
}

const arrayBlock = src.slice(arrayStart, i); // includes outer [ ... ]

// Extract each top-level object `{ ... }` from the array block without fully parsing TS.
const objects = [];
let j = 0;
let curly = 0;
inString = false;
quote = "";
let start = -1;
while (j < arrayBlock.length) {
  const ch = arrayBlock[j];
  const prev = arrayBlock[j - 1];
  if (inString) {
    if (ch === quote && prev !== "\\") inString = false;
    j++;
    continue;
  }
  if (ch === '"' || ch === "'") {
    inString = true;
    quote = ch;
    j++;
    continue;
  }
  if (ch === "{") {
    if (curly === 0) start = j;
    curly++;
  } else if (ch === "}") {
    curly--;
    if (curly === 0 && start !== -1) {
      objects.push(arrayBlock.slice(start, j + 1));
      start = -1;
    }
  }
  j++;
}

const pick = (re, s) => {
  const m = s.match(re);
  return m ? m[1] : "";
};

const pickStringField = (field, s) => {
  // Match a TS string literal for `field: "..."` handling escaped quotes.
  // Assumption: content uses plain double-quoted string literals (no template strings).
  const re = new RegExp(
    `${field}:\\s*(?:\\n\\s*)?"((?:\\\\\\\\.|\\\\.|[^"\\\\\\\\])*)"`,
    "m",
  );
  const m = s.match(re);
  if (!m) return "";
  // We only need stable length/dup checks; a light unescape improves signal a bit.
  return m[1]
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
};

const normalize = (s) =>
  s
    .toLowerCase()
    .replace(/&apos;|’/g, "'")
    .replace(/[^\p{L}\p{N}'\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const firstWords = (s, count = 14) =>
  normalize(s)
    .split(" ")
    .filter(Boolean)
    .slice(0, count)
    .join(" ");

const pages = objects
  .map((obj) => {
    const slug = pickStringField("slug", obj);
    const title = pickStringField("title", obj);
    const intent = pickStringField("intent", obj);

    const shortDescription = pickStringField("shortDescription", obj);
    const longDescription = pickStringField("longDescription", obj);
    const localAngle = pickStringField("localAngle", obj);

    const benefitsBlock = (obj.match(/benefits:\s*\[[\s\S]*?\]/) || [""])[0];
    const benefitsCount = (benefitsBlock.match(/"/g) || []).length / 2;

    const faqsBlock = (obj.match(/faqs:\s*\[[\s\S]*?\]\s*,\s*keywords:/) || [""])[0];
    const faqCount = [...faqsBlock.matchAll(/q:\s*"([^"]+)"/g)].length;

    const editorialCount = /editorialSections:\s*\[/.test(obj)
      ? [...obj.matchAll(/heading:\s*"/g)].length
      : 0;
    const sourceCount = /sourceLinks:\s*\[/.test(obj)
      ? [...obj.matchAll(/url:\s*"/g)].length
      : 0;

    return {
      slug,
      title,
      intent,
      shortLen: shortDescription.length,
      longLen: longDescription.length,
      localAngleLen: localAngle.length,
      benefitsCount,
      faqCount,
      editorialCount,
      sourceCount,
      opening: firstWords(longDescription),
    };
  })
  .filter((p) => p.slug);

const openingCounts = new Map();
for (const p of pages) {
  openingCounts.set(p.opening, (openingCounts.get(p.opening) ?? 0) + 1);
}
for (const p of pages) {
  p.openingDupCount = openingCounts.get(p.opening) ?? 0;
}

for (const p of pages) {
  // Higher = more likely needs rewriting.
  let score = 0;
  if (p.longLen < 160) score += 4;
  else if (p.longLen < 240) score += 2;
  if (p.shortLen < 120) score += 1;
  if (p.editorialCount < 3) score += 3;
  else if (p.editorialCount < 5) score += 1;
  if (p.faqCount < 3) score += 2;
  else if (p.faqCount < 4) score += 1;
  if (p.benefitsCount < 3) score += 1;
  if (p.openingDupCount >= 2) score += 2;
  if (p.intent === "informational" && p.sourceCount === 0) score += 1;
  p.score = score;
}

pages.sort((a, b) => b.score - a.score);

console.log(`Competence pages: ${pages.length}`);
console.log("Top candidates for rewrite (score desc):");
for (const p of pages.slice(0, 25)) {
  console.log(
    `- ${p.slug} | score ${p.score} | intent ${p.intent} | long ${p.longLen} | faq ${p.faqCount} | ed ${p.editorialCount} | src ${p.sourceCount} | openingDup ${p.openingDupCount}`,
  );
}

console.log("\nMost duplicated openings (>=2):");
const dups = [...openingCounts.entries()]
  .filter(([, count]) => count >= 2)
  .sort((a, b) => b[1] - a[1]);
for (const [opening, count] of dups.slice(0, 15)) {
  console.log(`- (${count}) ${opening}`);
}

