import React, { useState } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface ClearButtonProps {
  onClear: () => void;
}

export default function ClearButton({ onClear }: ClearButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClear = () => {
    onClear();
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div className="bg-white/70 backdrop-blur-sm backdrop-blur-fallback rounded-2xl shadow-sm border border-red-200 p-4">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-500" size={20} />
          <span className="text-red-700 font-medium">
            Вы уверены, что хотите очистить все отметки?
          </span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleClear}
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Да, очистить
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Отмена
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      type="button"
      className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-sm backdrop-blur-fallback rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50/30 transition-all duration-200 font-medium"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <RotateCcw size={18} />
      <span>Очистить все отметки</span>
    </button>
  );
}