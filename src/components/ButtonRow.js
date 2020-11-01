import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import RippleEffect from "./RippleEffect";
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
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  border: none;
  outline: none;
  box-shadow: ${(props) =>
    props.disabled
      ? "0 0 0.5rem rgba(0, 0, 0, 0.1)"
      : "0 0 0.5rem rgba(0, 0, 0, 0.3)"};
  background-color: transparent;
  margin: 0 0.5rem;
`;

const ButtonRow = ({
  speed,
  isRunning,
  setIsRunning,
  isSorted,
  setIsSorted,
  hasStarted,
  setHasStarted,
}) => {
  return (
    <StyledButtonRow>
      <Button
        isRunning={isRunning}
        disabled={isRunning || !hasStarted}
        onClick={() => {
          setIsSorted(false);
          oneStepBack(setHasStarted);
        }}
      >
        <RippleEffect disabled={isRunning || !hasStarted} />
        <FaStepBackward size={30} />
      </Button>
      {isRunning ? (
        <Button
          onClick={() => {
            stop();
            setIsRunning(false);
          }}
        >
          <RippleEffect />
          <FaPause size={30} />
        </Button>
      ) : (
        <Button
          disabled={isSorted}
          onClick={() => {
            if (!isSorted) {
              recursiveBubbleSort(speed, speed, setIsSorted);
              setHasStarted(true);
              setIsRunning(true);
            }
          }}
        >
          <RippleEffect disabled={isSorted} />
          <FaPlay size={30} />
        </Button>
      )}
      <Button
        isRunning={isRunning}
        disabled={isRunning || isSorted}
        onClick={() => {
          if (!isSorted) {
            // Instant first execution but delayed the following (around 3h)
            oneStepForward(1, 9999999, setIsSorted);
            setHasStarted(true);
          }
        }}
      >
        <RippleEffect disabled={isRunning || isSorted} />
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
