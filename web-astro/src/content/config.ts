import { defineCollection, z } from "astro:content";

/**
 * Content Collections — these schemas validate every protocol, service,
 * competenza and local landing page at build time. Body is markdown-based;
 * structured fields cover SEO, hero, FAQ blocks etc.
 */

const sharedSeo = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().url().optional(),
  indexable: z.boolean().default(true),
});

const heroBlock = z.object({
  kicker: z.string(),
  title: z.string(),                 // accept simple inline `_em_` markers
  lead: z.string(),
  badge: z.string().optional(),
  ctaPrimary: z.object({ label: z.string(), href: z.string() }).optional(),
  ctaSecondary: z.object({ label: z.string(), href: z.string() }).optional(),
});

const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

const protocols = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    shortDescription: z.string(),
    price: z.string().optional(),
    duration: z.string().optional(),
    bookingUrl: z.string().url().optional(),
    seo: sharedSeo,
    hero: heroBlock,
    keyPoints: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).default([]),
    faq: z.array(faqItem).default([]),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    category: z.enum(["estetica-classica", "laser", "epigenetico"]),
    shortDescription: z.string(),
    seo: sharedSeo,
    hero: heroBlock,
    price: z.string().optional(),
    duration: z.string().optional(),
    faq: z.array(faqItem).default([]),
    order: z.number().default(0),
  }),
});

const competenze = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    seo: sharedSeo,
    hero: heroBlock,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const locali = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    locality: z.string(),
    seo: sharedSeo,
    hero: heroBlock,
    nearby: z.array(z.string()).default([]),
  }),
});

export const collections = { protocols, services, competenze, locali };
