# 🤖 Linee Guida Evaluator Worker (Google Gemini AI)

## 1. Prompting & Structured Outputs
- **Output Strutturato**: La richiesta a Google Gemini Cloud deve sempre forzare una risposta JSON rigorosamente conforme allo schema (`responseMimeType: "application/json"`, `responseSchema`).
- **Sanificazione del Payload JSON**: Non effettuare `JSON.parse` direttamente sul raw text non sanificato. Rimuovere sempre eventuali blocchi markdown (es. ````json ... ````) ed eseguire il parsing con gestione degli errori dedicata.

## 2. Resilienza, Retries & Dead Letter Queue (DLQ)
- **Delegare i Retry a BullMQ**: I client provider LLM (es. `BaseGoogleGenAiProvider`) non devono implementare loop bloccanti o `sleep` in-process; devono fallire immediatamente in modo pulito e delegare la gestione dei retry temporanei (es. 429 RESOURCE_EXHAUSTED) a BullMQ.
- **Configurazione Coda & Backoff**:
  - La coda `evaluation-jobs` deve sempre operare con `attempts: 5` e backoff esponenziale (`backoff: { type: 'exponential', delay: 5000 }`).
- **Pattern Dead Letter Queue**:
  - Il worker `JobEvaluationProcessor` **non deve mai marcare come `FAILED`** un annuncio a DB durante i tentativi intermedi.
  - La transizione a `FAILED` su `JobOffer` deve avvenire **esclusivamente quando `job.attemptsMade + 1 >= (job.opts.attempts || 1)`** (quando BullMQ sposta il job nel set DLQ/failed).

---

## 3. Multi-Model Quota Pooling & Round-Robin Rate Limiting
- **Quota Pooling**: Quando si utilizzano contemporaneamente diversi modelli di Google Gemini (es. `gemini-3.1-flash-lite` e `gemini-3.5-flash-lite`), le cui quote di Rate Limit (15 RPM ciascuno) sono separate a livello di Google Cloud/AI Studio:
  - Scalare il rate limiter BullMQ (`limiter.max: 28` su finestra di 60s con `concurrency: 6`) per sommare il throughput complessivo.
  - Mantenere un margine di sicurezza di 1-2 RPM per modello (es. 28 anziché 30) per assorbire clock drift e jitter di rete.
  - Distribuire le richieste tra i modelli disponibili tramite un selettore **Round-Robin deterministico** 1:1.

