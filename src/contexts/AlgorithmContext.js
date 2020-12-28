import React, { useState, useEffect, useContext } from "react";

const AlgorithmContext = React.createContext();

const AlgorithmProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isSorted) {
      setIsRunning(false);
    }
  }, [isSorted]);

  const value = {
    isRunning,
    setIsRunning,
    isSorted,
    setIsSorted,
    hasStarted,
    setHasStarted,
  };

  return (
    <AlgorithmContext.Provider value={value}>
      {children}
    </AlgorithmContext.Provider>
  );
};

const useAlgorithmContext = () => useContext(AlgorithmContext);

export { AlgorithmProvider, useAlgorithmContext };
