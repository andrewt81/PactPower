# Classifica mondiale

Due schede: ricchezza e forza bellica, ricerca, propria posizione, pari merito (1,1,3), variazione rispetto alla precedente fotografia. Bandiere SVG locali da flag-icons 7.6.0 (MIT), licenza in public/flags/LICENSE.txt; simbolo neutro se un codice territoriale non dispone di bandiera. Nessuna emoji.

Aggiornamenti ogni 30 secondi di simulazione; ora mostrata come tempo trascorso nella partita. Pausa e velocità locali rispettate. In online il server avanza lo stesso registro IA condiviso degli aiuti e gli stati dei partecipanti autenticati. Un paese umano sostituisce la propria voce IA, non viene duplicato. Lo snapshot pubblico persistente in games.rankings (migrazione 006) è distinto per partita, non contiene inventari, missioni, rapporti, intenzioni o contributi delle categorie altrui. Il nome pubblico del giocatore è incluso. Il proprio dettaglio è calcolato sul proprio stato autorizzato.

Configurazione ranking-rules.json: pesi per categoria/modello; contributo ordinario quantità × (efficacia ×0.5 + resistenza ×0.3 + mobilità ×0.2). Difese: quantità × media potenza/precisione. Mezzi distrutti o trasferiti non sono più nell'inventario e quindi escono dal punteggio; mezzi in missione rimangono nell'inventario, contati una volta sola. Ordigni consumabili esclusi. Non ci sono ordigni nucleari implementati: contributo attuale zero, tetto configurato zero, nessun dato tecnico reale dedotto da questo punteggio.

Le nazioni IA usano il loro registro reale di gioco degli aiuti: inventari e tesorerie iniziali semplificati, attualmente uguali e finiti. Non sono dati reali o valutazioni militari reali. Le loro guerre non hanno ancora una simulazione economico/militare nazionale completa; la classifica non inventa crescita o acquisti IA per creare movimento.

Test: parità, sostituzione IA/giocatore, variazioni di posizione, esclusione dati segreti, consegne e perdite. Build e suite locale; PostgreSQL non disponibile nell'ambiente, test concorrenza/isolamento reale da eseguire sull'host Docker. Il sito Sites resta singolo statico; la classifica online richiede il backend Node/PostgreSQL avviato.
