import createClient from 'openapi-fetch';
import type { paths } from '@/Core/OpenApi/schema';

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/api\/?$/, '');

export const openApiClient = createClient<paths>({
  baseUrl: apiBaseUrl,
});
