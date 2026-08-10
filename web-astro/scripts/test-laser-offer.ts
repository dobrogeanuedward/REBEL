import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { laserOffer, laserOfferContactMessage } from "../src/lib/laser-offer.ts";

const projectDir = fileURLToPath(new URL("../", import.meta.url));
const canonicalOfferPath = join(projectDir, "src/lib/laser-offer.ts");
const failures: string[] = [];

const check = (condition: unknown, message: string) => {
  if (!condition) failures.push(message);
};

const parseItalianEuro = (value: string) => Number(value.replace(/\s*€/u, "").replace(".", "").replace(",", "."));

check(
  parseItalianEuro(laserOffer.zone.price) === laserOffer.zone.amount,
  "Il prezzo testuale della singola zona non coincide con l’importo numerico.",
);
check(
  parseItalianEuro(laserOffer.totalBody.price) === laserOffer.totalBody.amount,
  "Il prezzo testuale Total Body non coincide con l’importo numerico.",
);
check(
  laserOffer.zone.amount * laserOffer.totalBody.zones === laserOffer.totalBody.amount,
  "Il prezzo Total Body non coincide con il numero di zone moltiplicato per il prezzo unitario.",
);

if (laserOffer.discount.enabled) {
  check(laserOffer.discount.value === "−70%", "La campagna approvata deve mostrare il −70%.");
  check(laserOffer.discount.label === "offerta speciale", "Lo sconto attivo richiede un’etichetta comprensibile.");
  check(laserOffer.discount.referencePrice === null, "Non va inventato un prezzo di riferimento non comunicato.");
} else {
  check(laserOffer.discount.value === null, "Una percentuale non documentata non deve restare nel sorgente quando lo sconto è disattivato.");
  check(laserOffer.discount.label === null, "Lo sconto disattivato non deve mantenere un’etichetta promozionale.");
  check(laserOffer.discount.referencePrice === null, "Lo sconto disattivato non deve dichiarare un prezzo di riferimento.");
}

check(laserOffer.zone.sessionLabel === "1 seduta", "Il prezzo della zona deve essere esplicitamente riferito a una seduta.");
check(laserOffer.totalBody.sessionLabel === "1 seduta", "Il prezzo Total Body deve essere esplicitamente riferito a una seduta.");
check(laserOffer.zoneCounting.note.includes("inguine") && laserOffer.zoneCounting.note.includes("2 zone"), "Il conteggio deve includere l’esempio dell’inguine come due zone.");
check(laserOffer.zoneCounting.note.includes("confermiamo sempre il numero"), "Il numero di zone deve essere confermato senza generalizzare il conteggio ad altre aree.");
check(laserOffer.zoneCounting.shortNote.includes("Inguine: 2 zone"), "La sintesi della landing deve mantenere visibile l’esempio dell’inguine.");
check(laserOffer.validity.expiresAt === null, "La promo non deve avere una scadenza inventata.");
check(laserOffer.validity.label.includes("fino a nuova comunicazione"), "La durata aperta della promo deve essere descritta in modo chiaro.");

if (laserOffer.financing.enabled) {
  check(laserOffer.financing.provider === "PagoDIL", "La dilazione deve indicare PagoDIL.");
  check(laserOffer.financing.lender === "Cofidis", "La dilazione deve indicare Cofidis.");
  check(laserOffer.financing.maxInstallments > 0, "Il numero massimo di rate deve essere positivo.");
  check(laserOffer.financing.firstDebitDays > 0, "La decorrenza del primo addebito deve essere esplicita.");
  check(
    laserOffer.financing.scope.includes("percorso completo personalizzato"),
    "La dilazione deve restare limitata al percorso completo personalizzato.",
  );
  check(
    laserOffer.financing.note.includes("approvazione di Cofidis"),
    "Le condizioni devono indicare che il servizio è soggetto all’approvazione di Cofidis.",
  );
  check(laserOffer.financing.title.includes(String(laserOffer.financing.maxInstallments)), "Il titolo della dilazione deve derivare dal numero massimo di rate.");
  check(laserOffer.financing.detail.includes(String(laserOffer.financing.firstDebitDays)), "Il dettaglio della dilazione deve derivare dalla decorrenza configurata.");
}

check(laserOffer.headline.includes(laserOffer.zone.price), "Il titolo della promo deve derivare dal prezzo canonico della zona.");
check(laserOffer.stickyLabel.includes(laserOffer.zone.price), "La sticky CTA deve derivare dal prezzo canonico della zona.");
check(laserOfferContactMessage.includes(laserOffer.zone.price), "Il messaggio contatti deve includere il prezzo canonico della zona.");
check(laserOfferContactMessage.includes(laserOffer.totalBody.price), "Il messaggio contatti deve includere il prezzo canonico Total Body.");

const sourceExtensions = new Set([".astro", ".ts", ".tsx", ".js", ".mjs"]);
const sourceRoots = [join(projectDir, "src"), join(projectDir, "public")];
const forbiddenDuplicates = /(?:(?<!\d)5,90\s*(?:€|euro)|(?<!\d)59,00\s*€|(?<!\d)24\s+rate|(?<!\d)60\s+giorni|(?:−|-|–)\s*70\s*%|sconto\s+(?:del\s+)?70\s*%)/giu;

const visit = (directory: string) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(path);
      continue;
    }
    if (!sourceExtensions.has(extname(entry.name)) || path === canonicalOfferPath) continue;

    const source = readFileSync(path, "utf8");
    const matches = [...source.matchAll(forbiddenDuplicates)].map((match) => match[0]);
    if (matches.length > 0) {
      failures.push(
        `${relative(projectDir, path)} duplica dati commerciali della promo: ${[...new Set(matches)].join(", ")}. Usa laserOffer.`,
      );
    }
  }
};

for (const root of sourceRoots) visit(root);

if (failures.length > 0) {
  console.error(`[laser-offer] ${failures.length} controlli non superati:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("[laser-offer] OK: prezzi, condizioni e sorgente canonica verificati.");
