import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.ARBEITNOW_DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/extractor_arbeitnow?schema=public',
  },
});
