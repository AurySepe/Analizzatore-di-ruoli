import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CurriculumProducerService } from './queue/curriculum-producer.service';
import { CurriculumConsumerService } from './queue/curriculum-consumer.service';

@Injectable()
export class CurriculumService implements OnModuleInit {
  private readonly logger = new Logger(CurriculumService.name);

  constructor(
    private readonly producerService: CurriculumProducerService,
    private readonly consumerService: CurriculumConsumerService,
  ) {}

  async onModuleInit() {
    this.logger.log('🚀 Avvio dell Orchestratore Curriculum (Pattern Producer & Consumer su Coda Condivisa)...');
    
    // Avvia il Producer (inserisce gli annunci SAVED in coda)
    this.producerService.start();

    // Avvia il Consumer (estrae gli annunci ed elabora i curriculum finti)
    this.consumerService.start();
  }
}
