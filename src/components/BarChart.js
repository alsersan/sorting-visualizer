import React from "react";
import Bar from "./Bar";

const styles = {
  mainContainer: {
    height: "700px",
    width: "1200px",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
};

const numbers = [
  32,
  43,
  76,
  45,
  76,
  23,
  21,
  56,
  43,
  23,
  76,
  56,
  23,
  45,
  87,
  56,
  34,
];

const BarChart = () => {
  return (
    <div style={styles.mainContainer}>
      {numbers.map((number) => (
        <Bar height={number} />
      ))}
    </div>
  );
};

export default BarChart;
