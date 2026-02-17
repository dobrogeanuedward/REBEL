import type { Metadata } from "next";
import { brandSeoKeywords, localSeoKeywords, siteConfig } from "@/lib/site-config";
import { servicePages } from "@/lib/seo-content";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  indexable?: boolean;
  openGraphType?: "website" | "article";
  image?: string;
};

const dayMap: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

const primaryActivityProfiles = [siteConfig.social.instagram, siteConfig.social.treatwell];

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
        opens,
        closes,
      };
    })
    .filter(Boolean);
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  indexable = true,
  openGraphType = "website",
  image,
}: CreatePageMetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.siteUrl).toString();
  const mergedKeywords = Array.from(
    new Set([...brandSeoKeywords, ...localSeoKeywords, ...keywords]),
  );
  const ogImage = new URL(image ?? siteConfig.assets.ogImage, siteConfig.siteUrl).toString();
  const ogAlt = `${siteConfig.name} | ${siteConfig.shortName} Carmagnola`;

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
      languages: {
        [siteConfig.locale]: canonical,
      },
    },
    category: "Beauty & Wellness",
    publisher: siteConfig.name,
    creator: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    robots: {
      index: indexable,
      follow: indexable,
      nocache: !indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        noimageindex: !indexable,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: openGraphType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: "IT",
        availableLanguage: [siteConfig.locale],
        url: siteConfig.social.whatsapp,
      },
    ],
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
    publisher: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "ContactAction",
      target: [`${siteConfig.siteUrl}/contatti`, siteConfig.social.whatsapp],
      name: "Prenota consulenza estetica",
    },
  };
}

export function buildLocalBusinessSchema() {
  const esteticaServices = servicePages
    .filter((service) => service.category === "estetica-classica")
    .map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: new URL(`/servizi/${service.slug}`, siteConfig.siteUrl).toString(),
      },
    }));

  const laserServices = servicePages
    .filter((service) => service.category === "laser")
    .map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: new URL(`/servizi/${service.slug}`, siteConfig.siteUrl).toString(),
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
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: "IT",
        availableLanguage: [siteConfig.locale],
        url: siteConfig.social.whatsapp,
      },
    ],
    knowsAbout: [
      "estetica epigenetica",
      "epilazione laser",
      "epilazione laser Carmagnola",
      "epilazione laser Rebel",
      "laser Carmagnola",
      "trattamenti viso",
      "trattamenti corpo",
      "centro estetico Carmagnola",
      "Rebel Carmagnola",
    ],
    sameAs: [
      ...primaryActivityProfiles,
      siteConfig.social.tiktok,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
    ],
  };
}

export function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  path: string,
) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    areaServed: siteConfig.areasServed,
    provider: {
      "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    },
    url,
  };
}

type BuildArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  keywords?: string[];
  section?: string;
  image?: string;
};

export function buildArticleSchema({
  headline,
  description,
  path,
  keywords = [],
  section,
  image,
}: BuildArticleSchemaInput) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const imageUrl = new URL(image ?? siteConfig.assets.ogImage, siteConfig.siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    inLanguage: "it-IT",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    url,
    articleSection: section,
    keywords: keywords.join(", "),
    datePublished: siteConfig.lastUpdated,
    dateModified: siteConfig.lastUpdated,
    image: [imageUrl],
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    about: {
      "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    },
    author: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
  };
}

type BuildItemListSchemaInput = {
  name: string;
  path: string;
  items: Array<{ name: string; path: string }>;
};

export function buildItemListSchema({ name, path, items }: BuildItemListSchemaInput) {
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

export function buildWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    about: {
      "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    },
    publisher: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
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

