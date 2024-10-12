import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center md:justify-center">
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex items-center space-y-6 md:space-y-0 md:space-x-8 text-gray-800 text-lg font-medium 
          ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link
              to="/home"
              className="relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/cooker"
              className="relative group"
            >
              Pressure Cooker
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/khadhi"
              className="relative group"
            >
              Triply Cookware
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/serveware"
              className="relative group"
            >
              ServeWare
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/track"
              className="relative group"
            >
              Track Order
              <span className="absolute bottom-0 left-0 w-3 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
