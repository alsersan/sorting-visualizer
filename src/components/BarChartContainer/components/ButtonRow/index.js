import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import Button from "./components/Button";
import * as bubble from "../../../../algorithms/recursiveBubbleSort";
import * as selection from "../../../../algorithms/recursiveSelectionSort";
import * as insertion from "../../../../algorithms/recursiveInsertionSort";
import * as merge from "../../../../algorithms/mergeSort";
import * as quick from "../../../../algorithms/quickSort";
import { stopAlgorithm } from "../../../../algorithms/utils";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";

const StyledButtonRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
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
    merge.mergeSort,
    quick.quickSort,
  ];
  const stepsForward = [
    bubble.bubbleSortStepForward,
    selection.selectionSortStepForward,
    insertion.insertionSortStepForward,
    merge.mergeSortStepForward,
    quick.quickSortStepForward,
  ];
  const stepsBack = [
    bubble.bubbleSortStepBack,
    selection.selectionSortStepBack,
    insertion.insertionSortStepBack,
    merge.mergeSortStepBack,
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
        <FaStepForward size={30} />
      </Button>
    </StyledButtonRow>
  );
};

export default ButtonRow;
