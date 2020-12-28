import React, { useState, useContext } from "react";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [speed, setSpeed] = useState(500);
  const [activeOption, setActiveOption] = useState(0);

  const value = {
    speed,
    setSpeed,
    activeOption,
    setActiveOption,
  };

  return (
    <SortingOptionsContext.Provider value={value}>
      {children}
    </SortingOptionsContext.Provider>
  );
};

const useSortingOptionsContext = () => useContext(SortingOptionsContext);

export { SortingOptionsProvider, useSortingOptionsContext };
