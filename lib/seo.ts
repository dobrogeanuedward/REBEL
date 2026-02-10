import type { Metadata } from "next";
import { brandSeoKeywords, localSeoKeywords, siteConfig } from "@/lib/site-config";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: CreatePageMetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.siteUrl).toString();
  const mergedKeywords = Array.from(
    new Set([...brandSeoKeywords, ...localSeoKeywords, ...keywords]),
  );
  const ogImage = siteConfig.assets.ogImage;
  const ogAlt = `${siteConfig.name} | ${siteConfig.shortName} Carmagnola`;

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website",
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

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.siteUrl}/#beauty-salon`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Rebel Carmagnola"],
    slogan: siteConfig.tagline,
    image: siteConfig.assets.ogImage,
    logo: siteConfig.assets.logoLight,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    hasMap: siteConfig.social.maps,
    priceRange: "$$",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: "IT",
        availableLanguage: ["it-IT"],
        url: siteConfig.social.whatsapp,
      },
    ],
    knowsAbout: [
      "estetica epigenetica",
      "epilazione laser Thory",
      "trattamenti viso",
      "trattamenti corpo",
      "centro estetico Carmagnola",
      "Rebel Carmagnola",
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.maps,
      siteConfig.social.googleCard,
      siteConfig.social.treatwell,
    ],
  };
}

export function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: serviceDescription,
    areaServed: siteConfig.areasServed,
    provider: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    url: new URL(path, siteConfig.siteUrl).toString(),
  };
}

type BuildArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  keywords?: string[];
  section?: string;
};

export function buildArticleSchema({
  headline,
  description,
  path,
  keywords = [],
  section,
}: BuildArticleSchemaInput) {
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "it-IT",
    mainEntityOfPage: url,
    url,
    articleSection: section,
    keywords: keywords.join(", "),
    datePublished: siteConfig.lastUpdated,
    dateModified: siteConfig.lastUpdated,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
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

