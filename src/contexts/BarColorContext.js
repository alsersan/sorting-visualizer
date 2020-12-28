import React, { useState, useEffect, useContext } from "react";

import { getColors } from "../algorithms/utils";

const BarColorContext = React.createContext();

const BarColorProvider = ({ children }) => {
  const [unsortedColor, setUnsortedColor] = useState("#ec3232");
  const [selectedColor, setSelectedColor] = useState("#3226df");
  const [sortedColor, setSortedColor] = useState("#216e3c");
  const [referenceColor, setReferenceColor] = useState("#d6ec32");

  useEffect(() => {
    const colors = [unsortedColor, selectedColor, referenceColor, sortedColor];
    getColors(colors);
  });

  const value = {
    unsortedColor,
    setUnsortedColor,
    selectedColor,
    setSelectedColor,
    sortedColor,
    setSortedColor,
    referenceColor,
    setReferenceColor,
  };

  return (
    <BarColorContext.Provider value={value}>
      {children}
    </BarColorContext.Provider>
  );
};

const useBarColorContext = () => useContext(BarColorContext);

export { BarColorProvider, useBarColorContext };
