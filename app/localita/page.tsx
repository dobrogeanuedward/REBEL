import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { localAreaPages } from "@/lib/local-pages";
import { buildBreadcrumbSchema, buildItemListSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Località servite da Rebel | Carmagnola, Torino Sud e Cuneo",
  description:
    "Pagine dedicate alle località da cui ci raggiungono: percorsi laser, estetica avanzata e servizi classici, con link utili per orientarti e prenotare.",
  path: "/localita",
  keywords: [
    "centro estetico Carmagnola e dintorni",
    "estetista vicino Carmagnola",
    "aree servite centro estetico Rebel",
  ],
});

export default function LocalitaHubPage() {
  const areaGroups = [
    {
      key: "asse-carmagnola" as const,
      title: "Asse Carmagnola",
      lead: "Comuni dell'area più vicina allo studio.",
    },
    {
      key: "torino-sud" as const,
      title: "Torino Sud",
      lead: "Zone servite nell'area sud della cintura torinese.",
    },
    {
      key: "cuneo" as const,
      title: "Provincia di Cuneo",
      lead: "Comuni da cui ci raggiungono spesso per percorsi completi.",
    },
  ];

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Località", path: "/localita" },
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
        title="Aree servite: Rebel per Carmagnola, Torino Sud e provincia di Cuneo."
        lead="Qui trovi una pagina per ogni località da cui ci raggiungono: in ciascuna trovi un focus diverso (laser, viso/corpo, protocolli) e una selezione di servizi classici da abbinare quando serve."
        badge={`${localAreaPages.length} località coperte`}
        tone="rose"
      />

      <section className="section">
        <div className="container">
          {areaGroups.map((group) => {
            const groupAreas = localAreaPages.filter((area) => area.cluster === group.key);
            if (groupAreas.length === 0) return null;

            return (
              <div key={group.key} style={{ marginTop: "1rem" }}>
                <p className="eyebrow">{group.title}</p>
                <p className="lead" style={{ marginTop: "0.42rem", maxWidth: "72ch" }}>
                  {group.lead}
                </p>
                <div className="grid grid-2" style={{ marginTop: "0.72rem" }}>
                  {groupAreas.map((area) => (
                    <Link key={area.slug} href={`/localita/${area.slug}`} className="card glow-card">
                      <h2 style={{ marginTop: 0 }}>{area.city}</h2>
                      <p className="lead" style={{ marginTop: 0 }}>
                        {area.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

