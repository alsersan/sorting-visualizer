import React, { useEffect, useContext } from 'react';

import useLocalStorageState from 'hooks/useLocalStorageState';
import { getTimeout } from 'algorithms/utils';

const SpeedContext = React.createContext();

const SpeedProvider = ({ children }) => {
  const defaultSpeed = 500;
  const [speed, setSpeed] = useLocalStorageState(
    'SortingVisualizer_timeout',
    defaultSpeed
  );

  useEffect(() => {
    getTimeout(speed);
  }, [speed]);

  const resetSpeed = () => {
    setSpeed(defaultSpeed);
  };

  const value = {
    speed,
    setSpeed,
    resetSpeed,
  };

  return (
    <SpeedContext.Provider value={value}>{children}</SpeedContext.Provider>
  );
};

const useSpeedContext = () => useContext(SpeedContext);

export { SpeedProvider, useSpeedContext };
