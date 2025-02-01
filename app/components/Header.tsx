import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const clientSide = (visible:boolean) => {
    'use client';
    return (
        <>
            <Link href="/" className="text-2xl font-bold text-gray-800">
                Sujal
            </Link>
        <div className="hidden md:flex space-x-8">
                <Link href={visible?`#about`:`https://www.sujalbhavsar.in/#about`} className="text-gray-600 hover:text-gray-900">
                    About
                </Link>
                <Link href={visible?`#experience`:`https://www.sujalbhavsar.in/#experience`} className="text-gray-600 hover:text-gray-900">
                    Experience
                </Link>
                <Link href={visible?`#projects`:`https://www.sujalbhavsar.in/#projects`} className="text-gray-600 hover:text-gray-900">
                    Projects
                </Link>
                <Link href={visible?`#contact`:`https://www.sujalbhavsar.in/#contact`} className="text-gray-600 hover:text-gray-900">
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

const Header = ({visible}:{visible:boolean}) => {
    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center lg:px-20">
            {clientSide(visible)}
        </nav>
    );
};

export default Header;
