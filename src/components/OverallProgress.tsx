import React from 'react';
import type { ChecklistBlock } from '../types/checklist';

interface OverallProgressProps {
  blocks: ChecklistBlock[];
  title: string;
}

export default function OverallProgress({ blocks, title }: OverallProgressProps) {
  const totalItems = blocks.reduce((sum, block) => sum + block.items.length, 0);
  const completedItems = blocks.reduce((sum, block) => 
    sum + block.items.filter(item => item.completed).length, 0
  );
  
  const percentage = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);
  const isComplete = percentage === 100;

  return (
    <div className={`p-6 bg-white/70 backdrop-blur-sm backdrop-blur-fallback rounded-2xl shadow-sm border transition-all duration-300 ${
      isComplete ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-100'
    }`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className={`text-lg font-semibold transition-colors duration-200 ${
          isComplete ? 'text-emerald-700' : 'text-gray-700'
        }`}>
          {title}
        </h2>
        <span className={`text-sm font-medium transition-colors duration-200 ${
          isComplete ? 'text-emerald-600' : 'text-gray-600'
        }`}>
          {completedItems} из {totalItems} выполнено
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out shadow-sm ${
            isComplete 
              ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' 
              : 'bg-gradient-to-r from-blue-400 to-blue-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-right mt-2">
        <span className={`text-2xl font-bold transition-colors duration-200 ${
          isComplete ? 'text-emerald-600' : 'text-blue-600'
        }`}>
          {percentage}%
        </span>
        {isComplete && (
          <span className="ml-2 text-emerald-600">🎉</span>
        )}
      </div>
    </div>
  );
}