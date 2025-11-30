import React from 'react';

export interface Persona {
  alias: string;
  role: string;
  log: string;
}

export interface ListItemProps {
  text: string | React.ReactNode;
  iconColor?: string;
  textColor?: string;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface ContentContextType {
  content: Record<string, string>;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (key: string, value: string) => void;
  saveContent: () => void;
  resetContent: () => void;
  hasUnsavedChanges: boolean;
}

export interface EditableTextProps {
  path: string;
  tag?: React.ElementType; // e.g., 'h1', 'p', 'span'
  className?: string;
  multiline?: boolean;
  fallback?: string;
}