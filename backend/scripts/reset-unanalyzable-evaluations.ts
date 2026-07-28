import 'dotenv/config';
import { PrismaClient, EvaluationStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

async function resetUnanalyzableEvaluations() {
  console.log('🗑️ Avvio eliminazione delle valutazioni con stato UNANALYZABLE...');

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

    const deletedEvaluations = await prisma.jobEvaluation.deleteMany({
      where: {
        status: EvaluationStatus.UNANALYZABLE,
      },
    });

    console.log(`🧹 Eliminate con successo ${deletedEvaluations.count} valutazioni contrassegnate come UNANALYZABLE.`);
    console.log('\n✨ Reset completato! I job interessati verranno presi di nuovo in carico dall evaluator worker.');
  } catch (error) {
    console.error('❌ Errore durante il reset delle valutazioni non analizzabili:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetUnanalyzableEvaluations();
