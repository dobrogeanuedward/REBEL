import { photographs, type PhotoKey } from "./catalog-visuals";
import { siteConfig } from "./site-config";
export const servicePhotography: Record<string, PhotoKey[]> = {
  "laminazione-ciglia-sopracciglia-carmagnola": [
    "laminazione-ritratto",
    "laminazione-ciglia",
    "laminazione-sopracciglia",
  ],
  "pulizia-viso-carmagnola": [
    "viso-detersione",
    "viso-enzimi",
    "viso-preparazione",
  ],
  "manicure-semipermanente-carmagnola": [
    "mani-smalto",
    "mani-cuticole",
    "mani-finitura",
  ],
  "scrub-corpo-carmagnola": ["scrub-gamba", "corpo-gel", "corpo-materia"],
  "massaggio-rilassante-carmagnola": [
    "massaggio-spalle",
    "massaggio-spalle",
    "corpo-materia",
  ],
  "pedicure-carmagnola": ["pedicure-cura", "pedicure-cura", "scrub-gamba"],
  "pedicure-estetico-carmagnola": [
    "pedicure-cura",
    "pedicure-cura",
    "scrub-gamba",
  ],
  "pedicure-estetico-con-smalto-carmagnola": [
    "pedicure-cura",
    "pedicure-cura",
    "scrub-gamba",
  ],
  "pedicure-semipermanente-carmagnola": [
    "pedicure-cura",
    "pedicure-cura",
    "scrub-gamba",
  ],
  "taglio-unghie-piedi-carmagnola": [
    "pedicure-cura",
    "pedicure-cura",
    "scrub-gamba",
  ],
};
export const beautyPhotographs = [
  {
    key: "laminazione-ritratto",
    title: "Il tuo sguardo, la tua espressione.",
    caption: "Forma e intensità si scelgono insieme, osservando i lineamenti.",
    path: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  },
  {
    key: "laminazione-ciglia",
    title: "Il dettaglio della curva.",
    caption: "Le ciglia naturali e il gesto di applicazione, da vicino.",
    path: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  },
  {
    key: "laminazione-sopracciglia",
    title: "Forma e direzione.",
    caption:
      "Le sopracciglia si pettinano e si osservano prima di concordare l’effetto.",
    path: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  },
  {
    key: "laminazione-routine",
    title: "La cura, dopo.",
    caption: "Piccoli strumenti e indicazioni per la routine quotidiana.",
    path: "/servizi/laminazione-ciglia-sopracciglia-carmagnola",
  },
  {
    key: "mani-smalto",
    title: "Un colore, un gesto preciso.",
    caption: "Il colore prende forma durante la manicure.",
    path: "/servizi/manicure-semipermanente-carmagnola",
  },
  {
    key: "pedicure-cura",
    title: "La cura dei piedi.",
    caption: "Un dettaglio della cura delle cuticole nel pedicure.",
    path: "/servizi/pedicure-carmagnola",
  },
  {
    key: "scrub-gamba",
    title: "La texture sulla pelle.",
    caption: "Lo scrub e le manualità di applicazione sul corpo.",
    path: "/servizi/scrub-corpo-carmagnola",
  },
  {
    key: "massaggio-spalle",
    title: "Un momento per rallentare.",
    caption:
      "Una manualità sulle spalle: la zona e l’intensità si concordano insieme.",
    path: "/servizi/massaggio-rilassante-carmagnola",
  },
  {
    key: "corpo-gel",
    title: "Preparare, applicare.",
    caption: "Un gel cosmetico viene distribuito sulla pelle.",
    path: "/listino-estetica-laser#corpo",
  },
  {
    key: "bendaggi",
    title: "Il tempo della posa.",
    caption: "La preparazione di un bendaggio cosmetico sulla gamba.",
    path: "/listino-estetica-laser#pressomassaggio",
  },
  {
    key: "cera-preparazione",
    title: "Prima del gesto.",
    caption:
      "La preparazione della cera con una spatola: un dettaglio dell’epilazione.",
    path: "/listino-estetica-laser#ceretta-donna",
  },
].map((item) => ({ ...item, ...photographs[item.key as PhotoKey] }));
export const beautyImageSchema = (
  photo: (typeof beautyPhotographs)[number],
) => ({
  "@type": "ImageObject",
  "@id": new URL(photo.src, siteConfig.siteUrl).href + "#image",
  contentUrl: new URL(photo.src, siteConfig.siteUrl).href,
  name: photo.title,
  description: photo.alt,
  caption: photo.caption + " Immagine editoriale illustrativa.",
  width: photo.width,
  height: photo.height,
  representativeOfPage: false,
  about: {
    "@type": "Service",
    url: new URL(photo.path, siteConfig.siteUrl).href,
  },
  creator: { "@id": siteConfig.siteUrl + "/#organization" },
});
