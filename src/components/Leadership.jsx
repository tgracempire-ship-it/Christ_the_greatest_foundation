import React from 'react';

const Leadership = () => {
  return (
    <section className="leadership" id="leadership">
      <div className="container lead-grid">
        <div className="founder-card">
          <div className="founder-portrait" style={{ backgroundImage: 'url(/pioneer.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            <div className="founder-overlay"></div>
            <div className="founder-info">
              <h3>Mr. Omoniyi Adebusola</h3>
              <span className="role">Founder &amp; Visionary</span>
            </div>
            <svg className="seal-badge" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="sealPath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"/>
              </defs>
              <circle cx="100" cy="100" r="92" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="3 5"/>
              <circle cx="100" cy="100" r="78" fill="none" stroke="#D97706" strokeWidth="1.2"/>
              <text fontFamily="IBM Plex Mono, monospace" fontSize="10.5" letterSpacing="3" fill="#F8FAFC">
                <textPath href="#sealPath" startOffset="1%">COMMUNITY VERIFIED • EST. 1999 • IJU •</textPath>
              </text>
              <g transform="translate(100,102)">
                <circle r="34" fill="rgba(5,150,105,0.18)" stroke="#059669" strokeWidth="1.4"/>
                <path d="M -14,0 L -4,10 L 16,-12" stroke="#B9E7D6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </div>
        </div>

        <div className="lead-content">
          <span className="eyebrow"><span className="dot"></span>From Our Founder</span>
          <span className="quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="mandate">Our mandate is simple: ensure no human being is denied dignity, learning, or care due to poverty.</p>
          <p className="support-line">Day-to-day leadership of the free school arm is held by <strong>Mr. Omotusi</strong>, Headmaster, alongside the wider Foundation team.</p>

          <div className="verify-card">
            <a href="https://wa.me/2348166158813" target="_blank" rel="noopener noreferrer" className="vc-item" style={{textDecoration: 'none'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div><span className="vc-label">Verification Line</span><br/><span className="vc-value" style={{color: 'var(--navy)'}}>+234 816 615 8813</span></div>
            </a>
            <div className="vc-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="15" height="10" rx="2"/><path d="M17 10l5-2.5v9L17 14"/></svg>
              <div><span className="vc-label">Media &amp; Coverage Partner</span><br/><span className="vc-value">Omo Iju Television</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
