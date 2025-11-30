import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { EditableText } from './cms/EditableText';

interface FeatureCardProps {
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ titleKey, descKey, icon }) => {
  return (
    <GlassCard className="p-6 rounded-xl hover:border-[#66FCF1]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(102,252,241,0.2)]">
      <div className="w-10 h-10 bg-[#66FCF1]/20 rounded-lg flex items-center justify-center text-[#66FCF1] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2"><EditableText path={titleKey} /></h3>
      <p className="text-sm text-gray-400"><EditableText path={descKey} /></p>
    </GlassCard>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#1F2833]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white"><EditableText path="features.title" /></h2>
          <p className="text-[#C5C6C7] mt-4"><EditableText path="features.subtitle" /></p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            titleKey="features.card1_title" 
            descKey="features.card1_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>}
          />
          <FeatureCard 
            titleKey="features.card2_title" 
            descKey="features.card2_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>}
          />
          <FeatureCard 
            titleKey="features.card3_title" 
            descKey="features.card3_desc"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>}
          />
        </div>
      </div>
    </section>
  );
};