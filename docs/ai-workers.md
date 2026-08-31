# 🤖 Linee Guida Monorepo: Worker AI, Resilienza & Pattern di Retry

## 1. Ambito di Applicazione
Questo documento definisce gli standard architetturali e operativi per tutti i microservizi e worker del monorepo che integrano modelli LLM / AI (es. Google Gemini Cloud, Ollama locale), inclusi:
- **Evaluator Worker** (`services/evaluator-worker`)
- **Curriculum Worker** (`services/curriculum-worker`)
- **Cover Letter Worker** (`services/cover-letter-worker`)
- Qualsiasi futuro worker o estrattore con arricchimento semantico AI.

---

## 2. Resilienza, Retries & Divieto di Fallback Silenziosi

### 🚫 Regola Aurea: Nessun Fallback Statico Silenzioso su Errori Transitori
I client provider LLM **non devono mai catturare eccezioni transitorie per restituire dati fittizi o template statici spacciandoli per un task completato con successo**.

- **Errori Transitori**:
  - `429 RESOURCE_EXHAUSTED / Rate Limit`
  - `503 UNAVAILABLE / High Demand Spikes`
  - `504 Gateway Timeout`
  - Errori di connessione di rete temporanei
- **Comportamento Obbligatorio**:
  Il generatore/service AI deve **propagare l'eccezione** verso l'alto senza mascherarla, consentendo al processor di BullMQ di intercettarla.

---

## 3. Configurazione BullMQ & Backoff Esponenziale

Tutte le code di processing AI (`evaluation-jobs`, `curriculum-jobs`, `cover-letter-jobs`) devono essere configurate con:
1. **Numero di Tentativi**: Almeno `attempts: 5`.
2. **Backoff Esponenziale**: 
   ```typescript
   backoff: {
     type: 'exponential',
     delay: 5000, // 5s, 10s, 20s, 40s...
   }
   ```
3. **Dead Letter Queue (DLQ) & Stato Finale a Database**:
   - Durante i tentativi intermedi (1..4), il record a database **non deve essere marcato come FAILED** e non deve essere compilato un PDF vuoto/fittizio.
   - La transizione allo stato `FAILED` su PostgreSQL deve avvenire **esclusivamente** quando i tentativi sono completamente esauriti:
     ```typescript
     const isFinalAttempt = (job.attemptsMade + 1) >= (job.opts.attempts || 1);
     if (isFinalAttempt) {
       await this.prisma.jobOffer.update({ ... });
     }
     ```

---

## 4. Output Strutturato & Type Safety
- Ogni chiamata AI verso Gemini deve specificare `responseMimeType: 'application/json'` e un `responseSchema` validato con Zod / JSON Schema.
- Rimuovere sempre eventuali blocchi markdown (es. ````json ... ````) prima di effettuare `JSON.parse`.
