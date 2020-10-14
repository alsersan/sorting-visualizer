import React from "react";
import BarChart from "./components/BarChart";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <BarChart />
    </Container>
  );
};

export default App;
