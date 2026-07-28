import { Injectable, Logger } from '@nestjs/common';
import Denque = require('denque');

export interface PendingJobItem {
  id: string;
  title: string;
}

@Injectable()
export class EvaluatorQueueService {
  private readonly logger = new Logger(EvaluatorQueueService.name);
  
  // Utilizza Denque (Double-Ended Queue O(1)) per la coda condivisa
  private readonly queue: InstanceType<typeof Denque> = new Denque();

  private readonly queuedOrProcessingIds = new Set<string>();

  /**
   * Il Producer inserisce i nuovi annunci trovati nel DB in coda condivisa
   */
  enqueueMany(jobs: PendingJobItem[]) {
    let addedCount = 0;
    for (const job of jobs) {
      if (!this.queuedOrProcessingIds.has(job.id)) {
        this.queuedOrProcessingIds.add(job.id);
        this.queue.push(job);
        addedCount++;
      }
    }
    if (addedCount > 0) {
      this.logger.log(`📥 Denque: Aggiunti ${addedCount} nuovi annunci alla coda condivisa. In coda: ${this.queue.length}`);
    }
  }

  /**
   * I Consumer (Gemini / Ollama) usano questo metodo per "pescare" un annuncio dalla coda
   */
  dequeue(): PendingJobItem | undefined {
    return this.queue.shift() as PendingJobItem | undefined;
  }


  /**
   * In caso di 429 Rate Limit, l'annuncio viene reinserito in TESTA alla coda Denque O(1)
   */
  requeueToFront(job: PendingJobItem) {
    this.queue.unshift(job);
    this.logger.log(`🔄 Denque: Annuncio "${job.title}" reinserito in testa alla coda condivisa.`);
  }

  /**
   * Notifica il completamento dell'annuncio e rimuove l'ID dai tracciati
   */
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
