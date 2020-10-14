import React from "react";

const Bar = ({ height, number }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: `${height}%`,
        margin: "0 5px",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span style={{ marginTop: "5px" }}>{`${number}`}</span>
    </div>
  );
};

export default Bar;
