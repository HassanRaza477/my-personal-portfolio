'use client';

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = ['About', 'Education', 'Projects', 'Contact'];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2c2f45] to-[#2f4ead] px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Name / Logo */}
        <h1 className="text-xl font-semibold text-purple-300 tracking-wide">
          Hasan Raza
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-200 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-300 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Theme + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-yellow-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm text-gray-200 font-medium px-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-300 transition"
              onClick={() => setMenuOpen(false)} // auto-close on click
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
