export class SlidingWindowRateLimiter {
  private timestamps: number[] = [];

  constructor(
    private readonly maxRequests: number,
    private readonly windowMs: number = 60000,
  ) {}

  async waitForToken(): Promise<void> {
    while (true) {
      const now = Date.now();
      // Rimuovi i timestamp antecedenti alla finestra temporale
      this.timestamps = this.timestamps.filter((ts) => now - ts < this.windowMs);

      if (this.timestamps.length < this.maxRequests) {
        this.timestamps.push(now);
        return;
      }

      // Calcola l attesa necessaria per lo scadere della richiesta più vecchia
      const oldest = this.timestamps[0];
      const waitMs = Math.max(50, oldest + this.windowMs - now + 10);
      await new Promise((res) => setTimeout(res, waitMs));
    }
  }
}
