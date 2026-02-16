# Roadmap Unicizzazione Contenuti (Rebel)

Obiettivo: trasformare ogni pagina in un contenuto **unico**, **positivo**, **informativo**, **completo** e **naturale**, con un livello **tecnico solo dove serve** (senza gergo inutile) e con collegamenti interni che guidano davvero l'utente.

Questa roadmap e' pensata per lavorare **per gradi**, pagina per pagina, con controllo qualità e push frequenti.

## Principi di copy (non negoziabili)

- **Voce**: positiva, rassicurante, competente, mai fredda.
- **Chiarezza**: frasi semplici, parole concrete, niente "linguaggio da template".
- **Completezza**: chi legge deve uscire con piu' chiarezza di prima (non solo "bella sensazione").
- **Tecnico dove serve**: parametri/calendario/zone/post-seduta spiegati in modo accessibile.
- **Niente promesse**: evitare assoluti ("definitivo", "garantito", "100%") e toni allarmistici.
- **Niente copypasta**: ogni pagina deve avere un **angolo** diverso + dettagli locali.

## Parole da evitare (effetto template)

- "landing", "scheda", "editoriale", "realistica/o", "spinta", "hub" (in pagina)
- sostituire con: "pagina", "servizio", "approfondimento", "chiaro", "concreto", "lettura", "panoramica"

## Struttura standard (Localita)

Per ogni `/localita/[slug]`:

- `title/description/intro` unici (non cambiare solo il nome comune)
- `directions`
  - `mapsUrl` (direzioni o search)
  - `embedUrl` (mappa/dir embed)
  - 2-3 paragrafi brevi, pratici, senza inventare strade specifiche
- `focus`
  - un **tema locale** diverso (es. comfort Ice Polar, peli incarniti, priorita zone, gestione calendario, ecc.)
  - 3 paragrafi: 1 umano + 1 tecnico + 1 organizzativo/pratico
  - `links` con descrizione (sempre coerenti):
    - `/epilazione-laser-carmagnola`
    - 1 competenza (es. `/competenze/laser-diodo-carmagnola`)
    - 2 servizi (viso + corpo)
    - `/listino-estetica-laser`
    - `/contatti`
- `faqs` (3 domande) con risposte pratiche, non generiche

## Struttura standard (Competenze)

Per ogni `/competenze/[slug]`:

- `longDescription` utile (non "parole belle")
- `editorialSections` quando il tema lo merita:
  - 3-5 sezioni (H3) con paragrafi brevi
  - alternare: tecnico / aspettative / scelta centro / post-seduta / organizzazione
- `sourceLinks` solo fonti autorevoli (AAD, Mayo Clinic, NHS, ecc.)
- link interni "puliti": rimandare a servizi reali e al listino

## Struttura standard (Servizi)

Per ogni `/servizi/[slug]`:

- `shortDescription`: 1 frase chiara
- `longDescription`: cosa facciamo + a chi serve + come si organizza
- `benefits` concreti, non "marketing"
- `faqs`: domande che riceviamo davvero (pre, post, tempi, comfort)
- link verso 1-2 competenze correlate (per "spessore")

## Ordine di lavoro (per ridurre non-indicizzazione)

1. Localita "asse-carmagnola" (piu vicine e piu simili tra loro: rischio duplicazione piu alto)
2. Localita "torino-sud"
3. Localita "cuneo"
4. Competenze piu commerciali (laser, laser diodo, trattamenti viso/corpo)
5. Servizi (schede) con piu' potenziale e piu' traffico
6. Refinement: linking trasversale, CTA, microcopy, refresh periodico

## Regola operativa (per lavorare bene)

Per ogni pagina completata:

- test `npm run lint` + `npm run build`
- commit + push con messaggio chiaro
- passare alla pagina successiva con un **angolo diverso** (no ripetizioni)


