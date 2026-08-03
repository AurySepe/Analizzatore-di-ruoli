import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../../commons/prisma/prisma.module';
import { CurriculumModule } from './curriculum/curriculum.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CurriculumModule,
  ],
})
export class CurriculumWorkerModule {}
