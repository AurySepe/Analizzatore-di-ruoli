import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from '../../commons/prisma/prisma.module';
import { ExtractorsModule } from './extractors/extractors.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    ExtractorsModule,
  ],
})
export class ExtractorWorkerModule {}
