import React from "react";

const Bar = ({ height }) => {
  return (
    <div
      style={{ backgroundColor: "red", height: `${height}%`, width: "30px" }}
    />
  );
};

export default Bar;
