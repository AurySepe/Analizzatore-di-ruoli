# Project Rules & Guidelines

## Monorepo Architecture Overview
L'architettura è organizzata come un Monorepo a Microservizi e Domini isolati:
- **`packages/contracts`**: Tipi TypeScript condivisi, DTOs ed eventi BullMQ standard.
- **`services/api`**: REST API Gateway (NestJS + Swagger/OpenAPI + Prisma).
- **`services/ingestion-worker`**: BullMQ Consumer per l'ingestion idempotente e la deduplicazione delle offerte nel database centrale.
- **`services/evaluator-worker`**: Worker per la valutazione con Google Gemini Cloud delle offerte di lavoro.
- **`services/curriculum-worker`**: Worker per il resume tailoring e la compilazione PDF con Chromium headless e salvataggio su MinIO S3.
- **`services/extractors/arbeitnow`**: Estrattore Arbeitnow con Outbox Pattern e database dedicato.
- **`services/extractors/remotive`**: Estrattore Remotive con Outbox Pattern e database dedicato.
- **`services/extractors/jobicy`**: Estrattore Jobicy con Outbox Pattern e database dedicato.
- **`services/extractors/weworkremotely`**: Estrattore WeWorkRemotely con Outbox Pattern e database dedicato.
- **`frontend`**: Single Page Application (React + Vite + TypeScript).

## Skills & Workflows Integration
Quando l'utente richiede una nuova funzionalità, refactor o bug fix:
- **OBBLIGO DI PIANIFICAZIONE**: Prima di modificare qualsiasi file sorgente o proporre codice, attiva e leggi la skill [`.agents/skills/implementation-planner/SKILL.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/.agents/skills/implementation-planner/SKILL.md), consulta [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md), e presenta un piano di implementazione strutturato fermandoti in attesa di approvazione.
- **ESPLORAZIONE ARCHITETTURALE**: Per richieste di analisi, comprensione del sistema o domande architetturali, attiva e leggi la skill [`.agents/skills/codebase-explorer/SKILL.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/.agents/skills/codebase-explorer/SKILL.md) senza proporre codice implementativo.
- **AGGIORNAMENTO LINEE GUIDA**: Per codificare nuove regole o pattern, usa la skill [`.agents/skills/guidelines-updater/SKILL.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/.agents/skills/guidelines-updater/SKILL.md).
- I comandi slash corrispondenti sono registrati in `.agents/workflows/` (`/plan`, `/implementation-planner`, `/codebase-explorer`, `/guidelines-updater`).

## Database & Prisma Guidelines
- **NEVER use `prisma db push`** when modifying Prisma schema files.
- Always use **`prisma migrate dev`** (e.g. `npx --prefix services/<name> prisma migrate dev --name <migration_name> --schema=prisma/schema.prisma`) to ensure migration SQL history is generated cleanly and database schema drift is prevented.
- **ALWAYS INFORM AND ASK CONFIRMATION FROM THE USER BEFORE DELETING DATA OR RESETTING THE DATABASE**. Never execute destructive scripts or migrations that drop database data without explicit user approval.
- In this environment, the PostgreSQL database runs inside the local Kubernetes cluster (`k3d`). To run Prisma migrations from host, use port-forwarding (`kubectl port-forward svc/postgres 5432:5432`).

## Build, Sync & Kubernetes Deploy Guidelines
- **Sync OpenAPI & Frontend Types**: Whenever backend DTOs, controllers, or Prisma schemas change, run:
  ```bash
  npm run sync:api
  ```
- **All-in-one Kubernetes Deploy**: To build, containerize, push all services to the local k3d registry (`localhost:5001`), apply declarative Kustomize manifests (`kubectl apply -k k8s/ --prune`), and rollout-restart all Kubernetes deployments, run:
  ```bash
  npm run k8s:deploy
  ```
- **Selective Component Deploy**:
  - API only: `node scripts/deploy-k8s.mjs --service=api`
  - Frontend only: `npm run k8s:deploy:frontend`
  - Specific extractor: `node scripts/deploy-k8s.mjs --service=extractor-arbeitnow`
- **Cluster Diagnostics & Logs**:
  - Pods & Services status: `npm run k8s:status` (or `kubectl get pods,svc,ingress`)
  - API logs: `npm run k8s:logs:api`
  - Ingestion Worker logs: `npm run k8s:logs:ingestion`
  - Evaluator Worker logs: `npm run k8s:logs:evaluator`
  - Curriculum Worker logs: `npm run k8s:logs:curriculum`
  - Quick restart without rebuild: `npm run k8s:restart`
