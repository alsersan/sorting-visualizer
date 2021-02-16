import React from 'react';
import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaStepForward } from 'react-icons/fa';
import { FaStepBackward } from 'react-icons/fa';

import Button from './components/Button';
import ComponentContainer from '../ComponentContainer';
import * as bubble from 'algorithms/bubbleSort';
import * as selection from 'algorithms/selectionSort';
import * as insertion from 'algorithms/insertionSort';
import * as merge from 'algorithms/mergeSort';
import * as quick from 'algorithms/quickSort';
import * as heap from 'algorithms/heapSort';
import { stopAlgorithm } from 'algorithms/utils';
import { useAlgorithmContext } from 'contexts/AlgorithmContext';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonRow = () => {
  const {
    isRunning,
    setIsRunning,
    isSorted,
    hasStarted,
    setHasStarted,
    activeOption,
  } = useAlgorithmContext();

  const algorithms = [
    bubble.bubbleSort,
    selection.selectionSort,
    insertion.insertionSort,
    merge.mergeSort,
    quick.quickSort,
    heap.heapSort,
  ];
  const stepsForward = [
    bubble.bubbleSortStepForward,
    selection.selectionSortStepForward,
    insertion.insertionSortStepForward,
    merge.mergeSortStepForward,
    quick.quickSortStepForward,
    heap.heapSortStepForward,
  ];
  const stepsBack = [
    bubble.bubbleSortStepBack,
    selection.selectionSortStepBack,
    insertion.insertionSortStepBack,
    merge.mergeSortStepBack,
    quick.quickSortStepBack,
    heap.heapSortStepBack,
  ];

  return (
    <ComponentContainer title="Controls">
      <FlexWrapper>
        <Button
          hasStarted={hasStarted}
          isRunning={isRunning}
          disabled={isRunning || !hasStarted}
          onClick={() => stepsBack[activeOption](setHasStarted)}
          aria-label="Step Back"
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
            aria-label="Pause"
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
              algorithms[activeOption]();
            }}
            aria-label="Play"
          >
            <FaPlay size={30} />
          </Button>
        )}
        <Button
          hasStarted={hasStarted}
          isRunning={isRunning}
          disabled={isRunning || isSorted}
          onClick={() => {
            stepsForward[activeOption](1);
            setHasStarted(true);
          }}
          aria-label="Step Forward"
        >
          <FaStepForward size={30} />
        </Button>
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default ButtonRow;
