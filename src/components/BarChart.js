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

const timer = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const bubbleSort = async (arr) => {
  for (let i = arr.length - 1; i > 1; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      const bars = document.querySelectorAll(".bar");
      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
      await timer(5);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        bars[j].style.height = `${bars[j + 1].textContent}%`;
        bars[j + 1].style.height = `${bars[j].textContent}%`;
        [
          bars[j].firstElementChild.textContent,
          bars[j + 1].firstElementChild.textContent,
        ] = [
          bars[j + 1].firstElementChild.textContent,
          bars[j].firstElementChild.textContent,
        ];
        noSwaps = false;
        await timer(5);
      }

      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
    }
    if (noSwaps) break;
  }
  // return arr;
};

const BarChart = () => {
  return (
    <Container>
      {numbers.map((number, index) => (
        <Bar number={number} key={index} className="bar" />
      ))}
      <button onClick={() => bubbleSort(numbers)}>Click</button>
    </Container>
  );
};

export default BarChart;
