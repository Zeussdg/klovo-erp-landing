import React from 'react';
import { CheckCircle2, Award, Zap, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section section-padding" >
      <div className="container grid-2" id="about" data-snap="true">
        {/* Left Side: Overlapping Card Collage (Premium Visual) */}
        <div className="about-visual">


          <div className="about-image">
            <img
              src="/main-page-afis.png"
              alt="Klovo ERP Dashboard"
            />
          </div>
         
        </div>

        {/* Right Side: Information */}
        <div className="about-content">
          
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
