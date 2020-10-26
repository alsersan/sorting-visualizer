import React from "react";

import {
  recursiveBubbleSort,
  stop,
} from "../algorithms/recursiveSortingAlgorithms";

const ButtonRow = ({ speed, array, arr }) => {
  return (
    <React.Fragment>
      <button onClick={() => recursiveBubbleSort(speed, arr)}>Start</button>
      {console.log(speed)}
      <button onClick={() => stop()}>Stop</button>
    </React.Fragment>
  );
};

export default ButtonRow;
