import React from "react";
import styled from "styled-components";

import BarChart from "./components/BarChart";
import Logo from "./components/Logo";

const Container = styled.div`
  height: 100%;
  width: 70rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  margin-right: ${(props) => props.theme.spacing};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const BarChartContainer = () => {
  return (
    <Container>
      {console.log("BAR CHART CONTAINER")}
      <Logo />
      <BarChart />
    </Container>
  );
};

export default BarChartContainer;
