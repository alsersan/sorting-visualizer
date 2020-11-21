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

  return (
    <AlgorithmContext.Provider
      value={{
        isRunning,
        setIsRunning,
        isSorted,
        setIsSorted,
        hasStarted,
        setHasStarted,
      }}
    >
      {children}
    </AlgorithmContext.Provider>
  );
};

const useAlgorithmContext = () => useContext(AlgorithmContext);

export { AlgorithmProvider, useAlgorithmContext };
