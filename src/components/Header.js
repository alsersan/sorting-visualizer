import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 5vh;
  background-color: #ccc;
`;

const Header = ({ speed, setSpeed, size, setSize }) => {
  const speedPercentage = (min, max) => {
    // 450 - speed to get the correct position of the slider
    const input = 450 - speed;
    return Math.round((((input - min) * 100) / (max - min)) * 10) / 10;
  };
  return (
    <StyledHeader>
      <div>
        Speed
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
          max="449"
          min="0"
          // 450 - speed to get the correct position of the slider
          value={450 - speed}
          step="1"
          // 450 - value to set the real speed (in ms)
          onChange={(e) => setSpeed(450 - e.target.value)}
        />
        <div style={{ display: "inline-block" }}>{speed}</div>
        {/* the min value was adjusted so that it's percentage is exactly 1% */}
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          {speedPercentage(-4.5, 449)}%
        </div>
      </div>
      <div>
        Size
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
          max="110"
          min="15"
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
