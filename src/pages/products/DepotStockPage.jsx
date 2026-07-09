import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
  Package,
  Barcode,
  Truck,
  TriangleAlert,
  ChartColumn,
  Cloud
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

export default function DepotStockPage() {
  return (
    <>
      <Navbar />
      <div className="container">

      <main className="product-layout">

      <div className="product-content">

        <section className="depot-hero">

          <div className="container depot-hero-container">

            {/* Sol Alan */}

            <div className="hero-content">

              <span className="hero-badge">
                📦 Depo & Stok Takibi
              </span>

              <h1>
                Depo ve Stok Yönetimini
                <br />
                Tek Panelden Yönetin
              </h1>

              <p>
                Gerçek zamanlı stok takibi, barkod desteği,
                kritik stok uyarıları ve çoklu depo yönetimi ile
                işletmenizin tüm stok süreçlerini kolayca yönetin.
              </p>

              <ul className="hero-list">

                <li>✔ Gerçek zamanlı stok takibi</li>

                <li>✔ Barkod ve QR Kod desteği</li>

                <li>✔ Kritik stok uyarıları</li>

                <li>✔ Çoklu depo yönetimi</li>

              </ul>

              <div className="hero-buttons">

                <button className="btn btn-primary">
                  Demo Talep Et
                </button>

                <button className="btn btn-secondary">
                  Teklif Al
                </button>

              </div>

            </div>
            

            

           

          </div>

        </section>

        <section className="why-section">

  <div className="container">

    <div className="section-header">

      <span className="section-badge">
        Avantajlarımız
      </span>

      <h2>Neden Klovo Depo & Stok Takibi?</h2>

      <p>
        İşletmenizin stok süreçlerini daha hızlı,
        daha güvenli ve daha verimli hale getiren
        modern çözümler sunuyoruz.
      </p>

    </div>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-icon">
        <Package size={24}/>
    </div>
        <h3>Anlık Stok Takibi</h3>
        <p>Gerçek zamanlı stok hareketlerini takip edin.</p>
      </div>

      <div className="why-card">

        <div className="why-icon">
          <Barcode size={24} />
        </div>
        <h3>Barkod Yönetimi</h3>
        <p>Barkod ve QR kod desteğiyle hızlı işlem yapın.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">
          <Truck size={24} />
        </div>

        <h3> Depolar Arası Transfer</h3>
        <p>Farklı depolar arasında kolay ürün aktarımı.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">
          <TriangleAlert size={24} />
        </div>
        <h3> Kritik Stok Uyarıları</h3>
        <p>Stok bitmeden otomatik bildirim alın.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">
          <ChartColumn size={24} />
        </div>
        <h3> Gelişmiş Raporlama</h3>
        <p>Detaylı analizlerle doğru kararlar verin.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">
          <Cloud size={24} />
        </div>
        <h3> Bulut Altyapısı</h3>
        <p>Her yerden güvenli erişim sağlayın.</p>
      </div>

    </div>

  </div>

</section>
<section className="screenshots-section">

    <div className="container">

        <div className="section-header">

            <span className="section-badge">
                Program Görselleri
            </span>

            <h2>Programı Yakından İnceleyin</h2>

            <p>
                Klovo Depo & Stok Takibi'nin modern ve kullanıcı dostu
                arayüzünü keşfedin.
            </p>

        </div>
        <div className="feature-showcase">
{/* 1. görsel */}
    <div className="showcase-image">
        <span>Program Ekran Görüntüsü</span>
    </div>

    <div className="showcase-content">

        <h3>Stok Yönetim Paneli</h3>

        <p>
            Tüm ürünlerinizi tek ekrandan yönetin.
            Stok miktarlarını takip edin,
            filtreleme yapın ve kritik stok seviyelerini görüntüleyin.
        </p>

        <ul>

            <li>✔ Gerçek zamanlı stok</li>

            <li>✔ Barkod desteği</li>

            <li>✔ Hızlı filtreleme</li>

            <li>✔ Excel aktarımı</li>

        </ul>

    </div>

</div>
{/* 2. görsel */}
<div className="feature-showcase reverse">

    <div className="showcase-content">

        <h3>Depolar Arası Transfer</h3>

        <p>
            Birden fazla depo veya şube arasında ürün transferlerini
            kolayca yönetin. Transfer sürecini anlık takip edin,
            geçmiş işlemleri görüntüleyin ve stok tutarsızlıklarının
            önüne geçin.
        </p>

        <ul>

            <li>✔ Depolar arası hızlı ürün transferi</li>

            <li>✔ Transfer geçmişi ve hareket kayıtları</li>

            <li>✔ Onay mekanizması ile güvenli işlem</li>

            <li>✔ Anlık stok güncellemesi</li>

        </ul>

    </div>

    <div className="showcase-image">
        <span>Depo Transferi Görseli</span>
        {/* Daha sonra buraya <img /> gelecek */}
    </div>

</div>

{/* stats-section*/}
<section className="stats-section">

    <div className="container">

        <div className="section-header">

            <span className="section-badge">
                Güven
            </span>

            <h2>İşletmelerin Tercihi</h2>

            <p>
                Depo ve stok süreçlerinizi güvenle yönetin.
            </p>

        </div>

        <div className="stats-grid">

            <div className="stat-card">
                <h3>500+</h3>
                <p>Aktif Firma</p>
            </div>

            <div className="stat-card">
                <h3>10.000+</h3>
                <p>Takip Edilen Ürün</p>
            </div>

            <div className="stat-card">
                <h3>%99.9</h3>
                <p>Sistem Uptime</p>
            </div>

            <div className="stat-card">
                <h3>7/24</h3>
                <p>Teknik Destek</p>
            </div>

        </div>

    </div>

</section>


    </div>

</section>

    {/* faq section */}

    <section className="faq-section">

  <div className="container">

    <div className="section-header">

      <span className="section-badge">
        Sık Sorulan Sorular
      </span>

      <h2>Aklınıza Takılan Sorular</h2>

      <p>
        Depo & Stok Takibi hakkında en çok sorulan soruları sizin için cevapladık.
      </p>

    </div>

    <div className="faq-list">

      <details className="faq-item">
        <summary>Barkod okuyucular destekleniyor mu?</summary>
        <p>
          Evet. USB, Bluetooth ve kablosuz barkod okuyucularla uyumlu çalışır.
        </p>
      </details>

      <details className="faq-item">
        <summary>Birden fazla depo yönetebilir miyim?</summary>
        <p>
          Evet. İstediğiniz kadar depo tanımlayabilir ve depolar arası transfer yapabilirsiniz.
        </p>
      </details>

      <details className="faq-item">
        <summary>Bulut tabanlı çalışıyor mu?</summary>
        <p>
          Evet. İnternet bağlantısı olan her yerden güvenli şekilde erişebilirsiniz.
        </p>
      </details>

      <details className="faq-item">
        <summary>Mobil cihazlardan kullanılabilir mi?</summary>
        <p>
          Tablet ve mobil cihazlarla uyumlu yapısı sayesinde her yerden erişim sağlayabilirsiniz.
        </p>
      </details>

    </div>

  </div>

</section>




    </div>
    <aside className="product-sidebar">

        <ProductContactForm />

    </aside>

    </main>
    </div>

      <Footer />
    </>
    
  );
}