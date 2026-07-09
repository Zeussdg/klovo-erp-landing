import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    Cloud,
    ShieldCheck,
    DatabaseBackup,
    Zap,
    Globe,
    ChartNoAxesCombined
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

export default function CloudPage() {
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
                                        ☁️ Cloud Altyapı Hizmetleri
                                    </span>

                                    <h1>
                                        İşletmenizi Güvenli
                                        <br />
                                        Bulut Altyapısına Taşıyın
                                    </h1>

                                    <p>
                                        Klovo Cloud Altyapı Hizmetleri ile sunucu yönetimi,
                                        otomatik yedekleme, yüksek erişilebilirlik ve güçlü
                                        güvenlik çözümlerini tek platform üzerinden yönetin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔  %99.9 erişilebilirlik</li>

                                        <li>✔ Otomatik yedekleme</li>

                                        <li>✔ Güvenli veri depolama</li>

                                        <li>✔ Her yerden erişim</li>

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
                                    <h2>Neden Klovo Cloud?</h2>
                                    <p>
                                        İşletmenizin verilerini güvenli, hızlı ve kesintisiz bir
                                        bulut altyapısında yönetin. Sunucu maliyetlerini azaltın,
                                        her yerden erişim sağlayın.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Cloud size={24} />
                                        </div>
                                        <h3>Bulut Altyapısı</h3>
                                        <p>Sunucu kurulumuna ihtiyaç duymadan sistemi anında kullanmaya başlayın.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3>Gelişmiş Güvenlik</h3>
                                        <p>Verileriniz modern güvenlik standartları ile korunur.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <DatabaseBackup size={24} />
                                        </div>

                                        <h3> Otomatik Yedekleme</h3>
                                        <p> Düzenli yedekleme sayesinde veri kaybı riskini en aza indirin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Zap size={24} />
                                        </div>

                                        <h3> Yüksek Performans</h3>
                                        <p> Güçlü sunucu altyapısı ile kesintisiz çalışma deneyimi yaşayın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Globe size={24} />
                                        </div>

                                        <h3> Her Yerden Erişim</h3>
                                        <p>İnternet bağlantısı olan her cihazdan güvenli şekilde sisteme ulaşın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ChartNoAxesCombined size={24} />
                                        </div>

                                        <h3> Kolay Ölçeklenebilirlik</h3>
                                        <p> İşletmeniz büyüdükçe altyapınızı kolayca genişletebilirsiniz.</p>
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
                                        Cloud yönetim panelimizi inceleyerek sunucu yönetimi,
                                        otomatik yedekleme, güvenlik ve sistem izleme
                                        özelliklerini yakından keşfedin.
                                    </p>

                                </div>
                                <div className="feature-showcase">
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <span>Program Ekran Görüntüsü</span>
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Bulut Tabanlı Yönetim Paneli</h3>

                                        <p>
                                            Tüm sunucu ve sistem kaynaklarınızı tek panel üzerinden
                                            izleyin. CPU, RAM, depolama alanı ve sistem durumunu
                                            gerçek zamanlı olarak takip edin.
                                        </p>

                                        <ul>

                                            <li>✔ Canlı sistem durumu</li>

                                            <li>✔ Kaynak kullanım analizi</li>

                                            <li>✔ Sunucu performans raporları</li>

                                            <li>✔ Tek panelden yönetim</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Otomatik Yedekleme ve Kurtarma</h3>

                                        <p>
                                            Verileriniz düzenli olarak otomatik yedeklenir.
                                            İhtiyaç duyduğunuzda tek tıkla eski sürümlere
                                            güvenli şekilde geri dönebilirsiniz.
                                        </p>

                                        <ul>
                                            <li>✔ Günlük otomatik yedekleme</li>
                                            <li>✔ Hızlı geri yükleme</li>
                                            <li>✔ Sürüm geçmişi</li>
                                            <li>✔ Güvenli veri saklama</li>
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

                                        <h3>Güvenlik ve Kullanıcı Yetkilendirme</h3>

                                        <p>
                                            Kullanıcı rollerini yönetin, erişim izinlerini
                                            belirleyin ve tüm sistem hareketlerini kayıt altına alın.
                                        </p>

                                        <ul>
                                            <li>✔ Rol bazlı yetkilendirme</li>
                                            <li>✔ SSL ile güvenli bağlantı</li>
                                            <li>✔ Giriş kayıtları</li>
                                            <li>✔ Yetki yönetimi</li>
                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">

                                            <span className="section-badge">
                                                Neden Klovo Cloud?
                                            </span>

                                            <h2>İşletmeniz İçin Güçlü Bulut Altyapısı</h2>

                                            <p>
                                                Güvenli veri depolama, kesintisiz erişim ve yüksek performans
                                                sunan cloud altyapımız ile işletmenizin dijital dönüşümünü
                                                güvenle destekleyin.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>%99.9</h3>
                                                <p>Kesintisiz Erişim</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Sistem İzleme</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>256 Bit</h3>
                                                <p>SSL Güvenliği</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Otomatik</h3>
                                                <p>Yedekleme</p>
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

                                    <h2>Cloud Altyapı Hizmetleri Hakkında</h2>

                                    <p>
                                        Klovo Cloud Altyapı Hizmetleri ile ilgili sık sorulan sorulara
                                        göz atarak hizmetimiz hakkında daha detaylı bilgi edinebilirsiniz.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>Verilerim nerede saklanıyor?</summary>

                                        <p>
                                            Verileriniz güvenli bulut sunucularında, düzenli yedekleme ve
                                            erişim kontrolleriyle korunmaktadır.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Otomatik yedekleme yapılıyor mu?</summary>

                                        <p>
                                            Evet. Sistem belirlenen periyotlarda otomatik yedekleme alır.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Sisteme her yerden erişebilir miyim?</summary>

                                        <p>
                                            İnternet bağlantısı olan bilgisayar, tablet veya telefon üzerinden
                                            güvenli şekilde erişebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Sunucu yönetimi bana mı ait?</summary>

                                        <p>
                                            Hayır. Sunucu bakımı, güncellemeler ve performans takibi Klovo ekibi
                                            tarafından yönetilir.
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