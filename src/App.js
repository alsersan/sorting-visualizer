import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Sidebar from "./components/Sidebar";
import {
  recursiveBubbleSort,
  stop,
  getArray,
} from "./algorithms/recursiveSortingAlgorithms";
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
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(9);
  const [array, setArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const arr = [];
    const max = 100;
    const min = 5;
    for (let i = 0; i < size; i++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(num);
    }
    setArray(arr);
    getArray(arr);
  }, [size]);

  useEffect(() => {
    let timeout;
    if (isRunning && !isSorted) {
      timeout = setTimeout(() => {
        stop();
        recursiveBubbleSort(speed, speed, setIsSorted);
      }, 150);
    }
    return () => clearTimeout(timeout);
  }, [speed]);

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
            array={array}
            speed={speed}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            isSorted={isSorted}
            setIsSorted={setIsSorted}
            hasStarted={hasStarted}
            setHasStarted={setHasStarted}
          />
          <Sidebar
            hasStarted={hasStarted}
            speed={speed}
            setSpeed={setSpeed}
            size={size}
            setSize={setSize}
          />
        </MainContainer>
      </SortingOptionsProvider>
    </React.Fragment>
  );
};

export default App;
