import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_yeni_1.png';
import ThemeToggle from './ThemeToggle';
import { Link } from "react-router-dom";
import {
  Boxes,
  Users,
  Calculator,
  Package,
  Warehouse,
  Smartphone,
  ChevronDown
} from "lucide-react";

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
          <div className="nav-dropdown">

    <button className="nav-link dropdown-trigger">
      Ürünler
    </button>

    <div className="mega-menu">

      <Link to="/" className="mega-item">
      <div className="mega-icon">
        <Boxes size={20} />
        </div>
        <div>
          <h4>Klovo ERP</h4>
          <p>Tüm işletme süreçlerini yönetin</p>
        </div>
      </Link>

  

      <Link to="/products/depo-stok" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Depo Stok Takipi</h4>
          <p>Stok durumunu ve hareketlerini takip edin.Ürün bazlı detaylı kritik takip.</p>
        </div>
      </Link>
      <Link to="/products/api" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>API Entegrasyonu</h4>
          <p>E-ticaret pazaryeri entegrasyonu.Üçüncü taraf sistemlerle kolay entegrasyon.</p>
        </div>
      </Link>

      <Link to="/products/cloud-altyapi" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Cloud Altyazıpı Hizmetleri</h4>
          <p>Cloud tabanlı altyapı hizmetleri ile güvenli ve maliyetsiz çözüm sunar.</p>
        </div>
      </Link>

      <Link  to="/products/e-donusum" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>E-Dönüşüm,E-Fatura & E-Arşiv</h4>
          <p>Elektronik fatura ve arşivleme çözümleri. E-dönüşüm merkezi.</p>
        </div>
      </Link>

      <Link to="/products/finans-yonetimi" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Finans Yönetimi</h4>
          <p>Gelir-Gider takip,cari hesaplama yönetimi tek tıklamayala kontrolünüzde</p>
        </div>
      </Link>

      <Link to="/products/restoran-cafe" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Restoran ve Cafe Yönetimi</h4>
          <p>Restoran ve cafeler için özel çözümler.İşyeriniz için kolay ve kullanışlı iş süreçleri.</p>
        </div>
      </Link>

       <Link to="/crm" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>E-Tasarım ve Geliştirme</h4>
          <p> QR kod tabanlı çözümler.Barkod tasarımı. E-ticaret ve hizmetler için özel geliştirme.</p>
        </div>
      </Link>

      <Link to="/crm" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Parakende Yönetimi</h4>
          <p>Parakende işletmeler için özel çözümler. Satış, stok ve müşteri yönetimi entegre.</p>
        </div>
      </Link>

      <Link to="/crm" className="mega-item">
      <div className="mega-icon">
        <Users size={20} />
        </div>
        <div>
          <h4>Akaryakıt yönetimi</h4>
          <p>Akaryakıt istasyonları için özel çözümler. Yakıt stok yönetimi ve satış süreçleri entegre.</p>
        </div>
      </Link>


    </div> {/* mega-menu */}

  </div> {/* nav-dropdown */}
          <a href="#simulator" className="nav-link">ERP Simülatörü</a>
          <a href="#contact" className="nav-link">İletişim</a>
        </nav>

        

        <div className="navbar-cta">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-navbar">
            Demo Talep Et
          </a>
        </div>

        <div className="navbar-demo">
          <Link to="/demo-talep" className="btn btn-primary btn-navbar">
            Hemen Deneyelim🚀
          </Link>
          
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
