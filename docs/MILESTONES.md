# Piano verificabile

| Milestone | Stato | Condizione di chiusura |
|---|---|---|
| 1 — Mappa, governo, economia, orologio, salvataggi | Completata | Selezione, costi, completamenti, recupero e test del dominio |
| 2 — Catalogo, mercato, unità, combattimenti, spionaggio IA | Pianificata; catalogo dati preliminare separato | Acquisti entro budget, requisiti, stock/consegne, report intelligence e test deterministici |
| 3 — Presidenza | Pianificata | 3 residenze, 3 aerei, personalizzazioni, acquisti e visite con accettazione |
| 4 — Online persistente | Pianificata | 2 client identici, paese unico, riavvio/riconnessione, idempotenza e segreti assenti nei payload |
| 5 — Alleanze e gabinetti | Pianificata | ACL, chat, quorum, scadenza, controproposte, verbale e deleghe |

## Checkpoint M1 — 29 ottobre 2026

Motore: test automatici verdi. UI: investimento industriale addebitato, risolto, industria 68→80, entrate e mantenimento aggiornati, rapporto una sola volta. Salvataggio manuale creato. Nessuna funzione online attiva. MapLibre non verificato in WebGL nell'ambiente QA: fallback SVG funzionante.

## Regole da attuare in M2

Modelli identificati da ID stabili, famiglia, variante o classe navale. Classe ≠ singola nave; ogni scafo potrà avere un nome distinto. Fanteria in lotti da 100 equipaggiamenti per reparto, mai compravendita di singole armi.

Mercato di gioco (non descrizione delle leggi reali): embargo blocca; venditore locale consente produzione se infrastrutture sufficienti; relazione sotto 0 blocca importazione; 0–29 richiede accordo commerciale; 30+ consente richiesta di esportazione. Online il paese venditore umano deve accettare. Stock finito, nuova capacità per giorno, consegne parziali, usato con prezzo/preparazione ridotti. Mantenimento e penalità logistica per famiglie diverse (configurabile). Le origini multinazionali non implicano che ogni paese abbia una licenza industriale.

Combattimento di intrattenimento: forza aggregata × preparazione × rifornimenti × coefficiente terreno; perdite e ritirate esplicite. Territorio occupato genera costo amministrativo, stabilità ridotta e reazioni diplomatiche. Servono economia e consenso per sostenere l'espansione; la forza non basta.

Intelligence solo astratta: costo, durata, probabilità e rischio configurabili; rapporto limitato alla categoria richiesta e datato; scoperta peggiora relazioni. RNG iniettabile nei test. Nessun dettaglio operativo reale.

## Revisione intermedia

1. Governo, investimenti, mantenimento e schede confrontabili: implementati nella nuova UI; bonus composizione e ricerca nella risoluzione aggregata.
2. Contingenti, prudente/equilibrato/aggressivo, terreno, distanza, preparazione: da implementare.
3. Relazioni motivate, commercio, non aggressione, alleanze difensive e tre missioni intelligence: da implementare (rimangono le precedenti azioni semplici).
4. Stabilizzazione scelta, prestigio e difficoltà IA: da implementare.
5. Backend autorevole, alleanze umane e gabinetti: da implementare.


## Aggiornamento società e catalogo — 30 ottobre 2026

Fase A completata: stato sociale persistente, cause configurabili, avvisi, progressione non automatica verso disordini, effetti economici e rallentamento investimenti. Dialogo, servizi, fiscalità e disimpegno agiscono gradualmente.

Fase B completata: quattro livelli progressivi di polizia con costo/durata/mantenimento, tre capacità e protezione temporanea dei servizi. Nessun bonus artificiale al consenso; coercizione penalizza fiducia e tensione.

Fase C funzionale: catalogo 15/15/20/15 con filtri, confronto a due, quantità/acquisto/consegna integrati; conteggio combinazioni basato sulle componenti, non sul numero di modelli. Provenienza e parametri separati. Due foto identificate e con licenza documentata, 63 foto mancanti esplicite e 20 verifiche identificative parziali: documentazione fotografica completa ancora aperta.

Fase D verificata: emoji eliminate anche dai vecchi testi sorgente e dai messaggi salvati; caricamento JSON validato; compatibilità v2. 46 test automatici verdi e build riuscita. Browser QA desktop: selezione, upgrade polizia, catalogo/filtri/confronto, foto e acquisto. Test significativi: guerra prolungata, non automatismo delle violenze, interventi graduali, costi senza consenso, coercizione, perdita/ritiro, slowdown, salvataggio/migrazione e assenza emoji.

Avvio `npm ci && npm run dev`; verifiche `npm test` e `npm run build`. Non è implementato il multiplayer. Non sono state completate le altre fasi intermedie elencate sopra.


## Fotografie su tutto l’inventario — 30 ottobre 2026

Interfaccia integrata per tutti i 78 oggetti/potenziamenti implementati: anteprima, ingrandimento nei dettagli e crediti; mezzi posseduti, presidenza posseduta, acquisti/confronti, ordini, investimenti e livelli della polizia. Inventario documentato in PHOTOS.md e audit JSON pubblico. Auto, elicotteri e dotazioni individuali della polizia non sono ancora oggetti acquistabili.

Copertura **77/78**: manca solo **Leclerc XLR**, non sostituito con un altro Leclerc né con l’immagine sospetta individuata. **Lavoro fotografico non completo.** Le altre fotografie sono identificate e licenziate nei registri separati dal motore. Residenze generiche e livelli astratti usano immagini dichiaratamente illustrative. Miniature 480 px, dettagli fino a 960 px, object-fit contain, crediti fuori dall’immagine. 148 file WebP validati, circa 6,8 MiB in totale; caricamento lazy.

50 test verdi, build riuscita; QA desktop e viewport smartphone 390×844 su cataloghi/beni posseduti, foto ingrandite, crediti e audit. Pannello smartphone largo 360 px con contenuto largo 360 px, nessuna eccedenza laterale. Nessun dispositivo fisico testato. Restano i limiti delle altre milestone, incluso multiplayer non implementato.


## Armamenti — 30 ottobre 2026

18 voci nuove (tre per categoria), 17 fotografie documentate e RBS15 Mk II mancante. Cinque composizioni fotografiche da migliorare: non dichiarare completa la parte immagini. Interfaccia con catalogo, quantità, conferma e fotografie fullscreen; crediti separati. Scorte, difese territoriali, disponibilità vettori, consumi e intercettazioni persistono. Piano generato esclusivamente dal dominio e ricalcolato nel server, non dal payload client. Migrazione PostgreSQL 002 e ledger idempotente per gli impieghi.

67 test dominio/dati superati, build riuscita e QA browser locale sul flusso acquisto/consegna/assegnazione. Test PostgreSQL esteso ma saltato perché database non disponibile. Il backend non è attivato sull’hosting statico. Restano bloccati gli attacchi fra paesi umani e non sono completate alleanze/chat/gabinetti online. Vedi ARMAMENTS.md.

## Sicurezza e forze speciali

Crisi occasionali indipendenti dalle proteste; prevenzione, risposte, squadre con sei missioni automatiche e recupero. Pannello locale/API, configurazione e migrazione 003: vedi SECURITY.md. Cooperazione umana subordinata alle API alleanze ancora assenti; non dichiarata funzionante. Test database richiede host PostgreSQL.
