import React from 'react';
import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

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
  margin-left: 1rem;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`;

const Footer = () => {
  return (
    <Container>
      <span>&copy; 2021 Álvaro Serrano</span>
      <div>
        <IconLink
          title="GitHub repository"
          href="https://github.com/alsersan/sorting-visualizer"
          target="_blank"
          rel="noopener noreferer"
        >
          <FaGithub size={25} />
        </IconLink>
        <IconLink
          title="Twitter profile"
          href="https://twitter.com/alsersan"
          target="_blank"
          rel="noopener noreferer"
        >
          <FaTwitter size={25} />
        </IconLink>
      </div>
    </Container>
  );
};

export default Footer;
