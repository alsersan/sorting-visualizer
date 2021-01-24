import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
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
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.spacing};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.tablet} {
    height: 100vh;
    flex-direction: row;
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
                    <BarChart />
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
