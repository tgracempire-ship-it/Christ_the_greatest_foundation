import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/#top" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="Christ the Greatest Foundation" className="brand-mark" style={{ borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff' }} />
          <span>Christ the Greatest<br/><small>Foundation • Iju, Ondo State</small></span>
        </Link>

        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`} id="primaryNav" aria-label="Primary">
          <Link to="/#about" onClick={closeMenu}>About Foundation</Link>
          <Link to="/#programs" onClick={closeMenu}>Our Initiatives</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/#leadership" onClick={closeMenu}>Leadership</Link>
          <Link to="/#impact" onClick={closeMenu}>Impact Numbers</Link>
          <Link to="/#get-involved" onClick={closeMenu} className="mobile-donate">Donate / Partner</Link>
        </nav>

        <div className="header-actions">
          <Link to="/#get-involved" className="btn btn-primary btn-sm desktop-donate">
            <span className="long">Donate / Partner</span>
            <span className="short">Donate</span>
          </Link>
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
