import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    fontFamily: "Ubuntu, sans-serif",
    spacing: "0.6rem",
    borderRadius: "4px",
  },
  backgroundColor: {
    primary: "#d1cfc7",
    secondary: "#f6f6f6",
  },
};

const StyledThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
