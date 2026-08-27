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

async function resetCurriculums() {
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

    const curriculumWhere = targetSource
      ? {
          jobOffer: {
            source: targetSource,
          },
        }
      : {};

    // 1. Conta i curriculum da eliminare
    const count = await prisma.jobCurriculum.count({ where: curriculumWhere });

    if (count === 0) {
      console.log(`ℹ️ Nessun curriculum trovato ${targetSource ? `per la fonte "${targetSource}"` : 'nel database'}. Operazione terminata.`);
      return;
    }

    // 2. Chiedi conferma se non è stato passato --yes
    if (!force) {
      const promptText = targetSource
        ? `⚠️ ATTENZIONE: Stai per eliminare ${count} curriculum per la fonte "${targetSource}".\nSei sicuro? Digita 'YES' per confermare: `
        : `⚠️ ATTENZIONE CRITICA: Stai per eliminare TUTTI i ${count} curriculum dal database e i relativi file su disco!\nSei sicuro? Digita 'YES' per confermare: `;

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
    const backupFileName = `curriculums_backup_${targetSource || 'ALL'}_${timestamp}.json`;
    const backupFilePath = path.join(backupDir, backupFileName);

    console.log(`📦 Creazione snapshot di backup di sicurezza per ${count} curriculum in corso...`);
    const recordsToBackup = await prisma.jobCurriculum.findMany({ where: curriculumWhere });

    const backupPayload = {
      type: 'JOB_CURRICULUM',
      source: targetSource || 'ALL',
      createdAt: new Date().toISOString(),
      count: recordsToBackup.length,
      data: recordsToBackup,
    };

    fs.writeFileSync(backupFilePath, JSON.stringify(backupPayload, null, 2), 'utf-8');
    console.log(`✅ Backup salvato con successo in: backups/${backupFileName}`);

    // 4. Rimozione dei file fisici su disco / storage
    console.log(`🗑️ Rimozione dei file dei curriculum...`);
    let deletedFilesCount = 0;
    for (const item of recordsToBackup) {
      const fileTarget = item.storageKey;
      if (fileTarget && fs.existsSync(fileTarget)) {
        try {
          fs.unlinkSync(fileTarget);
          deletedFilesCount++;
        } catch (err: any) {
          console.warn(`⚠️ Impossibile cancellare il file ${fileTarget}: ${err?.message || err}`);
        }
      }
    }
    console.log(`🧹 Cancellati ${deletedFilesCount} file locali.`);

    // 5. Cancellazione dal DB
    console.log(`🗑️ Eliminazione dei record dei curriculum dal DB...`);
    const deletedRecords = await prisma.jobCurriculum.deleteMany({
      where: curriculumWhere,
    });

    console.log(`🧹 Eliminati con successo ${deletedRecords.count} record di curriculum (JobCurriculum).`);
  } catch (error) {
    console.error('❌ Errore durante il reset dei curriculum:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetCurriculums();
