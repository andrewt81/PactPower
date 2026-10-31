# Sicurezza e forze speciali — prima versione

## Funzionamento

Dal proprio paese → **Sicurezza e forze speciali**. Tre schede: crisi e rapporti, squadre, prevenzione. Un solo pannello, anteprima di obiettivo/costo/tempo/rischio, conferma esplicita. Il pannello è disponibile anche nella distribuzione Node dalla schermata Multiplayer; lì esegue soltanto comandi API e mostra lo stato ricevuto dal server.

Gli attentati non sono ordinabili e non derivano da proteste, consenso, tassazione o appartenenza etnica/religiosa. Le crisi sono finzione, etichettate SIMULAZIONE. Non sono notizie reali, né aggiornamenti degli scenari. Nessuna procedura operativa o rappresentazione cruenta.

Periodo iniziale protetto 600 secondi di gioco; controllo ogni 240 secondi, probabilità 40%, intervallo minimo 600 secondi dopo una crisi. Alcune segnalazioni precedono l'evento di 40 secondi; non tutte le minacce sono individuate. In media gli eventi sono meno frequenti dell'intervallo minimo. Crisi di servizi o ostaggi, gravità 1–3; durata base 300 secondi, entrate ridotte al massimo del 18%, investimenti rallentati al massimo del 20%. L'ultimo minuto attenua gradualmente l'impatto economico. Il consenso non provoca sconfitte improvvise.

Intelligence, sicurezza pubblica e protezione presidenziale: tre livelli, costi crescenti, tempi e mantenimento. Intelligence migliora avvisi/indagini e può evitare una crisi, con protezione massima molto inferiore al 100%. Sicurezza pubblica riduce l'entità dei danni. Protezione presidenziale riduce il rischio distinto dall'accettazione diplomatica della visita; rischio residuo almeno 2%.

Risposte per ciascuna crisi nazionale: indagini, soccorsi, riparazioni, rassicurazione. Una stessa risposta non può essere acquistata due volte per la stessa crisi. Tutte sono ritardate, mai cancellazione immediata dell'emergenza. Rapporti datati: incerto, sospetto o confermato **nella partita**. Nessuna attribuzione a Stati o manifestanti; l'eventuale responsabile è una cellula fittizia indipendente.

## Squadre e missioni

Massimo sei squadre, compresi i reclutamenti pendenti. Reclutamento 240 crediti/45s, mantenimento base 0,18/s. Tre livelli; miglioramenti 180 × livello/60s e +30% mantenimento base per livello. Preparazione, discrezione, soccorso sono statistiche astratte 0–100. Esperienza +1 per missione riuscita (bonus alle statistiche limitato a 10). Nomi personalizzabili senza emoji.

Stati: disponibile → preparazione → missione → recupero → disponibile. Miglioramenti prenotano la squadra. Nessuna doppia prenotazione. Sei missioni: scorta di una visita già ordinata, evacuazione in crisi, liberazione ostaggi in una crisi pertinente, supporto indagini, protezione infrastrutture controllate, ricognizione in territorio di un avversario con cui si è in guerra. Le visite scortate vengono prolungate per consentire la preparazione della squadra.

Durata missione = preparazione 45s + esecuzione configurata. Probabilità = 40% + metà statistica pertinente in punti percentuali − 30% del rischio configurato; limitata al 25–85%. Nessuna invincibilità. Recupero 45s dopo successo, 90s dopo fallimento. Il proprietario conferma ogni impiego e paga solo le proprie risorse.

Gli alleati IA consentono le missioni astratte all'estero. Senza autorizzazione, occorre confermare esplicitamente: relazione −12 e consenso −2 all'avvio, anche in caso di fallimento. La relazione modifica le successive risposte diplomatiche IA, con probabilità sempre limitate. Soccorso estero riuscito: relazione +4. Nessuna conquista. Infrastrutture protette: effetto temporaneo sui danni attivi e sui nuovi eventi; scorta riduce il rischio della visita, non garantisce accordi.

## Server, persistenza e limiti

`security.ts`: dominio separato; `security-rules.json`: tutti i valori di bilanciamento. `engine.tick` usa l'orologio fornito, economia/mantenimento ed esiti persistiti. Il locale mantiene pausa/salvataggio automatico, distinto dal server.

API `POST /api/games/:id/commands`, `action: security`, `command: {kind,item,team,target,crisis,name,unauthorized}` secondo l'azione. Il server genera roll e seed, ignora costi ed esiti inviati dal client, controlla appartenenza della squadra, contesto, destinazione, disponibilità e budget. Stesso lock di partita/transazione e chiave univoca `(game,user,command)` degli altri ordini; stesso ID/payload non spende due volte, stesso ID/payload diverso è rifiutato. Proiezioni escludono sorteggi futuri, seed, pianificazione interna e stati degli altri partecipanti.

Migrazione `003_security.sql`: vincolo sullo snapshot e tabella di audit `security_incidents` con chiave per partita/proprietario/evento. Incidenti e stato sono aggiornati nella stessa transazione. Squadre, missioni, esperienze, effetti e rapporti sono nello snapshot JSONB del partecipante. Il riavvio recupera scadenze con `last_tick` del database; gli ordini conclusi non sono risolti di nuovo. Le crisi estere in questa fase riguardano solo paesi IA; non sono incidenti condivisi fra gli stati di due partecipanti umani.

**Non implementato:** richieste di aiuto, condivisione di segnalazioni e prestito di squadre tra giocatori. Le API delle alleanze del progetto non sono ancora operative; missioni verso paesi umani sono rifiutate, anche con `unauthorized`. Non viene simulato un consenso dell'altro giocatore. I soccorsi all'estero riguardano solo l'IA e non trasferiscono denaro a utenti.

Il sito Sites rimane un frontend statico con modalità singolo. Il server Node/PostgreSQL richiede il deploy Docker documentato in BACKEND.md; questa modifica non lo attiva sul sito statico.

## Fotografie

Foto documentate già incluse, riutilizzate con metadati completi. La pattuglia di Varsavia illustra astrattamente la funzione di sicurezza, **non** un reparto reale di forze speciali o la squadra posseduta. Laboratorio per l'investimento di intelligence. Nessuna foto generata o attribuzione inventata. Crediti nella sezione dedicata; visualizzatore condiviso con solo foto e chiusura. Le squadre restano entità fittizie: nessuna fotografia identifica personale effettivamente reclutato.

## Verifiche

Test di dominio: indipendenza dalle proteste, intervalli, effetti economici e temporanei, costi/mantenimento, doppio ID, autorizzazioni e prerequisiti delle sei missioni, esito negativo anche al massimo livello, esclusività e recupero, esperienza, scorta, protezione, salvataggio e risoluzione una sola volta. Test d'integrazione PostgreSQL ampliato con due account, reclutamento simultaneo, costo imposto dal server, rifiuto di squadra altrui/doppio impiego e filtraggio degli esiti.

In questo ambiente PostgreSQL e Docker non sono disponibili: il test d'integrazione è saltato esplicitamente, non superato. Migrazione e concorrenza reale restano da verificare sull'host Docker prima dell'uso online.
