import React from "react";
import styled from "styled-components";
import Bar from "./Bar";
import { bubbleSort, selectionSort } from "../algorithms/sortingAlgorithms";

const Container = styled.div`
  height: 700px;
  width: 1200px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const numbers = [
  32,
  43,
  76,
  45,
  76,
  23,
  21,
  56,
  43,
  23,
  76,
  56,
  23,
  45,
  87,
  56,
  34,
  34,
  40,
  23,
  65,
  76,
  78,
  34,
  76,
  98,
  43,
  67,
  54,
  98,
  45,
  76,
  34,
  87,
  54,
  98,
  56,
  87,
  43,
  12,
  32,
  15,
  72,
  48,
  92,
  46,
  87,
  45,
];

const BarChart = () => {
  return (
    <Container>
      {numbers.map((number, index) => (
        <Bar number={number} key={index} className="bar" />
      ))}
      <button onClick={() => selectionSort(numbers)}>Click</button>
    </Container>
  );
};

export default BarChart;
