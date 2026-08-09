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
  // `knowsAbout` lists every concrete service we deliver. Google uses this
  // as a strong topical signal for "near me" / service-specific queries.
  const knowsAbout = [
    "Centro estetico",
    "Estetica epigenetica",
    "Epilazione laser diodo",
    "Epilazione laser Ice Polar",
    "Pulizia viso",
    "Trattamenti viso epigenetici",
    "Massaggio rilassante",
    "Massaggio linfodrenante",
    "Manicure semipermanente",
    "Pedicure estetico",
    "Laminazione ciglia",
    "Laminazione sopracciglia",
    "Ceretta",
    "Scrub corpo",
    "THORY Lumina X1 Pro",
    "Sistema ICE Polar",
    "LPG",
    "Linea cosmetica Marbellas",
    "Linea biocosmetica Eberlin",
    "Smalti RBL Nails",
    "Tecnologia laser Thory",
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    name: siteConfig.name,
    alternateName: [
      siteConfig.shortName,
      "Rebel Carmagnola",
      "Centro Estetico Rebel Carmagnola",
      "Rebel Estetica Carmagnola",
    ],
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    image: siteConfig.assets.ogImage,
    logo: siteConfig.assets.logoLight,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    inLanguage: siteConfig.locale,
    hasMap: siteConfig.social.maps,
    priceRange: "EUR",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bancomat"],
    keywords: [
      "centro estetico Carmagnola",
      "estetista Carmagnola",
      "centro estetico vicino a me",
      "epilazione laser Carmagnola",
      "epilazione laser vicino a me",
      "manicure semipermanente Carmagnola",
      "laminazione ciglia Carmagnola",
      "laminazione sopracciglia Carmagnola",
      "THORY Lumina X1 Pro Carmagnola",
      "LPG Carmagnola",
      "Ice Polar Carmagnola",
      "Marbellas Carmagnola",
      "Eberlin Carmagnola",
    ].join(", "),
    knowsAbout,
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
    // Two complementary signals:
    // 1. `areaServed` lists named cities/areas (Carmagnola, Carignano, …)
    // 2. `serviceArea` GeoCircle gives Google a hard "we work within ~30 km
    //    of these coordinates" — the strongest signal for "near me" queries.
    areaServed: [
      ...siteConfig.areasServed.map((city) => ({ "@type": "City", name: city })),
      {
        "@type": "AdministrativeArea",
        name: "Provincia di Torino",
      },
      {
        "@type": "AdministrativeArea",
        name: "Provincia di Cuneo",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: 30000,
    },
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
    makesOffer: [
      {
        "@type": "Offer",
        name: "Prima visita gratuita + regalo",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.siteUrl}/prima-visita-gratuita`,
      },
    ],
    sameAs: [
      ...primaryActivityProfiles,
      siteConfig.social.tiktok,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
    ],
  };
}

/**
 * Service schema with strong local signals.
 *
 * Optional `priceFrom` lets the page inject a numeric "from" price (parsed
 * from `priceHint` like "da EUR 26") so Google can show the offer in
 * service-specific SERPs. Optional `keywords` adds intent-rich variants.
 */
export function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  path: string,
  options?: {
    priceFrom?: number;
    keywords?: string[];
  },
) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    // Two complementary signals (named cities + GeoCircle radius) — same
    // pattern as LocalBusiness, repeated per-service so each /servizi/* URL
    // can rank for "<service> vicino a me" queries.
    areaServed: [
      ...siteConfig.areasServed.map((city) => ({ "@type": "City", name: city })),
      { "@type": "AdministrativeArea", name: "Provincia di Torino" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: 30000,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
      servicePhone: siteConfig.phoneDisplay,
      serviceUrl: `${siteConfig.siteUrl}/contatti`,
    },
    provider: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
    url,
    ...(options?.keywords?.length
      ? { keywords: options.keywords.join(", ") }
      : {}),
    ...(typeof options?.priceFrom === "number"
      ? {
          offers: {
            "@type": "Offer",
            price: options.priceFrom.toString(),
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: options.priceFrom,
              priceCurrency: "EUR",
              minPrice: options.priceFrom,
              valueAddedTaxIncluded: true,
            },
            availability: "https://schema.org/InStock",
            url,
            availableAtOrFrom: { "@id": `${siteConfig.siteUrl}/#beauty-salon` },
          },
        }
      : {}),
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
