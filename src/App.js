import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Sidebar from "./components/Sidebar";
import BarChartContainer from "./components/BarChartContainer";
import StyledThemeProvider from "./styles/StyledThemeProvider";

import { SortingOptionsProvider } from "./contexts/SortingOptionsContext";
import { AlgorithmProvider } from "./contexts/AlgorithmContext";
import { ThemeTogglerProvider } from "./contexts/ThemeTogglerContext";

const MainContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.spacing};
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <React.Fragment>
      {console.log("RERENDER APP")}
      <ThemeTogglerProvider>
        <StyledThemeProvider>
          <GlobalStyle />
          <AlgorithmProvider>
            <SortingOptionsProvider>
              <MainContainer>
                {console.log("MAIN CONTAINER")}
                <BarChartContainer />
                <Sidebar />
              </MainContainer>
            </SortingOptionsProvider>
          </AlgorithmProvider>
        </StyledThemeProvider>
      </ThemeTogglerProvider>
    </React.Fragment>
  );
};

export default App;
