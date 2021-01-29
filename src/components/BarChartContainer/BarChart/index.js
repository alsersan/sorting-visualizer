import React from 'react';
import styled from 'styled-components';

import Bar from './components/Bar';
import { devices } from '../../../styles/deviceSizes';

import { useArraySizeContext } from '../../../contexts/ArraySizeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  padding: 2rem 0.4% 0.4% 0.4%;
  align-items: flex-end;
`;

const BarChart = () => {
  const { array, size } = useArraySizeContext();

  return (
    <Container>
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
