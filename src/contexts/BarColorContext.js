import React, { useState, useContext } from "react";

const BarColorContext = React.createContext();

const BarColorProvider = ({ children }) => {
  const [unsortedColor, setUnsortedColor] = useState("#ec3232");
  const [selectedColor, setSelectedColor] = useState("#3226df");
  const [sortedColor, setSortedColor] = useState("#216e3c");
  const [referenceColor, setReferenceColor] = useState("#d6ec32");

  return (
    <BarColorContext.Provider
      value={{
        unsortedColor,
        setUnsortedColor,
        selectedColor,
        setSelectedColor,
        sortedColor,
        setSortedColor,
        referenceColor,
        setReferenceColor,
      }}
    >
      {children}
    </BarColorContext.Provider>
  );
};

const useBarColorContext = () => useContext(BarColorContext);

export { BarColorProvider, useBarColorContext };
