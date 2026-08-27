# Project Rules & Guidelines

## Database & Prisma Guidelines
- **NEVER use `prisma db push`** when modifying Prisma schema files.
- Always use **`prisma migrate dev`** (or `npm run prisma:migrate:dev`) to ensure migration SQL history is generated cleanly and database schema drift is prevented.
- **ALWAYS INFORM AND ASK CONFIRMATION FROM THE USER BEFORE DELETING DATA OR RESETTING THE DATABASE**. Never execute destructive scripts or migrations that drop database data without explicit user approval.
- In this environment, the PostgreSQL database runs inside the local Kubernetes cluster (`k3d`). To run Prisma migrations from host, use port-forwarding (`kubectl port-forward svc/postgres 5432:5432`).

## Build, Sync & Kubernetes Deploy Guidelines
- **Sync OpenAPI & Frontend Types**: Whenever backend DTOs, controllers, or Prisma schemas change, run `npm run sync:api` (or `npm --prefix backend run openapi:generate && npm --prefix frontend run openapi:generate`).
- **All-in-one Kubernetes Deploy**: To build, containerize, push to the local k3d registry (`localhost:5001`), apply manifests, and rollout-restart all Kubernetes deployments, run:
  ```bash
  npm run k8s:deploy
  ```
- **Selective Component Deploy**:
  - Backend only: `npm run k8s:deploy:backend`
  - Frontend only: `npm run k8s:deploy:frontend`
- **Cluster Diagnostics & Logs**:
  - Pods & Services status: `npm run k8s:status` (or `kubectl get pods,svc`)
  - Backend API logs: `npm run k8s:logs:backend`
  - Curriculum Worker logs: `npm run k8s:logs:curriculum`
  - Quick restart without rebuild: `npm run k8s:restart`


