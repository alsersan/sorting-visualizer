import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import RippleEffect from "../../RippleEffect";
import * as bubble from "../../../algorithms/recursiveBubbleSort";
import * as selection from "../../../algorithms/recursiveSelectionSort";
import * as insertion from "../../../algorithms/recursiveInsertionSort";
import * as merge from "../../../algorithms/mergeSort";
import { stopAlgorithm } from "../../../algorithms/utils";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const StyledButtonRow = styled.div`
  margin-top: 2rem;
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
      ? props.theme.button.disabledBoxShadow
      : props.theme.button.boxShadow};
  background-color: transparent;
  margin: 0 0.5rem;
  animation: ${({ hasStarted, disabled }) =>
    !hasStarted && !disabled ? "bounce 0.8s ease 0.5s infinite" : "none"};

  @keyframes bounce {
    50% {
      transform: scale(0.9, 1.1) translateY(-0.8rem);
    }
  }
`;

const ButtonRow = () => {
  const {
    isRunning,
    setIsRunning,
    isSorted,
    setIsSorted,
    hasStarted,
    setHasStarted,
    activeOption,
  } = useAlgorithmContext();

  const algorithms = [
    bubble.recursiveBubbleSort,
    selection.recursiveSelectionSort,
    insertion.recursiveInsertionSort,
    merge.merge2,
  ];
  const stepsForward = [
    bubble.bubbleSortStepForward,
    selection.selectionSortStepForward,
    insertion.insertionSortStepForward,
  ];
  const stepsBack = [
    bubble.bubbleSortStepBack,
    selection.selectionSortStepBack,
    insertion.insertionSortStepBack,
  ];

  return (
    <StyledButtonRow>
      {console.log("BUTTON ROW")}
      <Button
        hasStarted={hasStarted}
        isRunning={isRunning}
        disabled={isRunning || !hasStarted}
        onClick={() => {
          setIsSorted(false);
          stepsBack[activeOption](setHasStarted);
        }}
      >
        <RippleEffect disabled={isRunning || !hasStarted} />
        <FaStepBackward size={30} />
      </Button>
      {isRunning ? (
        <Button
          hasStarted={hasStarted}
          onClick={() => {
            stopAlgorithm();
            setIsRunning(false);
          }}
        >
          <RippleEffect />
          <FaPause size={30} />
        </Button>
      ) : (
        <Button
          hasStarted={hasStarted}
          disabled={isSorted}
          onClick={() => {
            setHasStarted(true);
            setIsRunning(true);
            // algorithms[activeOption](setIsSorted);
            algorithms[activeOption]();
          }}
        >
          <RippleEffect disabled={isSorted} />
          <FaPlay size={30} />
        </Button>
      )}
      <Button
        hasStarted={hasStarted}
        isRunning={isRunning}
        disabled={isRunning || isSorted}
        onClick={() => {
          stepsForward[activeOption](setIsSorted, 1);
          setHasStarted(true);
        }}
      >
        <RippleEffect disabled={isRunning || isSorted} />
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
