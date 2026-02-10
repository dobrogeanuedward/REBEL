import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { localAreaPages } from "@/lib/local-pages";
import { buildBreadcrumbSchema, buildItemListSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Rebel per Carmagnola e Dintorni | Aree Servite",
  description:
    "Scopri le aree servite da Rebel: Carmagnola, Carignano, Racconigi, Sommariva del Bosco, Torino Sud e Alba.",
  path: "/localita",
  keywords: [
    "centro estetico Carmagnola e dintorni",
    "estetista vicino Carmagnola",
    "aree servite centro estetico Rebel",
  ],
});

export default function LocalitaHubPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Localita", path: "/localita" },
  ]);
  const localAreaListSchema = buildItemListSchema({
    name: "Aree servite Rebel",
    path: "/localita",
    items: localAreaPages.map((area) => ({
      name: area.city,
      path: `/localita/${area.slug}`,
    })),
  });

  return (
    <main className="page-shell page-localita">
      <JsonLd data={breadcrumb} />
      <JsonLd data={localAreaListSchema} />
      <PageHero
        eyebrow="Aree servite"
        title="Aree servite: Rebel per Carmagnola e comuni vicini."
        lead="Se arrivi da un comune vicino, qui trovi indicazioni dedicate e un modo rapido per capire come raggiungerci e da dove partire."
        badge="Clienti da Carmagnola e dintorni"
        tone="rose"
      />

      <section className="section">
        <div className="container grid grid-2">
          {localAreaPages.map((area) => (
            <Link key={area.slug} href={`/localita/${area.slug}`} className="card glow-card">
              <h2 style={{ marginTop: 0 }}>{area.city}</h2>
              <p className="lead" style={{ marginTop: 0 }}>
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

