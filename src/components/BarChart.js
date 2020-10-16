import React, { useEffect, useState } from "react";
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

const timer = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const bubbleSort = async (arr) => {
  for (let i = arr.length - 1; i > 1; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      await timer(400);
      console.log(arr, arr[j], arr[j + 1]);
      const bars = document.querySelectorAll(".bar");
      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }

      await timer(400);
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
    }
    if (noSwaps) break;
  }
  // return arr;
};

const BarChart = () => {
  // const [bars, setBars] = useState([]);

  return (
    <Container>
      {numbers.map((number, index) => (
        <Bar height={number} number={number} key={index} className="bar" />
      ))}
      <button onClick={() => bubbleSort(numbers)}>Click</button>
    </Container>
  );
};

export default BarChart;
