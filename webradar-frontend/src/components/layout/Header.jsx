// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar estado del menú
  };

  return (
    <header className="relative border-b border-gray-300 w-full p-4 flex justify-between items-center z-10">
      <div className="flex items-center">
        <img
          src="/app/logo-ico.png"
          alt="AlphaNova Logo"
          className="h-10 w-auto pl-4"
        />
        <p className="text-blue-800 text-2xl font-bold">AlphaNova</p>
      </div>

      {/* Icono de hamburguesa para pantallas pequeñas */}
      <button 
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Menú de navegación */}
      <nav className={`absolute md:static top-16 right-0 bg-white shadow-lg md:shadow-none md:flex md:space-x-4 ${isMenuOpen ? 'flex flex-col' : 'hidden md:flex'}`}>
        <Link 
          to="/app/" 
          className="text-gray-800 font-bold px-4 py-2 transition-all duration-300 delay-100 hover:underline hover:underline-blue-500 hover:scale-105"
        >
          Página Principal
        </Link>
        <Link 
          to="/app/quienes-somos" 
          className="text-gray-800 font-bold px-4 py-2 transition-all duration-300 delay-100 hover:underline hover:underline-blue-500 hover:scale-105"
        >
          Quienes Somos
        </Link>
        {/* <Link to="/app/faq" className="text-gray-800 font-bold px-4 py-2 transition-all duration-300 delay-100 hover:underline hover:underline-blue-500 hover:scale-105">
          Preguntas Frecuentes
        </Link> */}
        <Link 
          to="/app/dashboard" 
          className="border border-gray-800 px-4 py-2 rounded-lg text-gray-800 font-bold hover:bg-gray-200 transition-all duration-300 delay-100 hover:scale-105"
        >
          Ir a la aplicación
        </Link>
      </nav>
    </header>
  );
}

export default Header;
