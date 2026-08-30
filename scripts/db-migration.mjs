#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import process from 'process';

const args = process.argv.slice(2);
const nameArg = args.find((a) => a.startsWith('--name=') || a.startsWith('-n='))?.split('=')[1] || args[0];

if (!nameArg) {
  console.error('\x1b[31m✖ Errore: specificare il nome della migrazione.\x1b[0m');
  console.log('Uso: npm run db:migrate:new <nome_migrazione>');
  console.log('Esempio: npm run db:migrate:new add_evaluation_process_status');
  process.exit(1);
}

const cleanName = nameArg.replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
const now = new Date();
const timestamp = now
  .toISOString()
  .replace(/[-:T]/g, '')
  .slice(0, 14);

const migrationDirName = `${timestamp}_${cleanName}`;
const rootDir = process.cwd();
const migrationsBaseDir = path.join(rootDir, 'packages/database/prisma/schema/migrations');
const targetMigrationDir = path.join(migrationsBaseDir, migrationDirName);
const targetMigrationFile = path.join(targetMigrationDir, 'migration.sql');

console.log('\x1b[1m\x1b[35m====================================================\x1b[0m');
console.log(` 📦 Generazione Nuova Migrazione Prisma: ${cleanName}`);
console.log('\x1b[1m\x1b[35m====================================================\x1b[0m\n');

// 1. Calcolo del diff SQL tramite Prisma CLI
console.log('▶ [1/3] Calcolo differenziale SQL dallo storico delle migrazioni...');
const diffCmd = `npx --prefix packages/database prisma migrate diff --from-migrations packages/database/prisma/schema/migrations --to-schema packages/database/prisma/schema --script`;

let sqlOutput = '';
try {
  sqlOutput = execSync(diffCmd, { encoding: 'utf8', env: process.env }).trim();
} catch (err) {
  console.error('\x1b[31m✖ Errore durante il calcolo del diff Prisma:\x1b[0m', err.message);
  process.exit(1);
}

if (!sqlOutput) {
  console.log('\x1b[33m⚠ Nessuna modifica rilevata tra lo schema Prisma e le migrazioni esistenti.\x1b[0m');
  console.log('Lo schema è già allineato al 100%.');
  process.exit(0);
}

// 2. Creazione della cartella e scrittura del file migration.sql
console.log(`▶ [2/3] Creazione file migrazione: ${migrationDirName}/migration.sql...`);
fs.mkdirSync(targetMigrationDir, { recursive: true });
fs.writeFileSync(targetMigrationFile, `${sqlOutput}\n`, 'utf8');
console.log(`\x1b[32m✔ File generato con successo:\x1b[0m packages/database/prisma/schema/migrations/${migrationDirName}/migration.sql`);

// 3. Rigenerazione Prisma Client e compilazione database package
console.log('▶ [3/3] Rigenerazione Prisma Client e build package @analizzatore/database...');
execSync('npm --prefix packages/database run prisma:generate', { stdio: 'inherit' });
execSync('npm --prefix packages/database run build', { stdio: 'inherit' });

console.log('\n\x1b[32m🎉 Migrazione creata e registrata con successo!\x1b[0m');
console.log('Verrà applicata automaticamente al prossimo deploy da: \x1b[36mnpm run k8s:deploy\x1b[0m\n');
