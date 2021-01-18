import React, { useState, useContext } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";

const ThemeTogglerContext = React.createContext();

const ThemeTogglerProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState(
    "SortingVisualizer_theme",
    "light"
  );

  const value = { theme, setTheme };

  return (
    <ThemeTogglerContext.Provider value={value}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

const useThemeTogglerContext = () => useContext(ThemeTogglerContext);

export { ThemeTogglerProvider, useThemeTogglerContext };
