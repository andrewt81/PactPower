# Pact & Power

Guida una nazione. Cambia il mondo.

**Stato completo, progressi e piano:** [PROGRESS.md](PROGRESS.md).

# Sicurezza e forze speciali

Crisi simulate distinte dalle proteste, tre investimenti di prevenzione, risposte ritardate e squadre con sei missioni automatiche. Guida, regole e limiti: [docs/SECURITY.md](docs/SECURITY.md). Migrazione 003 per il backend. Cooperazione tra giocatori non ancora implementata; test PostgreSQL saltato in assenza del database.

# Armamenti e difese

Catalogo di 18 voci e meccaniche di consumo/intercettazione integrate. Guida e limiti attuali: [docs/ARMAMENTS.md](docs/ARMAMENTS.md). 17 fotografie disponibili, RBS15 Mk II mancante; cinque inquadrature ancora da migliorare. Validazione server implementata ma PostgreSQL non attivato né verificato end-to-end in questo ambiente.

# Aggiornamento backend — 30 ottobre 2026

Prima fase Node/PostgreSQL aggiunta. Guida completa, configurazione, comandi e limiti in [docs/BACKEND.md](docs/BACKEND.md). **Non è ancora multiplayer competitivo completo e non è attivato sull’hosting statico Sites.** PostgreSQL e SMTP richiedono configurazione esterna. Interazioni fra paesi umani, alleanze e votazioni restano da implementare. Test PostgreSQL con due account non eseguito nell’ambiente corrente; test saltato esplicitamente.

# Pact & Power

Strategia geopolitica browser in italiano, modalità singolo con IA locale. **Stato corrente: aggiornamento società, polizia e catalogo del 30 ottobre 2026.** Le sezioni successive documentano checkpoint storici e non prevalgono su questo riepilogo.

## Versione corrente

- Mappa centrale, scelta del paese, economia automatica, tre aliquote, investimenti, mantenimento, acquisti con consegna, combattimento astratto, rinforzi/ritirata, diplomazia e spionaggio contro IA, presidenza e visite conservati.
- Consenso e tensione sociale distinti. Guerre, perdite, tasse e servizi producono cause leggibili e avvisi. Progressione graduale: malcontento, manifestazioni pacifiche, scioperi; disordini solo dopo una crisi grave e persistente. Entrate e investimenti risentono temporaneamente delle interruzioni.
- Società e polizia: dialogo temporaneo, servizi, riduzione tasse/impegno militare e protezione dei servizi essenziali. Quattro livelli di polizia acquistabili in ordine, con durata e mantenimento. Non aumentano il consenso; l'opzione coercitiva riduce fiducia e aumenta tensione.
- Catalogo strutturato di 65 voci: 15 fanteria (lotti per 100 soldati), 15 carri, 20 aerei, 15 classi navali. Filtri e confronto fra due elementi. Prezzi, tempi, mantenimento e indici sono esclusivamente valori di gioco. Resistenza e mobilità restano comparative, non fattori separati dell'attuale combattimento aggregato.
- **77 fotografie associate su 78 elementi**, con fonte, autore, licenza e attribuzione. **Manca Leclerc XLR**: segnaposto Foto non disponibile, senza sostituzione con altre varianti. Le immagini dei livelli astratti, degli investimenti e delle residenze generiche sono etichettate illustrative. Anteprime 480 px e dettagli fino a 960 px, senza ritagli del soggetto. **20 schede hanno verifica identificativa parziale**, segnalata nei dettagli: produttore/origine/configurazione richiedono ulteriore conferma. Le altre 45 documentano nome e ruolo, senza pretendere verifica di prestazioni tecniche.
- Emoji eliminate da sorgenti UI, dati e messaggi di sistema. Icone SVG Lucide. I messaggi dei vecchi salvataggi vengono ripuliti durante il caricamento.
- Autosave, esportazione JSON e caricamento con validazione dal menu Opzioni partita. Migrazione dei salvataggi locali v2 precedenti; tensione, polizia e proteste persistono. Il tempo si ferma a gioco chiuso.

Per iniziare: scegli il paese, premi Il mio paese per acquisti/governo oppure Tensione per Società e polizia. Mezzi posseduti apre le schede degli equipaggiamenti consegnati; Presidenza mostra i beni posseduti. Ogni foto può essere ingrandita con i crediti. Opzioni partita → Fotografie e immagini da completare espone il controllo di tutto l’inventario. I riepiloghi mostrano costo e durata prima della conferma.

Avvio: `npm ci`, `npm run dev`. Verifica: `npm test`, `npm run build`. Richiesto Node 22.12+, verificato Node 24. Build statica in `dist/`.

