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
  }
};
