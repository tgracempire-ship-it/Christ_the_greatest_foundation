import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow"><span className="dot"></span>About the Foundation</span>
          <h2>A community mandate, carried since 1999.</h2>
          <div className="about-copy">
            <p>Christ the Greatest Foundation is an indigenous humanitarian organization based in Iju, Akure North LGA, Ondo State — built from a single conviction: that poverty should never decide who gets to learn, belong, or be treated with dignity.</p>
            <p>What began as a tuition-free classroom in Iju has grown into a network of programs reaching pupils in neighbouring schools, inmates in correctional facilities, and community members training for ministry and leadership.</p>
          </div>
        </div>
        <div className="reveal">
          <ul className="value-list">
            <li>
              <span className="idx">01</span>
              <div><strong>Access</strong><span className="desc">No child is turned away from schooling for lack of fees, uniforms, or books.</span></div>
            </li>
            <li>
              <span className="idx">02</span>
              <div><strong>Dignity</strong><span className="desc">Every person we serve — pupil or inmate — is treated as worthy of care, not charity.</span></div>
            </li>
            <li>
              <span className="idx">03</span>
              <div><strong>Transparency</strong><span className="desc">Our work is vetted and reported within the community we serve, in the open.</span></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
