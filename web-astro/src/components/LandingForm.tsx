import { useEffect, useRef, useState, type FormEvent } from "react";
import { isAcceptedFormRequest, trackConversion } from "@/lib/measurement";

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
  { value: "mani", label: "Manicure veloce (lima e smalto)" },
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
  const submitting = useRef(false);

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
    if (submitting.current || form.website.length > 0) return;
    const phoneDigits = form.phone.replace(/\D/g, "");
    const clientValid = e.currentTarget.reportValidity()
      && form.name.trim().length > 1
      && /^\+?[\d\s().-]+$/.test(form.phone.trim())
      && phoneDigits.length >= 6 && phoneDigits.length <= 15;
    if (!clientValid) {
      setStatus("error");
      setFeedback("Controlla nome, numero di telefono ed eventuale email prima di inviare.");
      return;
    }
    const honeypotEmpty = form.website.length === 0;
    submitting.current = true;
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
      if (!res.ok || data.ok !== true) {
        throw new Error(data.message || "Errore durante l'invio.");
      }
      if (isAcceptedFormRequest({ httpOk: res.ok, responseOk: data.ok, honeypotEmpty, clientValid })) {
        trackConversion("form_request_accepted");
      }
      setStatus("ok");
      setFeedback(
        successMessage ||
          "Richiesta ricevuta. Ti contattiamo per concordare un orario disponibile.",
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
    } finally {
      submitting.current = false;
    }
  };

  return (
    <form className="form form--landing" onSubmit={onSubmit}>
      <label>
        Nome*
        <input
          required
          minLength={2}
          maxLength={80}
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
          minLength={6}
          maxLength={32}
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
          Omaggio scelto
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
        Ti contattiamo negli orari di apertura, solo per rispondere alla tua richiesta.
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
