import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src="/logo.png" alt="Christ the Greatest Foundation" className="brand-mark" style={{ borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff', padding: '2px' }} />
              <span>Christ the Greatest Foundation</span>
            </div>
            <p className="tagline">Grassroots humanitarian action from Iju, Akure North LGA, Ondo State — operating since 1999.</p>
            <div className="validation-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
              <span>Christ the Greatest Foundation is a non-profit humanitarian organization registered and vetted within the local community.</span>
            </div>
          </div>

          <div className="footer-col">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="#about">About Foundation</a></li>
              <li><a href="#programs">Our Initiatives</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Programs</h6>
            <ul>
              <li><a href="#programs">Free Primary School</a></li>
              <li><a href="#programs">Uniform Outreach</a></li>
              <li><a href="#programs">Prison Ministry</a></li>
              <li><a href="#programs">Leadership Training</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Contact</h6>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="https://wa.me/2348166158813" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>+234 816 615 8813</a>
            </div>
            <div className="contact-line" style={{marginTop: '12px'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Iju, Akure North LGA,<br/>Ondo State, Nigeria</span>
            </div>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 15 12 10 15 10 9"/></svg></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="stamp">
            <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 3"/><path d="M13 20l4.5 4.5L27 15" fill="none" stroke="#B9E7D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>COMMUNITY VERIFIED — REC. CTGF/1999</span>
          </div>
          <span className="copyright">© <span id="year">{currentYear}</span> Christ the Greatest Foundation. Iju, Ondo State, Nigeria.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
