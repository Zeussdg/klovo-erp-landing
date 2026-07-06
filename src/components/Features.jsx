import React from 'react';
import { 
  BarChart3, 
  Package, 
  FileCheck, 
  PieChart, 
  Cloud, 
  Share2, 
  Users, 
  Smartphone 
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <BarChart3 size={24} />,
      title: "Finans Yönetimi",
      desc: "Gelir-gider takibi, cari hesap yönetimi ve mali süreçlerinizin tek ekrandan kontrolü.",
      color: "blue"
    },
    {
      icon: <Package size={24} />,
      title: "Stok Takibi",
      desc: "Depo hareketleri, anlık stok durumu ve ürün bazlı detaylı kritik limit takipleri.",
      color: "green"
    },
    {
      icon: <FileCheck size={24} />,
      title: "E-Fatura & E-Arşiv",
      desc: "Dijital fatura süreçlerinizi doğrudan sistem üzerinden daha hızlı ve hatasız yönetin.",
      color: "purple"
    },
    {
      icon: <PieChart size={24} />,
      title: "Gelişmiş Raporlama",
      desc: "İşletmenizin geleceğine yön veren grafikler, karlılık tabloları ve otomatik analiz ekranları.",
      color: "pink"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Altyapı",
      desc: "İnternet olan her yerden güvenli erişim, sıfır sunucu maliyeti ve otomatik yedekleme.",
      color: "yellow"
    },
    {
      icon: <Share2 size={24} />,
      title: "API Entegrasyonu",
      desc: "Farklı yazılımlar ve e-ticaret pazaryeri entegrasyonlarıyla tam senkronize çalışma.",
      color: "blue"
    },
    {
      icon: <Users size={24} />,
      title: "Kullanıcı & Yetki",
      desc: "Personelleriniz için detaylı yetki grupları oluşturarak güvenli bir çalışma ortamı sunun.",
      color: "purple"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Esnek Erişim",
      desc: "Telefon, tablet veya bilgisayar üzerinden duyarlı ve tam uyumlu mobil arayüz deneyimi.",
      color: "green"
    }
  ];

  return (
    <section className="features-section section-padding" id="features">
      <div className="container">
        <div className="section-header">
          <div className="badge">Özellikler</div>
          <h2>Modüllerimiz ile Gücünüze Güç Katın</h2>
          <p>
            Klovo ERP, işletmenizin ihtiyacı olan tüm yönetim araçlarını tek bir çatı altında esnek ve ölçeklenebilir şekilde sunar.
          </p>
        </div>

        <div className="grid-4">
          {featuresList.map((feat, index) => (
            <div key={index} className="feature-card glass-card">
              <div className={`feature-icon-wrapper feat-color-${feat.color}`}>
                {feat.icon}
              </div>
              <h4>{feat.title}</h4>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