**Verifiche correnti:** 50 test verdi, build TypeScript/Vite riuscita. Inventario fotografico completo di 78 elementi e verifica di decodifica di 148 asset WebP. Browser QA desktop sul fallback SVG: scelta paese, upgrade polizia con addebito e completamento, catalogo, filtri, confronto a due, fotografia caricata e acquisto. Navigazione semantica e controlli da tastiera verificati nei percorsi principali. Layout fotografico verificato anche in viewport iframe smartphone 390×844: anteprima e ingrandimento caricati, nessuna eccedenza orizzontale del pannello. Non verificato su dispositivi fisici; WebGL non disponibile nel browser QA.

Parametri in `src/simple/socialRules.ts` e `rules.ts`; catalogo in `catalog.json`, crediti nei registri `photos*.json`; generatori `scripts/build-catalog.py` e `node --import tsx scripts/audit-photos.ts`. Attribuzioni esaustive e unica mancanza in `docs/PHOTOS.md`; audit strutturato in `public/data/photo-audit.json`. Dettagli in `docs/ATTRIBUTION.md` e `docs/MILESTONES.md`.

**Limiti:** nessun backend autorevole, account, multiplayer, chat o gabinetto online. Le funzioni ancora pianificate nel checkpoint intermedio restano tali. Il simulatore scenari e il vecchio dominio sono conservati; il nuovo sistema sociale è integrato nel motore di gioco attivo `src/simple`, non nel vecchio motore archivio.

---

## Cronologia dei checkpoint


Strategia geopolitica browser in italiano. Prima consegna incrementale: **milestone 1** giocabile, catalogo documentato come fondazione della milestone 2. Non è un multiplayer.

## Avvio

Richiede Node.js 22.12+ (verificato su Node 24.22.1).

```sh
npm ci
npm run dev
npm test
npm run build
```

Il server di sviluppo stampa l'URL locale. La build statica è in `dist/` e deve essere servita via HTTP/HTTPS, non aperta con `file://`.

## Giocare

1. Seleziona una nazione sulla mappa o dalla ricerca, quindi assumi la presidenza.
2. Apri Economia: valuta e conferma investimenti. Ogni ordine ha capitale, durata, avvio, stato e rapporto.
3. Osserva il conto alla rovescia. A ×1 ogni secondo reale equivale a un'ora di gioco; ×2/×5/×10 e pausa sono disponibili.
4. La tesoreria riceve il saldo economico in tempo continuo. Aliquote oltre 25% riducono il consenso; fino a 18% lo aumentano. Una tesoreria vuota con deficit erode consenso e stabilità.
5. Punta a influenza almeno 80, consenso e stabilità almeno 60. L'influenza è la media di industria, ricerca, infrastrutture, consenso e stabilità. Nessun premio militare in M1.
6. Il menu Gestisci partita offre salvataggio manuale, recupero, import/export JSON e nuova partita con conferma. Autosave ogni 5 secondi e all'uscita. Il tempo offline non avanza.

## Implementato

- React + TypeScript; MapLibre GL JS, con fallback SVG automatico per WebGL assente.
- Confini selezionabili per 241 entità del dataset Natural Earth 1:50m, inclusi territori e aree contese; ricerca anche per paesi piccoli.
- Zoom, pan, centro sulla selezione; livelli politico, industriale e militare. Relazioni iniziali fittizie: favorevoli, neutrali, ostili. Non esistono ancora alleanze formali.
- Tesoreria, fiscalità, quattro investimenti, mantenimento, consenso e stabilità.
- Motore indipendente dalla UI; clock sostituibile; costi atomici, deduplicazione locale e annullamenti con rimborso del 50%.
- Salvataggi locali versionati, validazione importazioni, tutorial e registro.

## Non implementato

Milestone 2: mercato con autorizzazioni, equipaggiamenti per reparti, nuovi/usati, consegne progressive, contingenti, rinforzi, ritirate, combattimenti e IA dinamica, spionaggio.

Milestone 3: acquisti residenze/aerei, personalizzazione e visite.

Milestone 4: API Node.js autorevole, PostgreSQL, account, partite separate, paesi assegnati univocamente, WebSocket e riconnessione.

Milestone 5: alleanze, chat privata, inviti, gabinetti, quorum, votazioni, verbali, notifiche e deleghe.

I dati esteri in M1 sono statici e completamente visibili come valori di gioco iniziali. Non esiste uno stato remoto o segreto. Il salvataggio locale è modificabile e non deve essere usato come prova di autorità in futuro multiplayer.

## Verifica M1

12 test automatici significativi coprono costi e insolvenza, unicità del paese, deduplicazione, confini temporali, completamenti una sola volta, cambi economici esatti, equivalenza di avanzamenti, pausa/velocità con clock manuale, rimborsi, limiti, serializzazione e importazioni invalide. Build TypeScript/Vite verificata. Browser QA: selezione dalla mappa SVG, avvio mandato, conferma investimento, completamento a ×10, registro, salvataggio manuale e recupero al ricaricamento.

