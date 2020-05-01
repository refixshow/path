import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey};
  background-image: ${({ theme }) =>
    `linear-gradient(315deg, ${theme.colors.grey} 0%, ${theme.colors.greyDark} 74%)`};
`;

const Nav = styled.nav``;

const MobileNav = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, { x: '0', duration: 0.4, ease: 'power2.in' });
  }, []);

  return (
    <Container ref={ref}>
      <Nav>siemano</Nav>
    </Container>
  );
};

export default MobileNav;
