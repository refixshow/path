import React, { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import Aside from '../../styles/selectors/Aside';
import Button from '../atoms/Button';

const Container = styled(Aside)`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const Hamburger = styled.div`
  & div {
    width: 14px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.greenLight};

    &:first-child {
      width: 25px;
    }

    &:last-child {
      width: 20px;
    }

    &:not(:first-child) {
      margin-top: 3px;
    }
  }
`;

const NavAside = ({ isOpen, toggleNav }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  if (isOpen) {
    gsap.to(ref.current, 0.3, { rotate: 45, x: 0, y: 5, width: 20 });
    gsap.to(ref1.current, 0.3, { x: 100, opacity: 0 });
    gsap.to(ref2.current, 0.3, { rotate: -45, y: -5 });
  } else {
    gsap.to(ref.current, 0.3, { rotate: 0, x: 0, y: 0, width: 25 });
    gsap.to(ref1.current, 0.3, { x: 0, opacity: 1 });
    gsap.to(ref2.current, 0.3, { rotate: 0, y: 0 });
  }

  return (
    <Container>
      <Button callback={toggleNav}>
        <Hamburger isOpen={isOpen}>
          <div ref={ref}></div>
          <div ref={ref1}></div>
          <div ref={ref2}></div>
        </Hamburger>
      </Button>
      <div>home</div>
      <div>resume</div>
    </Container>
  );
};

export default NavAside;
