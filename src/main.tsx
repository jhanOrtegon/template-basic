import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './presentation/styles/globals.css'
import AppRouter from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
