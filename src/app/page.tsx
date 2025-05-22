'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectSlider from '@/components/ProjectSlider';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BackgroundElements from '@/components/BackgroundElements';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Implement intersection observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {threshold: 0.6});
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <BackgroundElements />
      <Navigation activeSection={activeSection} />
      
      <div className="pl-24 md:pl-32 lg:pl-48 pr-4 md:pr-8">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="projects" className="min-h-screen">
          <ProjectSlider />
        </section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
      </div>
      
    </main>
  );
}