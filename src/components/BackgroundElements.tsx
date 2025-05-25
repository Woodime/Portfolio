'use client';

import React from 'react';
import Image from 'next/image'

const BackgroundElements = () => {
  return (
    <div className="absolute flex justify-center items-center pl-270">
      <Image 
        src="/BackgroundCircleHero.png"
        width={800}
        height={800}
        alt="Background Circle"
      />
    </div>
  );
};

export default BackgroundElements;