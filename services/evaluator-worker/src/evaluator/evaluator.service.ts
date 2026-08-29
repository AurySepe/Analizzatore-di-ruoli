import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { aiConfig } from '../config/ai.config';
import { EvaluatorProducerService } from './queue/evaluator-producer.service';
import { GeminiConsumerService } from './queue/gemini-consumer.service';
import { GemmaCloudConsumerService } from './queue/gemma-cloud-consumer.service';

@Injectable()
export class EvaluatorService implements OnModuleInit {
  private readonly logger = new Logger(EvaluatorService.name);

  constructor(
    private readonly producerService: EvaluatorProducerService,
    private readonly geminiConsumer: GeminiConsumerService,
    private readonly gemmaCloudConsumer: GemmaCloudConsumerService,
  ) { }

  async onModuleInit() {
    this.logger.log('🚀 Avvio dell Orchestratore Evaluator (Pattern Producer & Consumer Cloud su Coda Condivisa)...');
    this.logger.log(`⚙️ Strategia AI selezionata: "${aiConfig.strategy.toUpperCase()}"`);

    // Avvia il Producer (riempie la coda condivisa)
    this.producerService.start();

    // Avvia i Consumer Cloud veloci (pescano autonomamente dalla stessa coda condivisa)
    this.geminiConsumer.start();
    this.gemmaCloudConsumer.start();
  }
}


