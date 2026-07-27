import 'dotenv/config';
import { ExtractorRegistry } from './extractors/extractorRegistry';
import { ArbeitnowExtractor } from './extractors/arbeitnowExtractor';
import { getAllJobOffers, prisma } from './services/jobOfferService';

// Flag per modalità singola esecuzione (es. `npm start` o passsando `--once`)
const IS_ONCE_MODE = process.argv.includes('--once') || process.argv.includes('-o');

// Intervallo di scansione in minuti (default: 30 minuti)
const INTERVAL_MINUTES = parseInt(process.env.INTERVAL_MINUTES || '30', 10);
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;

let isScanning = false;

async function runExtractionCycle(registry: ExtractorRegistry) {
  if (isScanning) {
    console.log('⏳ Scansione precedente ancora in corso. Salto questo ciclo...');
    return;
  }

  isScanning = true;
  const timestamp = new Date().toLocaleTimeString();
  console.log(`\n⏰ [${timestamp}] Avvio ciclo di aggiornamento annunci...`);

  try {
    await registry.runAllAndPersist();

    const storedOffers = await getAllJobOffers();
    console.log(`\n📊 [${timestamp}] Totale annunci attualmente salvati in DB: ${storedOffers.length}`);
  } catch (error) {
    console.error(`❌ Errore durante il ciclo di estrazione:`, error);
  } finally {
    isScanning = false;
  }
}

async function main() {
  console.log('🚀 Avvio del Modulo di Estrazione Annunci di Lavoro...');
  
  if (IS_ONCE_MODE) {
    console.log('📌 Modalità: Esecuzione Singola (Testing)\n');
  } else {
    console.log(`⏱️ Modalità: Monitoraggio Continuo (ogni ${INTERVAL_MINUTES} minuti)\n`);
  }

  const registry = new ExtractorRegistry();
  
  // Registrazione delle fonti di estrazione
  registry.register(
    new ArbeitnowExtractor({
      keywords: ['TypeScript', 'Node.js', 'Software', 'Engineer', 'Developer', 'Frontend', 'Backend', 'Fullstack'],
      onlyRemote: false,
      limit: 15,
    })
  );

  // Eseguiamo il primo ciclo di estrazione
  await runExtractionCycle(registry);

  // Se siamo in modalità esecuzione singola, chiudiamo la connessione ed usciamo
  if (IS_ONCE_MODE) {
    await prisma.$disconnect();
    process.exit(0);
  }

  // Altrimenti avviabile in modalità loop continuo
  const timer = setInterval(async () => {
    await runExtractionCycle(registry);
  }, INTERVAL_MS);

  process.on('SIGINT', async () => {
    console.log('\n🛑 Interruzione ricevuta. Chiusura del monitoraggio...');
    clearInterval(timer);
    await prisma.$disconnect();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error('❌ Errore durante l execution script:', err);
});
