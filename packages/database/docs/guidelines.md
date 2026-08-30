# 🗄️ Linee Guida Database & Prisma

## 1. Gestione delle Migrazioni (Design-Time vs Deploy-Time)
- **Design-Time (Host)**: Quando si modificano i file `.prisma`, usare sempre `prisma migrate dev` (es. `npm run prisma:migrate:dev -- --name <nome_migrazione>`).
- **Divieto di `db push`**: MAI usare `prisma db push` per evitare deviazioni di schema (drift) e perdita dello storico SQL.
- **Deploy-Time (Automatico con Kubernetes Job Gatekeeper)**: 
  - Non eseguire mai migrazioni manuali da host tramite port-forwarding nei deploy.
  - Le migrazioni PostgreSQL devono essere eseguite in modo nativo dal Job Kubernetes `db-migration-job` (tramite `prisma migrate deploy` riusando l'immagine `api:latest`).
  - Il rollout dei microservizi parte solo a fronte del successo (`kubectl wait condition=complete`) del Job.
  - *Razionale*: Elimina l'errore umano, garantisce zero disallineamenti di schema tra container e database e rende il rilascio pronto per pipeline CI/CD automatiche.

## 2. Transazioni e Scritture Atomiche
- Ogni scrittura che genera un task asincrono deve usare `prisma.$transaction` per aggiornare il record di dominio e inserire/aggiornare l'Outbox corrispondente in modo atomico.
