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

import ImagePreview from "../../style/ImagePreview";
import Main from "./images/satis_and_musteri/cari_rapor.png";
import Main1 from "./images/satis_and_musteri/en_cok.png";

export default function SatisAndMusteriPage() {
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



                                    <h1>
                                        Satış Süreçlerinizi
                                        <br />
                                        Tek Platformdan Yönetin
                                    </h1>

                                    <p>
                                        Klovo Satış ve Müşteri Yönetimi ile tekliften siparişe,
                                        sevkiyattan tahsilata kadar tüm satış operasyonlarınızı
                                        tek panel üzerinden yönetin. Müşteri ilişkilerinizi güçlendirin,
                                        satış performansınızı
                                        artırın ve tüm süreçlerinizi dijitalleştirin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Teklif ve Sipariş Yönetimi</li>

                                        <li>✔ Cari ve Müşteri Yönetimi</li>

                                        <li>✔ Tahsilat Takibi</li>

                                        <li>✔ Satış Analizleri</li>

                                    </ul>



                                </div>

                            </div>

                        </section>
                        {/* avantaj section */}
                        <section className="why-section">

                            <div className="container">

                                <div className="section-header">


                                    <h2>Teklif Yönetimi</h2>
                                    <p>
                                        Profesyonel teklifler hazırlayın, müşterilerinize
                                        hızlıca iletin ve teklif süreçlerinizi kolayca takip edin.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Link2 size={24} />
                                        </div>
                                        <h3>Sipariş Yönetimi</h3>
                                        <p>Siparişlerinizi tek ekrandan yönetin, sipariş durumlarını
                                            anlık olarak takip edin ve süreçlerinizi hızlandırın.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <ShoppingCart size={24} />
                                        </div>

                                        <h3>Müşteri Yönetimi</h3>
                                        <p>Tüm müşteri bilgilerini, iletişim geçmişini
                                            ve cari hesap hareketlerini tek merkezde yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <RefreshCcw size={24} />
                                        </div>

                                        <h3> Tahsilat Takibi</h3>
                                        <p>Açık hesapları takip edin, ödeme planlarını
                                            yönetin ve geciken tahsilatları kolayca görüntüleyin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3> Satış Analizleri</h3>
                                        <p>Satış performansınızı grafikler ve detaylı raporlarla analiz edin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Database size={24} />
                                        </div>

                                        <h3> Hatırlatma Sistemi</h3>
                                        <p>Teklif, ödeme ve müşteri görüşmelerini kaçırmayın. Akıllı hatırlatmalar ile süreçlerinizi kontrol altında tutun.</p>
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



                                    <h2>Satış Süreçlerinizi Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Satış ve Müşteri Yönetimi modülünün modern, hızlı ve kullanıcı dostu
                                        arayüzü ile tekliften tahsilata kadar tüm satış operasyonlarınızı tek
                                        ekrandan yönetin.
                                    </p>

                                </div>


                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Müşteri ve Cari Hesap Yönetimi</h3>

                                        <p>
                                            Müşteri bilgileri, cari hesap hareketleri, bakiye durumu ve iletişim geçmişini tek ekranda görüntüleyin.
                                        </p>

                                        <ul>

                                            <li>✔ Cari kartları</li>

                                            <li>✔ Bakiye takibi</li>

                                            <li>✔ Hareket geçmişi</li>

                                            <li>✔ Müşteri notları</li>

                                        </ul>

                                    </div>
                                    {/* 1. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main}
                                            alt="2"
                                        />
                                    </div>
                                </div>




                                <div className="feature-showcase">
                                    {/* 2. görsel */}
                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main1}
                                            alt="2"
                                        />
                                    </div>

                                    <div className="showcase-content">

                                        <h3>Satış Analizleri ve Raporlama</h3>

                                        <p>
                                            Hangi ürün daha çok satılıyor? Hangi müşteri daha fazla alışveriş yapıyor?
                                            Tüm analizleri anlık raporlarla görüntüleyin.
                                        </p>

                                        <ul>

                                            <li>✔ Satış grafikleri</li>

                                            <li>✔ Müşteri analizleri</li>

                                            <li>✔ Ürün performansı</li>

                                            <li>✔ Karlılık raporları</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">



                                            <h2>Satış Operasyonlarınızı Güçlendirin</h2>

                                            <p>
                                                Satış ekiplerinizin verimliliğini artırın, müşteri ilişkilerinizi güçlendirin
                                                ve tüm satış süreçlerinizi tek platform üzerinden güvenle yönetin.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>%35</h3>
                                                <p>Daha Hızlı Satış Süreci</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>%100</h3>
                                                <p>Cari Kontrolü</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Sipariş Takibi</p>
                                            </div>
                                            <div className="stat-card">
                                                <h3>∞</h3>
                                                <p>Sınırsız Müşteri Kaydı</p>
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


                                    <h2>Satış ve Müşteri Yönetimi Hakkında</h2>

                                    <p>
                                        Satış süreçleri, müşteri yönetimi ve cari hesap takibi hakkında en çok
                                        merak edilen soruları sizin için yanıtladık.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>Teklif oluşturabiliyor muyum?</summary>
                                        <p>
                                            Evet. Klovo ile profesyonel teklifler hazırlayabilir, PDF olarak paylaşabilir ve tekliflerinizi siparişe dönüştürebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">

                                        <summary>Sipariş takibi yapılabiliyor mu?</summary>

                                        <p>
                                            Siparişlerin tüm aşamalarını anlık olarak takip edebilir, sevkiyat ve teslim durumlarını görüntüleyebilirsiniz.
                                        </p>

                                    </details>

                                    <       details className="faq-item">

                                        <           summary>Cari hesapları takip edebilir miyim?</summary>

                                        <p>
                                            Siparişlerin tüm aşamalarını anlık olarak takip edebilir, sevkiyat ve teslim durumlarını görüntüleyebilirsiniz.
                                        </p>

                                    </details>

                                    <details className="faq-item">

                                        <summary>Satış raporları alabilir miyim?</summary>

                                        <p>
                                            Klovo ERP; satış, müşteri ve ürün bazlı detaylı analiz ve raporlar sunmaktadır.
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