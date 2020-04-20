import React from 'react';
import styled from 'styled-components';

import P from '../atoms/selectors/P';

const StyledP = styled(P)`
  margin-bottom: 10px;
`;

const InputEmail = styled.input`
  width: 50%;
  padding: 1.4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

const InputButton = styled.input`
  border: none;
  padding: 1.4rem;
  cursor: pointer;

    color: #fff;
  /* color: ${({ theme }) => theme.colors.greyLight}; */
  background-color: ${({ theme }) => theme.colors.greyDark};
`;

const NewsLetter = () => {
  return (
    <>
      <StyledP light>Newsletter</StyledP>
      <form>
        <InputEmail type="email" placeholder="E-mail address" />
        <InputButton type="submit" value="join now" />
      </form>
    </>
  );
};

export default NewsLetter;
