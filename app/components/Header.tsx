import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const clientSide = () => {
    'use client';
    return (
        <>
            <Link href="/" className="text-2xl font-bold text-gray-800">
                Sujal
            </Link>

            <div className="hidden md:flex space-x-8">
                <Link href="#about" className="text-gray-600 hover:text-gray-900">
                    About
                </Link>
                <Link href="#experience" className="text-gray-600 hover:text-gray-900">
                    Experience
                </Link>
                <Link href="#projects" className="text-gray-600 hover:text-gray-900">
                    Projects
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                </Link>
            </div>

            <div className="flex space-x-4 flex-row">
                <a
                    href="https://github.com/sujal011"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/sujal-bhavsar-01b795320/"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:your.email@example.com"
                    className="text-gray-600 hover:text-gray-900"
                >
                    <Mail size={20} />
                </a>
            </div>
        </>
    );
};

const Header = () => {
    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center lg:px-20">
            {clientSide()}
        </nav>
    );
};

export default Header;
