import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRequestKey = () => {
      setFormData(prev => ({
        ...prev,
        message: 'Klovo ERP deneme sürümü için lisans anahtarı (License Key) talep ediyorum.'
      }));
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('klovo-request-key', handleRequestKey);
    return () => window.removeEventListener('klovo-request-key', handleRequestKey);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
      
      // Auto dismiss success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container grid-2">
        {/* Contact Info Details */}
        <div className="contact-info">
          <div className="badge">İletişim</div>
          <h2>Bize Ulaşın</h2>
          <p className="contact-sub">
            Klovo ERP hakkında daha fazla bilgi almak, özel entegrasyon taleplerinizi iletmek veya işletmenize özel demo planlamak için bizimle iletişime geçebilirsiniz.
          </p>

          <div className="info-list">
            <a href="tel:08503463201" className="info-item glass-card">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">Telefon</span>
                <span className="info-val">0850 346 32 01</span>
              </div>
            </a>

            <a href="mailto:info@klovo.com" className="info-item glass-card">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">E-posta</span>
                <span className="info-val">info@klovo.com</span>
              </div>
            </a>

            <div className="info-item glass-card">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">Adres</span>
                <span className="info-val">
                  Yıldırım Beyazıt Mahallesi Aşık Veysel Bulvarı Erciyes Teknopark Tekno 2 No: 10 Melikgazi / Kayseri
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <div className="contact-card glass-card">
            <h3>Biz Sizi Arayalım</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Aşağıdaki formu doldurun, ERP uzmanlarımız sizinle iletişime geçsin.
            </p>

            {isSubmitted ? (
              <div className="form-success-alert">
                <div className="success-icon-wrapper">
                  <Check size={28} />
                </div>
                <h4>Talebiniz Alındı!</h4>
                <p>Mesajınız başarıyla iletildi. ERP danışmanlarımız en kısa sürede size dönüş sağlayacaktır.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız *" 
                    required 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="form-grid-2">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Şirket Adı" 
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder="Telefon Numarası" 
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="E-posta Adresi *" 
                    required 
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    placeholder="Mesajınız veya Sorularınız *" 
                    rows="4" 
                    required 
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="btn btn-primary w-full btn-submit"
                >
                  {isLoading ? 'Gönderiliyor...' : (
                    <>
                      <span>Bilgi Alın</span> <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
