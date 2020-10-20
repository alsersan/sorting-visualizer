import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 5vh;
  background-color: #ccc;
`;

const Header = ({ speed, setSpeed, size, setSize }) => {
  const speedPercentage = (min, max) => {
    const input = 500 - speed;
    return ((input - min) * 100) / (max - min);
  };
  return (
    <StyledHeader>
      <div>
        Speed
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
          max="495"
          min="0"
          // 500 - speed to get the correct position of the slider
          value={500 - speed}
          // 1% step
          step="5"
          onChange={(e) => setSpeed(500 - e.target.value)}
        />
        <div style={{ display: "inline-block" }}>{speed}</div>
        {/* the min value must be 1/100 (of the total range) smaller, so that the min value is 1% and not 0% */}
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          {speedPercentage(-5, 495)}%
        </div>
      </div>
      <div>
        Size
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
          max="200"
          min="10"
          value={size}
          step="1"
          onChange={(e) => {
            setSize(parseInt(e.target.value, 10));
            console.log(parseInt(e.target.value, 10));
          }}
        />
        <div style={{ display: "inline-block" }}>{size}</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
