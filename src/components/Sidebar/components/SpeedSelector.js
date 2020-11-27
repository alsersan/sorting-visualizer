import React from "react";

import Selector from "./Selector";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

const SpeedSelector = () => {
  const { speed, setSpeed } = useSortingOptionsContext();
  const maxDelay = 700;

  const speedPercentageCalculator = (min, max) => {
    // maxDelay - speed to get the correct position of the slider
    const input = maxDelay - speed;
    return Math.round(((input - min) * 100) / (max - min));
  };
  // min value 1% smaller to make the showed min percentage 1% instead of 0%
  const speedPercentage = `${speedPercentageCalculator(
    -maxDelay / 100,
    maxDelay
  )}%`;

  return (
    <Selector
      mainText="Speed"
      secondaryText={speedPercentage}
      max={maxDelay}
      min="0"
      // maxDelay - speed to get the correct position of the slider
      value={maxDelay - speed}
      step="25"
      // maxDelay - value to set the real speed (in ms)
      onChange={(e) => setSpeed(maxDelay - parseInt(e.target.value, 10))}
    />
  );
};

export default SpeedSelector;
