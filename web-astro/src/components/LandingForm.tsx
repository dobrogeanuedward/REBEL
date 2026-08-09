import { useEffect, useState, type FormEvent } from "react";

/**
 * LandingForm — short, conversion-oriented variant of ContactForm.
 *
 * Designed for ad/landing pages: only the bare minimum fields (name + phone),
 * everything else is optional. The `source` prop is sent to the API so we can
 * tell, in the email, which landing the lead came from.
 *
 * Pass `defaultMessage` to pre-fill the textarea with a context-specific hint
 * (e.g. "Vorrei provare il laser ascelle" on the laser landing).
 */
type Props = {
  source: string;
  defaultMessage?: string;
  defaultRitual?: string;
  submitLabel?: string;
  showRitual?: boolean;
  showMessage?: boolean;
  successMessage?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  ritual: string;
  source: string;
  website: string;
};

const ritualOptions: ReadonlyArray<{ value: string; label: string }> = [
  { value: "", label: "Nessuna preferenza, decidiamo insieme" },
  { value: "mani", label: "Mini-rituale mani (lima + smalto rapido)" },
  { value: "viso-marbellas", label: "Massaggio viso epigenetico Marbellas" },
  { value: "sopracciglia", label: "Disegno e rifinitura sopracciglia" },
];

export default function LandingForm({
  source,
  defaultMessage = "",
  defaultRitual = "",
  submitLabel = "Prenota la valutazione",
  showRitual = false,
  showMessage = true,
  successMessage,
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: defaultMessage,
    ritual: defaultRitual,
    source,
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Allow overriding the ritual via `?ritual=` query param so deeplinks from
  // PromoBanner-like CTAs land already configured.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ritual = params.get("ritual");
    if (ritual && ritualOptions.some((o) => o.value === ritual)) {
      setForm((v) => ({ ...v, ritual }));
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
        successMessage ||
          "Richiesta ricevuta. Ti scriviamo entro poche ore con un orario disponibile.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        message: defaultMessage,
        ritual: defaultRitual,
        source,
        website: "",
      });
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Si è verificato un errore.");
    }
  };

  return (
    <form className="form form--landing" onSubmit={onSubmit} noValidate>
      <label>
        Nome*
        <input
          required
          value={form.name}
          onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
          placeholder="Come ti chiami?"
          autoComplete="name"
        />
      </label>

      <label>
        Telefono / WhatsApp*
        <input
          required
          type="tel"
          inputMode="tel"
          value={form.phone}
          onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
          placeholder="+39…"
          autoComplete="tel"
        />
      </label>

      <label>
        Email <span className="form__optional">(opzionale)</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
          placeholder="nome@email.com"
          autoComplete="email"
        />
      </label>

      {showRitual ? (
        <label>
          Regalo prima visita
          <select
            value={form.ritual}
            onChange={(e) => setForm((v) => ({ ...v, ritual: e.target.value }))}
          >
            {ritualOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      {showMessage ? (
        <label>
          Cosa vorresti fare <span className="form__optional">(opzionale)</span>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
            placeholder="Es. Vorrei iniziare l'epilazione laser ascelle e inguine."
          />
        </label>
      ) : null}

      <input
        type="text"
        className="form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => setForm((v) => ({ ...v, website: e.target.value }))}
      />

      <button
        type="submit"
        className="btn btn--primary btn--halo btn--lg form__submit-block"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Invio in corso…" : submitLabel}
      </button>

      <p className="form__small">
        Ti rispondiamo entro poche ore negli orari di apertura. Nessun obbligo
        di acquisto, nessuno spam.
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
