import React, { useEffect, useRef } from 'react';
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
    if (fadeIn === true) {
      gsap.to(ref.current, { opacity: 0.4, duration: 0.4, delay: 0.4 });
    } else if (fadeIn === false) {
      gsap.to(ref.current, { opacity: 0, duration: 0.4 });
    }
  }, [fadeIn]);

  return (
    <Container ref={ref} onClick={callback} styles={styles}>
      {children}
    </Container>
  );
};

export default Button;
