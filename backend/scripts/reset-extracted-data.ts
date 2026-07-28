import 'dotenv/config';
import { PrismaClient, JobSource } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

async function resetData() {
  // Legge eventuale fonte passata come argomento (es. npx ts-node scripts/reset-extracted-data.ts Remotive)
  const arg = process.argv[2] ? process.argv[2].trim().toUpperCase() : null;
  const targetSource = arg ? (arg as JobSource) : null;

  if (targetSource) {
    console.log(`🗑️ Avvio eliminazione dati estratti per la fonte specifica: "${targetSource}"...`);
  } else {
    console.log('🗑️ Avvio eliminazione dati estratti per TUTTE le fonti...');
  }

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


    // 1. Elimina gli annunci di lavoro per la fonte specificata (o tutti)
    const deletedOffers = await prisma.jobOffer.deleteMany({
      where: jobWhere,
    });
    console.log(`🧹 Eliminati ${deletedOffers.count} annunci di lavoro (JobOffer) ${targetSource ? `per la fonte "${targetSource}"` : 'totali'}.`);

    // 2. Elimina aziende senza annunci di lavoro associati
    const deletedCompanies = await prisma.company.deleteMany({
      where: {
        jobOffers: {
          none: {},
        },
      },
    });
    console.log(`🧹 Eliminate ${deletedCompanies.count} aziende orfane (Company).`);

    // 3. Reset dei watermark di sincronizzazione degli estrattori (SyncState)
    const deletedSyncState = await prisma.syncState.deleteMany({
      where: syncWhere,
    });
    console.log(`🔄 Resettati ${deletedSyncState.count} watermark di sincronizzazione (SyncState) ${targetSource ? `per "${targetSource}"` : 'totali'}.`);

    console.log(`\n✨ Reset completato con successo! ${targetSource ? `Gli estrattori eseguiranno il re-fetch da capo per "${targetSource}".` : 'Gli estrattori eseguiranno un Full Backfill per tutte le fonti.'}`);
  } catch (error) {
    console.error('❌ Errore durante il reset dei dati:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetData();
