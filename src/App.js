import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import BarChart from "./components/BarChart";

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [speed, setSpeed] = useState(50);

  return (
    <React.Fragment>
      <Header speed={speed} setSpeed={setSpeed} />
      <Container>
        <BarChart speed={speed} />
      </Container>
    </React.Fragment>
  );
};

export default App;
