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
      <div>
        <div>
          <p>Hi, my name is</p>
          <h1>Adam Ście'sz'ka [Pa't'h].</h1>
          <h1>I build aweosome websites.</h1>
        </div>
        <p>
          I'm a software engineer based in Oleśnica, specializing in buiding
          high-quality websites and web applications.
        </p>
        <button>Get In Touch</button>
      </div>
    </Container>
  );
};

export default Hero;
