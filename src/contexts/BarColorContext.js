import React, { useEffect, useContext } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";
import { getColors } from "../algorithms/utils";

const BarColorContext = React.createContext();

const BarColorProvider = ({ children }) => {
  const [unsortedColor, setUnsortedColor] = useLocalStorageState(
    "SortingVisualizer_unsortedColor",
    "#ec3232"
  );
  const [selectedColor, setSelectedColor] = useLocalStorageState(
    "SortingVisualizer_selectedColor",
    "#3226df"
  );
  const [sortedColor, setSortedColor] = useLocalStorageState(
    "SortingVisualizer_sortedColor",
    "#216e3c"
  );
  const [referenceColor, setReferenceColor] = useLocalStorageState(
    "SortingVisualizer_referenceColor",
    "#d6ec32"
  );

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
