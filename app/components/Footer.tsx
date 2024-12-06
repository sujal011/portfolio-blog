
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Sujal Bhavsar
            </h3>
            <p className="text-gray-400 text-center">
              Building digital experiences
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/sujal011"
              className="hover:text-blue-400 transition-colors"
              target='_blank'
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sujal-bhavsar-01b795320"
              className="hover:text-blue-400 transition-colors"
              target='_blank'
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sujalbhavsar011@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {2024} Sujal Bhavsar. All rights reserved.</p>
        </div>
      </div>
    
  );
};

export default Footer;
