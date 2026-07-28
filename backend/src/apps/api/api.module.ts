import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../../commons/prisma/prisma.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    JobOffersModule,
    EvaluationsModule,
  ],
})
export class ApiModule {}
