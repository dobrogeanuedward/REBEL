/* ==========================================================================
   Rebel · Page Media Manifest
   --------------------------------------------------------------------------
   Single source of truth for editorial imagery. Runtime sources resolve
   semantic R2 slots through /api/site-asset, with local verified fallbacks.
   Generation prompts intentionally avoid invented Rebel interiors.
   ========================================================================== */

export const BRAND_STYLE =
  "Editorial Italian beauty photography for REBEL. Warm luminous porcelain, controlled plum and " +
  "one restrained prismatic/rainbow refraction. Recurring approved casting, living eyes, spontaneous " +
  "micro-expressions and varied camera direction. Preserve pores, peach fuzz, fine lines, tiny redness " +
  "and natural body variation; anatomically credible hands, tools and cables. Denim, linen and cotton, " +
  "never generic spa luxury. Crop environments to material fragments only: no invented entrance, " +
  "reception, corridor, treatment cabin or recognisable room. No logos or text inside photography.";

export interface ImageAsset {
  src: string;
  alt: string;
  ratio?: string;
  prompt?: string;
  existing?: boolean;
}

export const buildPrompt = (asset: ImageAsset): string =>
  asset.prompt ? `${BRAND_STYLE} ${asset.prompt}` : "";

const siteAsset = (slot: string): string =>
  `/api/site-asset?slot=${encodeURIComponent(slot)}`;

