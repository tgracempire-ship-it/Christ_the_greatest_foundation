import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container nav-row">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="Christ the Greatest Foundation" className="brand-mark" style={{ borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff' }} />
          <span>Christ the Greatest<br/><small>Foundation • Iju, Ondo State</small></span>
        </a>

        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`} id="primaryNav" aria-label="Primary">
          <a href="#about" onClick={closeMenu}>About Foundation</a>
          <a href="#programs" onClick={closeMenu}>Our Initiatives</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a href="#impact" onClick={closeMenu}>Impact Numbers</a>
        </nav>

        <div className="header-actions">
          <a href="#get-involved" className="btn btn-primary btn-sm">
            <span className="long">Donate / Partner</span>
            <span className="short">Donate</span>
          </a>
          <button 
            className="menu-toggle" 
            id="menuToggle" 
            aria-label="Toggle menu" 
            aria-expanded={menuOpen} 
            aria-controls="primaryNav"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
