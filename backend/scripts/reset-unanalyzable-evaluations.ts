import 'dotenv/config';
import { PrismaClient, EvaluationStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
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

async function resetUnanalyzableEvaluations() {
  const args = process.argv.slice(2);
  const force = args.includes('--yes') || args.includes('-y');

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

    // 1. Conta le valutazioni non analizzabili da eliminare
    const count = await prisma.jobEvaluation.count({
      where: {
        status: EvaluationStatus.UNANALYZABLE,
      },
    });

    if (count === 0) {
      console.log('ℹ️ Nessuna valutazione con stato UNANALYZABLE trovata nel database. Operazione terminata.');
      return;
    }

    // 2. Chiedi conferma se non è stato passato --yes
    if (!force) {
      const promptText = `⚠️ ATTENZIONE: Stai per eliminare ${count} valutazioni contrassegnate come UNANALYZABLE.\nSei sicuro? Digita 'YES' per confermare: `;
      const confirmed = await askConfirmation(promptText);
      if (!confirmed) {
        console.log('🛑 Operazione annullata dall\'utente.');
        return;
      }
    }

    console.log('🗑️ Avvio eliminazione delle valutazioni con stato UNANALYZABLE...');

    const deletedEvaluations = await prisma.jobEvaluation.deleteMany({
      where: {
        status: EvaluationStatus.UNANALYZABLE,
      },
    });

    console.log(`🧹 Eliminate con successo ${deletedEvaluations.count} valutazioni contrassegnate come UNANALYZABLE.`);
    console.log('\n✨ Reset completato! I job interessati verranno presi di nuovo in carico dall\'evaluator worker.');
  } catch (error) {
    console.error('❌ Errore durante il reset delle valutazioni non analizzabili:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

resetUnanalyzableEvaluations();

