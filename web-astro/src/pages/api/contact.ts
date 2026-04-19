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
  website?: string;
};

const ritualLabels: Record<string, string> = {
  mani: "Mini-rituale mani (lima + smalto rapido)",
  "viso-marbellas": "Massaggio viso epigenetico Marbellas",
  sopracciglia: "Disegno e rifinitura sopracciglia",
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

  if (
    !required(payload.name) ||
    !required(payload.email) ||
    !required(payload.phone) ||
    !required(payload.message)
  ) {
    return json(
      { ok: false, message: "Compila i campi obbligatori prima di inviare." },
      400,
    );
  }

  const recipient = import.meta.env.CONTACT_GMAIL_TO || siteConfig.email;
  const subject = `Prima visita gratuita — ${payload.name?.trim()}`;
  const city = payload.city?.trim() ? `\nCittà: ${payload.city.trim()}` : "";
  const ritualKey = payload.ritual?.trim() ?? "";
  const ritualLine =
    ritualKey && ritualLabels[ritualKey]
      ? `\nRegalo scelto: ${ritualLabels[ritualKey]}`
      : "\nRegalo scelto: (nessuna preferenza, da decidere insieme)";
  const body = `Nome: ${payload.name?.trim()}
Email: ${payload.email?.trim()}
Telefono / WhatsApp: ${payload.phone?.trim()}${city}${ritualLine}

Cosa vorrebbe fare:
${payload.message?.trim()}`;

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
