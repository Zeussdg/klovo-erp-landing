import React from 'react';
import { Shield, Zap, Cloud, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="glow-bg glow-blue"></div>
      <div className="glow-bg glow-purple"></div>
      
      <div className="container hero-container grid-2">
        <div className="hero-content">
          <div className="badge">
            <Cloud size={14} style={{ marginRight: '0.4rem' }} /> Bulut Tabanlı ERP Çözümü
          </div>
          <h1>
            İşletmenizi Bulutun Gücüyle <span className="text-gradient">Yönetin</span>
          </h1>
          <p className="hero-description">
            Klovo ERP ile finans, stok, satış, operasyon ve e-fatura süreçlerinizi tek bir merkezden takip edin. Hızlı kurulumu, modern arayüzü ve güçlü entegrasyon kabiliyetiyle işinizi geleceğe taşıyın.
          </p>
          <div className="hero-actions">
            <a href="#simulator" className="btn btn-primary">
              Canlı Simülasyonu Dene <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              İletişime Geç
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <Zap size={18} className="stat-icon-blue" />
              <span>Saniyeler İçinde Kurulum</span>
            </div>
            <div className="hero-stat-item">
              <Shield size={18} className="stat-icon-green" />
              <span>SSL ve Güvenli Yedekleme</span>
            </div>
          </div>
        </div>
        
        {/* Right side: Modern Animated Tech Graphic (Dashboard Mockup in CSS) */}
        <div className="hero-graphic-container animate-float">
          <div className="hero-graphic-card glass-card">
            <div className="graphic-header">
              <div className="graphic-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="graphic-title-bar">klovo-cloud-panel</div>
            </div>
            <div className="graphic-body">
              {/* Financial mini graph representation */}
              <div className="graphic-card-small">
                <div className="graphic-card-title">Finansal Akış</div>
                <div className="graphic-chart-bar-flow">
                  <div className="flow-bar" style={{ height: '30%', background: '#3b82f6' }}></div>
                  <div className="flow-bar" style={{ height: '50%', background: '#8b5cf6' }}></div>
                  <div className="flow-bar" style={{ height: '70%', background: '#ec4899' }}></div>
                  <div className="flow-bar" style={{ height: '90%', background: '#10b981' }}></div>
                </div>
              </div>
              
              <div className="graphic-flex-row">
                {/* User info */}
                <div className="graphic-card-mini">
                  <div className="mini-label">Kullanıcılar</div>
                  <div className="mini-val">+42 Aktif</div>
                </div>
                {/* Cloud sync */}
                <div className="graphic-card-mini highlight">
                  <div className="mini-label">Yedekleme</div>
                  <div className="mini-val">Tamamlandı</div>
                </div>
              </div>

              {/* Console log simulation */}
              <div className="graphic-console">
                <code>$ klovo-erp --sync</code>
                <code className="text-success">&gt; Veriler şifrelendi ve buluta aktarıldı.</code>
                <code className="text-success">&gt; API entegrasyonu aktif (200 OK)</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
