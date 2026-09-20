export type JourneySlide = { title: string; text: string; src: string; preview: string };
export type JourneyCarousel = { name: string; slides: JourneySlide[] };

// Only journey pages and the journey index consume this registry. Home photographs remain independent.
export const journeyCarousels: Record<string, JourneyCarousel> = {
  "skin-reset": {
    "name": "Skin Reset",
    "slides": [
      {
        "title": "Il primo passo per la tua pelle.",
        "text": "Il trattamento che prepara la pelle prima di un percorso dedicato a esigenze più specifiche.",
        "src": "/img/percorsi-editoriali/skin-reset/01-skin-reset-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/01-skin-reset-copertina-640.webp"
      },
      {
        "title": "Spenta. Ruvida. Irregolare.",
        "text": "Valutiamo Skin Reset quando la pelle appare spenta, la superficie è ruvida o la grana è irregolare.",
        "src": "/img/percorsi-editoriali/skin-reset/02-skin-reset-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/02-skin-reset-quando-sceglierlo-640.webp"
      },
      {
        "title": "Prima osserviamo. Poi scegliamo.",
        "text": "Valutiamo grana, sensibilità e idratazione. Scegliamo detersione ed esfoliazione e osserviamo la risposta per definire il passo successivo.",
        "src": "/img/percorsi-editoriali/skin-reset/03-skin-reset-ascolto-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/03-skin-reset-ascolto-valutazione-640.webp"
      },
      {
        "title": "Gli attivi, scelti per te.",
        "text": "Acido mandelico per l’esfoliazione superficiale; bromelina e papaina, enzimi di ananas e papaya; perlite e matrice NMF per comfort e idratazione. La combinazione viene definita dopo la valutazione.",
        "src": "/img/percorsi-editoriali/skin-reset/04-skin-reset-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/04-skin-reset-attivi-640.webp"
      },
      {
        "title": "Botaniche e minerali.",
        "text": "Avena biologica, ananas, papaya e ingredienti minerali accompagnano la preparazione della pelle.",
        "src": "/img/percorsi-editoriali/skin-reset/05-skin-reset-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/05-skin-reset-botaniche-640.webp"
      },
      {
        "title": "Il valore delle mani.",
        "text": "Prodotti cosmetici e gesti professionali vengono adattati alla pelle. Le eventuali tecnologie si valutano durante la consulenza.",
        "src": "/img/percorsi-editoriali/skin-reset/06-skin-reset-manualita-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/06-skin-reset-manualita-640.webp"
      },
      {
        "title": "E dopo il reset?",
        "text": "Dopo la preparazione valutiamo Barrier, Balance, Glow, White, Structure o Longevity in base alle esigenze osservate.",
        "src": "/img/percorsi-editoriali/skin-reset/07-skin-reset-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/07-skin-reset-continuita-640.webp"
      },
      {
        "title": "Inizia dalla tua pelle.",
        "text": "Da €69, circa 60 minuti. Trattamento e prezzo finale si definiscono dopo la valutazione. Telefono e WhatsApp: 351 691 9416. Viale Barbaroux 20, Carmagnola.",
        "src": "/img/percorsi-editoriali/skin-reset/08-skin-reset-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/skin-reset/08-skin-reset-prenotazione-640.webp"
      }
    ]
  },
  "barrier": {
    "name": "Barrier",
    "slides": [
      {
        "title": "Ritrova il comfort della tua pelle.",
        "text": "Barrier è il percorso viso REBEL dedicato a idratazione, barriera cutanea e comfort.",
        "src": "/img/percorsi-editoriali/barrier/01-barrier-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/01-barrier-copertina-640.webp"
      },
      {
        "title": "Quando la pelle chiede comfort.",
        "text": "La pelle tira dopo la detersione, appare disidratata o reagisce facilmente ai prodotti e ai cambiamenti di routine.",
        "src": "/img/percorsi-editoriali/barrier/02-barrier-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/02-barrier-quando-sceglierlo-640.webp"
      },
      {
        "title": "Si parte da te.",
        "text": "Ascoltiamo sensazioni, reattività e routine. Osserviamo idratazione e sensibilità. Scegliamo prodotti e manualità per la tua pelle.",
        "src": "/img/percorsi-editoriali/barrier/03-barrier-ascolto-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/03-barrier-ascolto-valutazione-640.webp"
      },
      {
        "title": "Idratare. Sostenere. Proteggere.",
        "text": "Acido ialuronico multi-peso, ceramidi e lipidi, vitamina B12: attivi scelti in base alle condizioni della pelle.",
        "src": "/img/percorsi-editoriali/barrier/04-barrier-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/04-barrier-attivi-640.webp"
      },
      {
        "title": "Il lato botanico del comfort.",
        "text": "Calendula e manna sono gli estratti vegetali della formula Barrier che accompagnano la cura della barriera.",
        "src": "/img/percorsi-editoriali/barrier/05-barrier-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/05-barrier-botaniche-640.webp"
      },
      {
        "title": "Gesti delicati. Scelte precise.",
        "text": "Prodotti cosmetici e tecniche manuali sono alla base del percorso. Le eventuali tecnologie vengono valutate solo se compatibili con la sensibilità della pelle.",
        "src": "/img/percorsi-editoriali/barrier/06-barrier-manualita-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/06-barrier-manualita-640.webp"
      },
      {
        "title": "La tua pelle cambia. Il percorso si adatta.",
        "text": "Tra una seduta e l’altra osserviamo comfort, sensazioni e cambiamenti. Rivediamo frequenza e abbinamenti secondo la risposta della pelle e la routine.",
        "src": "/img/percorsi-editoriali/barrier/07-barrier-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/07-barrier-continuita-640.webp"
      },
      {
        "title": "Dai spazio al comfort.",
        "text": "Da €79, circa 60 minuti. Trattamento e prezzo finale si definiscono dopo la valutazione. Prenota al 351 691 9416, telefono e WhatsApp. Viale Barbaroux 20, Carmagnola.",
        "src": "/img/percorsi-editoriali/barrier/08-barrier-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/barrier/08-barrier-prenotazione-640.webp"
      }
    ]
  },
  "balance": {
    "name": "Balance",
    "slides": [
      {
        "title": "La pelle, in equilibrio.",
        "text": "Lucidità · Impurità · Grana\nPercorso viso",
        "src": "/img/percorsi-editoriali/balance/01-balance-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/01-balance-copertina-640.webp"
      },
      {
        "title": "Lucidità.\nImpurità.\nGrana irregolare.",
        "text": "Non tutte le pelli richiedono la stessa intensità.\nBalance parte dalla sensibilità della tua pelle.",
        "src": "/img/percorsi-editoriali/balance/02-balance-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/02-balance-quando-sceglierlo-640.webp"
      },
      {
        "title": "Osservare, prima di scegliere.",
        "text": "Valutiamo lucidità, pori, comfort e sensibilità.\nAttivi e intensità si definiscono da qui.",
        "src": "/img/percorsi-editoriali/balance/03-balance-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/03-balance-valutazione-640.webp"
      },
      {
        "title": "Una combinazione.\nLa tua.",
        "text": "Acido salicilico + azelaico\nDue attivi del percorso.\n\nZinco, magnesio, rame, ferro e silicio\nIl complesso minerale.\n\nKombucha + CARYSOFT PROBIO\nI componenti fermentati.\n\nScelti dopo la valutazione della pelle.",
        "src": "/img/percorsi-editoriali/balance/04-balance-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/04-balance-attivi-640.webp"
      },
      {
        "title": "Il lato botanico.",
        "text": "Bixa orellana\nEstratto vegetale presente nella formula Balance.\n\nKombucha\nIngrediente fermentato presente nella formula Balance.",
        "src": "/img/percorsi-editoriali/balance/05-balance-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/05-balance-botaniche-640.webp"
      },
      {
        "title": "Il gesto segue la pelle.",
        "text": "Prodotti cosmetici e manualità vengono calibrati sulle esigenze osservate.\nDermabrasione e ozono possono entrare nel percorso dopo la valutazione.",
        "src": "/img/percorsi-editoriali/balance/06-balance-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/06-balance-metodo-640.webp"
      },
      {
        "title": "L’equilibrio si segue.",
        "text": "OSSERVARE\nCome risponde la pelle.\n\nADATTARE\nIntensità e frequenza.\n\nCONTINUARE\nCon controlli e routine.",
        "src": "/img/percorsi-editoriali/balance/07-balance-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/07-balance-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €79 · circa 60 min\n\nAttivi, frequenza e prezzo vengono definiti dopo aver valutato sensibilità e caratteristiche della pelle.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/balance/08-balance-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/balance/08-balance-prenotazione-640.webp"
      }
    ]
  },
  "glow": {
    "name": "Glow",
    "slides": [
      {
        "title": "Fai spazio alla luce.",
        "text": "La tua luce, ogni giorno.\nIlluminare · Viso\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/glow/01-glow-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/01-glow-copertina-640.webp"
      },
      {
        "title": "Quando la pelle perde luce.",
        "text": "La pelle appare spenta, stanca o poco uniforme.\n\nLavorare su luminosità e uniformità rispettando caratteristiche e sensibilità della pelle.",
        "src": "/img/percorsi-editoriali/glow/02-glow-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/02-glow-quando-sceglierlo-640.webp"
      },
      {
        "title": "La preparazione conta.",
        "text": "Quando serve, Skin Reset prepara la pelle prima di iniziare Glow.",
        "src": "/img/percorsi-editoriali/glow/03-glow-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/03-glow-valutazione-640.webp"
      },
      {
        "title": "Gli attivi, scelti per te.",
        "text": "Vitamina C stabilizzata\nUno degli attivi principali della formula Glow.\n\nAcido ialuronico\nContribuisce all’idratazione e al comfort della pelle.\n\nAcido mandelico\nPuò essere scelto per l’esfoliazione, se la pelle lo consente.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/glow/04-glow-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/04-glow-attivi-640.webp"
      },
      {
        "title": "Il lato botanico.",
        "text": "Melograno\nEstratto vegetale presente nella formula Glow.\n\nVinaccioli\nIngrediente vegetale presente nel percorso Glow.",
        "src": "/img/percorsi-editoriali/glow/05-glow-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/05-glow-botaniche-640.webp"
      },
      {
        "title": "Cosmetici.\nManualità.\nScelte mirate.",
        "text": "Glow parte da prodotti cosmetici e tecniche manuali scelti per la tua pelle. Aggiungiamo una tecnologia solo quando può essere utile.",
        "src": "/img/percorsi-editoriali/glow/06-glow-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/06-glow-metodo-640.webp"
      },
      {
        "title": "La luce continua, a casa.",
        "text": "ROUTINE ESSENZIALE\nDà continuità al lavoro svolto in studio.\n\nCONTROLLI\nPer osservare come risponde la pelle.",
        "src": "/img/percorsi-editoriali/glow/07-glow-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/07-glow-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €89 · circa 60 min\n\nIl prezzo finale dipende dagli attivi scelti, dall’eventuale preparazione e dalle tecnologie concordate.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/glow/08-glow-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/glow/08-glow-prenotazione-640.webp"
      }
    ]
  },
  "white": {
    "name": "White",
    "slides": [
      {
        "title": "Il tuo tono, più uniforme.",
        "text": "Un tono più uniforme.\nUniformare · Viso\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/white/01-white-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/white/01-white-copertina-640.webp"
      },
      {
        "title": "Uniformare, rispettando la pelle.",
        "text": "Noti macchie o differenze di tono che rendono l’incarnato meno uniforme.\n\nLavorare sull’uniformità del tono rispettando sensibilità e caratteristiche della pelle.",
        "src": "/img/percorsi-editoriali/white/02-white-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/white/02-white-quando-sceglierlo-640.webp"
      },
      {
        "title": "Ogni tono ha una storia.",
        "text": "Valutiamo distribuzione, sensibilità, routine ed esposizione prima di scegliere la combinazione.",
        "src": "/img/percorsi-editoriali/white/03-white-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/white/03-white-valutazione-640.webp"
      },
      {
        "title": "Gli attivi, scelti per te.",
        "text": "Acido tranexamico + kojico\nDue attivi che possiamo combinare nel percorso White.\n\nAcido azelaico + ferulico\nUn’altra combinazione possibile nel percorso White.\n\nWhite Satsuma complex\nComplesso cosmetico dedicato all’uniformità del tono.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/white/04-white-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/white/04-white-attivi-640.webp"
      },
      {
        "title": "Il lato botanico.",
        "text": "Boerhavia diffusa\nEstratto vegetale presente nella formula White.\n\nSatsuma\nComponente vegetale del complesso cosmetico.",
        "src": "/img/percorsi-editoriali/white/05-white-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/white/05-white-botaniche-640.webp"
      },
      {
        "title": "La combinazione si sceglie.",
        "text": "Il percorso parte dall’analisi della pelle e dalla scelta degli attivi. Valutiamo l’uso di una tecnologia solo dopo aver osservato la pelle.",
        "src": "/img/percorsi-editoriali/white/06-white-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/white/06-white-metodo-640.webp"
      },
      {
        "title": "Osservare.\nProteggere.\nContinuare.",
        "text": "Ai controlli osserviamo i cambiamenti e, se utile, aggiorniamo la routine consigliata.",
        "src": "/img/percorsi-editoriali/white/07-white-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/white/07-white-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €99 · circa 60 min\n\nIl prezzo della seduta viene confermato dopo la valutazione; gli eventuali prodotti per casa non sono inclusi.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/white/08-white-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/white/08-white-prenotazione-640.webp"
      }
    ]
  },
  "structure": {
    "name": "Structure",
    "slides": [
      {
        "title": "Sostieni la tua pelle.",
        "text": "Sostieni la tua pelle.\nSostenere · Viso\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/structure/01-structure-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/01-structure-copertina-640.webp"
      },
      {
        "title": "Tono. Elasticità. Compattezza.",
        "text": "La pelle appare meno tonica, elastica o compatta.\n\nLavorare su tono, elasticità e compattezza con attivi, tecniche manuali ed eventuali tecnologie scelti dopo la valutazione.",
        "src": "/img/percorsi-editoriali/structure/02-structure-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/02-structure-quando-sceglierlo-640.webp"
      },
      {
        "title": "Una scelta, dopo la valutazione.",
        "text": "Durante la valutazione decidiamo se partire da attivi, tecniche manuali o tecnologia.",
        "src": "/img/percorsi-editoriali/structure/03-structure-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/03-structure-valutazione-640.webp"
      },
      {
        "title": "Tre famiglie di attivi.",
        "text": "Peptidi selezionati\nTra gli attivi principali della formula Structure.\n\nAcido ialuronico multiforme\nScelto per sostenere l’idratazione e il comfort della pelle.\n\nCoenzima Q10\nUno degli attivi della formula Structure.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/structure/04-structure-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/04-structure-attivi-640.webp"
      },
      {
        "title": "Il lato botanico.",
        "text": "Centella\nEstratto vegetale presente nella formula Structure.\n\nOlivello spinoso\nEstratto vegetale presente nella formula Structure.",
        "src": "/img/percorsi-editoriali/structure/05-structure-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/05-structure-botaniche-640.webp"
      },
      {
        "title": "La tecnologia segue l’obiettivo.",
        "text": "Radiofrequenza · Plasma · Needling · Vacuum ed endomassaggio viso\n\nDopo aver osservato la pelle, scegliamo insieme se e quale tecnologia utilizzare.",
        "src": "/img/percorsi-editoriali/structure/06-structure-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/06-structure-metodo-640.webp"
      },
      {
        "title": "Il programma si adatta.",
        "text": "Tra una seduta e l’altra osserviamo come cambia la pelle e aggiorniamo il programma quando necessario.",
        "src": "/img/percorsi-editoriali/structure/07-structure-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/07-structure-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €109 · circa 60 min\n\nIl prezzo varia in base agli attivi e all’eventuale tecnologia scelta.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/structure/08-structure-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/structure/08-structure-prenotazione-640.webp"
      }
    ]
  },
  "longevity": {
    "name": "Longevity",
    "slides": [
      {
        "title": "La cura continua.",
        "text": "La cura continua.\nMantenere · Viso\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/longevity/01-longevity-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/01-longevity-copertina-640.webp"
      },
      {
        "title": "Dare tempo alla cura.",
        "text": "Vuoi prenderti cura della pelle nel tempo, con attenzione a idratazione, luminosità, tono ed elasticità.\n\nDare continuità alla cura della pelle con sedute, controlli e una routine adatta alle tue abitudini.",
        "src": "/img/percorsi-editoriali/longevity/02-longevity-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/02-longevity-quando-sceglierlo-640.webp"
      },
      {
        "title": "La pelle cambia. La cura la segue.",
        "text": "Valutiamo barriera, luminosità, tono, elasticità e abitudini.",
        "src": "/img/percorsi-editoriali/longevity/03-longevity-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/03-longevity-valutazione-640.webp"
      },
      {
        "title": "Nutrire la continuità.",
        "text": "Ceramidi + lipidi\nScelti per sostenere la barriera della pelle nel tempo.\n\nAcido ialuronico multi-peso\nScelto per sostenere l’idratazione della pelle.\n\nVitamina C + peptidi\nAttivi scelti in base alle esigenze osservate.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/longevity/04-longevity-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/04-longevity-attivi-640.webp"
      },
      {
        "title": "Una botanica quotidiana.",
        "text": "Avena + calendula\nEstratti scelti per il comfort della pelle.\n\nAloe + curcuma\nEstratti vegetali complementari del percorso.",
        "src": "/img/percorsi-editoriali/longevity/05-longevity-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/05-longevity-botaniche-640.webp"
      },
      {
        "title": "Ascoltare, poi adattare.",
        "text": "In base a come cambia la pelle, il percorso può includere attivi, tecniche manuali o tecnologie diverse.",
        "src": "/img/percorsi-editoriali/longevity/06-longevity-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/06-longevity-metodo-640.webp"
      },
      {
        "title": "Due appuntamenti. Un filo continuo.",
        "text": "Seduta singola da €79.\nFormula mensile: due sedute a €149.\nControllo cutaneo trimestrale incluso.\nProdotti per casa esclusi.",
        "src": "/img/percorsi-editoriali/longevity/07-longevity-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/07-longevity-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €79 · circa 60 min\n\nSeduta singola da €79. Formula mensile: due sedute a €149, con controllo cutaneo trimestrale incluso. Prodotti per casa esclusi.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/longevity/08-longevity-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/longevity/08-longevity-prenotazione-640.webp"
      }
    ]
  },
  "forma": {
    "name": "Forma",
    "slides": [
      {
        "title": "Il tuo corpo, il tuo percorso.",
        "text": "Il tuo corpo, il tuo percorso.\nRimodellare · Corpo\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/forma/01-forma-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/01-forma-copertina-640.webp"
      },
      {
        "title": "Da dove vuoi partire?",
        "text": "Avverti pesantezza o vuoi lavorare su tono, compattezza e aspetto della silhouette.\n\nLavorare sulla priorità che hai scelto con un programma adatto alla zona e al tempo che puoi dedicargli.",
        "src": "/img/percorsi-editoriali/forma/02-forma-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/02-forma-quando-sceglierlo-640.webp"
      },
      {
        "title": "Un programma che ti somiglia.",
        "text": "Osserviamo la zona, il tono, le sensazioni che avverti, le tue abitudini e il tempo disponibile.",
        "src": "/img/percorsi-editoriali/forma/03-forma-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/03-forma-valutazione-640.webp"
      },
      {
        "title": "Quattro formule, esigenze diverse.",
        "text": "DREN · meliloto + rutina\nFormula con meliloto e rutina.\n\nSLIM · guaranà + fucus\nFormula cosmetica con guaranà e fucus.\n\nPHC · L-carnitina + fosfatidilcolina\nFormula con L-carnitina e fosfatidilcolina.\n\nTON · kigelia + Lythrum\nFormula con estratti di kigelia e Lythrum.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/forma/04-forma-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/04-forma-attivi-640.webp"
      },
      {
        "title": "Il lato vegetale di Forma.",
        "text": "Fumaria + cardo mariano\nEstratti vegetali presenti nella formula DREN.\n\nGuaranà + fucus\nEstratti vegetali presenti nella formula SLIM.\n\nKigelia + Lythrum\nEstratti vegetali presenti nella formula TON.",
        "src": "/img/percorsi-editoriali/forma/05-forma-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/05-forma-botaniche-640.webp"
      },
      {
        "title": "Il metodo prende forma.",
        "text": "Pressomassaggio · Criolipolisi · Vacuum · LPG endomassaggio · Lipolaser + radiofrequenza · Infrarosso · Calzino termico · Needling corpo\n\nDopo la valutazione scegliamo le tecnologie più adatte all’obiettivo e definiamo sequenza, intensità e frequenza.",
        "src": "/img/percorsi-editoriali/forma/06-forma-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/06-forma-metodo-640.webp"
      },
      {
        "title": "Scegliere un ritmo.",
        "text": "START · 10 sedute · €690\nADVANCED · 15 sedute · €960\nTOP · 20 sedute · €1.180\nSequenza, intensità e frequenza si definiscono dopo la valutazione.",
        "src": "/img/percorsi-editoriali/forma/07-forma-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/07-forma-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €79 · 60–90 min\n\nPacchetti disponibili: Start, 10 sedute a €690; Advanced, 15 sedute a €960; Top, 20 sedute a €1.180.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/forma/08-forma-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/forma/08-forma-prenotazione-640.webp"
      }
    ]
  },
  "liberta": {
    "name": "Libertà",
    "slides": [
      {
        "title": "Più libera, ogni giorno.",
        "text": "Più libera, ogni giorno.\nSemplificare · Epilazione\nScopri il percorso →",
        "src": "/img/percorsi-editoriali/liberta/01-liberta-copertina-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/01-liberta-copertina-640.webp"
      },
      {
        "title": "Meno ricrescita. Più semplicità.",
        "text": "Desideri ridurre progressivamente la ricrescita e semplificare la gestione quotidiana.\n\nLavorare sulla riduzione progressiva della ricrescita con parametri e frequenza definiti in base alla zona e al ciclo del pelo.",
        "src": "/img/percorsi-editoriali/liberta/02-liberta-quando-sceglierlo-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/02-liberta-quando-sceglierlo-640.webp"
      },
      {
        "title": "Si comincia dalla valutazione.",
        "text": "Prima della prima seduta valutiamo zona, fototipo, caratteristiche del pelo, rasatura, esposizione solare e prodotti usati sulla pelle.",
        "src": "/img/percorsi-editoriali/liberta/03-liberta-valutazione-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/03-liberta-valutazione-640.webp"
      },
      {
        "title": "Il comfort, dopo la seduta.",
        "text": "ALLANTOINA\nIngrediente dei prodotti cosmetici usati dopo il trattamento.\n\nACIDO IALURONICO\nScelto per l’idratazione dopo la seduta.\n\nLa scelta dipende dalle esigenze osservate.",
        "src": "/img/percorsi-editoriali/liberta/04-liberta-attivi-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/04-liberta-attivi-640.webp"
      },
      {
        "title": "Tre botaniche, una cura delicata.",
        "text": "Aloe vera\nIngrediente utilizzato dopo il trattamento.\n\nBoswellia serrata\nIngrediente vegetale presente nei prodotti del percorso.\n\nCalendula\nEstratto scelto per il comfort della pelle.",
        "src": "/img/percorsi-editoriali/liberta/05-liberta-botaniche-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/05-liberta-botaniche-640.webp"
      },
      {
        "title": "Tecnologia e comfort.",
        "text": "Lumina X1 Pro di THORY · ICE Polar per il comfort durante la seduta\n\nPer il percorso Libertà utilizziamo Lumina X1 Pro di THORY. Durante la seduta, ICE Polar raffredda la pelle a contatto; parametri e frequenza vengono definiti dopo la valutazione.",
        "src": "/img/percorsi-editoriali/liberta/06-liberta-metodo-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/06-liberta-metodo-640.webp"
      },
      {
        "title": "Il calendario è personale.",
        "text": "Frequenza e numero di sedute si definiscono dopo la valutazione di zona, fototipo e caratteristiche del pelo.\nIl percorso segue il ciclo del pelo e viene aggiornato ai controlli.",
        "src": "/img/percorsi-editoriali/liberta/07-liberta-continuita-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/07-liberta-continuita-640.webp"
      },
      {
        "title": "Prenota subito.",
        "text": "da €25,90 a zona · variabile in base alla zona\n\nIl prezzo ordinario parte da €25,90 per una singola zona e varia in base all’estensione. Frequenza e numero di sedute vengono definiti dopo la valutazione; le condizioni delle promozioni sono confermate al momento della richiesta.\n\n351 691 9416\nTelefono e WhatsApp\nViale Barbaroux 20 · Carmagnola",
        "src": "/img/percorsi-editoriali/liberta/08-liberta-prenotazione-1080.webp",
        "preview": "/img/percorsi-editoriali/liberta/08-liberta-prenotazione-640.webp"
      }
    ]
  }
};
