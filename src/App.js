import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Sidebar from "./components/Sidebar";
import BarChartContainer from "./components/BarChartContainer";

import { SortingOptionsProvider } from "./contexts/SortingOptionsContext";
import { AlgorithmProvider } from "./contexts/AlgorithmContext";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const MainContainer = styled.div`
  height: 100vh;
  background-color: #d1cfc7;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AlgorithmProvider>
        <SortingOptionsProvider>
          <MainContainer>
            <BarChartContainer />
            <Sidebar />
          </MainContainer>
        </SortingOptionsProvider>
      </AlgorithmProvider>
    </React.Fragment>
  );
};

export default App;
