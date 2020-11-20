import React from "react";

import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";

const VisualMode = () => {
  return (
    <React.Fragment>
      <span>Visual Mode</span>
      <SizeSelector />
      <SpeedSelector />
    </React.Fragment>
  );
};

export default VisualMode;
