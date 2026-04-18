import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

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
      setFeedback("Messaggio inviato. Ti ricontattiamo presto.");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Si è verificato un errore.");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__intro">
        <p className="form__kicker">Apri la tua consulenza</p>
        <p className="form__note">
          Obiettivo, area da trattare e tempi desiderati: da qui nasce la proposta più adatta a te.
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
          Telefono*
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
          placeholder="Da dove ci raggiungi"
          autoComplete="address-level2"
        />
      </label>

      <label>
        Messaggio*
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
          placeholder="Obiettivo, zona da trattare, quando vuoi iniziare."
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
        {status === "loading" ? "Invio in corso…" : "Apri la consulenza"}
      </button>

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
