import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import BarChart from "./components/BarChart";
import ButtonRow from "./components/ButtonRow";

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const arrayTest = [23, 54, 34, 12, 43, 23, 65, 45, 34];

const App = () => {
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(50);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const arr = [];
    const max = 100;
    const min = 5;
    for (let i = 0; i < size; i++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(num);
    }
    setArray(arr);
  }, [size]);

  return (
    <React.Fragment>
      <Header speed={speed} setSpeed={setSpeed} size={size} setSize={setSize} />
      <Container>
        <BarChart speed={speed} array={array} arr={arrayTest} />
        <ButtonRow speed={speed} array={array} arr={arrayTest} />
      </Container>
    </React.Fragment>
  );
};

export default App;
