import '../style/DemoForm.css';
import logo from '../assets/logo_yeni_1.png';
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function DemoForm() {
  const location = useLocation();
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const {
    modules = [],
    sector = "",
    companySize = "",
    
  } = location.state || {};

  const defaultMessage = `Merhaba,

${modules.join(", ")} Ürünleriniz hakkında detaylı bilgi almak istiyorum.

İşletmem için uygun çözüm hakkında benimle iletişime geçebilir misiniz?

Teşekkürler.`;

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !company.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !selectedSector ||
      !message.trim()
    ) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          company,
          email,
          phone,
          sector: selectedSector,
          message,
        },
        PUBLIC_KEY
      );

      setSuccess(true);

      alert("Demo talebiniz başarıyla gönderildi.");

      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setSelectedSector("");

      setMessage(defaultMessage);
    } catch (error) {
      console.error(error);

      alert("Mail gönderilirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="demo-page">

      <Link to="/" className="demo-page-logo">
        <img src={logo} alt="Klovo ERP Logo" />
      </Link>

      <div className="demo-container">
        <div className="demo-info">
         
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

          <form className="demo-form" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Ad Soyad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Firma Adı"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

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

            <button
              type="submit"
              className="demo-submit-btn"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Demo Talep Et 🚀"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DemoForm;