import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

import MobileNav from '../molecules/MobileNav';
import SocialAside from '../molecules/SocialAside';
import NavAside from '../molecules/NavAside';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: [full-start] 4rem [center-start] repeat(4, 1fr) [center-end] 4rem [full-end];

  & section {
    grid-column: center-start / center-end;
  }
`;

const MainTemplate = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isOpen && <MobileNav />}
      <Wrapper>
        <SocialAside />
        {children}
        <NavAside isOpen={isOpen} toggleNav={toggleNav} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default MainTemplate;
