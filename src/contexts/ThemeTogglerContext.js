import React, { useState, useContext } from "react";

const ThemeTogglerContext = React.createContext();

const ThemeTogglerProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const value = { theme, setTheme };

  return (
    <ThemeTogglerContext.Provider value={value}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

const useThemeTogglerContext = () => useContext(ThemeTogglerContext);

export { ThemeTogglerProvider, useThemeTogglerContext };
