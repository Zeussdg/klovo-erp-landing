import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
  ClipboardList,
  FileText,
  ListTree,
  Package,
  Factory,
  ChartNoAxesCombined,
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";
import ImagePreview from "../../style/ImagePreview";
import Main from "./images/uretim/uretım.png";
import Main1 from "./images/uretim/rota.png";
import Main2 from "./images/uretim/recete.png";

export default function UretimPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="product-layout">
          <div className="product-content">
            <section className="depot-hero">
              <div className="container depot-hero-container">
                {/* hero */}

                <div className="hero-content">
                  <h1>
                    Üretim Modülü
                    <br />
                    Üretiminizin Her Aşamasını Tek Ekrandan Yönetin
                  </h1>

                  <p>
                    Üretim planlama, iş emirleri, reçeteler, stok takibi ve
                    maliyet kontrolünü Klovo ERP ile tek bir sistem üzerinden
                    yönetin. Süreçlerinizi dijitalleştirin, üretiminizi daha
                    verimli ve kontrollü hale getirin.
                  </p>

                  <ul className="hero-list">
                    <li>✔ Üretim Planlama</li>

                    <li>✔ İş Emri Yönetimi</li>

                    <li>✔ Reçete Tanımlama</li>

                    <li>✔ Ürün Stok Takibi</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* avantaj section */}
            <section className="why-section">
              <div className="container">
                <div className="section-header">
                  <h2>Neden Klovo Üretim Yönetimi?</h2>

                  <p>
                    Üretim süreçlerinizi planlamadan tamamlanmış ürüne kadar tek
                    sistem üzerinden yönetin, kaynaklarınızı daha verimli
                    kullanın ve maliyetlerinizi kontrol altında tutun.
                  </p>
                </div>

                <div className="why-grid">
                  <div className="why-card">
                    <div className="why-icon">
                      <ClipboardList size={24} />
                    </div>

                    <h3>Üretim Planlama</h3>

                    <p>
                      Üretim ihtiyaçlarını planlayın ve süreçlerinizi daha
                      düzenli şekilde yönetin.
                    </p>
                  </div>

                  <div className="why-card">
                    <div className="why-icon">
                      <FileText size={24} />
                    </div>

                    <h3>İş Emri Yönetimi</h3>

                    <p>
                      Üretim iş emirlerini oluşturun, takip edin ve süreçlerin
                      durumunu anlık olarak görüntüleyin.
                    </p>
                  </div>

                  <div className="why-card">
                    <div className="why-icon">
                      <ListTree size={24} />
                    </div>

                    <h3>Reçete Yönetimi</h3>

                    <p>
                      Ürünlerinize ait reçeteleri ve üretimde kullanılacak
                      malzemeleri kolayca tanımlayın.
                    </p>
                  </div>

                  <div className="why-card">
                    <div className="why-icon">
                      <Package size={24} />
                    </div>

                    <h3>Hammadde Takibi</h3>

                    <p>
                      Üretimde kullanılacak hammaddeleri ve stok durumlarını
                      anlık olarak takip edin.
                    </p>
                  </div>

                  <div className="why-card">
                    <div className="why-icon">
                      <Factory size={24} />
                    </div>

                    <h3>Üretim Takibi</h3>

                    <p>
                      Devam eden, bekleyen ve tamamlanan üretim süreçlerini tek
                      ekran üzerinden yönetin.
                    </p>
                  </div>

                  <div className="why-card">
                    <div className="why-icon">
                      <ChartNoAxesCombined size={24} />
                    </div>

                    <h3>Maliyet Kontrolü</h3>

                    <p>
                      Hammadde ve üretim maliyetlerini takip ederek daha doğru
                      maliyet analizleri yapın.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* screenshots section */}
            <section className="screenshots-section">
              <div className="container">
                <div className="section-header">
                  <h2>Üretim Süreçlerinizi Yakından İnceleyin</h2>

                  <p>
                    Klovo Üretim Yönetimi ile üretim planlama, iş emirleri,
                    reçete tanımlama ve stok süreçlerini tek panel üzerinden
                    kolayca yönetin.
                  </p>
                </div>
                <div className="feature-showcase">
                  {/* 1. görsel */}
                  <div className="showcase-image">
                    <ImagePreview src={Main} alt="1" />
                  </div>

                  <div className="showcase-content">
                    <h3>Üretim Planlama ve İş Emirleri</h3>

                    <p>
                      Üretim süreçlerinizi planlayın, iş emirlerini oluşturun ve
                      üretimin hangi aşamada olduğunu kolayca takip edin.
                    </p>

                    <ul>
                      <li>✔ Üretim planı oluşturma</li>
                      <li>✔ İş emri tanımlama</li>
                      <li>✔ Üretim durumu takibi</li>
                      <li>✔ Bekleyen işlemleri görüntüleme</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-showcase reverse">
                  <div className="showcase-content">
                    <h3>Reçete ve Hammadde Yönetimi</h3>

                    <p>
                      Ürünleriniz için gerekli hammaddeleri ve üretim
                      reçetelerini sistem üzerinden tanımlayın ve üretim
                      sürecinizi daha kontrollü şekilde yönetin.
                    </p>

                    <ul>
                      <li>✔ Ürün reçetesi oluşturma</li>
                      <li>✔ Hammadde tanımlama</li>
                      <li>✔ Malzeme miktarı belirleme</li>
                      <li>✔ Stok kontrolü</li>
                    </ul>
                  </div>
                  {/* 2. görsel */}
                  <div className="showcase-image">
                    <ImagePreview src={Main2} alt="2" />
                  </div>
                </div>

                <div className="feature-showcase">
                  {/* 3. görsel */}
                  <div className="showcase-image">
                    <ImagePreview src={Main1} alt="3" />
                  </div>

                  <div className="showcase-content">
                    <h3>Rota Tanımlama ve Yönetimi</h3>

                    <p>
                      Üretim süreçleriniz için gerekli üretim rotalarını
                      tanımlayın ve üretim sürecini daha verimli şekilde
                      yönetin.
                    </p>

                    <ul>
                      <li>✔ Rota tanımlama </li>
                      <li>✔ Rota güncelleme</li>
                      <li>✔ Rota takibi</li>
                      <li>✔ Üretim Kontrolü</li>
                    </ul>
                  </div>
                </div>

                {/* stats-section*/}
                <section className="stats-section">
                  <div className="container">
                    <div className="section-header">
                      <h2>Operasyonlarınızı Daha Hızlı Yönetin</h2>

                      <p>
                        Siparişten ödemeye kadar tüm süreçleri tek sistem
                        üzerinden yöneterek işletmenizin verimliliğini artırın.
                      </p>
                    </div>

                    <div className="stats-grid">
                      <div className="stat-card">
                        <h3>Anlık</h3>
                        <p>Üretim Takibi</p>
                      </div>

                      <div className="stat-card">
                        <h3>Kolay</h3>
                        <p>İş Emri Yönetimi</p>
                      </div>

                      <div className="stat-card">
                        <h3>Detaylı</h3>
                        <p>Reçete Yönetimi</p>
                      </div>

                      <div className="stat-card">
                        <h3>Kontrollü</h3>
                        <p>Stok ve Maliyet Takibi</p>
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
                  <h2>Üretim Yönetimi Hakkında</h2>

                  <p>
                    Üretim Yönetimi modülümüz ile ilgili en çok merak edilen
                    soruların cevaplarını burada bulabilirsiniz.
                  </p>
                </div>

                <div className="faq-list">
                  <details className="faq-item">
                    <summary>Üretim planlaması yapılabiliyor mu?</summary>

                    <p>
                      Evet. Üretim ihtiyaçlarınızı planlayabilir ve
                      oluşturduğunuz planlar doğrultusunda üretim süreçlerinizi
                      yönetebilirsiniz.
                    </p>
                  </details>

                  <details className="faq-item">
                    <summary>İş emirlerini takip edebilir miyim?</summary>

                    <p>
                      Evet. Oluşturulan iş emirlerinin durumunu takip edebilir,
                      bekleyen ve tamamlanan üretim süreçlerini
                      görüntüleyebilirsiniz.
                    </p>
                  </details>

                  <details className="faq-item">
                    <summary>Ürün reçeteleri tanımlanabilir mi?</summary>

                    <p>
                      Evet. Ürünleriniz için gerekli hammadde ve malzemeleri
                      reçete üzerinde tanımlayabilirsiniz.
                    </p>
                  </details>

                  <details className="faq-item">
                    <summary>Stok yönetimi ile entegre çalışıyor mu?</summary>

                    <p>
                      Evet. Üretim süreçlerinde kullanılan hammaddeler ve oluşan
                      ürün stokları sistem üzerinden takip edilebilir.
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
