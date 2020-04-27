import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  background-color: red;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav``;

const MobileNav = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { x: '100%', duration: 1, ease: 'power3.in' });
  }, []);

  return (
    <Container ref={ref}>
      <Nav>siemano</Nav>
    </Container>
  );
};

export default MobileNav;
