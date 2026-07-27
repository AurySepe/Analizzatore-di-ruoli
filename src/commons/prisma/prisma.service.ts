import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import * as path from 'path';
import { pathToFileURL } from 'url';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbFilePath = path.resolve(process.cwd(), 'dev.db');
    const formattedFileUrl = pathToFileURL(dbFilePath).toString();
    process.env.DATABASE_URL = formattedFileUrl;

    const adapter = new PrismaLibSql({ url: formattedFileUrl });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
