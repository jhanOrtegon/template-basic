import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { appRoutes } from './routes'

const renderRoutes = (routes: typeof appRoutes) =>
  routes.map(({ path, element, children }, idx) => (
    <Route key={idx} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ))

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>{renderRoutes(appRoutes)}</Routes>
  </BrowserRouter>
)

export default AppRouter
