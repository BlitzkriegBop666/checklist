import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, AlertCircle } from 'lucide-react';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatus(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Показываем статус при первой загрузке если есть проблемы
    if (!navigator.onLine) {
      setShowStatus(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showStatus) return null;

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
      isOnline 
        ? 'bg-emerald-500 text-white' 
        : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center gap-2">
        {isOnline ? (
          <>
            <Wifi size={16} />
            <span className="text-sm font-medium">Соединение восстановлено</span>
          </>
        ) : (
          <>
            <WifiOff size={16} />
            <span className="text-sm font-medium">Нет соединения</span>
          </>
        )}
      </div>
    </div>
  );
}