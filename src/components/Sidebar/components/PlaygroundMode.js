import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";

const PlaygroundMode = ({ size, setSize, speed, setSpeed }) => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <SizeSelector size={size} setSize={setSize} />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
    </React.Fragment>
  );
};

export default PlaygroundMode;
