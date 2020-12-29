import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import RippleEffect from "../../RippleEffect";
import {
  recursiveBubbleSort,
  bubbleSortStepBack,
  bubbleSortStepForward,
} from "../../../algorithms/recursiveBubbleSort";

import {
  recursiveSelectionSort,
  selectionSortStepForward,
  selectionSortStepBack,
} from "../../../algorithms/recursiveSelectionSort";

import {
  recursiveInsertionSort,
  insertionSortStepForward,
  insertionSortStepBack,
} from "../../../algorithms/recursiveInsertionSort";

import { stopAlgorithm } from "../../../algorithms/utils";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
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
  const { activeOption } = useSortingOptionsContext();
  const {
    isRunning,
    setIsRunning,
    isSorted,
    setIsSorted,
    hasStarted,
    setHasStarted,
  } = useAlgorithmContext();

  const algorithms = [
    recursiveBubbleSort,
    recursiveSelectionSort,
    recursiveInsertionSort,
  ];
  const stepsForward = [
    bubbleSortStepForward,
    selectionSortStepForward,
    insertionSortStepForward,
  ];
  const stepsBack = [
    bubbleSortStepBack,
    selectionSortStepBack,
    insertionSortStepBack,
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
            algorithms[activeOption](setIsSorted);
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
