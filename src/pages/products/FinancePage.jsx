import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    Wallet,
    Users,
    Landmark,
    ChartColumn,
    BellRing,
    ShieldCheck
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";
import ImagePreview from "../../style/ImagePreview";
import finance1 from "./images/finance/finance1.png";
import finance3 from "./images/finance/finance3.png";
import Cari from "./images/finance/cariHareket.png"

export default function FinancePage() {
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
                                        💰 Finans Yönetimi
                                    </span>

                                    <h1>
                                        İşletmenizin
                                        <br />
                                        Finansal
                                        Süreçlerini Tek Panelden
                                        Yönetin
                                    </h1>

                                    <p>
                                        Gelir, gider, cari hesap, kasa, banka ve ödeme
                                        işlemlerinizi tek platform üzerinden yönetin.
                                        Klovo Finans Yönetimi ile işletmenizin nakit
                                        akışını her an kontrol altında tutun.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Gelir & Gider Yönetimi</li>

                                        <li>✔ Cari Hesap Takibi</li>

                                        <li>✔ Kasa ve Banka Yönetimi</li>

                                        <li>✔ Finansal Raporlama</li>

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
                                    <h2>Neden Klovo Finans Yönetimi?</h2>

                                    <p>
                                        İşletmenizin tüm finansal süreçlerini tek noktadan
                                        yönetin, nakit akışınızı anlık takip edin ve güçlü
                                        raporlarla doğru kararlar alın.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ChartColumn size={24} />
                                        </div>
                                        <h3>Finansal Raporlar</h3>
                                        <p>Ayrıntılı raporlarla işletmenizin finansal durumunu analiz edin.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <BellRing size={24} />
                                        </div>

                                        <h3>Ödeme Hatırlatmaları</h3>
                                        <p>Vadesi yaklaşan ödemeler ve tahsilatlar için bildirim alın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3> Güvenli Finans Yönetimi</h3>
                                        <p> Finansal verilerinizi güvenli altyapı ile koruyun.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Landmark size={24} />
                                        </div>

                                        <h3> Kasa & Banka</h3>
                                        <p> Kasa ve banka hesaplarınızı tek ekranda yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Wallet size={24} />
                                        </div>

                                        <h3> Gelir & Gider Takibi</h3>
                                        <p>Tüm gelir ve gider hareketlerini tek panel üzerinden yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Users size={24} />
                                        </div>

                                        <h3> Cari Hesap Yönetimi</h3>
                                        <p>Müşteri ve tedarikçi cari hesaplarını kolayca takip edin.</p>
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

                                    <h2>Finans Yönetimini Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Finans Yönetimi modülü ile tüm finansal süreçlerinizi
                                        tek panel üzerinden kolayca yönetin ve işletmenizin nakit
                                        akışını anlık olarak takip edin.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={finance1}
                                            alt="finance1"
                                        />
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Gelir ve Gider Takibi</h3>

                                        <p>
                                            İşletmenizin tüm gelir ve gider hareketlerini tek ekrandan
                                            görüntüleyin, kategorilere ayırın ve detaylı analizlerle
                                            finansal durumunuzu kolayca değerlendirin.
                                        </p>

                                        <ul>

                                            <li>✔ Gelir ve gider kayıtları</li>

                                            <li>✔ Kategori bazlı takip</li>

                                            <li>✔ Günlük ve aylık analiz</li>

                                            <li>✔ Finansal özet ekranı</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Cari Hesap ve Banka Yönetimi</h3>

                                        <p>
                                            Cari hesaplarınızı, kasa ve banka hareketlerinizi tek
                                            platformdan yönetin. Tahsilat ve ödeme süreçlerini kolayca
                                            takip edin.
                                        </p>

                                        <ul>

                                            <li>✔ Cari hesap takibi</li>

                                            <li>✔ Banka hesap yönetimi</li>

                                            <li>✔ Kasa hareketleri</li>

                                            <li>✔ Tahsilat ve ödeme işlemleri</li>

                                        </ul>

                                    </div>
                                    {/* 2. görsel */}
                                    <div className="showcase-image">
                                          <ImagePreview
                                            src={Cari}
                                            alt="finance2"
                                        />
                                    </div>
                                </div>




                                <div className="feature-showcase">
                                    {/* 3. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={finance3}
                                            alt="finance3"
                                        />
                                    </div>
                                    

                                    <div className="showcase-content">

                                        <h3>Finansal Raporlama ve Analiz</h3>

                                        <p>
                                            Gelişmiş raporlama araçları sayesinde gelir-gider dengesi,
                                            nakit akışı ve finansal performansınızı detaylı grafiklerle
                                            analiz edin.
                                        </p>

                                        <ul>

                                            <li>✔ Nakit akışı raporları</li>

                                            <li>✔ Grafik destekli analizler</li>

                                            <li>✔ Finansal performans takibi</li>

                                            <li>✔ Excel ve PDF çıktıları</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">

                                            <span className="section-badge">
                                                Finansal Performans
                                            </span>

                                            <h2>İşletmenizin Finansını Kontrol Altında Tutun</h2>

                                            <p>
                                                Finansal süreçlerinizi tek merkezden yönetin, raporlayın ve
                                                işletmenizin geleceğini daha güvenle planlayın.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>Anlık</h3>
                                                <p>Nakit Akışı</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Finans Takibi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>%100</h3>
                                                <p>Cari Kontrol</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Detaylı</h3>
                                                <p>Finans Raporları</p>
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

                                    <h2>Finansal Yönetim Hakkında</h2>

                                    <p>
                                        Finans modülümüz ile ilgili en çok merak edilen soruların
                                        cevaplarını burada bulabilirsiniz.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>Cari hesap takibi yapılabiliyor mu?</summary>

                                        <p>
                                            Evet. Müşteri ve tedarikçi cari hesaplarını tek panel üzerinden detaylı olarak takip edebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Kasa ve banka hesapları birlikte yönetilebilir mi?</summary>

                                        <p>
                                            Evet. Tüm kasa ve banka hesap hareketlerinizi tek ekranda görüntüleyebilir ve yönetebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Finansal raporlar alınabiliyor mu?</summary>

                                        <p>
                                            Evet. Gelir-gider, nakit akışı ve cari hesap raporlarını detaylı olarak oluşturabilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Ödeme ve tahsilat hatırlatmaları var mı?</summary>

                                        <p>
                                            Evet. Vadesi yaklaşan ödeme ve tahsilatlar için hatırlatmalar oluşturabilirsiniz.
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