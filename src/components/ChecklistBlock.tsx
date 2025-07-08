import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ChecklistItem from './ChecklistItem';
import type { ChecklistBlock as ChecklistBlockType } from '../types/checklist';

interface ChecklistBlockProps {
  block: ChecklistBlockType;
  onToggleBlock: (blockId: string) => void;
  onToggleItem: (blockId: string, itemId: string) => void;
}

export default function ChecklistBlock({ block, onToggleBlock, onToggleItem }: ChecklistBlockProps) {
  const completedCount = block.items.filter(item => item.completed).length;
  const totalCount = block.items.length;
  const isAllCompleted = completedCount === totalCount && totalCount > 0;
  const wasAllCompletedRef = useRef(false);
  const userExpandedRef = useRef(false);

  // Автоматически сворачиваем блок только когда все задачи ТОЛЬКО ЧТО стали выполненными
  useEffect(() => {
    if (isAllCompleted && !wasAllCompletedRef.current && !block.isCollapsed) {
      // Блок только что стал полностью выполненным
      setTimeout(() => {
        onToggleBlock(block.id);
        userExpandedRef.current = false; // Сбрасываем флаг пользовательского расширения
      }, 500);
    }
    wasAllCompletedRef.current = isAllCompleted;
  }, [isAllCompleted, block.isCollapsed, block.id, onToggleBlock]);

  const handleBlockToggle = () => {
    if (isAllCompleted && block.isCollapsed) {
      // Пользователь вручную разворачивает завершенный блок
      userExpandedRef.current = true;
    }
    onToggleBlock(block.id);
  };

  return (
    <div className={`bg-white/70 backdrop-blur-sm backdrop-blur-fallback rounded-2xl shadow-sm border overflow-hidden transition-all duration-300 ${
      isAllCompleted 
        ? 'border-emerald-200 bg-emerald-50/30' 
        : 'border-gray-100'
    }`}>
      {/* Block Header */}
      <button
        onClick={handleBlockToggle}
        type="button"
        className={`w-full px-6 py-4 flex items-center justify-between transition-all duration-200 ${
          isAllCompleted 
            ? 'hover:bg-emerald-50/50' 
            : 'hover:bg-white/50'
        }`}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            {block.isCollapsed ? (
              <ChevronRight size={20} className="text-gray-500" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </div>
          <h3 className={`text-lg font-semibold transition-colors duration-200 ${
            isAllCompleted ? 'text-emerald-700' : 'text-gray-800'
          }`}>
            {block.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`text-sm font-medium transition-colors duration-200 ${
            isAllCompleted ? 'text-emerald-600' : 'text-gray-600'
          }`}>
            {completedCount}/{totalCount}
          </div>
          {isAllCompleted && (
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
      </button>

      {/* Block Content */}
      {!block.isCollapsed && (
        <div className="px-6 pb-6">
          <div className="space-y-3">
            {block.items.map(item => (
              <ChecklistItem
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
                onToggle={(itemId) => onToggleItem(block.id, itemId)}
                showDelete={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}