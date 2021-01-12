import React from "react";
import styled from "styled-components";

import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";

const Container = styled.div`
  width: 100%;
  margin: 0 0 2rem;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  cursor: pointer;
`;

const Options = () => {
  const { hasStarted, activeOption, setActiveOption } = useAlgorithmContext();

  return (
    <Container hasStarted={hasStarted}>
      {console.log("OPTIONS")}
      <Title>Options</Title>
      <FlexWrapper>
        <Button>Reset Array</Button>
        <Button>Reset Defaults</Button>
      </FlexWrapper>
    </Container>
  );
};

export default Options;
