import React, { useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Bar from './components/Bar';

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
  const [textDisplay, setTextDisplay] = useState('none');
  const chartRef = useRef();

  useLayoutEffect(() => {
    const chartWidth = chartRef.current.clientWidth;
    // 30 is the value which makes the bar wide enough to fit the number 100
    chartWidth / size > 30 ? setTextDisplay('block') : setTextDisplay('none');
  }, [size]);

  return (
    <Container ref={chartRef}>
      {array.map((number, index) => (
        <Bar
          chart={chartRef}
          textDisplay={textDisplay}
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
