import { useEffect, useMemo, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  areaOptions,
  modeOptions,
  prioritiesByArea,
  worldResults,
  type MapAreaId,
  type MapModeId,
} from "@/lib/rebel-map-data";
import "@/styles/rebel-map-live.css";

const getLabel = <T extends { id: string; label: string }>(items: T[], id: string) =>
  items.find((item) => item.id === id)?.label ?? "Da definire";

const nextStepByMode: Record<MapModeId, { label: string; body: string }> = {
  esplorare: {
    label: "Esplora il primo percorso",
    body: "Apri la prima pagina suggerita e confrontala con gli altri percorsi dello stesso mondo.",
  },
  percorso: {
    label: "Costruiamo il percorso",
    body: "Porta questo orientamento in valutazione: frequenza, controlli e combinazioni verranno costruiti insieme.",
  },
  valutare: {
    label: "Valutiamolo insieme",
    body: "Non devi scegliere prima della visita: partiremo da ciò che hai indicato e verificheremo ogni voce in studio.",
  },
};

export default function RebelMap() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<MapAreaId | "">("");
  const [priority, setPriority] = useState("");
  const [mode, setMode] = useState<MapModeId | "">("");
  const stageRef = useRef<HTMLFormElement>(null);

  const priorities = area ? prioritiesByArea[area] : [];
  const selectedPriority = priorities.find((item) => item.id === priority);
  const result = selectedPriority ? worldResults[selectedPriority.world] : null;
  const firstPath = selectedPriority?.firstPath ?? result?.paths[0]?.slug;
  const nextStep = mode ? nextStepByMode[mode] : null;

  useEffect(() => {
    if (step === 0) return;
    const focusTarget = stageRef.current?.querySelector<HTMLElement>("legend, [data-result-title]");
    window.requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
  }, [step]);

  const contactHref = useMemo(() => {
    if (!result || !selectedPriority) return "/contatti";
    const params = new URLSearchParams({
      source: "mappa-rebel",
      area: area || "insieme",
      priorita: selectedPriority.id,
      percorso: selectedPriority.world,
      modalita: mode || "valutare",
    });
    return `/contatti?${params.toString()}`;
  }, [area, mode, result, selectedPriority]);

  const whatsappHref = useMemo(() => {
    if (!result || !selectedPriority) return siteConfig.social.whatsapp;
    const text = `Ciao REBEL, ho compilato la Mappa online. Primo orientamento: ${result.name}. Priorità: ${selectedPriority.label}. Vorrei valutarlo insieme.`;
    return `${siteConfig.social.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [result, selectedPriority]);

  const next = () => {
    if (step === 0 && area) setStep(1);
    if (step === 1 && priority) setStep(2);
    if (step === 2 && mode) setStep(3);
  };

  const back = () => setStep((value) => Math.max(0, value - 1));
  const reset = () => { setStep(0); setArea(""); setPriority(""); setMode(""); };

  return (
    <div className="rb-map" data-world={result?.name.toLowerCase() ?? "open"}>
      <noscript><style>{`.rb-map__stage fieldset,.rb-map__progress,.rb-map__nav{display:none!important}.rb-map__fallback{margin-top:0!important;padding-top:0!important;border-top:0!important}`}</style></noscript>
      <aside className="rb-map__dossier" aria-label="Riepilogo della Mappa REBEL">
        <div className="rb-map__dossier-head">
          <span>Mappa Rebel</span>
          <small>Orientamento online</small>
        </div>
        <dl>
          <div><dt>Area di partenza</dt><dd>{area ? getLabel(areaOptions, area) : "Da scegliere"}</dd></div>
          <div><dt>Priorità percepita</dt><dd>{selectedPriority?.label ?? "Da scegliere"}</dd></div>
          <div><dt>Modalità</dt><dd>{mode ? getLabel(modeOptions, mode) : "Da scegliere"}</dd></div>
          <div className="rb-map__dossier-result"><dt>Primo orientamento</dt><dd>{result?.name ?? "Si compila con te"}</dd></div>
          <div><dt>Trattamenti</dt><dd>Da definire in studio</dd></div>
          <div><dt>Tecnologie</dt><dd>Da definire in studio</dd></div>
          <div><dt>Frequenza e controlli</dt><dd>Da definire in studio</dd></div>
        </dl>
        <p>Questa mappa orienta la conversazione. Non è una diagnosi e non sostituisce la valutazione professionale.</p>
      </aside>

      <form className="rb-map__stage" ref={stageRef} onSubmit={(event) => event.preventDefault()}>
        {step < 3 ? <div className="rb-map__progress" aria-label={`Passaggio ${step + 1} di 3`}><span style={{ width: `${((step + 1) / 3) * 100}%` }}></span><small>{step + 1} / 3</small></div> : null}

        {step === 0 ? (
          <fieldset>
            <legend tabIndex={-1}>Da dove vuoi partire?</legend>
            <p className="rb-map__hint">Non serve conoscere il nome del trattamento: scegli soltanto l’area che senti più vicina.</p>
            <div className="rb-map__choices">
              {areaOptions.map((option) => <label key={option.id}><input type="radio" name="area" value={option.id} checked={area === option.id} onChange={() => { setArea(option.id); setPriority(""); }} /><span><strong>{option.label}</strong><small>{option.detail}</small></span></label>)}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend tabIndex={-1}>Quale priorità senti oggi?</legend>
            <p className="rb-map__hint">È un primo orientamento: la professionista verificherà condizioni iniziali e obiettivo.</p>
            <div className="rb-map__choices">
              {priorities.map((option) => <label key={option.id}><input type="radio" name="priority" value={option.id} checked={priority === option.id} onChange={() => setPriority(option.id)} /><span><strong>{option.label}</strong><small>{option.detail}</small></span></label>)}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend tabIndex={-1}>Come preferisci iniziare?</legend>
            <p className="rb-map__hint">La risposta cambia il prossimo passo, non il trattamento.</p>
            <div className="rb-map__choices">
              {modeOptions.map((option) => <label key={option.id}><input type="radio" name="mode" value={option.id} checked={mode === option.id} onChange={() => setMode(option.id)} /><span><strong>{option.label}</strong><small>{option.detail}</small></span></label>)}
            </div>
          </fieldset>
        ) : null}

        {step < 3 ? (
          <div className="rb-map__nav">
            <button type="button" className="rb-map__back" onClick={back} disabled={step === 0}>Indietro</button>
            <button type="button" className="btn btn--primary" onClick={next} disabled={(step === 0 && !area) || (step === 1 && !priority) || (step === 2 && !mode)}>Continua</button>
          </div>
        ) : result && selectedPriority ? (
          <section className="rb-map__result" aria-live="polite">
            <p className="rebel-kicker">Il tuo primo orientamento</p>
            <h3 data-result-title tabIndex={-1}>{result.name}</h3>
            <strong>{result.eyebrow}</strong>
            <p>{result.summary}</p>
            <div className="rb-map__evaluate"><small>Che cosa verifichiamo in studio</small><p>{result.evaluate}</p></div>
            {nextStep ? <div className="rb-map__evaluate"><small>Il prossimo passo che hai scelto</small><p>{nextStep.body}</p></div> : null}
            <div className="rb-map__paths" aria-label={`Percorsi del mondo ${result.name}`}>
              {result.paths.map((path) => <a key={path.slug} href={`/percorsi/${path.slug}`} data-primary={path.slug === firstPath}>{path.name}<span>→</span></a>)}
            </div>
            <div className="rb-map__actions">
              {mode === "esplorare" ? <a className="btn btn--primary" href={`/percorsi/${firstPath}`}>{nextStep?.label}</a> : <a className="btn btn--primary" href={contactHref}>{nextStep?.label ?? "Porta la Mappa in valutazione"}</a>}
              <a className="btn btn--secondary" href={whatsappHref} target="_blank" rel="noreferrer">Portala su WhatsApp</a>
              <button type="button" className="rb-map__reset" onClick={reset}>Ricomincia</button>
            </div>
          </section>
        ) : null}

        <nav className="rb-map__fallback" aria-label="Esplora direttamente i quattro mondi REBEL">
          <small>Esplora direttamente i quattro mondi</small>
          <div><a href="/percorsi#glow">Glow</a><a href="/percorsi#longevity">Longevity</a><a href="/percorsi/forma">Forma</a><a href="/percorsi/liberta">Libertà</a></div>
        </nav>
      </form>
    </div>
  );
}
