#!/usr/bin/env node
import { execSync } from 'child_process';
import process from 'process';

const args = process.argv.slice(2);
const backendOnly = args.includes('--backend-only') || args.includes('-b');
const frontendOnly = args.includes('--frontend-only') || args.includes('-f');
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

// 1. Sincronizzazione API & Type generation
if (!frontendOnly && !skipBuild) {
  run('npm --prefix backend run openapi:generate', 'Backend: Compilazione e generazione OpenAPI');
}

if (!backendOnly && !skipBuild) {
  run('npm --prefix frontend run openapi:generate', 'Frontend: Sincronizzazione schema TypeScript da OpenAPI');
  run('npm --prefix frontend run build', 'Frontend: Compilazione bundle Vite di produzione');
}

// 2. Build e Push Immagini Docker nel Registry Locale k3d (localhost:5001)
if (!frontendOnly) {
  run('docker build -t localhost:5001/backend:latest ./backend', 'Docker: Build immagine Backend');
  run('docker push localhost:5001/backend:latest', 'Docker: Push immagine Backend su registry k3d');
}

if (!backendOnly) {
  run('docker build -t localhost:5001/frontend:latest ./frontend', 'Docker: Build immagine Frontend');
  run('docker push localhost:5001/frontend:latest', 'Docker: Push immagine Frontend su registry k3d');
}

// 3. Applicazione Manifest Kubernetes (Kustomize Declarative Sync con Pruning)
run(
  'kubectl apply -k k8s/ --prune -l app.kubernetes.io/managed-by=analizzatore-di-ruoli',
  'Kubernetes: Applicazione dichiarativa e sincronizzazione Kustomize (--prune)',
);

// 4. Rollout Restart dei Deployment
if (!skipRestart) {
  if (!frontendOnly) {
    run(
      'kubectl rollout restart deployment backend-api backend-curriculum backend-evaluator backend-extractor extractor-arbeitnow worker-ingestion',
      'Kubernetes: Rollout restart di tutti i componenti backend e worker',
    );
  }
  if (!backendOnly) {
    run('kubectl rollout restart deployment frontend', 'Kubernetes: Rollout restart frontend');
  }

  // 5. Attesa status rollout
  if (!frontendOnly) {
    run('kubectl rollout status deployment/backend-api --timeout=90s', 'Kubernetes: Attesa disponibilità backend-api');
  }
  if (!backendOnly) {
    run('kubectl rollout status deployment/frontend --timeout=90s', 'Kubernetes: Attesa disponibilità frontend');
  }
}

console.log('\n\x1b[1m\x1b[32m====================================================\x1b[0m');
console.log('\x1b[1m\x1b[32m 🎉 Deploy completato con successo su Kubernetes!\x1b[0m');
console.log('\x1b[1m\x1b[32m====================================================\x1b[0m\n');
