import React from 'react';

import MainTemplate from '../components/templates/MainTemplate';

import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';

const IndexPage = () => {
  return (
    <MainTemplate>
      <Hero />
      <About />

      <section id="projects">
        <div>
          <h2>My Projects</h2>
          <hr></hr>
        </div>
        <div>
          <div>project</div>
          <div>project</div>
          <div>project</div>
          <button>See More</button>
        </div>
      </section>
      <section id="contact">contact</section>
      <footer>the footer</footer>
    </MainTemplate>
  );
};

export default IndexPage;
