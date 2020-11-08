import React from "react";

import styled from "styled-components";
import Slider from "./Slider";

const Container = styled.div`
  width: 90%;
  margin: 2rem 0;
`;
const SpeedSelector = ({ speed, setSpeed }) => {
  const speedPercentage = (min, max) => {
    // 450 - speed to get the correct position of the slider
    const input = 450 - speed;
    return Math.round((((input - min) * 100) / (max - min)) * 10) / 10;
  };
  return (
    <Container>
      Speed
      <Slider
        max="449"
        min="0"
        // 450 - speed to get the correct position of the slider
        value={450 - speed}
        step="25"
        // 450 - value to set the real speed (in ms)
        onChange={(e) => setSpeed(450 - parseInt(e.target.value, 10))}
      />
      <div style={{ display: "inline-block" }}>{speed}</div>
      {/* the min value was adjusted so that it's percentage is exactly 1% */}
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        {speedPercentage(-4.5, 449)}%
      </div>
    </Container>
  );
};

export default SpeedSelector;
