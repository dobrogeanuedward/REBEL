import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappLiveButton } from "@/components/whatsapp-live-button";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import { brandSeoKeywords, localSeoKeywords, siteConfig } from "@/lib/site-config";
import "./globals.css";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default:
      "Rebel | Centro Estetico Epigenetico a Carmagnola e Epilazione Laser Thory",
    template: "%s | Rebel Carmagnola",
  },
  description: siteConfig.description,
  keywords: Array.from(new Set([...brandSeoKeywords, ...localSeoKeywords])),
  category: "Beauty & Wellness",
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      [siteConfig.locale]: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.siteUrl,
    title: "Rebel Estetica Epigenetica",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | Carmagnola`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebel Estetica Epigenetica",
    description: siteConfig.description,
    images: [siteConfig.assets.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": siteConfig.regionCode,
    "geo.placename": siteConfig.address.locality,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();
  const identityGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, localBusinessSchema],
  };

  return (
    <html lang="it" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://imagedelivery.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://epikey.rebelepigenetica.it" crossOrigin="" />
        <link rel="dns-prefetch" href="https://epikey.rebelepigenetica.it" />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.treatwell.it" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.treatwell.it" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Rebel Carmagnola - Guide e protocolli"
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title="Rebel Carmagnola - Feed JSON"
          href="/feed.json"
        />
        <link rel="me" href={siteConfig.social.instagram} />
        <link rel="me" href={siteConfig.social.treatwell} />
      </head>
      <body>
        <ScrollProgressBar />
        <div className="ambient-layer" aria-hidden="true">
          <span className="orb orb-violet" />
          <span className="orb orb-pink" />
          <span className="orb orb-blue" />
        </div>
        <JsonLd data={identityGraphSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappLiveButton />
      </body>
    </html>
  );
}



