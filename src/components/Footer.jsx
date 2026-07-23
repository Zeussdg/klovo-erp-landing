import React from 'react';
import logo from '../assets/logo_yeni_1.png';
import { HashLink } from "react-router-hash-link";
import appStore from "/download-on-the-app-store.svg";
import googlePlay from "/GetItOnGooglePlay_Badge_Web_color_Turkish.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <HashLink smooth to="/" className="footer-logo">
              <img src={logo} alt="Klovo ERP Logo" className="logo-img" />
             {/* <span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>*/}
            </HashLink>
            <p>Bulut tabanlı yapısı ile finans, stok, satış, operasyon ve e-fatura süreçlerinizi tek platformdan yönetin.</p>
            <div className="store-buttons">
              <a
                href="https://apps.apple.com/tr/app/klovo-one-erp/id6770559208"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/download-on-the-app-store.svg" alt="App Store" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.klovo.oneklovoerp&hl=tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GetItOnGooglePlay_Badge_Web_color_Turkish.png"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Bağlantılar</h4>
              <HashLink smooth to="/#home">Ana Sayfa</HashLink>
              <HashLink smooth to="/#about">Hakkımızda</HashLink>
              <HashLink smooth to="/#features">Özellikler</HashLink>
              <HashLink smooth to="/#simulator">Mobil ERP Simülatörü</HashLink>
            </div>

            <div className="footer-links-col">
              <h4>İletişim</h4>
              <HashLink to="tel:08503463201">0850 346 32 01</HashLink>
              <HashLink to="mailto:info@klovo.com">info@klovo.com</HashLink>
              <HashLink smooth to="/#contact">Destek Al</HashLink>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Klovo ERP - Tüm Hakları Saklıdır.</p>
          <div className="footer-bottom-links">
            <HashLink to="#" onClick={(e) => { e.preventDefault(); alert('Gizlilik Sözleşmesi yakında eklenecektir.'); }}>Gizlilik Sözleşmesi</HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
