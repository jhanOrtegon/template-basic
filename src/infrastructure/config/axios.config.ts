import axios, { type AxiosInstance } from 'axios'

import { ApiConfig } from './api.config'
import { AuthInterceptor } from '../adapters/http/interceptors/AuthInterceptor'
import { ErrorInterceptor } from '../adapters/http/interceptors/ErrorInterceptor'

/**
 * Instancia de Axios preconfigurada para toda la aplicación.
 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: ApiConfig.baseURL,
  timeout: ApiConfig.timeout,
  headers: { 'Content-Type': 'application/json' },
})

// Aplicar interceptores
axiosInstance.interceptors.request.use(AuthInterceptor)
axiosInstance.interceptors.response.use((response) => response, ErrorInterceptor)
