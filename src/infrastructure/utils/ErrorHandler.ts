import { type ApiResponse } from './ApiResponse'

/**
 * Función global para capturar y formatear errores.
 * @param error Objeto de error capturado.
 * @returns ApiResponse con información del error.
 */
export function ErrorHandler(error: unknown): ApiResponse<null> {
  const status = 500
  let message = 'Error interno del servidor'

  if (error instanceof Error) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  }

  // Puedes extender según códigos de dominio o AxiosError
  return { status, message, data: null }
}
