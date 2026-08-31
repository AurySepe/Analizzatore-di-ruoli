# 🕷️ Linee Guida Estrattori & Ingestion Worker

## 1. Isolamento dei Database per Servizio (Database-per-Service)
- **Zero Dipendenza dal DB Centrale**: Nessun estrattore (`arbeitnow`, `remotive`, `jobicy`, `weworkremotely`) può connettersi o scrivere direttamente sul database centrale PostgreSQL.
- **Database Isolato e Outbox Locale**: Ciascun estrattore gestisce il proprio database SQLite o schema dedicato e la propria tabella Outbox locale (es. `ArbeitnowJobOfferOutbox`).
- **Canale Unico di Comunicazione**: L'unico canale di interazione con il core del monorepo è la pubblicazione asincrona di eventi `IngestionJobTaskEvent` sulla coda BullMQ `ingestion-jobs`.

## 2. Ingestion Idempotente & Deduplicazione
- **Criteri di Deduplicazione**: L'`ingestion-worker` identifica le offerte in modo univoco tramite la chiave composta `(source, externalId)` o l'URL normalizzato.
- **Preservazione dello Stato Utente**:
  - Se un annuncio esiste già: aggiornare solo i metadati variabili (es. data posting, salary range se disponibile). **Non azzerare mai** lo stato di avanzamento utente (`statusHistory`), la valutazione AI (`evaluation`) o le personalizzazioni del curriculum (`curriculum`).
  - Se un annuncio è nuovo: creare il record in stato `NEW`, collegare/creare l'azienda (`Company` upsert) e inserire atomicamente il record in `JobEvaluationOutbox` all'interno della stessa transazione relazionale.

---

## 3. Standard Integrazione Nuovi Estrattori (OpenAPI First & AI Semantic Gating)
- **Specifiche OpenAPI Ufficiali First**:
  - Prima di implementare o fare scraping HTML su una nuova piattaforma/job board (es. Himalayas, RemoteOK, ecc.), verificare se il provider espone un documento OpenAPI/Swagger ufficiale (es. `openapi.json`).
  - Scaricare la specifica in `services/extractors/<nome>/openapi.json` e generare le definizioni tipizzate con `openapi-typescript`.
  - Utilizzare un client strongly-typed come `openapi-fetch` per tutte le chiamate HTTP, garantendo type safety end-to-end e supporto nativo a paginazioni (cursor/offset).
- **Filtri Semantici Demandati all'AI Evaluator**:
  - Gli estrattori non devono implementare filtri di scarto restrittivi sui metadati variabili (ad esempio scartare annunci privi del campo salario o con compensation non strutturata).
  - La formattazione del salario o i vincoli sui benefit vengono spesso indicati nel corpo del testo dell'annuncio: l'estrattore deve limitarsi a catturare il raw markdown integrale e delegare la decisione semantica al Worker di Valutazione AI.

