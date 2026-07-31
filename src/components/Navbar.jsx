import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_yeni_1.png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Wallet,
  Package,
  Users,
  Receipt,
  Archive,
  Truck,
  ShoppingCart,
  Store,
  Boxes,
  UtensilsCrossed,
  Coffee,
  PlugZap,
  Cloud,
  Fuel,
  Code2,
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
        <HashLink to="/#home" className="navbar-logo">
          <img src={logo} alt="Klovo ERP Logo" className="logo-img" />
          {/*<span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>*/}
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

              {/* 1. SÜTUN - ÜRÜNLER */}
              <div className="mega-column">
                <h3 className="mega-title">Ürünler</h3>

                <HashLink to="/" className="product-card">
                  <div className="mega-icon">
                    <Boxes size={22} />
                  </div>
                  <div>
                    <h4>Klovo One ERP</h4>
                    <p>Tüm işletme süreçlerini tek platformdan yönetin.</p>
                  </div>
                </HashLink>

                <HashLink to="/" className="product-card">
                  <div className="mega-icon">
                    <Store size={22} />
                  </div>
                  <div>
                    <h4>Klovo One Mobil</h4>
                    <p>Sahada çalışan ekipler için mobil ERP deneyimi.</p>
                  </div>
                </HashLink>

                <HashLink to="/" className="product-card">
                  <div className="mega-icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4>Klovo One Mobil Patron</h4>
                    <p>Yöneticiler için anlık rapor ve kontrol paneli.</p>
                  </div>
                </HashLink>
              </div>

              {/* 2. SÜTUN - ANA MODÜLLER */}
              <div className="mega-column">
                <h3 className="mega-title">Ana Modüller</h3>

                <HashLink to="/products/depo-stok" className="mega-link">
                  <Package size={18} />
                  <span>Stok Yönetimi</span>
                </HashLink>

                <HashLink to="/products/hizmet-yonetimi" className="mega-link">
                  <Receipt size={18} />
                  <span>Hizmet Yönetimi</span>
                </HashLink>

                <HashLink to="/products/masraf-yonetimi" className="mega-link">
                  <Receipt size={18} />
                  <span>Masraf Yönetimi</span>
                </HashLink>

                <HashLink to="/products/personel-yonetimi" className="mega-link">
                  <Users size={18} />
                  <span>Personel Yönetimi</span>
                </HashLink>

                <HashLink to="/products/satis-ve-musteri" className="mega-link">
                  <Users size={18} />
                  Satış ve Müşteri Yönetimi
                </HashLink>

                <HashLink to="/products/satinalma-tedarikci" className="mega-link">
                  <Truck size={18} />
                  <span>Satın Alma & Tedarikçi</span>
                </HashLink>

                <HashLink to="/products/finans-yonetimi" className="mega-link">
                  <Wallet size={18} />
                  <span>Finans Yönetimi</span>
                </HashLink>
              </div>

              {/* 3. SÜTUN - ALT MODÜLLER */}
              <div className="mega-column">
                <h3 className="mega-title">Alt Modüller</h3>

                <div className="mega-groups-grid">



                  <div className="mega-group">
                    <HashLink to="/products/perakende" className="mega-group-title">
                      <ShoppingCart size={18} />
                      <span> Perakende Yönetimi</span>
                    </HashLink>

                    <span>Kasa Yönetimi</span>
                    <span>POS Yönetimi</span>
                    <span>Barkod Etiket Yönetimi</span>
                    <span>Sayım İşleri</span>
                    <span>Yazar Kasa Entegrasyonu</span>
                  </div>

                  <div className="mega-group">
                    <HashLink to="/products/restoran-cafe" className="mega-group-title">
                      <UtensilsCrossed size={18} />
                      <span>Restoran Yönetimi</span>
                    </HashLink>

                    <span>Kasa Yönetimi</span>
                    <span>Paket / Gel-Al / Masa Yönetimi</span>
                    <span>Menü Yönetimi</span>
                    <span>QR Menü</span>
                    <span>Yazar Kasa Entegrasyonu</span>
                  </div>

                  <div className="mega-group">
                    <HashLink to="/products/akaryakit" className="mega-group-title">

                      <Fuel size={18} />
                      <span>Akaryakıt Yönetimi</span>
                    </HashLink>

                    <span>Pompacı Hesabı</span>
                    <span>Sayaç Satışları</span>
                    <span>Tank Yönetimi</span>
                    <span>Turpak / ASİS Entegrasyonu</span>
                    <span>Saha Satış Yönetimi</span>
                  </div>

                  <div className="mega-group">
                    <HashLink to="/products/e-donusum" className="mega-group-title">
                      <Archive size={18} />
                      E-Dönüşüm
                    </HashLink>

                    <span>E-Fatura / </span>
                    <span>E-Arşiv</span>
                  </div>

                </div>
              </div>

              {/* 4. SÜTUN - GELECEK */}
              <div className="mega-column">
                <h3 className="mega-title">Gelecek Modüller</h3>

                <div className="coming-item">
                  <span>Banka Entegrasyonu</span>
                  <small>Yakında</small>
                </div>

                <div className="coming-item">
                  <span>Üretim Yönetimi</span>
                  <small>Yakında</small>
                </div>

                <div className="coming-item">
                  <span>Perakende Kampanya Yönetimi</span>
                  <small>Yakında</small>
                </div>

                <div className="coming-item">
                  <span>E-İrsaliye</span>
                  <small>Yakında</small>
                </div>

                <div className="coming-item">
                  <span>Restoran Portal Entegrasyonları</span>
                  <small>Yakında</small>
                </div>
              </div>

            </div>

          </div> {/* nav-dropdown */}
          <HashLink to="/#simulator" className="nav-link">
            Mobil ERP Simülatörü
          </HashLink>
          <HashLink to="/#contact" className="nav-link">
            İletişim
          </HashLink>
        </nav>



        {/* <div className="navbar-cta">
        
          <HashLink to="/#contact" className="btn btn-primary btn-navbar">
            Demo Talep Et
          </HashLink>
        </div> */}

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
