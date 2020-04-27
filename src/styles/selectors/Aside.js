import styled from 'styled-components';

const Aside = styled.aside`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 3rem 4rem;

  &:first-child {
    box-shadow: 0 10px 10px #000000;
  }
`;

export default Aside;
