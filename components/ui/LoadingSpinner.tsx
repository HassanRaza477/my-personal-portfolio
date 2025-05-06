import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center"
    >
      <div className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
}