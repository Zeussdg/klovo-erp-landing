import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    ShoppingCart,
    Barcode,
    Gift,
    Users,
    ChartColumn,
    CreditCard
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";
import ImagePreview from "../../style/ImagePreview";
import Main from "./images/parakende/parakende2.png";
import Main1 from "./images/parakende/parakende1.png";
import Main2 from "./images/parakende/parakende.png"


export default function PerakendePage() {
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

                                    <span className="hero-badge">
                                        🛍️ Perakende Yönetimi
                                    </span>

                                    <h1>
                                        Mağaza ve
                                        <br />
                                        Perakende Satışlarınızı
                                        <br />
                                        Tek Panelden Yönetin
                                    </h1>

                                    Mağaza ve
                                    <br />
                                    Perakende Satışlarınızı
                                    <br />
                                    Tek Panelden Yönetin

                                    <ul className="hero-list">

                                        <li>✔ Hızlı POS Satışı</li>

                                        <li>✔ Barkod ile Ürün Satışı</li>

                                        <li>✔ Kampanya Yönetimi</li>

                                        <li>✔ Müşteri Sadakat Sistemi</li>

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
                                    <h2>Neden Klovo Perakende Yönetimi?</h2>

                                    <p>
                                        Satış süreçlerinizi hızlandırın, stoklarınızı
                                        kontrol altında tutun ve müşterilerinize daha iyi
                                        bir alışveriş deneyimi sunun.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShoppingCart size={24} />
                                        </div>
                                        <h3>Hızlı POS Satışı</h3>

                                        <p>
                                            Satış işlemlerini saniyeler içinde tamamlayın.
                                        </p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <Barcode size={24} />
                                        </div>

                                        <h3>Barkod Desteği</h3>

                                        <p>
                                            Barkod okuyucu ile hızlı ve hatasız ürün satışı gerçekleştirin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Gift size={24} />
                                        </div>

                                        <h3>Kampanya Yönetimi</h3>

                                        <p>
                                            İndirim, promosyon ve kampanyalarınızı kolayca yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Users size={24} />
                                        </div>

                                        <h3>Müşteri Sadakat Sistemi</h3>

                                        <p>
                                            Üyelik, puan ve sadakat programlarını tek panelden yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ChartColumn size={24} />
                                        </div>

                                        <h3>Satış Analizleri</h3>

                                        <p>
                                            Günlük, haftalık ve aylık satış raporlarını kolayca görüntüleyin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <CreditCard size={24} />
                                        </div>

                                        <h3>Çoklu Ödeme Desteği</h3>

                                        <p>
                                            Nakit, kredi kartı ve diğer ödeme yöntemlerini tek sistem üzerinden yönetin.
                                        </p>
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

                                    <h2>Perakende Yönetimini Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Perakende Yönetimi ile mağaza operasyonlarınızı,
                                        satış süreçlerinizi ve müşteri yönetiminizi tek panelden
                                        kolayca yönetin.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main}
                                            alt="2"
                                        />
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Hızlı POS Satış Deneyimi</h3>

                                        <p>
                                            Barkod okuyucu desteği ile satış işlemlerini saniyeler içinde
                                            tamamlayın. Kasiyerleriniz hızlı, güvenli ve pratik şekilde
                                            satış gerçekleştirebilir.
                                        </p>

                                        <ul>

                                            <li>✔ Barkod okutma desteği</li>

                                            <li>✔ Hızlı ürün arama</li>

                                            <li>✔ Anlık fiş oluşturma</li>

                                            <li>✔ Çoklu ödeme seçenekleri</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Stok ve Ürün Yönetimi</h3>

                                        <p>
                                            Satılan ürünler stoktan otomatik düşer.
                                            Ürün kartlarını, fiyatları ve stok miktarlarını
                                            tek panel üzerinden kolayca yönetin.
                                        </p>

                                        <ul>

                                            <li>✔ Otomatik stok güncelleme</li>

                                            <li>✔ Ürün fiyat yönetimi</li>

                                            <li>✔ Barkod tanımlama</li>

                                            <li>✔ Kritik stok uyarıları</li>

                                        </ul>

                                    </div>
                                    {/* 2. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main1}
                                            alt="2"
                                        />
                                    </div>
                                </div>




                                <div className="feature-showcase">
                                    {/* 3. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main2}
                                            alt="2"
                                        />
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Müşteri ve Kampanya Yönetimi</h3>

                                        <p>
                                            Sadakat programları oluşturun, müşterilerinizi analiz edin
                                            ve kampanyalarınızı tek panel üzerinden yönetin.
                                        </p>

                                        <ul>

                                            <li>✔ Sadakat sistemi</li>

                                            <li>✔ Üyelik yönetimi</li>

                                            <li>✔ Kampanya tanımlama</li>

                                            <li>✔ Satış analizleri</li>

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

                                            <h2>Mağazanızın Performansını Anlık Takip Edin</h2>

                                            <p>
                                                Satışlardan stok durumuna kadar tüm verilerinizi tek panel
                                                üzerinden analiz edin ve işletmenizi daha verimli yönetin.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>7/24</h3>

                                                <p>Kesintisiz POS Kullanımı</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Anlık</h3>

                                                <p>Stok Güncellemesi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Çoklu</h3>

                                                <p>Ödeme Desteği</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Detaylı</h3>

                                                <p>Satış Analizleri</p>
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

                                    <h2>Perakende Yönetimi Hakkında</h2>

                                    <p>
                                        Perakende Yönetimi modülümüz hakkında en sık sorulan
                                        soruların cevaplarını sizin için derledik.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary> POS sistemi barkod okuyucularla çalışıyor mu?</summary>

                                        <p>
                                            Evet. Klovo Perakende Yönetimi, barkod okuyucular ile tam uyumlu çalışır ve ürün satışlarını hızlı şekilde gerçekleştirmenizi sağlar.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Birden fazla mağazayı yönetebilir miyim?</summary>

                                        <p>
                                            Evet. Farklı şube ve mağazalarınızı tek panel üzerinden yönetebilir, satış ve stok bilgilerini ayrı ayrı takip edebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Stoklar satıştan sonra otomatik güncelleniyor mu?</summary>

                                        <p>
                                            Evet. Gerçekleşen her satış sonrasında stok miktarları otomatik olarak güncellenir ve kritik stok seviyeleri takip edilir.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Kampanya ve indirim tanımlayabilir miyim?</summary>

                                        <p>
                                            Evet. Ürün bazlı veya genel kampanyalar oluşturabilir, indirimleri kolayca yönetebilir ve satış performansını raporlayabilirsiniz.
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