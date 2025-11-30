import React from 'react';
import { EditableText } from './cms/EditableText';

interface ProblemCardProps {
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ titleKey, descKey, icon }) => {
  return (
    <div className="p-6 rounded-xl bg-[#0B0C10] border border-white/5 hover:border-red-500/30 transition-colors">
      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        <EditableText path={titleKey} />
      </h3>
      <p className="text-sm text-gray-400">
        <EditableText path={descKey} />
      </p>
    </div>
  );
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-[#1F2833] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <EditableText path="problem.title_start" /> <span className="text-red-400"><EditableText path="problem.title_highlight" /></span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#C5C6C7]/80">
            <EditableText path="problem.subtitle" />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard 
            titleKey="problem.card1_title" 
            descKey="problem.card1_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>}
          />
          <ProblemCard 
            titleKey="problem.card2_title" 
            descKey="problem.card2_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>}
          />
          <ProblemCard 
            titleKey="problem.card3_title" 
            descKey="problem.card3_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
          />
        </div>
      </div>
    </section>
  );
};
