import { useEffect, useState, type FormEvent } from "react";
import { bookingChoices, menu, priceRange } from "@/lib/treatment-catalog";
import { siteConfig } from "@/lib/site-config";
import { laserOfferContactMessage } from "@/lib/laser-offer";

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

const allowedSources = new Set([
  "contatti",
  "mappa-rebel",
  "percorso",
  "promo-laser",
  "listino",
]);
const modeLabels: Record<string, string> = {
  esplorare: "Capire un trattamento",
  percorso: "Scegliere un percorso e monitorarlo",
  valutare: "Valutare insieme",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  const [selected, setSelected] = useState("valutazione");
  const [variant, setVariant] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [today, setToday] = useState("");
  const choice = bookingChoices.find((c) => c.id === selected);
  const treatment = menu.categories
    .flatMap((c) => c.items)
    .find((i) => i.id === selected);
  const option = treatment?.options.find((o) => o.id === variant);
  const requestMessage = [
    `Mi interessa: ${choice?.label ?? "un consiglio REBEL"}.`,
    option
      ? `Variante: ${option.name} · ${priceRange(option.price)} · ${option.duration} min.`
      : "",
    preferredDate
      ? `Giorno desiderato: ${preferredDate.split("-").reverse().join("/")}.`
      : "",
    preferredTime ? `Orario preferito: ${preferredTime}.` : "",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappMessage = [
    "Ciao REBEL!",
    form.name ? `Sono ${form.name}.` : "",
    requestMessage,
    "Attendo conferma della disponibilità.",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  // Whitelisted deep links let the Mappa and journey pages carry context
  // without accepting arbitrary query-string content into the message.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setToday(
      new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/Rome",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
    );
    const requested = params.get("servizio") ?? "";
    if (bookingChoices.some((c) => c.id === requested)) {
      setSelected(requested);
      const item = menu.categories
        .flatMap((c) => c.items)
        .find((i) => i.id === requested);
      const requestedOption = params.get("variante") ?? "";
      if (item?.options.some((o) => o.id === requestedOption))
        setVariant(requestedOption);
      setForm((value) => ({ ...value, source: "listino" }));
    } else if (params.get("source") === "promo-laser")
      setSelected("promo-zona");
    else if (
      bookingChoices.some((c) => c.id === `percorso-${params.get("percorso")}`)
    )
      setSelected(`percorso-${params.get("percorso")}`);
    const sourceParam = params.get("source") ?? "contatti";
    const source = allowedSources.has(sourceParam) ? sourceParam : "contatti";
    const area = params.get("area") ?? "";
    const path = params.get("percorso") ?? "";
    const priority = params.get("priorita") ?? "";
    const mode = params.get("modalita") ?? "";

    if (source === "mappa-rebel") {
      const lines = ["Ho compilato la Mappa REBEL online."];
      if (areaLabels[area]) lines.push(`Area: ${areaLabels[area]}.`);
      if (journeyLabels[path])
        lines.push(`Percorso che mi interessa: ${journeyLabels[path]}.`);
      else if (["glow", "longevity", "forma", "liberta"].includes(path))
        lines.push(
          `Area che mi interessa: ${path === "liberta" ? "Libertà" : path[0].toUpperCase() + path.slice(1)}.`,
        );
      if (/^[a-z0-9-]{2,32}$/.test(priority))
        lines.push(`Priorità selezionata: ${priority.replaceAll("-", " ")}.`);
      if (modeLabels[mode]) lines.push(`Vorrei: ${modeLabels[mode]}.`);
      lines.push("Vorrei parlarne durante la valutazione in studio.");
      setForm((value) => ({ ...value, source, message: lines.join("\n") }));
    } else if (source === "percorso" && journeyLabels[path]) {
      setForm((value) => ({
        ...value,
        source,
        message: `Mi interessa il percorso ${journeyLabels[path]}. Vorrei capire se può essere adatto alle mie esigenze e come si svolge.`,
      }));
    } else if (source === "promo-laser") {
      setForm((value) => ({
        ...value,
        source,
        message: laserOfferContactMessage,
      }));
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
        body: JSON.stringify({ ...form, message: requestMessage }),
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
        "Richiesta ricevuta. Ti contattiamo per concordare un orario disponibile.",
      );
      setForm(initial);
      setPreferredDate("");
      setPreferredTime("");
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Si è verificato un errore.",
      );
    }
  };

  return (
    <form
      className="form"
      action="/api/contact"
      method="post"
      onSubmit={onSubmit}
    >
      <div className="form__intro">
        <p className="form__kicker">
          La tua richiesta, direttamente allo studio
        </p>
        <p className="form__note">
          Scegli cosa ti interessa e, se vuoi, indica giorno e orario preferiti.
          L’appuntamento sarà confermato dopo la nostra risposta.
        </p>
      </div>

      <label>
        Cosa ti interessa?
        <select
          name="selection"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setVariant("");
          }}
        >
          {bookingChoices.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      {choice && (
        <p className="booking-selection" role="status">
          <strong>{choice.label}</strong>
          <span>{choice.price}</span>
          {selected.startsWith("TR") && (
            <small>
              Prezzo ordinario. Eventuali offerte Treatwell si verificano sulla
              piattaforma.
            </small>
          )}
        </p>
      )}
      {treatment && treatment.options.length > 1 && (
        <label>
          Variante o zona
          <select
            name="variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="">Da concordare insieme</option>
            {treatment.options.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name} · {priceRange(o.price)}
              </option>
            ))}
          </select>
        </label>
      )}
      <div className="form__row">
        <label>
          Giorno desiderato (facoltativo)
          <input
            type="date"
            name="preferredDate"
            min={today}
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
          />
        </label>
        <label>
          Orario preferito (facoltativo)
          <input
            type="time"
            name="preferredTime"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
          />
        </label>
      </div>
      <p className="form__small">
        Queste sono preferenze, non disponibilità in tempo reale. Per scegliere
        tra gli appuntamenti disponibili,{" "}
        <a href={menu.source} target="_blank" rel="noopener noreferrer">
          apri Treatwell
        </a>
        .
      </p>
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
        Aggiungi un dettaglio (facoltativo)
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
        {status === "loading"
          ? "Invio in corso…"
          : "Invia la richiesta allo studio"}
      </button>

      <a
        className="btn btn--secondary booking-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Oppure continua su WhatsApp ↗
      </a>
      <p className="form__small">
        Useremo i tuoi dati solo per rispondere alla richiesta. Ti contattiamo
        negli orari di apertura.
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
