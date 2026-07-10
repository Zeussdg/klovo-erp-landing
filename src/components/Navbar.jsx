import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_yeni_1.png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Boxes,
  Users,
  Calculator,
  Package,
  Warehouse,
  Smartphone,
  ChevronDown,
  Fuel
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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
        <HashLink to="/" className="navbar-logo">
          <img src={logo} alt="Klovo ERP Logo" className="logo-img" />
          <span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>
        </HashLink>


        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          <HashLink smooth to="/#about" className="nav-link">
            Hakkımızda
          </HashLink>
          <HashLink smooth to="/#features" className="nav-link">
            Özellikler
          </HashLink>
          <div className="nav-dropdown">

            <button className="nav-link dropdown-trigger">
              Ürünler
            </button>

            <div className="mega-menu">

              <HashLink to="/" className="mega-item">
                <div className="mega-icon">
                  <Boxes size={16} />
                </div>
                <div>
                  <h4>Klovo ERP</h4>
                  <p>Tüm işletme süreçlerini yönetin</p>
                </div>
              </HashLink>

              <HashLink to="/products/finans-yonetimi" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>Finans Yönetimi</h4>
                  <p>Gelir-Gider takip,cari hesaplama yönetimi tek tıklamayala kontrolünüzde</p>
                </div>
              </HashLink>

              <HashLink to="/products/e-donusum" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>E-Dönüşüm,E-Fatura & E-Arşiv</h4>
                  <p>Elektronik fatura ve arşivleme çözümleri. E-dönüşüm merkezi.</p>
                </div>
              </HashLink>

              <HashLink to="/products/restoran-cafe" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>Restoran ve Cafe Yönetimi</h4>
                  <p>Restoran ve cafeler için özel çözümler.İşyeriniz için kolay ve kullanışlı iş süreçleri.</p>
                </div>
              </HashLink>

              <HashLink to="/products/akaryakit" className="mega-item">
                <div className="mega-icon">
                  <Fuel size={16} />
                </div>
                <div>
                  <h4>Akaryakıt yönetimi</h4>
                  <p>Akaryakıt istasyonları için özel çözümler. Yakıt stok yönetimi ve satış süreçleri entegre.</p>
                </div>
              </HashLink>

              <HashLink to="/products/perakende" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>Parakende Yönetimi</h4>
                  <p>Parakende işletmeler için özel çözümler. Satış, stok ve müşteri yönetimi entegre.</p>
                </div>
              </HashLink>

              <HashLink to="/products/depo-stok" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>Depo Stok Takipi</h4>
                  <p>Stok durumunu ve hareketlerini takip edin.Ürün bazlı detaylı kritik takip.</p>
                </div>
              </HashLink>
              <HashLink to="/products/api" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>API Entegrasyonu</h4>
                  <p>E-ticaret pazaryeri entegrasyonu.Üçüncü taraf sistemlerle kolay entegrasyon.</p>
                </div>
              </HashLink>

              <HashLink to="/products/cloud-altyapi" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>Cloud Altyazıpı Hizmetleri</h4>
                  <p>Cloud tabanlı altyapı hizmetleri ile güvenli ve maliyetsiz çözüm sunar.</p>
                </div>
              </HashLink>




              <HashLink to="/products/e-tasarim" className="mega-item">
                <div className="mega-icon">
                  <Users size={16} />
                </div>
                <div>
                  <h4>E-Tasarım ve Geliştirme</h4>
                  <p> QR kod tabanlı çözümler.Barkod tasarımı. E-ticaret ve hizmetler için özel geliştirme.</p>
                </div>
              </HashLink>


            </div> {/* mega-menu */}

          </div> {/* nav-dropdown */}
          <HashLink to="/#simulator" className="nav-link">
            ERP Simülatörü
          </HashLink>
          <HashLink to="/#contact" className="nav-link">
            İletişim
          </HashLink>
        </nav>



         <div className="navbar-cta">
        
          <HashLink to="/#contact" className="btn btn-primary btn-navbar">
            Demo Talep Et
          </HashLink>
        </div> 

        <div className="navbar-demo">
          <HashLink to="/demo-talep" className="btn btn-primary btn-navbar">
            Hemen Deneyelim🚀
          </HashLink>

        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-mobile-toggle" onClick={toggleMobileMenu} aria-label="Menüyü Aç/Kapat">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="navbar-mobile-nav">
          <HashLink to="/#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Hakkımızda
          </HashLink>
          <HashLink to="/#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Özellikler
          </HashLink>
          <button
            className="mobile-nav-link mobile-products-toggle"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          >
            Ürünler {mobileProductsOpen ? "▲" : "▼"}
          </button>

          {mobileProductsOpen && (
            <div className="mobile-products-list">
              <HashLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Klovo ERP</HashLink>

              <HashLink to="/products/finans-yonetimi" onClick={() => setIsMobileMenuOpen(false)}>
                Finans Yönetimi
              </HashLink>

              <HashLink to="/products/e-donusum" onClick={() => setIsMobileMenuOpen(false)}>
                E-Dönüşüm
              </HashLink>

              <HashLink to="/products/restoran-cafe" onClick={() => setIsMobileMenuOpen(false)}>
                Restoran & Cafe
              </HashLink>

              <HashLink to="/products/akaryakit" onClick={() => setIsMobileMenuOpen(false)}>
                Akaryakıt Yönetimi
              </HashLink>

              <HashLink to="/products/perakende" onClick={() => setIsMobileMenuOpen(false)}>
                Perakende Yönetimi
              </HashLink>

              <HashLink to="/products/depo-stok" onClick={() => setIsMobileMenuOpen(false)}>
                Depo & Stok
              </HashLink>

              <HashLink to="/products/api" onClick={() => setIsMobileMenuOpen(false)}>
                API Entegrasyonu
              </HashLink>

              <HashLink to="/products/cloud-altyapi" onClick={() => setIsMobileMenuOpen(false)}>
                Cloud Altyapı
              </HashLink>

              <HashLink to="/products/e-tasarim" onClick={() => setIsMobileMenuOpen(false)}>
                E-Tasarım
              </HashLink>
            </div>
          )}
          <HashLink to="/#simulator" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            ERP Simülatörü
          </HashLink>
          <HashLink to="/#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            İletişim
          </HashLink>
          {/* <ThemeToggle className="theme-toggle--mobile" /> */}
          <HashLink to="/#contact" className="btn btn-primary w-full text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Demo Talep Et
          </HashLink>

          {mobileProductsOpen && (
            <div className="mobile-products-list">
              <HashLink to="/urunler/erp">ERP</HashLink>
              <HashLink to="/urunler/cloud">Cloud</HashLink>
              <HashLink to="/urunler/depo">Depo Yönetimi</HashLink>
              <HashLink to="/urunler/finans">Finans Yönetimi</HashLink>
              {/* diğer ürünler */}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
