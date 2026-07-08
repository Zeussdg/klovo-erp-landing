import React from 'react';
import '../style/DemoForm.css';
import logo from '../assets/logo_yeni_1.png';

function DemoForm() {
  return (
    <div className="demo-page">

       <div className="demo-page-logo">
            <img src={logo} alt="Klovo ERP Logo" />
          </div>

      <div className="demo-container">
        <div className="demo-info">
          <span className="demo-badge">Ücretsiz Demo</span>
          <h1>Klovo ERP'yi İşletmeniz İçin Keşfedin</h1>

          <p>
            Kısa bir form doldurun, ekibimiz sizinle iletişime geçerek
            işletmenize özel bir demo planlasın.
          </p>

          <ul className="demo-features">
            <li>✓ Hızlı kurulum</li>
            <li>✓ Bulut tabanlı altyapı</li>
            <li>✓ Sınırsız kullanıcı desteği</li>
            <li>✓ Ücretsiz danışmanlık</li>
          </ul>
        </div>

        <div className="demo-form-card">
          <h2>Demo Talep Formu</h2>

          <form className="demo-form">
            <input type="text" placeholder="Ad Soyad" />
            <input type="text" placeholder="Firma Adı" />
            <input type="email" placeholder="E-posta" />
            <input type="tel" placeholder="Telefon" />

            <select>
              <option>Sektör Seçiniz</option>
              <option>Perakende</option>
              <option>Üretim</option>
              <option>E-Ticaret</option>
              <option>Hizmet</option>
            </select>

            <textarea
              rows="4"
              placeholder="İhtiyaçlarınızı kısaca anlatın..."
            />

            <button type="submit" className="demo-submit-btn">
              Demo Talep Et 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DemoForm;