Il browser QA non dispone di WebGL: il ramo MapLibre compila ma non è stato verificato visualmente. MapSVG è stato verificato come percorso effettivo. Layout CSS per PC e tablet, con adattamento anche mobile; non ancora verificato su dispositivi fisici.

Vedi `docs/ARCHITECTURE.md`, `docs/MILESTONES.md` e `docs/ATTRIBUTION.md`.

## Aggiornamento scenari e interfaccia

Disponibile lo scenario Cipro v2026-10-29.1 con sette fonti pubbliche, cinque unità territoriali (governo cipriota, nord, zona ONU, Akrotiri e Dhekelia), attori distinti e obiettivi alternativi. Iniziative diplomatiche con accettazione/rifiuto IA, difesa, ritiro, pressione militare astratta, assistenza e ricostruzione producono effetti e rapporti. La copia dello scenario, inclusa la geometria, è conservata nel salvataggio; aggiornamenti del catalogo scenari non la modificano. Nessuna fonte di notizie viene richiesta durante la partita. Non sono implementate conquiste o simulazione tattica.

20 test automatici verdi, inclusi isolamento delle versioni, controlli di budget e iniziative, esiti diplomatici rifiutati, conseguenze civili, geometrie, validazione salvataggi e obiettivi non militari. Cinque sezioni principali e accesso separato a scenari/nuova partita. Il catalogo completo dei 26+ mezzi verificati, i loro acquisti e la personalizzazione presidenziale restano da implementare. Non ci sono ancora proposte tra giocatori o chat da moderare. La nuova interfaccia non è una dichiarazione di completamento delle milestone 2–5.

## Regole semplici v3

L'interfaccia principale usa ora `src/simple/`: denaro automatico influenzato dal consenso, forza derivata dalle unità, miglioramento economico singolo, quattro modelli iniziali reali con costi e stelle di gioco, acquisti a quantità con consegna, attacchi astratti con rinforzo/ritiro, alleanza/pace/aiuto/spia/visita contro IA. Tre residenze e tre aerei facoltativi, proprietà persistente. Protezione iniziale 60 secondi di gioco. Conto alla rovescia 12–30 secondi, recupero territori 120 secondi. Nessuna manutenzione o tassa manuale. Catalogo ancora iniziale, non i 26+ modelli del piano originario. Le illustrazioni sono pittogrammi simbolici.

I vecchi salvataggi restano separati; al primo ingresso vengono recuperati paese, denaro, consenso e definizione dello scenario, senza convertire ordini del vecchio motore. Il nuovo salvataggio locale v2 è automatico ed esportabile. Importazione della nuova versione non ancora esposta. Scenari avviabili con le medesime regole; la mappa mondiale non mostra ancora gli overlay locali dello scenario nella nuova UI. Controlli di combattimento sul paese e nel pannello operazioni; indicatori contingenti sulla mappa da aggiungere. Nessun online funzionante.

## Difficoltà intermedia — fase 1 (29 ottobre 2026)

Le regole intermedie sostituiscono quelle semplici per economia, investimenti e mantenimento. Quattro indicatori: denaro, saldo al secondo, consenso, forza. Governo: tre aliquote con anteprima di entrate e variazione consenso; investimenti in economia, servizi pubblici e ricerca, con costo crescente e durata. I servizi aumentano consenso e recupero graduale; ricerca +4% efficacia per livello fino a +24%. Mantenimento per unità consegnata e beni presidenziali in uso. Il saldo resta non negativo: deficit segnalato, nessuna sconfitta improvvisa. I salvataggi v2 restano compatibili, campi mancanti assumono tassazione media e livelli zero.

Schede militari con efficacia/resistenza/mobilità (indici di gioco 0–100), prezzo, mantenimento e consegna. Per conquistare servono fanteria e almeno un'altra componente: composizione automaticamente proporzionale all'esercito. Il combattimento attuale usa punteggio aggregato, bonus combinato e ricerca; resistenza e mobilità sono dati preparati per la fase operativa e non influiscono ancora sui singoli esiti. Terreno, distanza e atteggiamenti non implementati. Non presentare questa fase come sistema militare completo.

32 test automatici verdi: nuovi casi su anteprima fiscale, mantenimento alla consegna, investimenti/caps, deficit e combinazione. Build TypeScript/Vite verificata. Fasi successive: ordini con contingente/atteggiamento/terreno/distanza; diplomazia con relazioni e trattati; tre spionaggi; stabilizzazione territori; tre difficoltà/IA; online/ruoli/voti. Le categorie avanzate restano pianificate; quattro modelli iniziali, nessun multiplayer.
