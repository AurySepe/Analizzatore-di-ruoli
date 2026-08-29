import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.WEWORKREMOTELY_DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/extractor_weworkremotely?schema=public',
  },
});
