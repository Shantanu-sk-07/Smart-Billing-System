import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

// ==============================|| HOOKS - LOCAL STORAGE ||============================== //

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue === null ? defaultValue : JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        try {
          setValue(e.newValue ? JSON.parse(e.newValue) : defaultValue);
        } catch (error) {
          console.error(`Error parsing updated localStorage value for key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage: Dispatch<SetStateAction<T>> = (newValue) => {
    setValue((currentValue: T) => {
      const valueToStore = typeof newValue === 'function' ? (newValue as (prevState: T) => T)(currentValue) : newValue;

      try {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }

      return valueToStore;
    });
  };

  return [value, setValueInLocalStorage];
}
