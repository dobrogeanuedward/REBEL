/**
 * Canonical destinations and approved permanent consolidations. Historical
 * offers and repeated service/city pages point to the relevant service.
 */
export const searchIntentPaths = {
  laserService: "/epilazione-laser-carmagnola",
  laserOffer: "/promo-epilazione-laser-carmagnola",
  laserTechnology: "/epilazione-laser-ice-polar-carmagnola",
} as const;

// Commercial comparisons sit apart from the guides explaining how to choose,
// prepare for or combine treatments. Their targets are shared with sitemaps.
export const commercialCategoryPaths = {
  face: "/servizi/trattamenti-viso-carmagnola",
  body: "/servizi/trattamenti-corpo-carmagnola",
  pressomassage: "/servizi/pressomassaggio-carmagnola",
  massages: "/servizi/massaggi-carmagnola",
} as const;

const territorialSearchCities = ["alba", "bra", "canale", "racconigi"] as const;

// Reviewed against authored content and the available Search Console history.
// Pedicure points to the comparison of all five options, not the former
// VIP-only interpretation of that URL. Travel utilities remain separate.
export const territorialServiceDestinations = {
  "epilazione-laser": searchIntentPaths.laserService,
  "pulizia-viso": "/servizi/pulizia-viso-carmagnola",
  "manicure-semipermanente": "/servizi/manicure-semipermanente-carmagnola",
  laminazione: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  "massaggio-rilassante": "/servizi/massaggio-rilassante-carmagnola",
  "massaggio-linfodrenante": "/servizi/massaggio-linfodrenante-carmagnola",
  pedicure: "/servizi/pedicure-carmagnola",
} as const;

export const territorialServiceRedirects: Record<string, string> = Object.fromEntries(
  Object.entries(territorialServiceDestinations).flatMap(([service, destination]) =>
    territorialSearchCities.map((city) => ["/" + service + "-" + city, destination]),
  ),
);

export const permanentRedirects: Record<string, string> = {
  ...territorialServiceRedirects,
  "/epilazione-laser-prova": searchIntentPaths.laserOffer,
  "/laser-full-body-carmagnola": searchIntentPaths.laserOffer,
  "/promo-laser-carmagnola-dintorni": searchIntentPaths.laserOffer,
  "/competenze/epilazione-laser-carmagnola": searchIntentPaths.laserService,
  "/competenze/drenaggio-corpo-carmagnola":
    "/servizi/massaggio-linfodrenante-carmagnola",
  "/competenze/linfodrenante-carmagnola":
    "/servizi/massaggio-linfodrenante-carmagnola",
  "/competenze/epilazione-laser-viso-carmagnola-guida-realistica":
    "/competenze/epilazione-laser-viso-carmagnola-cosa-sapere",
  "/competenze/epilazione-laser-inguine-carmagnola-guida-pratica":
    "/competenze/epilazione-laser-inguine-carmagnola",
  "/competenze/epilazione-laser-ascelle-carmagnola-guida-pratica":
    "/competenze/epilazione-laser-ascelle-carmagnola",
  "/competenze/laser-uomo-carmagnola-guida-pratica":
    "/competenze/laser-uomo-carmagnola",
  "/competenze/laser-barba-collo-carmagnola-guida-pratica":
    "/competenze/laser-barba-collo-carmagnola",
  "/competenze/laser-schiena-carmagnola-guida-pratica":
    "/competenze/laser-schiena-carmagnola",
  "/competenze/laser-gambe-carmagnola-guida-pratica":
    "/competenze/laser-gambe-carmagnola",
  "/competenze/linfodrenante-carmagnola-guida-pratica":
    "/servizi/massaggio-linfodrenante-carmagnola",
  "/competenze/pressoterapia-carmagnola-guida-pratica":
    "/competenze/pressomassaggio-carmagnola",
  "/competenze/pressoterapia-carmagnola":
    "/competenze/pressomassaggio-carmagnola",
  "/competenze/pressomassaggio-carmagnola-guida-pratica":
    "/competenze/pressomassaggio-carmagnola",
};

const excludedSearchPaths = new Set([
  "/404",
  "/404.html",
  "/prenota",
  // Keep the new travel utility available without creating another local
  // service landing. Existing local pages await a data-led content review.
  "/localita/torino",
]);

/** Apply the same policy to the generated, editorial and image sitemaps. */
export function isIndexableSearchPage(value: string): boolean {
  const url = new URL(value, "https://www.rebelepigenetica.it");
  const path = url.pathname.replace(/\/+$/, "") || "/";

  return (
    !url.search &&
    !url.hash &&
    !excludedSearchPaths.has(path) &&
    !Object.hasOwn(permanentRedirects, path) &&
    !/^\/(?:api|_astro|_image)(?:\/|$)/.test(path) &&
    !/\.(?:xml|json|txt)$/.test(path)
  );
}
