import React from "react";
import styled from "styled-components";
import Bar from "./Bar";

import { useArraySizeContext } from "../../../contexts/ArraySizeContext";

const Container = styled.div`
  height: 88%;
  width: 100%;
  padding: 1%;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const BarChart = () => {
  const { array, size } = useArraySizeContext();

  return (
    <Container>
      {console.log("RERENDER BAR CHART")}
      {array.map((number, index) => (
        <Bar
          number={number}
          key={`${array} ${index}`}
          size={size}
          className="bar unsorted"
        />
      ))}
    </Container>
  );
};

export default BarChart;

// max-width: 60rem;
// max-height: 35rem;
