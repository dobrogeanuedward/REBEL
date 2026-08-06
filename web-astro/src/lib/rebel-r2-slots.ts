/**
 * Rebel R2 — semantic slot conventions (no secrets).
 * Used by rebel_r2_resolve_asset_slot and search helpers.
 */

export type SlotVariant = "desktop" | "mobile" | "any";

export interface SlotRule {
  /** Dot path, e.g. home.hero.laser.mobile */
  slot: string;
  /** Preferred key prefixes under the allowed R2 roots */
  prefixes: string[];
  /** Filename / key substrings that score a match */
  keywords: string[];
  variant: SlotVariant;
  label: string;
}

export const REBEL_R2_DEFAULT_PREFIXES = [
  "assets/",
  "thory/",
  "photos/",
  "rebel/",
  "assets/rebel/",
] as const;

export const REBEL_MANIFEST_CANDIDATES = [
  "rebel/manifests/assets.json",
  "assets/rebel/manifests/assets.json",
  "rebel/assets.json",
  "assets/rebel/assets.json",
  "manifests/rebel-assets.json",
  "rebel/manifest.json",
] as const;

export const SLOT_RULES: SlotRule[] = [
  {
    slot: "home.hero.method.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/"],
    keywords: ["method", "metodo"],
    variant: "desktop",
    label: "Home hero · metodo (desktop)",
  },
  {
    slot: "home.hero.method.mobile",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/"],
    keywords: ["method", "metodo"],
    variant: "mobile",
    label: "Home hero · metodo (mobile)",
  },
  {
    slot: "home.hero.face.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/viso/"],
    keywords: ["face", "viso"],
    variant: "desktop",
    label: "Home hero · viso (desktop)",
  },
  {
    slot: "home.hero.face.mobile",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/viso/"],
    keywords: ["face", "viso"],
    variant: "mobile",
    label: "Home hero · viso (mobile)",
  },
  {
    slot: "home.hero.body.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/corpo/"],
    keywords: ["body", "corpo"],
    variant: "desktop",
    label: "Home hero · corpo (desktop)",
  },
  {
    slot: "home.hero.body.mobile",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/corpo/"],
    keywords: ["body", "corpo"],
    variant: "mobile",
    label: "Home hero · corpo (mobile)",
  },
  {
    slot: "home.hero.laser.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/laser/"],
    keywords: ["laser", "icepolar", "ice-polar"],
    variant: "desktop",
    label: "Home hero · laser (desktop)",
  },
  {
    slot: "home.hero.laser.mobile",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/laser/"],
    keywords: ["laser", "icepolar", "ice-polar"],
    variant: "mobile",
    label: "Home hero · laser (mobile)",
  },
  {
    slot: "home.hero.lamination.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/laminazione/"],
    keywords: ["lamination", "laminazione", "lash", "brow"],
    variant: "desktop",
    label: "Home hero · laminazione (desktop)",
  },
  {
    slot: "home.hero.lamination.mobile",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/laminazione/"],
    keywords: ["lamination", "laminazione", "lash", "brow"],
    variant: "mobile",
    label: "Home hero · laminazione (mobile)",
  },
  {
    slot: "home.hero.epigenetics.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/home/hero/", "rebel/epigenetica/"],
    keywords: ["epigenetic", "epigenetica"],
    variant: "desktop",
    label: "Home hero · epigenetica (desktop)",
  },
  {
    slot: "home.hero.technologies.desktop",
    prefixes: ["rebel/home/hero/", "assets/rebel/technologies/", "rebel/technologies/"],
    keywords: ["technolog", "tecar", "fotobio", "pressoterapia"],
    variant: "desktop",
    label: "Home hero · tecnologie (desktop)",
  },
  {
    slot: "home.hero.studio.mobile",
    prefixes: ["rebel/home/hero/", "rebel/studio/", "assets/rebel/studio/"],
    keywords: ["studio", "reception", "cabin", "cabina"],
    variant: "mobile",
    label: "Home hero · studio (mobile)",
  },
  {
    slot: "journeys.glow.hero",
    prefixes: ["rebel/journeys/glow/", "assets/rebel/journeys/glow/"],
    keywords: ["glow", "hero"],
    variant: "any",
    label: "Journey Glow · hero",
  },
  {
    slot: "journeys.longevity.hero",
    prefixes: ["rebel/journeys/longevity/", "assets/rebel/journeys/longevity/"],
    keywords: ["longevity", "hero"],
    variant: "any",
    label: "Journey Longevity · hero",
  },
  {
    slot: "journeys.forma.hero",
    prefixes: ["rebel/journeys/forma/", "assets/rebel/journeys/forma/"],
    keywords: ["forma", "hero"],
    variant: "any",
    label: "Journey Forma · hero",
  },
  {
    slot: "journeys.liberta.hero",
    prefixes: ["rebel/journeys/liberta/", "assets/rebel/journeys/liberta/"],
    keywords: ["liberta", "libertà", "hero"],
    variant: "any",
    label: "Journey Libertà · hero",
  },
  {
    slot: "technologies.tecar.hero",
    prefixes: ["rebel/technologies/tecar/", "assets/rebel/technologies/tecar/"],
    keywords: ["tecar", "hero"],
    variant: "any",
    label: "Tecnologie · tecar hero",
  },
  {
    slot: "technologies.laser.detail",
    prefixes: ["rebel/technologies/laser/", "rebel/laser/", "assets/rebel/laser/"],
    keywords: ["laser", "detail", "handpiece", "manipolo"],
    variant: "any",
    label: "Tecnologie · laser detail",
  },
  {
    slot: "studio.reception",
    prefixes: ["rebel/studio/", "assets/rebel/studio/"],
    keywords: ["reception", "accoglienza", "vetrina"],
    variant: "any",
    label: "Studio · reception",
  },
  {
    slot: "brand.texture.pink",
    prefixes: ["rebel/brand/", "assets/rebel/brand/", "rebel/textures/"],
    keywords: ["pink", "rosa", "texture"],
    variant: "any",
    label: "Brand · texture pink",
  },
  {
    slot: "brand.texture.violet",
    prefixes: ["rebel/brand/", "assets/rebel/brand/", "rebel/textures/"],
    keywords: ["violet", "viola", "mauve", "texture"],
    variant: "any",
    label: "Brand · texture violet",
  },
];

export const getSlotRule = (slot: string): SlotRule | undefined =>
  SLOT_RULES.find((r) => r.slot === slot);

export const inferVariantFromKey = (key: string): SlotVariant => {
  const k = key.toLowerCase();
  if (/(^|[/_-])mobile([/_-]|$)/.test(k) || k.includes("-m.") || k.includes("_m.")) {
    return "mobile";
  }
  if (/(^|[/_-])desktop([/_-]|$)/.test(k) || k.includes("-d.") || k.includes("_d.")) {
    return "desktop";
  }
  return "any";
};
