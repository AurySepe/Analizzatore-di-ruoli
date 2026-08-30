# 🏛️ Linee Guida Architetturali & Monorepo

## 1. Architettura a Microservizi e Domini Isolati
- **Disaccoppiamento dei Database**: Ciascun dominio o estrattore ha il proprio database o schema isolato. Non effettuare join tra database diversi.
- **Contratti Condivisi (`packages/contracts`)**: Tutti i payload degli eventi BullMQ, i nomi delle code e i DTO comuni devono risiedere in `packages/contracts`.

## 2. Outbox Pattern & Disaccoppiamento Rigoroso tra Relay e Worker
- **Affidabilità di Recapito (At-Least-Once Delivery)**: Ogni evento asincrono verso code BullMQ deve essere persistito in una tabella Outbox all'interno della stessa transazione relazionale (`prisma.$transaction`) che aggiorna il dato di business.
- **Microservizi Relay Dedicati**: I worker di elaborazione (es. `evaluator-worker`, `curriculum-worker`) e l'API Gateway non devono mai contenere timer di polling o logiche di inoltro messaggi. Il polling delle tabelle Outbox deve risiedere esclusivamente nei microservizi relay dedicati (`services/*-relay`), separando completamente il dispatching verso BullMQ dal consumo dei job.
- **Razionale**: Previene colli di bottiglia, evita che carichi CPU intensivi nei worker (es. AI prompting o compilazione Chromium) blocchino il polling degli Outbox e consente di scalare worker e relay in modo indipendente.

## 3. Modularità, Limiti di Lunghezza dei File & Naming Semantico
- **Limiti di Dimensione dei File (Single Responsibility)**: Evitare file monolitici o sovradimensionati (linea guida indicativa: preferire file compatti sotto le 250-300 righe).
- **Decomposizione per Dominio Semantico**: Quando un file cresce eccessivamente o gestisce responsabilità multiple, deve essere decomposto in moduli più piccoli e mirati.
- **Divieto di Nomi Generici**: Evitare cartelle o file "discarica" come `utils.ts`, `helpers.ts`, `common.ts` o `misc.ts`. Ogni nuovo file o modulo estratto deve avere un nome strettamente legato al dominio applicativo (es. `job-offer.mapper.ts`, `job-offers-analytics.service.ts`, `useCurriculumEditorController.ts`, `JobOfferDetailTailoring.tsx`).
- **Razionale**: Massimizza la coesione del codice, facilita la manutenibilità, previene merge conflict e consente sia agli sviluppatori che agli agenti AI di navigare ed elaborare porzioni di codice concentrate senza saturare il context window.
