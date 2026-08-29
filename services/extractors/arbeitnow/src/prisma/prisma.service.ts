import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const connectionString =
      process.env.ARBEITNOW_DATABASE_URL ||
      'postgresql://postgres:postgres@localhost:5432/extractor_arbeitnow?schema=public';

    const pool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 60000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    pool.on('error', (err) => {
      console.warn('⚠️ [Arbeitnow PrismaService] Postgres pool error:', err.message);
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to Arbeitnow dedicated database.');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
