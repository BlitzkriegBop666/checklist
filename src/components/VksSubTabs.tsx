import React from 'react';
import type { VksSubType, ChecklistBlock } from '../types/checklist';

interface VksSubTabsProps {
  activeSubTab: VksSubType;
  onSubTabChange: (subTab: VksSubType) => void;
  regaOrsBlocks: ChecklistBlock[];
  ukepBlocks: ChecklistBlock[];
}

export default function VksSubTabs({ 
  activeSubTab, 
  onSubTabChange, 
  regaOrsBlocks, 
  ukepBlocks 
}: VksSubTabsProps) {
  const getSubTabStats = (blocks: ChecklistBlock[]) => {
    const totalItems = blocks.reduce((sum, block) => sum + block.items.length, 0);
    const completedItems = blocks.reduce((sum, block) => 
      sum + block.items.filter(item => item.completed).length, 0
    );
    return { completedItems, totalItems };
  };

  const regaOrsStats = getSubTabStats(regaOrsBlocks);
  const ukepStats = getSubTabStats(ukepBlocks);

  const getPercentage = (completed: number, total: number) => {
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  return (
    <div className="flex gap-3 mb-6 bg-white/30 backdrop-blur-sm backdrop-blur-fallback p-2 rounded-xl shadow-sm">
      <button
        onClick={() => onSubTabChange('rega-ors')}
        type="button"
        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
          activeSubTab === 'rega-ors'
            ? 'bg-white text-blue-600 shadow-md border-2 border-blue-100'
            : 'bg-white/50 text-gray-600 hover:bg-white/70 border-2 border-transparent'
        }`}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Рега/ОРС</span>
          <div className="flex items-center gap-2 text-xs">
            <span className={`${activeSubTab === 'rega-ors' ? 'text-blue-600' : 'text-gray-500'}`}>
              {regaOrsStats.completedItems}/{regaOrsStats.totalItems}
            </span>
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${
              getPercentage(regaOrsStats.completedItems, regaOrsStats.totalItems) === 100 
                ? 'bg-emerald-100 text-emerald-700' 
                : activeSubTab === 'rega-ors' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'bg-gray-100 text-gray-500'
            }`}>
              {getPercentage(regaOrsStats.completedItems, regaOrsStats.totalItems)}%
            </div>
          </div>
        </div>
      </button>
      
      <button
        onClick={() => onSubTabChange('ukep')}
        type="button"
        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
          activeSubTab === 'ukep'
            ? 'bg-white text-blue-600 shadow-md border-2 border-blue-100'
            : 'bg-white/50 text-gray-600 hover:bg-white/70 border-2 border-transparent'
        }`}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">УКЭП</span>
          <div className="flex items-center gap-2 text-xs">
            <span className={`${activeSubTab === 'ukep' ? 'text-blue-600' : 'text-gray-500'}`}>
              {ukepStats.completedItems}/{ukepStats.totalItems}
            </span>
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${
              getPercentage(ukepStats.completedItems, ukepStats.totalItems) === 100 
                ? 'bg-emerald-100 text-emerald-700' 
                : activeSubTab === 'ukep' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'bg-gray-100 text-gray-500'
            }`}>
              {getPercentage(ukepStats.completedItems, ukepStats.totalItems)}%
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}