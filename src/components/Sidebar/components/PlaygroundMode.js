import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import AlgorithmOptions from "./AlgorithmOptions";

const PlaygroundMode = ({ size, setSize, speed, setSpeed }) => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <AlgorithmOptions />
      <SizeSelector size={size} setSize={setSize} />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
    </React.Fragment>
  );
};

export default PlaygroundMode;
