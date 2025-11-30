import React from 'react';
import { EditableText } from './cms/EditableText';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0C10] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#66FCF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          <span className="font-bold text-white">Bound</span>
        </div>
        <div className="text-sm text-gray-500">
          &copy; 2025 Bound. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-[#66FCF1] transition-colors"><EditableText path="footer.privacy" /></a>
          <a href="#" className="text-gray-500 hover:text-[#66FCF1] transition-colors"><EditableText path="footer.terms" /></a>
          <a href="#" className="text-gray-500 hover:text-[#66FCF1] transition-colors"><EditableText path="footer.contact" /></a>
        </div>
      </div>
    </footer>
  );
};