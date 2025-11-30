import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { EditableText } from './cms/EditableText';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#0B0C10] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#45A29E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#66FCF1]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6"><EditableText path="how.title" /></h2>
          <p className="max-w-2xl mx-auto text-lg text-[#C5C6C7]/80">
            <EditableText path="how.subtitle" />
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <GlassCard className="relative border-l-4 border-[#66FCF1]">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#66FCF1] text-[#0B0C10] font-bold flex items-center justify-center rounded-lg shadow-lg">1</div>
                <h3 className="text-2xl font-bold text-white mb-4"><EditableText path="how.step1_title" /></h3>
                <p className="text-gray-400 mb-6"><EditableText path="how.step1_desc" /></p>
                <div className="bg-white rounded p-4 font-mono text-xs text-gray-800 shadow-inner">
                  <div className="mb-2 text-gray-500">Sign up for Shop.com</div>
                  <div className="flex gap-2">
                    <input disabled value="shop123@mask.bound.io" className="bg-gray-100 p-2 rounded w-full border border-[#66FCF1] text-[#45A29E] font-bold" />
                    <button className="bg-[#66FCF1] text-[#0B0C10] px-3 py-1 rounded font-bold text-xs uppercase">Masked</button>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <svg className="w-48 h-48 text-[#66FCF1]/20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center order-1">
              <svg className="w-48 h-48 text-[#45A29E]/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <div className="flex-1 order-2">
              <GlassCard className="relative border-r-4 border-[#45A29E]">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#45A29E] text-white font-bold flex items-center justify-center rounded-lg shadow-lg">2</div>
                <h3 className="text-2xl font-bold text-white mb-4"><EditableText path="how.step2_title" /></h3>
                <p className="text-gray-400"><EditableText path="how.step2_desc" /></p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <span className="text-[#C5C6C7]">Shop.com</span>
                  <span className="text-[#66FCF1]">→</span>
                  <span className="px-2 py-1 bg-[#0B0C10] rounded border border-[#66FCF1]/30 text-[#66FCF1]">Alias</span>
                  <span className="text-[#66FCF1]">→</span>
                  <span className="text-white font-bold">You</span>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <GlassCard className="relative border-l-4 border-red-500/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-500 text-white font-bold flex items-center justify-center rounded-lg shadow-lg">3</div>
                <h3 className="text-2xl font-bold text-white mb-4"><EditableText path="how.step3_title" /></h3>
                <p className="text-gray-400"><EditableText path="how.step3_desc" /></p>
                <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-red-200 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  Alert: Alias for Shop.com paused due to breach.
                </div>
              </GlassCard>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <svg className="w-48 h-48 text-red-500/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v8h-2z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
