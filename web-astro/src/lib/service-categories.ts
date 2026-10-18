import { menu, durationRange, priceRange } from "./treatment-catalog";
import type { PhotoKey } from "./catalog-visuals";

export type ServiceCategoryKey = "viso" | "corpo" | "pressomassaggio" | "massaggi";
type CategoryGroup = { id: string; name: string; description: string; treatmentIds: string[] };
type CategoryLink = { label: string; href: string; description: string };
export type ServiceCategory = {
  key: ServiceCategoryKey;
  slug: string;
  name: string;
  metaDescription: string;
  title: string;
  emphasis: string;
  lead: string;
  heroPhoto: PhotoKey;
  comparisonTitle: string;
  comparisonIntro: string;
  groups: CategoryGroup[];
  singleTitle: string;
  singleCopy: string;
  pathTitle: string;
  pathCopy: string;
  pathHref: string;
  preparation: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: CategoryLink[];
};

const catalogItems = menu.categories.flatMap((group) => group.items);
const shortScrub = catalogItems.find((item) => item.id === "TR6412965")!;
const longScrub = catalogItems.find((item) => item.id === "TR7161688")!;
const pressureMassage = catalogItems.find((item) => item.id === "TR6498883")!;

export const serviceCategories: ServiceCategory[] = [
  {
    key: "viso", slug: "trattamenti-viso-carmagnola", name: "Trattamenti viso a Carmagnola",
    metaDescription: "Confronta i trattamenti viso REBEL a Carmagnola: pulizia, idratazione, luminosità e contorno occhi. Prezzi, durate e richiesta del servizio che scegli.",
    title: "Trattamenti viso.", emphasis: "La tua pelle, la tua scelta.",
    lead: "Dalla pulizia al trattamento che dedichi alla tua pelle: confronta il menu, scegli il tempo e chiedici un appuntamento nello studio di Carmagnola.",
    heroPhoto: "viso-manualita", comparisonTitle: "Scegli il tuo trattamento viso.",
    comparisonIntro: "Pulizia, cura della pelle o un appuntamento più breve: ogni proposta ha il suo prezzo e la sua durata. La scelta dei passaggi e dei prodotti si definisce in studio.",
    groups: [
      { id: "pulizia", name: "Pulizia viso e varianti", description: "Confronta pulizia purificante, proposta uomo, acidi e ultrasuoni. Per capire i passaggi del servizio trovi anche l’approfondimento dedicato alla pulizia viso.", treatmentIds: ["TR6412964", "TR7161574", "TR7161578", "TR7161579", "TR7161581"] },
      { id: "cura", name: "Cura della pelle e trattamenti specifici", description: "Idratazione, luminosità, tono e altre proposte del menu. Prima di scegliere attivi o tecniche specifiche, parliamo della tua pelle e dei trattamenti recenti.", treatmentIds: ["TR7161565", "TR7161566", "TR7161567", "TR7161569", "TR7161571", "TR7161576", "TR7161636", "TR7161642", "TR7161643", "TR7161645", "TR7161647"] },
      { id: "momenti", name: "Contorno occhi, maschere e momenti express", description: "Confronta le proposte dedicate al contorno occhi, la maschera, il trattamento express e quello illuminante: trovi qui anche le durate più brevi del menu.", treatmentIds: ["TR7161637", "TR7161638", "TR7161640", "TR7161633"] },
    ],
    singleTitle: "Un trattamento, quando lo desideri.",
    singleCopy: "Puoi richiedere una singola pulizia, un trattamento idratante o un’altra proposta del menu. Indica il servizio che ti interessa: prima di iniziare osserviamo la pelle e concordiamo i passaggi.",
    pathTitle: "Un percorso, se cerchi continuità.",
    pathCopy: "I percorsi REBEL partono dalla valutazione e coordinano trattamenti, frequenza e controlli. Puoi confrontare i percorsi viso e scegliere insieme a noi quale approfondire, con prezzo e contenuti spiegati prima di iniziare.",
    pathHref: "/percorsi#viso",
    preparation: [
      { title: "Raccontaci la tua pelle.", text: "Quando ci contatti, indica sensibilità, prodotti che usi e trattamenti recenti. Queste informazioni aiutano a valutare prodotti e passaggi prima della seduta." },
      { title: "Concordiamo cosa fare prima e dopo.", text: "Le indicazioni dipendono dal trattamento scelto. Chiedicele prima dell’appuntamento: al termine ti spieghiamo anche come gestire la cura cosmetica a casa." },
    ],
    faqs: [
      { q: "Devo cominciare sempre dalla pulizia viso?", a: "La pulizia è una delle proposte disponibili. Prima della seduta osserviamo pelle, sensibilità e impurità superficiali: possiamo adattare i passaggi o proporre un trattamento diverso." },
      { q: "Posso scegliere una sola seduta viso?", a: "Sì. Puoi richiedere il singolo servizio dal menu. Se desideri più continuità, durante la valutazione parliamo di frequenza, controlli e costo di un eventuale percorso." },
      { q: "Ci sono trattamenti viso per uomo?", a: "Il menu comprende Uomo – Pulizia Viso e Uomo – Trattamento Viso. Puoi richiedere la voce che ti interessa; la scelta dei prodotti e dei passaggi tiene conto della pelle osservata." },
      { q: "Come scelgo tra servizio, protocollo e percorso?", a: "Il servizio è la singola voce del menu; il protocollo combina passaggi dedicati a un’esigenza. Il percorso parte dalla valutazione e prevede un calendario e controlli concordati. Ti aiutiamo a confrontarli prima di iniziare." },
    ],
    related: [
      { label: "Pulizia viso: il servizio nel dettaglio", href: "/servizi/pulizia-viso-carmagnola", description: "Passaggi, varianti e informazioni prima dell’appuntamento." },
      { label: "Come si sceglie un trattamento viso", href: "/competenze/trattamenti-viso-carmagnola", description: "La guida su valutazione, frequenza e cura cosmetica a casa." },
      { label: "Protocolli viso e corpo", href: "/protocolli-epigenetici", description: "Confronta combinazioni, esigenze e prezzi dei protocolli REBEL." },
    ],
  },
  {
    key: "corpo", slug: "trattamenti-corpo-carmagnola", name: "Trattamenti corpo a Carmagnola",
    metaDescription: "Trattamenti corpo REBEL a Carmagnola: confronta scrub, cosmetici e tecnologie del menu con prezzi, durate e varianti. Scegli un servizio o valuta Forma.",
    title: "Trattamenti corpo.", emphasis: "Il tempo che dedichi a te.",
    lead: "Scrub, cura cosmetica e tecnologie: confronta le proposte del menu corpo o parti dalla valutazione per costruire un percorso REBEL a Carmagnola.",
    heroPhoto: "corpo-gel", comparisonTitle: "Il menu corpo, da confrontare.",
    comparisonIntro: "Qui trovi tutte le voci della categoria Corpo, con prezzi ordinari e durata. Alcuni nomi ricorrono con durate diverse: controlla il tempo indicato prima di scegliere.",
    groups: [
      { id: "cura", name: "Scrub, cosmetici e manualità", description: "Esfoliazione e altre proposte cosmetiche del menu. I due Scrub Corpo hanno lo stesso prezzo ordinario ma tempi diversi: trovi entrambe le voci.", treatmentIds: ["TR6412965", "TR7161688", "TR7161583", "TR7161582", "TR7161592", "TR7161596", "TR7161597", "TR7161667"] },
      { id: "tecnologie", name: "Tecnologie e altre proposte", description: "Radiofrequenza, vacuum, infrarossi e altre voci del listino. La scelta della zona e della proposta si definisce dopo la valutazione, prima di iniziare.", treatmentIds: ["TR7161586", "TR7161587", "TR7161594", "TR7161598", "TR7161599", "TR7161600", "TR7161604", "TR7161682", "TR7161687"] },
    ],
    singleTitle: "Scegli un servizio del menu.",
    singleCopy: "Puoi richiedere un singolo scrub o un trattamento corpo. Per le proposte con più durate, seleziona la variante: verifichiamo insieme zona e modalità prima della conferma.",
    pathTitle: "Valuta il Percorso Forma.",
    pathCopy: "Forma parte dall’obiettivo che desideri affrontare. Dopo la valutazione scegliamo attivi, manualità ed eventuali tecnologie e concordiamo frequenza, costi e controlli. Il calendario si adatta al trattamento e alla persona.",
    pathHref: "/percorsi/forma",
    preparation: [
      { title: "Partiamo dalla zona e dall’obiettivo.", text: "Indicaci che cosa desideri trattare, il tempo disponibile e i trattamenti eseguiti di recente. Segnala anche sensibilità della pelle e indicazioni mediche che hai ricevuto." },
      { title: "Chiedici come preparare la visita.", text: "Le indicazioni cambiano fra scrub, cosmetici e tecnologie. Le concordiamo in base alla proposta scelta; eventuali abbinamenti e altri appuntamenti si valutano prima di iniziare." },
    ],
    faqs: [
      { q: "Perché nel menu ci sono due Scrub Corpo?", a: `Sono due voci distinte del catalogo: ${durationRange(shortScrub.durationMin, shortScrub.durationMax)} a ${priceRange(shortScrub.price)} e ${durationRange(longScrub.durationMin, longScrub.durationMax)} a ${priceRange(longScrub.price)}. Seleziona il tempo che ti interessa quando chiedi disponibilità: ti confermiamo la proposta prima dell’appuntamento.` },
      { q: "Devo acquistare un percorso per un trattamento corpo?", a: "Puoi scegliere una singola seduta dal menu. Se desideri un programma con continuità, puoi valutare Forma: prima di iniziare concordiamo cosa comprende, frequenza e costi." },
      { q: "Posso abbinare scrub, massaggio o tecnologie?", a: "L’abbinamento dipende dalla pelle, dalla zona e dal trattamento. Indicaci tutte le proposte che ti interessano: valutiamo modalità, tempi e come organizzare gli appuntamenti." },
      { q: "In quanto tempo posso aspettarmi un cambiamento?", a: "Dipende dal trattamento, dall’obiettivo e dalla persona. Prima di iniziare parliamo di ciò che ha senso osservare dopo una seduta e di ciò che può richiedere più appuntamenti. Non definiamo risultati uguali per tutti." },
    ],
    related: [
      { label: "Scrub corpo: passaggi e informazioni", href: "/servizi/scrub-corpo-carmagnola", description: "Approfondisci il servizio di esfoliazione e le sue varianti." },
      { label: "Confronta i massaggi", href: "/servizi/massaggi-carmagnola", description: "Le manualità e le zone del menu massaggi, con durata e prezzo." },
      { label: "Come si sceglie un trattamento corpo", href: "/competenze/trattamenti-corpo-carmagnola", description: "La guida su obiettivi, frequenza e organizzazione di un calendario." },
    ],
  },
  {
    key: "pressomassaggio", slug: "pressomassaggio-carmagnola", name: "Pressomassaggio a Carmagnola",
    metaDescription: "Pressomassaggio REBEL a Carmagnola: confronta sedute, durata e prezzi, variante occhi e bendaggi. Scegli il servizio e chiedi disponibilità in studio.",
    title: "Pressomassaggio.", emphasis: "Scegli la tua seduta.",
    lead: "Una seduta singola o una proposta da inserire nel percorso corpo: confronta le tre voci del menu e chiedi disponibilità a REBEL, a Carmagnola.",
    heroPhoto: "percorso-forma", comparisonTitle: "Tre proposte, tempi e prezzi diversi.",
    comparisonIntro: "Il pressomassaggio in studio ha finalità estetica e di benessere. Confronta durata, proposta e prezzo; prima di iniziare verifichiamo con te quale servizio può essere scelto.",
    groups: [
      { id: "sedute", name: "Sedute di pressomassaggio", description: `La voce Pressomassaggio offre le durate ${pressureMassage.options.map((option) => `${option.duration} min`).join(" e ")}. Il menu comprende anche la proposta dedicata agli occhi e l’abbinamento con bendaggi.`, treatmentIds: ["TR6498883", "TR7161625", "TR7161629"] },
    ],
    singleTitle: "Una seduta, con la durata che scegli.",
    singleCopy: "Puoi chiedere una seduta singola, scegliendo fra le durate e le proposte del menu. La conferma avviene dopo aver verificato servizio, disponibilità e informazioni utili prima della seduta.",
    pathTitle: "Nel tuo percorso corpo, se indicato.",
    pathCopy: "Il Percorso Forma può comprendere tecnologie e manualità scelte dopo la valutazione. Il pressomassaggio non è un passaggio obbligatorio: abbinamenti, frequenza e costi vengono spiegati prima di iniziare.",
    pathHref: "/percorsi/forma",
    preparation: [
      { title: "Prima di confermare, parlane con noi.", text: "Comunica condizioni diagnosticate, terapie, interventi, gravidanza o sintomi recenti prima della seduta. In caso di dubbio rimandiamo e chiediamo un parere medico." },
      { title: "Concordiamo la proposta e il comfort.", text: "Ti spieghiamo come si svolge il servizio scelto e come segnalare fastidio. Durante la seduta comunica subito sensazioni insolite: i parametri vengono valutati in base alla persona." },
    ],
    faqs: [
      { q: "Posso prenotare un solo pressomassaggio?", a: "Sì. Puoi chiedere una singola seduta e scegliere una delle durate del menu. Se desideri continuare, frequenza e altri appuntamenti vengono concordati dopo la valutazione." },
      { q: "Pressomassaggio e linfodrenante sono lo stesso servizio?", a: "Il pressomassaggio corporeo utilizza gambali che applicano una compressione sequenziale. Il massaggio linfodrenante è invece manuale. Sono proposte diverse: prima di scegliere valutiamo obiettivo estetico e informazioni sulla persona." },
      { q: "La proposta occhi è uguale a quella con i gambali?", a: "Pressomassaggio Occhi è una voce distinta del menu, con durata e prezzo propri. Quando ci contatti indica la proposta esatta: ti spieghiamo come si svolge prima di confermare l’appuntamento." },
      { q: "Il pressomassaggio cura gonfiore o problemi circolatori?", a: "Il servizio REBEL è estetico e non è una terapia. Gonfiore improvviso, persistente o doloroso e altri sintomi richiedono una valutazione sanitaria. Condizioni diagnosticate e indicazioni mediche vanno comunicate prima della seduta." },
    ],
    related: [
      { label: "Come funziona: sensazioni e precauzioni", href: "/competenze/pressomassaggio-carmagnola", description: "La guida informativa su svolgimento e differenze rispetto al massaggio manuale." },
      { label: "Massaggio linfodrenante manuale", href: "/servizi/massaggio-linfodrenante-carmagnola", description: "Confronta il servizio manuale con il pressomassaggio." },
      { label: "Tutti i trattamenti corpo", href: "/servizi/trattamenti-corpo-carmagnola", description: "Scrub, cosmetici e tecnologie disponibili nel menu corpo." },
    ],
  },
  {
    key: "massaggi", slug: "massaggi-carmagnola", name: "Massaggi a Carmagnola",
    metaDescription: "Massaggi REBEL a Carmagnola: confronta 11 proposte estetiche e di benessere, dal rilassante al linfodrenante. Prezzi, durate, zone e richiesta del servizio.",
    title: "Massaggi.", emphasis: "Il tuo tempo, la tua scelta.",
    lead: "Una zona, una manualità, un momento per te. Confronta gli undici massaggi del menu REBEL e scegli da cosa iniziare, nello studio di Carmagnola.",
    heroPhoto: "massaggio-spalle", comparisonTitle: "Scegli la manualità e il tempo.",
    comparisonIntro: "I massaggi del menu hanno finalità estetica e di benessere. Puoi confrontare zone, durata e prezzo e comunicarci ciò che desideri prima dell’appuntamento.",
    groups: [
      { id: "relax", name: "Relax, schiena e proposta personalizzata", description: "Dal rilassante alle zone schiena e cervicale, fino alle proposte personalizzata e ayurvedica: scegli il tempo che vuoi dedicare alla seduta.", treatmentIds: ["TR6412966", "TR6412968", "TR7161657", "TR7161663", "TR7161678"] },
      { id: "manualita", name: "Linfodrenante e altre manualità", description: "Confronta le singole voci del menu. Prima della seduta parliamo di obiettivo estetico, zona e pressione; il servizio non sostituisce trattamenti sanitari.", treatmentIds: ["TR6412967", "TR7161662", "TR7161677"] },
      { id: "zone", name: "Viso, piedi e abbinamento con scrub", description: "Un’attenzione a una zona specifica oppure la proposta Scrub e Massaggio, con durata e prezzo propri.", treatmentIds: ["TR7161658", "TR7161668", "TR7161665"] },
    ],
    singleTitle: "Puoi partire da un solo massaggio.",
    singleCopy: "Scegli servizio e durata e indica le tue disponibilità. Prima di iniziare concordiamo zona, manualità e pressione; durante la seduta puoi comunicarci come ti senti.",
    pathTitle: "Più appuntamenti, da concordare.",
    pathCopy: "Se desideri continuità puoi valutare altri appuntamenti oppure un percorso corpo. Frequenza, eventuali abbinamenti e costi vengono definiti dopo la valutazione, senza un calendario uguale per tutti.",
    pathHref: "/percorsi/forma",
    preparation: [
      { title: "Indicaci zona e tempo disponibile.", text: "Quando chiedi l’appuntamento, comunica il servizio e la durata desiderati. Se vuoi abbinarlo a uno scrub o a un altro trattamento, segnalalo nella stessa richiesta." },
      { title: "Parliamo di comfort prima di iniziare.", text: "Segnala sensibilità, condizioni diagnosticate, terapie o interventi recenti e le indicazioni mediche ricevute. Concordiamo manualità e pressione; eventuali sintomi vanno valutati in ambito sanitario." },
    ],
    faqs: [
      { q: "Qual è la differenza fra rilassante e linfodrenante?", a: "Il rilassante è dedicato al comfort e al relax. Il linfodrenante è una manualità delicata scelta soprattutto per una sensazione di leggerezza. Prima di scegliere parliamo di obiettivo, zona e informazioni sulla persona." },
      { q: "Posso scegliere solo una zona?", a: "Nel menu trovi proposte dedicate a schiena o cervicale, gambe e schiena, viso e piedi. Ogni voce riporta durata e prezzo: indica quella che ti interessa quando chiedi disponibilità." },
      { q: "Devo prenotare un pacchetto di massaggi?", a: "Puoi chiedere una singola seduta. Se desideri continuare, concordiamo frequenza, tempi e costi dopo il primo confronto. Non è necessario partire da un pacchetto." },
      { q: "Offrite massaggi terapeutici o massoterapia?", a: "I servizi descritti nel menu REBEL hanno finalità estetica e di benessere. Dolore, gonfiore persistente o altri sintomi richiedono una valutazione sanitaria: non vengono trattati come una semplice esigenza estetica." },
    ],
    related: [
      { label: "Il massaggio rilassante nel dettaglio", href: "/servizi/massaggio-rilassante-carmagnola", description: "Svolgimento e informazioni sul servizio dedicato al relax." },
      { label: "Il linfodrenante manuale nel dettaglio", href: "/servizi/massaggio-linfodrenante-carmagnola", description: "Modalità, finalità estetica e informazioni prima dell’appuntamento." },
      { label: "Scrub e cura del corpo", href: "/servizi/trattamenti-corpo-carmagnola", description: "Confronta le altre proposte disponibili nel menu corpo." },
    ],
  },
];

export function getServiceCategory(key: ServiceCategoryKey) {
  return serviceCategories.find((category) => category.key === key)!;
}

export function categoryTreatments(category: ServiceCategory) {
  return category.groups.map((group) => ({
    ...group,
    items: group.treatmentIds.map((id) => {
      const item = catalogItems.find((treatment) => treatment.id === id);
      if (!item) throw new Error(`Missing catalog treatment ${id} in ${category.slug}`);
      return item;
    }),
  }));
}
