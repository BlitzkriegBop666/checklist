import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ChecklistBlock from './components/ChecklistBlock';
import OverallProgress from './components/OverallProgress';
import TabButton from './components/TabButton';
import VksSubTabs from './components/VksSubTabs';
import ClearButton from './components/ClearButton';
import { kepChecklistBlocks } from './data/kepData';
import { orsChecklistBlocks } from './data/orsData';
import { vksRegaOrsBlocks, vksUkepBlocks } from './data/vksData';
import type { ChecklistBlock as ChecklistBlockType, ChecklistType, VksSubType } from './types/checklist';

function App() {
  const [activeTab, setActiveTab] = useState<ChecklistType>('ors');
  const [activeVksSubTab, setActiveVksSubTab] = useState<VksSubType>('rega-ors');
  
  // Separate localStorage for each checklist type and VKS sub-types
  const [orsBlocks, setOrsBlocks] = useLocalStorage<ChecklistBlockType[]>('ors-checklist-blocks', orsChecklistBlocks);
  const [kepBlocks, setKepBlocks] = useLocalStorage<ChecklistBlockType[]>('kep-checklist-blocks', kepChecklistBlocks);
  const [vksRegaOrsBlocksState, setVksRegaOrsBlocks] = useLocalStorage<ChecklistBlockType[]>('vks-rega-ors-blocks', vksRegaOrsBlocks);
  const [vksUkepBlocksState, setVksUkepBlocks] = useLocalStorage<ChecklistBlockType[]>('vks-ukep-blocks', vksUkepBlocks);

  const getCurrentBlocks = () => {
    if (activeTab === 'ors') return orsBlocks;
    if (activeTab === 'kep') return kepBlocks;
    if (activeTab === 'vks') {
      return activeVksSubTab === 'rega-ors' ? vksRegaOrsBlocksState : vksUkepBlocksState;
    }
    return orsBlocks;
  };

  const setCurrentBlocks = (blocks: ChecklistBlockType[]) => {
    if (activeTab === 'ors') {
      setOrsBlocks(blocks);
    } else if (activeTab === 'kep') {
      setKepBlocks(blocks);
    } else if (activeTab === 'vks') {
      if (activeVksSubTab === 'rega-ors') {
        setVksRegaOrsBlocks(blocks);
      } else {
        setVksUkepBlocks(blocks);
      }
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
  const vksStats = getTabStats([...vksRegaOrsBlocksState, ...vksUkepBlocksState]);

  const handleClearAll = () => {
    if (activeTab === 'ors') {
      setOrsBlocks(orsChecklistBlocks.map(block => ({
        ...block,
        items: block.items.map(item => ({ ...item, completed: false }))
      })));
    } else if (activeTab === 'kep') {
      setKepBlocks(kepChecklistBlocks.map(block => ({
        ...block,
        items: block.items.map(item => ({ ...item, completed: false }))
      })));
    } else if (activeTab === 'vks') {
      if (activeVksSubTab === 'rega-ors') {
        setVksRegaOrsBlocks(vksRegaOrsBlocks.map(block => ({
          ...block,
          items: block.items.map(item => ({ ...item, completed: false }))
        })));
      } else {
        setVksUkepBlocks(vksUkepBlocks.map(block => ({
          ...block,
          items: block.items.map(item => ({ ...item, completed: false }))
        })));
      }
    }
  };

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
            label="КЭП"
            isActive={activeTab === 'kep'}
            onClick={setActiveTab}
            completedCount={kepStats.completedItems}
            totalCount={kepStats.totalItems}
          />
          <TabButton
            type="vks"
            label="ВКС"
            isActive={activeTab === 'vks'}
            onClick={setActiveTab}
            completedCount={vksStats.completedItems}
            totalCount={vksStats.totalItems}
          />
        </div>

        {/* VKS Sub-tabs */}
        {activeTab === 'vks' && (
          <VksSubTabs
            activeSubTab={activeVksSubTab}
            onSubTabChange={setActiveVksSubTab}
            regaOrsBlocks={vksRegaOrsBlocksState}
            ukepBlocks={vksUkepBlocksState}
          />
        )}

        {/* Overall Progress */}
        <div className="mb-8">
          <OverallProgress 
            blocks={currentBlocks} 
            title={`Общий прогресс ${
              activeTab === 'vks' 
                ? `ВКС - ${activeVksSubTab === 'rega-ors' ? 'Рега/ОРС' : 'УКЭП'}` 
                : activeTab.toUpperCase()
            }`}
          />
        </div>

        {/* Clear Button */}
        <div className="mb-6">
          <ClearButton onClear={handleClearAll} />
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