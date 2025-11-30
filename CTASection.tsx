import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { EditableText } from './cms/EditableText';

export const CTASection: React.FC = () => {
  return (
    <section id="join" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <GlassCard className="p-12 rounded-3xl border border-[#66FCF1]/30 shadow-[0_0_50px_rgba(102,252,241,0.1)]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><EditableText path="cta.title" /></h2>
          <p className="text-gray-300 mb-8"><EditableText path="cta.subtitle" /></p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => {e.preventDefault(); alert('Thanks for your interest! We will contact you soon.')}}>
            <input type="email" placeholder="Enter your email address" className="px-6 py-4 rounded-lg bg-[#0B0C10] border border-[#1F2833] text-white focus:outline-none focus:border-[#66FCF1] w-full" required />
            <button type="submit" className="px-8 py-4 rounded-lg bg-[#66FCF1] text-[#0B0C10] font-bold text-lg hover:bg-[#45A29E] hover:text-white transition-all whitespace-nowrap">
              <EditableText path="cta.button" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4"><EditableText path="cta.disclaimer" /></p>
        </GlassCard>
      </div>
    </section>
  );
};