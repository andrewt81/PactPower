# Rapporti — prima fase

Implementati rapporti persistenti dalle missioni spia concluse, pulsante con non letti, paese/tempo di gioco/attendibilità, filtri, lettura, archiviazione e collegamento alla mappa. Avviso di informazione potenzialmente superata dopo 300s. ID uguale alla missione: nessun duplicato dopo salvataggio o recupero. Il riepilogo della consegna rimane anche nel registro degli eventi.

Nel backend i rapporti sono nello snapshot JSONB privato del partecipante; il comando autenticato `report` con report e operation (read/archive) opera solo sullo stato del proprietario. Non vengono inviati gli stati degli altri partecipanti.

NON implementato in questa fase: controllo per zone geografiche, percentuali di occupazione, riconquiste, occupanti concorrenti, annessione dopo accordo, osservazioni prolungate, scoperte di piani e condivisione alleanza. Le spie restituiscono soltanto la stima militare esistente: non inventano intenzioni. Il combattimento continua a usare il precedente sistema nazionale; non è presentato come conquista progressiva. Il backend condiviso territoriale e le API delle alleanze mancanti richiedono una fase ulteriore.

Test PostgreSQL non eseguibile nell'ambiente corrente senza database. Questa fase non completa la richiesta territoriale.
