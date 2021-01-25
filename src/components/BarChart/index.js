import React from "react";
import styled from "styled-components";

import Bar from "./components/Bar";
import { devices } from "../../styles/deviceSizes";

import { useArraySizeContext } from "../../contexts/ArraySizeContext";

const Container = styled.div`
  display: flex;
  min-height: 15rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  margin-bottom: ${(props) => props.theme.spacingSmall};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.5rem 0.4% 0.4% 0.4%;
  justify-content: space-around;
  align-items: flex-end;

  @media ${devices.tablet} {
    height: 100%;
    flex-grow: 1;
    margin-right: ${(props) => props.theme.spacingSmall};
    margin-bottom: 0;
  }

  @media ${devices.laptop} {
    margin-right: ${(props) => props.theme.spacingBig};
  }
`;

const BarChart = () => {
  const { array, size } = useArraySizeContext();

  return (
    <Container>
      {console.log("RERENDER BAR CHART")}
      {array.map((number, index) => (
        <Bar
          number={number}
          key={`${array} ${index}`}
          size={size}
          className="bar unsorted"
        />
      ))}
    </Container>
  );
};

export default BarChart;
