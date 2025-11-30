import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditableTextProps } from '../../types';

export const EditableText: React.FC<EditableTextProps> = ({ 
  path, 
  tag: Tag = 'span', 
  className = '', 
  multiline = false,
  fallback = ''
}) => {
  const { content, isEditMode, updateContent } = useContent();
  const textValue = content[path] || fallback || "Edit me...";
  const [tempValue, setTempValue] = useState(textValue);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTempValue(textValue);
  }, [textValue]);

  const handleBlur = () => {
    if (elementRef.current) {
      const newText = elementRef.current.innerText;
      if (newText !== textValue) {
        updateContent(path, newText);
      }
    }
  };

  // If simple viewing mode
  if (!isEditMode) {
    return <Tag className={className}>{textValue}</Tag>;
  }

  // Edit mode
  return (
    <Tag
      ref={elementRef as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      className={`${className} outline-none ring-2 ring-transparent hover:ring-[#66FCF1] hover:bg-white/5 rounded px-1 transition-all cursor-text min-w-[20px] inline-block`}
      style={{ caretColor: '#66FCF1' }}
    >
      {textValue}
    </Tag>
  );
};
