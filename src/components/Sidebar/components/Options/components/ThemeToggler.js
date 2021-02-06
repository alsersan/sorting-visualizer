import React from 'react';
import styled from 'styled-components';

import { useThemeTogglerContext } from '../../../../../contexts/ThemeTogglerContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

const Checkbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  background-color: ${(props) => props.theme.blue};
  width: 4rem;
  height: 2rem;
  border-radius: 3rem;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    content: '';
    border-radius: 50%;
    transition: 200ms ease;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);

    ${Checkbox}:checked ~ & {
      transform: translateX(2rem);
    }
  }
`;

const ThemeToggler = () => {
  const { theme, setTheme } = useThemeTogglerContext();
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id="switch-button"
        name="switch-button"
        checked={theme === 'light'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <StyledLabel htmlFor="switch-button" />
      <FaSun
        style={{
          position: 'absolute',
          right: '10px',
          color: 'white',
          pointerEvents: 'none',
        }}
      />
      <FaMoon
        style={{
          position: 'absolute',
          left: '10px',
          color: 'white',
          pointerEvents: 'none',
        }}
      />
    </Wrapper>
  );
};

export default ThemeToggler;
