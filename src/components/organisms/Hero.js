import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <Container id="hero">
      <h1>kinga kozakiem</h1>
    </Container>
  );
};

export default Hero;
