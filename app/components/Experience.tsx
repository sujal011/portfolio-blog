"use client";
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Generative AI Intern',
    company: 'Flaunch',
    location: 'Remote',
    period: 'Sep/24 - Nov/24',
    description: [
      `Designed and developed an AI-powered whiteboard using Llama Multimodal, enabling teachers and students to seamlessly teach, take notes, and solve graphical physics and math problems.`,
      `Built mini AI applications, including a fine-tuned medical disease chatbot, quiz generator chat-with-PDF tool, and resume matcher, enhancing usability and domain specific accuracy.`,
      `Gained hands-on expertise in integrating and fine-tuning Large Language Models (LLMs), developing Retrieval-Augmented Generation (RAG) systems with vector databases,prompt engineering, and creating multimodal AI solutions with advanced embeddings.`,
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 group"
            >
              {index !== experiences.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-3 top-0 w-0.5 bg-gray-200 group-hover:bg-blue-500 transition-colors"
                />
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-gray-200 bg-white group-hover:border-blue-500 transition-colors"
              />
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="font-medium">{exp.company}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc">
                    {exp.description.map((p, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                      >
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;