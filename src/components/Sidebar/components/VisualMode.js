import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";

const VisualMode = ({ size, setSize, speed, setSpeed }) => {
  return (
    <React.Fragment>
      <span>Visual Mode</span>
      <SizeSelector size={size} setSize={setSize} />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
    </React.Fragment>
  );
};

export default VisualMode;
