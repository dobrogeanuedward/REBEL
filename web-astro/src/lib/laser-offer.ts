const formatEuro = (amount: number) => new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(amount);

const zoneAmount = 5.9;
const totalBodyZones = 10;
const totalBodyAmount = 59;
const zonePrice = formatEuro(zoneAmount);
const totalBodyPrice = formatEuro(totalBodyAmount);
const totalBodyDetail = `${totalBodyZones} zone`;
const sessionLabel = "1 seduta";
const discountValue = "−70%";
const financingProvider = "PagoDIL";
const financingLender = "Cofidis";
const maxInstallments = 24;
const firstDebitDays = 60;

/**
 * Canonical commercial copy for the current REBEL laser campaign.
 *
 * Keep the promotional price separate from the ordinary Libertà price list:
 * the campaign can change without rewriting the underlying journey or service
 * prices. No fixed expiry is exposed: the campaign remains active until a
 * later communication.
 */
export const laserOffer = {
  id: "promo-laser",
  campaignLabel: "Promo epilazione laser",
  locationLabel: "REBEL · Carmagnola",
  discount: {
    enabled: true,
    value: discountValue,
    label: "offerta speciale",
    referencePrice: null,
  },
  headline: `Epilazione laser a ${zonePrice} per zona.`,
  summary:
    "Prezzo riferito a una singola seduta, con Lumina X1 Pro di THORY e raffreddamento a contatto ICE Polar. Prima di iniziare valutiamo pelle, pelo e zone da trattare.",
  zone: {
    amount: zoneAmount,
    price: zonePrice,
    label: "1 zona",
    sessionLabel,
  },
  totalBody: {
    amount: totalBodyAmount,
    price: totalBodyPrice,
    label: "Total Body",
    zones: totalBodyZones,
    detail: totalBodyDetail,
    sessionLabel,
  },
  zoneCounting: {
    label: "Come contiamo le zone",
    shortNote: "Inguine: 2 zone. Confermiamo sempre il conteggio prima di prenotare.",
    note: "Il conteggio segue il listino REBEL. Per esempio, l’inguine corrisponde a 2 zone; ti confermiamo sempre il numero prima di prenotare.",
  },
  validity: {
    expiresAt: null,
    label: "Promo attiva fino a nuova comunicazione.",
  },
  technology: "Lumina X1 Pro · ICE Polar",
  financing: {
    enabled: true,
    provider: financingProvider,
    lender: financingLender,
    officialUrl: "https://pagodil.it/",
    maxInstallments,
    firstDebitDays,
    title: `Fino a ${maxInstallments} rate per il percorso completo`,
    detail: `Tasso zero · prima rata dopo ${firstDebitDays} giorni`,
    scope:
      "PagoDIL è disponibile quando attivi il percorso completo personalizzato. Zone, sedute e importo vengono definiti dopo la valutazione e dipendono dalla persona.",
    note:
      `Il numero di rate dipende dall’importo ed è soggetto all’approvazione di ${financingLender}. Ti spieghiamo tutte le condizioni prima dell’attivazione.`,
    faq:
      `PagoDIL è disponibile quando attivi il percorso completo personalizzato. Zone, sedute e importo vengono definiti dopo la valutazione e dipendono dalla persona. Puoi suddividere l’importo fino a ${maxInstallments} rate a tasso zero, con la prima rata dopo ${firstDebitDays} giorni. Il numero di rate dipende dall’importo ed è soggetto all’approvazione di ${financingLender}.`,
  },
  disclaimer:
    "La promozione è separata dal listino ordinario del Percorso Libertà. Prima di iniziare verifichiamo se il trattamento può essere indicato e definiamo zone e calendario.",
  landingPath: "/promo-epilazione-laser-carmagnola",
  contactPath: "/contatti?source=promo-laser&percorso=liberta",
  stickyLabel: `Promo · ${zonePrice} a zona`,
  imageSlot: "services.laser.handpiece.desktop",
  imageMobileSlot: "services.laser.handpiece.mobile",
} as const;

export const laserOfferContactMessage =
  `Mi interessa la promo epilazione laser: ${zonePrice} per zona, per seduta, oppure Total Body a ${totalBodyPrice} per ${totalBodyDetail}, per seduta. Vorrei conoscere disponibilità e prenotare la valutazione.`;
