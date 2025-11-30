import React from 'react';
import { EditableText } from './cms/EditableText';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0C10] to-[#1F2833] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <svg className="w-12 h-12 text-[#66FCF1] mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21C9.983 22.1046 10.8784 23 11.983 23H12.017C13.1216 23 14.017 22.1046 14.017 21ZM21 21L21 18C21 16.8954 20.1046 16 19 16H18.966C17.8614 16 16.966 16.8954 16.966 18L16.966 21C16.966 22.1046 17.8614 23 18.966 23H19C20.1046 23 21 22.1046 21 21ZM7.034 21L7.034 18C7.034 16.8954 6.1386 16 5.034 16H5C3.8954 16 3 16.8954 3 18L3 21C3 22.1046 3.8954 23 5 23H5.034C6.1386 23 7.034 22.1046 7.034 21ZM16.966 6L16.966 3C16.966 1.89543 17.8614 1 18.966 1H19C20.1046 1 21 1.89543 21 3L21 6C21 7.10457 20.1046 8 19 8H18.966C17.8614 8 16.966 7.10457 16.966 6ZM9.983 6L9.983 3C9.983 1.89543 10.8784 1 11.983 1H12.017C13.1216 1 14.017 1.89543 14.017 3L14.017 6C14.017 7.10457 13.1216 8 12.017 8H11.983C10.8784 8 9.983 7.10457 9.983 6ZM3 6L3 3C3 1.89543 3.8954 1 5 1H5.034C6.1386 1 7.034 1.89543 7.034 3L7.034 6C7.034 7.10457 6.1386 8 5.034 8H5C3.8954 8 3 7.10457 3 6Z"></path></svg>
        <blockquote className="text-2xl font-serif italic text-white mb-6">
          <EditableText path="quote.text" />
        </blockquote>
        <cite className="text-[#66FCF1] not-italic font-bold block"><EditableText path="quote.author" /></cite>
        <span className="text-sm text-gray-500 block mt-1"><EditableText path="quote.role" /></span>
      </div>
    </section>
  );
};