import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ChecklistBlock from './components/ChecklistBlock';
import OverallProgress from './components/OverallProgress';
import TabButton from './components/TabButton';
import { kepChecklistBlocks } from './data/kepData';
import { orsChecklistBlocks } from './data/orsData';
import type { ChecklistBlock as ChecklistBlockType, ChecklistType } from './types/checklist';

function App() {
  const [activeTab, setActiveTab] = useState<ChecklistType>('ors');
  
  // Separate localStorage for each checklist type
  const [orsBlocks, setOrsBlocks] = useLocalStorage<ChecklistBlockType[]>('ors-checklist-blocks', orsChecklistBlocks);
  const [kepBlocks, setKepBlocks] = useLocalStorage<ChecklistBlockType[]>('kep-checklist-blocks', kepChecklistBlocks);

  const getCurrentBlocks = () => {
    return activeTab === 'ors' ? orsBlocks : kepBlocks;
  };

  const setCurrentBlocks = (blocks: ChecklistBlockType[]) => {
    if (activeTab === 'ors') {
      setOrsBlocks(blocks);
    } else {
      setKepBlocks(blocks);
    }
  };

  const handleToggleItem = (blockId: string, itemId: string) => {
    const currentBlocks = getCurrentBlocks();
    const updatedBlocks = currentBlocks.map(block => {
      if (block.id === blockId) {
        return {
          ...block,
          items: block.items.map(item =>
            item.id === itemId ? { ...item, completed: !item.completed } : item
          )
        };
      }
      return block;
    });
    setCurrentBlocks(updatedBlocks);
  };

  const handleToggleBlock = (blockId: string) => {
    const currentBlocks = getCurrentBlocks();
    const updatedBlocks = currentBlocks.map(block =>
      block.id === blockId ? { ...block, isCollapsed: !block.isCollapsed } : block
    );
    setCurrentBlocks(updatedBlocks);
  };

  const getTabStats = (blocks: ChecklistBlockType[]) => {
    const totalItems = blocks.reduce((sum, block) => sum + block.items.length, 0);
    const completedItems = blocks.reduce((sum, block) => 
      sum + block.items.filter(item => item.completed).length, 0
    );
    return { completedItems, totalItems };
  };

  const orsStats = getTabStats(orsBlocks);
  const kepStats = getTabStats(kepBlocks);

  const currentBlocks = getCurrentBlocks();

  return (
    <div className="app-container">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Чеклист встреч
        </h1>
        
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 bg-white/50 backdrop-blur-sm backdrop-blur-fallback p-2 rounded-2xl shadow-sm">
          <TabButton
            type="ors"
            label="ОРС"
            isActive={activeTab === 'ors'}
            onClick={setActiveTab}
            completedCount={orsStats.completedItems}
            totalCount={orsStats.totalItems}
          />
          <TabButton
            type="kep"
            label="КЕП"
            isActive={activeTab === 'kep'}
            onClick={setActiveTab}
            completedCount={kepStats.completedItems}
            totalCount={kepStats.totalItems}
          />
        </div>

        {/* Overall Progress */}
        <div className="mb-8">
          <OverallProgress 
            blocks={currentBlocks} 
            title={`Общий прогресс ${activeTab.toUpperCase()}`}
          />
        </div>

        {/* Checklist Blocks */}
        <div className="space-y-6">
          {currentBlocks.map(block => (
            <ChecklistBlock
              key={block.id}
              block={block}
              onToggleBlock={handleToggleBlock}
              onToggleItem={handleToggleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;