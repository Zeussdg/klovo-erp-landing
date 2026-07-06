import React from 'react';
import { CheckCircle2, Award, Zap, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container grid-2">
        {/* Left Side: Overlapping Card Collage (Premium Visual) */}
        <div className="about-visual">
          <div className="visual-card main-card glass-card">
            <span className="visual-badge">Bulut ERP</span>
            <h3>Modern Altyapı</h3>
            <p>Operasyonel verimliliği artırmak ve süreçleri sadeleştirmek amacıyla yeni nesil teknolojilerle tasarlandı.</p>
            <div className="visual-bar-container">
              <div className="visual-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <div className="visual-stats-text">
              <span>Verimlilik Artışı</span>
              <span>+85%</span>
            </div>
          </div>
          
          <div className="visual-card sub-card glass-card">
            <div className="flex-row-align">
              <div className="icon-circle">
                <Award size={18} color="#f59e0b" />
              </div>
              <div>
                <h4>Kolay Geçiş</h4>
                <p style={{ fontSize: '0.8rem', margin: 0 }}>Mevcut verilerinizi dakikalar içinde aktarın.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="about-content">
          <div className="badge">Biz Kimiz?</div>
          <h2>İşletmenizin İşleyişini Sadeleştiriyoruz</h2>
          <p className="section-desc">
            Klovo ERP, firmaların finansal, operasyonel ve yönetsel tüm süreçlerini tek bir bulut platformda birleştiren modern bir ERP çözümüdür. Ölçeğiniz ne olursa olsun, karmaşık süreçleri ortadan kaldırır ve işinize odaklanmanızı sağlar.
          </p>
          
          <div className="about-points">
            <div className="point-item">
              <div className="point-icon-wrapper">
                <CheckCircle2 className="point-icon" />
              </div>
              <div>
                <h4>Kolay ve Hızlı Kullanım</h4>
                <p>Karmaşık eğitim süreçlerine gerek kalmadan, personelleriniz sistemi saatler içinde kullanmaya başlayabilir.</p>
              </div>
            </div>

            <div className="point-item">
              <div className="point-icon-wrapper">
                <CheckCircle2 className="point-icon" />
              </div>
              <div>
                <h4>Geniş Entegrasyon Seçenekleri</h4>
                <p>E-fatura entegrasyonu, banka entegrasyonları ve esnek API yapısı sayesinde mevcut yazılımlarınızla mükemmel uyum.</p>
              </div>
            </div>

            <div className="point-item">
              <div className="point-icon-wrapper">
                <CheckCircle2 className="point-icon" />
              </div>
              <div>
                <h4>Kesintisiz Güvenlik</h4>
                <p>Verileriniz çift yönlü şifreleme ve düzenli yedekleme altyapısı ile güvence altında tutulur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
