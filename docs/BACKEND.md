# Backend Node e PostgreSQL — prima fase

Il sito Sites attuale è statico: non esegue questo server Node, né ospita PostgreSQL/SMTP. Questa distribuzione si esegue su un host Docker con HTTPS e reverse proxy. Non cambiare il manifesto Sites per fingere un backend disponibile.

## Avvio

Node 24, PostgreSQL 17. Copiare `.env.example` in `.env`, impostare una password PostgreSQL casuale alfanumerica e lunga. Non commettere `.env`.

```sh
docker compose --profile development up --build -d
```

Applicazione http://localhost:3000, casella **di test** Mailpit http://localhost:8025. Le migrazioni vengono applicate all'avvio sotto advisory lock. Comando separato:

```sh
docker compose exec app npm run migrate
```

Produzione: HTTPS davanti alla porta privata 3000, PUBLIC_ORIGIN esatto, NODE_ENV=production (cookie Secure), SMTP reale configurato, MAIL_FROM autorizzato. Disattivare il profilo development e non esporre Mailpit. L'assenza di SMTP blocca registrazione e recupero con HTTP503; la presenza delle variabili non prova la consegna. L'outbox viene ritentata dal worker. Link in frammento URL, hash dei token nel database, monouso e durata 30 minuti. Mailpit non è invio email reale.

## Operativo nel codice

Argon2id; sessioni con token casuali memorizzati come hash, cookie HttpOnly/SameSite Strict, CSRF per sessione e controllo Origin, limiti persistenti per autenticazione. Registrazione/verifica email/login/logout/profilo/cambio password e reset monouso con revoca sessioni. Database per utenti, sessioni, token, outbox, partite, partecipanti, stati, comandi ed eventi. Schema preliminare per alleanze, messaggi e voti: **non significa che le relative API siano implementate**.

Creazione partite, codice ingresso, paese unico con vincolo SQL e lock sulla partita. Ogni comando autenticato riusa il dominio esistente sul server. Browser non invia saldi, clock, risultati o inventario. Duplicati serializzati per partita con digest del payload e chiave univoca. Le proiezioni includono solo lo stato del proprietario e i paesi pubblici altrui. Nessuna importazione di salvataggi locali nel multiplayer.

Worker ogni secondo per recuperare tempo e ordini. Il tempo deriva dal database, viene recuperato dopo un riavvio, e gli esiti risolti sono salvati nella stessa transazione. Il polling autenticato ogni 2 secondi recupera lo stato canonico; endpoint eventi con cursore. Nessuna pausa o velocità modificabile dal partecipante. Il singolo precedente resta separato.

## Non completato

Interazioni fra paesi umani (attacco, diplomazia, aiuti, intelligence), alleanze, inviti, chat e gabinetti/votazioni non hanno ancora API operative. Vengono rifiutate invece di lasciare al motore IA decidere per un altro giocatore. Non c'è ancora prenotazione per territori AI occupati dopo un'operazione concorrente fra umani. Non usare questa prima fase per una partita competitiva. Le operazioni contro IA restano gestite dal motore precedente; non è ancora un mondo territoriale condiviso completo. Nessuna verifica SMTP reale. Nessuna verifica di due account su PostgreSQL eseguita nell'ambiente corrente.

## Test

```sh
npm test
npm run build
# Solo database dedicato di test, non produzione:
DATABASE_URL=postgres://... SMTP_HOST=localhost MAIL_FROM=test@example.test npm run test:server
```

Il test di integrazione richiede PostgreSQL raggiungibile, crea due account distinti e usa l'outbox di test per verificare token monouso, login/logout/reset, unicità paese, isolamento stato, comandi simultanei/duplicati e revoca. Riavvia l'istanza applicativa mantenendo lo stesso DB; non riavvia il processo PostgreSQL. Senza DATABASE_URL il test è esplicitamente saltato, non superato. Non si inviano email durante questo test. Non eseguire con il worker di produzione connesso all'outbox di test.

## Backup e ripristino

```sh
docker compose exec -T db pg_dump -U dominion -d dominion -Fc > dominion.dump
# Fermare l'app prima del ripristino; conservare una copia del DB esistente.
docker compose stop app
docker compose exec -T db pg_restore -U dominion -d dominion --clean --if-exists < dominion.dump
docker compose start app
```

Verificare periodicamente il ripristino su un database separato. Salvare i backup cifrati fuori dall'host, con accesso limitato: contengono email e hash di autenticazione. Il volume pgdata sopravvive a `docker compose down`; non usare `down -v` se si vogliono conservare le partite.

`/healthz`: processo HTTP. `/readyz`: accesso database (503/500 se non disponibile), con indicazione della sola configurazione SMTP. Non viene dichiarata l'effettiva raggiungibilità SMTP.

## Verifiche dell'ambiente di sviluppo

Node 24 presente; Docker e PostgreSQL assenti. Il tentativo di installazione PostgreSQL tramite apt fallisce perché il contenitore non permette setgroups/setuid. Non è stato aggirato il limite. Verificati caricamento del server e healthz mediante inject HTTP; compilazione frontend e test dominio. Test con PostgreSQL e due account da eseguire sull'host di installazione. Questo limite non è una prova di correttezza del backend: autenticazione e transazioni rimangono non verificate end-to-end.


## Configurazione automatica

`node scripts/configure-backend.mjs` crea `.env` con password casuale del database e permessi 0600, senza sovrascrivere configurazioni già esistenti né visualizzare segreti. La modalità predefinita usa solo Mailpit in sviluppo. `node scripts/backend-status.mjs` verifica la disponibilità di Compose e lo stato dei servizi: non confonde configurazione e avvio.

Su un host Docker autorizzato:

```sh
node scripts/configure-backend.mjs
docker compose --profile development up --build -d
node scripts/backend-status.mjs
```

Per una nuova configurazione di produzione impostare PUBLIC_ORIGIN HTTPS, SMTP_HOST, MAIL_FROM e i parametri del proprio servizio SMTP nell’ambiente del comando `node scripts/configure-backend.mjs --production`. Il file esistente viene conservato: modificare esplicitamente quello in uso durante un passaggio da sviluppo a produzione, senza rigenerare la password di un database già inizializzato. In produzione SMTP richiede TLS, con porta predefinita 587; porta 465 con SMTP_TLS=true per TLS implicito. Avviare senza il profilo development. Il reverse proxy deve terminare HTTPS sul dominio configurato e inoltrare verso 127.0.0.1:3000.

Verifica di questa configurazione: `.env` di sviluppo creato e protetto; servizi non avviati perché Docker Compose assente nell’ambiente di lavoro. Nessun VPS o host aziendale è stato contattato o modificato.


## Armamenti

Migrazione `002_ordnance.sql`, azioni API `buyArms`, `deployDefense`, parametro `intensity` per `order/attack`. Registro degli impieghi e snapshot vengono salvati nella stessa transazione del comando. La proiezione client esclude il sorteggio futuro. Il test PostgreSQL include scorte simultanee, doppio comando e un piano contraffatto ignorato dal server, ma non è stato eseguito senza database. Vedi ARMAMENTS.md.


## Sicurezza e forze speciali

Migrazione `003_security.sql`, comando `action: security`, snapshot di squadre e missioni, audit delle crisi e proiezione senza esiti futuri. Tutti gli ordini usano la transazione e la deduplicazione esistenti. Guida in SECURITY.md. Le missioni verso altri giocatori sono rifiutate finché non esistono autorizzazioni cooperative reali. Test PostgreSQL ampliato, ma saltato in questo ambiente.
