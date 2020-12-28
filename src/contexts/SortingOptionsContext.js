import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

import { getArray } from "../algorithms/utils";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
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
    console.log(`CONTEXT: ${array}`);
    getArray(array);
  }, [array]);

  return (
    <SortingOptionsContext.Provider
      value={{
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
