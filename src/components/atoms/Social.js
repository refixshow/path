import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const Social = () => {
  return <Container>social</Container>;
};

export default Social;
