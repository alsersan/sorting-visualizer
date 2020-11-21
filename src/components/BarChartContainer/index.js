import React from "react";
import styled from "styled-components";

import BarChart from "./components/BarChart";
import ButtonRow from "./components/ButtonRow";

const Container = styled.div`
  height: 100%;
  width: 70rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  margin-right: ${(props) => props.theme.main.spacing};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${(props) => props.theme.main.borderRadius};
`;

const BarChartContainer = () => {
  return (
    <Container>
      <BarChart />
      <ButtonRow />
    </Container>
  );
};

export default BarChartContainer;
