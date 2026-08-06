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

const slotPair = (
  slot: string,
  prefixes: string[],
  keywords: string[],
  label: string,
): SlotRule[] => [
  { slot: `${slot}.desktop`, prefixes, keywords, variant: "desktop", label: `${label} · desktop` },
  { slot: `${slot}.mobile`, prefixes, keywords, variant: "mobile", label: `${label} · mobile` },
];

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
  ...slotPair("home.hero.longevity", ["rebel/home/hero/"], ["longevity"], "Home hero · longevity"),
  {
    slot: "home.hero.epigenetics.mobile",
    prefixes: ["rebel/home/hero/"],
    keywords: ["epigenetic"],
    variant: "mobile",
    label: "Home hero · epigenetica · mobile",
  },
  {
    slot: "home.hero.technologies.mobile",
    prefixes: ["rebel/home/hero/"],
    keywords: ["technolog"],
    variant: "mobile",
    label: "Home hero · tecnologie · mobile",
  },
  {
    slot: "home.hero.studio.desktop",
    prefixes: ["rebel/home/hero/", "rebel/studio/"],
    keywords: ["studio", "professional"],
    variant: "desktop",
    label: "Home hero · professionista · desktop",
  },
  ...slotPair("journeys.glow.hero", ["rebel/journeys/glow/"], ["glow", "hero"], "Journey Glow"),
  ...slotPair("journeys.forma.hero", ["rebel/journeys/forma/"], ["forma", "hero"], "Journey Forma"),
  ...slotPair("journeys.liberta.hero", ["rebel/journeys/liberta/"], ["liberta", "hero"], "Journey Libertà"),
  ...slotPair("journeys.longevity.hero", ["rebel/journeys/longevity/"], ["longevity", "hero"], "Journey Longevity"),
  {
    slot: "services.method.consultation.mobile",
    prefixes: ["rebel/services/method/"],
    keywords: ["consultation"],
    variant: "mobile",
    label: "Metodo · consultazione",
  },
  {
    slot: "services.face.skinTexture.mobile",
    prefixes: ["rebel/services/face/"],
    keywords: ["skin-texture"],
    variant: "mobile",
    label: "Viso · texture",
  },
  {
    slot: "services.face.activesTopshot.mobile",
    prefixes: ["rebel/services/face/"],
    keywords: ["actives-topshot"],
    variant: "mobile",
    label: "Viso · attivi",
  },
  ...slotPair("services.laser.handpiece", ["rebel/services/laser/"], ["handpiece"], "Laser · manipolo"),
  ...slotPair("services.lamination.detail", ["rebel/services/lamination/"], ["detail"], "Laminazione · dettaglio"),
  ...slotPair("services.epigenetics.detail", ["rebel/services/epigenetics/"], ["detail"], "Epigenetica · dettaglio"),
  ...slotPair("services.technologies.detail", ["rebel/services/technologies/"], ["detail"], "Tecnologie · dettaglio"),
  {
    slot: "services.manicure.hero.desktop",
    prefixes: ["rebel/services/manicure/"],
    keywords: ["hero"],
    variant: "desktop",
    label: "Manicure · hero",
  },
  {
    slot: "services.manicure.detail.mobile",
    prefixes: ["rebel/services/manicure/"],
    keywords: ["detail"],
    variant: "mobile",
    label: "Manicure · dettaglio",
  },
  {
    slot: "services.massage.hero.desktop",
    prefixes: ["rebel/services/massage/"],
    keywords: ["hero"],
    variant: "desktop",
    label: "Massaggio · hero",
  },
  {
    slot: "services.massage.detail.mobile",
    prefixes: ["rebel/services/massage/"],
    keywords: ["detail"],
    variant: "mobile",
    label: "Massaggio · dettaglio",
  },
  {
    slot: "services.pedicure.hero.desktop",
    prefixes: ["rebel/services/pedicure/"],
    keywords: ["hero"],
    variant: "desktop",
    label: "Pedicure · hero",
  },
  {
    slot: "services.pedicure.detail.mobile",
    prefixes: ["rebel/services/pedicure/"],
    keywords: ["detail"],
    variant: "mobile",
    label: "Pedicure · dettaglio",
  },
  {
    slot: "services.draining.hero.desktop",
    prefixes: ["rebel/services/draining/"],
    keywords: ["hero"],
    variant: "desktop",
    label: "Drenante · hero",
  },
  {
    slot: "services.draining.detail.mobile",
    prefixes: ["rebel/services/draining/"],
    keywords: ["detail"],
    variant: "mobile",
    label: "Drenante · dettaglio",
  },
  ...slotPair("brand.cut", ["rebel/brand/"], ["rebel-cut"], "Brand · Rebel Cut"),
  ...slotPair("brand.prism", ["rebel/brand/"], ["rebel-prism"], "Brand · Rebel Prism"),
  {
    slot: "territory.racconigi",
    prefixes: ["rebel/territory/"],
    keywords: ["racconigi"],
    variant: "any",
    label: "Territorio · Racconigi",
  },
  {
    slot: "territory.langhe",
    prefixes: ["rebel/territory/"],
    keywords: ["langhe"],
    variant: "any",
    label: "Territorio · Langhe",
  },
  {
    slot: "territory.roero",
    prefixes: ["rebel/territory/"],
    keywords: ["roero"],
    variant: "any",
    label: "Territorio · Roero",
  },
  {
    slot: "territory.bra",
    prefixes: ["rebel/territory/"],
    keywords: ["bra-wide"],
    variant: "any",
    label: "Territorio · Bra",
  },
  ...slotPair("studio.professional", ["rebel/studio/"], ["professional"], "Studio · professionista"),
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
