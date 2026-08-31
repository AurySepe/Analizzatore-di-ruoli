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
   - Il Relay interroga i record con `status: PENDING` ordinati per `createdAt: asc` a lotti (es. `take: 20` o `take: 25`).
   - **Utilizzo Obbligatorio di `addSafeQueueJob`**: Non invocare mai `this.queue.add()` in forma diretta. Utilizzare sempre l'helper esportato da `@analizzatore/contracts`.
   - **Configurazione Obbligatoria di Retry & Backoff**:
     Ogni dispatch su BullMQ deve dichiarare esplicitamente i tentativi e il backoff esponenziale per consentire a BullMQ di gestire i picchi transitori (es. rate limit 429 delle API esterne):
     ```typescript
     await addSafeQueueJob(
       this.queue,
       EVENT_NAME,
       payload,
       {
         jobId: `${prefix}-${record.id}-${record.updatedAt.getTime()}`,
         attempts: 5,
         backoff: { type: 'exponential', delay: 5000 }, // 5s, 10s, 20s, 40s...
         removeOnComplete: true,
       },
     );
     ```
   - **JobId Timestamping per Re-inoltro Outbox**: Includere sempre `${record.updatedAt.getTime()}` nel `jobId` custom. In questo modo, se un record fallito viene reimpostato su `PENDING` a DB per una re-valutazione o un retry manuale, Redis genererà una nuova chiave di job senza scartarlo per presunta deduplicazione.
   - A invio confermato, aggiorna atomicamente `status: PUBLISHED`, `lastError: null`.
   - In caso di errore di validazione o mancata connessione con Redis, incrementa `attempts`, registra `lastError` e imposta `status: FAILED` se si superano i tentativi massimi (5 tentativi).

---

## 5. Regole per i Consumatori (Worker Idempotenti & Dead Letter Queue)
1. **Idempotenza Intrinseca**: Poiché l'Outbox garantisce consegna *At-Least-Once*, i worker di destinazione (`ingestion-worker`, `evaluator-worker`, `curriculum-worker`, `pdf-worker`) devono usare vincoli di unicità (es. `externalId`, `url`, `jobOfferId`) e operazioni di `upsert`.
2. **Pattern Dead Letter Queue (Transizione a `FAILED`)**:
   - I Worker **non devono mai marcare un'entità come `FAILED` a DB al primo errore**.
   - Devono lasciare che BullMQ orchestri i retry asincroni con backoff.
   - La transizione a `FAILED` sul database centrale o la notifica di errore definitiva deve avvenire **esclusivamente quando tutti i tentativi BullMQ sono stati esauriti**:
     ```typescript
     const currentAttempt = job.attemptsMade + 1;
     const maxAttempts = job.opts.attempts || 1;
     if (currentAttempt >= maxAttempts) {
       await this.prisma.jobOffer.update({
         where: { id: jobOfferId },
         data: { evaluationProcessStatus: JobEvaluationProcessStatus.FAILED },
       });
     }
     ```

---

## 6. Convenzione Naming Custom `jobId` su BullMQ
Quando si specificano opzioni custom per i job BullMQ nel Relay (es. per deduplicazione o tracciamento univoco):
1. **Divieto Assoluto dei Due Punti (`:`)**:
   - BullMQ (dalla v5+) **rifiuta tassativamente** i custom `jobId` contenenti il carattere `:` lanciando l'eccezione `Custom Id cannot contain :`.
   - BullMQ usa internamente i due punti come separatore per i namespace delle chiavi Redis (`bull:queueName:jobId`).
2. **Formato Standard con Trattino (`-`)**:
   - **Corretto**: `{ jobId: `eval-${record.jobOfferId}-${record.updatedAt.getTime()}` }`
   - **Corretto**: `{ jobId: `cv-tailor-${record.jobOfferId}-${record.updatedAt.getTime()}` }`
   - **Scorretto / Vietato**: `{ jobId: `eval:${record.jobOfferId}` }`
