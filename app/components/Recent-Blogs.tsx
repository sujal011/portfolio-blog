"use client";

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const blogs = [
    {
        title: 'How To Run DeepSeek R1 Locally for Free in Just 3 Minutes',
        description: 'Learn how to set up DeepSeek-R1 on your system using Ollama and run it locally for free in just 3 minutes.',
        image: '/blog-images/run-deepseek-r1-locally-for-free-in-just-3-minutes.png',
        date: 'January 2, 2025',
        href: '/blog/run-deepseek-r1-locally-for-free-in-just-3-minutes'
    },
    {
        title: 'Understanding Dockerfile and FastAPI with a Simple Example',
        description: 'A comprehensive guide to Dockerizing a FastAPI application with step-by-step instructions.',
        image: '/blog-images/dockerize-fastapi.png',
        date: 'January 28, 2025',
        href: '/blog/How-to-dockerize-fast-api-python-code'
    },
    {
        title: 'Welcome to My Blog! | Sujal Bhavsar',
        description: 'An introduction to my journey, passions, and the exciting projects I’ve been working on.',
        image: '/blog-images/welcome-to-blog.png',
        date: 'December 10, 2024',
        href: '/blog/welcome-to-my-blog'
    }

];

const RecentBlogs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const blogVariants = {
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
        <section id="recent-blogs" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-gray-800 mb-16"
                >
                    Recent Blogs
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-[7%] md:px-[3%] px-[5%]"
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            variants={blogVariants}
                            whileHover={{ y: -10 }}
                            className="card-gradient rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={blog.href} key={index}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={540}
                                        height={480}
                                        className="w-full min-sm:h-48 object-cover"
                                    />
                                </Link>
                            </motion.div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    <Link href={blog.href} key={index}>
                                        {blog.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={blog.href}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center text-gray-600 hover:text-gray-900"
                                    >
                                        <ExternalLink size={20} className="mr-2" />
                                        Read More
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

export default RecentBlogs;