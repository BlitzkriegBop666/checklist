import React, { useState, useEffect } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface LoadingFallbackProps {
  isLoading: boolean;
  hasError?: boolean;
  onRetry?: () => void;
}

export default function LoadingFallback({ isLoading, hasError, onRetry }: LoadingFallbackProps) {
  const [showSlowLoading, setShowSlowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowSlowLoading(true);
      }, 5000); // Показываем предупреждение через 5 секунд

      return () => clearTimeout(timer);
    } else {
      setShowSlowLoading(false);
    }
  }, [isLoading]);

  if (!isLoading && !hasError) return null;

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center p-6 max-w-sm mx-4">
        {hasError ? (
          <>
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ошибка загрузки
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Возможно, проблема с сетевым соединением
            </p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Попробовать снова
              </button>
            )}
          </>
        ) : (
          <>
            <div className="w-12 h-12 mx-auto mb-4">
              <RefreshCw className="w-12 h-12 text-blue-500 animate-spin" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Загрузка...
            </h3>
            {showSlowLoading && (
              <div className="text-sm text-gray-600 space-y-2">
                <p>Загрузка занимает больше времени, чем обычно</p>
                <p className="text-xs">
                  Возможно, проблема с IPv6 на мобильной сети
                </p>
                {onRetry && (
                  <button
                    onClick={onRetry}
                    className="mt-3 px-3 py-1 text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition-colors text-xs"
                  >
                    Перезагрузить
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}