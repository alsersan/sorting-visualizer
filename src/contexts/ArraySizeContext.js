import React, { useState, useContext } from "react";

import { getArray } from "../algorithms/utils";

const ArraySizeContext = React.createContext();

const ArraySizeProvider = ({ children }) => {
  const [size, setSize] = useState(10);

  const array = calculateRandomArray();
  getArray(array);

  function calculateRandomArray() {
    const arr = [];
    const max = 100;
    const min = 5;
    for (let i = 0; i < size; i++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(num);
    }
    return arr;
  }

  const value = {
    size,
    setSize,
    array,
  };

  return (
    <ArraySizeContext.Provider value={value}>
      {children}
    </ArraySizeContext.Provider>
  );
};

const useArraySizeContext = () => useContext(ArraySizeContext);

export { ArraySizeProvider, useArraySizeContext };
