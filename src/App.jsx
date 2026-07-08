import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import ErpSimulator from './components/ErpSimulator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoForm from './pages/DemoForm'; // veya ./pages/DemoForm
import DepotStockPage from "./pages/products/DepotStockPage";

function Home() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('demo') === 'standalone' ||
      params.get('mode') === 'standalone'
    ) {
      setIsStandalone(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsStandalone(false);
      document.body.style.overflow = '';
    }
  }, []);

  const handleExitStandalone = () => {
    window.location.href =
      window.location.origin + window.location.pathname;
  };

  if (isStandalone) {
    return (
      <div className="standalone-wrapper">
        {/* mevcut standalone kodun buraya gelecek */}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />

      <section className="simulator-section section-padding" id="simulator">
        <div className="container">
          <div className="section-header">
            <div className="badge">Test Sürüşü</div>
            <h2>Klovo ERP'yi Hemen Deneyin</h2>
            <p>
              Sistemi satın almadan önce bulut panelimizi aşağıda canlı olarak
              deneyimleyebilirsiniz.
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

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-talep" element={<DemoForm />} />
        <Route path="/products/depo-stok" element={<DepotStockPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
