'use client';

import { motion } from 'motion/react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import SkillCard from './Card-skill';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    title: 'Languages & Tools',
    icon: Code2,
    skills: ['JavaScript', 'Python', 'Java', 'Git', 'Linux'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;