import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { CurriculumQueueService } from './curriculum-queue.service';
import { ApplicationStatus } from '@prisma/client';

@Injectable()
export class CurriculumProducerService {
  private readonly logger = new Logger(CurriculumProducerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: CurriculumQueueService,
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.producerLoop().catch(err => {
      this.logger.error('❌ Errore critico nel Producer Loop Curriculum:', err);
    });
  }

  private async producerLoop() {
    this.logger.log('📡 Producer Curriculum avviato: ricerca annunci in stato SAVED da elaborare...');

    while (true) {
      try {
        if (this.queueService.size < 20) {
          const excludeIds = this.queueService.getQueuedOrProcessingIds();

          const pendingJobs = await this.prisma.jobOffer.findMany({
            where: {
              status: ApplicationStatus.SAVED,
              curriculum: null,
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
        this.logger.error('❌ Errore nel Producer Curriculum durante il fetch dal DB:', err?.message || err);
      }

      await new Promise(res => setTimeout(res, 5000));
    }
  }
}
