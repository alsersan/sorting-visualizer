import React, { useEffect } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

import RippleEffect from "../../RippleEffect";
import {
  recursiveBubbleSort,
  bubbleSortStop,
  bubbleSortStepBack,
  bubbleSortStepForward,
} from "../../../algorithms/recursiveBubbleSort";

import {
  recursiveSelectionSort,
  selectionSortStepForward,
  selectionSortStepBack,
  selectionSortStop,
} from "../../../algorithms/recursiveSelectionSort";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

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
    speed,
    color1,
    color2,
    color3,
    color4,
    activeOption,
  } = useSortingOptionsContext();
  const {
    isRunning,
    setIsRunning,
    isSorted,
    setIsSorted,
    hasStarted,
    setHasStarted,
  } = useAlgorithmContext();

  useEffect(() => {
    let timeout;
    if (isRunning && !isSorted) {
      timeout = setTimeout(() => {
        if (activeOption === 0) {
          bubbleSortStop();
          recursiveBubbleSort(
            speed,
            speed,
            setIsSorted,
            color1,
            color2,
            color3
          );
        } else if (activeOption === 1) {
          selectionSortStop();
          recursiveSelectionSort(
            speed,
            speed,
            setIsSorted,
            color1,
            color4,
            color2,
            color3
          );
        }
      }, 150);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <StyledButtonRow>
      <Button
        hasStarted={hasStarted}
        isRunning={isRunning}
        disabled={isRunning || !hasStarted}
        onClick={() => {
          setIsSorted(false);
          if (activeOption === 0) {
            bubbleSortStepBack(setHasStarted, color1, color2);
          } else if (activeOption === 1) {
            selectionSortStepBack(setHasStarted, color1, color4, color2);
          }
        }}
      >
        <RippleEffect disabled={isRunning || !hasStarted} />
        <FaStepBackward size={30} />
      </Button>
      {isRunning ? (
        <Button
          hasStarted={hasStarted}
          onClick={() => {
            if (activeOption === 0) {
              bubbleSortStop();
            } else if (activeOption === 1) {
              selectionSortStop();
            }

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
            if (!isSorted) {
              setHasStarted(true);
              setIsRunning(true);
              if (activeOption === 0) {
                recursiveBubbleSort(
                  speed,
                  speed,
                  setIsSorted,
                  color1,
                  color2,
                  color3
                );
              } else if (activeOption === 1) {
                recursiveSelectionSort(
                  speed,
                  speed,
                  setIsSorted,
                  color1,
                  color4,
                  color2,
                  color3
                );
              }
            }
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
          if (!isSorted) {
            // Instant first execution but delayed the following (around 3h)
            if (activeOption === 0) {
              bubbleSortStepForward(
                1,
                9999999,
                setIsSorted,
                color1,
                color2,
                color3
              );
            } else if (activeOption === 1) {
              selectionSortStepForward(
                1,
                9999999,
                setIsSorted,
                color1,
                color4,
                color2,
                color3
              );
            }
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
