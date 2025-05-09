'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '@/components/ui/Theme';
import SocialLinks from '@/components/ui/SocialLinks';
import Image from 'next/image';
import HasanImage from '@/public/images/client1.webp';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-purple-600 dark:text-purple-400">Hasan Raza</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-300">
              I am a passionate and results driven Frontend Developer Digital Marketer and Python Developer with a strong foundation in web technologies and data driven marketing. I specialize in building modern responsive and user friendly web applications using technologies like Next.js React Tailwind CSS and TypeScript.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-4 flex-wrap">
              <SocialLinks />
              <ThemeToggle />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-100 dark:bg-purple-900 rounded-full overflow-hidden shadow-xl">
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
        <section className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <tech.icon className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{tech.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Passions Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
            >
              <HeartIcon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Passions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Open source contributor, Tech blogger, and Mentor at coding bootcamps.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

const technologies = [
  { name: 'React/Next.js', icon: CodeBracketIcon, proficiency: 90 },
  { name: 'HTML/CSS', icon: CodeBracketIcon, proficiency: 95 },
  { name: 'JavaScript', icon: CodeBracketIcon, proficiency: 85 },
  { name: 'Python', icon: CodeBracketIcon, proficiency: 80 },
  { name: 'Git/GitHub', icon: CodeBracketIcon, proficiency: 90 },
  { name: 'Sanity', icon: CodeBracketIcon, proficiency: 80 },
  { name: 'REST APIs', icon: CodeBracketIcon, proficiency: 80 },
  { name: 'TypeScript', icon: CodeBracketIcon, proficiency: 85 },
  { name: 'Tailwind CSS', icon: CodeBracketIcon, proficiency: 95 },
  { name: 'Node.js', icon: CodeBracketIcon, proficiency: 75 },
];
