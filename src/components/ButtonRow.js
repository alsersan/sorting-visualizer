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

const ButtonRow = ({
  speed,
  array,
  arr,
  isRunning,
  setIsRunning,
  isSorted,
  setIsSorted,
}) => {
  return (
    <StyledButtonRow>
      <Button>
        <FaStepBackward size={30} />
      </Button>
      {isRunning ? (
        <Button
          onClick={() => {
            stop();
            setIsRunning(false);
          }}
        >
          <FaPause size={30} />
        </Button>
      ) : (
        <Button
          onClick={() => {
            if (!isSorted) {
              recursiveBubbleSort(speed, speed, arr, setIsSorted);
              setIsRunning(true);
            }
          }}
        >
          <FaPlay size={30} />
        </Button>
      )}
      <Button
        onClick={() => {
          if (!isSorted) {
            stop();
            // Instant first execution but delayed the following (around 3h)
            recursiveBubbleSort(1, 9999999, arr, setIsSorted);
          }
        }}
      >
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
