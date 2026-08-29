#!/usr/bin/env node
import { execSync } from 'child_process';
import process from 'process';

const args = process.argv.slice(2);
const serviceArg = args.find((a) => a.startsWith('--service=') || a.startsWith('-s='))?.split('=')[1];
const frontendOnly = args.includes('--frontend-only') || args.includes('-f') || serviceArg === 'frontend';
const skipBuild = args.includes('--skip-build');
const skipRestart = args.includes('--skip-restart');

function run(command, description) {
  console.log(`\n\x1b[36m▶ ${description}...\x1b[0m`);
  console.log(`\x1b[90m$ ${command}\x1b[0m`);
  try {
    execSync(command, { stdio: 'inherit', env: process.env });
    console.log(`\x1b[32m✔ Completato con successo: ${description}\x1b[0m`);
  } catch (error) {
    console.error(`\x1b[31m✖ Errore durante: ${description}\x1b[0m`);
    process.exit(1);
  }
}

console.log('\x1b[1m\x1b[35m====================================================\x1b[0m');
console.log('\x1b[1m\x1b[35m 🚀 Analizzatore di Ruoli: Build & Kubernetes Deploy\x1b[0m');
console.log('\x1b[1m\x1b[35m====================================================\x1b[0m');

// Microservizi isolati definiti nel monorepo
const microservices = [
  { name: 'api', dockerfile: 'services/api/Dockerfile', image: 'localhost:5001/api:latest', deployment: 'backend-api' },
  { name: 'worker-ingestion', dockerfile: 'services/ingestion-worker/Dockerfile', image: 'localhost:5001/worker-ingestion:latest', deployment: 'worker-ingestion' },
  { name: 'worker-evaluator', dockerfile: 'services/evaluator-worker/Dockerfile', image: 'localhost:5001/worker-evaluator:latest', deployment: 'backend-evaluator' },
  { name: 'worker-curriculum', dockerfile: 'services/curriculum-worker/Dockerfile', image: 'localhost:5001/worker-curriculum:latest', deployment: 'backend-curriculum' },
  { name: 'extractor-arbeitnow', dockerfile: 'services/extractors/arbeitnow/Dockerfile', image: 'localhost:5001/extractor-arbeitnow:latest', deployment: 'extractor-arbeitnow' },
  { name: 'extractor-remotive', dockerfile: 'services/extractors/remotive/Dockerfile', image: 'localhost:5001/extractor-remotive:latest', deployment: 'extractor-remotive' },
  { name: 'extractor-jobicy', dockerfile: 'services/extractors/jobicy/Dockerfile', image: 'localhost:5001/extractor-jobicy:latest', deployment: 'extractor-jobicy' },
  { name: 'extractor-weworkremotely', dockerfile: 'services/extractors/weworkremotely/Dockerfile', image: 'localhost:5001/extractor-weworkremotely:latest', deployment: 'extractor-weworkremotely' },
];

const selectedServices = serviceArg
  ? microservices.filter((s) => s.name === serviceArg || s.deployment === serviceArg)
  : microservices;

// 1. Build Contracts condivisi & OpenAPI Specs
if (!skipBuild && !frontendOnly) {
  run('npm --prefix packages/contracts run build', 'Contracts: Compilazione TypeScript schema condivisi');
  run('npm --prefix services/api run openapi:generate', 'API Gateway: Generazione OpenAPI Spec');
}

if (!skipBuild && (frontendOnly || !serviceArg)) {
  run('npm --prefix frontend run openapi:generate', 'Frontend: Sincronizzazione TypeScript da OpenAPI');
  run('npm --prefix frontend run build', 'Frontend: Compilazione bundle Vite');
}

// 2. Build & Push Container Microservizi su Registry Locale (localhost:5001)
if (!skipBuild && !frontendOnly) {
  for (const svc of selectedServices) {
    run(`docker build -t ${svc.image} -f ${svc.dockerfile} .`, `Docker: Build ${svc.name}`);
    run(`docker push ${svc.image}`, `Docker: Push ${svc.name} su registry k3d`);
  }
}

if (!skipBuild && (frontendOnly || !serviceArg)) {
  run('docker build -t localhost:5001/frontend:latest ./frontend', 'Docker: Build Frontend');
  run('docker push localhost:5001/frontend:latest', 'Docker: Push Frontend su registry k3d');
}

// 3. Applicazione Kustomize su Kubernetes
run(
  'kubectl apply -k k8s/ --prune -l app.kubernetes.io/managed-by=analizzatore-di-ruoli',
  'Kubernetes: Sincronizzazione dichiarativa Kustomize (--prune)',
);

// 4. Rollout Restart dei Deployments
if (!skipRestart) {
  if (!frontendOnly) {
    const deploymentsToRestart = selectedServices.map((s) => s.deployment).join(' ');
    run(`kubectl rollout restart deployment ${deploymentsToRestart}`, `Kubernetes: Restart dei deployments (${deploymentsToRestart})`);
  }

  if (frontendOnly || !serviceArg) {
    run('kubectl rollout restart deployment frontend', 'Kubernetes: Restart frontend');
  }

  // 5. Attesa status rollout
  if (!frontendOnly) {
    run('kubectl rollout status deployment/backend-api --timeout=90s', 'Kubernetes: Attesa disponibilità backend-api');
  }
  if (frontendOnly || !serviceArg) {
    run('kubectl rollout status deployment/frontend --timeout=90s', 'Kubernetes: Attesa disponibilità frontend');
  }
}

console.log('\n\x1b[1m\x1b[32m====================================================\x1b[0m');
console.log('\x1b[1m\x1b[32m 🎉 Deploy completato con successo su Kubernetes!\x1b[0m');
console.log('\x1b[1m\x1b[32m====================================================\x1b[0m\n');
