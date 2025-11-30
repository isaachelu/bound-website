import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { ListItem } from './ui/ListItem';
import { EditableText } from './cms/EditableText';

export const PricingSection: React.FC = () => {
  const [isLifetime, setIsLifetime] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <EditableText path="pricing.title" />
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#C5C6C7]/80 mb-8">
            <EditableText path="pricing.subtitle" />
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`font-bold transition-colors ${!isLifetime ? 'text-white' : 'text-[#C5C6C7]'}`}>
              <EditableText path="pricing.label_monthly" />
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={isLifetime}
                onChange={() => setIsLifetime(!isLifetime)}
              />
              <div className="w-14 h-7 bg-[#1F2833] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#66FCF1] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#45A29E]"></div>
            </label>
            <span className={`font-bold transition-colors ${isLifetime ? 'text-white' : 'text-[#C5C6C7]'}`}>
              <EditableText path="pricing.label_lifetime" />
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Scout */}
          <GlassCard className="hover:border-[#66FCF1]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(102,252,241,0.2)]">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2"><EditableText path="pricing.scout_title" /></h3>
              <p className="text-[#C5C6C7] text-sm mb-6"><EditableText path="pricing.scout_desc" /></p>
              <div className="text-4xl font-extrabold text-white mb-1"><EditableText path="pricing.scout_price" /></div>
              <div className="text-sm text-gray-500 mb-6"><EditableText path="pricing.scout_period" /></div>
              
              <button className="w-full py-3 rounded-lg border border-[#1F2833] bg-transparent text-white font-semibold hover:bg-[#1F2833]/50 hover:border-[#66FCF1]/50 transition-all mb-8">
                <EditableText path="pricing.scout_button" />
              </button>

              <ul className="space-y-4 text-sm text-gray-300">
                <ListItem text={<EditableText path="pricing.scout_feature_1" />} />
                <ListItem text={<EditableText path="pricing.scout_feature_2" />} />
                <ListItem text={<EditableText path="pricing.scout_feature_3" />} />
                <ListItem text={<EditableText path="pricing.scout_feature_4" />} iconColor="text-gray-600" textColor="text-gray-600" />
              </ul>
            </div>
          </GlassCard>

          {/* Ghost / Founder */}
          <div className="bg-[#1F2833]/80 backdrop-blur-md border border-[#66FCF1] shadow-[0_0_30px_rgba(102,252,241,0.15)] md:scale-105 z-10 rounded-2xl p-8 relative transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#66FCF1] text-[#0B0C10] font-bold text-xs uppercase px-3 py-1 rounded-full shadow-[0_0_10px_#66FCF1]">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              <EditableText path={isLifetime ? "pricing.founder_title" : "pricing.ghost_title"} />
            </h3>
            <p className="text-[#C5C6C7] text-sm mb-6">
              <EditableText path={isLifetime ? "pricing.founder_desc" : "pricing.ghost_desc"} />
            </p>
            <div className="text-4xl font-extrabold text-white mb-1">
              <EditableText path={isLifetime ? "pricing.founder_price" : "pricing.ghost_price"} />
            </div>
            <div className="text-sm text-gray-500 mb-6">
              <EditableText path={isLifetime ? "pricing.founder_period" : "pricing.ghost_period"} />
            </div>
            
            <button className="w-full py-3 rounded-lg bg-[#66FCF1] text-[#0B0C10] font-bold hover:bg-[#45A29E] hover:text-white transition-all mb-8 shadow-[0_0_15px_rgba(102,252,241,0.2)]">
              <EditableText path={isLifetime ? "pricing.founder_button" : "pricing.ghost_button"} />
            </button>

            <ul className="space-y-4 text-sm text-white font-medium">
              <ListItem text={isLifetime ? "Lifetime License" : "Unlimited Aliases"} />
              <ListItem text={isLifetime ? "Early Feature Access" : "2 Custom Domains"} />
              <ListItem text="Priority Relay Speed" />
              <ListItem text="Breach Alerts (Real-time)" />
              <ListItem text="Premium Support" />
            </ul>
          </div>

          {/* Clan / Legacy */}
          <GlassCard className="border-[#45A29E]/30 hover:border-[#66FCF1]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(102,252,241,0.2)]">
             <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                <EditableText path={isLifetime ? "pricing.legacy_title" : "pricing.clan_title"} />
              </h3>
              <p className="text-[#C5C6C7] text-sm mb-6">
                <EditableText path={isLifetime ? "pricing.legacy_desc" : "pricing.clan_desc"} />
              </p>
              <div className="text-4xl font-extrabold text-white mb-1">
                <EditableText path={isLifetime ? "pricing.legacy_price" : "pricing.clan_price"} />
              </div>
              <div className="text-sm text-gray-500 mb-6">
                <EditableText path={isLifetime ? "pricing.legacy_period" : "pricing.clan_period"} />
              </div>
              
              <button className="w-full py-3 rounded-lg border border-[#45A29E] text-[#45A29E] font-semibold hover:bg-[#45A29E] hover:text-white transition-all mb-8">
                <EditableText path={isLifetime ? "pricing.legacy_button" : "pricing.clan_button"} />
              </button>

              <ul className="space-y-4 text-sm text-gray-300">
                <ListItem text={isLifetime ? "5 Lifetime Licenses" : "5 \"Ghost\" Accounts"} iconColor="text-[#45A29E]" />
                <ListItem text={isLifetime ? "Huge Savings (Save $445)" : "Separate Vaults"} iconColor="text-[#45A29E]" />
                <ListItem text={isLifetime ? "Priority Onboarding" : "Admin Dashboard"} iconColor="text-[#45A29E]" />
                <ListItem text={isLifetime ? "Founder Badges for All" : "Child Safety Mode"} iconColor="text-[#45A29E]" />
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}