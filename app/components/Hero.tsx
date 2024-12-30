"use client";

import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}
interface Mouse {
  x: number;
  y: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const homeSection = useRef<HTMLElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const arrayColors = ['#F4EDD3', '#A5BFCC', '#7E99A3', '#4C585B', '#2E5077']

  const draw = (dots:Dot[],ctx:CanvasRenderingContext2D) => {
    dots.forEach((dot:Dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  const draLines = (dots: Dot[], mouse: Mouse, ctx: CanvasRenderingContext2D) => {
    dots.forEach((dot: Dot) => {
      const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
      if (distance < 300) {
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  };
  

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      canvasCtxRef.current = canvas.getContext('2d');
      const ctx = canvasCtxRef.current;

      const dots:Dot[]=[];
      for (let i = 0; i < 50; i++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3+5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
        })
        
      }
      console.log(dots);
      draw(dots,ctx as CanvasRenderingContext2D);

      if(homeSection.current){
        const homeSectionRef = homeSection.current;
        homeSectionRef.addEventListener('mousemove', (e: MouseEvent) => {
          ctx?.clearRect(0,0,canvas.width,canvas.height);
          draw(dots,ctx as CanvasRenderingContext2D);
          const mouse = {
            x: e.pageX - homeSectionRef.getBoundingClientRect().left,
            y: e.pageY - homeSectionRef.getBoundingClientRect().top,
          }
          draLines(dots, mouse, ctx as CanvasRenderingContext2D);
        });
        homeSectionRef.addEventListener('mouseout',()=>{
          ctx?.clearRect(0,0,canvas.width,canvas.height);
          draw(dots,ctx as CanvasRenderingContext2D);
        })
      }
    }
    
  }, []);
  return (
    <section
      id="home"
      ref={homeSection}
      className="min-h-screen flex items-center justify-center pt-16 relative"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
        >
          Hi, I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blue-600 block"
          >
            Sujal Bhavsar
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          A full stack developer from India passionate about crafting solutions and building the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center space-x-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            View Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    <canvas ref={canvasRef} className='absolute bg-transparent top-0 left-0 w-full h-full pointer-events-none hidden lg:block'></canvas>
    
    </section>
  );
};

export default Hero;