import React from 'react';
import { useContent } from '../../context/ContentContext';

export const CMSControls: React.FC = () => {
  const { isEditMode, toggleEditMode, saveContent, resetContent, hasUnsavedChanges } = useContent();

  if (!isEditMode) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleEditMode}
          className="bg-[#1F2833] hover:bg-[#66FCF1] hover:text-[#0B0C10] text-white p-3 rounded-full shadow-lg border border-[#66FCF1]/30 transition-all group"
          title="Edit Content"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1F2833] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
            Edit Site Content
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0B0C10]/95 border border-[#66FCF1] rounded-full p-2 px-6 flex items-center gap-4 shadow-[0_0_30px_rgba(102,252,241,0.2)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-10">
      <div className="flex items-center gap-2 mr-4 border-r border-white/20 pr-4">
        <div className="w-3 h-3 bg-[#66FCF1] rounded-full animate-pulse"></div>
        <span className="text-white font-bold text-sm">Edit Mode Active</span>
      </div>
      
      <button 
        onClick={saveContent}
        disabled={!hasUnsavedChanges}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
          hasUnsavedChanges 
            ? 'bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E]' 
            : 'bg-[#1F2833] text-gray-400 cursor-not-allowed'
        }`}
      >
        Save Changes
      </button>

      <button 
        onClick={resetContent}
        className="px-4 py-2 rounded-full text-sm font-medium text-red-400 hover:bg-red-900/20 transition-all"
      >
        Reset Defaults
      </button>

      <button 
        onClick={toggleEditMode}
        className="ml-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
        title="Close Editor"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};
