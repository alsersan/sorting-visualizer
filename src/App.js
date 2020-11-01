import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import BarChart from "./components/BarChart";
import ButtonRow from "./components/ButtonRow";
import {
  recursiveBubbleSort,
  stop,
  getArray,
} from "./algorithms/recursiveSortingAlgorithms";

const Container = styled.div`
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(9);
  const [array, setArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

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
      <Header speed={speed} setSpeed={setSpeed} size={size} setSize={setSize} />
      <Container>
        <BarChart array={array} />
        <ButtonRow
          speed={speed}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isSorted={isSorted}
          setIsSorted={setIsSorted}
        />
      </Container>
    </React.Fragment>
  );
};

export default App;
