# Architettura e contratti

## Confini attuali

- `src/domain/types.ts`: stato, paese, ordini, eventi. Nessuna dipendenza React.
- `src/simulation/engine.ts`: funzioni pure sullo stato e clock iniettabile. Non accede a browser, rete o storage. Errori di dominio in italiano. Mutazioni su copie.
- `src/data/balance.ts`: configurazione dei costi, durate, effetti descritti e limiti M1. I coefficienti della fiscalità verranno raccolti in una configurazione economica dedicata prima di M2.
- `src/data/countries.json`: metadati geografici e valori iniziali inventati per il gioco.
- `src/persistence/save.ts`: schema versionato e storage locale. JSON esportabile.
- `src/components/WorldMap*.tsx`: adapter geografici (WebGL/SVG), senza autorità sulla simulazione.
- `src/App.tsx`: presentazione e coordinamento delle interazioni.

L'orologio è UTC per tutte le date di gioco; la simulazione inizia il 1 gennaio 2026. Una data di gioco non rappresenta una previsione o uno stato geopolitico reale.

Il runner usa un clock monotono, legge delta reali e li traduce in ore simulate. Il grande intervallo viene diviso ai confini orari e a ogni completamento di ordine, per non applicare retroattivamente i benefici. Nella modalità locale una singola ripresa del browser recupera al massimo 60 secondi reali di attività sospesa della scheda; chiusura e riapertura non applicano recupero offline.

## Backend M4 (progetto, non presente)

React statico può restare sull'hosting corrente. Runtime disponibile: Cloudflare Workers con connessioni HTTP, non server Node/PostgreSQL TCP. La scelta coerente con la richiesta è un backend esterno Node.js e PostgreSQL, con proxy HTTP/WebSocket autenticato. Non sostituire silenziosamente PostgreSQL con uno storage locale o D1.

Moduli server: identity, matches, country ownership, commands, simulation, intelligence projections, diplomacy, alliances, cabinet. API HTTP per comandi e recupero snapshot; WebSocket per eventi sequenziati. Tutti i comandi hanno `requestId`, `matchId`, `expectedRevision`; il server ricava actor dall'identità autenticata. Cookie HttpOnly/Secure/SameSite o token con rotazione; credenziali solo in variabili d'ambiente.

Transazione PostgreSQL: lock della partita/paese, verifica autorizzazioni, disponibilità, bilancio e capacità, addebito, inserimento ordine e ricevuta idempotente. Vincoli `UNIQUE(match_id, country_id)` per l'assegnazione e `UNIQUE(match_id, actor_id, request_id)` per la deduplicazione. Non accettare timestamp di completamento, esiti o saldi dal client. Completamento ordini con lock e confronto stato previsto. Eventi e outbox nella stessa transazione. Il worker risolve gli ordini scaduti anche quando tutti i giocatori sono offline, usando l'ora server.

Le proiezioni server sono costruite separatamente per ogni destinatario. Non serializzare lo stato completo e filtrarlo nel browser. Snapshot pubblico: statistiche note/approssimative e geografia; stato privato: tesoreria, ordini e rapporti del proprietario; chat e verbali: membri autorizzati. Rapporti intelligence con data di raccolta e scadenza. Verificare che i segreti siano assenti nei payload di rete.

Riconnessione: client invia ultimo sequence ID; server fornisce eventi mancanti o nuovo snapshot se il log è scaduto. Riconciliazione `requestId` per comandi inviati prima della disconnessione. Lato browser lo stato autorevole arriva dal server e non deriva dal file locale. Le campagne locali non vengono importate in partite competitive.

## Gabinetti (M5)

ACL per convocare, invitare, leggere, intervenire, proporre e votare. Quorum/majority/scadenza fissati alla creazione, elettori espliciti, voto unico per partecipante e proposta. Snapshot dell'elettorato per evitare manipolazioni del quorum. Controproposte e rinnovi creano nuove revisioni. Le delibere hanno valore diplomatico e producono solo comandi autorizzati: nessuna spesa o cessione di risorse altrui senza delega esplicita registrata, limitata e revocabile.
