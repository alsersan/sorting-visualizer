import React from "react";
import styled from "styled-components";

import BarChart from "./components/BarChart";
import ButtonRow from "./components/ButtonRow";
import Logo from "./components/Logo";

import { useThemeTogglerContext } from "../../contexts/ThemeTogglerContext";

const Container = styled.div`
  height: 100%;
  width: 70rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  margin-right: ${(props) => props.theme.spacing};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const BarChartContainer = () => {
  const { theme, setTheme } = useThemeTogglerContext();
  return (
    <Container>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        CHANGE THEME
      </button>
      <Logo />
      <BarChart />
      <ButtonRow />
    </Container>
  );
};

export default BarChartContainer;
