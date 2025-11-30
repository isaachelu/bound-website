import React, { useState } from 'react';
import { Persona } from '../types';
import { EditableText } from './cms/EditableText';

const personas: Persona[] = [
  {
    alias: "hugh.man.being@mask.bound.io",
    role: "The 'I Just Want the PDF' Researcher",
    log: "Identity deployed to download one whitepaper. Self-destruct sequence ready for when they start sending 'Webinar' invites."
  },
  {
    alias: "guy.incognito.99@mask.bound.io",
    role: "The 30-Day Free Trial Tourist",
    log: "Successfully signed up for streaming service. Credit card is virtual. Email is fake. Risk is zero. Enjoy your movie."
  },
  {
    alias: "not.a.robot.beep.boop@mask.bound.io",
    role: "The Coupon Hunter",
    log: "Identity created to save 15% on socks. Absorbing 400 future spam emails about 'Summer Sales' so your real inbox doesn't have to."
  },
  {
    alias: "definitely.real.person@mask.bound.io",
    role: "The 'Sketchy Wi-Fi' Warrior",
    log: "Connected to 'Airport_Free_WiFi'. Shielding main inbox from the inevitable marketing onslaught. We have containment."
  },
  {
    alias: "anon.ymous.prime@mask.bound.io",
    role: "The Comment Section Lurker",
    log: "Posted a controversial opinion on a tech blog. Identity masked. Let the flame wars begin. You are safe."
  }
];

export const TestEngineSection: React.FC = () => {
  const [personaIndex, setPersonaIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGenerate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setPersonaIndex((prev) => (prev + 1) % personas.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentPersona = personas[personaIndex];

  return (
    <section className="py-24 bg-[#0B0C10] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#45A29E]/30 bg-[#45A29E]/5 text-[#45A29E] text-xs font-semibold uppercase tracking-wide mb-6">
          <EditableText path="demo.badge" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6"><EditableText path="demo.title" /></h2>
        <p className="max-w-xl mx-auto text-lg text-[#C5C6C7]/80 mb-10">
          <EditableText path="demo.subtitle" />
        </p>
        
        <div className="relative">
          {/* The Generator Card */}
          <div className="max-w-md mx-auto bg-[#1F2833] border border-[#66FCF1]/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(102,252,241,0.05)]">
            
            {/* Alias Display */}
            <div className="mb-6">
               <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Generated Alias</p>
               <div className={`bg-[#0B0C10] border border-[#66FCF1]/30 p-4 rounded-lg font-mono text-[#66FCF1] break-all transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  {currentPersona.alias}
               </div>
            </div>

            {/* Persona Details */}
            <div className={`text-left space-y-4 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Disguise Persona:</span>
                 <p className="text-white font-bold text-lg">{currentPersona.role}</p>
              </div>
              <div>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">System Log:</span>
                 <p className="text-[#45A29E] text-sm font-mono mt-1">
                   &gt; {currentPersona.log}
                 </p>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={handleGenerate}
              className="mt-8 w-full py-3 rounded-lg bg-[#66FCF1] text-[#0B0C10] font-bold hover:bg-[#45A29E] hover:text-white transition-all shadow-[0_0_15px_rgba(102,252,241,0.2)] active:scale-95"
            >
              <EditableText path="demo.button" />
            </button>
          </div>
          
          {/* Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-[#66FCF1]/5 blur-3xl rounded-full -z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
