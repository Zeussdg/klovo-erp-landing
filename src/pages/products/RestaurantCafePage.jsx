import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    UtensilsCrossed,
    QrCode,
    Receipt,
    Clipboard,
    Package,
    CreditCard
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

export default function RestaurantCafePage() {
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
                                        🍽️ Restoran & Cafe Yönetimi
                                    </span>

                                    <h1>
                                        Restoran ve Cafe
                                        <br />
                                        Operasyonlarınızı
                                        Tek Panelden Yönetin
                                    </h1>

                                    <p>
                                        Klovo Restoran & Cafe Yönetimi ile sipariş, masa,
                                        adisyon, stok ve ödeme süreçlerinizi tek sistem
                                        üzerinden hızlı ve kolay şekilde yönetin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Masa Yönetimi</li>

                                        <li>✔ QR Menü</li>

                                        <li>✔ Adisyon Takibi</li>

                                        <li>✔ Hızlı Sipariş Yönetimi</li>

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
                                    <h2>Neden Klovo Restoran & Cafe Yönetimi?</h2>

                                    <p>
                                        Siparişten ödemeye kadar tüm süreçleri tek sistemde
                                        yönetin, operasyonlarınızı hızlandırın ve müşteri
                                        memnuniyetini artırın.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <UtensilsCrossed size={24} />
                                        </div>
                                        <h3>Masa Yönetimi</h3>
                                        <p>Restoranınızdaki tüm masaları anlık olarak yönetin.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <CreditCard size={24} />
                                        </div>

                                        <h3>Güvenli Ödeme</h3>
                                        <p>Nakit, kart ve diğer ödeme yöntemlerini destekler.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <QrCode size={24} />
                                        </div>

                                        <h3> QR Menü</h3>
                                        <p> Temassız QR menü ile müşterilerinize hızlı erişim sağlayın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Receipt size={24} />
                                        </div>

                                        <h3> Adisyon Takibi</h3>
                                        <p> Açık ve kapalı adisyonları kolayca yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Clipboard size={24} />
                                        </div>

                                        <h3> Hızlı Sipariş</h3>
                                        <p>Garsonlar siparişleri saniyeler içinde sisteme işleyebilir.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Package size={24} />
                                        </div>

                                        <h3> Stok Kontrolü</h3>
                                        <p>Ürün stoklarınızı gerçek zamanlı olarak takip edin ve stok alt limitlerinde uyarı alın.</p>
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

                                    <h2>Restoran Yönetimini Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Restoran & Cafe Yönetimi ile sipariş, masa,
                                        adisyon ve ödeme süreçlerini tek panel üzerinden
                                        hızlı ve kolay şekilde yönetin.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <span>Program Ekran Görüntüsü</span>
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Akıllı Masa ve Sipariş Yönetimi</h3>

                                        <p>
                                            Restoranınızdaki tüm masaların durumunu anlık olarak takip edin.
                                            Siparişleri hızlıca oluşturun, güncelleyin ve mutfağa iletin.
                                        </p>

                                        <ul>

                                            <li>✔ Masa doluluk durumu</li>

                                            <li>✔ Tek tıkla sipariş oluşturma</li>

                                            <li>✔ Garson ekranı</li>

                                            <li>✔ Mutfak sipariş takibi</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>QR Menü ve Dijital Sipariş</h3>

                                        <p>
                                            Müşterileriniz QR kod ile menünüze ulaşabilir,
                                            ürünleri inceleyebilir ve sipariş süreçlerini
                                            daha hızlı tamamlayabilir.
                                        </p>

                                        <ul>

                                            <li>✔ QR Menü</li>

                                            <li>✔ Temassız kullanım</li>

                                            <li>✔ Dijital ürün kataloğu</li>

                                            <li>✔ Kolay menü yönetimi</li>

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

                                        <h3>Adisyon ve Ödeme Takibi</h3>

                                        <p>
                                            Açık ve kapalı adisyonları yönetin, ödeme yöntemlerini
                                            takip edin ve gün sonu raporlarını kolayca oluşturun.
                                        </p>

                                        <ul>

                                            <li>✔ Adisyon yönetimi</li>

                                            <li>✔ Nakit ve kart ödemeleri</li>

                                            <li>✔ Gün sonu raporları</li>

                                            <li>✔ Satış analizleri</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">

                                            <span className="section-badge">
                                                Restoran Performans
                                            </span>

                                           <h2>Operasyonlarınızı Daha Hızlı Yönetin</h2>

<p>
    Siparişten ödemeye kadar tüm süreçleri tek sistem
    üzerinden yöneterek işletmenizin verimliliğini artırın.
</p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>Anlık</h3>
                                                <p>Masa Takibi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>QR</h3>
                                                <p>Dijital Menü</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Sipariş Yönetimi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Detaylı</h3>
                                                <p>Satış Raporları</p>
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

                                    <h2>Restoran & Cafe Yönetimi Hakkında</h2>

                                    <p>
                                        Restoran & Cafe Yönetimi modülümüz ile ilgili en çok merak edilen soruların
                                        cevaplarını burada bulabilirsiniz.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>QR Menü desteği var mı?</summary>

                                        <p>
                                            Evet. Müşterileriniz QR kod ile dijital menüye ulaşabilir ve ürünleri kolayca inceleyebilir.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Birden fazla şubeyi yönetebilir miyim?</summary>

                                        <p>
                                            Evet. Birden fazla restoran veya şubenizi tek panel üzerinden yönetebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Adisyon takibi yapılabiliyor mu?</summary>

                                        <p>
                                           Evet. Açık ve kapalı adisyonlarınızı, ödeme durumlarını ve masa hareketlerini detaylı olarak takip edebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Stok yönetimi ile entegre çalışıyor mu?</summary>

                                        <p>
                                            Evet. Satılan ürünler stoktan otomatik düşülür ve depo modülü ile entegre çalışır.
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