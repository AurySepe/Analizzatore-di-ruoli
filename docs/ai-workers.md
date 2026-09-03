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
3. **Dead Letter Queue (DLQ) & Salvaguardia dello Stato di Business**:
   - **Errori Infrastrutturali / Rate Limit (429/503/Timeout)**: Non sono errori del payload o del task. **Non devono MAI causare la transizione a `FAILED` su PostgreSQL**. Lo stato a database deve rimanere o essere ripristinato a `PENDING`.
   - **Errori di Business / Fatal (Dati corrotti, ID inesistente)**: Solo per errori deterministici non legati al provider AI e all'esaurimento completo dei tentativi BullMQ (`attemptsMade + 1 >= totalAttempts`), il record su database viene marcato come `FAILED`.
     ```typescript
     const isQuota = isGoogleQuotaError(err);
     if (isQuota) {
       await this.prisma.jobOffer.update({ data: { evaluationProcessStatus: 'PENDING' } });
       throw err; // BullMQ esegue retry con backoff
     }
     if (isFinalAttempt) {
       await this.prisma.jobOffer.update({ data: { evaluationProcessStatus: 'FAILED' } });
     }
     ```

---

## 4. Output Strutturato & Type Safety
- Ogni chiamata AI verso Gemini deve specificare `responseMimeType: 'application/json'` e un `responseSchema` validato con Zod / JSON Schema.
- Rimuovere sempre eventuali blocchi markdown (es. ````json ... ````) prima di effettuare `JSON.parse`.
