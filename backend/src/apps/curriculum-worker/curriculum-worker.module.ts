import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../../commons/prisma/prisma.module';
import { S3StorageModule } from '../../commons/storage/s3-storage.module';
import { CurriculumModule } from './curriculum/curriculum.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    S3StorageModule,
    CurriculumModule,
  ],
})
export class CurriculumWorkerModule {}
