import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema',
  datasource: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/analizzatore_ruoli?schema=public',
  },
});
