import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import AlgorithmOptions from "./AlgorithmOptions";
import ColorSelection from "./ColorSelection";

const PlaygroundMode = () => {
  return (
    <React.Fragment>
      <span>Playground Mode</span>
      <AlgorithmOptions />
      <SizeSelector />
      <SpeedSelector />
      <ColorSelection />
    </React.Fragment>
  );
};

export default PlaygroundMode;
