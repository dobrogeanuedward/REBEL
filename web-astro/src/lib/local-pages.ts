import { siteConfig } from "./site-config";

export type LocalAreaPage = {
  slug: string;
  city: string;
  cluster: "asse-carmagnola" | "torino-sud" | "cuneo";
  kind: "municipality" | "area";
  directions: { mapsUrl: string; embedUrl: string };
};

type LocalAreaSeed = Pick<LocalAreaPage, "slug" | "city" | "cluster"> & {
  kind?: LocalAreaPage["kind"];
};

// Origins, not branches: every route ends at the same real REBEL studio.
// Keep existing slugs stable while reviewing their search performance.
const localAreaSeeds: LocalAreaSeed[] = [
  { slug: "carmagnola", city: "Carmagnola", cluster: "asse-carmagnola" },
  { slug: "lombriasco", city: "Lombriasco", cluster: "asse-carmagnola" },
  { slug: "caramagna-piemonte", city: "Caramagna Piemonte", cluster: "asse-carmagnola" },
  { slug: "osasio", city: "Osasio", cluster: "asse-carmagnola" },
  { slug: "casalgrasso", city: "Casalgrasso", cluster: "asse-carmagnola" },
  { slug: "carignano", city: "Carignano", cluster: "asse-carmagnola" },
  { slug: "racconigi", city: "Racconigi", cluster: "asse-carmagnola" },
  { slug: "sommariva-del-bosco", city: "Sommariva del Bosco", cluster: "asse-carmagnola" },
  { slug: "poirino", city: "Poirino", cluster: "asse-carmagnola" },
  { slug: "villastellone", city: "Villastellone", cluster: "asse-carmagnola" },
  { slug: "pancalieri", city: "Pancalieri", cluster: "asse-carmagnola" },
  { slug: "virle-piemonte", city: "Virle Piemonte", cluster: "asse-carmagnola" },
  { slug: "pralormo", city: "Pralormo", cluster: "asse-carmagnola" },
  { slug: "torino", city: "Torino", cluster: "torino-sud" },
  { slug: "torino-sud", city: "Torino Sud", cluster: "torino-sud", kind: "area" },
  { slug: "moncalieri", city: "Moncalieri", cluster: "torino-sud" },
  { slug: "nichelino", city: "Nichelino", cluster: "torino-sud" },
  { slug: "vinovo", city: "Vinovo", cluster: "torino-sud" },
  { slug: "la-loggia", city: "La Loggia", cluster: "torino-sud" },
  { slug: "trofarello", city: "Trofarello", cluster: "torino-sud" },
  { slug: "chieri", city: "Chieri", cluster: "torino-sud" },
  { slug: "orbassano", city: "Orbassano", cluster: "torino-sud" },
  { slug: "polonghera", city: "Polonghera", cluster: "cuneo" },
  { slug: "ceresole-d-alba", city: "Ceresole d’Alba", cluster: "cuneo" },
  { slug: "canale", city: "Canale", cluster: "cuneo" },
  { slug: "alba", city: "Alba", cluster: "cuneo" },
  { slug: "bra", city: "Bra", cluster: "cuneo" },
  { slug: "savigliano", city: "Savigliano", cluster: "cuneo" },
  { slug: "fossano", city: "Fossano", cluster: "cuneo" },
  { slug: "saluzzo", city: "Saluzzo", cluster: "cuneo" },
];

const studioAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.locality} ${siteConfig.address.region}, Italia`;

function routeOrigin(area: Pick<LocalAreaPage, "slug" | "city" | "kind">) {
  // An area has no single departure point. Ask Maps for the visitor's address.
  return area.kind === "area" || area.slug === "carmagnola"
    ? undefined
    : `${area.city}, Italia`;
}

function directionsUrl(area: Pick<LocalAreaPage, "slug" | "city" | "kind">, mode: "driving" | "transit") {
  const parameters = new URLSearchParams({ api: "1", destination: studioAddress, travelmode: mode });
  const origin = routeOrigin(area);
  if (origin) parameters.set("origin", origin);
  return `https://www.google.com/maps/dir/?${parameters}`;
}

export const localAreaPages: LocalAreaPage[] = localAreaSeeds.map((seed) => {
  const area = { ...seed, kind: seed.kind ?? "municipality" as const };
  const origin = routeOrigin(area);
  const embedParameters = origin
    ? new URLSearchParams({ f: "d", source: "s_d", saddr: origin, daddr: studioAddress, output: "embed" })
    : new URLSearchParams({ q: studioAddress, output: "embed" });
  return {
    ...area,
    directions: {
      mapsUrl: directionsUrl(area, "driving"),
      embedUrl: `https://www.google.com/maps?${embedParameters}`,
    },
  };
});

