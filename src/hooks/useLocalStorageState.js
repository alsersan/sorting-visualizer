import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) return JSON.parse(valueInLocalStorage);
    return defaultValue;
  });

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, 150);
    return () => clearTimeout(timeout);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
