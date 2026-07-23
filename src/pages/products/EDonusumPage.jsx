import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    FileText,
    FolderOpen,
    Truck,
    ShieldCheck,
    Zap,
    Cloud
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";
import ImagePreview from "../../style/ImagePreview";
import EFatura from "./images/edonusum/efatura.png";
import EArşiv from "./images/edonusum/earşiv.png";
//import Cari from "./images/finance/cariHareket.png"

export default function EDonusumPage() {
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
                                        📄 E-Dönüşüm
                                    </span>

                                    <h1>
                                        E-Dönüşüm &
                                        E-Fatura &
                                        E-Arşiv
                                        <br />
                                        Süreçlerinizi
                                        Kolaylaştırın
                                    </h1>

                                    <p>
                                        Klovo E-Dönüşüm çözümleri ile e-Fatura,
                                        e-Arşiv, e-İrsaliye ve diğer elektronik
                                        belge süreçlerinizi tek panel üzerinden
                                        güvenli ve hızlı şekilde yönetin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ E-Fatura</li>

                                        <li>✔ E-Arşiv</li>

                                        <li>✔ E-İrsaliye</li>

                                        <li>✔ GİB uyumlu altyapı</li>

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
                                    <h2>Neden Klovo E-Dönüşüm?</h2>
                                    <p>
                                        Elektronik belge süreçlerinizi hızlandırın,
                                        maliyetlerinizi azaltın ve Gelir İdaresi Başkanlığı
                                        standartlarına uygun şekilde yönetin.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <FileText size={24} />
                                        </div>
                                        <h3>E-Fatura</h3>
                                        <p>Faturalarınızı saniyeler içinde elektronik ortamda oluşturun ve gönderin.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <FolderOpen size={24} />
                                        </div>

                                        <h3>E-Arşiv</h3>
                                        <p>Dijital arşivleme sayesinde belgelerinize istediğiniz zaman ulaşın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Truck size={24} />
                                        </div>

                                        <h3> E-İrsaliye</h3>
                                        <p> Sevkiyat süreçlerinizi elektronik ortamda kolayca yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3> GİB Uyumlu</h3>
                                        <p> Güncel Gelir İdaresi Başkanlığı standartlarına uyumlu altyapı.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Zap size={24} />
                                        </div>

                                        <h3> Hızlı İşlem</h3>
                                        <p>Manuel evrak süreçlerini ortadan kaldırarak zamandan tasarruf edin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Cloud size={24} />
                                        </div>

                                        <h3> Bulut Desteği</h3>
                                        <p> Belgelerinize internet olan her yerden güvenli şekilde erişin.</p>
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

                                    <h2>E-Dönüşüm Süreçlerini Yakından İnceleyin</h2>

                                    <p>
                                        Klovo E-Dönüşüm modülü ile elektronik belge süreçlerinizi
                                        tek panel üzerinden hızlı, güvenli ve kolay şekilde yönetin.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={EFatura}
                                            alt="e-Arşiv"
                                        />
                                    </div>

                                    <div className="showcase-content">

                                        <h3>E-Fatura Yönetim Paneli</h3>

                                        <p>
                                            Gelen ve giden e-Faturalarınızı tek ekrandan yönetin.
                                            Fatura durumlarını takip edin ve işlemlerinizi saniyeler
                                            içinde tamamlayın.
                                        </p>

                                        <ul>

                                            <li>✔ Gelen ve giden faturalar</li>

                                            <li>✔ Tek tıkla fatura oluşturma</li>

                                            <li>✔ Durum takibi</li>

                                            <li>✔ Hızlı filtreleme</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>E-Arşiv ve Belge Yönetimi</h3>

                                        <p>
                                            Elektronik belgelerinizi güvenli şekilde saklayın,
                                            istediğiniz zaman arayın ve kolayca görüntüleyin.
                                        </p>

                                        <ul>

                                            <li>✔ Dijital arşiv</li>

                                            <li>✔ Gelişmiş belge arama</li>

                                            <li>✔ Hızlı görüntüleme</li>

                                            <li>✔ Güvenli saklama</li>

                                        </ul>

                                    </div>
                                    {/* 2. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={EArşiv}
                                            alt="e-arşiv"
                                        />
                                    </div>
                                </div>




                                <div className="feature-showcase">
                                    {/* 3. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            //src={Cari}
                                            //alt="finance2"
                                        />
                                        <span>E-irsaliye bekleniyor</span>
                                    </div>

                                    <div className="showcase-content">

                                        <h3>E-İrsaliye Yönetim Paneli</h3>

                                        <p>
                                            E-İrsaliye Yönetim Paneli ile sevkiyat süreçlerinizi dijital ortamda
                                            hızlı, güvenli ve kolay bir şekilde yönetin. Oluşturulan e-irsaliyeleri
                                            anlık olarak görüntüleyebilir, durumlarını
                                            takip edebilir, filtreleme ve detaylı raporlama özellikleri sayesinde
                                            tüm sevkiyat operasyonlarınızı tek bir ekrandan kontrol edebilirsiniz.
                                            Kullanıcı dostu arayüzü sayesinde zamandan tasarruf ederken, yasal mevzuata uygun
                                            ve hatasız belge yönetimi sağlayabilirsiniz.
                                        </p>

                                        <ul>

                                            <li>✔ GİB uyumlu altyapı</li>

                                            <li>✔ E-İrsaliye desteği</li>

                                            <li>✔ Güvenli belge gönderimi</li>

                                            <li>✔ Anlık işlem takibi</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">

                                            <span className="section-badge">
                                                E-Dönüşüm Performansı
                                            </span>

                                            <h2>Dijital Belge Süreçlerinde Hız ve Güven</h2>

                                            <p>
                                                Elektronik belge yönetiminde işletmenize hız,
                                                güvenlik ve kolaylık sağlayan çözümler sunuyoruz.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>5.000+</h3>
                                                <p>Oluşturulan E-Fatura</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Belge Erişimi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>%100</h3>
                                                <p>GİB Uyumlu</p>
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

                                    <h2>E-Dönüşüm Hakkında</h2>

                                    <p>
                                        E-Fatura, E-Arşiv ve diğer elektronik belge süreçleri
                                        hakkında en çok merak edilen sorular.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>E-Fatura ve E-Arşiv desteği var mı?</summary>

                                        <p>
                                            Evet. Klovo ERP ile E-Fatura ve E-Arşiv süreçlerinizi tek panel üzerinden yönetebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>GİB ile uyumlu çalışıyor mu?</summary>

                                        <p>
                                            Evet. Sistemimiz güncel GİB standartlarına uygun şekilde çalışmaktadır.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Eski belgelerime ulaşabilir miyim?</summary>

                                        <p>
                                            Evet. Elektronik belgelerinizi güvenli dijital arşiv üzerinden istediğiniz zaman görüntüleyebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>E-İrsaliye desteği bulunuyor mu?</summary>

                                        <p>
                                            Evet. E-İrsaliye süreçlerini de sistem üzerinden kolayca yönetebilirsiniz.
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