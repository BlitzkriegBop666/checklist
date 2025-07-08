// Утилиты для работы с сетевыми проблемами
export const detectNetworkIssues = () => {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  return {
    isIOS,
    isMobile,
    isLikelyIPv6Issue: isIOS && isMobile
  };
};

export const preloadCriticalResources = () => {
  // Предзагрузка критических ресурсов
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = window.location.origin;
  document.head.appendChild(link);
};

export const addNetworkFallbacks = () => {
  // Добавляем обработчики для сетевых ошибок
  window.addEventListener('online', () => {
    console.log('Сеть восстановлена');
    // Можно добавить уведомление пользователю
  });

  window.addEventListener('offline', () => {
    console.log('Сеть недоступна');
    // Можно показать уведомление о проблемах с сетью
  });
};