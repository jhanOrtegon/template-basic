export interface ApiResponse<T = unknown> {
  status: number // Código HTTP o interno
  message: string // Mensaje descriptivo
  data: T // Payload de datos
  meta?: Record<string, any> // Metadatos opcionales
}
