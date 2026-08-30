# 📬 Linee Guida Tecniche: Transactional Outbox Pattern

## 1. Obiettivo & Principio di Funzionamento
Il **Transactional Outbox Pattern** garantisce la consegna affidabile di eventi e messaggi asincroni (**At-Least-Once Delivery**) tra database relazionali e code BullMQ/Redis, eliminando il rischio di dual-write failure (stato in cui il DB viene aggiornato ma l'invio a Redis fallisce o viceversa).

---

## 2. Struttura Standard della Tabella Outbox (Prisma Schema)
Ogni tabella Outbox nel monorepo (es. `JobEvaluationOutbox`, `JobCurriculumPdfOutbox`, `ArbeitnowJobOfferOutbox`) deve aderire a questa struttura di campi standard:

```prisma
enum OutboxStatus {
  PENDING
  PROCESSING
  PUBLISHED
  FAILED
}

model JobOutboxExample {
  id           String       @id @default(uuid())
  payload      String       // JSON serializzato dell'evento
  status       OutboxStatus @default(PENDING)
  retryCount   Int          @default(0)
  errorMessage String?
  processedAt  DateTime?
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt

  @@index([status, createdAt])
}
```

---

## 3. Regole di Scrittura (Produttori di Eventi)
1. **Transazione Atomica Obbligatoria**: 
   La scrittura del dato di business e l'inserimento del record nella tabella Outbox corrispondente **devono sempre avvenire all'interno della stessa transazione relazionale**:
   ```typescript
   await this.prisma.$transaction(async (tx) => {
     // 1. Aggiornamento dato di business
     await tx.jobOffer.update(...);
     // 2. Inserimento record Outbox con stato PENDING
     await tx.jobCurriculumPdfOutbox.create({
       data: {
         payload: JSON.stringify(taskEvent),
         status: OutboxStatus.PENDING,
       },
     });
   });
   ```
2. **Nessun Invio Diretto a BullMQ dal Gateway**: 
   L'API Gateway e i controller HTTP non devono mai aggiungere direttamente job alle code BullMQ; devono limitarsi a scrivere nella tabella Outbox.

---

## 4. Regole di Polling & Dispatching (Microservizi Relay)
1. **Isolamento dei Relay**:
   Il polling delle tabelle Outbox viene eseguito esclusivamente da microservizi relay dedicati (`curriculum-relay`, `evaluation-relay`, e i relay integrati negli estrattori).
2. **Ciclo di Polling & Dispatching Sicuro**:
   - Il Relay interroga i record con `status: PENDING` ordinati per `createdAt: asc` a lotti (es. `take: 20`).
   - **Utilizzo Obbligatorio di `addSafeQueueJob`**: Non invocare mai `this.queue.add()` in forma diretta. Utilizzare sempre l'helper esportato da `@analizzatore/contracts`:
     ```typescript
     await addSafeQueueJob(this.queue, EVENT_NAME, payload, { jobId: `custom-id` });
     ```
     Questo helper valida a runtime i campi obbligatori del payload e sanitizza automaticamente il `jobId` eliminando caratteri incompatibili (es. `:` $\rightarrow$ `-`).
   - A invio confermato, aggiorna atomicamente `status: PUBLISHED`, `processedAt: new Date()`.
   - In caso di errore di validazione o connessione verso Redis, incrementa `attempts`, salva `lastError` e imposta lo stato `FAILED` se si superano i tentativi massimi (5 tentativi).

## 5. Regole per i Consumatori (Worker Idempotenti)
Poiché l'Outbox Pattern garantisce la consegna *At-Least-Once* (almeno una volta), i worker di destinazione (`ingestion-worker`, `evaluator-worker`, `curriculum-worker`, `pdf-worker`) **devono essere intrinsecamente idempotenti**:
- Usare vincoli di unicità (es. `externalId`, `url`, `jobOfferId`) e operazioni di `upsert`.
- Controllare lo stato attuale dell'entità prima di rielaborare un job duplicato.

---

## 6. Convenzione Naming Custom `jobId` su BullMQ
Quando si specificano opzioni custom per i job BullMQ nel Relay (es. per deduplicazione o tracciamento univoco):
1. **Divieto Assoluto dei Due Punti (`:`)**:
   - BullMQ (dalla v5+) **rifiuta tassativamente** i custom `jobId` contenenti il carattere `:` lanciando l'eccezione `Custom Id cannot contain :`.
   - BullMQ usa internamente i due punti come separatore per i namespace delle chiavi Redis (`bull:queueName:jobId`).
2. **Formato Standard con Trattino (`-`)**:
   - **Corretto**: `{ jobId: \`eval-\${record.jobOfferId}\` }`
   - **Corretto**: `{ jobId: \`cv-tailor-\${record.jobOfferId}-\${record.updatedAt.getTime()}\` }`
   - **Scorretto / Vietato**: `{ jobId: \`eval:\${record.jobOfferId}\` }`
