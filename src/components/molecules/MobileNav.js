import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { Link } from 'gatsby';

import Button from '../atoms/Button';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  height: 100vh;
  width: 100vw;
  display: flex;

  & button {
    flex: 1;
  }
`;

const Nav = styled.nav`
  flex: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(315deg, #000 0%, ${theme.colors.blueLight} 53%)`};

  & a {
    display: flex;
    transform: translateX(-60px);
    width: 40%;
    padding: 15px 10px;
    margin: 7px 0;
    box-shadow: 0 5px 10px #000;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.normalX};

    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

const MobileNav = ({ toggleNav, isOpen }) => {
  const containerRef = useRef(null);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);

  const styles = css`
    opacity: 0;
    background-color: #000;
  `;

  useEffect(() => {
    if (isOpen) {
      // container
      gsap.to(containerRef.current, {
        x: '0',
        duration: 0.4,
        ease: 'power2.in',
      });

      //links
      gsap.to(linkRef1.current, {
        x: '0',
        duration: 0.4,
        delay: 0.15,
        ease: 'power4.in',
      });
      gsap.to(linkRef2.current, {
        x: '0',
        duration: 0.4,
        delay: 0.2,
        ease: 'power4.in',
      });
      gsap.to(linkRef3.current, {
        x: '0',
        duration: 0.4,
        delay: 0.25,
        ease: 'power4.in',
      });
      gsap.to(linkRef4.current, {
        x: '0',
        duration: 0.4,
        delay: 0.3,
        ease: 'power4.in',
      });
    } else {
      gsap.to(containerRef.current, {
        x: '-100%',
        duration: 0.4,
        delay: 0.4,
        ease: 'power2.in',
      });
      gsap.to(linkRef1.current, {
        x: '-60',
        duration: 0.4,
        delay: 0.15,
        ease: 'power4.in',
      });
      gsap.to(linkRef2.current, {
        x: '-60',
        duration: 0.4,
        delay: 0.2,
        ease: 'power4.in',
      });
      gsap.to(linkRef3.current, {
        x: '-60',
        duration: 0.4,
        delay: 0.25,
        ease: 'power4.in',
      });
      gsap.to(linkRef4.current, {
        x: '-60',
        duration: 0.4,
        delay: 0.3,
        ease: 'power4.in',
      });
    }
  }, [isOpen]);

  return (
    <Container ref={containerRef}>
      <Nav>
        <Link to="/" ref={linkRef1} onClick={toggleNav}>
          start
        </Link>
        <Link to="/#about" ref={linkRef2} onClick={toggleNav}>
          about
        </Link>
        <Link to="/#projects" ref={linkRef3} onClick={toggleNav}>
          projects
        </Link>
        <Link to="/#contact" ref={linkRef4} onClick={toggleNav}>
          contact
        </Link>
      </Nav>
      <Button styles={styles} callback={toggleNav} fadeIn={isOpen} />
    </Container>
  );
};

export default MobileNav;
