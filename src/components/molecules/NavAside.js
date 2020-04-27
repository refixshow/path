import React from 'react';
import styled from 'styled-components';

import Aside from '../../styles/selectors/Aside';
import Button from '../atoms/Button';

const Container = styled(Aside)`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const Hamburger = styled.div`
  position: relative;
  width: 15px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.greenLight};

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: inherit;
    left: 0;
  }

  &::before {
    top: -6px;
    width: 30px;
  }

  &::after {
    top: 6px;
    width: 20px;
  }
`;

const NavAside = ({ toggleNav }) => {
  return (
    <Container>
      <Button callback={toggleNav}>
        <Hamburger />
      </Button>
      <div>home</div>
      <div>resume</div>
    </Container>
  );
};

export default NavAside;
