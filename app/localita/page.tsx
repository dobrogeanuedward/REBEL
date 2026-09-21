import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { localAreaPages } from "@/lib/local-pages";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

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
      lead: "I comuni più vicini allo studio (e quelli da cui arrivano più spesso).",
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
  const webPageSchema = buildWebPageSchema({
    name: "Località servite da Rebel",
    description:
      "Pagine dedicate alle località da cui ci raggiungono: focus e link utili per iniziare (laser, protocolli, servizi).",
    path: "/localita",
  });
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
      <JsonLd data={webPageSchema} />
      <PageHero
        eyebrow="Aree servite"
        title="Aree servite: Carmagnola, Torino Sud e provincia di Cuneo."
        lead="Qui trovi una pagina per ogni località da cui ci raggiungono. Ogni pagina ha un taglio diverso: laser, viso/corpo, protocolli e servizi classici utili per completare il percorso."
        badge={`${localAreaPages.length} località coperte`}
        tone="rose"
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card glow-card">
            <h2 style={{ marginTop: 0 }}>Se sei di fretta: da dove partire in 30 secondi</h2>
            <p className="lead" style={{ marginTop: "0.45rem", maxWidth: "72ch" }}>
              Se l&apos;obiettivo è chiaro (laser, viso o corpo), parti da una pagina &quot;pilastro&quot; e poi scendi nel dettaglio.
              Se invece sei indecisa, scrivici: ti aiutiamo a scegliere il primo passo, senza incasinarti.
            </p>
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/contatti">
                Contatti e mappa
              </Link>
              <a className="button button-secondary" href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </article>
          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Percorsi principali</h2>
            <p className="lead" style={{ marginTop: "0.35rem", color: "rgba(39,31,56,0.78)" }}>
              Tre pagine utili per orientarti subito (poi puoi tornare qui e scegliere la tua località).
            </p>
            <div style={{ marginTop: "0.85rem", display: "grid", gap: "0.55rem" }}>
              <Link className="link-card" href="/epilazione-laser-carmagnola">
                <span className="link-card-content">
                  <span className="link-card-title">Epilazione laser a Carmagnola</span>
                  <small className="link-card-desc">Sedute, calendario e cosa aspettarti senza promesse strane.</small>
                </span>
              </Link>
              <Link className="link-card" href="/protocolli-epigenetici">
                <span className="link-card-content">
                  <span className="link-card-title">Protocolli epigenetici</span>
                  <small className="link-card-desc">
                    Percorsi viso/corpo quando vuoi una progressione (non una singola seduta).
                  </small>
                </span>
              </Link>
              <Link className="link-card" href="/listino-estetica-laser">
                <span className="link-card-content">
                  <span className="link-card-title">Listino Estetica + Laser</span>
                  <small className="link-card-desc">Prezzi chiari, categorie e link alle pagine dedicate.</small>
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <p className="eyebrow">Se vuoi iniziare subito</p>
          <h2 className="page-title" style={{ marginTop: "0.55rem" }}>
            Percorsi e servizi più richiesti (Carmagnola e dintorni)
          </h2>
          <p className="lead" style={{ marginTop: "0.6rem", color: "rgba(39,31,56,0.78)", maxWidth: "78ch" }}>
            Se arrivi da fuori, spesso serve una direzione semplice: una priorità e un primo passo ordinato. Qui trovi
            i percorsi pilastro e alcuni servizi base molto richiesti, utili anche come &quot;ganci&quot; pratici prima
            di impostare un percorso più lungo.
          </p>
          <div className="grid grid-3" style={{ marginTop: "1rem" }}>
            <Link className="card-light" href="/localita/carmagnola">
              <h3 style={{ marginTop: 0 }}>Carmagnola: pagina locale</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Mappa, consigli e link utili per partire senza confusione.
              </p>
            </Link>
            <Link className="card-light" href="/epilazione-laser-carmagnola">
              <h3 style={{ marginTop: 0 }}>Epilazione laser</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Metodo, calendario e aspettative sane (senza promesse strane).
              </p>
            </Link>
            <Link className="card-light" href="/protocolli-epigenetici">
              <h3 style={{ marginTop: 0 }}>Protocolli epigenetici</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Percorsi viso/corpo quando vuoi progressione e controllo.
              </p>
            </Link>
            <Link className="card-light" href="/servizi/pulizia-viso-carmagnola">
              <h3 style={{ marginTop: 0 }}>Pulizia viso</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Un primo step semplice per rimettere comfort e luminosità.
              </p>
            </Link>
            <Link className="card-light" href="/servizi/manicure-semipermanente-carmagnola">
              <h3 style={{ marginTop: 0 }}>Semipermanente</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Mani ordinate e look curato: pratico, immediato, pulito.
              </p>
            </Link>
            <Link className="card-light" href="/competenze/pressomassaggio-carmagnola-guida-pratica">
              <h3 style={{ marginTop: 0 }}>Pressomassaggio (guida)</h3>
              <p className="lead" style={{ marginTop: "0.35rem", marginBottom: 0, color: "rgba(39,31,56,0.78)" }}>
                Quando ha senso e come inserirla bene in un percorso drenante.
              </p>
            </Link>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <Link className="button button-primary" href="/contatti">
              Contatti e mappa
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Tutti i servizi
            </Link>
            <Link className="button button-secondary" href="/competenze">
              Tutte le guide
            </Link>
          </div>
        </div>
      </section>

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

