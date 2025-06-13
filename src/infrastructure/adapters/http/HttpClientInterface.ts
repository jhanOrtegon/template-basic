export interface RequestConfig {
  headers?: Record<string, string>
  params?: Record<string, string | number>
  timeout?: number
}

export interface HttpClientInterface {
  get<T>(url: string, config?: RequestConfig): Promise<T>
  post<T>(url: string, data?: any, config?: RequestConfig): Promise<T>
  put<T>(url: string, data?: any, config?: RequestConfig): Promise<T>
  delete<T>(url: string, config?: RequestConfig): Promise<T>
}
