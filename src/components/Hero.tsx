'use client';

import React from 'react';
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-tight">
        Hi, I'm <span className='text-(--secondary)'>Alex</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mt-2 mb-4 text-primary"> 
        Computer Science & Design Student
      </h2>
      <p className="text-lg max-w-md leading-relaxed ">
        I'm passionate about creating intuitive, visually engaging web experiences
      </p>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center hero_button_group text-(--secondary)">
        <button 
          className="mt-8 px-6 py-3 transition-all duration-300" 
          onClick={() => {
            scroller.scrollTo('projects', {
            duration: 800,
            delay: 0,
            smooth: true,
          });
        }}>
          View My Projects
        </button>
        <div className="arrow-animation">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 12L12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default Hero;