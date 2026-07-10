import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    Barcode,
    QrCode,
    Laptop,
    Workflow,
    Cpu,
    ShieldCheck
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

export default function ETasarimPage() {
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
                                        💻 E-Tasarım & Geliştirme
                                    </span>

                                    <h1>
                                        İşletmenize Özel
                                        <br />
                                        Barkod ve QR Kod
                                        Tabanlı Yazılım Çözümleri
                                    </h1>

                                    <p>
                                        Klovo olarak işletmenizin ihtiyaçlarına özel barkod,
                                        QR kod ve otomasyon tabanlı yazılım çözümleri geliştiriyoruz.
                                        İş süreçlerinizi dijitalleştirerek hız ve verimlilik sağlıyoruz.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Barkod Otomasyonları</li>

                                        <li>✔ QR Kod Çözümleri</li>

                                        <li>✔ Özel Yazılım Geliştirme</li>

                                        <li>✔ ERP Entegrasyonu</li>

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
                                    <h2>Neden Klovo Yazılım Geliştirme?</h2>

                                    <p>
                                        İşletmenizin ihtiyaçlarına özel geliştirilen çözümler ile
                                        süreçlerinizi hızlandırın ve dijital dönüşümünüzü destekleyin.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Barcode size={24} />
                                        </div>
                                        <h3>Barkod Sistemleri</h3>
                                        <p>Ürün takibi ve stok süreçleri için barkod tabanlı çözümler.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <QrCode size={24} />
                                        </div>

                                        <h3>QR Kod Teknolojileri</h3>
                                        <p>QR kod ile hızlı erişim, takip ve işlem yönetimi.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Laptop size={24} />
                                        </div>

                                        <h3> Özel Yazılım</h3>
                                        <p> İşletmenize özel masaüstü ve web yazılımları.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Workflow size={24} />
                                        </div>

                                        <h3> ERP Entegrasyonu</h3>
                                        <p> Mevcut ERP sistemleriniz ile tam uyumlu entegrasyon.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Cpu size={24} />
                                        </div>

                                        <h3> Süreç Otomasyonu</h3>
                                        <p>Tekrarlayan işlemleri otomatikleştirerek zamandan tasarruf edin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3> Güvenli Altyapı</h3>
                                        <p>Modern güvenlik standartlarına uygun yazılım geliştirme.</p>
                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* screenshots section */}
                        <section className="screenshots-section">

                            <div className="container">

                                <div className="section-header">

                                    <span className="section-badge">
                                        Geliştirdiğimiz Çözümler
                                    </span>

                                    <h2>İşletmenize Özel Dijital Çözümler</h2>

                                    <p>
                                        Barkod, QR kod ve özel yazılım geliştirme projelerimiz ile
                                        işletmenizin ihtiyaçlarına uygun modern çözümler üretiyoruz.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <span>Program Ekran Görüntüsü</span>
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Barkod Destekli Ürün ve Depo Takibi</h3>

                                        <p>
                                            Ürün giriş-çıkışlarını barkod teknolojisi ile yönetin,
                                            stok hareketlerini anlık takip edin ve manuel hataları en aza indirin.
                                        </p>

                                        <ul>

                                            <li>✔ Barkod ile hızlı ürün tanımlama</li>

                                            <li>✔ Depo giriş-çıkış işlemleri</li>

                                            <li>✔ Gerçek zamanlı stok güncelleme</li>

                                            <li>✔ ERP entegrasyonu</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>QR Kod ile Dijital Süreç Yönetimi</h3>

                                        <p>
                                            QR kod teknolojisi sayesinde ürün doğrulama, servis takibi,
                                            doküman erişimi ve hızlı işlem süreçlerini tek platformdan yönetin.
                                        </p>

                                        <ul>

                                            <li>✔ QR kod ile ürün doğrulama</li>

                                            <li>✔ Dijital doküman erişimi</li>

                                            <li>✔ Servis ve bakım kayıtları</li>

                                            <li>✔ Mobil uyumlu kullanım</li>

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

                                        <h3>İşletmenize Özel Yazılım Geliştirme</h3>

                                        <p>
                                            İş süreçlerinize uygun web, masaüstü ve mobil yazılım çözümleri
                                            geliştirerek mevcut sistemlerinizle tam uyumlu dijital altyapılar oluşturuyoruz.
                                        </p>

                                        <ul>

                                            <li>✔ Kuruma özel yazılım geliştirme</li>

                                            <li>✔ ERP ve API entegrasyonları</li>

                                            <li>✔ Web ve mobil çözümler</li>

                                            <li>✔ Ölçeklenebilir mimari</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">

                                            <span className="section-badge">
                                                Yazılım Gücü
                                            </span>

                                            <h2>İhtiyacınıza Uygun Teknoloji Çözümleri</h2>

<p>
    Geliştirdiğimiz yazılımlar ile süreçlerinizi hızlandırın,
    verimliliğinizi artırın ve dijital dönüşümünüzü güvenle tamamlayın.
</p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>Barkod</h3>
                                                <p>Destekli Çözümler</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>QR Kod</h3>
                                                <p>Entegrasyonu</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Teknik Destek</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>ERP</h3>
                                                <p>Uyumlu Yazılım</p>
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

                                    <h2>Yazılım Geliştirme Hakkında</h2>

                                    <p>
    Özel yazılım geliştirme, barkod ve QR kod çözümleri hakkında
    en sık sorulan soruları sizin için yanıtladık.
</p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>İşletmeme özel yazılım geliştirebilir misiniz?</summary>

                                        <p>
                                            Evet. İş süreçlerinize ve ihtiyaçlarınıza uygun tamamen size özel yazılım çözümleri geliştiriyoruz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Mevcut ERP sistemimizle entegre çalışabilir mi?</summary>

                                        <p>
                                            Evet. Geliştirdiğimiz çözümler mevcut ERP, API ve diğer iş sistemleriyle entegre çalışacak şekilde tasarlanabilir.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>QR kod ve barkod çözümleri birlikte kullanılabilir mi?</summary>

                                        <p>
                                            Evet. İhtiyacınıza göre barkod ve QR kod teknolojilerini aynı proje içinde birlikte kullanabiliyoruz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Destek ve bakım hizmeti sunuyor musunuz?</summary>

                                        <p>
                                            Evet. Proje tesliminden sonra teknik destek, bakım ve güncelleme hizmetleri sunarak sisteminizin sorunsuz çalışmasını sağlıyoruz.
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