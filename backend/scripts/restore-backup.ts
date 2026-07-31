import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

async function restoreBackup() {
  const backupFilePathArg = process.argv[2];

  if (!backupFilePathArg) {
    console.error('❌ Specificare il percorso o il nome del file di backup da ripristinare.');
    console.log('Esempio: npx ts-node scripts/restore-backup.ts backups/evaluations_backup_2026-07-31_14-50-00.json');
    process.exit(1);
  }

  const resolvedPath = path.isAbsolute(backupFilePathArg)
    ? backupFilePathArg
    : path.resolve(process.cwd(), backupFilePathArg);

  if (!fs.existsSync(resolvedPath)) {
    console.error(`❌ File di backup non trovato nel percorso: "${resolvedPath}"`);
    process.exit(1);
  }

  console.log(`📦 Lettura file di backup: ${resolvedPath}...`);
  const rawData = fs.readFileSync(resolvedPath, 'utf-8');
  const backupContent = JSON.parse(rawData);

  const { type, createdAt, data } = backupContent;

  if (!Array.isArray(data)) {
    console.error('❌ Formato file di backup non valido (campo "data" non è un array).');
    process.exit(1);
  }

  console.log(`ℹ️ Tipo di backup: "${type}", Creato il: ${createdAt}, Elementi da ripristinare: ${data.length}`);

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('❌ DATABASE_URL non definita.');
    process.exit(1);
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    await prisma.$connect();
    let restoredCount = 0;

    if (type === 'JOB_EVALUATION') {
      console.log('🔄 Ripristino delle valutazioni AI (JobEvaluation)...');
      for (const item of data) {
        // Conversione date ISO string in oggetti Date
        const formattedData = {
          ...item,
          evaluatedAt: item.evaluatedAt ? new Date(item.evaluatedAt) : new Date(),
          createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
          updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        };

        await prisma.jobEvaluation.upsert({
          where: { jobOfferId: item.jobOfferId },
          create: formattedData,
          update: formattedData,
        });
        restoredCount++;
      }
    } else if (type === 'JOB_OFFER') {
      console.log('🔄 Ripristino degli annunci di lavoro (JobOffer)...');
      for (const item of data) {
        const formattedData = {
          ...item,
          datePosted: item.datePosted ? new Date(item.datePosted) : new Date(),
          createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
          updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        };

        await prisma.jobOffer.upsert({
          where: { id: item.id },
          create: formattedData,
          update: formattedData,
        });
        restoredCount++;
      }
    } else {
      console.error(`❌ Tipo di backup sconosciuto: "${type}".`);
      process.exit(1);
    }

    console.log(`\n✨ Ripristino completato con successo! Ripristinati ${restoredCount} record.`);
  } catch (error) {
    console.error('❌ Errore durante il ripristino del backup:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

restoreBackup();
