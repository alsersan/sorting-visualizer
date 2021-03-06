import React from 'react';
import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 0;
  left: 0;
`;

const IconLink = styled.a`
  cursor: pointer;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`;

const Footer = () => {
  return (
    <Container>
      <span>Developed by Álvaro Serrano</span>
      <IconLink
        title="GitHub repository"
        href="https://github.com/alsersan/sorting-visualizer"
        target="_blank"
        rel="noopener noreferer"
      >
        <FaGithub size={25} />
      </IconLink>
    </Container>
  );
};

export default Footer;
