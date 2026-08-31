# 📚 Indice Centrale delle Linee Guida del Progetto (Guidelines Index)

Questo documento rappresenta il registro centrale delle linee guida architetturali, convenzioni di codice e standard operativi del monorepo **Analizzatore di Ruoli**. 

Ogni volta che uno sviluppatore o un agente AI deve lavorare su uno specifico dominio o servizio, deve consultare il documento corrispondente indicato in questo indice.

---

## 🗺️ Mappa delle Linee Guida per Dominio

| Ambito / Servizio | File di Linee Guida | Quando Leggere (Trigger / Contesto) |
| :--- | :--- | :--- |
| **Architettura Generale & Monorepo** | [`docs/architecture.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/architecture.md) | Prima di aggiungere nuovi microservizi o modificare l'organizzazione del repository e le regole di modularità. |
| **Transactional Outbox Pattern** | [`docs/outbox-pattern.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/outbox-pattern.md) | Prima di creare nuove tabelle Outbox, definire code BullMQ asincrone, implementare Relay o worker consumatori. |
| **Worker AI, Retries & Resilienza LLM** | [`docs/ai-workers.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/ai-workers.md) | Prima di creare o modificare qualsiasi microservizio/worker che interroga modelli LLM (Gemini/Ollama), gestione retry 429/503 e BullMQ backoff. |
| **Database, Schema & Migrazioni** | [`packages/database/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/packages/database/docs/guidelines.md) | Prima di modificare file `.prisma`, creare nuove migrazioni SQL o toccare query Prisma e transazioni relazionali. |
| **API Gateway (NestJS & OpenAPI)** | [`services/api/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/api/docs/guidelines.md) | Prima di aggiungere/modificare endpoint REST, DTO di input/output, decoratori Swagger o logiche nei service NestJS. |
| **Frontend (React, Jotai, TanStack)** | [`frontend/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/frontend/docs/guidelines.md) | Prima di creare componenti React, definire atomi Jotai, query TanStack Query o ViewModels/Mappers. |
| **Curriculum & PDF Rendering** | [`services/curriculum-worker/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/curriculum-worker/docs/guidelines.md) | Prima di lavorare sui prompt LLM per il tailoring, template HTML/Handlebars, compilazione Chromium headless o upload su MinIO S3. |
| **Valutazione AI (Gemini Worker)** | [`services/evaluator-worker/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/evaluator-worker/docs/guidelines.md) | Prima di modificare il prompt di valutazione di Gemini, il calcolo dei punteggi o i criteri di scoring delle offerte. |
| **Estrattori & Ingestion Worker** | [`services/extractors/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/extractors/docs/guidelines.md) | Prima di creare un nuovo scraper/estrattore, configurare Outbox dedicati o modificare la deduplicazione nell'Ingestion Worker. |
| **Kubernetes, BuildKit & Deploy** | [`k8s/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/k8s/docs/guidelines.md) | Prima di modificare manifest K8s, `Dockerfile`, script `deploy-k8s.mjs`, ingress, o configurazioni del cluster k3d locale. |

---

## ✍️ Come Aggiornare le Linee Guida
Per aggiungere nuove regole, convenzioni o decisioni architetturali a questo registro, attiva la skill dedicata:
```text
/guidelines-updater <descrizione della nuova regola o decisione>
```
L'agente si occuperà automaticamente di catalogarla nel file appropriato e di aggiornare questo indice.
