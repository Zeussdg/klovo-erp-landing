import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Klovo ERP Logo" className="logo-img" />
          <span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>
        </a>

        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          <a href="#about" className="nav-link">Hakkımızda</a>
          <a href="#features" className="nav-link">Özellikler</a>
          <a href="#simulator" className="nav-link">ERP Simülatörü</a>
          <a href="#contact" className="nav-link">İletişim</a>
        </nav>

        <div className="navbar-cta">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-navbar">
            Demo Talep Et
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-mobile-toggle" onClick={toggleMobileMenu} aria-label="Menüyü Aç/Kapat">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="navbar-mobile-nav">
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</a>
          <a href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Özellikler</a>
          <a href="#simulator" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>ERP Simülatörü</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>İletişim</a>
          <ThemeToggle className="theme-toggle--mobile" />
          <a href="#contact" className="btn btn-primary w-full text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Demo Talep Et
          </a>
        </nav>
      </div>
    </header>
  );
}
