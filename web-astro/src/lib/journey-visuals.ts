export type JourneyTechnologyVisual = {
  name: string;
  slot: string;
  alt: string;
};

export type JourneyVisual = {
  botanicalSrc: string;
  botanicalCardSrc: string;
  botanicalAlt: string;
  momentSlot: string;
  momentAlt: string;
  technologyVisuals: JourneyTechnologyVisual[];
};

const libraryRoot = "/img/rebel-r2/rebel/library/v1/journeys";

const matter = (slug: string) => ({
  botanicalSrc: `${libraryRoot}/${slug}/matter-cutout-v1.webp`,
  botanicalCardSrc: `${libraryRoot}/${slug}/matter-card-v1.webp`,
});

export const journeyVisuals: Record<string, JourneyVisual> = {
  "skin-reset": {
    ...matter("skin-reset"),
    botanicalAlt: "Avena, ananas e papaya del percorso Skin Reset",
    momentSlot: "services.face.activesTopshot.mobile",
    momentAlt: "Prodotti e strumenti preparati per un trattamento viso REBEL",
    technologyVisuals: [],
  },
  barrier: {
    ...matter("barrier"),
    botanicalAlt: "Calendula e manna del percorso Barrier",
    momentSlot: "services.face.skinTexture.mobile",
    momentAlt: "Dettaglio ravvicinato della grana naturale della pelle",
    technologyVisuals: [],
  },
  balance: {
    ...matter("balance"),
    botanicalAlt: "Bixa orellana e ingredienti fermentati del percorso Balance",
    momentSlot: "home.hero.face.desktop",
    momentAlt: "Viso di una cliente in luce naturale",
    technologyVisuals: [],
  },
  glow: {
    ...matter("glow"),
    botanicalAlt: "Melograno e vinaccioli del percorso Glow",
    momentSlot: "journeys.glow.hero.desktop",
    momentAlt: "Viso di una cliente illuminato dalla luce laterale",
    technologyVisuals: [],
  },
  white: {
    ...matter("white"),
    botanicalAlt: "Satsuma e Boerhavia diffusa del percorso White",
    momentSlot: "home.hero.face.desktop",
    momentAlt: "Viso di una cliente in luce naturale",
    technologyVisuals: [],
  },
  structure: {
    ...matter("structure"),
    botanicalAlt: "Centella e olivello spinoso del percorso Structure",
    momentSlot: "journeys.longevity.hero.desktop",
    momentAlt: "Cliente durante un trattamento viso",
    technologyVisuals: [
      { name: "Aura Q2", slot: "technologies.thory.auraQ2", alt: "Tecnologia THORY Aura Q2" },
      { name: "Tecar 448Revolution", slot: "technologies.thory.tecar448", alt: "Tecnologia THORY Tecar 448Revolution" },
    ],
  },
  longevity: {
    ...matter("longevity"),
    botanicalAlt: "Avena, calendula, aloe e curcuma del percorso Longevity",
    momentSlot: "journeys.longevity.hero.desktop",
    momentAlt: "Cliente durante un trattamento viso",
    technologyVisuals: [],
  },
  forma: {
    ...matter("forma"),
    botanicalAlt: "Cardo mariano, guaranà, fucus, kigelia e Lythrum del percorso Forma",
    momentSlot: "journeys.forma.hero.desktop",
    momentAlt: "Professionista durante un trattamento corpo",
    technologyVisuals: [
      { name: "CryoShape X2", slot: "technologies.thory.cryoShapeX2", alt: "Tecnologia THORY CryoShape X2" },
      { name: "InfraPress X2", slot: "technologies.thory.infraPressX2", alt: "Tecnologia THORY InfraPress X2" },
    ],
  },
  liberta: {
    ...matter("liberta"),
    botanicalAlt: "Aloe vera, calendula e Boswellia serrata del percorso Libertà",
    momentSlot: "services.laser.handpiece.desktop",
    momentAlt: "Manipolo a contatto con la pelle durante una seduta laser REBEL",
    technologyVisuals: [
      { name: "Lumina X1 Pro + ICE Polar", slot: "services.laser.handpiece.desktop", alt: "Seduta con Lumina X1 Pro e sistema ICE Polar" },
    ],
  },
};

export const getJourneyVisual = (slug: string) => journeyVisuals[slug];
