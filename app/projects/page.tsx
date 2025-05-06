'use client'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export default function ProjectsSection() {
  const [,setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <main className="container mx-auto px-4 pt-24">
        {/* Projects Section */}
        <section className="py-20" id="projects">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
                  {project.title}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.title}`}
                  />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-900 dark:text-white absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js and Node.js",
    image: "/images/ecommerce.png",
    link: "https://hackthon-e-commerce-5k3v.vercel.app/",
    tech: ["Next.js", "TypeScript", "Node.js", "Sanity", "Tailwind CSS"]
  },
  {
    title: "vehical reporting system",
    description: "Full-stack vehicle reporting system with real-time updates",
    image: "/images/vin.png",
    link: "https://vehical-report-w1le.vercel.app/",
    tech: ["HTML", "CSS", "TYPESCRIPT","sanity", "API", "Node.js","Next.js","React.js"]
  },
  {
    title: "Blog Website",
    description: "Modern blog website with content management",
    image: "/images/blog.png",
    link: "https://new-milestone-3-2kpt.vercel.app/",
    tech: ["HTML", "CSS","Next.js","TypeScript","Tailwind CSS"]
   
  },
  {
    title: "Restaurant Website",
    description: "Modern restaurant website with menu and reservation system",

    image: "/images/food.png",
    link: "https://gn-foods-6a62.vercel.app/",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"]
  },
  {
    title: "Clinic Website",
    description: "Modern clinic website with appointment booking",
    image: "/images/clinic.png",
    link: "https://health-care-website-7h41.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Password Strenth Meter",
    description: "Password strength meter with real-time feedback",
    image: "/images/meter.png",
    link: "https://unit-converter-wsiqyyuxr6xzeovxsen5tl.streamlit.app/",
    tech: ["Python", "Streamlit",]
  },
  {
    title: "unit converter",
    description: "Unit converter with real-time calculations", 
    image: "/images/unit.png",
    link: "https://unit-converter-mwohppuwe8xvd4vm5jc8ej.streamlit.app/",
    tech: ["Python", "Streamlit",]
  },
  {
    title: "Resume Builder",
    description: "Create and download professional resumes",
    image: "/images/resume.png",
    link: "https://new-milestone.vercel.app/",
    tech: ["HTML", "CSS", "TypeScript",]
  },
];