export function getLocalAreaPage(slug: string) {
  return localAreaPages.find((item) => item.slug === slug);
}

export const localAreaGroups = [
  {
    key: "asse-carmagnola" as const,
    name: "Carmagnola e comuni vicini",
    title: "Il tuo appuntamento a Carmagnola.",
    description: "Scegli il tuo comune per vedere il percorso verso Viale Barbaroux 20 e preparare la visita.",
    visitNote: "Hai già scelto un servizio? Indicaci il trattamento e le tue disponibilità. Se vuoi capire quale percorso viso, corpo o laser scegliere, chiedi la valutazione iniziale.",
  },
  {
    key: "torino-sud" as const,
    name: "Torino e l’area sud",
    title: "Da Torino e dai comuni dell’area sud.",
    description: "Confronta auto e trasporto pubblico dalla tua partenza. Lo studio e tutti i trattamenti sono a Carmagnola.",
    visitNote: "Prima di partire verifica l’appuntamento e inserisci il tuo indirizzo esatto sulla mappa. Se desideri iniziare il laser, chiedici anche come preparare le zone e quanto tempo riservare alla prima visita.",
  },
  {
    key: "cuneo" as const,
    name: "Cuneese, Roero e Langhe",
    title: "Da Alba, Bra e dal Cuneese.",
    description: "Trova le indicazioni per Carmagnola e consulta servizi, durata e prezzi prima di organizzare l’appuntamento.",
    visitNote: "Se desideri più servizi nella stessa visita, segnalalo quando ci contatti. Verifichiamo disponibilità e durata complessiva prima di confermare l’appuntamento.",
  },
];

export function getLocalAreaGroup(area: LocalAreaPage) {
  return localAreaGroups.find((group) => group.key === area.cluster)!;
}

export function publicTransportDirections(area: LocalAreaPage) {
  return directionsUrl(area, "transit");
}

// Distinct needs link to existing destinations, without service × city URLs.
export const visitServiceLinks = [
  { name: "Epilazione laser", description: "Tecnologia, zone e preparazione prima della seduta.", links: [{ label: "Come funziona il laser", href: "/epilazione-laser-carmagnola" }, { label: "Viso", href: "/servizi/epilazione-laser-viso-carmagnola" }, { label: "Corpo", href: "/servizi/epilazione-laser-corpo-carmagnola" }] },
  { name: "Viso", description: "Pulizia professionale, trattamenti singoli e percorsi per la tua pelle.", links: [{ label: "Confronta i trattamenti", href: "/servizi/trattamenti-viso-carmagnola" }, { label: "Pulizia viso", href: "/servizi/pulizia-viso-carmagnola" }] },
  { name: "Mani e piedi", description: "Manicure, semipermanente e varianti di pedicure.", links: [{ label: "Manicure", href: "/servizi/manicure-semipermanente-carmagnola" }, { label: "Confronta i pedicure", href: "/listino-estetica-laser#piedi" }] },
  { name: "Ciglia e sopracciglia", description: "Laminazione ciglia, sopracciglia o combinata.", links: [{ label: "Laminazione e varianti", href: "/servizi/laminazione-ciglia-sopracciglia-carmagnola" }] },
  { name: "Corpo", description: "Scrub, cosmetici e tecnologie da scegliere in studio.", links: [{ label: "Confronta i trattamenti", href: "/servizi/trattamenti-corpo-carmagnola" }, { label: "Percorso Forma", href: "/percorsi/forma" }] },
  { name: "Massaggi", description: "Le manualità e le zone del menu, con durata e prezzo.", links: [{ label: "Confronta i massaggi", href: "/servizi/massaggi-carmagnola" }, { label: "Rilassante", href: "/servizi/massaggio-rilassante-carmagnola" }, { label: "Linfodrenante", href: "/servizi/massaggio-linfodrenante-carmagnola" }] },
  { name: "Ceretta", description: "Le zone e le varianti dell’epilazione a cera nel menu.", links: [{ label: "Ceretta donna", href: "/listino-estetica-laser#ceretta-donna" }, { label: "Ceretta uomo", href: "/listino-estetica-laser#ceretta-uomo" }] },
  { name: "Pressomassaggio", description: "Confronta sedute, durate e abbinamento con bendaggi.", links: [{ label: "Proposte e prezzi", href: "/servizi/pressomassaggio-carmagnola" }] },
];
