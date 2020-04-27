import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, callback }) => {
  return <Container onClick={callback}>{children}</Container>;
};

export default Button;
