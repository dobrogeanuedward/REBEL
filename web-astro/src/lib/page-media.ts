/* ==========================================================================
   Rebel · Page Media Manifest
   --------------------------------------------------------------------------
   Single source of truth for the editorial/mood imagery used by landing
   pages. Two jobs:

   1. PAGES read `src` / `alt` / `ratio` from here (no hardcoded paths
      scattered across .astro files).
   2. IMAGE SUBAGENTS read `prompt` as the generation worklist. Each subagent
      runs in a SEPARATE chat, generates the assets in a theme batch, saves
      them as optimized WebP into /public/img/generated, and exits — so this
      chat's context stays clean.

   Assets marked `existing: true` already live in the repo (brand drops or
   earlier generations) and must NOT be regenerated.

   Brand visual language for every generated prompt is captured in
   BRAND_STYLE; compose the final prompt with `buildPrompt(asset)`.
   ========================================================================== */

export const BRAND_STYLE =
  "Editorial beauty photography for a high-end Italian aesthetic studio named Rebel. " +
  "Cinematic, refined, calm. Royal violet + ivory + soft champagne palette, deep obsidian " +
  "shadows, warm directional light, gentle film grain, shallow depth of field. Real, natural " +
  "skin (no plastic retouch), elegant minimal styling, no visible brand logos, no text overlays. " +
  "Premium magazine aesthetic, never stocky or clinical-cold.";

export interface ImageAsset {
  /** Public path used in <img src>. */
  src: string;
  /** Italian accessible alt text. */
  alt: string;
  /** Suggested CSS aspect-ratio for the slot it fills. */
  ratio?: string;
  /** Subject-specific generation prompt (composed with BRAND_STYLE). */
  prompt?: string;
  /** True when the file already exists and must not be regenerated. */
  existing?: boolean;
}

/** Compose the full generation prompt a subagent should use. */
export const buildPrompt = (asset: ImageAsset): string =>
  asset.prompt ? `${BRAND_STYLE} ${asset.prompt}` : "";

const GEN = "/img/generated";
const BRAND = "/img/brand";

/* --------------------------------------------------------------------------
   SHARED ASSET LIBRARY — grouped by theme. Locality pages of the same
   service reuse the same treatment imagery (same studio, same hands); only
   the locale mood band changes per city, for visual differentiation.
   -------------------------------------------------------------------------- */
