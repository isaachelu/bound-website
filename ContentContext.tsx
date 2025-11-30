import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContentContextType } from '../types';

const defaultContent: Record<string, string> = {
  // Hero
  'hero.badge': 'Public Beta: Live',
  'hero.title_start': 'Rewriting the rules of',
  'hero.title_highlight': 'digital trust.',
  'hero.subtitle': 'Stop trusting platforms to keep you safe. Bound gives you smart digital disguises that act as a bodyguard for your data.',
  'hero.cta_primary': 'Secure My Identity',
  'hero.cta_secondary': 'How it Works',
  'hero.card_you': 'You',
  'hero.card_real_email': 'Real Email',
  'hero.card_relay': 'Bound Relay',
  'hero.card_relay_sub': 'Encrypted & Anonymized',
  'hero.card_web': 'The Web',
  'hero.card_web_sub': 'Sees only Alias',

  // Problem
  'problem.title_start': 'The Internet is built on',
  'problem.title_highlight': 'blind trust.',
  'problem.subtitle': 'Every time you sign up, you give away a piece of yourself. When breaches happen, you pay the price—not the platform.',
  'problem.card1_title': 'Data Breaches',
  'problem.card1_desc': 'Your email and password are stored on thousands of servers. It only takes one hack to expose you.',
  'problem.card2_title': 'Tracking & Spam',
  'problem.card2_desc': 'Companies sell your data. Your inbox becomes a target for marketing and scams.',
  'problem.card3_title': 'Identity Theft',
  'problem.card3_desc': 'A leaked email is the first step to stealing your digital identity.',

  // How It Works
  'how.title': 'Your Bouncer for the Internet',
  'how.subtitle': 'Bound creates a unique alias for every site you visit. If a site gets hacked, they get the alias—not you.',
  'how.step1_title': 'Click "Mask It"',
  'how.step1_desc': 'When you sign up for a new service, Bound\'s Chrome extension detects the form. One click creates a brand new, unique identity.',
  'how.step2_title': 'The Privacy Relay',
  'how.step2_desc': 'Emails from the website are sent to your alias. Bound verifies them, strips trackers, and forwards them to your real inbox. Your real email is never exposed.',
  'how.step3_title': 'Breach Quarantine',
  'how.step3_desc': 'If Bound detects a breach at a site you use, we automatically pause that alias. The hackers get a dead end. You stay safe.',
  
  // Test Engine
  'demo.badge': 'Interactive Demo',
  'demo.title': 'Test the Engine',
  'demo.subtitle': 'See how Bound generates a unique identity in milliseconds. Click below to create a new digital disguise.',
  'demo.button': 'Generate New Identity',

  // Features
  'features.title': 'Full Control Toolkit',
  'features.subtitle': 'Everything you need to disappear from the grid.',
  'features.card1_title': 'Infinite Aliases',
  'features.card1_desc': 'Generate unlimited random, unique email identities. Burn them whenever you want.',
  'features.card2_title': 'Passkey Login',
  'features.card2_desc': 'Forget master passwords. Log in to Bound with your Face ID or Fingerprint.',
  'features.card3_title': 'Command Dashboard',
  'features.card3_desc': 'See all your connections in one place. Toggle aliases on/off like a light switch.',

  // Pricing
  'pricing.title': 'Choose Your Level of Invisibility',
  'pricing.subtitle': 'Flexible plans for you, or lifetime protection for your entire household.',
  'pricing.label_monthly': 'Monthly Plans',
  'pricing.label_lifetime': 'Founder (Lifetime)',
  
  'pricing.scout_title': 'The Scout',
  'pricing.scout_desc': 'Essential protection. Limited spots.',
  'pricing.scout_price': '$0',
  'pricing.scout_period': 'forever',
  'pricing.scout_button': 'Join Waitlist',
  'pricing.scout_feature_1': '5 Active Aliases',
  'pricing.scout_feature_2': 'Unlimited Reply/Send',
  'pricing.scout_feature_3': 'Browser Extension',
  'pricing.scout_feature_4': 'Waitlist Access Only',
  
  'pricing.ghost_title': 'The Ghost',
  'pricing.ghost_desc': 'Complete digital disappearance.',
  'pricing.ghost_price': '$5',
  'pricing.ghost_period': 'per month',
  'pricing.ghost_button': 'Go Ghost',

  'pricing.founder_title': 'Founder',
  'pricing.founder_desc': 'Own your privacy. Forever.',
  'pricing.founder_price': '$149',
  'pricing.founder_period': 'one-time payment',
  'pricing.founder_button': 'Get Lifetime Access',

  'pricing.clan_title': 'The Clan',
  'pricing.clan_desc': 'Protection for your household.',
  'pricing.clan_price': '$15',
  'pricing.clan_period': 'per month',
  'pricing.clan_button': 'Protect My Family',

  'pricing.legacy_title': 'Legacy',
  'pricing.legacy_desc': 'Secure your entire bloodline.',
  'pricing.legacy_price': '$299',
  'pricing.legacy_period': 'one-time payment',
  'pricing.legacy_button': 'Get Family Lifetime',

  // Quote
  'quote.text': '"Bound isn\'t another privacy tool. It\'s the rewrite of digital trust."',
  'quote.author': '— Kristina Helu',
  'quote.role': 'Founder & CEO, Bound',

  // CTA
  'cta.title': 'It’s not if you get breached, but when.',
  'cta.subtitle': 'Hackers can’t steal what they can’t see. Go dark today and make your data useless to thieves.',
  'cta.button': 'Get Early Access',
  'cta.disclaimer': 'We respect your inbox. Ironically, we\'d recommend using a Bound alias here if you could.',
  
  // Footer
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.contact': 'Contact'
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Record<string, string>>(defaultContent);
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('bound_cms_content');
    if (savedContent) {
      try {
        setContent({ ...defaultContent, ...JSON.parse(savedContent) });
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const saveContent = () => {
    localStorage.setItem('bound_cms_content', JSON.stringify(content));
    setHasUnsavedChanges(false);
    alert('Content saved locally!');
  };

  const resetContent = () => {
    if (window.confirm('Are you sure you want to reset all content to default? This cannot be undone.')) {
      setContent(defaultContent);
      localStorage.removeItem('bound_cms_content');
      setHasUnsavedChanges(false);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      isEditMode, 
      toggleEditMode, 
      updateContent, 
      saveContent, 
      resetContent,
      hasUnsavedChanges
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};