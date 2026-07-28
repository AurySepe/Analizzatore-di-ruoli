import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { EvaluatorQueueService } from './evaluator-queue.service';

@Injectable()
export class EvaluatorProducerService {
  private readonly logger = new Logger(EvaluatorProducerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.producerLoop().catch(err => {
      this.logger.error('❌ Errore critico nel Producer Loop:', err);
    });
  }

  isProfileComplete(): boolean {
    return Boolean(
      userProfileConfig.resumeText && userProfileConfig.resumeText.trim().length > 0 &&
      userProfileConfig.searchCriteriaText && userProfileConfig.searchCriteriaText.trim().length > 0
    );
  }

  private async producerLoop() {
    this.logger.log('📡 Producer avviato: monitoraggio ed inserimento annunci nella coda condivisa (Denque)...');

    while (true) {
      try {
        if (!this.isProfileComplete()) {
          await new Promise(res => setTimeout(res, 10000));
          continue;
        }

        // Se la coda condivisa ha meno di 20 annunci pronti, fa il fetch dal DB
        if (this.queueService.size < 20) {
          const excludeIds = this.queueService.getQueuedOrProcessingIds();

          const pendingJobs = await this.prisma.jobOffer.findMany({
            where: {
              evaluation: null,
              id: { notIn: excludeIds },
            },
            select: { id: true, title: true },
            take: 50,
          });

          if (pendingJobs.length > 0) {
            this.queueService.enqueueMany(pendingJobs);
          }
        }
      } catch (err: any) {
        this.logger.error('❌ Errore nel Producer durante il fetch dal DB:', err?.message || err);
      }

      await new Promise(res => setTimeout(res, 5000));
    }
  }
}
