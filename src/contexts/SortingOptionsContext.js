import React, { useState, useContext } from "react";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [activeOption, setActiveOption] = useState(0);

  const value = {
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
