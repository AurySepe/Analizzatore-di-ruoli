import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

async function resetEvaluations() {
  console.log('🗑️ Avvio eliminazione di tutte le valutazioni AI...');

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

    // Elimina tutte le valutazioni AI (JobEvaluation) mantenendo intatti gli annunci di lavoro (JobOffer) e le aziende (Company)
    const deletedEvaluations = await prisma.jobEvaluation.deleteMany({});
    console.log(`🧹 Eliminate con successo ${deletedEvaluations.count} valutazioni AI (JobEvaluation).`);

    console.log('\n✨ Reset delle valutazioni completato! Al prossimo riavvio o aggiornamento del profilo, il worker AI ri-valuterà da zero tutti gli annunci.');
  } catch (error) {
    console.error('❌ Errore durante il reset delle valutazioni AI:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetEvaluations();
