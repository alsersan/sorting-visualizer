import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

import { selectionSortGetArray } from "../algorithms/recursiveSelectionSort";
import { bubbleSortGetArray } from "../algorithms/recursiveBubbleSort";
import { insertionSortGetArray } from "../algorithms/recursiveInsertionSort";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [unsortedColor, setUnsortedColor] = useState("#ec3232");
  const [selectedColor, setSelectedColor] = useState("#3226df");
  const [sortedColor, setSortedColor] = useState("#216e3c");
  const [referenceColor, setReferenceColor] = useState("#d6ec32");

  const [speed, setSpeed] = useState(500);
  const [size, setSize] = useState(10);
  const [array, setArray] = useState([]);

  const [activeOption, setActiveOption] = useState(0);

  useLayoutEffect(() => {
    const arr = [];
    const max = 100;
    const min = 5;
    for (let i = 0; i < size; i++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(num);
    }
    setArray(arr);
  }, [size]);

  useEffect(() => {
    if (activeOption === 0) {
      bubbleSortGetArray(array);
    } else if (activeOption === 1) {
      selectionSortGetArray(array);
    } else if (activeOption === 2) {
      insertionSortGetArray(array);
    }
  }, [array, activeOption]);

  return (
    <SortingOptionsContext.Provider
      value={{
        unsortedColor,
        setUnsortedColor,
        selectedColor,
        setSelectedColor,
        sortedColor,
        setSortedColor,
        referenceColor,
        setReferenceColor,
        speed,
        setSpeed,
        size,
        setSize,
        array,
        setArray,
        activeOption,
        setActiveOption,
      }}
    >
      {children}
    </SortingOptionsContext.Provider>
  );
};

const useSortingOptionsContext = () => useContext(SortingOptionsContext);

export { SortingOptionsProvider, useSortingOptionsContext };
