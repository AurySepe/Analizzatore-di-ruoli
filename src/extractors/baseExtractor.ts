import { CreateJobOfferInput } from '../types/jobOffer';

export abstract class BaseExtractor {
  abstract readonly name: string;
  abstract readonly sourceName: string;

  /**
   * Esegue l'estrazione degli annunci di lavoro da una determinata fonte
   * utilizzando la configurazione specifica impostata nel proprio costruttore.
   */
  abstract extract(): Promise<CreateJobOfferInput[]>;
}
