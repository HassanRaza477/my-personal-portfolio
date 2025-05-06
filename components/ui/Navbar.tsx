'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeToggle from './Theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="text-xl sm:text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Hasan Raza
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 space-y-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}