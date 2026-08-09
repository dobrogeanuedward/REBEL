import { useEffect, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  source: string;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  source: "contatti",
  website: "",
};

const areaLabels: Record<string, string> = {
  viso: "Viso",
  corpo: "Corpo",
  epilazione: "Epilazione",
  insieme: "Da valutare insieme",
};

const journeyLabels: Record<string, string> = {
  "skin-reset": "Skin Reset",
  barrier: "Barrier",
  balance: "Balance",
  glow: "Glow",
  white: "Uniformare · White",
  structure: "Structure",
  longevity: "Longevity",
  forma: "Forma",
  liberta: "Libertà",
};

const allowedSources = new Set(["contatti", "mappa-rebel", "percorso"]);
const modeLabels: Record<string, string> = {
  esplorare: "Capire un trattamento",
  percorso: "Costruire un percorso con controlli",
  valutare: "Valutarlo insieme",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Whitelisted deep links let the Mappa and journey pages carry context
  // without accepting arbitrary query-string content into the message.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const sourceParam = params.get("source") ?? "contatti";
    const source = allowedSources.has(sourceParam) ? sourceParam : "contatti";
    const area = params.get("area") ?? "";
    const path = params.get("percorso") ?? "";
    const priority = params.get("priorita") ?? "";
    const mode = params.get("modalita") ?? "";

    if (source === "mappa-rebel") {
      const lines = ["Ho compilato la Mappa REBEL online."];
      if (areaLabels[area]) lines.push(`Area: ${areaLabels[area]}.`);
      if (journeyLabels[path]) lines.push(`Primo orientamento: ${journeyLabels[path]}.`);
      else if (["glow", "longevity", "forma", "liberta"].includes(path)) lines.push(`Mondo: ${path === "liberta" ? "Libertà" : path[0].toUpperCase() + path.slice(1)}.`);
      if (/^[a-z0-9-]{2,32}$/.test(priority)) lines.push(`Priorità selezionata: ${priority.replaceAll("-", " ")}.`);
      if (modeLabels[mode]) lines.push(`Preferenza di partenza: ${modeLabels[mode]}.`);
      lines.push("Vorrei valutarlo insieme in studio.");
      setForm((value) => ({ ...value, source, message: lines.join("\n") }));
    } else if (source === "percorso" && journeyLabels[path]) {
      setForm((value) => ({ ...value, source, message: `Vorrei valutare il percorso ${journeyLabels[path]} e capire la combinazione più adatta alla mia priorità.` }));
    }
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Errore durante l'invio.");
      }
      setStatus("ok");
      setFeedback(
        "Richiesta ricevuta. Ti scriviamo entro poche ore con un orario disponibile.",
      );
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Si è verificato un errore.");
    }
  };

  return (
    <form className="form" action="/api/contact" method="post" onSubmit={onSubmit}>
      <div className="form__intro">
        <p className="form__kicker">Valutazione REBEL · 30–40 minuti</p>
        <p className="form__note">
          Una valutazione di 30–40 minuti per capire da dove partire. È gratuita
          quando viene finalizzata alla costruzione del Percorso REBEL.
        </p>
      </div>

      <label>
        Nome e cognome*
        <input
          required
          name="name"
          value={form.name}
          onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
          placeholder="Es. Martina Rossi"
          autoComplete="name"
        />
      </label>

      <div className="form__row">
        <label>
          Email (facoltativa)
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
            placeholder="nome@email.com"
            autoComplete="email"
          />
        </label>
        <label>
          Telefono / WhatsApp*
          <input
            required
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
            placeholder="+39…"
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        Città
        <input
          name="city"
          value={form.city}
          onChange={(e) => setForm((v) => ({ ...v, city: e.target.value }))}
          placeholder="Da dove ci raggiungi (es. Carmagnola)"
          autoComplete="address-level2"
        />
      </label>

      <label>
        Cosa vorresti fare (facoltativo)
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
          placeholder="Es. Vorrei iniziare l'epilazione laser inguine + ascelle. In studio sono libera al pomeriggio."
        />
      </label>

      <input
        type="text"
        name="website"
        className="form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => setForm((v) => ({ ...v, website: e.target.value }))}
      />

      <input type="hidden" name="source" value={form.source} />

      <button
        type="submit"
        className="btn btn--primary btn--halo"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Invio in corso…" : "Prenota la prima visita"}
      </button>

      <p className="form__small">
        Inviando il modulo accetti la nostra Privacy Policy. Ti rispondiamo entro
        poche ore negli orari di apertura.
      </p>

      {feedback ? (
        <p
          className="form__feedback"
          data-state={status === "ok" ? "ok" : "error"}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
