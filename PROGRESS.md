# Pact & Power — registro di progetto

> Aggiornato il 31 ottobre 2026 (Europe/Rome). Questo documento distingue codice presente, servizi effettivamente attivati e funzionalità ancora da completare. Aggiornarlo insieme a ogni milestone.

**Guida una nazione. Cambia il mondo.**

## Stato sintetico

Il singolo è giocabile e pubblicato su Sites. Il progetto include un backend Node/PostgreSQL eseguibile con Docker, ma il sito Sites corrente è statico e non esegue quel backend. Non dichiarare completo il multiplayer sulla base dell’interfaccia o dei test di dominio.

Ultima verifica disponibile: build TypeScript/Vite riuscita, 89 test passati, 6 test storici saltati dopo il cambio delle regole economiche. Il test di integrazione PostgreSQL è saltato in assenza del database. Non sono stati verificati account e due client con un database reale, riavvio PostgreSQL o consegna SMTP reale.

## Visione e decisioni consolidate

- Strategia geopolitica moderna in tempo reale, difficoltà intermedia, tono maturo.
- Mappa protagonista, scelta del paese reale, ordini strategici automatici.
- Economia, diplomazia, ricerca, esercito, consenso e crisi interne: niente gestione manuale di carburante, munizioni o singoli soldati.
- Valori economici e militari sono bilanciamento di gioco, non quotazioni o capacità tecniche reali.
- Nessuna emoji nell’interfaccia e nei testi di sistema; icone SVG e fotografie documentate.
- Fotografie del modello corretto; elementi astratti illustrativi dichiarati; nessuna immagine generata.
- Apertura della fotografia a schermo intero, oggetto intero, solo pulsante di chiusura; attribuzioni nei crediti.
- Gli scenari reali determinano soltanto l’inizio. Gli eventi successivi sono simulazione, non notizie reali.

## Funzionalità presenti nel singolo

### Mondo, interfaccia e salvataggi

Mappa mondiale Natural Earth con MapLibre e fallback SVG, ricerca ed elenco per paesi piccoli. Pannelli contestuali, selezione paese, tutorial, pausa, velocità, salvataggio automatico e importazione/esportazione JSON. L’interfaccia è prevalentemente italiana.

Marchio rinominato da quello storico a **Pact & Power**, sottotitolo aggiornato, HTML con ampersand correttamente codificata. Non rinominare chiavi persistenti, schema storico, cookie, volumi o database solo per uniformare il marchio.

### Economia e governo

Entrate automatiche, tre livelli fiscali, investimenti in economia/servizi/ricerca e conseguenze sul consenso. Regola economica corrente: **solo acquisti iniziali confermati e spie (25 crediti una volta per missione) riducono la tesoreria**. Nessun mantenimento o costo operativo, discorso, danno, ricostruzione, visita o missione speciale. Gli eventi possono diminuire guadagni futuri. Nessun rimborso retroattivo.

Registro `debits` e verifica degli addebiti nei comandi server. Materiale consumato e unità perse richiedono nuovi acquisti. Alcuni testi e documenti storici descrivono il precedente bilanciamento: prevale [ECONOMY-POLICY](docs/ECONOMY-POLICY.md).

### Esercito e cataloghi

66 modelli di mezzi/equipaggiamenti: 15 fanteria, 15 carri, 21 aerei e 15 classi navali. Acquisti, consegne, quantità possedute, operazioni automatiche, rinforzi e ritirata. B-52H e B-2 con ricerca avanzata e vantaggi astratti limitati; nessuna vittoria garantita.

Il catalogo aggiunge 18 armamenti/difese convenzionali, tre per sei categorie. Scorte consumabili, compatibilità documentate, impiego Limitato/Standard/Intensivo, consumo alla partenza, difese e intercettazione astratta. Fonti identificative distinte dalle statistiche inventate. Non ci sono armi nucleari implementate.

### Proteste e polizia

Consenso distinto da tensione sociale. Guerre, perdite, tasse e servizi contribuiscono alle cause. Progressione malcontento → manifestazioni pacifiche → scioperi → possibili disordini solo con aggravamento prolungato. Quattro livelli di polizia, protezione servizi, dialogo e interventi sulle cause. Nessun annullamento immediato delle proteste.

### Crisi di sicurezza e squadre

Crisi occasionali fittizie, indipendenti dalle proteste pacifiche, avvisi e intervalli minimi. Prevenzione: intelligence interna, sicurezza pubblica, protezione presidenziale. Indagini, soccorsi, riparazioni e rassicurazione con effetti ritardati.

Squadre astratte personalizzabili, acquisto/miglioramento, esperienza, disponibilità/preparazione/missione/recupero. Sei missioni: scorta, evacuazione, ostaggi, indagini, infrastrutture, ricognizione. Prerequisiti, autorizzazioni IA e rischio diplomatico, nessuna doppia prenotazione o invincibilità. Foto rappresentative dichiarate illustrative, non identificazione di un reparto reclutato.

