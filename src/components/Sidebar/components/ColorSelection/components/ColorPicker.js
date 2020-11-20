import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const Span = styled.span`
  margin-left: 0.5rem;
`;

const ColorPicker = ({ description, value, onChange }) => {
  return (
    <Container>
      <input type="color" value={value} onChange={onChange} />
      <Span>{description}</Span>
    </Container>
  );
};

export default ColorPicker;
