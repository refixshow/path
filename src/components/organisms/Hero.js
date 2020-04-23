import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Newsletter from '../molecules/NewsLetter';

import Section from '../atoms/selectors/Section';
import P from '../atoms/selectors/P';
import H1 from '../atoms/selectors/H1';

console.log(process.env.TAK);

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  flex: 1;

  & div:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const ImgHolder = styled.div`
  position: relative;
  flex: 0.5;
  & img {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;

    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    width: 300px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.greyLight};
    z-index: -1;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsArticle {
        edges {
          node {
            autor
            id
            title
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Container>
      <Header>
        <div>
          <P light big>
            Hi, my name is
          </P>
          <H1>Adam Ście'sz'ka [Pa't'h].</H1>
          <H1>I build front of the websites.</H1>
        </div>
        <div>
          <P half>
            I'm a software engineer based in Oleśnica, specializing in buiding
            high-quality websites and web applications.
          </P>
        </div>
        <div>
          <Newsletter />
        </div>
      </Header>
      <ImgHolder>
        <img src="./photos/hero.svg" alt="alt" />
      </ImgHolder>
    </Container>
  );
};

export default Hero;
