import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Sidebar from "./components/Sidebar";
import BarChartContainer from "./components/BarChartContainer";
import StyledThemeProvider from "./styles/StyledThemeProvider";

import { SortingOptionsProvider } from "./contexts/SortingOptionsContext";
import { AlgorithmProvider } from "./contexts/AlgorithmContext";

const MainContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.spacing};
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [option, setOption] = useState("light");
  return (
    <React.Fragment>
      <StyledThemeProvider option={option}>
        <GlobalStyle />
        <AlgorithmProvider>
          <SortingOptionsProvider>
            <MainContainer>
              <button
                onClick={() => setOption(option === "light" ? "dark" : "light")}
              >
                CHANGE THEME
              </button>
              <BarChartContainer option={option} />
              <Sidebar />
            </MainContainer>
          </SortingOptionsProvider>
        </AlgorithmProvider>
      </StyledThemeProvider>
    </React.Fragment>
  );
};

export default App;
