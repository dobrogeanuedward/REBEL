# Rebel · web-astro (parallel build)

Migrazione safe-by-default da **Next.js 15 → Astro 5**, costruita in parallelo
al sito Next.js esistente. Nessun file del progetto Next viene toccato finché
non si decide il cutover.

> Stato: **scaffold + design system + 3 pagine pilota** funzionanti.
> Le 15 pagine restanti restano sul vecchio sito Next; vanno portate una per
> una seguendo le convenzioni qui sotto.

---

## Quickstart

```bash
cd web-astro
npm install
npm run dev          # http://localhost:4321
npm run build        # genera dist/ (statico) + endpoints SSR per Vercel
npm run preview      # preview locale del build
```

Il deploy su Vercel funziona out-of-the-box grazie a `@astrojs/vercel`. Per
il dominio reale, durante la fase preview consiglio:

- branch `astro-rebuild`
- preview su `astro.rebelepigenetica.it` o `preview.rebelepigenetica.it`
- cutover via DNS solo dopo QA (vedi sotto).

---

## Struttura

```
web-astro/
├── astro.config.mjs       ← static + Vercel adapter + sitemap
├── tsconfig.json          ← strict + alias @/* → src/*
├── public/
│   ├── robots.txt
│   └── manifest.webmanifest
└── src/
    ├── styles/
    │   ├── tokens.css           ← palette / type / motion / shadows
    │   ├── reset.css
    │   ├── base.css
    │   ├── utilities.css
    │   ├── motion.css
    │   ├── components/
    │   │   ├── button.css
    │   │   ├── card.css
    │   │   ├── hero.css
    │   │   ├── nav.css
    │   │   ├── cta.css
    │   │   ├── form.css
    │   │   ├── footer.css
    │   │   └── sections.css
    │   └── global.css           ← entry: imports everything once
    │
    ├── lib/
    │   ├── site-config.ts       ← 1:1 dal vecchio sito
    │   ├── navigation.ts        ← + index per drawer
    │   ├── seo.ts               ← framework-agnostic
    │   ├── content.ts           ← step + immagini hero/galleria
    │   └── instagram-config.ts
    │
    ├── content/
    │   └── config.ts            ← collezioni: protocols/services/competenze/locali
    │
    ├── components/
    │   ├── SeoHead.astro
    │   ├── JsonLd.astro
    │   ├── AmbientLayer.astro
    │   ├── ScrollProgress.astro ← vanilla TS, no React
    │   ├── SmoothScroll.astro   ← Lenis, vanilla TS
    │   ├── Reveal.astro         ← IntersectionObserver
    │   ├── WhatsappLive.astro
    │   ├── SiteHeader.tsx       ← React island (client:load)
    │   ├── SiteFooter.astro
    │   ├── PageHero.astro
    │   ├── SectionHead.astro
    │   ├── FeatureCard.astro
    │   ├── StepStrip.astro
    │   ├── InlineCta.astro
    │   └── ContactForm.tsx      ← React island (client:load)
    │
    ├── layouts/
    │   └── BaseLayout.astro     ← head + ClientRouter + shell
    │
    └── pages/
        ├── index.astro          ← homepage
        ├── chi-siamo.astro
        ├── metodo-rebel.astro
        ├── contatti.astro
        └── api/
            └── contact.ts       ← endpoint SSR (prerender:false)
```

---

## Filosofia di design

Il design system **non è una traduzione** del vecchio CSS. È una nuova
gerarchia visiva che corregge i tre difetti diagnosticati:

1. **Logo nero su scena buia** → ora c'è `filter: invert(1)` controllato e
   un futuro slot `--logo-on-dark` per quando esisterà un mark ivory vero.
2. **Glassmorphism ovunque, viola assente** → glass eliminato; il viola
   diventa il **materiale**, non un highlight. `--wash-violet` (radial),
   `--type-accent` (gradient testo), `--halo-violet` (conico, solo CTA).
3. **Tutto allo stesso peso** → quattro livelli di tipografia, tre soli
   archetipi di card, una sola grid 01/02/03 ammessa per pagina.

### Regole rigide

- **Type accent (`<em>` con gradient)**: una sola occorrenza per H1 +
  massimo una per sezione. Non spammare.
- **`btn--halo`**: una sola CTA per pagina con halo conico.
- **Card**: solo `card`, `card--feature`, `card--quiet`. Mai mischiare
  border-radius custom.
- **Scene-ivory**: per sezioni light, applica `class="scene-ivory"` sulla
  `<section>`. I componenti si adattano (testo, bordi, ombre).

---

## Roadmap di porting (pagine residue)

Ordine consigliato — dal più isolato al più connesso.

