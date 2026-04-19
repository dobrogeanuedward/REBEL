import type { APIRoute } from "astro";
import { siteConfig } from "@/lib/site-config";

// Endpoint must run server-side (Vercel function), not at build time.
export const prerender = false;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
  ritual?: string;
  source?: string;
  website?: string;
};

const ritualLabels: Record<string, string> = {
  mani: "Mini-rituale mani (lima + smalto rapido)",
  "viso-marbellas": "Massaggio viso epigenetico Marbellas",
  sopracciglia: "Disegno e rifinitura sopracciglia",
};

// Human-readable labels for the `source` field. Lets us tag where the lead
// came from (which landing / channel) without polluting the user-facing form.
const sourceLabels: Record<string, string> = {
  "landing-prima-visita": "Landing · Prima visita gratuita",
  "landing-laser": "Landing · Epilazione laser (prova)",
  "landing-viso": "Landing · Protocollo viso",
  "landing-prenota": "Landing · Prenota (ads)",
  "homepage-promo": "Homepage · Promo banner",
  contatti: "Pagina contatti",
};

const required = (value?: string) =>
  typeof value === "string" && value.trim().length > 1;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, message: "Dati non validi. Riprova." }, 400);
  }

  // Honeypot — silently accept and discard bots.
  if (payload.website && payload.website.trim().length > 0) {
    return json({ ok: true, message: "Messaggio ricevuto." });
  }

  // Email and message are not required on landing forms (we ask for the bare
  // minimum to maximise conversion). Name + phone are always mandatory.
  if (!required(payload.name) || !required(payload.phone)) {
    return json(
      { ok: false, message: "Compila almeno nome e telefono prima di inviare." },
      400,
    );
  }

  const recipient = import.meta.env.CONTACT_GMAIL_TO || siteConfig.email;
  const sourceKey = payload.source?.trim() ?? "";
  const sourceLine = sourceKey && sourceLabels[sourceKey] ? sourceLabels[sourceKey] : "Pagina contatti";
  const subject = `${sourceLine} — ${payload.name?.trim()}`;
  const city = payload.city?.trim() ? `\nCittà: ${payload.city.trim()}` : "";
  const email = payload.email?.trim() ? `\nEmail: ${payload.email.trim()}` : "";
  const ritualKey = payload.ritual?.trim() ?? "";
  const ritualLine =
    ritualKey && ritualLabels[ritualKey]
      ? `\nRegalo scelto: ${ritualLabels[ritualKey]}`
      : "";
  const messageLine = payload.message?.trim()
    ? `\n\nCosa vorrebbe fare:\n${payload.message.trim()}`
    : "";
  const body = `Provenienza: ${sourceLine}
Nome: ${payload.name?.trim()}${email}
Telefono / WhatsApp: ${payload.phone?.trim()}${city}${ritualLine}${messageLine}`;

  try {
    const upstream = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _captcha: "false",
        _template: "table",
        message: body,
      }),
    });

    if (!upstream.ok) {
      return json(
        {
          ok: false,
          message:
            "Invio non riuscito. Scrivici su WhatsApp, ti rispondiamo subito.",
        },
        502,
      );
    }

    return json({ ok: true, message: "Messaggio inviato correttamente." });
  } catch {
    return json(
      {
        ok: false,
        message:
          "Connessione momentaneamente instabile. Prova tra poco o scrivici su WhatsApp.",
      },
      500,
    );
  }
};
