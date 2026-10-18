import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  commercialCategoryPaths,
  isIndexableSearchPage,
  permanentRedirects,
  searchIntentPaths,
  territorialServiceRedirects,
  territorialServiceDestinations,
} from "../src/lib/search-intents.ts";
import { GET as getSitemap } from "../src/pages/sitemap.xml.ts";
import { GET as getImageSitemap } from "../src/pages/sitemap-images.xml.ts";
import { competencePages, servicePages } from "../src/lib/seo-content-refined.ts";

const projectDir = fileURLToPath(new URL("../", import.meta.url));
const origin = "https://www.rebelepigenetica.it";
const staticOutputDir = join(projectDir, ".vercel/output/static");
const getBuiltPage = (path: string) => {
  const route = path === "/" ? "" : path.replace(/^\//, "");
  const files = [
    join(staticOutputDir, route, "index.html"),
    join(staticOutputDir, route + ".html"),
  ];
  const file = files.find(existsSync);
  assert.ok(file, "Missing built page: " + path);
  return readFileSync(file, "utf8");
};
const pageLocations = (xml: string) =>
  [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const verifySitemap = (xml: string) => {
  const urls = pageLocations(xml);
  assert.ok(urls.length > 0, "A sitemap must expose at least one page.");
  assert.equal(urls.length, new Set(urls).size, "Page URLs must not repeat.");
  for (const url of urls) {
    assert.equal(new URL(url).origin, origin, "Unexpected origin: " + url);
    assert.ok(isIndexableSearchPage(url), "Non-canonical or noindex URL in sitemap: " + url);
  }
  return urls;
};

test("sitemaps exclude redirects, noindex utilities and non-page endpoints", () => {
  for (const path of [
    ...Object.keys(permanentRedirects),
    "/prenota", "/prenota/", "/404", "/404.html", "/localita/torino/",
    "/api/contact", "/feed.xml", "/feed.json", "/robots.txt",
    "/sitemap.xml", "/sitemap-index.xml", "/sitemap-images.xml",
    "/_astro/app.js", "/contatti?source=promo-laser", "/contatti#form",
  ]) {
    assert.equal(isIndexableSearchPage(path), false, path);
    assert.equal(isIndexableSearchPage(origin + path), false, "Absolute " + path);
  }
  for (const path of [
    "/", ...Object.values(searchIntentPaths), ...Object.values(commercialCategoryPaths), "/localita/carignano",
    "/localita/racconigi", "/localita/alba", "/localita/bra", "/localita/canale",
    "/servizi/pedicure-carmagnola",
    "/competenze/epilazione-laser-inguine-carmagnola",
  ]) {
    assert.equal(isIndexableSearchPage(path), true, path);
  }
});

test("all 28 reviewed service-city aliases consolidate directly without removing travel utilities or pedicure variants", () => {
  assert.equal(Object.keys(territorialServiceRedirects).length, 28);
  assert.equal(Object.keys(territorialServiceDestinations).length, 7);
  for (const [alias, destination] of Object.entries(territorialServiceRedirects)) {
    assert.equal(permanentRedirects[alias], destination, alias);
    assert.equal(isIndexableSearchPage(alias), false, alias);
    assert.equal(Object.hasOwn(permanentRedirects, destination), false, "Redirect chain: " + alias);
    assert.equal(isIndexableSearchPage(destination), true, destination);
    const url = new URL(destination, origin);
    assert.equal(url.origin, origin);
    assert.equal(url.hash, "", "Canonical destination must not be a fragment: " + alias);
    assert.equal(url.search, "", "Canonical destination must not be a tracking URL: " + alias);
  }
  for (const city of ["alba", "bra", "canale", "racconigi"]) {
    assert.equal(isIndexableSearchPage("/localita/" + city), true, city);
    assert.equal(permanentRedirects["/pedicure-" + city], "/servizi/pedicure-carmagnola");
  }
  for (const slug of [
    "pedicure-carmagnola",
    "pedicure-estetico-carmagnola",
    "pedicure-estetico-con-smalto-carmagnola",
    "pedicure-semipermanente-carmagnola",
    "taglio-unghie-piedi-carmagnola",
  ]) {
    assert.ok(servicePages.some((service) => service.slug === slug), "Pedicure option removed: " + slug);
  }
});

test("approved offer aliases redirect directly to the indexable offer", () => {
  for (const alias of ["/laser-full-body-carmagnola", "/promo-laser-carmagnola-dintorni"]) {
    assert.equal(permanentRedirects[alias], searchIntentPaths.laserOffer);
    assert.equal(existsSync(join(projectDir, "src/pages", alias.slice(1) + ".astro")), false,
      "Dedicated promotional aliases should not retain duplicate source pages.");
  }
  for (const target of Object.values(permanentRedirects)) {
    assert.equal(Object.hasOwn(permanentRedirects, target), false, "Redirect chain: " + target);
    assert.equal(isIndexableSearchPage(target), true, "Invalid redirect destination: " + target);
  }
});

test("consolidated guides cannot render or reappear in related hubs", () => {
  const consolidatedSlugs = [
    "epilazione-laser-carmagnola",
    "drenaggio-corpo-carmagnola",
    "linfodrenante-carmagnola",
  ];
  for (const slug of consolidatedSlugs) {
    assert.equal(competencePages.some((page) => page.slug === slug), false, slug);
  }
  for (const page of [...servicePages, ...competencePages]) {
    for (const slug of page.relatedCompetenceSlugs ?? []) {
      assert.equal(consolidatedSlugs.includes(slug), false, page.slug + " links to " + slug);
    }
  }
  for (const slug of [
    "manicure-semipermanente-carmagnola-durata-rimozione",
    "pulizia-viso-carmagnola-frequenza-benefici",
    "epilazione-laser-inguine-carmagnola",
    "epilazione-laser-estate-sole-carmagnola",
  ]) {
    assert.ok(competencePages.some((page) => page.slug === slug), "Distinct guide removed: " + slug);
  }
  const service = servicePages.find((page) => page.slug === "massaggio-linfodrenante-carmagnola");
  assert.ok(service);
  assert.ok(service.faqs.some((faq) => faq.q.includes("Drenaggio corpo")));
  assert.ok(service.editorialSections?.some((section) => section.heading === "Quando chiedere prima un parere medico"));
});

test("editorial sitemap has one URL per laser intent and no synthetic revision date", async () => {
  const response = await getSitemap({} as never);
  const xml = await response.text();
  const urls = verifySitemap(xml);
  for (const path of Object.values(searchIntentPaths)) {
    assert.equal(urls.filter((url) => url === origin + path).length, 1, path);
  }
  assert.doesNotMatch(xml, /<lastmod>/, "A build date must not imply that every page changed.");
});

test("image sitemap references only indexable pages and deduplicates their images", async () => {
  const response = await getImageSitemap({} as never);
  const xml = await response.text();
  verifySitemap(xml);
  for (const entry of xml.matchAll(/<url>(.*?)<\/url>/gs)) {
    const images = [...entry[1].matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => match[1]);
    assert.equal(images.length, new Set(images).size, "Duplicate image within a page.");
  }
});

test("built deployment emits permanent redirects and an indexable self-canonical offer", {
  skip: !process.argv.includes("--built"),
}, () => {
  const outputDir = join(projectDir, ".vercel/output");
  const config = JSON.parse(readFileSync(join(outputDir, "config.json"), "utf8"));
  const filesystemIndex = config.routes.findIndex((entry: { handle?: string }) => entry.handle === "filesystem");
  assert.ok(filesystemIndex >= 0, "Missing deployment filesystem boundary.");
  for (const [alias, destination] of Object.entries(permanentRedirects)) {
    const routeIndex = config.routes.findIndex((entry: { src?: string; status?: number }) =>
      entry.src && new RegExp(entry.src).test(alias) && entry.status && entry.status >= 300 && entry.status < 400);
    assert.ok(routeIndex >= 0 && routeIndex < filesystemIndex, "Redirect must precede file serving: " + alias);
    const route = config.routes[routeIndex];
    assert.equal(route.status, 301, "Expected permanent 301: " + alias);
    assert.equal(route.headers?.Location ?? route.headers?.location, destination, "First matching redirect target: " + alias);
  }
  for (const destination of new Set(Object.values(permanentRedirects))) {
    const html = getBuiltPage(destination);
    assert.ok(html.includes('rel="canonical" href="' + origin + destination + '"'), "Redirect destination must self-canonicalize: " + destination);
    assert.doesNotMatch(html, /<meta[^>]+name="(?:robots|googlebot)"[^>]+content="[^"]*noindex/i);
  }
  const staticDir = join(outputDir, "static");
  const offerFiles = [
    join(staticDir, searchIntentPaths.laserOffer, "index.html"),
    join(staticDir, searchIntentPaths.laserOffer + ".html"),
  ];
  const offerFile = offerFiles.find(existsSync);
  assert.ok(offerFile, "Missing built offer HTML.");
  const html = readFileSync(offerFile, "utf8");
  assert.ok(html.includes('rel="canonical" href="' + origin + searchIntentPaths.laserOffer + '"'));
  assert.doesNotMatch(html, /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/);
  for (const name of ["sitemap.xml", "sitemap-images.xml", "sitemap-0.xml"]) {
    verifySitemap(readFileSync(join(staticDir, name), "utf8"));
  }
});

test("built service pages and commercial category hubs expose one indexable canonical, a unique title and one H1", {
  skip: !process.argv.includes("--built"),
}, () => {
  const titles = new Map<string, string>();
  const servicePaths = new Set([
    ...servicePages.map((service) => "/servizi/" + service.slug),
    ...Object.values(commercialCategoryPaths),
  ]);
  for (const path of servicePaths) {
    const html = getBuiltPage(path);
    const canonicals = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"[^>]*>/gi)];
    assert.equal(canonicals.length, 1, "Canonical count: " + path);
    assert.equal(canonicals[0][1], origin + path, "Canonical destination: " + path);
    assert.doesNotMatch(html, /<meta[^>]+name="(?:robots|googlebot)"[^>]+content="[^"]*noindex/i);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/gi)].length, 1, "H1 count: " + path);
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
    assert.ok(title, "Missing title: " + path);
    assert.equal(titles.has(title), false, "Service title repeated by " + titles.get(title) + " and " + path);
    titles.set(title, path);
    assert.match(html, /<meta[^>]+name="description"[^>]+content="[^"]+"/i);
  }
});

test("built sitemaps reference real HTML pages rather than removed or ungenerated routes", {
  skip: !process.argv.includes("--built"),
}, () => {
  const locations = new Set<string>();
  for (const name of ["sitemap.xml", "sitemap-images.xml", "sitemap-0.xml"]) {
    for (const url of verifySitemap(readFileSync(join(staticOutputDir, name), "utf8"))) {
      locations.add(url);
    }
  }
  for (const url of locations) getBuiltPage(new URL(url).pathname);
  for (const service of servicePages) {
    assert.ok(locations.has(origin + "/servizi/" + service.slug), "Published service missing from sitemaps: " + service.slug);
  }
  for (const path of Object.values(commercialCategoryPaths)) {
    assert.ok(locations.has(origin + path), "Commercial category hub missing from sitemaps: " + path);
  }
});
