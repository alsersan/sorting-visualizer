import React from "react";

import Selector from "./Selector";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const SizeSelector = () => {
  const { size, setSize } = useSortingOptionsContext();
  const { hasStarted } = useAlgorithmContext();

  return (
    <Selector
      hasStarted={hasStarted}
      mainText="Size"
      secondaryText={size}
      max="25"
      min="5"
      value={size}
      step="1"
      onChange={(e) => {
        setSize(parseInt(e.target.value, 10));
      }}
    />
  );
};

export default SizeSelector;
