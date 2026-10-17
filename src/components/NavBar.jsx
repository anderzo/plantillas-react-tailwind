import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="text-xl font-bold tracking-wider bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              ANDZ  </Link>
          </div>

          {/* Enlaces de escritorio menu Responsivo */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-zinc-300 hover:text-yellow-400 transition-colors font-medium text-sm">
              Inicio </Link>
            <Link 
              to="/proyectos" 
              className="text-zinc-300 hover:text-yellow-400 transition-colors font-medium text-sm">
              Productos </Link>
            <Link 
              to="/contacto" 
              className="text-zinc-300 hover:text-yellow-400 transition-colors font-medium text-sm">
              Contacto </Link>
            
            {/* Botón de Login */}
            <Link 
              to='/LoginPage' 
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95 shadow-md shadow-yellow-500/10">
              Iniciar Sesión </Link>
          </div>

          {/* Botón de Menú Hamburguesa (Móvil) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-zinc-400 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Abrir menú" >
              {/* Icono dinámico según el estado del menú */}
              
              {isOpen ? (
                // Icono 'X' 
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icono Hamburguesa (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all"
          > Inicio </Link>
          <Link
            to="/proyectos"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all">
            Productos </Link>
          <Link
            to="/contacto"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all">
            Contacto </Link>
          <Link
            to="/LoginPage"
            onClick={closeMenu}
            className="block w-full text-center mt-4 bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2.5 rounded-xl font-bold transition-all shadow-md">
            Iniciar Sesión </Link>
        </div>
      )}
    </nav>
  );
}