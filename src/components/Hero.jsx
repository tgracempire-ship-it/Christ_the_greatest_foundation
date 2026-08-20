import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-image"></div>
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow on-navy"><span className="dot"></span>Grassroots Humanitarian Action • Operating Since 1999</span>
          <h1>Lifting lives, restoring dignity, and <em>empowering</em> the underserved.</h1>
          <p className="lede">Christ the Greatest Foundation is dedicated to holistic grassroots transformation across Ondo State — providing zero-cost basic education, clothing vulnerable pupils across schools, and ministering to correctional facilities.</p>
          <div className="cta-group">
            <a href="#get-involved" className="btn btn-primary">Support Our Mission</a>
            <a href="#programs" className="btn btn-ghost-on-navy">Explore Our Programs</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="impact-strip reveal is-visible" id="impact">
          <div className="impact-grid">
            <div className="impact-item">
              <span className="val">100%</span>
              <span className="leader"></span>
              <span className="lbl">Free Tuition Arm</span>
            </div>
            <div className="impact-item">
              <span className="val">Multi-School</span>
              <span className="leader"></span>
              <span className="lbl">Uniform Drives</span>
            </div>
            <div className="impact-item">
              <span className="val">Active</span>
              <span className="leader"></span>
              <span className="lbl">Prison Welfare Ministry</span>
            </div>
            <div className="impact-item">
              <span className="val">Est. 1999</span>
              <span className="leader"></span>
              <span className="lbl">Founded in Iju</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
