import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import AlgorithmOptions from "./AlgorithmOptions";

const PlaygroundMode = ({ size, setSize, speed, setSpeed, hasStarted }) => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <AlgorithmOptions hasStarted={hasStarted} />
      <SizeSelector size={size} setSize={setSize} hasStarted={hasStarted} />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
    </React.Fragment>
  );
};

export default PlaygroundMode;
