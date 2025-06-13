import { type AxiosRequestConfig } from 'axios'

/**
 * Interceptor para agregar token de autenticación a las solicitudes.
 */
export function AuthInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers = config.headers ?? {}
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}
