import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

import { getArray } from "../algorithms/utils";

const ArraySizeContext = React.createContext();

const ArraySizeProvider = ({ children }) => {
  const [size, setSize] = useState(10);
  const [array, setArray] = useState([]);

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

  const value = {
    size,
    setSize,
    array,
    setArray,
  };

  return (
    <ArraySizeContext.Provider value={value}>
      {children}
    </ArraySizeContext.Provider>
  );
};

const useArraySizeContext = () => useContext(ArraySizeContext);

export { ArraySizeProvider, useArraySizeContext };
