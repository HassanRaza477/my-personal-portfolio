'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlobeAltIcon, EnvelopeIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import Navbar from '@/components/ui/Navbar';
import SocialLinks from '@/components/ui/SocialLinks';
import Project from './projects/page';
import ScrollProgress from '@/components/ui/ScrollProgress';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';
import ContactForm from './contact/page';
import AboutPage from './about/page';
import EducationPage from './education/page';
import HasanImage from '@/public/images/hasan.jpg';
import Footer from '@/components/ui/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {isLoading && <LoadingSpinner />}
      <ScrollProgress />
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-32 mt-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-1/2 mb-12 md:mb-0"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I&apos;m <span className="text-purple-600 dark:text-purple-400">Hasan Raza</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Frontend Developer & Digital Marketer & Python Developer
        </p>
        <SocialLinks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl image-container">
          <Image
            src={HasanImage}
            alt="Hasan Raza"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>

        {/* Skills Section */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <skill.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Let&apos;s Build Something Amazing
            </h2>
            <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center mx-auto">
              <EnvelopeIcon className="w-6 h-6 mr-2" />
              Get in Touch
            </button>
          </motion.div>
        </section>
      </main>
      <AboutPage />
      <Project />
      <EducationPage />
      <ContactForm />
      <Footer />
    </div>
  );
}

const skills = [
  { name: 'Web Development', icon: CodeBracketSquareIcon },
  { name: 'Python Developer', icon: CodeBracketSquareIcon },
  { name: 'Digital Marketer', icon: GlobeAltIcon },
  { name: 'UI/UX Design', icon: CodeBracketSquareIcon },
  { name: 'Ms Office', icon: CodeBracketSquareIcon },
];