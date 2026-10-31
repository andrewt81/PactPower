# Economia: acquisti e spie

La tesoreria diminuisce solo per acquisti iniziali di catalogo, reclutamenti/potenziamenti/investimenti confermati, oppure missioni spia (25 crediti una volta alla conferma). Nessun mantenimento, costo operativo o addebito automatico. Entrate sempre non negative, pur ridotte dagli eventi. Consumo di ordigni e perdite restano attivi. Nessun rimborso storico.

`debits` nello snapshot JSONB registra importo, tipo purchase/spy, oggetto, comando e tempo. Il server confronta la variazione della tesoreria di ogni comando con i nuovi addebiti registrati, nella transazione e con la deduplicazione esistenti. Un ordine rifiutato fa rollback. Le vecchie scadenze non addebitano nuovi importi.

Aiuti IA solo militari: rifiutate nuove richieste money/relief, trasferimenti di materiale dall'inventario. Vecchi trasferimenti monetari già partiti possono essere consegnati senza nuovi addebiti né rimborsi. Vecchio comando aid non più disponibile.

Verifiche nuove: spia 25 una volta, budget insufficiente/ordine invalido senza addebito; acquisti registrati; tempo, dialogo, discorso e missione speciale senza spesa; mantenimenti zero. Alcuni test storici che richiedevano mantenimenti/aiuti in denaro sono esplicitamente saltati perché incompatibili; devono essere riscritti mantenendo le verifiche non economiche. PostgreSQL non disponibile: concorrenza e rollback SQL non eseguiti in questo ambiente.
