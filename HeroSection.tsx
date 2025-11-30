import React from 'react';
import { EditableText } from './cms/EditableText';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Hero Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(102,252,241,0.15)_0%,rgba(11,12,16,0)_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#66FCF1]/30 bg-[#66FCF1]/5 text-[#66FCF1] text-xs font-semibold uppercase tracking-wide mb-6 animate-pulse">
          <EditableText path="hero.badge" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          <EditableText path="hero.title_start" /> <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E] text-transparent bg-clip-text">
            <EditableText path="hero.title_highlight" />
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-[#C5C6C7]/80 mb-10">
          <EditableText path="hero.subtitle" />
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('join')}
            className="px-8 py-4 rounded-lg bg-[#66FCF1] text-[#0B0C10] font-bold text-lg hover:bg-[#45A29E] hover:text-white transition-all shadow-[0_0_20px_rgba(102,252,241,0.3)]"
          >
            <EditableText path="hero.cta_primary" />
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="px-8 py-4 rounded-lg border border-[#1F2833] bg-[#1F2833]/50 text-white font-medium hover:bg-[#1F2833] hover:border-[#66FCF1]/50 transition-all"
          >
            <EditableText path="hero.cta_secondary" />
          </button>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative max-w-4xl mx-auto animate-[float_6s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[#66FCF1]/20 blur-3xl rounded-full opacity-30"></div>
          <div className="relative bg-[#1F2833]/60 backdrop-blur-md border border-[#66FCF1]/20 rounded-2xl p-8 md:p-12 hover:border-[#66FCF1]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(102,252,241,0.2)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: You */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#C5C6C7] rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[#0B0C10]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <EditableText tag="p" path="hero.card_you" className="font-bold text-white" />
                <EditableText tag="p" path="hero.card_real_email" className="text-xs text-gray-400" />
              </div>
              
              {/* Middle: Bound */}
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent relative">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#66FCF1] rounded-full shadow-[0_0_10px_#66FCF1]"></div>
                </div>
                <div className="mt-4 px-4 py-2 bg-[#0B0C10] border border-[#66FCF1] rounded text-[#66FCF1] font-mono text-sm shadow-[0_0_15px_rgba(102,252,241,0.15)]">
                  <EditableText path="hero.card_relay" />
                </div>
                <EditableText tag="p" path="hero.card_relay_sub" className="text-xs text-[#66FCF1]/70 mt-2" />
              </div>

              {/* Right: Website */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#1F2833] border border-white/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🌐</span>
                </div>
                <EditableText tag="p" path="hero.card_web" className="font-bold text-white" />
                <EditableText tag="p" path="hero.card_web_sub" className="text-xs text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
