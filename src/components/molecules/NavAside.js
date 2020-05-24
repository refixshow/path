import React, { useRef } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import styled from 'styled-components';

import Aside from '../../styles/selectors/Aside';
import Button from '../atoms/Button';

const Container = styled(Aside)`
  position: relative;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

const Hamburger = styled.div`
  width: 25px;

  & div {
    width: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.greenLight};

    &:first-child {
      width: 100%;
    }

    &:last-child {
      width: 80%;
    }

    &:not(:first-child) {
      margin-top: 3px;
    }
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  text-decoration: none;

  border: 2px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const NavAside = ({ isOpen, toggleNav }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  if (isOpen) {
    gsap.to(ref.current, 0.3, { rotate: 45, y: 5, width: 20 });
    gsap.to(ref1.current, 0.3, { x: 80, opacity: 0, pointerEvents: 'none' });
    gsap.to(ref2.current, 0.3, { rotate: -45, y: -5 });
  } else {
    gsap.to(ref.current, 0.3, { rotate: 0, y: 0, width: 25 });
    gsap.to(ref1.current, 0.3, { x: 0, opacity: 1, pointerEvents: 'auto' });
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
      <StyledLink
        to="/"
        onClick={() => {
          if (isOpen) toggleNav();
        }}
        onMouseOver={e => {
          gsap.to(e.target, 0.1, { scale: 1.1 });
        }}
        onMouseLeave={e => {
          gsap.to(e.target, 0.1, { scale: 1 });
        }}
      >
        PA'T'H
      </StyledLink>
      <Link
        to="/"
        onClick={() => {
          if (isOpen) toggleNav();
        }}
      >
        resume
      </Link>
    </Container>
  );
};

export default NavAside;