### Discorso alla nazione

Testo 50–1.000 caratteri, cause visibili, tre esiti motivati, effetti limitati, intervallo e rendimenti decrescenti. Impegni riconoscibili diventano vincolanti solo dopo conferma, con verifica e scadenza.

Valutatore a regole operativo; endpoint esterno opzionale con timeout, schema e fallback, non configurato. Le regole hanno limiti di comprensione del linguaggio naturale. Non presentarle come modello linguistico remoto attivo. Testo del giocatore non autorizza modifiche al valutatore.

### Presidenza

Tre residenze e tre modelli di aerei presidenziali, cataloghi fotografici, selezione e beni posseduti. Visite e risposta della controparte IA. Auto ufficiali ed elicotteri non sono ancora beni acquistabili.

### Diplomazia e aiuti IA

Proposte/risposte IA, alleanze e pace semplificate. Donatori IA con inventari effettivi e riserve; richieste e offerte spontanee, contributi ridotti o rifiutati, consegne persistenti. Dopo l’ultima modifica economica: **nuovi aiuti soltanto in materiale**, non denaro. Il registro IA ha fondi/dotazioni iniziali semplificati e finiti, non un’economia nazionale completa.

### Rapporti e avvisi

Pulsante con non letti, rapporti da spie con paese/tempo/attendibilità, filtri, lettura, archiviazione, mappa e avviso di obsolescenza. ID della missione impedisce duplicati. Le spie mostrano oggi la stima militare esistente: **non scoprono ancora preparativi o intenzioni effettive**. Non inventare piani per riempire la schermata.

### Classifica mondiale

Ricchezza e forza bellica, pari merito, movimenti di posizione, ricerca, propria posizione, bandiere SVG locali. Pesi configurabili su quantità/caratteristiche delle unità consegnate e difese; consumabili esclusi. Aggiornamento ogni 30 secondi di simulazione; dettagli delle categorie solo per il proprio paese. Gli IA inizialmente possono essere pari perché il loro registro è semplificato.

### Avvio e lingue

Schermata blu notte, geometrie del mondo, collegamenti animati, marchio bianco/oro e consiglio. Verifica effettiva mappa/salvataggio/importazione o disponibilità server, ingresso/ripresa, errore e riprova, nessuna attesa aggiunta e nessuna percentuale finta. Rispetto di prefers-reduced-motion, nessuna musica automatica.

Cinque lingue nella schermata iniziale, sottotitolo e comandi della shell: italiano, inglese, francese, tedesco, spagnolo. Preferenza browser e API profilo. **Traduzione completa del gioco non realizzata**: menu, cataloghi, tutorial, rapporti, errori e autenticazione restano prevalentemente italiani; eventi storici ancora memorizzati come frasi.

## Backend: codice disponibile e attivazione

TypeScript/React/Vite/MapLibre; Node 24/Fastify, PostgreSQL 17. Sessioni con cookie HttpOnly, SameSite e Secure in produzione, controllo Origin/CSRF, Argon2id e limiti ai tentativi. Registrazione, verifica email, login/logout, recupero monouso, profilo e cambio password nel codice. SMTP configurabile e Mailpit per sviluppo, non invio email reale.

Partite/codici, assegnazione univoca dei paesi, comandi validati e deduplicati in transazione, avanzamento con tempo database e recupero ordini, proiezione privata. Polling autenticato ogni 2 secondi, non WebSocket. Migrazioni 001–007 comprendono armamenti, sicurezza, aiuti condivisi, discorsi, classifiche e lingua profilo. Docker Compose, volume persistente, health/readiness, guida backup/ripristino.

**Non attivato su Sites:** PostgreSQL, server Node e SMTP. Richiede un host Docker e reverse proxy HTTPS. Nessun accesso a VPS/SMTP è stato configurato automaticamente.

**Multiplayer incompleto:** attacchi/diplomazia/intelligence/assistenza fra paesi umani sono ancora rifiutati. Non esiste ancora un motore territoriale competitivo condiviso completo. Schema preliminare alleanze/chat/voti non significa API operative. Non dichiarare verificata la sicurezza online con i soli test locali.

## Lavoro da completare, in ordine proposto

