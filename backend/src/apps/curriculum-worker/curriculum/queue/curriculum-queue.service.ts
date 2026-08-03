import { Injectable, Logger } from '@nestjs/common';
import Denque = require('denque');

export interface PendingCurriculumJobItem {
  id: string;
  title: string;
}

@Injectable()
export class CurriculumQueueService {
  private readonly logger = new Logger(CurriculumQueueService.name);

  // Utilizza Denque (Double-Ended Queue O(1)) per la coda condivisa dei curriculum
  private readonly queue: InstanceType<typeof Denque> = new Denque();
  private readonly queuedOrProcessingIds = new Set<string>();

  enqueueMany(jobs: PendingCurriculumJobItem[]) {
    let addedCount = 0;
    for (const job of jobs) {
      if (!this.queuedOrProcessingIds.has(job.id)) {
        this.queuedOrProcessingIds.add(job.id);
        this.queue.push(job);
        addedCount++;
      }
    }
    if (addedCount > 0) {
      this.logger.log(`📥 Denque (Curriculum): Aggiunti ${addedCount} annunci SAVED alla coda. In coda: ${this.queue.length}`);
    }
  }

  dequeue(): PendingCurriculumJobItem | undefined {
    return this.queue.shift() as PendingCurriculumJobItem | undefined;
  }

  requeueToFront(job: PendingCurriculumJobItem) {
    this.queue.unshift(job);
    this.logger.log(`🔄 Denque (Curriculum): Annuncio "${job.title}" reinserito in testa alla coda.`);
  }

  markCompleted(jobId: string) {
    this.queuedOrProcessingIds.delete(jobId);
  }

  get size(): number {
    return this.queue.length;
  }

  get activeCount(): number {
    return this.queuedOrProcessingIds.size;
  }

  getQueuedOrProcessingIds(): string[] {
    return Array.from(this.queuedOrProcessingIds);
  }
}
