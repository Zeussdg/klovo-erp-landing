import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
  Link2,
  ShoppingCart,
  RefreshCcw,
  ShieldCheck,
  Database,
  Clock3
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

export default function ApiIntegrationPage() {
  return (
    <>
      <Navbar />
      <div className="container">

      <main className="product-layout">

      <div className="product-content">

        <section className="depot-hero">

          <div className="container depot-hero-container">

            {/* head */}

            <div className="hero-content">

              <span className="hero-badge">
                🔗 API Entegrasyonu
                </span>

              <h1>
                Tüm Sistemlerinizi
                <br />
                Tek Merkezden Yönetin
              </h1>

              <p>
                 Klovo API Entegrasyonu ile ERP sisteminizi
                 e-ticaret pazaryerleri, muhasebe programları,
                 kargo firmaları ve özel yazılımlar ile kolayca
                 entegre edin. Tüm verilerinizi tek panel üzerinden
                 yönetin.
              </p>

              <ul className="hero-list">

                <li>✔ Pazaryeri entegrasyonu</li>

                <li>✔ Otomatik sipariş senkronizasyonu</li>

                <li>✔ Gerçek zamanlı stok güncellemesi</li>

                <li>✔ Güvenli API altyapısı</li>

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
    {/* avantaj section */}
    <section className="why-section">

        <div className="container">

        <div className="section-header">

            <span className="section-badge">
             Avantajlarımız
            </span>
            <h2>Neden Klovo API Entegrasyonu?</h2>
            <p>
                Farklı platformlar arasında veri aktarımını otomatikleştirin,
                manuel işlemleri ortadan kaldırın ve tüm süreçlerinizi tek
                merkezden yönetin.
            </p>
        </div>

        <div className="why-grid">

        <div className="why-card">
         <div className="why-icon">
            <Link2 size={24}/>
        </div>
        <h3>Hazır API Altyapısı</h3>
        <p>REST API desteği sayesinde mevcut sistemlerinize hızlı entegrasyon sağlayın.</p>
      </div>

        <div className="why-card">

            <div className="why-icon">
             <ShoppingCart size={24} />
            </div>

            <h3>Pazaryeri Entegrasyonu</h3>
            <p>Trendyol, Hepsiburada, N11, Amazon ve diğer pazaryerleriyle tek noktadan bağlantı kurun.</p>
        </div>

        <div className="why-card">
            <div className="why-icon">
            <RefreshCcw size={24} />
            </div>

            <h3> Otomatik Senkronizasyon</h3>
            <p>Sipariş, stok ve fiyat bilgileri anlık olarak tüm platformlarda güncellensin.</p>
        </div>

        <div className="why-card">
            <div className="why-icon">
                <ShieldCheck size={24} />
            </div>

            <h3> Güvenli Veri Aktarımı</h3>
            <p>Modern güvenlik standartları ile verileriniz şifreli ve güvenli şekilde iletilir.</p>
        </div>

        <div className="why-card">
            <div className="why-icon">
            < Database size={24} />
            </div>

            <h3> Merkezi Veri Yönetimi</h3>
            <p>Tüm sistemlerden gelen verileri tek panel üzerinden yönetin ve analiz edin.</p>
        </div>

        <div className="why-card">
            <div className="why-icon">
            <Clock3 size={24} />
            </div>

            <h3> Zamandan Tasarruf</h3>
            <p> Tekrarlayan manuel işlemleri ortadan kaldırarak operasyonel verimliliği artırın.</p>
        </div>

        </div>

      </div>

    </section>

    {/* screenshots section */}
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

        <h3>Tüm Platformlarla Tek Noktadan Entegrasyon</h3>

        <p>
            Klovo API Entegrasyonu sayesinde ERP sisteminizi
            e-ticaret pazaryerleri, muhasebe yazılımları,
            kargo firmaları ve özel geliştirdiğiniz uygulamalarla
            kolayca entegre edebilirsiniz.
        </p>

        <ul>

            <li>✔ Trendyol, Hepsiburada, N11 ve Amazon desteği</li>

            <li>✔ Shopify ve WooCommerce entegrasyonu</li>

            <li>✔ Logo, Mikro ve Nebim bağlantıları</li>

            <li>✔ REST API ve Webhook desteği</li>

        </ul>

    </div>

</div>

<div className="feature-showcase reverse">

    <div className="showcase-content">

        <h3>Gerçek Zamanlı Veri Senkronizasyonu</h3>

        <p>
            Siparişler, stok miktarları, fiyat değişiklikleri ve ürün
            bilgileri tüm platformlarda otomatik olarak güncellenir.
            Manuel veri girişine ihtiyaç kalmadan süreçlerinizi
            hızlandırın.
        </p>

        <ul>

            <li>✔ Otomatik sipariş aktarımı</li>

            <li>✔ Anlık stok güncellemesi</li>

            <li>✔ Fiyat senkronizasyonu</li>

            <li>✔ Ürün bilgisi eşitleme</li>

        </ul>

    </div>
    {/* 2. görsel */}
    <div className="showcase-image">
        <span>Program Ekran Görüntüsü</span>
    </div>
 </div>


   

    <div className="feature-showcase">
          {/* 3. görsel */}
    <div className="showcase-image">
        <span>Program Ekran Görüntüsü</span>
    </div>

    <div className="showcase-content">

        <h3>API Logları ve Güvenli Veri Yönetimi</h3>

        <p>
            Tüm API işlemlerini tek ekrandan takip edin.
            Başarılı ve başarısız istekleri görüntüleyin,
            hataları hızlıca tespit edin ve sistem performansını
            anlık olarak izleyin.
        </p>

        <ul>

            <li>✔ Gerçek zamanlı API logları</li>

            <li>✔ Hata yönetimi</li>

            <li>✔ Yetkilendirme ve güvenlik</li>

            <li>✔ Performans izleme</li>

        </ul>

    </div>

   </div>



{/* stats-section*/}
<section className="stats-section">

    <div className="container">

        <div className="section-header">

            <span className="section-badge">
                Performans
            </span>

            <h2>Yüksek Performanslı API Altyapısı</h2>

            <p>
                İşletmenizin tüm sistemleri arasında kesintisiz ve güvenli veri akışı sağlayın.
            </p>

        </div>

        <div className="stats-grid">

            <div className="stat-card">
                <h3>20+</h3>
                <p>Hazır Entegrasyon</p>
            </div>

            <div className="stat-card">
                <h3>%99.9</h3>
                <p>API Uptime</p>
            </div>

            <div className="stat-card">
                <h3>7/24</h3>
                <p>Veri Senkronizasyonu</p>
            </div>
            <div className="stat-card">
                <h3>SSL</h3>
                <p>Güvenli Veri Aktarımı</p>
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

      <h2>API Entegrasyonu Hakkında</h2>

      <p>
        API entegrasyonuyla ilgili en çok sorulan soruları sizin için cevapladık.
      </p>

    </div>

    <div className="faq-list">

      <details className="faq-item">
        <summary>Hangi pazaryerleri destekleniyor?</summary>
        <p>
         Trendyol, Hepsiburada, N11, Amazon, Shopify ve WooCommerce başta olmak üzere birçok platform desteklenmektedir.
        </p>
      </details>

        <details className="faq-item">

        <summary>Özel API geliştirebiliyor musunuz?</summary>

            <p>
                Evet. Mevcut sistemlerinize özel API geliştirme ve entegrasyon hizmeti sunuyoruz.
            </p>

        </details>

<       details className="faq-item">

<           summary>ERP sistemleriyle entegre çalışıyor mu?</summary>

            <p>
                Klovo ERP'nin yanı sıra farklı ERP ve muhasebe yazılımlarıyla da entegrasyon sağlanabilir.
            </p>

        </details>

        <details className="faq-item">

            <summary>Veriler güvenli şekilde aktarılıyor mu?</summary>

             <p>
                Tüm veri transferleri güncel güvenlik standartları ve şifreleme yöntemleri ile korunmaktadır.
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