# Armamenti convenzionali e difese — 30 ottobre 2026

18 voci (tre per categoria). Identità e compatibilità pubbliche documentate; tutti i numeri sono esclusivamente valori di gioco. Nessuna gittata, procedura o parametro operativo reale è utilizzato.

## Catalogo e fonti

| Modello | Categoria | Piattaforme ammesse nel gioco | Fonte |
|---|---|---|---|
| GBU-31 JDAM | bomb | b52, b2, b1 | [Fonte](https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104572/joint-direct-attack-munition-gbu-313238/) |
| GBU-38 JDAM | bomb | b52, b2, b1 | [Fonte](https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104572/joint-direct-attack-munition-gbu-313238/) |
| Mk 82 | bomb | b1, b2, a10 | [Fonte](https://odin.t2com.army.mil/WEG/Asset/6959d6621a86f37c8ac234d7fc99816c) |
| AIM-9X Sidewinder | airAir | superhornet, growler, f22, f35 | [Fonte](https://www.navair.navy.mil/product/AIM-9X-Sidewinder) |
| AIM-120 AMRAAM | airAir | superhornet, f22, f35 | [Fonte](https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104576/aim-120-amraam/) |
| Meteor | airAir | typhoon, rafale, gripen | [Fonte](https://www.mbda-systems.com/products/air-dominance/meteor) |
| AGM-65 Maverick | airSurface | a10, superhornet | [Fonte](https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104577/agm-65-maverick/) |
| AGM-88E AARGM | airSurface | superhornet, growler | [Fonte](https://www.navair.navy.mil/product/AARGM) |
| Brimstone | airSurface | typhoon | [Fonte](https://www.mbda-systems.com/products/tactical-strike/brimstone) |
| Harpoon A/RGM-84 | antiShip | burke, superhornet | [Fonte](https://www.navair.navy.mil/harpoon) |
| Exocet AM39 | antiShip | rafale | [Fonte](https://www.mbda-systems.com/products/deep-strike/exocet-family/exocet-am39) |
| RBS15 Mk II | antiShip | visby | [Fonte](https://www.saab.com/products/the-rbs15-family) |
| Tomahawk Block IV | cruise | burke | [Fonte](https://www.navair.navy.mil/product/Tomahawk) |
| SCALP EG | cruise | rafale | [Fonte](https://www.mbda-systems.com/products/deep-strike/storm-shadow-scalp) |
| AGM-158A JASSM | cruise | b1, b2, b52 | [Fonte](https://www.saffm.hq.af.mil/Portals/84/documents/FY26/FY26%20Air%20Force%20Missile%20Procurement.pdf) |
| Patriot (configurazione PAC-3) | defense | Sistema terrestre autonomo | [Fonte](https://www.mda.mil/system/pac_3.html) |
| SAMP/T | defense | Sistema terrestre autonomo | [Fonte](https://www.esercito.difesa.it/en/equipment/artillery/antiaircraft-artillery/samp-t/75953.html) |
| NASAMS | defense | Sistema terrestre autonomo | [Fonte](https://www.kongsberg.com/what-we-do/defence-and-security/integrated-air-and-missile-defence/nasams-air-defence-system/) |

## Regole implementate

- Acquisto con addebito immediato, ricerca e quantità validate; consegna differita. I consumabili restano separati dall’inventario dei mezzi.
- Impiego Limitato/Standard/Intensivo: fino a 1/3/6 slot astratti. Non sono capacità reali dei velivoli o carichi operativi. Un vettore libero viene prenotato per ogni slot; la stessa piattaforma non può supportare più operazioni contemporanee.
- Il gioco sceglie solo piattaforme presenti nella whitelist documentata. Limitato e Standard privilegiano scorte meno costose; Intensivo privilegia potenza × precisione di gioco. Non compra automaticamente ciò che manca. Se non ci sono scorte/vettori compatibili, l’operazione prosegue con i soli mezzi convenzionali.
- Ordigni addebitati alle scorte alla partenza. Il costo già pagato è mostrato come valore consumato, separato dall’addebito operativo, senza doppio pagamento. Nessun rimborso al ritiro. Rinforzare un’operazione non consuma nuovamente il suo piano.
- Intercettazioni deterministiche dal sorteggio server conservato nell’ordine; bonus offensivo massimo 25%, probabilità residuale di fallimento almeno 8% per operazioni con ordigni. Restano fanteria e supporto necessari alla conquista.
- Le difese vengono assegnate inizialmente al proprio paese; si possono trasferire tutti gli esemplari di un modello a un territorio controllato. Costo 20 e durata 20 secondi, assenza di copertura durante il trasferimento. Stock totale invariato, assegnazione esclusiva. Mantenimento automatico alla consegna.
- Copertura massima 80%, possibilità astratta di intercettazione massima 65%. Potenza, precisione e resistenza astratta al contrattacco influenzano il modello, senza garantire immunità. Le statistiche non sono una valutazione tecnica dei sistemi reali.
- La risposta convenzionale astratta dell’IA colpisce un territorio già controllato, scelto dal sorteggio conservato. Difese e intercettazione parziale limitano il costo economico. Intensità maggiore riduce consenso e aumenta tensione. Guerre e perdite conservano le precedenti conseguenze sociali.

## Server e persistenza

Le API buyArms, deployDefense e order/attack invocano lo stesso dominio lato server. Il client invia solo scelta, quantità, destinazione e intensità: prezzi, sorteggio, allocazioni, consumi ed esiti sono calcolati dal server. Non è accettato un piano armamenti fornito dal browser. Il sorteggio futuro viene rimosso dalla proiezione dei dati inviata al client.

Scorte, assegnazioni, contratti di consegna, piano consumato e risultato intercettazioni persistono nello snapshot JSONB del partecipante. La migrazione 002_ordnance inizializza i vecchi snapshot, applica vincoli sul tipo delle strutture e crea un registro immutabile degli impieghi, con chiave univoca comando/armamento e quantità positiva. Aggiornamento stato, chiave idempotente ed impiego sono nella medesima transazione con lock della partita.

Il sito Sites continua ad essere statico. Per validazione autorevole e PostgreSQL serve la distribuzione Node/Compose descritta in BACKEND.md. Gli attacchi fra giocatori umani restano bloccati: non si presenta il precedente mondo IA come guerra multiplayer territoriale funzionante. Il salvataggio locale mantiene le nuove proprietà ma è modificabile dall’utente e non è importabile nel server.

## Immagini e limiti aperti

17 fotografie autentiche documentate, miniatura e immagine grande WebP. RBS15 Mk II resta Foto non disponibile: nessuna sostituzione con Mk3. Cinque fotografie (GBU-31, GBU-38, SCALP, JASSM e SAMP/T) comprendono persone, vettore o contesto espositivo e richiedono una composizione migliore. Non si dichiara il lavoro fotografico completamente conforme al requisito del solo oggetto. Fonti e licenze in photos-ordnance.json e Crediti immagini; fullscreen con sola foto e chiusura, senza crediti sovrapposti. Nessun watermark rimosso o immagine generata.

## Verifica

67 test dominio e dati superati, inclusi dieci casi nuovi per acquisto/consegna, compatibilità, intensità, consumo/idempotenza, vettori impegnati, trasferimenti difensivi, intercettazioni, conseguenze e migrazione salvataggi. Build TypeScript/Vite riuscita. Test PostgreSQL esteso con acquisti simultanei, piano client contraffatto e registro consumi, ma saltato in questo ambiente perché il database non è disponibile: nessuna pretesa di verifica end-to-end online.

QA browser: catalogo aperto, costo di due GBU-31 mostrato e acquisto confermato, consegna conclusa, B-52H consegnato, Patriot assegnato con copertura 8%, riepilogo operativo con GBU-31 assegnata al B-52H e valore consumato separato dall’addebito. Sorteggio ed esiti reali non sono presentati come notizie.
