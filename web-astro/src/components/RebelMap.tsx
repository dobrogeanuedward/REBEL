import { useMemo, useState } from "react";
import { rebelJourneys, type RebelJourney } from "@/lib/rebel-journeys";
import { getJourneyVisual } from "@/lib/journey-visuals";
import "@/styles/rebel-map-live.css";

type JourneyFilter = "all" | RebelJourney["area"];

const filters: Array<{ id: JourneyFilter; label: string }> = [
  { id: "all", label: "Tutti" },
  { id: "Viso", label: "Viso" },
  { id: "Corpo", label: "Corpo" },
  { id: "Epilazione", label: "Laser" },
];

const journeyName = (journey: RebelJourney) =>
  journey.slug === "white" ? "Uniformare" : journey.name;

const journeySignature = (journey: RebelJourney) =>
  journey.slug === "white" ? "White" : journey.priority;

const startingPrice = (journey: RebelJourney) =>
  journey.price.replace(/^da\s+/i, "");

const siteAsset = (slot: string) =>
  `/api/site-asset?slot=${encodeURIComponent(slot)}`;

export default function RebelMap() {
  const [filter, setFilter] = useState<JourneyFilter>("all");

  const visibleJourneys = useMemo(
    () => filter === "all" ? rebelJourneys : rebelJourneys.filter((journey) => journey.area === filter),
    [filter],
  );

  return (
    <section className="rb-map" aria-labelledby="rb-map-title">
      <noscript>
        <style>{`.rb-map__filters{display:none!important}.rb-map__journey[hidden]{display:block!important}`}</style>
      </noscript>

      <header className="rb-map__intro">
        <div className="rb-map__edition" aria-label="Nove percorsi per viso, corpo e laser">
          <strong>09</strong>
          <span>percorsi<br />viso · corpo · laser</span>
        </div>
        <div>
          <p className="rebel-kicker">Mappa REBEL · scegli il percorso</p>
          <h3 id="rb-map-title"><span>Scegli ciò che vuoi migliorare.</span><em>Scopri da dove iniziare.</em></h3>
          <p>Filtra i percorsi per viso, corpo o laser. Apri una scheda per vedere il prezzo di partenza, gli ingredienti e le tecnologie previsti per quel percorso.</p>
        </div>
      </header>

      <div className="rb-map__toolbar">
        <div className="rb-map__filters" role="group" aria-label="Filtra i percorsi per area">
          {filters.map((item) => {
            const count = item.id === "all"
              ? rebelJourneys.length
              : rebelJourneys.filter((journey) => journey.area === item.id).length;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                <span>{item.label}</span><small>{String(count).padStart(2, "0")}</small>
              </button>
            );
          })}
        </div>
        <p aria-live="polite">{visibleJourneys.length} {visibleJourneys.length === 1 ? "percorso" : "percorsi"}</p>
      </div>

      <div className="rb-map__journeys">
        {rebelJourneys.map((journey) => {
          const isVisible = filter === "all" || journey.area === filter;
          const displayName = journeyName(journey);
          const visual = getJourneyVisual(journey.slug);
          return (
            <details
              key={journey.slug}
              className="rb-map__journey"
              data-world={journey.world}
              hidden={!isVisible}
            >
              <summary>
                <span className="rb-map__journey-media" aria-hidden="true">
                  <img
                    src={siteAsset(visual.momentSlot)}
                    alt=""
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="rb-map__number">{journey.number}</span>
                <span className="rb-map__identity">
                  <small>{journey.area} · {journeySignature(journey)}</small>
                  <strong>{displayName}</strong>
                </span>
                <span className="rb-map__price">
                  <small>{journey.slug === "liberta" ? "Listino ordinario da" : "A partire da"}</small>
                  <strong>{startingPrice(journey)}</strong>
                </span>
                <span className="rb-map__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M5 9.5 12 16l7-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>

              <div className="rb-map__panel">
                <div className="rb-map__description">
                  <p>{journey.summary}</p>
                  <dl>
                    <div><dt>Quando valutarlo</dt><dd>{journey.recognize}</dd></div>
                    <div><dt>Durata indicativa</dt><dd>{journey.duration}</dd></div>
                  </dl>
                </div>

                <div className="rb-map__ingredients">
                  <figure className="rb-map__ingredients-visual">
                    <img
                      src={visual.botanicalSrc}
                      alt={visual.botanicalAlt}
                      width="1000"
                      height="1000"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="rb-map__ingredient-lists">
                    <section className="rb-map__ingredient-group">
                      <h4>Attivi e complessi cosmetici</h4>
                      <ul>{journey.actives.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.role}</span></li>)}</ul>
                    </section>
                    <section className="rb-map__ingredient-group">
                      <h4>Estratti vegetali e altri ingredienti</h4>
                      <ul>{journey.botanicals.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.role}</span></li>)}</ul>
                    </section>
                  </div>
                </div>

                <div className="rb-map__technology">
                  {journey.technologies.length > 0 ? (
                    <section>
                      <h4>{journey.slug === "liberta" ? "Tecnologia del percorso" : "Tecnologie che possiamo valutare"}</h4>
                      <ul>{journey.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                    </section>
                  ) : (
                    <section>
                      <h4>Come scegliamo il trattamento</h4>
                      <p>{journey.technologyNote}</p>
                    </section>
                  )}
                </div>

                <footer className="rb-map__actions">
                  <a className="btn btn--primary" href={`/percorsi/${journey.slug}`}>Scopri {displayName}</a>
                  <a className="rb-map__text-link" href={`/contatti?source=mappa-rebel&percorso=${encodeURIComponent(journey.slug)}`}>Chiedi una valutazione <span>→</span></a>
                </footer>
              </div>
            </details>
          );
        })}
      </div>

      <footer className="rb-map__closing">
        <p><strong>Non sai quale percorso scegliere?</strong> Ti aiutiamo durante la valutazione.</p>
        <a href="/contatti?source=mappa-rebel&percorso=valutazione">Prenota la valutazione <span>→</span></a>
      </footer>
    </section>
  );
}
