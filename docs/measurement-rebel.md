# Misurazione delle richieste REBEL

Il sito prepara segnali locali distinti. **Non è ancora collegato un account analytics** e non sono installati Google Analytics, GTM o altri provider da questo intervento. Senza un destinatario configurato non esistono report, storico, attribuzione o conteggi persistenti.

## Significato dei segnali

- `whatsapp_intent`: clic su WhatsApp oppure apertura del messaggio dal modulo contatti dopo validazione. Indica l’intenzione di scrivere, non l’invio del messaggio.
- `phone_intent`: clic su un numero telefonico. Non certifica che la chiamata sia partita o sia stata risposta.
- `booking_intent`: clic verso il salone REBEL su Treatwell. Non certifica una prenotazione.
- `form_request_accepted`: solo per il modulo landing che usa `/api/contact`, dopo validazione client, honeypot vuoto, risposta HTTP positiva e `data.ok === true`. Il successo fittizio riservato ai bot non produce questo evento.

Nessuno di questi segnali è un appuntamento confermato. Il modulo Contatti prepara WhatsApp e non invia una richiesta API: emette soltanto `whatsapp_intent` nel momento dell’apertura.

## Payload e privacy

Sono consentiti solo `event`, `path` e, se presente e riconosciuto, `service`. Il percorso appartiene alle route reali del sito e non contiene query string o hash. `service` ammette esclusivamente ID del catalogo, scelte di prenotazione e slug di servizio presenti nei registri del sito.

Nomi, numeri, email, date desiderate, testo libero, messaggio WhatsApp, URL di destinazione, referrer e parametri di campagna non entrano nel payload. Un contesto sconosciuto viene scartato; un evento o percorso sconosciuto impedisce l’emissione.

`ConversionMeasurement.astro` costruisce le allowlist dai registri sul server; al browser arrivano soltanto identificativi pubblici. Il listener delegato rileva i link e viene ripulito/reinstallato durante la navigazione Astro. Non ascolta i submit dei moduli, che emettono nel punto verificato del proprio flusso.

## Collegamento successivo

`trackConversion(event, { service? })`, da `src/lib/measurement.ts`, emette un `CustomEvent` su `window` chiamato `rebel:conversion`. Se `window.dataLayer` è **già un array**, invia anche lì lo stesso payload minimo. Non crea `dataLayer`, non carica script, non usa cookie o memoria locale e non effettua richieste di rete.

Quando sarà disponibile l’account, il collegamento analytics e la configurazione del consenso dovranno essere verificati prima di trasmettere dati a un provider. La preparazione locale non attiva una misurazione di terze parti.

Per evitare doppioni, un’integrazione futura deve scegliere un solo ingresso fra il CustomEvent e `dataLayer`. Non collegare entrambi allo stesso evento analytics. I link gestiti esplicitamente possono usare `data-rebel-measurement-ignore`; i submit non passano comunque dal listener dei clic.

## Verifica locale

`node --import tsx --test scripts/test-measurement.ts` verifica il contratto del payload, la rimozione di dati identificativi, gli host ammessi, le famiglie di route e tutte le condizioni necessarie per accettare una richiesta. Non invia moduli o messaggi e non richiede browser, account o provider.