export const media = {
  /* ----- LASER (subject ALWAYS wears protective laser glasses) ----- */
  laser: {
    hero: {
      src: `${GEN}/laser-hero-icepolar.webp`,
      alt: "Seduta di epilazione laser in cabina Rebel: cliente con occhiali protettivi e manipolo Ice Polar",
      ratio: "16/9",
      prompt:
        "Hero shot: a woman receiving laser hair removal on her lower leg, lying calm and comfortable, " +
        "WEARING PROTECTIVE ORANGE-TINTED LASER SAFETY GLASSES (mandatory). A professional esthetician " +
        "(also wearing laser safety glasses) holds a sleek white diode laser handpiece with a cooling tip " +
        "against the skin. Modern softly lit treatment cabin, violet ambient glow. Sense of control and comfort.",
    } as ImageAsset,
    handpiece: {
      src: `${GEN}/laser-handpiece-detail.webp`,
      alt: "Dettaglio del manipolo laser Ice Polar con punta di raffreddamento sulla pelle",
      ratio: "4/5",
      prompt:
        "Macro detail: a modern white laser diode handpiece with a glowing cooling sapphire tip gliding on " +
        "smooth skin, faint violet light, droplet of cooling gel, extreme shallow depth of field. " +
        "Clean, premium, reassuring.",
    } as ImageAsset,
    consult: {
      src: `${GEN}/laser-consult.webp`,
      alt: "Consulenza laser: estetista mostra il piano di sedute alla cliente",
      ratio: "4/5",
      prompt:
        "An esthetician and a client sitting together at a calm consultation corner, the esthetician " +
        "pointing at a simple treatment plan on a tablet, warm trustworthy mood, soft window light, " +
        "ivory and violet tones.",
    } as ImageAsset,
    mood: {
      src: `${GEN}/laser-mood-cabin.webp`,
      alt: "Atmosfera della cabina laser Rebel, luce soffusa",
      ratio: "21/9",
      prompt:
        "Full-bleed atmospheric wide shot of an empty modern laser treatment cabin at dusk, the laser " +
        "device softly lit, violet ambient lighting, ivory linens, quiet luxury, no people.",
    } as ImageAsset,
  },

  /* ----- VISO (pulizia viso) ----- */
  viso: {
    hero: {
      src: `${GEN}/viso-hero-glow.webp`,
      alt: "Pulizia viso professionale in cabina Rebel: pelle luminosa e rilassata",
      ratio: "16/9",
      prompt:
        "Hero shot: a woman lying back during a professional facial cleansing, serene expression, " +
        "luminous fresh skin, gloved esthetician hands gently working near the cheekbone, soft headband, " +
        "warm spa light, ivory tones with a hint of violet.",
    } as ImageAsset,
    texture: {
      src: `${GEN}/viso-texture.webp`,
      alt: "Macro della pelle del viso luminosa e dalla grana fine dopo la pulizia",
      ratio: "4/5",
      prompt:
        "Beauty macro of luminous dewy facial skin with fine even texture, soft natural freckles, " +
        "healthy glow, extreme shallow depth of field, no heavy retouch.",
    } as ImageAsset,
    products: {
      src: `${GEN}/viso-products.webp`,
      alt: "Prodotti professionali per il viso disposti su un vassoio in cabina",
      ratio: "4/5",
      prompt:
        "Flat-lay-ish still life of unbranded professional skincare: a few amber and frosted-glass bottles, " +
        "a soft towel, a ceramic bowl, on an ivory stone tray, warm light, violet shadow accents, no labels.",
    } as ImageAsset,
    mood: {
      src: `${GEN}/viso-mood.webp`,
      alt: "Atmosfera serena della cabina viso Rebel",
      ratio: "21/9",
      prompt:
        "Full-bleed serene spa ambiance: soft draped linen, a single orchid, diffused warm light meeting " +
        "violet shadow, no people, calm and editorial.",
    } as ImageAsset,
  },

  /* ----- MANICURE semipermanente ----- */
  manicure: {
    hero: {
      src: `${GEN}/manicure-hero.webp`,
      alt: "Mani curate con manicure semipermanente, tonalità naturali eleganti",
      ratio: "16/9",
      prompt:
        "Hero shot: elegant well-groomed female hands with a glossy natural-nude semipermanent gel manicure, " +
        "resting gracefully on an ivory linen surface, soft warm light, refined and minimal.",
    } as ImageAsset,
    detail: {
      src: `${GEN}/manicure-detail.webp`,
      alt: "Dettaglio della lavorazione precisa della manicure semipermanente",
      ratio: "4/5",
      prompt:
        "Close-up of precise nail work: a nail technician applying gel polish with a fine brush, LED lamp glow, " +
        "steady hands, clean studio, shallow depth of field.",
    } as ImageAsset,
    mood: {
      src: `${GEN}/manicure-mood.webp`,
      alt: "Atmosfera della postazione mani Rebel",
      ratio: "21/9",
      prompt:
        "Full-bleed mood of a refined manicure station: neutral nail polish bottles in a row out of focus, " +
        "warm light, ivory and champagne tones, no faces, editorial calm.",
    } as ImageAsset,
  },

  /* ----- LAMINAZIONE ciglia & sopracciglia ----- */
  lamina: {
    hero: {
      src: `${GEN}/laminazione-hero-eye.webp`,
      alt: "Sguardo definito dopo laminazione ciglia e sopracciglia",
      ratio: "16/9",
      prompt:
        "Hero beauty close-up of a striking eye with naturally lifted laminated lashes and groomed laminated " +
        "eyebrows, glowing skin, soft catchlight, no heavy makeup, editorial and elegant.",
    } as ImageAsset,
    detail: {
      src: `${GEN}/laminazione-detail.webp`,
      alt: "Procedura di laminazione sopracciglia in corso",
      ratio: "4/5",
      prompt:
        "Close-up of brow lamination in progress: an esthetician brushing eyebrow hairs upward with a fine " +
        "spoolie, calm precision, soft light, shallow depth of field.",
      // brand drop already shipped; fallback below if regeneration skipped
    } as ImageAsset,
    beforeAfter: {
      before: {
        src: `${BRAND}/laminazione-prima-dopo.png`,
        alt: "Confronto prima e dopo della laminazione ciglia e sopracciglia",
        existing: true,
      } as ImageAsset,
    },
    mood: {
      src: `${GEN}/laminazione-mood.webp`,
      alt: "Atmosfera dedicata allo sguardo e alla laminazione",
      ratio: "21/9",
      prompt:
        "Full-bleed dreamy close mood of feminine eyes area softly out of focus, lashes catching light, " +
        "violet-ivory gradient, editorial, no text.",
    } as ImageAsset,
  },

  /* ----- MASSAGGIO rilassante ----- */
  massaggio: {
    hero: {
      src: `${GEN}/massaggio-hero.webp`,
      alt: "Massaggio rilassante a schiena e spalle su lettino professionale",
      ratio: "16/9",
      prompt:
        "Hero shot: a professional relaxing back-and-shoulder massage on a spa massage table, therapist hands " +
        "on upper back, client fully relaxed, warm dim light, draped towel, calm wellness atmosphere, tasteful.",
    } as ImageAsset,
    detail: {
      src: `${BRAND}/corpo-rilassamento-schiena.png`,
      alt: "Dettaglio del massaggio rilassante sulla schiena",
      ratio: "4/5",
      existing: true,
    } as ImageAsset,
    mood: {
      src: `${BRAND}/corpo-calore-avvolge.png`,
      alt: "Atmosfera avvolgente di calore e relax",
      ratio: "21/9",
      existing: true,
    } as ImageAsset,
  },

  /* ----- PEDICURE (estetico / VIP con scrub) ----- */
  pedicure: {
    hero: {
      src: `${GEN}/pedicure-hero.webp`,
      alt: "Pedicure estetica professionale: piedi curati e pelle levigata",
      ratio: "16/9",
      prompt:
        "Hero shot: a relaxing professional pedicure in an elegant studio, well-groomed female feet resting, " +
        "an esthetician's gloved hands gently finishing the skin, soft towel, warm spa light, ivory and " +
        "champagne tones with a hint of violet, refined and tasteful, no harsh clinical look.",
    } as ImageAsset,
    detail: {
      src: `${GEN}/pedicure-detail.webp`,
      alt: "Dettaglio della rifinitura precisa durante il pedicure",
      ratio: "4/5",
      prompt:
        "Close-up of precise pedicure work: gloved hands smoothing and finishing the skin of a heel and toenails, " +
        "clean tools, soft warm light, shallow depth of field, premium and hygienic.",
    } as ImageAsset,
    mood: {
      src: `${GEN}/pedicure-mood.webp`,
      alt: "Atmosfera curata della postazione pedicure Rebel",
      ratio: "21/9",
      prompt:
        "Full-bleed mood of a calm pedicure corner: a soft towel, a ceramic bowl of water with a flower, warm " +
        "diffused light, ivory and violet tones, no people, editorial and serene.",
    } as ImageAsset,
  },

  /* ----- DRENANTE / linfodrenante (reuses shipped brand body assets) ----- */
  drenante: {
    hero: {
      src: `${BRAND}/rimodellamento-donna-beige.png`,
      alt: "Trattamento corpo drenante: silhouette curata e leggera",
      ratio: "16/9",
      existing: true,
    } as ImageAsset,
    detail: {
      src: `${BRAND}/rimodellamento-infrarosso-fasce.png`,
      alt: "Lavoro drenante mirato su gambe e zone interessate da gonfiore",
      ratio: "4/5",
      existing: true,
    } as ImageAsset,
    mood: {
      src: `${BRAND}/corpo-calore-avvolge.png`,
      alt: "Atmosfera avvolgente di benessere e leggerezza",
      ratio: "21/9",
      existing: true,
    } as ImageAsset,
  },

  /* ----- LOCALE MOOD bands (per-city differentiation) ----- */
  locale: {
    racconigi: {
      src: `${GEN}/mood-racconigi.webp`,
      alt: "Atmosfera del territorio di Racconigi, tra il castello e la pianura",
      ratio: "21/9",
      prompt:
        "Full-bleed serene landscape near Racconigi, Piedmont: the historic royal castle park with tall trees " +
        "and a tree-lined avenue, soft golden hour light, gentle mist, cinematic and warm, no people, no text.",
    } as ImageAsset,
    langhe: {
      src: `${GEN}/mood-langhe.webp`,
      alt: "Colline delle Langhe vicino ad Alba al tramonto",
      ratio: "21/9",
      prompt:
        "Full-bleed landscape of the Langhe vineyard hills near Alba, Piedmont, golden hour, rolling rows of " +
        "vines, soft haze, cinematic and warm, no people, no text.",
    } as ImageAsset,
    roero: {
      src: `${GEN}/mood-roero.webp`,
      alt: "Colline del Roero nei pressi di Canale",
      ratio: "21/9",
      prompt:
        "Full-bleed landscape of the Roero hills near Canale, Piedmont, vineyards and gentle ridges, " +
        "late afternoon light, cinematic, no people, no text.",
    } as ImageAsset,
    bra: {
      src: `${GEN}/mood-bra.webp`,
      alt: "Veduta del territorio attorno a Bra, in Piemonte",
      ratio: "21/9",
      prompt:
        "Full-bleed warm landscape between Bra and the Roero, Piedmont countryside with soft hills and a " +
        "distant town, golden hour, cinematic, no people, no text.",
    } as ImageAsset,
  },

  /* ----- STUDIO (trust / atmosphere) ----- */
  studio: {
    cabin: {
      src: `${GEN}/studio-cabin.webp`,
      alt: "Cabina trattamenti dello studio Rebel a Carmagnola",
      ratio: "16/9",
      prompt:
        "Interior of a new, elegant aesthetic treatment cabin: clean lines, ivory and violet accents, a " +
        "treatment bed with fresh linen, warm lighting, plants, premium and welcoming, no people.",
    } as ImageAsset,
    reception: {
      src: `${GEN}/studio-reception.webp`,
      alt: "Area accoglienza dello studio Rebel in Viale Barbaroux 20",
      ratio: "16/9",
      prompt:
        "Stylish reception/welcome area of a modern aesthetic studio, ivory walls with a subtle violet accent, " +
        "soft lighting, a few plants and a candle, calm and premium, no people, no readable signage.",
    } as ImageAsset,
  },
} as const;

