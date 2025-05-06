'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    { name: 'GitHub', icon: FaGithub, url: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
    { name: 'Twitter', icon: FaTwitter, url: '#' },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <social.icon className="w-6 h-6 text-white" />
        </motion.a>
      ))}
    </div>
  );
}