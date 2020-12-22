import React, { useState, useContext } from "react";

const ThemeTogglerContext = React.createContext();

const ThemeTogglerProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeTogglerContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

const useThemeTogglerContext = () => useContext(ThemeTogglerContext);

export { ThemeTogglerProvider, useThemeTogglerContext };
