import { CreateJobOfferDto } from '../job-offers/dto/job-offer.dto';

export abstract class BaseExtractor {
  abstract readonly name: string;
  abstract readonly sourceName: string;

  abstract extract(): Promise<Partial<CreateJobOfferDto>[]>;
}
