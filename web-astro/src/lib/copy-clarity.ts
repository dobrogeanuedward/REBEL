type Faq = { q: string; a: string };
type EditorialSection = { heading: string; paragraphs: string[] };

type CopyContent = {
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  faqs: Faq[];
  editorialSections?: EditorialSection[];
};

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
];

function normalizeItalianTypography(value: string): string {
  let result = value;
  for (const [pattern, replacement] of accentRules) result = result.replace(pattern, replacement);

  return result
    .replace(/\bE['’](?=\s|$|[.,;:!?])/g, "È")
    .replace(/\be['’](?=\s|$|[.,;:!?])/g, "è")
    .replace(/'/g, "’")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([.!?]){2,}/g, "$1")
    .trim();
}

/**
 * Normalizza soltanto ortografia e spaziatura.
 *
 * Il copy pubblico va scritto e revisionato alla fonte: sostituire parole isolate
 * a runtime può cambiare il significato di una frase, rompere le concordanze e
 * nascondere nel codice ciò che la cliente leggerà davvero.
 */
export function clarifyCopy(value: string): string {
  return normalizeItalianTypography(value);
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
