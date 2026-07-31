export type AiStrategy = 'balanced' | 'ollama_only' | 'gemini_only';

export interface AiConfig {
  strategy: AiStrategy;
  ollama: {
    baseUrl: string;
    model: string;
    timeoutMs: number;
  };
  gemini: {
    apiKey: string;
    model: string;
    timeoutMs: number;
  };
  gemini35: {
    apiKey: string;
    model: string;
    timeoutMs: number;
  };
  gemmaCloud: {
    apiKey: string;
    model: string;
    timeoutMs: number;
  };
}

export const aiConfig: AiConfig = {
  strategy: (process.env.AI_STRATEGY as AiStrategy) || 'balanced',
  ollama: {
    baseUrl: process.env.LOCAL_AI_BASE_URL || 'http://localhost:11434',
    model: process.env.LOCAL_AI_MODEL || 'gemma4:12b',
    timeoutMs: 60000,
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite',
    timeoutMs: 30000,
  },
  gemini35: {
    apiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMINI_3_5_MODEL || 'gemini-3.5-flash-lite',
    timeoutMs: 30000,
  },
  gemmaCloud: {
    apiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMMA_CLOUD_MODEL || 'gemma-4-26b-a4b-it',
    timeoutMs: 30000,
  },
};


  
