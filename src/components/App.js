import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import StyledThemeProvider from "../styles/StyledThemeProvider";
import { GlobalStyle } from "../styles/GlobalStyle";
import { AlgorithmProvider } from "../contexts/AlgorithmContext";
import { ArraySizeProvider } from "../contexts/ArraySizeContext";
import { ThemeTogglerProvider } from "../contexts/ThemeTogglerContext";
import { BarColorProvider } from "../contexts/BarColorContext";

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
            <ArraySizeProvider>
              <BarColorProvider>
                <MainContainer>
                  {console.log("MAIN CONTAINER")}
                  <BarChart />
                  <Sidebar />
                </MainContainer>
              </BarColorProvider>
            </ArraySizeProvider>
          </AlgorithmProvider>
        </StyledThemeProvider>
      </ThemeTogglerProvider>
    </React.Fragment>
  );
};

export default App;
