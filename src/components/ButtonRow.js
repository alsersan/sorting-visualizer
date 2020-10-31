import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import {
  recursiveBubbleSort,
  stop,
  oneStepBack,
  oneStepForward,
} from "../algorithms/recursiveSortingAlgorithms";

const StyledButtonRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 50px;
  cursor: ${(props) => (props.isRunning ? "auto" : "pointer") || "pointer"};
  border: none;
  outline: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  background-color: transparent;
  margin: 0 0.5rem;
`;

const ButtonRow = ({
  speed,
  isRunning,
  setIsRunning,
  isSorted,
  setIsSorted,
}) => {
  return (
    <StyledButtonRow>
      <Button
        isRunning={isRunning}
        disabled={isRunning}
        onClick={() => oneStepBack()}
      >
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
              recursiveBubbleSort(speed, speed, setIsSorted);
              setIsRunning(true);
            }
          }}
        >
          <FaPlay size={30} />
        </Button>
      )}
      <Button
        isRunning={isRunning}
        disabled={isRunning}
        onClick={() => {
          if (!isSorted) {
            // Instant first execution but delayed the following (around 3h)
            oneStepForward(1, 9999999, setIsSorted);
          }
        }}
      >
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
