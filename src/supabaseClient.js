import { initializeZapt } from '@zapt/zapt-js';

/**
 * Initializes Zapt and exports Supabase client, event creator, and login recorder.
 */
export const { createEvent, supabase, recordLogin } = initializeZapt(import.meta.env.VITE_PUBLIC_APP_ID);