import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient, PrismaPg, Pool } from '@analizzatore/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 60000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    pool.on('error', (err) => {
      console.warn('⚠️ [PrismaService] Disconnessione/Errore sul pool Postgres intercettato:', err.message);
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.connectWithRetry();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async executeWithRetry<T>(fn: (prisma: PrismaClient) => Promise<T>, retries = 3, delay = 1500): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await fn(this);
      } catch (error: any) {
        const msg = error?.message || '';
        const isConnError =
          msg.includes('Server has closed the connection') ||
          msg.includes('Connection terminated') ||
          msg.includes('ECONNRESET') ||
          msg.includes('socket hang up');

        if (isConnError && attempt < retries) {
          this.logger.warn(`⚠️ Errore connessione DB intercettato (${msg.split('\n')[0]}). Retry ${attempt}/${retries} tra ${delay}ms...`);
          await new Promise((res) => setTimeout(res, delay));
          continue;
        }
        throw error;
      }
    }
    throw new Error('Impossibile eseguire la query DB dopo molteplici tentativi.');
  }

  private async connectWithRetry(retries = 5, delay = 2000): Promise<void> {
    for (let i = 1; i <= retries; i++) {
      try {
        await this.$connect();
        this.logger.log('✅ Connessione al Database stabilita con successo.');
        return;
      } catch (err: any) {
        this.logger.error(`❌ Errore durante la connessione al DB (Tentativo ${i}/${retries}): ${err.message}`);
        if (i === retries) throw err;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
}
