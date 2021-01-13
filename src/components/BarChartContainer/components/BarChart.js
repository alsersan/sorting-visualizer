import React from "react";
import styled from "styled-components";
import Bar from "./Bar";

import { useArraySizeContext } from "../../../contexts/ArraySizeContext";

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
