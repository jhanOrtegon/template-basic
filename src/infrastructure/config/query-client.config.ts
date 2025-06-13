// src/infrastructure/config/query-client.config.ts
import { QueryClient } from '@tanstack/react-query'

import { Environment } from './environment'

/**
 * Configuración de React Query para la aplicación.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: Environment.production ? 0 : 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
    mutations: {
      retry: false,
    },
  },
})

export { queryClient }
