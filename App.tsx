import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestEngineSection } from './components/TestEngineSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { QuoteSection } from './components/QuoteSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContentProvider } from './context/ContentContext';
import { CMSControls } from './components/cms/CMSControls';

export default function App() {
  return (
    <ContentProvider>
      <div className="bg-[#0B0C10] min-h-screen text-[#C5C6C7] font-sans overflow-x-hidden selection:bg-[#66FCF1] selection:text-[#0B0C10]">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <TestEngineSection />
          <FeaturesSection />
          <PricingSection />
          <QuoteSection />
          <CTASection />
        </main>
        <Footer />
        <CMSControls />
      </div>
    </ContentProvider>
  );
}
