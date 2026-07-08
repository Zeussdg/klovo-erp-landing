import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";

export default function DepotStockPage() {
  return (
    <>
      <Navbar />

      <main className="depot-page">

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

            {/* Sağ Alan */}

            <div className="contact-card">

              <h3>Bizimle İletişime Geçin</h3>

              <p>
                Size en uygun çözümü birlikte belirleyelim.
              </p>

              <form>

                <input placeholder="Ad Soyad" />

                <input placeholder="Firma Adı" />

                <input placeholder="Telefon" />

                <input placeholder="E-Posta" />

                <textarea
                  rows="4"
                  placeholder="Mesajınız"
                />

                <button className="btn btn-primary">
                  Gönder
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}