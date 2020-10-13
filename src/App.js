import React from "react";
import BarChart from "./components/BarChart";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const App = () => {
  return (
    <div style={styles.container}>
      <BarChart />
    </div>
  );
};

export default App;
