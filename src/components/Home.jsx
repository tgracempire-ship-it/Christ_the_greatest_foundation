import React from 'react';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Leadership from './Leadership';
import Contribute from './Contribute';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Leadership />
      <Contribute />
    </main>
  );
};

export default Home;
