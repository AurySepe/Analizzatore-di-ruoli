import 'dotenv/config';
import { JobSource, PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

function askConfirmation(query: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.trim().toUpperCase() === 'YES');
    });
  });
}

async function resetEvaluations() {
  const args = process.argv.slice(2);
  const force = args.includes('--yes') || args.includes('-y');
  const sourceArg = args.find((a) => !a.startsWith('-'))?.trim().toUpperCase();
  const targetSource = sourceArg ? (sourceArg as JobSource) : null;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('❌ DATABASE_URL non definita nelle variabili d ambiente.');
    process.exit(1);
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    await prisma.$connect();

    const evaluationWhere = targetSource
      ? {
          jobOffer: {
            source: targetSource,
          },
        }
      : {};

    // 1. Conta le valutazioni da eliminare
    const count = await prisma.jobEvaluation.count({ where: evaluationWhere });

    if (count === 0) {
      console.log(`ℹ️ Nessuna valutazione trovata ${targetSource ? `per la fonte "${targetSource}"` : 'nel database'}. Operazione terminata.`);
      return;
    }

    // 2. Chiedi conferma se non è stato passato --yes
    if (!force) {
      const promptText = targetSource
        ? `⚠️ ATTENZIONE: Stai per eliminare ${count} valutazioni AI per la fonte "${targetSource}".\nSei sicuro? Digita 'YES' per confermare: `
        : `⚠️ ATTENZIONE CRITICA: Stai per eliminare TUTTE le ${count} valutazioni AI del database!\nSei sicuro? Digita 'YES' per confermare: `;

      const confirmed = await askConfirmation(promptText);
      if (!confirmed) {
        console.log('🛑 Operazione annullata dall utente.');
        return;
      }
    }

    // 3. Backup Preventivo (Snapshot JSON)
    const backupDir = path.resolve(process.cwd(), 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `evaluations_backup_${targetSource || 'ALL'}_${timestamp}.json`;
    const backupFilePath = path.join(backupDir, backupFileName);

    console.log(`📦 Creazione snapshot di backup di sicurezza per ${count} valutazioni in corso...`);
    const recordsToBackup = await prisma.jobEvaluation.findMany({ where: evaluationWhere });

    const backupPayload = {
      type: 'JOB_EVALUATION',
      source: targetSource || 'ALL',
      createdAt: new Date().toISOString(),
      count: recordsToBackup.length,
      data: recordsToBackup,
    };

    fs.writeFileSync(backupFilePath, JSON.stringify(backupPayload, null, 2), 'utf-8');
    console.log(`✅ Backup salvato con successo in: backups/${backupFileName}`);

    // 4. Cancellazione Effettiva
    console.log(`🗑️ Eliminazione delle valutazioni...`);
    const deletedEvaluations = await prisma.jobEvaluation.deleteMany({
      where: evaluationWhere,
    });

    console.log(`🧹 Eliminate con successo ${deletedEvaluations.count} valutazioni AI (JobEvaluation).`);
    console.log(`💡 Se desideri annullare l operazione e ripristinare i dati, esegui:`);
    console.log(`   npx ts-node scripts/restore-backup.ts backups/${backupFileName}`);
  } catch (error) {
    console.error('❌ Errore durante il reset delle valutazioni AI:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetEvaluations();
