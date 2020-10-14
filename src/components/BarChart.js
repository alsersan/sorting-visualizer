import React from "react";
import styled from "styled-components";
import Bar from "./Bar";

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
];

const BarChart = () => {
  return (
    <Container>
      {numbers.map((number) => (
        <Bar height={number} number={number} />
      ))}
    </Container>
  );
};

export default BarChart;
