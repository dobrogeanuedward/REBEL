import { brandSeoKeywords, localSeoKeywords, siteConfig } from "@/lib/site-config";
import { servicePages } from "@/lib/seo-content";

/* ==========================================================================
   SEO helpers — framework-agnostic. Returns plain objects that SeoHead.astro
   serialises into <title>/<meta>/<link>/<script type="application/ld+json">.
   ========================================================================== */

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  ogImage: string;
  ogAlt: string;
  ogType: "website" | "article";
  indexable: boolean;
};

type CreatePageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  indexable?: boolean;
  openGraphType?: "website" | "article";
  image?: string;
};

export function createPageMeta({
  title,
  description,
  path,
  keywords = [],
  indexable = true,
  openGraphType = "website",
  image,
}: CreatePageMetaInput): PageMeta {
  const canonical = new URL(path, siteConfig.siteUrl).toString();
  const merged = Array.from(
    new Set([...brandSeoKeywords, ...localSeoKeywords, ...keywords]),
  );
  const ogImage = new URL(image ?? siteConfig.assets.ogImage, siteConfig.siteUrl).toString();
  return {
    title,
    description,
    canonical,
    keywords: merged,
    ogImage,
    ogAlt: `${siteConfig.name} | ${siteConfig.shortName} Carmagnola`,
    ogType: openGraphType,
    indexable,
  };
}

const dayMap: Record<string, string> = {
  Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday",
  Fr: "Friday", Sa: "Saturday", Su: "Sunday",
};

const primaryActivityProfiles = [
  siteConfig.social.instagram,
  siteConfig.social.treatwell,
];

function toOpeningHoursSpecification() {
  return siteConfig.openingHours
    .map((entry) => {
      const [day, timeRange] = entry.split(" ");
      const [opens, closes] = timeRange.split("-");
      const dayOfWeek = dayMap[day];
      if (!dayOfWeek || !opens || !closes) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayOfWeek}`,
        opens, closes,
      };
    })
    .filter(Boolean);
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Rebel Carmagnola"],
    url: siteConfig.siteUrl,
    logo: siteConfig.assets.logoLight,
    image: siteConfig.assets.ogImage,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    sameAs: [
      ...primaryActivityProfiles,
      siteConfig.social.tiktok,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      areaServed: "IT",
      availableLanguage: [siteConfig.locale],
      url: siteConfig.social.whatsapp,
    }],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Rebel Carmagnola"],
    inLanguage: siteConfig.locale,
    sameAs: [
      ...primaryActivityProfiles,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
      siteConfig.social.tiktok,
    ],
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    potentialAction: {
      "@type": "ContactAction",
      target: [`${siteConfig.siteUrl}/contatti`, siteConfig.social.whatsapp],
      name: "Prenota consulenza estetica",
    },
  };
}

export function buildLocalBusinessSchema() {
  const esteticaServices = servicePages
    .filter((s) => s.category === "estetica-classica")
    .map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: new URL(`/servizi/${s.slug}`, siteConfig.siteUrl).toString(),
      },
    }));
  const laserServices = servicePages
    .filter((s) => s.category === "laser")
    .map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: new URL(`/servizi/${s.slug}`, siteConfig.siteUrl).toString(),
      },
    }));
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Rebel Carmagnola"],
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    image: siteConfig.assets.ogImage,
    logo: siteConfig.assets.logoLight,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    inLanguage: siteConfig.locale,
    hasMap: siteConfig.social.maps,
    priceRange: "$$",
    currenciesAccepted: "EUR",
    mainEntityOfPage: siteConfig.siteUrl,
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    brand: [
      { "@type": "Brand", name: siteConfig.shortName },
      ...siteConfig.brands.map((b) => ({
        "@type": "Brand",
        name: b.name,
        description: b.blurb,
        ...(b.url ? { url: b.url } : {}),
      })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.areasServed,
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: toOpeningHoursSpecification(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Rebel Carmagnola",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Estetica avanzata e benessere",
          itemListElement: esteticaServices,
        },
        {
          "@type": "OfferCatalog",
          name: "Epilazione laser",
          itemListElement: laserServices,
        },
      ],
    },
    sameAs: [
      ...primaryActivityProfiles,
      siteConfig.social.tiktok,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
    ],
  };
}

export function buildServiceSchema(serviceName: string, serviceDescription: string, path: string) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    areaServed: siteConfig.areasServed,
    provider: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
    url,
  };
}

export function buildArticleSchema({
  headline, description, path, keywords = [], section, image,
}: {
  headline: string;
  description: string;
  path: string;
  keywords?: string[];
  section?: string;
  image?: string;
}) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const imageUrl = new URL(image ?? siteConfig.assets.ogImage, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    url,
    articleSection: section,
    keywords: keywords.join(", "),
    datePublished: siteConfig.lastUpdated,
    dateModified: siteConfig.lastUpdated,
    image: [imageUrl],
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
    author: { "@id": `${siteConfig.siteUrl}/#organization` },
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
  };
}

export function buildItemListSchema({ name, path, items }: {
  name: string;
  path: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: new URL(path, siteConfig.siteUrl).toString(),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: new URL(item.path, siteConfig.siteUrl).toString(),
    })),
  };
}

export function buildWebPageSchema({ name, description, path }: {
  name: string; description: string; path: string;
}) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url, name, description,
    inLanguage: siteConfig.locale,
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.siteUrl).toString(),
    })),
  };
}
