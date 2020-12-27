import React, { useEffect, useState } from "react";

import Selector from "./Selector";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

const SpeedSelector = () => {
  const { speed, setSpeed } = useSortingOptionsContext();
  const [value, setValue] = useState(speed);
  const maxDelay = 700;

  const speedPercentageCalculator = (min, max) => {
    // maxDelay - value to get the correct position of the slider
    const input = maxDelay - value;
    return Math.round(((input - min) * 100) / (max - min));
  };
  // min value 1% smaller to make the showed min percentage 1% instead of 0%
  const speedPercentage = `${speedPercentageCalculator(
    -maxDelay / 100,
    maxDelay
  )}%`;

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setSpeed(value);
    }, 200);
    return () => clearTimeout(timeout);
  });

  return (
    <Selector
      mainText="Speed"
      secondaryText={speedPercentage}
      max={maxDelay}
      min="0"
      // maxDelay - value to get the correct position of the slider
      value={maxDelay - value}
      step="25"
      // maxDelay - value to set the real speed (in ms)
      onChange={(e) => setValue(maxDelay - parseInt(e.target.value, 10))}
    />
  );
};

export default SpeedSelector;
