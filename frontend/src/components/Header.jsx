// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-purple-800">🏠 HomeSphere</h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-700 font-medium">Home</a>
          <a href="#" className="hover:text-purple-700 font-medium">Explore</a>
          <a href="#" className="hover:text-purple-700 font-medium">Login</a>
          <a href="#" className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition">Post Property</a>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">Explore</a>
          <a href="#" className="block py-2">Login</a>
          <a href="#" className="block py-2 bg-purple-700 text-white rounded-md text-center">Post Property</a>
        </div>
      )}
    </header>
  );
};

export default Header;
