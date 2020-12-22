import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, main } from "./themes";
import { useThemeTogglerContext } from "../contexts/ThemeTogglerContext";

const StyledThemeProvider = ({ children }) => {
  const { theme } = useThemeTogglerContext();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{ ...selectedTheme, ...main }}>
      {children}
    </ThemeProvider>
  );
};

export default StyledThemeProvider;
