import React, { useEffect, useContext } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";
import { getTimeout } from "../algorithms/utils";

const SpeedContext = React.createContext();

const SpeedProvider = ({ children }) => {
  const [speed, setSpeed] = useLocalStorageState(
    "SortingVisualizer_timeout",
    500
  );

  useEffect(() => {
    getTimeout(speed);
  }, [speed]);

  const value = {
    speed,
    setSpeed,
  };

  return (
    <SpeedContext.Provider value={value}>{children}</SpeedContext.Provider>
  );
};

const useSpeedContext = () => useContext(SpeedContext);

export { SpeedProvider, useSpeedContext };
