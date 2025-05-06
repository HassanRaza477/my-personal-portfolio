'use client';
import { motion } from 'framer-motion';
import SocialLinks from '@/components/ui/SocialLinks';
import ThemeToggle from '@/components/ui/Theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold text-purple-400 mb-2">Hasan Raza</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Building digital experiences with passion
            </p>
          </motion.div>

          {/* Social Links & Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <SocialLinks />
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Hasan Raza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}