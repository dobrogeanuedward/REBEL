# REBEL — catalogo, prenotazioni e campagna laser

## Interventi

- Listino completo: 85 trattamenti in 10 categorie, 167 varianti con durata e prezzo ordinario; minimo promozionale Treatwell indicato separatamente e soggetto alla disponibilità della piattaforma.
- Nove percorsi e protocolli REBEL nello stesso menu, con collegamenti alle schede esistenti. Promo laser alimentata esclusivamente da `laser-offer.ts`.
- Navigazione ispirata al menu Jimmy: ricerca trasversale, categorie richiudibili, dettagli progressivi, collegamenti diretti alle singole schede. La barra segue l’altezza reale dell’header. Funziona anche senza JavaScript tramite i dettagli nativi.
- Contatti: disponibilità effettive su Treatwell oppure richiesta diretta con servizio, variante, data e ora desiderate. Il passaggio a WhatsApp conserva la scelta. Nessuna preferenza viene presentata come appuntamento confermato.
- Rimosse le regole obsolete che forzavano i controlli del modulo su fondo scuro. FAQ su superfici chiare, contrasto esplicito e focus visibile.
- Sette ulteriori fotografie reali dello studio, riutilizzate nelle gallerie di home, Studio e Contatti. Accessi rapidi dalla home a listino, promo e richiesta di consulenza.

## Provenienza e aggiornamento del listino

Fonte: https://www.treatwell.it/salone/rebel-estetica-epigenetica/ — rilevazione 8 settembre 2026.

`web-astro/src/data/treatwell-menu.json` conserva solo nomi, identificativi, prezzi, durate e varianti, non le descrizioni promozionali della piattaforma. I prezzi non si sincronizzano automaticamente: aggiornare la rilevazione e la data visibile quando cambia il listino. Gli orari del sito e quelli del profilo Treatwell presentavano differenze: sono stati mantenuti gli orari approvati del sito; per gli appuntamenti disponibili si rimanda al calendario della piattaforma.

La promo diretta REBEL e i prezzi dei percorsi/protocolli hanno sorgenti proprie e non vengono sovrascritti dagli sconti Treatwell. I link Treatwell aprono il salone, non una selezione artificiosamente precompilata.

## Preservazione della home pubblicata

La home live conteneva funzionalità assenti da GitHub main. Prima del rilascio sono stati recuperati HomeFilm, LocalBookingGuide, TreatmentGallery, le fotografie editoriali e tutti i 20 segmenti video con poster. Il selettore dei percorsi è preservato con il markup e il grafo completo di moduli pubblicati (`DeployedJourneyMap.astro`, `public/_astro`), mantenendo l’esperienza approvata. Questi moduli distribuiti sono esclusi dal controllo TypeScript del sorgente; non vanno modificati come sorgenti canoniche dei percorsi.

Un limite di trasferimento aveva troncato 14 video nel primo rilascio. Sono stati immediatamente sostituiti leggendo i file in blocchi e confrontando lo SHA Git restituito per ogni blob con quello dell’originale. Tutti i 21 file multimediali della home coincidono con gli originali.

## Verifiche e limiti dell’audit

- Build Astro di produzione, controllo TypeScript, audit dei testi e verifica degli asset.
- Verifica DOM: 85 trattamenti, 167 varianti, 9 percorsi; ricerca per servizio e zona, maiuscole, risultato vuoto, ripristino, apertura tramite hash e conservazione del contesto di tutte le varianti nei link di prenotazione.
- Controllo delle destinazioni interne del catalogo e dei campi della richiesta di appuntamento.
- Verifica degli schemi, canonical, sitemap e collegamenti della campagna e delle 24 pagine locali.
- Ispezione delle fotografie originali e analisi delle regole CSS, incluse le collisioni con il vecchio tema.

Il browser controllabile non era esposto in questa sessione. Non è stato eseguito né dichiarato un audit visuale renderizzato desktop/mobile; i test DOM non misurano geometria, resa dei font o interazioni reali di Safari. Questa verifica resta da completare quando è disponibile il browser.
