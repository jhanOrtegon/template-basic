export const Environment = {
  production: import.meta.env.MODE === 'production',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  httpTimeout: Number(import.meta.env.VITE_HTTP_TIMEOUT) || 5000,
  featureFlags: {
    enableNewCheckout: import.meta.env.VITE_ENABLE_NEW_CHECKOUT === 'true',
    useMockData: import.meta.env.VITE_USE_MOCK_DATA === 'true',
  },
}
