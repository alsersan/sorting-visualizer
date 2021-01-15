import React from "react";
import styled from "styled-components";

import Bar from "./components/Bar";

import { useArraySizeContext } from "../../contexts/ArraySizeContext";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  margin-right: ${(props) => props.theme.spacing};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1%;
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
