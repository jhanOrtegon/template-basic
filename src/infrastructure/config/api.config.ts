export const ApiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: Number(import.meta.env.VITE_HTTP_TIMEOUT) || 5000,
}
