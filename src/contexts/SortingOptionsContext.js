import React, { useState, useEffect, useContext } from "react";

import { getArray } from "../algorithms/recursiveSortingAlgorithms";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [color1, setColor1] = useState("#cccccc");
  const [color2, setColor2] = useState("#3226df");
  const [color3, setColor3] = useState("#216e3c");

  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(9);
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
    getArray(arr);
  }, [size]);

  return (
    <SortingOptionsContext.Provider
      value={{
        color1,
        setColor1,
        color2,
        setColor2,
        color3,
        setColor3,
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
