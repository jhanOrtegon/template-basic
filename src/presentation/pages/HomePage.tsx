import React from 'react'
import { Link } from 'react-router'

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Página de Inicio</h1>
      <p>Bienvenido a la aplicación. Navega usando el menú.</p>
      <nav className="mt-4">
        <Link to="/dashboard" className="text-blue-500 hover:underline">
          Ir al Dashboard
        </Link>
      </nav>
    </div>
  )
}

export default HomePage
