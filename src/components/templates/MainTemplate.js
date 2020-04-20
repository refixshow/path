import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../utils/GlobalStyle';
import { theme } from '../../utils/theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr 15rem;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default MainTemplate;
