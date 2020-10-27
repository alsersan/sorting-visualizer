import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import {
  recursiveBubbleSort,
  stop,
} from "../algorithms/recursiveSortingAlgorithms";

const StyledButtonRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0 0.5rem;
`;

const ButtonRow = ({ speed, array, arr, setStart, setIsSorted }) => {
  return (
    <StyledButtonRow>
      <Button>
        <FaStepBackward size={30} />
      </Button>
      <Button
        onClick={() => {
          recursiveBubbleSort(speed, arr, setIsSorted);
          setStart(true);
        }}
      >
        <FaPlay size={30} />
      </Button>
      {console.log(speed)}
      <Button
        onClick={() => {
          stop();
          setStart(false);
        }}
      >
        <FaPause size={30} />
      </Button>
      <Button>
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
