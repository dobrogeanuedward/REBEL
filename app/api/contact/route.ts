import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
  website?: string;
};

function requiredField(value?: string) {
  return typeof value === "string" && value.trim().length > 1;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Dati non validi. Riprova." },
      { status: 400 },
    );
  }

  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Messaggio ricevuto." });
  }

  if (
    !requiredField(payload.name) ||
    !requiredField(payload.email) ||
    !requiredField(payload.phone) ||
    !requiredField(payload.message)
  ) {
    return NextResponse.json(
      { ok: false, message: "Compila i campi obbligatori prima di inviare." },
      { status: 400 },
    );
  }

  const recipient = process.env.CONTACT_GMAIL_TO || siteConfig.email;
  const subject = encodeURIComponent(
    `Nuova richiesta dal sito Rebel - ${payload.name?.trim()}`,
  );
  const city = payload.city?.trim() ? `\nCitta: ${payload.city.trim()}` : "";
  const body = `Nome: ${payload.name?.trim()}
Email: ${payload.email?.trim()}
Telefono: ${payload.phone?.trim()}${city}

Messaggio:
${payload.message?.trim()}`;

  try {
    // Email-ready endpoint: imposta CONTACT_GMAIL_TO con la tua Gmail in ambiente.
    // FormSubmit inoltra l'email direttamente al destinatario configurato.
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
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

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Invio non riuscito. Scrivici su WhatsApp, ti rispondiamo subito.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Messaggio inviato correttamente.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Connessione momentaneamente instabile. Prova tra poco o scrivici su WhatsApp.",
      },
      { status: 500 },
    );
  }
}

