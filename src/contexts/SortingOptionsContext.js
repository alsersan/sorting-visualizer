import React, { useState, useEffect, useContext } from "react";

import { selectionSortGetArray } from "../algorithms/recursiveSelectionSort";
import { bubbleSortGetArray } from "../algorithms/recursiveBubbleSort";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [color1, setColor1] = useState("#ec3232");
  const [color2, setColor2] = useState("#3226df");
  const [color3, setColor3] = useState("#216e3c");
  const [color4, setColor4] = useState("#d6ec32");

  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(10);
  const [array, setArray] = useState([]);

  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
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
    }
  }, [array, activeOption]);

  return (
    <SortingOptionsContext.Provider
      value={{
        color1,
        setColor1,
        color2,
        setColor2,
        color3,
        setColor3,
        color4,
        setColor4,
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
