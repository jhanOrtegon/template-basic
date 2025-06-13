import { AuthGuard } from './guards/AuthGuard'
import { RoleGuard } from './guards/RoleGuard'
import type { RouteConfig } from './types/router.types'

import AdminPage from '@/presentation/pages/AdminPage'
import DashboardPage from '@/presentation/pages/DashboardPage'
import HomePage from '@/presentation/pages/HomePage'
import LoginPage from '@/presentation/pages/LoginPage'

export const appRoutes: RouteConfig[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      {
        path: 'admin',
        element: <RoleGuard allowedRoles={['admin']} />,
        children: [{ path: '', element: <AdminPage /> }],
      },
    ],
  },
]
