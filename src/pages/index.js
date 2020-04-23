import React from 'react';

import MainTemplate from '../components/templates/MainTemplate';
import Aside from '../components/atoms/selectors/Aside';
import Main from '../components/atoms/selectors/Main';
import Hero from '../components/organisms/Hero';

const IndexPage = () => {
  return (
    <MainTemplate>
      <Aside>
        <div>Logo</div>
        <div>socials</div>
      </Aside>
      <Main>
        <Hero />
      </Main>
      <Aside right>
        <div>resume</div>
        <nav>
          <ul>
            <li>start</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
        <div>email</div>
      </Aside>
    </MainTemplate>
  );
};

export default IndexPage;
