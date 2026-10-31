# Discorso alla nazione

Società e polizia → Apri un dialogo. Testo 50–1.000 caratteri, cause visibili, costo 35 crediti, reazione dopo 25s e intervallo 240s. Nessun premio per lunghezza, ideologia o linguaggio elaborato.

Valutazione strutturata: pertinenza, rispetto, credibilità, coerenza (0–100) e motivazione breve. Il valutatore a regole riconosce temi tramite parole chiave italiane: è un modello semplificato, non comprende pienamente negazioni, ironia o ogni promessa. Un testo breve pertinente può funzionare. Risorse insufficienti per promesse costose, contraddizioni con guerre attive e impegni disattesi riducono la valutazione. Insulti e istruzioni esplicite per manipolare il valutatore non danno consenso.

Esiti: Accolto, Accolto in parte, Respinto. Limiti in `speech-rules.json`: massimo beneficio immediato tensione −6, consenso +3, fiducia +2; rifiuto fiducia −2 senza aumento diretto della tensione né cambio dello stadio delle proteste. Le cause sociali e la loro progressione restano indipendenti. Messaggi uguali o molto simili negli ultimi 1.200s ricevono rendimenti decrescenti. Nessuna estensione automatica del vecchio bonus di dialogo.

Il giocatore conferma separatamente gli impegni proposti (servizi, tasse, riduzione guerre). La semplice menzione di un tema non crea un obbligo: nessuna azione viene pagata o avviata automaticamente. Baseline registrata all'avvio; miglioramento del settore, tassazione inferiore o numero di guerre inferiore entro 600s mantiene la promessa. Fiducia +2 se mantenuta, −3 se disattesa, una volta sola. Non vengono valutate promesse generiche non traducibili in queste azioni.

## Servizio IA facoltativo

Solo server: `SPEECH_EVALUATOR_URL`, eventuale `SPEECH_EVALUATOR_TOKEN` nell'ambiente del container app. Endpoint HTTP POST configurato dall'amministratore, contratto in `server/speech-evaluator.mjs`: instruction, context (cause/risorse aggregate/azioni e impegni di gioco), playerText separato come testo non fidato. Risposta JSON con relevance, respect, credibility, consistency, reason. Nessuna email, token di sessione, identità, inventario segreto o dati di altri giocatori vengono trasmessi. Il gestore deve scegliere un servizio fidato per il testo del giocatore. Non viene fornito né dichiarato attivo un modello linguistico remoto: senza configurazione viene usato il valutatore a regole, esplicitamente indicato nell'interfaccia.

Timeout 3s, schema/range e lunghezza risposta controllati, fallback su errore. Il modello non modifica lo stato: `pronounce` valida indipendentemente il contesto, applica guardie e i soli effetti configurati. Nessun campo di risorse restituito dal modello viene usato. Prima della chiamata sono controllati anche lunghezza, budget, attesa e impegni, per non interrogare il servizio su ordini non validi.

## Persistenza e autorizzazione

Comando autenticato `action: speech`, text, commitments; destinatario derivato dalla sessione. Stesso lock/transazione e deduplicazione degli altri comandi. Il server non accetta valutazioni o variazioni dal client. Migrazione 005, snapshot JSONB con testo, valutazione, esito, variazioni, impegni e scadenze. Recupero con clock server e risoluzione una volta sola. Nel singolo la stessa logica usa l'orologio locale sostituibile e il salvataggio automatico.

I vecchi ordini dialogue nei salvataggi restano risolvibili per compatibilità; l'interfaccia locale apre il nuovo pannello e l'API rifiuta nuovi ordini legacy dialogue. PostgreSQL non disponibile nell'ambiente di sviluppo: migrazione e test SQL con due account devono essere verificati sull'host Docker. Il sito statico pubblicato non esegue il server né il servizio IA esterno.
