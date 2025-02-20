"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import {ChangeEvent, FormEvent, useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

  // const myform = document.getElementById('myform') as HTMLFormElement;
  

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={containerVariants} className="space-y-8">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'sujalbhavsar011@gmail.com'
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 9998354711'
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Ahmedabad, India'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-gradient mt-1"
                >
                  <item.icon size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
          id='myform'
            variants={containerVariants}
            className="space-y-6 card-gradient px-10 rounded-lg pt-0 mt-0"
            action="https://usebasin.com/f/bf05b3d1b9e6"
            method="post"
            // onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
          >
            {[
              { name:'from_name',id: 'name', type: 'text', label: 'Name',value:formData.name },
              { name:'from_email',id: 'email', type: 'email', label: 'Email',value:formData.email }
            ].map((field) => (
              <motion.div key={field.id} variants={itemVariants}>
                <label htmlFor={field.id} className="block text-gray-700 mb-2">
                  {field.label}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type={field.type}
                  name={field.id}
                  id={field.id}
                  value={field.value}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-black"
                />
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                id="message"
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-black"
              ></motion.textarea>
            </motion.div>

            <motion.button
            // onClick={handleSubmit}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;