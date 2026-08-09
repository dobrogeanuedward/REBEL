import type { RebelWorldId } from "@/lib/rebel-journeys";

export type MapAreaId = "viso" | "corpo" | "epilazione" | "insieme";
export type MapModeId = "esplorare" | "percorso" | "valutare";

export type MapPriority = {
  id: string;
  label: string;
  detail: string;
  world: RebelWorldId;
  firstPath: string;
};

export const areaOptions: Array<{ id: MapAreaId; label: string; detail: string }> = [
  { id: "viso", label: "Viso", detail: "Luce, comfort, equilibrio, tono o qualità nel tempo." },
  { id: "corpo", label: "Corpo", detail: "Leggerezza, tono, compattezza o rimodellamento." },
  { id: "epilazione", label: "Epilazione", detail: "Riduzione progressiva della ricrescita." },
  { id: "insieme", label: "Non lo so ancora", detail: "Partiamo dalla priorità che senti più vicina." },
];

export const prioritiesByArea: Record<MapAreaId, MapPriority[]> = {
  viso: [
    { id: "comfort", label: "Comfort e protezione", detail: "La pelle tira, reagisce o perde equilibrio.", world: "glow", firstPath: "barrier" },
    { id: "luce", label: "Luce e uniformità", detail: "La pelle appare spenta o il tono non è uniforme.", world: "glow", firstPath: "glow" },
    { id: "tono", label: "Tono e qualità nel tempo", detail: "Vuoi lavorare su elasticità, compattezza e continuità.", world: "longevity", firstPath: "longevity" },
  ],
  corpo: [
    { id: "leggerezza", label: "Leggerezza e drenaggio", detail: "Pesantezza o ritenzione sono la priorità percepita.", world: "forma", firstPath: "forma" },
    { id: "compattezza", label: "Tono e compattezza", detail: "Vuoi costruire un programma corpo con controlli.", world: "forma", firstPath: "forma" },
    { id: "peli-corpo", label: "Gestione della ricrescita", detail: "Il tuo punto di partenza è l’epilazione progressiva.", world: "liberta", firstPath: "liberta" },
  ],
  epilazione: [
    { id: "laser-viso", label: "Aree viso", detail: "Vuoi valutare una o più piccole aree.", world: "liberta", firstPath: "liberta" },
    { id: "laser-corpo", label: "Aree corpo", detail: "Vuoi definire zone, calendario e prezzo.", world: "liberta", firstPath: "liberta" },
    { id: "laser-misto", label: "Viso e corpo", detail: "Vuoi costruire un programma su più aree.", world: "liberta", firstPath: "liberta" },
  ],
  insieme: [
    { id: "insieme-luce", label: "Vorrei vedere più luce", detail: "Partiamo dalla qualità percepita della pelle.", world: "glow", firstPath: "skin-reset" },
    { id: "insieme-tempo", label: "Vorrei prendermene cura nel tempo", detail: "Partiamo da tono, elasticità e continuità.", world: "longevity", firstPath: "longevity" },
    { id: "insieme-corpo", label: "Vorrei sentirmi più leggera", detail: "Partiamo dalla valutazione corpo.", world: "forma", firstPath: "forma" },
    { id: "insieme-liberta", label: "Vorrei semplificare la gestione dei peli", detail: "Partiamo da zona, pelle e caratteristiche del pelo.", world: "liberta", firstPath: "liberta" },
  ],
};

export const modeOptions: Array<{ id: MapModeId; label: string; detail: string }> = [
  { id: "esplorare", label: "Capire un trattamento", detail: "Voglio prima leggere bene materia, metodo e prezzo." },
  { id: "percorso", label: "Costruire un percorso", detail: "Cerco una sequenza con frequenza e controlli." },
  { id: "valutare", label: "Valutarlo insieme", detail: "Preferisco non scegliere da sola prima della visita." },
];

export const worldResults: Record<RebelWorldId, {
  name: string;
  eyebrow: string;
  summary: string;
  evaluate: string;
  paths: Array<{ slug: string; name: string }>;
}> = {
  glow: {
    name: "Glow",
    eyebrow: "Luce · comfort · equilibrio",
    summary: "Il tuo orientamento apre il mondo viso dedicato a preparazione, barriera, equilibrio, luminosità e uniformità.",
    evaluate: "In studio osserviamo texture, comfort, idratazione, uniformità e ricettività prima di scegliere il primo percorso.",
    paths: [
      { slug: "skin-reset", name: "Skin Reset" }, { slug: "barrier", name: "Barrier" },
      { slug: "balance", name: "Balance" }, { slug: "glow", name: "Glow" }, { slug: "white", name: "Uniformare · White" },
    ],
  },
  longevity: {
    name: "Longevity",
    eyebrow: "Struttura · qualità nel tempo",
    summary: "Il tuo orientamento apre il mondo dedicato a tono, elasticità, compattezza e continuità della cura.",
    evaluate: "In studio distinguiamo la priorità del momento e decidiamo se partire da materia, manualità o tecnologia.",
    paths: [{ slug: "structure", name: "Structure" }, { slug: "longevity", name: "Longevity" }],
  },
  forma: {
    name: "Forma",
    eyebrow: "Corpo · rimodellare",
    summary: "Il tuo orientamento apre il programma corpo costruito su tessuti, tono, microcircolo, ritenzione e obiettivo.",
    evaluate: "In studio definiamo una priorità e valutiamo quali direzioni, manualità e tecnologie abbiano senso per te.",
    paths: [{ slug: "forma", name: "Forma" }],
  },
  liberta: {
    name: "Libertà",
    eyebrow: "Epilazione progressiva",
    summary: "Il tuo orientamento apre il percorso in cui zona, fototipo, caratteristiche del pelo e calendario vengono definiti prima di iniziare.",
    evaluate: "In studio raccogliamo le informazioni utili, definiamo i parametri e verifichiamo prezzo e frequenza per ogni area.",
    paths: [{ slug: "liberta", name: "Libertà" }],
  },
};
