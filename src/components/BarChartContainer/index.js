import React from "react";
import styled from "styled-components";

import BarChart from "./components/BarChart";
import ButtonRow from "./components/ButtonRow";

const Container = styled.div`
  height: 100%;
  width: 70rem;
  background-color: #f6f6f6;
  margin-right: 0.6rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BarChartContainer = ({
  array,
  speed,
  isRunning,
  setIsRunning,
  isSorted,
  setIsSorted,
  hasStarted,
  setHasStarted,
}) => {
  return (
    <Container>
      <BarChart array={array} />
      <ButtonRow
        speed={speed}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        hasStarted={hasStarted}
        setHasStarted={setHasStarted}
      />
    </Container>
  );
};

export default BarChartContainer;