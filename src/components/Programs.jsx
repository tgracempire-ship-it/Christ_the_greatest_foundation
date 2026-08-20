import React from 'react';

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot"></span>Our Initiatives</span>
          <h2>Four programs, one mandate.</h2>
          <p>Each arm of the Foundation is registered internally as an active file — funded, staffed, and reviewed on its own terms.</p>
        </div>

        <div className="programs-grid">
          <div className="program-card p-edu reveal">
            <span className="filecode">File CTGF-01 / EDU</span>
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l10-3 10 3-10 3-10-3z"/><path d="M6 8.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3V8.5"/><path d="M22 6v7"/></svg>
            </div>
            <h3>Christ the Greatest Free Nursery &amp; Primary School</h3>
            <p>Complete tuition-free, zero-fee foundational primary education, free uniforms, and learning materials for orphans and vulnerable children in Iju.</p>
          </div>

          <div className="program-card p-out reveal">
            <span className="filecode">File CTGF-02 / OUT</span>
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7l4-4z"/></svg>
            </div>
            <h3>Cross-School Uniform &amp; Educational Support Outreach</h3>
            <p>Identifying and outfitting underprivileged pupils attending other local public and community schools who lack standard uniforms, footwear, and basic books.</p>
          </div>

          <div className="program-card p-min reveal">
            <span className="filecode">File CTGF-03 / MIN</span>
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><line x1="9" y1="8" x2="9" y2="17"/><line x1="15" y1="8" x2="15" y2="17"/></svg>
            </div>
            <h3>Correctional Facility &amp; Prison Visitation Ministry</h3>
            <p>Compassionate welfare outreaches, basic hygiene and nutritional support, legal guidance pathfinding, and spiritual rehabilitation for inmates.</p>
          </div>

          <div className="program-card p-lead reveal">
            <span className="filecode">File CTGF-04 / LDR</span>
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-7-7 18-2.5-7.5L3 11z"/></svg>
            </div>
            <h3>Leadership &amp; Ministerial Training</h3>
            <p>Tuition-free community and ministerial leadership courses hosted at St. Paul High School, Moferere Iju.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
