import { BaseExtractor } from './baseExtractor';
import { CreateJobOfferInput } from '../types/jobOffer';
import { saveOrUpdateJobOffer } from '../services/jobOfferService';

export class ExtractorRegistry {
  private extractors: BaseExtractor[] = [];

  /**
   * Registra un nuovo estrattore (già pre-configurato) nel sistema.
   */
  register(extractor: BaseExtractor): this {
    this.extractors.push(extractor);
    return this;
  }

  /**
   * Esegue l'estrazione in parallelo da tutti gli estrattori registrati
   * e restituisce l'elenco di tutte le offerte estratte.
   */
  async extractAll(): Promise<CreateJobOfferInput[]> {
    const results = await Promise.all(
      this.extractors.map(extractor => extractor.extract())
    );
    return results.flat();
  }

  /**
   * Esegue l'estrazione in parallelo da tutti gli estrattori registrati
   * e salva automaticamente le offerte nel database SQLite.
   */
  async runAllAndPersist() {
    console.log(`🌐 Avvio estrazione da ${this.extractors.length} fonte/i...`);

    const allOffers = await this.extractAll();
    console.log(`📥 Totale offerte estratte da tutte le fonti: ${allOffers.length}`);

    let savedCount = 0;
    for (const offerInput of allOffers) {
      try {
        await saveOrUpdateJobOffer(offerInput);
        savedCount++;
      } catch (err) {
        console.error(`❌ Errore nel salvataggio dell'offerta "${offerInput.title}" (${offerInput.source}):`, err);
      }
    }

    console.log(`💾 Salvate/Aggiornate con successo ${savedCount}/${allOffers.length} offerte nel database.`);
    return allOffers;
  }
}
