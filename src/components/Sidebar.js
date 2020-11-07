import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  height: 100%;
  width: 40rem;
  background-color: #f6f6f6;
`;

const Header = ({ speed, setSpeed, size, setSize }) => {
  const speedPercentage = (min, max) => {
    // 450 - speed to get the correct position of the slider
    const input = 450 - speed;
    return Math.round((((input - min) * 100) / (max - min)) * 10) / 10;
  };
  return (
    <StyledSidebar>
      <div>
        Speed
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
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
      </div>
      <div>
        Size
        <input
          style={{ width: "500px", cursor: "pointer", display: "inline-block" }}
          type="range"
          max="110"
          min="9"
          value={size}
          step="1"
          onChange={(e) => {
            setSize(parseInt(e.target.value, 10));
          }}
        />
        <div style={{ display: "inline-block" }}>{size}</div>
      </div>
    </StyledSidebar>
  );
};

export default Header;