import React from 'react';
import styled from 'styled-components';

import Section from '../../styles/selectors/Section';

const Container = styled(Section)``;

const About = () => {
  return (
    <Container id="about">
      <div>
        <h2>About me</h2>
        <hr></hr>
      </div>
      <div>
        <p>
          Hello! I'm Adam, a software engineer based in Oleśnica, who enjoys
          building things that live on the internet. I develop beautifull
          websites amd web apps that provide intuitive, pixel-perfect user
          interfaces with efficient and modern front-end tools.
        </p>
        <p>
          In the middle of the technical school I started to do some of the web.
          I found a small job when I was responsable for HTML and CSS, what was
          great expirence!
        </p>
        <p>
          And there area a few technologies I've been working with recently:
        </p>
        <div>
          <ul>
            <h3>For the front</h3>
            <li>HTML & (S)CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>TypeScript</li>
          </ul>
          <ul>
            <h3>For the back</h3>
            <li>Node.js</li>
            <li>Express</li>
            <li>Django</li>
            <li>FireBase</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
