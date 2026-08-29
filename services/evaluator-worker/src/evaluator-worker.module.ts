import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './commons/prisma/prisma.module';
import { EvaluatorModule } from './evaluator/evaluator.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    EvaluatorModule,
  ],
})
export class EvaluatorWorkerModule {}
