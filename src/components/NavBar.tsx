import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Mi Portafolio</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-blue-500 transition-colors">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            Sobre Mí
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contacto
          </a>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;