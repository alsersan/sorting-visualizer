import React, { useState, useEffect, useContext } from "react";

const SortingOptionsContext = React.createContext();

const SortingOptionsProvider = ({ children }) => {
  const [color1, setColor1] = useState("#cccccc");
  const [color2, setColor2] = useState("#3226df");
  const [color3, setColor3] = useState("#216e3c");

  useEffect(() => {
    console.log(color1);
  }, [color1]);

  return (
    <SortingOptionsContext.Provider
      value={{ color1, setColor1, color2, setColor2, color3, setColor3 }}
    >
      {children}
    </SortingOptionsContext.Provider>
  );
};

const useSortingOptionsContext = () => useContext(SortingOptionsContext);

export { SortingOptionsProvider, useSortingOptionsContext };
