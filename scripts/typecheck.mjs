#!/usr/bin/env node
import { spawn } from 'child_process';
import process from 'process';

console.log('\x1b[1m\x1b[34m====================================================\x1b[0m');
console.log('\x1b[1m\x1b[34m ⚡ Analizzatore di Ruoli: Typecheck Parallelo Monorepo\x1b[0m');
console.log('\x1b[1m\x1b[34m====================================================\x1b[0m');

const targets = [
  { name: 'packages/contracts', cwd: 'packages/contracts', cmd: 'npx tsc --noEmit' },
  { name: 'packages/database', cwd: 'packages/database', cmd: 'npx tsc --noEmit' },
  { name: 'services/api', cwd: 'services/api', cmd: 'npx tsc --noEmit' },
  { name: 'services/evaluator-worker', cwd: 'services/evaluator-worker', cmd: 'npx tsc --noEmit' },
  { name: 'services/curriculum-worker', cwd: 'services/curriculum-worker', cmd: 'npx tsc --noEmit' },
  { name: 'services/pdf-worker', cwd: 'services/pdf-worker', cmd: 'npx tsc --noEmit' },
  { name: 'services/ingestion-worker', cwd: 'services/ingestion-worker', cmd: 'npx tsc --noEmit' },
  { name: 'services/evaluation-relay', cwd: 'services/evaluation-relay', cmd: 'npx tsc --noEmit' },
  { name: 'services/curriculum-relay', cwd: 'services/curriculum-relay', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/arbeitnow', cwd: 'services/extractors/arbeitnow', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/remotive', cwd: 'services/extractors/remotive', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/jobicy', cwd: 'services/extractors/jobicy', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/weworkremotely', cwd: 'services/extractors/weworkremotely', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/himalayas', cwd: 'services/extractors/himalayas', cmd: 'npx tsc --noEmit' },
  { name: 'services/extractors/remoteok', cwd: 'services/extractors/remoteok', cmd: 'npx tsc --noEmit' },
  { name: 'frontend', cwd: 'frontend', cmd: 'npx tsc -b' },
];

const start = Date.now();

function runCheck(target) {
  return new Promise((resolve) => {
    const child = spawn(target.cmd, {
      shell: true,
      cwd: target.cwd,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    });
    let output = '';

    child.stdout.on('data', (d) => (output += d.toString()));
    child.stderr.on('data', (d) => (output += d.toString()));

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`  \x1b[32m✔ [OK]\x1b[0m ${target.name}`);
        resolve({ success: true, target });
      } else {
        console.error(`  \x1b[31m✖ [FAIL]\x1b[0m ${target.name}\n${output.trim()}\n`);
        resolve({ success: false, target, error: output });
      }
    });
  });
}

console.log(`\x1b[90mLancio validazione TypeScript su ${targets.length} moduli in parallelo...\x1b[0m\n`);

const results = await Promise.all(targets.map(runCheck));
const failed = results.filter((r) => !r.success);
const elapsed = ((Date.now() - start) / 1000).toFixed(2);

console.log('\n----------------------------------------------------');
if (failed.length === 0) {
  console.log(`\x1b[32m🎉 Typecheck superato con successo per tutti i ${targets.length} moduli in ${elapsed}s!\x1b[0m`);
  process.exit(0);
} else {
  console.error(`\x1b[31m💥 ${failed.length}/${targets.length} moduli hanno errori TypeScript (tempo: ${elapsed}s).\x1b[0m`);
  process.exit(1);
}
