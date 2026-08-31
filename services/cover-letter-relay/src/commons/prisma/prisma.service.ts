import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient, PrismaPg, Pool } from '@analizzatore/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    pool.on('error', (err) => {
      console.warn('⚠️ [PrismaService Relay] Disconnessione Postgres:', err.message);
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

  private async connectWithRetry(retries = 5, delay = 2000): Promise<void> {
    for (let i = 1; i <= retries; i++) {
      try {
        await this.$connect();
        this.logger.log('✅ Connessione a PostgreSQL stabilita con successo.');
        return;
      } catch (err: any) {
        this.logger.warn(`⚠️ Tentativo ${i}/${retries} connessione DB fallito: ${err.message}`);
        if (i === retries) throw err;
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
}
