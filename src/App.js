import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Sidebar from "./components/Sidebar";
import BarChartContainer from "./components/BarChartContainer";
import StyledThemeProvider from "./StyledThemeProvider";

import { SortingOptionsProvider } from "./contexts/SortingOptionsContext";
import { AlgorithmProvider } from "./contexts/AlgorithmContext";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  font-family: ${(props) => props.theme.main.fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

const MainContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.main.spacing};
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <StyledThemeProvider>
        <GlobalStyle />
        <AlgorithmProvider>
          <SortingOptionsProvider>
            <MainContainer>
              <BarChartContainer />
              <Sidebar />
            </MainContainer>
          </SortingOptionsProvider>
        </AlgorithmProvider>
      </StyledThemeProvider>
    </React.Fragment>
  );
};

export default App;
