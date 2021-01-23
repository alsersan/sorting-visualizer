import React from "react";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 0 1.5rem 1rem 1.5rem;
`;

const IconLink = styled.a`
  margin-left: 1rem;
  cursor: pointer;
  opacity: 75%;
  color: black;

  &:hover {
    opacity: 100%;
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
