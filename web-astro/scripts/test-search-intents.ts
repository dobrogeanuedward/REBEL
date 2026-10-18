import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  isIndexableSearchPage,
  permanentRedirects,
  searchIntentPaths,
} from "../src/lib/search-intents.ts";
import { GET as getSitemap } from "../src/pages/sitemap.xml.ts";
import { GET as getImageSitemap } from "../src/pages/sitemap-images.xml.ts";
import { competencePages, servicePages } from "../src/lib/seo-content-refined.ts";

const projectDir = fileURLToPath(new URL("../", import.meta.url));
const origin = "https://www.rebelepigenetica.it";
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
    "/", ...Object.values(searchIntentPaths), "/localita/carignano",
    "/localita/racconigi", "/epilazione-laser-alba",
    "/competenze/epilazione-laser-inguine-carmagnola",
  ]) {
    assert.equal(isIndexableSearchPage(path), true, path);
  }
});

test("approved offer aliases redirect directly to the indexable offer", () => {
  for (const alias of ["/laser-full-body-carmagnola", "/promo-laser-carmagnola-dintorni"]) {
    assert.equal(permanentRedirects[alias], searchIntentPaths.laserOffer);
    assert.equal(existsSync(join(projectDir, "src/pages", alias.slice(1) + ".astro")), false,
      "A physical page would override the configured redirect.");
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
  for (const [alias, destination] of Object.entries(permanentRedirects)) {
    const route = config.routes.find((entry: { src?: string; status?: number; headers?: Record<string, string> }) =>
      entry.src && new RegExp(entry.src).test(alias) && entry.status === 301 &&
      (entry.headers?.Location ?? entry.headers?.location) === destination);
    assert.ok(route, "Missing deployment 301 for " + alias);
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
