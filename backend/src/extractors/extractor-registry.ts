import { BaseExtractor } from './base-extractor';

export class ExtractorRegistry {
  private extractors: BaseExtractor[] = [];

  register(extractor: BaseExtractor): this {
    this.extractors.push(extractor);
    return this;
  }

  async extractAll(): Promise<any[]> {
    const results = await Promise.all(
      this.extractors.map(extractor => extractor.extract())
    );

    return results.flat();
  }
}
