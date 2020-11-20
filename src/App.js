import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Sidebar from "./components/Sidebar";
// import {
//   recursiveBubbleSort,
//   stop,
//   getArray,
// } from "./algorithms/recursiveSortingAlgorithms";
import BarChartContainer from "./components/BarChartContainer";

import { SortingOptionsProvider } from "./contexts/SortingOptionsContext";

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
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isSorted) {
      setIsRunning(false);
    }
  }, [isSorted]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <SortingOptionsProvider>
        <MainContainer>
          <BarChartContainer
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            isSorted={isSorted}
            setIsSorted={setIsSorted}
            hasStarted={hasStarted}
            setHasStarted={setHasStarted}
          />
          <Sidebar hasStarted={hasStarted} />
        </MainContainer>
      </SortingOptionsProvider>
    </React.Fragment>
  );
};

export default App;
