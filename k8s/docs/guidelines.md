# ☸️ Linee Guida Kubernetes, BuildKit & Deploy

## 1. Deploy Automatizzato & Gatekeeper Migrazioni
- **Pipeline Unificata**: Usare sempre `deploy-k8s.mjs` per eseguire la compilazione parallela, il push al registry locale `localhost:5001`, la sincronizzazione Kustomize e il rollout restart.
- **Deploy Selettivi per lo Sviluppo Quotidiano**:
  - API: `node scripts/deploy-k8s.mjs --service=api`
  - Frontend: `npm run k8s:deploy:frontend`
- **Gatekeeper Job**: Prima del restart dei deployment, lo script lancia il Job `db-migration-job` e attende con `kubectl wait --for=condition=complete job/db-migration-job --timeout=60s`. Nessun deployment viene toccato se la migrazione fallisce.

## 2. Docker & BuildKit Caching
- **Cache Mounts**: Tutti i `Dockerfile` devono sfruttare `--mount=type=cache,target=/root/.npm` e `--mount=type=cache,target=/root/.cache/prisma` per condividere la cache npm e i binari Prisma compilati sul disco SSD dell'host.
- **Separazione dei Layer**: Copiare sempre i soli manifest `package*.json` prima del comando `npm install`, e copiare il codice sorgente applicativo solo nello step immediatamente precedente a `npm run build`.
- **Singolo `npm link` nei Multi-Stage Builds**: Eseguire `npm link /app/packages/...` una sola volta nello stage di installazione dipendenze. **Non ripetere mai `npm link` dopo la copia del sorgente applicativo**: i symlink puntano all'intera cartella e vedono automaticamente i nuovi artefatti compilati, mentre `.dockerignore` preserva `node_modules`. Ripetere `npm link` invalida la cache e rallenta inutilmente la build di 15-30s.
- **Trimming del Build Context**: Il file `.dockerignore` a monte deve escludere cartelle `node_modules`, directory `.git` e dump SQL per mantenere il build context sotto i 10MB, azzerando i tempi di upload iniziale a Docker daemon.

## 3. Gestione della Configurazione: ConfigMap vs Secrets
- **Rigorosa Separazione**:
  - **`configmap.yaml`**: Host di rete (`postgres`, `redis`, `minio`), porte dei servizi, nomi dei bucket S3 e log level.
  - **`secrets.yaml`**: Token e credenziali sensibili (`GEMINI_API_KEY`, password del database PostgreSQL, access key MinIO S3).
- **Divieto di Hardcoding**: Nessun secret, token API o password deve mai essere inserito nei file `Dockerfile`, nei repository Git o committato in chiaro.

## 4. Shift-Left Quality & Pre-Flight Checks
- **Typecheck Istantaneo Host**: Prima di lanciare build Docker o commit, eseguire `npm run typecheck` per convalidare staticamente in parallelo tutti i 14 moduli del monorepo in ~6 secondi.
- **Pre-Flight integrato nel Deploy**: Lo script `deploy-k8s.mjs` esegue automaticamente la Fase 0 (verifica connettività registry `localhost:5001` e validazione sintassi schema Prisma con `npm run prisma:validate`). Per eseguire solo i check senza compilare né deployare: `npm run preflight`.

## 5. Esecuzione Task Asincroni, Gestione Log & Anti-Polling
- **Divieto Assoluto di Active Polling sui Log**: Quando un comando o script di deploy/build (ad es. `deploy-k8s.mjs`, compilazioni Docker, esecuzione test o rollout K8s) viene eseguito come background task o comando asincrono, l'agente o lo sviluppatore **NON deve mai eseguire cicli continui di lettura (`polling`) sui file di log o sullo stato del task**.
- **Consumo Eccessivo di Token & Context Window**: Il polling continuo (es. invocare ripetutamente `view_file` o `manage_task(status)` ogni pochi secondi) satura rapidamente il context window e brucia token preziosi senza produrre valore, rischiando di troncare prematuramente la sessione di lavoro.
- **Attesa Reattiva (Reactive Wakeup)**: L'ambiente di sviluppo e l'assistente agentico sono nativamente integrati con un sistema di messaggistica asincrono ad eventi. Una volta lanciato il task in background:
  1. Fornire un breve messaggio di riepilogo iniziale all'utente (confermando il comando avviato).
  2. Concludere il turno operativo senza invocare altri tool.
  3. Il runtime si risveglia automaticamente via `SYSTEM_MESSAGE` con il risultato e l'exit code al completamento naturale del processo.
- **Ispezione dei Log Solo On-Demand o Post-Mortem**: I file di log devono essere letti con `view_file` **esclusivamente**:
  - Se il task fallisce con codice d'errore (exit code ≠ 0) per diagnosticare la causa specifica.
  - Su esplicita richiesta manuale dell'utente (ad es. *"fammi vedere i log del deploy"*), mostrando l'estratto finale significativo in un singolo passaggio anziché in loop.
