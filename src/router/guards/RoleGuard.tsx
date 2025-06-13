import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

interface RoleGuardProps {
  allowedRoles: string[]
}

/**
 * Guardia de ruta por roles: solo usuarios con roles permitidos acceden.
 */
export const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles }) => {
  const location = useLocation()
  // Obtener roles del usuario (por ejemplo desde localStorage o contexto)
  const rolesJson = localStorage.getItem('userRoles')
  const userRoles: string[] = rolesJson ? JSON.parse(rolesJson) : []

  const hasRole = userRoles.some((role) => allowedRoles.includes(role))
  if (!hasRole) {
    // Redirige a página de acceso denegado o login
    return <Navigate to="/unauthorized" state={{ from: location }} replace />
  }

  // Si tiene rol permitido, renderiza rutas hijas
  return <Outlet />
}
