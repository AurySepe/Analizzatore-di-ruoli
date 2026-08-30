# 🤖 Linee Guida Evaluator Worker (Google Gemini AI)

## 1. Prompting & Structured Outputs
- **Output Strutturato**: La richiesta a Google Gemini Cloud deve sempre forzare una risposta JSON rigorosamente conforme allo schema (`responseMimeType: "application/json"`, `responseSchema`).
- **Sanificazione del Payload JSON**: Non effettuare `JSON.parse` direttamente sul raw text non sanificato. Rimuovere sempre eventuali blocchi markdown (es. ````json ... ````) ed eseguire il parsing con gestione degli errori dedicata.

## 2. Resilienza & Fallback BullMQ
- **Gestione Rate Limiting (429) & Errori Temporanei**:
  - Configurare la coda BullMQ `evaluation-jobs` con retry esponenziale (`backoff: { type: 'exponential', delay: 5000 }`, `attempts: 3`).
  - In caso di fallimento definitivo del job dopo i tentativi massimi, aggiornare lo stato dell'entità in `JobEvaluation` a `FAILED` senza bloccare la coda di ingestion degli altri annunci.