export const media = {
  method: {
    hero: {
      src: siteAsset("home.hero.method.desktop"),
      alt: "Valutazione iniziale e Mappa Rebel con la professionista",
      ratio: "16/9",
      prompt: "Approved professional and client reviewing the real Mappa Rebel; visible hands, document and attentive eye contact.",
    } as ImageAsset,
  },
  journeys: {
    hero: {
      src: siteAsset("home.hero.epigenetics.desktop"),
      alt: "Professionista REBEL durante un trattamento personalizzato",
      ratio: "16/9",
      prompt: "Approved professional and client during a credible treatment gesture; human campaign image, never a decorative stripe.",
    } as ImageAsset,
    glow: {
      src: siteAsset("journeys.glow.hero.desktop"),
      alt: "Percorso Glow per luminosità e uniformità",
      ratio: "16/9",
    } as ImageAsset,
    longevity: {
      src: siteAsset("journeys.longevity.hero.desktop"),
      alt: "Percorso Longevity per tono ed elasticità",
      ratio: "16/9",
    } as ImageAsset,
    forma: {
      src: siteAsset("journeys.forma.hero.desktop"),
      alt: "Percorso Forma per drenaggio e compattezza",
      ratio: "16/9",
    } as ImageAsset,
    liberta: {
      src: siteAsset("journeys.liberta.hero.desktop"),
      alt: "Percorso Libertà per epilazione Laser Ice Polar",
      ratio: "16/9",
    } as ImageAsset,
  },
  laser: {
    hero: {
      src: siteAsset("home.hero.laser.desktop"),
      alt: "Epilazione laser Ice Polar con protezioni e gesto professionale",
      ratio: "16/9",
      prompt: "Real Ice Polar treatment in progress, protective eyewear, one coherent leg segment and device contact; tight crop, no room.",
    } as ImageAsset,
    handpiece: {
      src: siteAsset("services.laser.handpiece.desktop"),
      alt: "Manipolo laser Ice Polar in appoggio corretto sulla pelle",
      ratio: "4/5",
      prompt: "Tangent macro of the handpiece in real contact with natural skin; coherent hand, cable and pressure.",
    } as ImageAsset,
    consult: {
      src: siteAsset("services.method.consultation.mobile"),
      alt: "Valutazione professionale del percorso laser",
      ratio: "4/5",
      prompt: "Over-shoulder consultation with an active treatment map and natural hands; no reception or room overview.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.prism.desktop"),
      alt: "Rifrazione materica REBEL Prism",
      ratio: "21/9",
      prompt: "Translucent prismatic film and warm porcelain as a quiet panoramic material band.",
    } as ImageAsset,
  },
  viso: {
    hero: {
      src: siteAsset("journeys.glow.hero.desktop"),
      alt: "Pelle viva e luminosa nel percorso Glow REBEL",
      ratio: "16/9",
      prompt: "Approved young blonde turning into living light; authentic freckles, pores and moving hair.",
    } as ImageAsset,
    texture: {
      src: siteAsset("services.face.skinTexture.mobile"),
      alt: "Macro di pelle reale con texture e micro-variazioni",
      ratio: "4/5",
      prompt: "Side-light facial macro with pores, peach fuzz, freckles and natural micro-redness.",
    } as ImageAsset,
    products: {
      src: siteAsset("services.face.activesTopshot.mobile"),
      alt: "Attivi e materiali professionali su porcellana",
      ratio: "4/5",
      prompt: "True top-shot of active work with porcelain, cotton, vial and controlled plum film.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.prism.desktop"),
      alt: "Luce REBEL Prism su porcellana",
      ratio: "21/9",
      prompt: "Panoramic translucent prismatic ribbon on warm porcelain, no props or fake spa scene.",
    } as ImageAsset,
  },
  manicure: {
    hero: {
      src: siteAsset("services.manicure.hero.desktop"),
      alt: "Manicure REBEL durante una lavorazione reale",
      ratio: "16/9",
      prompt: "Candid manicure action from an oblique camera, credible hands and tools, tight material crop.",
    } as ImageAsset,
    detail: {
      src: siteAsset("services.manicure.detail.mobile"),
      alt: "Dettaglio della precisione nella manicure",
      ratio: "4/5",
      prompt: "Close working gesture on one nail with natural fingers and believable tool contact.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.cut.desktop"),
      alt: "Lama materica REBEL Cut in plum",
      ratio: "21/9",
      prompt: "Panoramic layered plum organza and resin on porcelain.",
    } as ImageAsset,
  },
  lamina: {
    hero: {
      src: siteAsset("home.hero.lamination.desktop"),
      alt: "Laminazione coreana eseguita con naturale precisione",
      ratio: "16/9",
      prompt: "Approved client and professional during brow lamination, eye alive and spoolie direction credible.",
    } as ImageAsset,
    detail: {
      src: siteAsset("services.lamination.detail.mobile"),
      alt: "Spoolie in contatto reale con il sopracciglio",
      ratio: "4/5",
      prompt: "Over-shoulder brow detail with natural fingers, individual hairs and true skin texture.",
    } as ImageAsset,
    beforeAfter: {
      before: {
        src: "/img/brand/laminazione-prima-dopo.png",
        alt: "Confronto prima e dopo della laminazione ciglia e sopracciglia",
        existing: true,
      } as ImageAsset,
    },
    mood: {
      src: siteAsset("brand.prism.desktop"),
      alt: "Riflesso REBEL dedicato allo sguardo",
      ratio: "21/9",
      prompt: "Minimal prismatic band with lilac and plum optical depth.",
    } as ImageAsset,
  },
  massaggio: {
    hero: {
      src: siteAsset("services.massage.hero.desktop"),
      alt: "Massaggio cervicale professionale su cliente coperta",
      ratio: "16/9",
      prompt: "Fully clothed client with towel and credible shoulder-release gesture, living expressions, no cabin.",
    } as ImageAsset,
    detail: {
      src: siteAsset("services.massage.detail.mobile"),
      alt: "Lavoro manuale su mano e avambraccio",
      ratio: "4/5",
      prompt: "Professional hand-and-forearm massage with coherent wrists, thumbs and pressure.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.cut.desktop"),
      alt: "Materia plum avvolgente REBEL Cut",
      ratio: "21/9",
      prompt: "Soft layered plum textile band on warm porcelain.",
    } as ImageAsset,
  },
  pedicure: {
    hero: {
      src: siteAsset("services.pedicure.hero.desktop"),
      alt: "Pedicure professionale con anatomia e strumento credibili",
      ratio: "16/9",
      prompt: "High-diagonal pedicure action with five natural toes, correct nail tool and warm porcelain surface.",
    } as ImageAsset,
    detail: {
      src: siteAsset("services.pedicure.detail.mobile"),
      alt: "Applicazione precisa del trattamento sull'unghia",
      ratio: "4/5",
      prompt: "Radial close detail of serum applied to one toenail, five plausible toes and natural hands.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.prism.desktop"),
      alt: "Rifrazione chiara REBEL Prism",
      ratio: "21/9",
      prompt: "Clean panoramic prism on porcelain, no invented pedicure station.",
    } as ImageAsset,
  },
  drenante: {
    hero: {
      src: siteAsset("services.draining.hero.desktop"),
      alt: "Manualità drenante reale sulla gamba",
      ratio: "16/9",
      prompt: "Low lateral view of a gentle upward draining stroke on one continuous leg segment.",
    } as ImageAsset,
    detail: {
      src: siteAsset("services.draining.detail.mobile"),
      alt: "Dettaglio della manualità drenante",
      ratio: "4/5",
      prompt: "Top-diagonal calf detail with coherent alternating hands and normal skin variation.",
    } as ImageAsset,
    mood: {
      src: siteAsset("brand.cut.desktop"),
      alt: "Movimento materico REBEL Cut",
      ratio: "21/9",
      prompt: "Panoramic plum material gesture suggesting flow without medical graphics.",
    } as ImageAsset,
  },
  locale: {
    racconigi: {
      src: siteAsset("territory.racconigi"),
      alt: "Territorio di Racconigi tra viale alberato e pianura",
      ratio: "21/9",
      prompt: "Truthful Piedmont territorial atmosphere, explicitly not the Rebel centre.",
    } as ImageAsset,
    langhe: {
      src: siteAsset("territory.langhe"),
      alt: "Filari e colline delle Langhe vicino ad Alba",
      ratio: "21/9",
      prompt: "Low diagonal view through real-feeling vineyard rows and hazy Langhe hills.",
    } as ImageAsset,
    roero: {
      src: siteAsset("territory.roero"),
      alt: "Rocche e vegetazione del Roero nei pressi di Canale",
      ratio: "21/9",
      prompt: "Roero sandy geology, vineyard vegetation and one peach branch; no centre claim.",
    } as ImageAsset,
    bra: {
      src: siteAsset("territory.bra"),
      alt: "Campagna tra Bra e il Roero",
      ratio: "21/9",
      prompt: "Cropped old brick agricultural arch opening to Piedmont fields, never a Rebel entrance.",
    } as ImageAsset,
  },
  studio: {
    cabin: {
      src: siteAsset("home.hero.studio.desktop"),
      alt: "Professionista REBEL durante la preparazione del trattamento",
      ratio: "16/9",
      prompt: "Recurring professional preparing compress and bowl in a tight material crop; no room overview.",
    } as ImageAsset,
    reception: {
      src: siteAsset("studio.professional.desktop"),
      alt: "Gesto di cura della professionista REBEL",
      ratio: "16/9",
      prompt: "Professional hands and authentic work gesture, not an invented reception or entrance.",
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


