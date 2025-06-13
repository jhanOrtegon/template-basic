import axios, { type AxiosInstance, type AxiosRequestConfig, AxiosError } from 'axios'

import type { HttpClientInterface, RequestConfig } from './HttpClientInterface'

import { ApiConfig } from '@/infrastructure/config/api.config'

/**
 * Implementación de HttpClientInterface usando Axios.
 */
export class AxiosHttpClient implements HttpClientInterface {
  private _client: AxiosInstance

  constructor() {
    this._client = axios.create({
      baseURL: ApiConfig.baseURL,
      timeout: ApiConfig.timeout,
      headers: { 'Content-Type': 'application/json' },
    })
    this._client.interceptors.request.use(this._handleAuth)
    this._client.interceptors.response.use((response) => response, this._handleError)
  }

  private _handleAuth(config: AxiosRequestConfig): AxiosRequestConfig {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers = config.headers ?? {}
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }

  private _handleError(error: AxiosError): Promise<never> {
    // Manejo global de errores
    console.error('HTTP Error:', error.response?.status, error.message)
    return Promise.reject(error)
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const resp = await this._client.get<T>(url, {
      params: config?.params,
      headers: config?.headers,
    })
    return resp.data
  }

  async post<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    const resp = await this._client.post<T>(url, data, {
      params: config?.params,
      headers: config?.headers,
    })
    return resp.data
  }

  async put<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    const resp = await this._client.put<T>(url, data, {
      params: config?.params,
      headers: config?.headers,
    })
    return resp.data
  }

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    const resp = await this._client.delete<T>(url, {
      params: config?.params,
      headers: config?.headers,
    })
    return resp.data
  }
}
