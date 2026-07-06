import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import ErpSimulator from './components/ErpSimulator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') === 'standalone' || params.get('mode') === 'standalone') {
      setIsStandalone(true);
      document.body.style.overflow = 'hidden'; // Disable scroll in standalone mode
    } else {
      setIsStandalone(false);
      document.body.style.overflow = '';
    }
  }, []);

  const handleExitStandalone = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  if (isStandalone) {
    return (
      <div className="standalone-wrapper" style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden'
      }}>
        <div className="standalone-header" style={{
          display: 'flex',
          JustifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(11, 15, 25, 0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="standalone-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="logo-text">KLOVO<span className="logo-subtext">ERP</span></span>
            <span className="badge" style={{ margin: 0, padding: '0.15rem 0.5rem', fontSize: '0.75rem' }}>BAĞIMSIZ DEMO</span>
          </div>
          <button className="btn btn-secondary" onClick={handleExitStandalone} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Ana Sayfaya Dön
          </button>
        </div>
        <div className="standalone-content" style={{ flexGrow: 1, padding: '1rem', overflow: 'hidden' }}>
          <ErpSimulator isStandaloneMode={true} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Interactive Simulator Section */}
      <section className="simulator-section section-padding" id="simulator">
        <div className="container">
          <div className="section-header">
            <div className="badge">Test Sürüşü</div>
            <h2>Klovo ERP'yi Hemen Deneyin</h2>
            <p>
              Sistemi satın almadan önce bulut panelimizi aşağıda canlı olarak deneyimleyebilirsiniz. Finans girdileri ekleyin, stok adetlerini değiştirin veya yeni faturalar oluşturun; sistem anında tepki verir.
            </p>
          </div>
          <ErpSimulator isStandaloneMode={false} />
        </div>
      </section>

      <AboutUs />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
