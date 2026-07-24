import '../style/DemoForm.css';
import logo from '../assets/logo_yeni_1.png';
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function DemoForm() {
  const location = useLocation();

  const {
    modules = [],
    sector = "",
    companySize = "",
    budget = "",
  } = location.state || {};

  const defaultMessage = `Merhaba,

${modules.join(", ")} Ürünleriniz hakkında detaylı bilgi almak istiyorum.

İşletmem için uygun çözüm hakkında benimle iletişime geçebilir misiniz?

Teşekkürler.`;

  const [message, setMessage] = useState(defaultMessage);
  const [selectedSector, setSelectedSector] = useState(sector || "");

  const sectors = [
    "Perakende",
    "Market",
    "Restoran",
    "Cafe",
    "Akaryakıt İstasyonu",
    "Üretim",
    "Toptan Satış",
    "Dağıtım",
    "Lojistik",
    "E-Ticaret",
    "Hizmet",
    "Sağlık",
    "Eğitim",
  ];

  return (
    <div className="demo-page">

      <Link to="/" className="demo-page-logo">
        <img src={logo} alt="Klovo ERP Logo" />
      </Link>

      <div className="demo-container">
        <div className="demo-info">
          <span className="demo-badge">Ücretsiz Demo</span>
          <h1>Klovo ERP'yi İşletmeniz İçin Keşfedin</h1>

          <p>
            İşletmenizin dijital dönüşüm yolculuğuna ilk adımı bugün atın. Kısa başvuru formunu doldurduktan 
            sonra Klovo ERP uzmanlarımız sizinle iletişime geçerek ihtiyaçlarınızı analiz edecek, sektörünüze 
            uygun modülleri birlikte belirleyecek ve tamamen ücretsiz, kişiselleştirilmiş bir demo planlayacaktır. 
            Böylece satın alma kararı vermeden önce sistemi gerçek senaryolar 
            üzerinden detaylı şekilde inceleme fırsatı elde edebilirsiniz.
          </p>

          <ul className="demo-features">
            <li>✓ Hızlı kurulum</li>
            <li>✓ Bulut tabanlı altyapı</li>
            <li>✓ Sınırsız kullanıcı desteği</li>
            <li>✓ Ücretsiz danışmanlık</li>
          </ul>
        </div>

        <div className="demo-form-card">
          <h2>İletişim ve Demo Talep Formu</h2>

          <form className="demo-form">
            <input type="text" placeholder="Ad Soyad" />
            <input type="text" placeholder="Firma Adı" />
            <input type="email" placeholder="E-posta" />
            <input type="tel" placeholder="Telefon" />

            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              <option value="">Sektör Seçiniz</option>

              {sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>

            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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