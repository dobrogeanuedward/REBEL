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
  "landing-prima-visita": "Landing · Valutazione REBEL",
  "landing-laser": "Landing · Epilazione laser (prova)",
  "landing-viso": "Landing · Protocollo viso",
  "landing-prenota": "Landing · Prenota (ads)",
  "homepage-promo": "Homepage · Promo banner",
  "mappa-rebel": "Mappa REBEL · Orientamento online",
  percorso: "Pagina percorso REBEL",
  contatti: "Pagina contatti",
};

const required = (value?: string) =>
  typeof value === "string" && value.trim().length > 1;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const html = (title: string, message: string, status = 200) =>
  new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · REBEL</title><style>body{margin:0;min-height:100svh;display:grid;place-items:center;padding:24px;background:#f8f3ed;color:#291637;font-family:system-ui,sans-serif}.card{max-width:620px;padding:clamp(28px,7vw,64px);border:1px solid #dfd3df;border-radius:28px;background:#fff;box-shadow:0 28px 80px #321b4317}small{color:#b61f64;font-weight:800;letter-spacing:.12em;text-transform:uppercase}h1{font-size:clamp(2.4rem,9vw,5rem);line-height:.9;letter-spacing:-.06em}p{font-size:1.05rem;line-height:1.65}a{display:inline-flex;margin-top:12px;padding:14px 18px;border-radius:999px;background:#321b43;color:#fff;font-weight:800;text-decoration:none}</style></head><body><main class="card"><small>REBEL · Carmagnola</small><h1>${title}</h1><p>${message}</p><a href="/contatti">Torna ai contatti</a></main></body></html>`, {
    status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;
  const isJson = request.headers.get("content-type")?.includes("application/json") ?? false;
  try {
    if (isJson) {
      payload = (await request.json()) as ContactPayload;
    } else {
      const form = await request.formData();
      payload = Object.fromEntries(
        [...form.entries()].map(([key, value]) => [key, typeof value === "string" ? value : ""]),
      ) as ContactPayload;
    }
  } catch {
    return isJson
      ? json({ ok: false, message: "Dati non validi. Riprova." }, 400)
      : html("Dati non validi", "Torna al modulo e controlla i campi prima di riprovare.", 400);
  }

  // Honeypot — silently accept and discard bots.
  if (payload.website && payload.website.trim().length > 0) {
    return isJson
      ? json({ ok: true, message: "Messaggio ricevuto." })
      : html("Richiesta ricevuta", "Grazie. Ti ricontatteremo negli orari di apertura.");
  }

  // Email and message are not required on landing forms (we ask for the bare
  // minimum to maximise conversion). Name + phone are always mandatory.
  if (!required(payload.name) || !required(payload.phone)) {
    return isJson
      ? json({ ok: false, message: "Compila almeno nome e telefono prima di inviare." }, 400)
      : html("Mancano alcuni dati", "Compila almeno nome e telefono prima di inviare.", 400);
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
      return isJson
        ? json({ ok: false, message: "Invio non riuscito. Puoi scriverci direttamente su WhatsApp." }, 502)
        : html("Invio non riuscito", "Scrivici su WhatsApp: ti rispondiamo durante gli orari di apertura.", 502);
    }

    return isJson
      ? json({ ok: true, message: "Messaggio inviato correttamente." })
      : html("Richiesta ricevuta", "Grazie. Ti ricontatteremo negli orari di apertura.");
  } catch {
    return isJson
      ? json({ ok: false, message: "Connessione momentaneamente instabile. Prova tra poco o scrivici su WhatsApp." }, 500)
      : html("Connessione instabile", "Prova tra poco oppure scrivici direttamente su WhatsApp.", 500);
  }
};
