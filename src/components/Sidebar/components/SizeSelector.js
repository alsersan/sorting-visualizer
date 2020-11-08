import React from "react";

const SizeSelector = ({ size, setSize }) => {
  return (
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
  );
};

export default SizeSelector;