| # | Slug                                  | Note                                                                |
|---|---------------------------------------|---------------------------------------------------------------------|
| 1 | `/centro-estetico-carmagnola`         | Landing locale, statica. Solo PageHero + sezioni editoriali.        |
| 2 | `/epilazione-laser-carmagnola`        | Landing prodotto, FAQ, schema Service. Crea `FaqAccordion.astro`.   |
| 3 | `/listino-estetica-laser`             | Tabelle prezzi: porta `classicaListino` + `laserListino` in lib.    |
| 4 | `/protocolli-epigenetici/[slug]`      | Dynamic route. Migra `protocol-pages.ts` → `src/content/protocols`. |
| 5 | `/servizi/[slug]`                     | Idem per services.                                                  |
| 6 | `/competenze/[slug]`                  | Idem per competenze (articoli editoriali).                          |
| 7 | `/{locality}` landing locali          | Idem per locali.                                                    |
| 8 | Rebuild homepage con HeroPhotoSlider, InstagramFeed, StoreGallery (islands React, `client:visible`). |

### Come portare una pagina (cheat sheet)

1. Apri il file Next: `app/<slug>/page.tsx`.
2. Crea `web-astro/src/pages/<slug>.astro` con questo skeleton:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import PageHero from "@/components/PageHero.astro";
import SectionHead from "@/components/SectionHead.astro";
import JsonLd from "@/components/JsonLd.astro";
import { buildBreadcrumbSchema, buildWebPageSchema, createPageMeta } from "@/lib/seo";

const meta = createPageMeta({ title: "...", description: "...", path: "/..." });
const breadcrumb = buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "...", path: "/..." }]);
const webPage = buildWebPageSchema({ name: "...", description: "...", path: "/..." });
---
<BaseLayout meta={meta}>
  <JsonLd data={breadcrumb} />
  <JsonLd data={webPage} />
  <PageHero kicker="..." title="Titolo con _accento_." lead="..." />
  <!-- sezioni editoriali -->
</BaseLayout>
```

3. Trasforma le `<section className="section">` Next in `<section class="section">`.
4. Mappa le card vecchie sui tre archetipi nuovi (`card`, `card--feature`,
   `card--quiet`).
5. Eventuali grid 01/02/03 → usa `<StepStrip />` *una sola volta*.

### Componenti ancora da creare (quando servono)

- `FaqAccordion.astro` — usa `<details>` nativo + CSS, niente JS.
- `TableOfContents.astro` — scrape h2/h3 in `Astro.locals` o via Vue/React island.
- `EditorialBody.astro` — typography overrides per long-form (lead, pull
  quote, divider).
- `HeroPhotoSlider.tsx` — react island con `client:visible`, dati da `lib/content`.
- `InstagramFeed.tsx` — react island, embed ufficiale.
- `StoreGallery.tsx` — Astro pure se la galleria è statica; React solo se
  vogliamo lightbox.

---

## SEO parity (golden list)

Prima del cutover, fai diff su:

```
title, description, canonical, robots,
og:title, og:description, og:image, og:url,
twitter:card, twitter:image,
JSON-LD: Organization, WebSite, BeautySalon, WebPage, Article, BreadcrumbList,
sitemap: identico set di URL,
robots.txt: stesso behavior,
Core Web Vitals: LCP, CLS, INP — Lighthouse mobile ≥ vecchio.
```

Suggerito: piccolo script Node in `scripts/seo-diff.mjs` che scarica le
pagine da `https://www.rebelepigenetica.it/<slug>` e da
`https://astro.rebelepigenetica.it/<slug>` e produce CSV.

---

## Cutover plan

1. **Preview**: deploy su `astro.rebelepigenetica.it` per 2-3 giorni.
2. **QA**: golden list + Lighthouse + crawler.
3. **Backup**: snapshot Vercel del Next attuale (rollback in <60s).
4. **Cutover (notte)**: switch dominio principale al progetto Astro.
5. **Watch**: 7 giorni Search Console + analytics + 5xx logs.

In caso di emergenza: rollback = repointing dominio sul progetto Next.
Tempo previsto: 1-2 minuti.

---

## Scripting con tre rotte interne

- **dev** → `npm run dev` (HMR, Lenis attivo, view transitions live).
- **build** → `astro check` (typecheck) + `astro build` (statico + bundle SSR).
- **preview** → `astro preview` per simulare la build su localhost.

---

## Cosa NON è ancora qui

- Pagine `/protocolli-epigenetici`, `/servizi`, `/competenze`, `/listino-estetica-laser`,
  `/centro-estetico-carmagnola`, `/epilazione-laser-carmagnola`, e tutte le landing locali.
- Sitemap dinamica per le collection (richiede di portare prima il contenuto).
- `feed.xml` / `feed.json` (richiede `lib/seo-content.ts` e `protocol-pages.ts`).
- Hero slider / Instagram feed / Store gallery (componenti React island da
  porting 1:1 quando si migra l'index reale).

Tutto il resto è pronto per accogliere la migrazione, una pagina alla volta.
