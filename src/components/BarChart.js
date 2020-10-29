import React from "react";
import styled from "styled-components";
import Bar from "./Bar";
import { bubbleSort, selectionSort } from "../algorithms/sortingAlgorithms";

const Container = styled.div`
  height: 35rem;
  width: 65rem;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const BarChart = ({ speed, array }) => {
  return (
    <Container>
      {array.map((number, index) => (
        <Bar number={number} key={index} className="bar" />
      ))}
    </Container>
  );
};

export default BarChart;
