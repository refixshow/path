import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${({ styles }) => (styles ? styles : '')}
`;

const Button = ({ children, callback, styles, fadeIn }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (fadeIn) {
      gsap.to(ref.current, {
        opacity: 0.4,
        duration: 0.4,
        delay: 0.4,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <Container ref={ref} onClick={callback} styles={styles} fadeIn={fadeIn}>
      {children}
    </Container>
  );
};

export default Button;
