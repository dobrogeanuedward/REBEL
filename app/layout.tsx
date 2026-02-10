import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappLiveButton } from "@/components/whatsapp-live-button";
import { buildLocalBusinessSchema } from "@/lib/seo";
import { brandSeoKeywords, localSeoKeywords, siteConfig } from "@/lib/site-config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  applicationName: siteConfig.shortName,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Rebel Carmagnola"],
    url: siteConfig.siteUrl,
    inLanguage: "it-IT",
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.googleCard,
      siteConfig.social.treatwell,
    ],
  };

  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <ScrollProgressBar />
        <div className="ambient-layer" aria-hidden="true">
          <span className="orb orb-violet" />
          <span className="orb orb-pink" />
          <span className="orb orb-blue" />
        </div>
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappLiveButton />
      </body>
    </html>
  );
}



