import React from "react";
import styled from "styled-components";

import { useThemeTogglerContext } from "../../../contexts/ThemeTogglerContext";

const ThemeToggler = () => {
  const { theme, setTheme } = useThemeTogglerContext();
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default ThemeToggler;
