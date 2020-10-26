import React from "react";
import styled from "styled-components";
import Bar from "./Bar";
import { bubbleSort, selectionSort } from "../algorithms/sortingAlgorithms";
import {
  recursiveBubbleSort,
  stop,
} from "../algorithms/recursiveSortingAlgorithms";

const Container = styled.div`
  height: 700px;
  width: 1200px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const arr = [23, 54, 34, 12, 43, 23, 65, 45, 34];

const BarChart = ({ speed, array }) => {
  return (
    <Container>
      {arr.map((number, index) => (
        <Bar number={number} key={index} className="bar" />
      ))}
      <button onClick={() => recursiveBubbleSort(speed, arr)}>Start</button>
      {console.log(speed)}
      <button onClick={() => stop()}>Stop</button>
    </Container>
  );
};

export default BarChart;
