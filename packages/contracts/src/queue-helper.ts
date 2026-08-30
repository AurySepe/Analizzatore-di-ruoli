import {
  EVALUATE_JOB_EVENT,
  GENERATE_CURRICULUM_TAILORING_EVENT,
  GENERATE_PDF_EVENT,
  JOB_OFFER_SCRAPED_EVENT,
} from './index';

/**
 * Sanitizza un custom jobId per conformità con BullMQ (vietato il carattere ':' in Redis).
 */
export function sanitizeJobId(jobId?: string | null): string | undefined {
  if (!jobId) return undefined;
  // Sostituisce qualsiasi sequenza di ':' o caratteri non ammessi con '-'
  return jobId.replace(/[:\/\\#\s]+/g, '-').replace(/^-+|-+$/g, '');
}

/**
 * Valida la struttura dei campi obbligatori di un payload evento prima dell'inserimento in coda.
 */
export function validateTaskPayload(eventName: string, payload: any): void {
  if (!payload || typeof payload !== 'object') {
    throw new Error(`[Contracts] Payload non valido per l'evento "${eventName}": previsto un oggetto, ricevuto ${typeof payload}.`);
  }

  switch (eventName) {
    case EVALUATE_JOB_EVENT:
    case GENERATE_CURRICULUM_TAILORING_EVENT:
    case GENERATE_PDF_EVENT:
      if (!payload.jobOfferId || typeof payload.jobOfferId !== 'string' || payload.jobOfferId.trim().length === 0) {
        throw new Error(`[Contracts] Payload incompleto per "${eventName}": il campo "jobOfferId" è obbligatorio e deve essere una stringa non vuota.`);
      }
      break;

    case JOB_OFFER_SCRAPED_EVENT:
      if (!payload.externalId || !payload.title || !payload.companyName || !payload.rawDescription) {
        throw new Error(`[Contracts] Payload incompleto per "${eventName}": "externalId", "title", "companyName" e "rawDescription" sono obbligatori.`);
      }
      break;

    default:
      // Evento personalizzato o non strict: consentito
      break;
  }
}

export interface SafeQueue<T = any> {
  add(name: string, data: T, opts?: any): Promise<any>;
}

/**
 * Helper sicuro per l'invio di job su code BullMQ con validazione del payload e sanitizzazione automatica del jobId.
 */
export async function addSafeQueueJob<T>(
  queue: SafeQueue<T>,
  eventName: string,
  payload: T,
  opts?: { jobId?: string; attempts?: number; backoff?: any; removeOnComplete?: any; [key: string]: any },
): Promise<any> {
  // 1. Validazione payload
  validateTaskPayload(eventName, payload);

  // 2. Sanitizzazione automatica del jobId
  const safeOpts = opts ? { ...opts } : {};
  if (safeOpts.jobId) {
    safeOpts.jobId = sanitizeJobId(safeOpts.jobId);
  }

  // 3. Dispatch protetto su BullMQ
  return queue.add(eventName, payload, safeOpts);
}
