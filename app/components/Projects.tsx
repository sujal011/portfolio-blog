"use client";

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Powered Whiteboard',
    description:
      'A full-featured whiteboard powered by AI for teachers and students.',
    image: '/ai-whiteboard-project.png',
    technologies: ['React', 'Python', 'FastAPI', 'Langchain', 'Llama Multimodal'],
    github: 'https://github.com/sujal011/ai-whiteboard-frontend',
    live: 'https://ai-whiteboard.vercel.app',
  },
  {
    title: 'Live Paste',
    description:
      'A websockets based live clipboard sharing platform',
    image: '/livepaste.png',
    technologies: ['React', 'Java', 'Spring Boot', 'WebSockets'],
    github: 'https://github.com/sujal011/livepaste-backend',
    live: 'https://livepaste.netlify.app/sujal?edit=true',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-[7%] md:px-[3%] px-[5%]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="card-gradient rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={540}
                  height={480}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-600 rounded-full text-sm border border-gray-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;