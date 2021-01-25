import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import BarChartContainer from "./BarChartContainer";
import { devices } from "../styles/deviceSizes";
import StyledThemeProvider from "../styles/StyledThemeProvider";
import { GlobalStyle } from "../styles/GlobalStyle";
import { AlgorithmProvider } from "../contexts/AlgorithmContext";
import { ArraySizeProvider } from "../contexts/ArraySizeContext";
import { ThemeTogglerProvider } from "../contexts/ThemeTogglerContext";
import { BarColorProvider } from "../contexts/BarColorContext";
import { SpeedProvider } from "../contexts/SpeedContext";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.spacingSmall};
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }
  @media ${devices.laptop} {
    padding: ${(props) => props.theme.spacingBig};
  }
`;

const App = () => {
  return (
    <React.Fragment>
      {console.log("RERENDER APP")}
      <ThemeTogglerProvider>
        <StyledThemeProvider>
          <GlobalStyle />
          <AlgorithmProvider>
            <ArraySizeProvider>
              <SpeedProvider>
                <BarColorProvider>
                  <MainContainer>
                    {console.log("MAIN CONTAINER")}
                    <BarChartContainer />
                    <Sidebar />
                  </MainContainer>
                </BarColorProvider>
              </SpeedProvider>
            </ArraySizeProvider>
          </AlgorithmProvider>
        </StyledThemeProvider>
      </ThemeTogglerProvider>
    </React.Fragment>
  );
};

export default App;
