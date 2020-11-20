import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import AlgorithmOptions from "./AlgorithmOptions";
import ColorSelection from "./ColorSelection";

const PlaygroundMode = ({ size, setSize, speed, setSpeed, hasStarted }) => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <AlgorithmOptions hasStarted={hasStarted} />
      <SizeSelector size={size} setSize={setSize} hasStarted={hasStarted} />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
      <ColorSelection />
    </React.Fragment>
  );
};

export default PlaygroundMode;
