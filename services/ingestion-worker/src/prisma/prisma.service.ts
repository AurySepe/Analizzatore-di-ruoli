import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient, PrismaPg, Pool } from '@analizzatore/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const connectionString =
      process.env.DATABASE_URL ||
      'postgresql://postgres:postgres@localhost:5432/analizzatore_ruoli?schema=public';

    const pool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 60000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    pool.on('error', (err) => {
      console.warn('⚠️ [Ingestion PrismaService] Postgres pool error:', err.message);
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to Main Database (analizzatore_ruoli).');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
