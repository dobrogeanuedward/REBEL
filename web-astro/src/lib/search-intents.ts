/**
 * One destination for each distinct laser search intent. Historical offer
 * URLs redirect here instead of publishing competing, self-canonical pages.
 */
export const searchIntentPaths = {
  laserService: "/epilazione-laser-carmagnola",
  laserOffer: "/promo-epilazione-laser-carmagnola",
  laserTechnology: "/epilazione-laser-ice-polar-carmagnola",
} as const;

export const permanentRedirects: Record<string, string> = {
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
