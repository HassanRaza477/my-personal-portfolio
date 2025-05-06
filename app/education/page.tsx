'use client';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, TrophyIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        {/* Education Hero Section */}
        <section className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AcademicCapIcon className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600 dark:text-purple-400 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              My Educational Journey
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              From classroom learning to practical implementations - Here's my academic evolution
            </p>
          </motion.div>
        </section>

        {/* Education Timeline */}
        <section className="py-8 sm:py-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-0.5 sm:w-1 bg-gray-200 dark:bg-gray-700 h-full transform -translate-x-1/2" />

            {educationTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`mb-8 sm:mb-12 flex flex-col sm:flex-${index % 2 === 0 ? 'row' : 'row-reverse'} items-center`}
              >
                <div className="w-full sm:w-5/12 p-2 sm:p-4">
                  <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">
                      {item.institution}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-600 dark:text-purple-400 mb-2">{item.degree}</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>

                <div className="w-full sm:w-2/12 flex justify-center my-4 sm:my-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 dark:bg-purple-400 rounded-full flex items-center justify-center">
                    {index % 2 === 0 ? (
                      <BookOpenIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    )}
                  </div>
                </div>

                <div className="hidden sm:block sm:w-5/12" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-10 sm:py-14 bg-white dark:bg-gray-900 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Courses Completed</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {courses.map((course, idx) => (
                <li key={idx} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">{course.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{course.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{course.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}

const educationTimeline = [
  {
    year: "2023-2025",
    institution: "Degrree College",
    degree: "Inter in Computer Science",
    description: "Currently pursuing a degree in Computer Science",
    icon: TrophyIcon
   
  },
  {
    year: "2021-2023",
    institution: "Govt. High School",
    degree: "Matriculation",
    description: "Completed Matriculation with a focus on Science subjects",
    icon: AcademicCapIcon
   
  },
];

const courses = [
  {
    title: "Python",
    institution: "governer house",
    description: "An introduction to Python fundamentals and data handling."
  },
  {
    title: "Digital Marketing Specialization",
    institution: "Bano Qabil",
    description: "SEO, social media, and analytics strategies."
  },
  {
    title: "Frontend Developer Bootcamp",
    institution: "Governer House",
    description: "HTML, CSS, JavaScript, React, TypeScript, Next.js and modern UI/UX practices."
  },
  {
    title: "Artifical Intelligence",
    institution: "Governer House",
    description: "This course is currently ongoing"
  },
  {
    title: "CIT",
    institution: "ICS",
    description: "A comprehensive course covering computer fundamentals, ms-office, and programming basics."
  }
];
