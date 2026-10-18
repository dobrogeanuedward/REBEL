/** Local conversion signals. No network, storage, cookies or customer fields. */
export const conversionEventNames = [
  "whatsapp_intent", "phone_intent", "booking_intent", "form_request_accepted",
] as const;
export type ConversionEventName = (typeof conversionEventNames)[number];
export type ConversionPayload = { event: ConversionEventName; path: string; service?: string };
export type MeasurementPolicy = { paths: string[]; services: string[] };
export type ConversionContext = { service?: unknown };

const eventNames = new Set<string>(conversionEventNames);
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/** Only authored ASCII routes survive; query, hash, origins and arbitrary paths do not. */
export function cleanMeasurementPath(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 1024 || !value.startsWith("/") || value.startsWith("//")) return null;
  const path = value.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  return /^\/(?:[a-z0-9]+(?:[-/][a-z0-9]+)*)?$/.test(path) ? path : null;
}

export function createMeasurementPolicy(value: unknown): MeasurementPolicy {
  if (!isRecord(value)) return { paths: [], services: [] };
  const paths = Array.isArray(value.paths)
    ? value.paths.filter((path): path is string => typeof path === "string" && !/[?#]/.test(path)).map(cleanMeasurementPath).filter((path): path is string => path !== null)
    : [];
  const services = Array.isArray(value.services)
    ? value.services.filter((service): service is string => typeof service === "string" && service.length <= 100 && /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(service))
    : [];
  return { paths: [...new Set(paths)], services: [...new Set(services)] };
}

/** Rebuild the entire payload from a whitelist; never spread input or DOM data. */
export function createConversionPayload(value: unknown, policy: MeasurementPolicy): ConversionPayload | null {
  if (!isRecord(value) || typeof value.event !== "string" || !eventNames.has(value.event)) return null;
  const path = cleanMeasurementPath(value.path);
  if (!path || !policy.paths.includes(path)) return null;
  const service = typeof value.service === "string" && policy.services.includes(value.service) ? value.service : undefined;
  return { event: value.event as ConversionEventName, path, ...(service ? { service } : {}) };
}

/** Read destinations only to classify a click. The destination is never returned. */
export function conversionTypeForLink(value: unknown): ConversionEventName | null {
  if (typeof value !== "string" || value.length > 20000) return null;
  let url: URL;
  try { url = new URL(value); } catch { return null; }
  if (url.username || url.password) return null;
  if (url.protocol === "tel:") return /^\+?[\d(). -]{5,}$/.test(url.pathname) ? "phone_intent" : null;
  if (url.protocol === "whatsapp:" && url.hostname === "send") return "whatsapp_intent";
  if (url.protocol !== "https:" || url.port) return null;
  if (url.hostname === "wa.me" && /^\/\d+\/?$/.test(url.pathname)) return "whatsapp_intent";
  if (["api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname) && url.pathname === "/send") return "whatsapp_intent";
  if (["www.treatwell.it", "treatwell.it"].includes(url.hostname) && /^\/salone\/rebel-estetica-epigenetica(?:\/|$)/.test(url.pathname)) return "booking_intent";
  return null;
}

/** A successful HTTP response alone can include the endpoint's honeypot decoy. */
export function isAcceptedFormRequest(value: {
  httpOk: unknown; responseOk: unknown; honeypotEmpty: unknown; clientValid: unknown;
}): boolean {
  return value.httpOk === true && value.responseOk === true && value.honeypotEmpty === true && value.clientValid === true;
}

function currentPolicy(): MeasurementPolicy {
  const element = document.querySelector<HTMLScriptElement>("script[data-rebel-measurement-policy]");
  if (!element?.textContent) return { paths: [], services: [] };
  try { return createMeasurementPolicy(JSON.parse(element.textContent)); } catch { return { paths: [], services: [] }; }
}

function serviceFromPath(path: string, policy: MeasurementPolicy) {
  const parts = path.split("/");
  const candidate = parts.length !== 3 ? undefined : parts[1] === "servizi" ? parts[2]
    : parts[1] === "percorsi" ? `percorso-${parts[2]}`
      : parts[1] === "protocolli" ? `protocollo-${parts[2]}` : undefined;
  return candidate && policy.services.includes(candidate) ? candidate : undefined;
}

/**
 * ContactForm can call this after a valid WhatsApp handoff; API forms call it
 * only after isAcceptedFormRequest. Neither event means an appointment exists.
 */
export function trackConversion(event: ConversionEventName, context: ConversionContext = {}): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  try {
    const policy = currentPolicy();
    const path = cleanMeasurementPath(window.location.pathname);
    const payload = createConversionPayload({ event, path, service: context.service ?? (path ? serviceFromPath(path, policy) : undefined) }, policy);
    if (!payload) return false;
    const detail = Object.freeze({ ...payload });
    window.dispatchEvent(new CustomEvent("rebel:conversion", { detail }));
    const dataLayer = (window as Window & { dataLayer?: unknown }).dataLayer;
    if (Array.isArray(dataLayer)) {
      // Existing integrations may override push; they must never break booking.
      try { dataLayer.push({ ...payload }); } catch { /* Keep the customer flow intact. */ }
    }
    return true;
  } catch { return false; }
}
