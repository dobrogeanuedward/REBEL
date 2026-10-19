import { photographs, type PhotoKey } from "./catalog-visuals";

/** Existing illustrative treatment photographs, selected for each protocol's subject. */
const selections: Record<string, readonly [PhotoKey, PhotoKey, PhotoKey, PhotoKey]> = {
  "rebel-lift-protocol": ["percorso-structure", "viso-manualita", "viso-preparazione", "viso-idratazione"],
  "rebirth-60-plus": ["percorso-longevity", "viso-idratazione", "viso-manualita", "viso-preparazione"],
  "eye-genesis": ["viso-contorno-occhi", "viso-detersione", "viso-idratazione", "viso-preparazione"],
  "catalysis-ritual": ["viso-enzimi", "viso-preparazione", "viso-manualita", "viso-idratazione"],
  "collagen-code": ["viso-manualita", "viso-idratazione", "viso-preparazione", "viso-detersione"],
  "rebel-cell-regeneration": ["percorso-glow", "viso-preparazione", "viso-idratazione", "viso-manualita"],
};

export const getProtocolPhotography = (slug: string) => {
  const [hero, ...story] = selections[slug] ?? selections["collagen-code"];
  return { hero: photographs[hero], story: story.map((key) => photographs[key]) };
};
