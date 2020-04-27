import React from 'react';

import Aside from '../../styles/selectors/Aside';
import FlexContainer from '../../styles/FlexContainer';

import Social from '../atoms/Social';

const SocialAside = () => {
  return (
    <Aside>
      <div>logo</div>
      <FlexContainer>
        <Social />
        <Social />
        <Social />
        <Social />
      </FlexContainer>
    </Aside>
  );
};

export default SocialAside;
