export type JourneyTechnologyVisual = {
  name: string;
  slot: string;
  alt: string;
};

export type JourneyVisual = {
  botanicalSrc: string;
  botanicalAlt: string;
  momentSlot: string;
  momentAlt: string;
  technologyVisuals: JourneyTechnologyVisual[];
};

const libraryRoot = "/img/rebel-r2/rebel/library/v1/journeys";

const matter = (slug: string) => ({
  botanicalSrc: `${libraryRoot}/${slug}/matter-cutout-v1.webp`,
});

export const journeyVisuals: Record<string, JourneyVisual> = {
  "skin-reset": {
    ...matter("skin-reset"),
    botanicalAlt: "Avena, ananas e papaya del percorso Skin Reset",
    momentSlot: "journeys.skinReset.moment",
    momentAlt: "Una professionista applica un prodotto cosmetico sul viso con un pennello",
    technologyVisuals: [],
  },
  barrier: {
    ...matter("barrier"),
    botanicalAlt: "Calendula e manna del percorso Barrier",
    momentSlot: "journeys.barrier.moment",
    momentAlt: "Una professionista massaggia un gel sulla guancia di una cliente",
    technologyVisuals: [],
  },
  balance: {
    ...matter("balance"),
    botanicalAlt: "Bixa orellana e ingredienti fermentati del percorso Balance",
    momentSlot: "journeys.balance.moment",
    momentAlt: "Una professionista applica un prodotto con un pennello sulla zona T del viso",
    technologyVisuals: [],
  },
  glow: {
    ...matter("glow"),
    botanicalAlt: "Melograno e vinaccioli del percorso Glow",
    momentSlot: "journeys.glow.moment",
    momentAlt: "Gocce di prodotto cosmetico sul viso durante un massaggio",
    technologyVisuals: [],
  },
  white: {
    ...matter("white"),
    botanicalAlt: "Satsuma e Boerhavia diffusa del percorso White",
    momentSlot: "journeys.white.moment",
    momentAlt: "Una professionista applica un prodotto cosmetico sulla guancia con un pennello",
    technologyVisuals: [],
  },
  structure: {
    ...matter("structure"),
    botanicalAlt: "Centella e olivello spinoso del percorso Structure",
    momentSlot: "journeys.structure.moment",
    momentAlt: "Una professionista esegue un massaggio manuale sotto il mento di una cliente",
    technologyVisuals: [
      { name: "Aura Q2", slot: "technologies.thory.auraQ2", alt: "Tecnologia THORY Aura Q2" },
      { name: "Tecar 448Revolution", slot: "technologies.thory.tecar448", alt: "Tecnologia THORY Tecar 448Revolution" },
    ],
  },
  longevity: {
    ...matter("longevity"),
    botanicalAlt: "Avena, calendula, aloe e curcuma del percorso Longevity",
    momentSlot: "journeys.longevity.moment",
    momentAlt: "Una professionista massaggia una crema sul viso di una cliente adulta",
    technologyVisuals: [],
  },
  forma: {
    ...matter("forma"),
    botanicalAlt: "Cardo mariano, guaranà, fucus, kigelia, fumaria e Lythrum del percorso Forma",
    momentSlot: "home.hero.technologies.desktop",
    momentAlt: "Professionista utilizza un manipolo sulla coscia di una cliente",
    technologyVisuals: [
      { name: "CryoShape X2", slot: "technologies.thory.cryoShapeX2", alt: "Tecnologia THORY CryoShape X2" },
      { name: "InfraPress X2", slot: "technologies.thory.infraPressX2", alt: "Tecnologia THORY InfraPress X2" },
    ],
  },
  liberta: {
    ...matter("liberta"),
    botanicalAlt: "Aloe vera, calendula e Boswellia serrata del percorso Libertà",
    momentSlot: "services.laser.handpiece.desktop",
    momentAlt: "Manipolo laser a contatto con la gamba di una cliente",
    technologyVisuals: [
      { name: "Lumina X1 Pro + ICE Polar", slot: "services.laser.handpiece.desktop", alt: "Seduta con Lumina X1 Pro e sistema ICE Polar" },
    ],
  },
};

export const getJourneyVisual = (slug: string) => journeyVisuals[slug];
