import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Hero3D from "./3DMockup/Hero3D";

//import ErpSimulator from './components/ErpSimulator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoForm from './pages/DemoForm'; // veya ./pages/DemoForm
import DepotStockPage from "./pages/products/DepotStockPage";
import ApiIntegrationPage from "./pages/products/ApiIntegrationPage";
import CloudPage from "./pages/products/CloudPage";
import EDonusumPage from "./pages/products/EDonusumPage";
import FinancePage from "./pages/products/FinancePage";
import RestaurantCafePage from "./pages/products/RestaurantCafePage";
import ETasarimPage from "./pages/products/ETasarimPage";
import PerakendePage from "./pages/products/PerakendePage";
import AkaryakitPage from "./pages/products/AkaryakitPage";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocials from "./components/FloatingSocials";
import CTA from "./components/CTA";



const PhoneDemo = lazy(() => import('./components/PhoneDemo'));
const TabletDemo = lazy(() => import('./components/TabletDemo'));

function Home() {
  const [isStandalone, setIsStandalone] = useState(false);
  const [activeDevice, setActiveDevice] = useState('phone');
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

          <div className="demo-device-switcher">
            <button
              className={activeDevice === 'phone' ? 'active' : ''}
              onClick={() => setActiveDevice('phone')}
            >
              Telefon
            </button>

            <button
              className={activeDevice === 'tablet' ? 'active' : ''}
              onClick={() => setActiveDevice('tablet')}
            >
              Tablet
            </button>
          </div>

          <Suspense fallback={<div className="demo-loading">Demo yükleniyor…</div>}>
            {activeDevice === 'phone' ? (
              <PhoneDemo isStandaloneMode={false} />
            ) : (
              <TabletDemo isStandaloneMode={false} />
            )}
          </Suspense>
          {/* <ErpSimulator isStandaloneMode={false} /> */}
        </div>
      </section>
      <AboutUs />
      <Features />
       <CTA />
      <Contact />
      <Footer />
    </>
  );


}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FloatingSocials />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-talep" element={<DemoForm />} />
        <Route path="/products/depo-stok" element={<DepotStockPage />} />
        <Route path="/products/api" element={<ApiIntegrationPage />} />
        <Route path="/products/cloud-altyapi" element={<CloudPage />} />
        <Route path="/products/e-donusum" element={<EDonusumPage />} />
        <Route path="/products/finans-yonetimi" element={<FinancePage />} />
        <Route path="/products/restoran-cafe" element={<RestaurantCafePage />} />
        <Route path="/products/e-tasarim" element={<ETasarimPage />} />
        <Route
          path="/products/perakende"
          element={<PerakendePage />}
        />
        <Route
          path="/products/akaryakit"
          element={<AkaryakitPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
