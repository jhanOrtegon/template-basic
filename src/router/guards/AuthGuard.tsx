import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

/**
 * Guardia de ruta: solo usuarios autenticados pueden acceder.
 */
export const AuthGuard: React.FC = () => {
  const location = useLocation()
  const token = localStorage.getItem('authToken')

  if (!token) {
    // Redirige al login y conserva la ruta original
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Si está autenticado, renderiza rutas hijas
  return <Outlet />
}