/* --------------------------------------------------------------------------
   PAGE → MEDIA mapping, keyed by route path.
   -------------------------------------------------------------------------- */
export interface PageMedia {
  hero?: ImageAsset;
  splitA?: ImageAsset;
  splitB?: ImageAsset;
  mood?: ImageAsset;
  beforeAfter?: { before: ImageAsset; after: ImageAsset };
}

export const pageMedia: Record<string, PageMedia> = {
  /* ---- Laser locality money pages ---- */
  "/epilazione-laser-alba": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    splitB: media.laser.consult,
    mood: media.locale.langhe,
  },
  "/epilazione-laser-bra": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    splitB: media.laser.consult,
    mood: media.locale.bra,
  },
  "/epilazione-laser-canale": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    splitB: media.laser.consult,
    mood: media.locale.roero,
  },

  /* ---- Pillar laser ---- */
  "/epilazione-laser-carmagnola": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    splitB: media.laser.consult,
    mood: media.laser.mood,
  },
  "/epilazione-laser-ice-polar-carmagnola": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    mood: media.laser.mood,
  },

  /* ---- Pulizia viso locality ---- */
  "/pulizia-viso-alba": {
    hero: media.viso.hero,
    splitA: media.viso.texture,
    splitB: media.viso.products,
    mood: media.locale.langhe,
  },
  "/pulizia-viso-bra": {
    hero: media.viso.hero,
    splitA: media.viso.texture,
    splitB: media.viso.products,
    mood: media.locale.bra,
  },
  "/pulizia-viso-canale": {
    hero: media.viso.hero,
    splitA: media.viso.texture,
    splitB: media.viso.products,
    mood: media.locale.roero,
  },

  /* ---- Manicure semipermanente locality ---- */
  "/manicure-semipermanente-alba": {
    hero: media.manicure.hero,
    splitA: media.manicure.detail,
    mood: media.locale.langhe,
  },
  "/manicure-semipermanente-bra": {
    hero: media.manicure.hero,
    splitA: media.manicure.detail,
    mood: media.locale.bra,
  },
  "/manicure-semipermanente-canale": {
    hero: media.manicure.hero,
    splitA: media.manicure.detail,
    mood: media.locale.roero,
  },

  /* ---- Laminazione locality ---- */
  "/laminazione-alba": {
    hero: media.lamina.hero,
    splitA: media.lamina.detail,
    mood: media.locale.langhe,
  },
  "/laminazione-bra": {
    hero: media.lamina.hero,
    splitA: media.lamina.detail,
    mood: media.locale.bra,
  },
  "/laminazione-canale": {
    hero: media.lamina.hero,
    splitA: media.lamina.detail,
    mood: media.locale.roero,
  },

  /* ---- Massaggio rilassante locality ---- */
  "/massaggio-rilassante-alba": {
    hero: media.massaggio.hero,
    splitA: media.massaggio.mood,
    mood: media.locale.langhe,
  },
  "/massaggio-rilassante-bra": {
    hero: media.massaggio.hero,
    splitA: media.massaggio.detail,
    mood: media.locale.bra,
  },
  "/massaggio-rilassante-canale": {
    hero: media.massaggio.hero,
    splitA: media.massaggio.mood,
    mood: media.locale.roero,
  },

  /* ---- Racconigi parity (new dedicated treatment pages) ---- */
  "/epilazione-laser-racconigi": {
    hero: media.laser.hero,
    splitA: media.laser.handpiece,
    splitB: media.laser.consult,
    mood: media.locale.racconigi,
  },
  "/laminazione-racconigi": {
    hero: media.lamina.hero,
    splitA: media.lamina.detail,
    mood: media.locale.racconigi,
  },
  "/pulizia-viso-racconigi": {
    hero: media.viso.hero,
    splitA: media.viso.texture,
    splitB: media.viso.products,
    mood: media.locale.racconigi,
  },
  "/manicure-semipermanente-racconigi": {
    hero: media.manicure.hero,
    splitA: media.manicure.detail,
    mood: media.locale.racconigi,
  },
  "/massaggio-rilassante-racconigi": {
    hero: media.massaggio.hero,
    splitA: media.massaggio.detail,
    mood: media.locale.racconigi,
  },

  /* ---- Pedicure locality ---- */
  "/pedicure-racconigi": {
    hero: media.pedicure.hero,
    splitA: media.pedicure.detail,
    mood: media.locale.racconigi,
  },
  "/pedicure-alba": {
    hero: media.pedicure.hero,
    splitA: media.pedicure.detail,
    mood: media.locale.langhe,
  },
  "/pedicure-bra": {
    hero: media.pedicure.hero,
    splitA: media.pedicure.detail,
    mood: media.locale.bra,
  },
  "/pedicure-canale": {
    hero: media.pedicure.hero,
    splitA: media.pedicure.detail,
    mood: media.locale.roero,
  },

  /* ---- Massaggio linfodrenante locality ---- */
  "/massaggio-linfodrenante-racconigi": {
    hero: media.drenante.hero,
    splitA: media.drenante.detail,
    mood: media.locale.racconigi,
  },
  "/massaggio-linfodrenante-alba": {
    hero: media.drenante.hero,
    splitA: media.drenante.detail,
    mood: media.locale.langhe,
  },
  "/massaggio-linfodrenante-bra": {
    hero: media.drenante.hero,
    splitA: media.drenante.detail,
    mood: media.locale.bra,
  },
  "/massaggio-linfodrenante-canale": {
    hero: media.drenante.hero,
    splitA: media.drenante.detail,
    mood: media.locale.roero,
  },
};

/** Convenience accessor used by pages. */
export const getPageMedia = (path: string): PageMedia => pageMedia[path] ?? {};
