import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import BarChart from "./components/BarChart";

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [speed, setSpeed] = useState(400);
  const [size, setSize] = useState(25);
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
        <BarChart speed={speed} size={size} array={array} />
      </Container>
    </React.Fragment>
  );
};

export default App;
