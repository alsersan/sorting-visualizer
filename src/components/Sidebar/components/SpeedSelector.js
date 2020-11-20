import React from "react";

import Selector from "./Selector";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

const SpeedSelector = () => {
  const { speed, setSpeed } = useSortingOptionsContext();

  const speedPercentageCalculator = (min, max) => {
    // 450 - speed to get the correct position of the slider
    const input = 450 - speed;
    return Math.round((((input - min) * 100) / (max - min)) * 10) / 10;
  };
  const speedPercentage = `${speedPercentageCalculator(-4.5, 449)}%`;

  return (
    <Selector
      mainText="Speed"
      secondaryText={speedPercentage}
      max="449"
      min="0"
      // 450 - speed to get the correct position of the slider
      value={450 - speed}
      step="25"
      // 450 - value to set the real speed (in ms)
      onChange={(e) => setSpeed(450 - parseInt(e.target.value, 10))}
    />
  );
};

export default SpeedSelector;
