import React from 'react';
import logo from '../assets/logo_yeni_1.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src={logo} alt="Klovo ERP Logo" className="logo-img" />
              <span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>
            </a>
            <p>Bulut tabanlı yapısı ile finans, stok, satış, operasyon ve e-fatura süreçlerinizi tek platformdan yönetin.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Bağlantılar</h4>
              <a href="#home">Ana Sayfa</a>
              <a href="#about">Hakkımızda</a>
              <a href="#products">Ürünler</a>
              <a href="#features">Özellikler</a>
              <a href="#simulator">ERP Simülatörü</a>
            </div>
            
            <div className="footer-links-col">
              <h4>İletişim</h4>
              <a href="tel:08503463201">0850 346 32 01</a>
              <a href="mailto:info@klovo.com">info@klovo.com</a>
              <a href="#contact">Destek Al</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Klovo ERP - Tüm Hakları Saklıdır.</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Gizlilik Sözleşmesi yakında eklenecektir.'); }}>Gizlilik Sözleşmesi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