1. **Attivare e verificare il backend reale.** PostgreSQL dedicato di test, migrazioni, due account/sessioni, registrazione/email/login/reset/revoca, comandi concorrenti, riavvii e recupero. Configurare dominio/HTTPS/SMTP sull’host scelto. Preparare immagine Docker pubblicata: oggi Compose usa `build: .`, non esiste un’immagine di gioco pubblicata su un registry.
2. **Riscrivere i sei test economici storici saltati.** Conservare copertura non economica, confermare tutte le spese consentite ed eliminare testi di costo ormai incoerenti. Ampliare test SQL sul registro della tesoreria.
3. **Controllo territoriale per zone.** Suddivisione geografica con aree effettive, percentuale di superficie, occupanti esclusivi, riconquiste, più attaccanti, occupazione distinta da annessione concordata e stabilizzazione. Aggiornare mappa e conflitti. Oggi la conquista resta nazionale: nessuna barra percentuale implementata.
4. **Intelligence su eventi veri.** Collegare rapporti a ordini/preparativi presenti nel mondo condiviso, fallimenti/scoperta, informazioni parziali, osservazioni prolungate, raggruppamento aggiornamenti e notifiche. Nessuna analisi delle chat private.
5. **Alleanze e cooperazione fra utenti.** Inviti/richieste, leader/consigliere/membro, uscita/espulsione/trasferimento leadership, autorizzazione del proprietario per ogni risorsa o squadra. Condivisione volontaria rapporti e segnalazioni.
6. **Chat e gabinetti di sicurezza.** Canali globali/privati/alleanza, cronologia/non letti/silenziamento/segnalazioni/anti-spam; inviti, discussione, voti sì/no/astenuto, quorum metà e maggioranza, verbali senza trasferimento automatico di risorse.
7. **Internazionalizzazione completa.** Chiavi riutilizzabili per tutti i componenti e dati descrittivi; eventi come codici/parametri, migrazione compatibile degli storici, nomi propri/testi utenti invariati, numeri/date locali, verifiche dei testi lunghi.
8. **Versione telefono verificata.** Tablet/smartphone portrait e landscape, touch/zoom/pannelli/keyboard, accessibilità e focus; nuova schermata di accesso più curata e collegamento alla registrazione reale. Non dare per risolto il problema segnalato della registrazione finché backend e SMTP non sono attivati e provati.
9. **Fotografie mancanti e qualità.** RBS 15 Mk II e Leclerc XLR senza foto verificata; cinque foto di armamenti richiedono inquadratura più pulita. Non dichiarare completo il catalogo fotografico finché persistono lacune. Conservare licenze/attribuzioni e non usare modelli diversi o immagini generate.
10. **Bilanciamento e IA.** Economia, produzione, acquisti e attività degli IA coerenti con inventari pubblici/privati; tre difficoltà mantenendo le stesse regole fondamentali; revisione durata/budget/prevenzione/rischi dopo playtest.
11. **Scenari datati.** Dossier Cipro presente; ulteriori conflitti richiedono ricerca aggiornata e più fonti, attori non statali distinti, controllo effettivo vs rivendicazioni e versioni immutabili per partite avviate.

## Idee non implementate e decisioni ancora aperte

- Nomi alternativi: decisione conclusa con Pact & Power.
- Armi nucleari e variazioni successive dei prezzi di B-52/B-2 citate durante l’ideazione: non implementate come richieste operative nel codice corrente. Richiedono specifica di gameplay astratta, bilanciamento e nuova conferma dei requisiti; non descrivere come presenti.
- Auto ufficiali, elicotteri e personalizzazione più estesa di interni/livree/sale riunioni.
- WebSocket al posto del polling solo dopo aver verificato correttezza e autorizzazione del modello condiviso.
- Servizio linguistico per il discorso: scelta fornitore/hosting, privacy, costi, schema e test avversariali. Il fallback deve restare disponibile.

## Avvio e verifiche ripetibili

```sh
npm ci
npm test
npm run build
# Sviluppo frontend:
npm run dev
# Backend + PostgreSQL + casella test, dopo configurazione .env:
docker compose --profile development up -d --build
# Produzione: reverse proxy HTTPS e SMTP reale; niente profilo development.
# Test integrazione: solo DB di test dedicato, vedere docs/BACKEND.md.
npm run test:server
```

Le migrazioni partono automaticamente con il server. Non usare `docker compose down -v` per aggiornare: cancella il volume. Non pubblicare `.env`, password, token, cookie, dump o dati dei giocatori.

## Documenti di riferimento

[Architettura](docs/ARCHITECTURE.md) · [Backend e backup](docs/BACKEND.md) · [Milestone](docs/MILESTONES.md) · [Economia corrente](docs/ECONOMY-POLICY.md) · [Armamenti](docs/ARMAMENTS.md) · [Sicurezza](docs/SECURITY.md) · [Discorsi](docs/SPEECHES.md) · [Aiuti IA](docs/AI-AID.md) · [Rapporti/territorio](docs/TERRITORY-REPORTS.md) · [Classifiche](docs/RANKINGS.md) · [Avvio/lingue](docs/LOADING-LANGUAGES.md) · [Foto](docs/PHOTOS.md) · [Attribuzioni](docs/ATTRIBUTION.md).

## Regola per i prossimi aggiornamenti

Aggiornare questo file con: cosa cambia, cosa è realmente verificato, servizi attivi/non attivi, limiti e prossimo blocco verificabile. Le sezioni storiche dei documenti non prevalgono sui requisiti economici e sullo stato corrente qui indicati. Pubblicare codice e documentazione insieme, senza includere segreti né dare un esito positivo a verifiche saltate.
