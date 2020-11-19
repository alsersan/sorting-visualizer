import React from "react";

import Selector from "./Selector";

const SizeSelector = ({ size, setSize, hasStarted }) => {
  return (
    <Selector
      hasStarted={hasStarted}
      mainText="Size"
      secondaryText={size}
      max="110"
      min="9"
      value={size}
      step="1"
      onChange={(e) => {
        setSize(parseInt(e.target.value, 10));
      }}
    />
  );
};

export default SizeSelector;
