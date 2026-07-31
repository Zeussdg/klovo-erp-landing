import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';


//import ErpSimulator from './components/ErpSimulator';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoForm from './pages/DemoForm'; // veya ./pages/DemoForm
const DepotStockPage = lazy(() =>
  import("./pages/products/DepotStockPage")
);

const SatisAndMusteriPage = lazy(() =>
  import("./pages/products/SatisAndMusteriPage")
);

const SatinalmaTedarikciPage = lazy(() =>
  import("./pages/products/SatinalmaAndTedarikciPage")
);

const EDonusumPage = lazy(() =>
  import("./pages/products/EDonusumPage")
);

const FinancePage = lazy(() =>
  import("./pages/products/FinancePage")
);

const RestaurantCafePage = lazy(() =>
  import("./pages/products/RestaurantCafePage")
);

const HizmetYonetimiPage = lazy(() =>
  import("./pages/products/HizmetYonetimiPage")
);

const PerakendePage = lazy(() =>
  import("./pages/products/PerakendePage")
);

const AkaryakitPage = lazy(() =>
  import("./pages/products/AkaryakitPage")
);

const MasrafYonetimiPage = lazy(() =>
  import("./pages/products/MasrafYonetimiPage")
);

const PersonelYonetimiPage = lazy(() =>
  import("./pages/products/PersonelYonetimiPage")
);
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocials from "./components/FloatingSocials";
import CTA from "./components/CTA";
import useSectionScroll from "./hooks/useSectionScroll";



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

  useSectionScroll([
    "home",
    "about",
    "simulator",
    "features",
    "cta",
    "contact",
    "footer"
  ]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutUs />

        <section className="simulator-section section-padding" id="simulator" data-snap="false">
          <div className="container">
            <div className="section-header">



              <h2>Klovo ERP'yi Hemen Deneyin</h2>
              <p>
                Sistemi satın almadan önce bulut panelimizi aşağıda canlı olarak
                deneyimleyebilirsiniz.
              </p>
            </div>

            <div className="demo-device-switcher" >
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

        <Features />
        <CTA />
        <Contact />
        <Footer />
      </main>
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
        <Route
          path="/products/satis-ve-musteri"
          element={<SatisAndMusteriPage />}
        />
        <Route
          path="/products/satinalma-tedarikci"
          element={<SatinalmaTedarikciPage />}
        />
        <Route
          path="/products/masraf-yonetimi"
          element={<MasrafYonetimiPage />}
        />
        <Route path="/products/e-donusum" element={<EDonusumPage />} />
        <Route path="/products/finans-yonetimi" element={<FinancePage />} />
        <Route path="/products/restoran-cafe" element={<RestaurantCafePage />} />
        <Route
          path="/products/hizmet-yonetimi"
          element={<HizmetYonetimiPage />}
        />
        <Route
          path="/products/perakende"
          element={<PerakendePage />}
        />
        <Route
          path="/products/akaryakit"
          element={<AkaryakitPage />}
        />
        <Route
          path="/products/personel-yonetimi"
          element={<PersonelYonetimiPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
