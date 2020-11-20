import React from "react";
import styled from "styled-components";
import Bar from "./Bar";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

const Container = styled.div`
  height: 70%;
  max-height: 35rem;
  width: 90%;
  max-width: 60rem;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const BarChart = () => {
  const { array } = useSortingOptionsContext();

  return (
    <Container>
      {array.map((number, index) => (
        <Bar number={number} key={index} className="bar" />
      ))}
    </Container>
  );
};

export default BarChart;
