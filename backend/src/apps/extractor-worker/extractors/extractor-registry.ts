import { Injectable, Logger } from '@nestjs/common';
import { BaseExtractor, RawExtractedJob, ExtractionResult } from './base-extractor';

@Injectable()
export class ExtractorRegistry {
  private readonly logger = new Logger(ExtractorRegistry.name);
  private readonly extractors: Map<string, BaseExtractor> = new Map();

  register(extractor: BaseExtractor): void {
    if (this.extractors.has(extractor.sourceName)) {
      this.logger.warn(`Estrattore per la fonte "${extractor.sourceName}" già registrato. Verrà sovrascritto.`);
    }
    this.extractors.set(extractor.sourceName, extractor);
    this.logger.log(`✅ Estrattore registrato: ${extractor.sourceName} (${extractor.baseUrl})`);
  }

  getExtractor(sourceName: string): BaseExtractor | undefined {
    return this.extractors.get(sourceName);
  }

  getExtractors(): BaseExtractor[] {
    return Array.from(this.extractors.values());
  }

  async extractAll(lastSyncTimestamps?: Map<string, Date>): Promise<Map<string, ExtractionResult>> {
    const results = new Map<string, ExtractionResult>();

    for (const [sourceName, extractor] of this.extractors.entries()) {
      const watermark = lastSyncTimestamps?.get(sourceName);
      try {
        const res = await extractor.extract(watermark);
        results.set(sourceName, res);
      } catch (err) {
        this.logger.error(`❌ Errore durante l estrazione dalla fonte "${sourceName}":`, err);
        results.set(sourceName, { jobs: [], hasErrors: true });
      }
    }

    return results;
  }
}
