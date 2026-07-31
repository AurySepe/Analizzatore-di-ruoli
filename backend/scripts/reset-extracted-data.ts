import 'dotenv/config';
import { PrismaClient, JobSource } from '@prisma/client';
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

async function resetData() {
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

    const jobWhere = targetSource ? { source: targetSource } : {};
    const syncWhere = targetSource ? { source: targetSource as string } : {};

    // 1. Conta le offerte da eliminare
    const jobCount = await prisma.jobOffer.count({ where: jobWhere });

    if (jobCount === 0) {
      console.log(`ℹ️ Nessun annuncio di lavoro trovato ${targetSource ? `per la fonte "${targetSource}"` : ''}. Operazione terminata.`);
      return;
    }

    // 2. Chiedi conferma se non è stato passato --yes
    if (!force) {
      const promptText = targetSource
        ? `⚠️ ATTENZIONE: Stai per eliminare ${jobCount} annunci di lavoro (e relative valutazioni) per la fonte "${targetSource}".\nSei sicuro? Digita 'YES' per confermare: `
        : `⚠️ ATTENZIONE CRITICA: Stai per eliminare TUTTI i ${jobCount} annunci di lavoro ed il database delle offerte!\nSei sicuro? Digita 'YES' per confermare: `;

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
    const backupFileName = `jobs_backup_${targetSource || 'ALL'}_${timestamp}.json`;
    const backupFilePath = path.join(backupDir, backupFileName);

    console.log(`📦 Creazione snapshot di backup di sicurezza per ${jobCount} annunci di lavoro in corso...`);
    const recordsToBackup = await prisma.jobOffer.findMany({ where: jobWhere });

    const backupPayload = {
      type: 'JOB_OFFER',
      source: targetSource || 'ALL',
      createdAt: new Date().toISOString(),
      count: recordsToBackup.length,
      data: recordsToBackup,
    };

    fs.writeFileSync(backupFilePath, JSON.stringify(backupPayload, null, 2), 'utf-8');
    console.log(`✅ Backup salvato con successo in: backups/${backupFileName}`);

    // 4. Cancellazione annunci ed aziende orfane
    const deletedOffers = await prisma.jobOffer.deleteMany({
      where: jobWhere,
    });
    console.log(`🧹 Eliminati ${deletedOffers.count} annunci di lavoro (JobOffer) ${targetSource ? `per la fonte "${targetSource}"` : 'totali'}.`);

    const deletedCompanies = await prisma.company.deleteMany({
      where: {
        jobOffers: {
          none: {},
        },
      },
    });
    console.log(`🧹 Eliminate ${deletedCompanies.count} aziende orfane (Company).`);

    // 5. Reset dei watermark SyncState
    const deletedSyncState = await prisma.syncState.deleteMany({
      where: syncWhere,
    });
    console.log(`🔄 Resettati ${deletedSyncState.count} watermark di sincronizzazione (SyncState).`);

    console.log(`\n✨ Reset completato con successo!`);
    console.log(`💡 Se desideri annullare l operazione e ripristinare i dati, esegui:`);
    console.log(`   npx ts-node scripts/restore-backup.ts backups/${backupFileName}`);
  } catch (error) {
    console.error('❌ Errore durante il reset dei dati:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetData();
