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
  padding: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <span>&copy; 2020 Álvaro Serrano</span>
      <div>
        <FaGithub size={25} style={{ marginLeft: "0.5rem" }} />
        <FaTwitter size={25} style={{ marginLeft: "0.5rem" }} />
      </div>
    </Container>
  );
};

export default Footer;
