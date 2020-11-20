import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import AlgorithmOptions from "./AlgorithmOptions";
import ColorSelection from "./ColorSelection";

const PlaygroundMode = ({ hasStarted }) => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <AlgorithmOptions hasStarted={hasStarted} />
      <SizeSelector hasStarted={hasStarted} />
      <SpeedSelector />
      <ColorSelection />
    </React.Fragment>
  );
};

export default PlaygroundMode;
