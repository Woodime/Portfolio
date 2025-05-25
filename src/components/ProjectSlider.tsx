'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

const ProjectSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const mouseDownAt = useRef(0);
  const prevPercentage = useRef(0);
  const percentage = useRef(0);
  
  
  
  function handleMouseMove(e: MouseEvent) {
    const mouseDelta = e.clientX - mouseDownAt.current,
      maxDelta = window.innerWidth / 2;

    const realtivePercentage = (mouseDelta / maxDelta) * 100;
    const nextPercentageUnrestrained = prevPercentage.current + realtivePercentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnrestrained, 0), -100);

      percentage.current = nextPercentage;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate(${percentage.current}%, -50%)`;

        for (const image of trackRef.current.getElementsByClassName("slider-image")) {
          const img = image as HTMLImageElement;  
          img.style.objectPosition = `${nextPercentage+ 100}% 50%`;
        };
      };

      
      console.log(`mouseDownAt: ${mouseDownAt.current}, prevPercentage:${prevPercentage.current}, percentage:${percentage.current}`)
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    mouseDownAt.current = e.clientX;
    window.addEventListener('mousemove', handleMouseMove);
  }
  

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement>) {
    prevPercentage.current = percentage.current;
    window.removeEventListener('mousemove', handleMouseMove);
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <h2 className="text-4xl font-bold">Projects Section</h2>
      <div className='h-full w-full relative' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >
        <div className="w-max" id='image-track' ref={trackRef} >
          <Image className="slider-image" src="/europeana-PT73G3sQpzc-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
          <Image className="slider-image" src="/lala-azizli-nUAYXkRuvXE-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
          <Image className="slider-image" src="/leo_visions-QyXBQcv7C78-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
          <Image className="slider-image" src="/lukas-hadrich-wCLCK9LDDjI-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
          <Image className="slider-image" src="/marsumilae-e9kPHCJCHM8-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
          <Image className="slider-image" src="/philip-oroni-cUVqZyCJgfI-unsplash.jpg" alt="picture" width={2760} height={2028} draggable="false" />
        </div>
      </div>
      
    </div>
  );
};

export default ProjectSlider;