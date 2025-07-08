import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      
      // Проверяем доступность localStorage
      if (!window.localStorage) {
        console.warn('localStorage недоступен');
        return initialValue;
      }
      
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Ошибка чтения localStorage для ключа "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      
      if (!window.localStorage) {
        console.warn('localStorage недоступен для записи');
        return;
      }
      
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Ошибка записи localStorage для ключа "${key}":`, error);
    }
  };

  return [storedValue, setValue] as [T, (value: T | ((val: T) => T)) => void];
}