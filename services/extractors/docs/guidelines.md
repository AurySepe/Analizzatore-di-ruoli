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
