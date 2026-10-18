import assert from "node:assert/strict";
import { test } from "node:test";
import {
  cleanMeasurementPath, conversionEventNames, conversionTypeForLink,
  createConversionPayload, createMeasurementPolicy, isAcceptedFormRequest, trackConversion,
} from "../src/lib/measurement.ts";

const policy = createMeasurementPolicy({
  paths: ["/", "/contatti", "/promo-epilazione-laser-carmagnola", "/servizi/trattamenti-viso-carmagnola", "/servizi/trattamenti-corpo-carmagnola", "/servizi/pressomassaggio-carmagnola", "/servizi/massaggi-carmagnola", "/competenze/pressomassaggio-carmagnola", "/percorsi/forma", "/localita/torino"],
  services: ["TR6498883", "massaggi-carmagnola", "percorso-forma"],
});

test("every supported signal emits a minimal, predictable payload", () => {
  for (const event of conversionEventNames) {
    assert.deepEqual(createConversionPayload({ event, path: "/contatti" }, policy), { event, path: "/contatti" });
  }
  assert.deepEqual(createConversionPayload({ event: "whatsapp_intent", path: "/contatti", service: "TR6498883" }, policy), {
    event: "whatsapp_intent", path: "/contatti", service: "TR6498883",
  });
});

test("a click or request is never rewritten into an appointment confirmation", () => {
  for (const event of ["appointment_confirmed", "booking_confirmed", "form_submit", "page_view", "WHATSAPP_INTENT", ""]) {
    assert.equal(createConversionPayload({ event, path: "/contatti" }, policy), null);
  }
});

test("query strings and hashes cannot enter the payload", () => {
  const result = createConversionPayload({ event: "form_request_accepted", path: "/contatti/?email=canary@example.test&name=PrivacyCanary#phone=000123456" }, policy);
  assert.deepEqual(result, { event: "form_request_accepted", path: "/contatti" });
});

test("extra fields, nested customer data and unapproved service values are discarded", () => {
  const result = createConversionPayload({
    event: "whatsapp_intent", path: "/contatti", service: "PrivacyCanary",
    name: "PrivacyCanary", phone: "000123456", email: "canary@example.test",
    message: "private freeform canary", href: "https://wa.me/000123456?text=private",
    referrer: "https://example.test/?email=canary@example.test", nested: { name: "PrivacyCanary" },
  }, policy);
  assert.deepEqual(result, { event: "whatsapp_intent", path: "/contatti" });
  assert.doesNotMatch(JSON.stringify(result), /canary|private|000123456|@|https:|\?/i);
  assert.deepEqual(createConversionPayload({ event: "phone_intent", path: "/contatti", service: { id: "TR6498883", email: "canary@example.test" } }, policy), { event: "phone_intent", path: "/contatti" });
});

test("unknown paths and paths that could contain identifying data fail closed", () => {
  for (const path of ["/unknown-page", "/canary@example.test", "/contatti/canary", "/contatti/../private", "/contatti%3Femail=private", "//example.test/contatti", "https://www.rebelepigenetica.it/contatti", "/contatti\\private"]) {
    assert.equal(createConversionPayload({ event: "phone_intent", path }, policy), null, path);
  }
  assert.equal(cleanMeasurementPath(null), null);
  assert.equal(cleanMeasurementPath("/contatti?" + "x".repeat(1024)), null);
  assert.equal(createConversionPayload([], policy), null);
  assert.equal(createConversionPayload(null, policy), null);
});

test("the policy accepts known route families and rejects polluted configuration", () => {
  for (const path of policy.paths) assert.ok(createConversionPayload({ event: "whatsapp_intent", path }, policy), path);
  assert.deepEqual(createMeasurementPolicy({
    paths: ["/contatti", "/contatti/", "/contatti?name=private", "https://example.test", "/private@example.test"],
    services: ["TR6498883", "TR6498883", "person@example.test", "private text", null],
  }), { paths: ["/contatti"], services: ["TR6498883"] });
});

test("WhatsApp, phone and the real Treatwell salon remain distinct intents", () => {
  assert.equal(conversionTypeForLink("https://wa.me/393516919416?text=PrivacyCanary%20canary@example.test"), "whatsapp_intent");
  assert.equal(conversionTypeForLink("https://api.whatsapp.com/send?phone=000123456&text=private"), "whatsapp_intent");
  assert.equal(conversionTypeForLink("whatsapp://send?text=private"), "whatsapp_intent");
  assert.equal(conversionTypeForLink("tel:+393516919416"), "phone_intent");
  assert.equal(conversionTypeForLink("https://www.treatwell.it/salone/rebel-estetica-epigenetica/?utm_source=private"), "booking_intent");
});

test("lookalike hosts, unsafe schemes and unrelated destinations do not count", () => {
  for (const href of [
    "/contatti#prenota", "mailto:canary@example.test", "javascript:alert(1)", "http://wa.me/123456",
    "https://wa.me.evil.test/123456", "https://wa.me:8443/123456", "https://wa.me@evil.test/123456",
    "https://www.treatwell.it.evil.test/salone/rebel-estetica-epigenetica/", "https://www.treatwell.it/salone/another-salon/",
    "https://wa.me/not-a-phone", "tel:canary@example.test", "", "/",
  ]) assert.equal(conversionTypeForLink(href), null, href);
});

test("only all four real acceptance conditions permit a form signal", () => {
  const accepted = { httpOk: true, responseOk: true, honeypotEmpty: true, clientValid: true };
  assert.equal(isAcceptedFormRequest(accepted), true);
  for (const field of Object.keys(accepted)) {
    for (const value of [false, undefined, null, 1, "true"]) {
      assert.equal(isAcceptedFormRequest({ ...accepted, [field]: value }), false, `${field}: ${String(value)}`);
    }
  }
});

test("the browser bridge does nothing during server rendering", () => {
  assert.equal(trackConversion("whatsapp_intent", { service: "TR6498883" }), false);
  assert.equal(Object.hasOwn(globalThis, "dataLayer"), false);
});
