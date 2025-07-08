import React from 'react';
import { Check, X } from 'lucide-react';

interface ChecklistItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
  showDelete?: boolean;
}

export default function ChecklistItem({ 
  id, 
  text, 
  completed, 
  onToggle, 
  onDelete, 
  showDelete = true 
}: ChecklistItemProps) {
  return (
    <div className={`group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 ${
      completed ? 'opacity-75 bg-emerald-50/30 border-emerald-100' : ''
    }`}>
      <button
        onClick={() => onToggle(id)}
        type="button"
        className={`checkbox-button flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md ${
          completed
            ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg'
            : 'border-gray-400 bg-white hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg'
        }`}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {completed && <Check size={14} className="stroke-[3]" />}
      </button>
      
      <span className={`flex-1 text-gray-800 transition-all duration-200 ${
        completed ? 'line-through text-gray-500' : ''
      }`}>
        {text}
      </span>
      
      {showDelete && onDelete && (
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:scale-105 transition-all duration-200"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <X size={16} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}