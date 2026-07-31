import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    ClipboardList,
    Users,
    Settings,
    CalendarClock,
    BarChart3,
    ShieldCheck
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";
import ImagePreview from "../../style/ImagePreview";
import Main from "./images/hizmet/merkezi_hizmet_gor.png";
import Main1 from "./images/hizmet/verimli_iş_raporu.png";

export default function HizmetYonetimiPage() {
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
                                        İşletmenizin
                                        <br />
                                        Hizmet Süreçlerini Kolayca Yönetin
                                    </h1>

                                    <p>
                                        Klovo Hizmet Yönetimi modülü ile sunduğunuz hizmetleri,
                                        müşteri işlemlerini ve operasyon süreçlerini tek platform
                                        üzerinden hızlı ve verimli şekilde yönetin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Hizmet Kartları Yönetimi</li>

                                        <li>✔ Müşteri ve İşlem Takibi</li>

                                        <li>✔ Randevu ve Süreç Yönetimi</li>

                                        <li>✔ Detaylı Hizmet Raporları</li>

                                    </ul>



                                </div>

                            </div>

                        </section>
                        {/* avantaj section */}
                        <section className="why-section">

                            <div className="container">

                                <div className="section-header">


                                    <h2>
                                        Neden Klovo Hizmet Yönetimi?
                                    </h2>

                                    <p>
                                        İşletmenizin sunduğu tüm hizmetleri merkezi bir sistem üzerinden
                                        yöneterek operasyonlarınızı hızlandırın, müşteri memnuniyetini
                                        artırın ve süreçlerinizi daha verimli hale getirin.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ClipboardList size={24} />
                                        </div>
                                        <h3>
                                            Hizmet Kartları
                                        </h3>

                                        <p>
                                            Hizmetlerinizi detaylı şekilde tanımlayın,
                                            fiyatlandırın ve tüm bilgileri kolayca yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            < Users size={24} />
                                        </div>

                                        <h3>
                                            Müşteri Takibi
                                        </h3>

                                        <p>
                                            Müşteri geçmişi, yapılan işlemler ve hizmet kayıtlarını
                                            tek ekrandan takip edin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Settings size={24} />
                                        </div>

                                        <h3>
                                            İşlem Yönetimi
                                        </h3>

                                        <p>
                                            Hizmet süreçlerini düzenleyin, yapılan işlemleri
                                            kayıt altına alın ve kontrol altında tutun.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <CalendarClock size={24} />
                                        </div>

                                        <h3>
                                            Randevu Yönetimi
                                        </h3>

                                        <p>
                                            Planlanan hizmetleri takip edin, zaman yönetimini
                                            kolaylaştırın ve operasyonlarınızı düzenleyin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <BarChart3 size={24} />
                                        </div>

                                        <h3>
                                            Raporlama ve Analiz
                                        </h3>

                                        <p>
                                            Hizmet performansınızı analiz edin,
                                            işletmeniz için doğru kararlar alın.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3>
                                            Güvenli Altyapı
                                        </h3>

                                        <p>
                                            Yetkilendirme ve güvenlik seçenekleri ile
                                            verilerinizi güvenle yönetin.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* screenshots section */}
                        <section className="screenshots-section">

                            <div className="container">

                                <div className="section-header">



                                    <h2>
                                        Hizmet Operasyonlarınızı Dijitalleştirin
                                    </h2>

                                    <p>
                                        Klovo Hizmet Yönetimi ile işletmenizin tüm hizmet süreçlerini
                                        daha hızlı, düzenli ve kontrol edilebilir hale getirin.
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

                                        <h3>
                                            Merkezi Hizmet Yönetimi
                                        </h3>

                                        <p>
                                            Tüm hizmetlerinizi tek bir platform üzerinden yönetin,
                                            işlem kayıtlarını takip edin ve operasyon süreçlerinizi
                                            kolaylaştırın.
                                        </p>

                                        <ul>

                                            <li>✔ Hizmet tanımlama ve düzenleme</li>

                                            <li>✔ İşlem geçmişi takibi</li>

                                            <li>✔ Müşteri bazlı kayıt yönetimi</li>

                                            <li>✔ Hızlı erişim ve kolay kullanım</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>
                                            Verimli İş Süreçleri ve Raporlama
                                        </h3>

                                        <p>
                                            Hizmet performansınızı analiz edin,
                                            işletmenizin ihtiyaçlarına göre süreçlerinizi
                                            optimize edin.
                                        </p>

                                        <ul>

                                            <li>✔ Hizmet bazlı analizler</li>

                                            <li>✔ Gelir ve performans raporları</li>

                                            <li>✔ Operasyon takibi</li>

                                            <li>✔ Detaylı yönetim ekranları</li>

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




                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">



                                            <h2>
                                                Profesyonel Hizmet Yönetimi Çözümleri
                                            </h2>

                                            <p>
                                                Klovo ERP ile hizmet süreçlerinizi kolaylaştırın,
                                                müşteri deneyimini geliştirin ve işletmenizin
                                                verimliliğini artırın.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>
                                                    Hizmet
                                                </h3>

                                                <p>
                                                    Yönetimi
                                                </p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>
                                                    Müşteri
                                                </h3>

                                                <p>
                                                    Takibi
                                                </p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>
                                                    Anlık
                                                </h3>

                                                <p>
                                                    Raporlama
                                                </p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>
                                                    ERP
                                                </h3>

                                                <p>
                                                    Entegrasyonu
                                                </p>
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



                                    <h2>
                                        Hizmet Yönetimi Hakkında
                                    </h2>

                                    <p>
                                        Klovo Hizmet Yönetimi modülü hakkında en çok merak edilen
                                        soruları sizin için yanıtladık.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>
                                            Hizmet kartları oluşturabilir miyim?
                                        </summary>

                                        <p>
                                            Evet. İşletmenize sunduğunuz tüm hizmetleri,
                                            fiyat bilgileri ve detaylarıyla birlikte sisteme tanımlayabilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>
                                            Müşteri hizmet geçmişini takip edebilir miyim?
                                        </summary>

                                        <p>
                                            Evet. Müşterilerinize ait geçmiş işlemleri,
                                            hizmet kayıtlarını ve detayları kolayca görüntüleyebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>
                                            Hizmet performans raporları alabilir miyim?
                                        </summary>

                                        <p>
                                            Evet. Hizmet bazlı analizler ve raporlar sayesinde
                                            işletmenizin performansını değerlendirebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>
                                            Mevcut ERP sistemim ile entegre çalışır mı?
                                        </summary>

                                        <p>
                                            Evet. Klovo Hizmet Yönetimi mevcut ERP altyapılarıyla
                                            uyumlu çalışacak şekilde tasarlanmıştır.
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