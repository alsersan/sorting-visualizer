import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, main } from "./themes";

const StyledThemeProvider = ({ children, option }) => {
  const miau = option === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={{ ...miau, ...main }}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
