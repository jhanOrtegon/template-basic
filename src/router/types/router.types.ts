import type { ReactNode } from 'react'

/**
 * Configuración de una ruta en la aplicación.
 */
export interface RouteConfig {
  /** Ruta URL */
  path: string
  /** Componente a renderizar */
  element: ReactNode
  /** Rutas hijas (anidadas) */
  children?: RouteConfig[]
  /** Guardias a aplicar (por defecto AuthGuard) */
  guards?: GuardType[]
  /** Roles permitidos, en caso de usar RoleGuard */
  allowedRoles?: string[]
}

/**
 * Tipos de guardias disponibles para proteger rutas.
 */
export type GuardType = 'auth' | 'role'

/**
 * Props de configuración para RoleGuard.
 */
export interface RoleGuardConfig {
  allowedRoles: string[]
}

/**
 * Mapeo de guardias a componentes.
 */
export interface GuardComponents {
  auth: ReactNode
  role: (config: RoleGuardConfig) => ReactNode
}
