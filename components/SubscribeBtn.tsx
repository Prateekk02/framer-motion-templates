'use client'
import React from 'react';
import { motion } from 'framer-motion';

export const Subscribe = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex items-center justify-center"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(6,182,212,0.2) 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat',
      }}
    >
      <motion.button 
        whileHover={{
            rotateX: 25,
            rotateY: 10,
            boxShadow:"0px 20px 50px rgba(8,112,184,0.7)",    
            y:-5       
        }}
        whileTap={{
            y: 0 
        }}
        style={{
            translateZ:100
        }}
        transition={{
            duration: 0.3,
            ease:"easeInOut"
        }}
        className="relative group hover:cursor-pointer text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
            <span className='group-hover:text-cyan-500 transition-color duration-300'>Subscribe</span>
            <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto" />
            <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-md" />
      </motion.button>
    </div>
  );
};
