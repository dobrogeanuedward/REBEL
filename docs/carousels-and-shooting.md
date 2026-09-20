# REBEL — coordinare caroselli, shooting e sito

Decisione dell’utente, 20 settembre 2026: procedere un percorso alla volta. Skin Reset e Barrier sono i primi due. Il prossimo è Balance. Conservare varietà di copertine, layout e ritmo chiaro/scuro nel mosaico Instagram.

## Direzione approvata
- Grafiche con ImageGen: serif editoriale, corsivo viola, avorio e gradienti rosa/lavanda; pagine scure melanzana con luce viola/magenta. Layout diversi fra percorsi.
- Inserire le fotografie **dopo**, solo con ritaglio e ridimensionamento. Non rigenerare le foto originali dentro le grafiche.
- CTA: “Prenota subito”, 351 691 9416, telefono e WhatsApp; Viale Barbaroux 20, Carmagnola. Prezzo e durata dal registro `rebel-journeys.ts`. Non inventare urgenza per percorsi continuativi.
- I vecchi volti levigati, lucidi, su sfondi spa viola sono superati. Per Barrier sono stati esclusi “Trattamento barriera per pelle sensibile” e “Siero idratante applicato sul viso”.

## Shooting
Riferimenti recuperati: `MASTER_AGENT_BRIEF.md` (Library libfile_5d9e1c1a96d8819195973231599612a4), `FLOW_SHOT_GUIDE.md` (libfile_d6024bbcb56c8191b832efff2da1e05b), scatto “Pelle fresca, sorriso sincero”.

Pori, lentiggini, linee fini, peluria e asimmetrie restano visibili. Luce neutra diffusa, highlight protetti, profondità ottica e grana naturale, resa documentaria BMPCC6K; inquadrature lievemente fuori asse, ambienti pratici e coerenti con le cabine REBEL, uniformi nere semplici. Una sola azione professionale, mani plausibili e unghie corte. Nessun bagliore artificiale sulla pelle, mirror impossibile, testo inventato o perfezione pubblicitaria. Non usare immagini generate come prova di risultato o prima/dopo.

Se manca uno scatto, generarlo con ImageGen usando il materiale recente come riferimento fisico. Per la consulenza creare composizioni nuove, non riusare ogni volta lo stesso scatto. Controllare mani, strumenti, riflessi, pelle, ambientazione e ritaglio effettivo nel layout. Nuove immagini sintetiche conservano nei WebP la provenienza IPTC `trainedAlgorithmicMedia` e sul sito sono presentate come scene illustrative.

## Integrazione riutilizzabile
1. Esportare le 8 slide complete a 1080×1350, poi WebP a 1080 e 640 pixel (testo nitido).
2. Aggiungere il percorso a `src/lib/journey-carousels.ts`: nome, slide, titolo, testo accurato, originale web e anteprima. Il testo deve corrispondere alla grafica, inclusi attivi e prezzi.
3. `JourneyCarousel.astro` viene mostrato automaticamente nella pagina dedicata. Scorrimento manuale, controlli tastiera, nessun autoplay, ingrandimento dialog e guida testuale accessibile. Senza JS rimangono immagini e link.
4. Nella sola pagina `/percorsi` la copertina sostituisce la foto con un riquadro intero 4:5, senza overlay o zoom che tagli il testo. La card conserva nome, prezzo, durata e link. **Mai introdurre le copertine dei caroselli in home o modificare gli slot fotografici condivisi per ottenerlo.**
5. Nuovi scatti autonomi: `src/lib/journey-photographs.ts` e `public/img/shooting-rebel`. Nome file descrittivo, WebP responsivi, dimensioni, alt che descrive ciò che si vede, didascalia pertinente e percorso associato. Non inventare dati EXIF o luogo di ripresa.
6. `JourneyPhotoStory.astro` li colloca nella pagina pertinente; `/gallery` li raccoglie con link ai percorsi. La gallery fotografica in home può valorizzare gli scatti nuovi, mantenendo le foto di apertura della home e senza copertine grafiche.
7. Le pagine dedicano testo HTML a esigenze, manualità, ingredienti, durata e prezzo. Metadati OG usano fotografie, non poster con testo. ImageObject/Service sono collegati al BeautySalon REBEL a Carmagnola. `sitemap-images.xml` si aggiorna dai registri ed è annunciata in robots.txt; `/gallery` è nella sitemap generale.
8. Fonti SEO: https://developers.google.com/search/docs/appearance/google-images e https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata . Indicizzabilità non equivale a indicizzazione garantita.

## Audit e pubblicazione
- Percorsi: controllare copertine intere, contrasto, leggibilità del footer e allineamento con le altre schede.
- Pagina dedicata: hero fotografica, carosello, navigazione fino all’ultima pagina e ritorno, dialog/Esc/focus, testo, foto, prenotazione.
- Gallery: ritagli, ordine, didascalie, link interni. La galleria dello **studio reale** (`StoreGallery`) resta distinta dalle scene illustrative.
- Verificare smartphone e desktop, niente overflow orizzontale del documento; lo scorrimento è confinato al carosello.
- Gate esistente: `npm run build --prefix web-astro` (offerta laser, Astro check/build, audit copy, validazione asset).
- Sito esistente GitHub `dobrogeanuedward/REBEL`, Vercel. Lavorare da main remoto aggiornato, senza azzerare checkout sporchi o sovrascrivere modifiche parallele.
- Aggiornare i file Library dei caroselli corretti mantenendo gli ID e la cronologia. Non limitarsi a pubblicare versioni corrette solo sul sito.
