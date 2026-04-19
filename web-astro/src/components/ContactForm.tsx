import { useEffect, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  ritual: string;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  ritual: "",
  website: "",
};

const ritualOptions: ReadonlyArray<{ value: string; label: string }> = [
  { value: "", label: "Nessuna preferenza, decidiamo insieme" },
  { value: "mani", label: "Mini-rituale mani (lima + smalto rapido)" },
  { value: "viso-marbellas", label: "Massaggio viso epigenetico Marbellas" },
  { value: "sopracciglia", label: "Disegno e rifinitura sopracciglia" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Pre-fill the ritual field from a `?ritual=` query param so deeplinks from
  // the homepage promo banner land already configured.
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
        "Richiesta ricevuta. Ti scriviamo entro poche ore con un orario disponibile.",
      );
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Si è verificato un errore.");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__intro">
        <p className="form__kicker">Prima visita gratuita</p>
        <p className="form__note">
          Quindici minuti per capire da dove partire. In più, il primo accesso
          include un piccolo regalo a tua scelta.
        </p>
      </div>

      <label>
        Nome e cognome*
        <input
          required
          value={form.name}
          onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
          placeholder="Es. Martina Rossi"
          autoComplete="name"
        />
      </label>

      <div className="form__row">
        <label>
          Email*
          <input
            required
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
          value={form.city}
          onChange={(e) => setForm((v) => ({ ...v, city: e.target.value }))}
          placeholder="Da dove ci raggiungi (es. Carmagnola)"
          autoComplete="address-level2"
        />
      </label>

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

      <label>
        Cosa vorresti fare*
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
          placeholder="Es. Vorrei iniziare l'epilazione laser inguine + ascelle. In studio sono libera al pomeriggio."
        />
      </label>

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
