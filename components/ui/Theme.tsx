'use client';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-800/30 dark:bg-white/10 hover:bg-gray-800/50 dark:hover:bg-white/20 transition-all duration-300 shadow-sm"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-200 dark:text-white" />
      )}
    </button>
  );
}