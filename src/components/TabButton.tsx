import React from 'react';
import type { ChecklistType } from '../types/checklist';

interface TabButtonProps {
  type: ChecklistType;
  label: string;
  isActive: boolean;
  onClick: (type: ChecklistType) => void;
  completedCount: number;
  totalCount: number;
}

export default function TabButton({ 
  type, 
  label, 
  isActive, 
  onClick, 
  completedCount, 
  totalCount 
}: TabButtonProps) {
  const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  
  return (
    <button
      onClick={() => onClick(type)}
      type="button"
      className={`relative flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
        isActive
          ? 'bg-white text-emerald-600 shadow-lg border-2 border-emerald-100'
          : 'bg-white/50 text-gray-600 hover:bg-white/70 border-2 border-transparent'
      }`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-lg">{label}</span>
        <div className="flex items-center gap-2 text-sm">
          <span className={`${isActive ? 'text-emerald-600' : 'text-gray-500'}`}>
            {completedCount}/{totalCount}
          </span>
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${
            percentage === 100 
              ? 'bg-emerald-100 text-emerald-700' 
              : isActive 
                ? 'bg-emerald-50 text-emerald-600' 
                : 'bg-gray-100 text-gray-500'
          }`}>
            {percentage}%
          </div>
        </div>
      </div>
    </button>
  );
}