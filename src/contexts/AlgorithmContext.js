import React, { useState, useEffect, useContext } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";
import { getSetIsSorted } from "../algorithms/utils";

const AlgorithmContext = React.createContext();

const AlgorithmProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeOption, setActiveOption] = useLocalStorageState(
    "SortingVisualizer_sortingAlgorithm",
    0
  );

  useEffect(() => {
    getSetIsSorted(setIsSorted);
  }, []);

  useEffect(() => {
    if (isSorted) {
      setIsRunning(false);
    }
  }, [isSorted]);

  const reset = () => {
    setIsRunning(false);
    setIsSorted(false);
    setHasStarted(false);
  };

  const value = {
    isRunning,
    setIsRunning,
    isSorted,
    setIsSorted,
    hasStarted,
    setHasStarted,
    activeOption,
    setActiveOption,
    reset,
  };

  return (
    <AlgorithmContext.Provider value={value}>
      {children}
    </AlgorithmContext.Provider>
  );
};

const useAlgorithmContext = () => useContext(AlgorithmContext);

export { AlgorithmProvider, useAlgorithmContext };
