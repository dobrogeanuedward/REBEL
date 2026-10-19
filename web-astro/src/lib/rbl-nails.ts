export type RblNailVariant = "manicure" | "piedi" | "confronto" | "classico";

const imageRoot = "/img/rbl-official/";
export const rblOfficial = "https://www.rbl-nails.it";

// Original official assets and dimensions are recorded in public/img/rbl-official/sources.json.
export const rblShades = [
  { name: "Soft Beige", code: "007", hex: "#C5A28B", slug: "soft-beige", description: "Un nude caldo, morbido e naturale.", width: 1920, height: 815 },
  { name: "Powder Blush", code: "009", hex: "#DDABB4", slug: "powder-blush", description: "Un rosa delicato, da portare ogni giorno.", width: 1584, height: 672 },
  { name: "Scarlet Red", code: "003", hex: "#BD2F28", slug: "scarlet-red", description: "Un rosso pieno, per lasciare il segno.", width: 1920, height: 815 },
  { name: "Deep Burgundy", code: "026", hex: "#5F1B2D", slug: "deep-burgundy", description: "Un bordeaux profondo, intenso e avvolgente.", width: 1280, height: 543 },
  { name: "Electric Cobalt", code: "080", hex: "#1240B8", slug: "electric-cobalt", description: "Un blu deciso, per cambiare prospettiva.", width: 1280, height: 543 },
  { name: "Obsidian Black", code: "001", hex: "#141413", slug: "obsidian-black", description: "Nero assoluto. Essenziale, con carattere.", width: 1920, height: 815 },
].map(shade => ({ ...shade, image: `${imageRoot}color-sheet-rbl${shade.code}-${shade.slug}.jpg`, href: `${rblOfficial}/colori/${shade.slug}` }));

export const rblCollections = [
  { name: "Rosa in Polvere", slug: "rosa-in-polvere", description: "Nude, rosa e malva. Sfumature morbide che si incontrano.", hands: `${imageRoot}rosa-in-polvere.webp`, tips: `${imageRoot}collection-rosa-in-polvere-tips.webp` },
  { name: "Argento Vivo", slug: "argento-vivo", description: "Riflessi e contrasti. Il colore trova un’altra luce.", hands: `${imageRoot}hands-argento-vivo.webp`, tips: `${imageRoot}collection-argento-vivo-tips.webp` },
];

export function rblVariantForService(slug: string): RblNailVariant | undefined {
  switch (slug) {
    case "manicure-semipermanente-carmagnola": return "manicure";
    case "pedicure-semipermanente-carmagnola": return "piedi";
    case "pedicure-carmagnola": return "confronto";
    case "pedicure-estetico-con-smalto-carmagnola": return "classico";
    default: return undefined;
  }
}

/** Images actually present in the corresponding editorial variant, for the image sitemap. */
export function rblImagesForService(slug: string): string[] {
  const variant = rblVariantForService(slug);
  if (variant === "confronto") return [rblCollections[0].tips];
  if (variant === "classico") return [rblCollections[1].tips];
  if (variant === "piedi") return [...rblCollections.map(collection => collection.tips), ...rblShades.map(shade => shade.image)];
  if (variant === "manicure") return [...new Set([
    ...rblCollections.flatMap(collection => [collection.hands, collection.tips]),
    ...rblShades.map(shade => shade.image),
    `${imageRoot}hands-studio-rosso.webp`,
    `${imageRoot}atelier-work.webp`,
  ])];
  return [];
}
