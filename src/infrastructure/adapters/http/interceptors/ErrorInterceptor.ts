import { AxiosError } from 'axios'

/**
 * Interceptor para manejo global de respuestas con error.
 */
export function ErrorInterceptor(error: AxiosError): Promise<never> {
  if (error.response) {
    const status = error.response.status
    const data = error.response.data
    console.error(`HTTP Error ${status}:`, data)
    // Aquí podrías lanzar errores customizados según el status
  } else if (error.request) {
    console.error('No response received:', error.request)
  } else {
    console.error('Error setting up request:', error.message)
  }
  return Promise.reject(error)
}
