import React from 'react';
import { NavButton } from './ui/NavButton';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0B0C10]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Logo Icon */}
            <svg className="w-8 h-8 text-[#66FCF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span className="font-bold text-xl tracking-tight text-white">Bound</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavButton onClick={() => scrollToSection('problem')}>The Problem</NavButton>
            <NavButton onClick={() => scrollToSection('how-it-works')}>How it Works</NavButton>
            <NavButton onClick={() => scrollToSection('features')}>Features</NavButton>
            <NavButton onClick={() => scrollToSection('pricing')}>Pricing</NavButton>
          </div>
          <div>
            <button 
              onClick={() => scrollToSection('join')}
              className="px-5 py-2.5 rounded-full bg-[#66FCF1] text-[#0B0C10] font-bold text-sm hover:bg-[#45A29E] hover:text-white transition-all shadow-lg shadow-[#66FCF1]/20"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};