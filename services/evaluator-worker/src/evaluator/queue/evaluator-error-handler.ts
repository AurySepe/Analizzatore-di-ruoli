import { Logger } from '@nestjs/common';

export interface ProviderErrorState {
  lastRateLimitTime: number;
  cooldownUntil: number;
  consecutiveErrorWindows: number;
}

export type ErrorAction =
  | { type: 'TEMPORARY_RETRY'; waitMs: number; isNewWindow: boolean }
  | { type: 'DAILY_PAUSE'; waitMs: number }
  | { type: 'FATAL_UNANALYZABLE'; message: string };

export class EvaluatorErrorHandler {
  private static readonly logger = new Logger('EvaluatorErrorHandler');
  private static readonly providerStates = new Map<string, ProviderErrorState>();

  // Finestra di deduplicazione per chiamate parallele (es. 15 secondi)
  private static readonly DEDUPLICATION_WINDOW_MS = 15000;
  // Soglia di finestre di errore distinte e consecutive prima della pausa prolungata
  private static readonly MAX_CONSECUTIVE_ERROR_WINDOWS = 5;
  // Pausa per errore temporaneo normale (es. 10 secondi)
  private static readonly BASE_BACKOFF_MS = 10000;
  // Pausa prolungata (es. 15 minuti) quando la soglia di finestre consecutive viene superata
  private static readonly DAILY_PAUSE_MS = 15 * 60 * 1000;

  private static getState(providerName: string): ProviderErrorState {
    let state = this.providerStates.get(providerName);
    if (!state) {
      state = {
        lastRateLimitTime: 0,
        cooldownUntil: 0,
        consecutiveErrorWindows: 0,
      };
      this.providerStates.set(providerName, state);
    }
    return state;
  }

  /**
   * Resetta lo stato di errore quando una chiamata va a buon fine
   */
  static recordSuccess(providerName: string) {
    const state = this.getState(providerName);
    if (state.consecutiveErrorWindows > 0) {
      this.logger.log(`✅ [${providerName}] Chiamata completata con successo. Reset contatore finestre di errore (${state.consecutiveErrorWindows} -> 0).`);
      state.consecutiveErrorWindows = 0;
    }
  }

  /**
   * Determina l'azione da intraprendere in base allo status code e alle proprieta tipizzate dell'errore.
   */
  static handleError(providerName: string, err: any): ErrorAction {
    const state = this.getState(providerName);
    const now = Date.now();
    const statusCode = err?.status ?? err?.statusCode ?? err?.response?.status;
    const errMsg = err?.message || String(err);

    // 1. HTTP Status 429 (Rate Limit / Resource Exhausted)
    const is429 = statusCode === 429 || errMsg.includes('429');

    // 2. HTTP Status 5xx / Rete temporanei
    const is5xxOrNetwork =
      (statusCode >= 500 && statusCode < 600) ||
      statusCode === 503 ||
      statusCode === 504 ||
      errMsg.includes('503') ||
      errMsg.includes('504') ||
      errMsg.includes('UNAVAILABLE') ||
      errMsg.includes('Timeout') ||
      errMsg.includes('timeout') ||
      errMsg.includes('ECONNRESET') ||
      errMsg.includes('ETIMEDOUT');

    if (is429) {
      // Verifica se l'errore rientra nella finestra di deduplicazione di chiamate parallele simultanee
      const isInSameWindow = (now - state.lastRateLimitTime) < this.DEDUPLICATION_WINDOW_MS;

      if (!isInSameWindow) {
        state.lastRateLimitTime = now;
        state.consecutiveErrorWindows++;
        this.logger.warn(
          `⚠️ [${providerName}] Rate Limit 429 rilevato. Nuova finestra errore #${state.consecutiveErrorWindows}/${this.MAX_CONSECUTIVE_ERROR_WINDOWS}`,
        );
      } else {
        this.logger.log(
          `ℹ️ [${providerName}] Rate Limit 429 su chiamata parallela (finestra errore #${state.consecutiveErrorWindows} gia registrata ${Math.round((now - state.lastRateLimitTime)/1000)}s fa).`,
        );
      }

      // Se abbiamo superato la soglia di finestre autonome e distinte consecutive
      if (state.consecutiveErrorWindows >= this.MAX_CONSECUTIVE_ERROR_WINDOWS) {
        state.cooldownUntil = now + this.DAILY_PAUSE_MS;
        this.logger.warn(
          `🛑 [${providerName}] Raggiunta la soglia di ${this.MAX_CONSECUTIVE_ERROR_WINDOWS} finestre di 429 consecutive. Pausa prolungata di 15 min.`,
        );
        return { type: 'DAILY_PAUSE', waitMs: this.DAILY_PAUSE_MS };
      }

      // Altrimenti applica un backoff temporaneo breve
      const waitMs = Math.max(this.BASE_BACKOFF_MS, state.cooldownUntil - now);
      state.cooldownUntil = Math.max(state.cooldownUntil, now + waitMs);

      return { type: 'TEMPORARY_RETRY', waitMs, isNewWindow: !isInSameWindow };
    }

    if (is5xxOrNetwork) {
      this.logger.warn(`⚠️ [${providerName}] Errore temporaneo server/rete (${errMsg}). Attesa 10s...`);
      return { type: 'TEMPORARY_RETRY', waitMs: this.BASE_BACKOFF_MS, isNewWindow: false };
    }

    // 3. Errore Client / Configurazione Permamente (es. HTTP 400, 401, 403, 404, o syntax error)
    this.logger.error(`❌ [${providerName}] Errore irrecuperabile: ${errMsg}`);
    return { type: 'FATAL_UNANALYZABLE', message: errMsg };
  }

  /**
   * Ritorna quanti millisecondi attendere se il provider e attualmente in cooldown
   */
  static getRemainingCooldownMs(providerName: string): number {
    const state = this.getState(providerName);
    const remaining = state.cooldownUntil - Date.now();
    return remaining > 0 ? remaining : 0;
  }
}
