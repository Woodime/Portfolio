'use client';

import React from 'react';
import { Link } from 'react-scroll';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav className="fixed top-8 left-8 z-50">
      <ul className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              duration={800}
              offset={0}
              className={`cursor-pointer relative pl-6 transition-all duration-300 ${
                activeSection === item.id
                  ? 'font-bold text-xl'
                  : 'font-normal text-lg hover:font-bold'
              }`}
            >
              {/* Black dot indicator for active section */}
              {activeSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-(--primary) rounded-full" />
              )}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;