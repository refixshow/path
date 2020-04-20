import styled from 'styled-components';

const P = styled.p`
  width: ${({ half }) => (half ? '50%;' : 'auto')};
  color: ${({ light, theme }) => (light ? theme.colors.greenLight : '')};
  font-size: ${({ big }) => (big ? '2.5rem' : '')};
`;

export default P;
