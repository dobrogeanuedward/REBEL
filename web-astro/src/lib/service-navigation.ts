import { commercialCategoryPaths, searchIntentPaths } from "./search-intents";

// One commercial destination for each family; the price catalogue remains
// the place to compare the full menu, and guides explain preparation/care.
export const serviceCategoryDestinations: Record<string, string> = {
  viso: commercialCategoryPaths.face,
  corpo: commercialCategoryPaths.body,
  massaggi: commercialCategoryPaths.massages,
  pressomassaggio: commercialCategoryPaths.pressomassage,
  "laser-treatwell": searchIntentPaths.laserService,
  mani: "/servizi/manicure-semipermanente-carmagnola",
  sguardo: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  piedi: "/servizi/pedicure-carmagnola",
  "ceretta-donna": "/servizi/ceretta-carmagnola#ceretta-donna",
  "ceretta-uomo": "/servizi/ceretta-carmagnola#ceretta-uomo",
};

export const guideCommercialDestinations: Record<string, { href: string; label: string }> = {
  "trattamenti-viso-carmagnola": { href: commercialCategoryPaths.face, label: "Confronta i trattamenti viso, le durate e i prezzi" },
  "trattamenti-corpo-carmagnola": { href: commercialCategoryPaths.body, label: "Confronta i trattamenti corpo e scegli la tua seduta" },
  "pressomassaggio-carmagnola": { href: commercialCategoryPaths.pressomassage, label: "Confronta sedute e varianti di pressomassaggio" },
  "massaggio-rilassante-carmagnola-cervicale-stress": { href: commercialCategoryPaths.massages, label: "Confronta i massaggi estetici e di benessere" },
};
