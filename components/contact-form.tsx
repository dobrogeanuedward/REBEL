"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Errore durante l'invio.");
      }

      setStatus("ok");
      setFeedback("Messaggio inviato. Ti ricontattiamo presto.");
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Si e verificato un errore.";
      setStatus("error");
      setFeedback(message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="contact-form" noValidate>
      <div className="contact-form-intro">
        <p className="contact-form-kicker">Apri la tua consulenza beauty</p>
        <p className="contact-form-note">
          Obiettivo, area da trattare e tempi desiderati: da qui nasce una consulenza su misura.
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

      <div className="contact-form-grid">
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
            value={form.phone}
            onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
            placeholder="+39..."
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        Citta
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
          placeholder="Scrivi obiettivo, zona da trattare e quando vuoi iniziare."
        />
      </label>

      {/* Honeypot anti-spam */}
      <input
        type="text"
        value={form.website}
        onChange={(e) => setForm((v) => ({ ...v, website: e.target.value }))}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-honeypot"
      />

      <button type="submit" className="button button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Invio..." : "Richiedi consulenza"}
      </button>

      {feedback ? (
        <p
          className="contact-feedback"
          data-state={status === "ok" ? "ok" : "error"}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

