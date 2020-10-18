import React from "react";

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <React.Fragment>
      <input
        style={{ width: "500px", cursor: "pointer" }}
        type="range"
        max="500"
        min="5"
        value={speed}
        step="1"
        onChange={(e) => setSpeed(e.target.value)}
      />
      <div>{speed}</div>
    </React.Fragment>
  );
};

export default SpeedSlider;
