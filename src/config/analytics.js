// Single source of truth for the Google Analytics 4 Measurement ID.
//
// Set VITE_GA_MEASUREMENT_ID in:
//   - .env                (local development)
//   - Vercel → Settings → Environment Variables (production), then redeploy.
//
// Format: G-XXXXXXXXXX  (from GA4 → Admin → Data streams → your web stream).
//
// When this is empty, analytics does not load at all — no network requests,
// no console noise, and no leftover placeholder in the shipped HTML.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export const isAnalyticsEnabled = Boolean(GA_MEASUREMENT_ID);
