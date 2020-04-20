import styled from 'styled-components';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;

  ${({ theme, right }) =>
    right
      ? `border-left: 1px solid ${theme.colors.grey}; right: 0;`
      : `border-right: 1px solid ${theme.colors.grey}`}
`;

export default Aside;
