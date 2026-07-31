import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    Truck,
    ClipboardList,
    FileCheck,
    PackageCheck,
    BarChart,
    Handshake
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

import ImagePreview from "../../style/ImagePreview";
import Main from "./images/satinAlmaTedarikci/satin_alma_tedarikci.png";
import Main1 from "./images/satinAlmaTedarikci/tedarikci.png";
import Main2 from "./images/satinAlmaTedarikci/stok_kartı.png";

export default function SatinalmaTedarikciPage() {
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
                                        Tedarik Süreçlerinizi
                                        <br />
                                        Kontrol Altına Alın
                                    </h1>

                                    <p>
                                        Klovo Satın Alma ve Tedarikçi Yönetimi ile teklif toplama, sipariş oluşturma, mal kabul, tedarikçi performansı ve satın alma süreçlerinizi tek platform üzerinden yönetin.
                                        Maliyetlerinizi düşürürken tedarik zincirinizi güçlendirin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔  Satın Alma Talepleri</li>

                                        <li>✔ Tedarikçi Yönetimi</li>

                                        <li>✔ Sipariş ve Mal Kabul</li>

                                        <li>✔ Maliyet Analizleri</li>

                                    </ul>



                                </div>

                            </div>

                        </section>
                        {/* avantaj section */}
                        <section className="why-section">

                            <div className="container">

                                <div className="section-header">


                                    <h2>Neden Klovo Satın Alma Yönetimi?</h2>
                                    <p>
                                        İşletmenizin verilerini güvenli, hızlı ve kesintisiz bir
                                        bulut altyapısında yönetin. Sunucu maliyetlerini azaltın,
                                        her yerden erişim sağlayın.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Truck size={24} />
                                        </div>
                                        <h3>Satın Alma Talepleri</h3>
                                        <p>Departmanlardan gelen satın alma taleplerini kolayca oluşturun, onaylayın ve takip edin.</p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            < ClipboardList size={24} />
                                        </div>

                                        <h3>Tedarikçi Yönetimi</h3>
                                        <p>Tüm tedarikçi bilgilerini, iletişim kayıtlarını ve performanslarını tek merkezden yönetin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <FileCheck size={24} />
                                        </div>

                                        <h3> Satın Alma Siparişleri</h3>
                                        <p> Onaylanan talepleri hızlıca siparişe dönüştürün ve sipariş süreçlerini anlık takip edin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <PackageCheck size={24} />
                                        </div>

                                        <h3> Mal Kabul</h3>
                                        <p> Gelen ürünlerin teslimatlarını kayıt altına alın ve stoklarla otomatik eşleştirin.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <  BarChart size={24} />
                                        </div>

                                        <h3> Maliyet Analizi</h3>
                                        <p>Ürün bazında satın alma maliyetlerini analiz ederek daha doğru kararlar alın.</p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            < Handshake size={24} />
                                        </div>

                                        <h3>Performans Takibi</h3>
                                        <p> Teslim süreleri, fiyat avantajları ve tedarikçi performanslarını raporlayın.</p>
                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* screenshots section */}
                        <section className="screenshots-section">

                            <div className="container">

                                <div className="section-header">



                                    <h2>Satın Alma Süreçlerinizi Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Satın Alma ve Tedarikçi Yönetimi modülü ile talep oluşturma, sipariş yönetimi, mal kabul ve tedarikçi takibini tek platform üzerinden yönetin.

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

                                        <h3>Talep, Teklif ve Sipariş Süreçleri</h3>

                                        <p>
                                            Satın alma taleplerini oluşturun, farklı tedarikçilerden teklifler
                                            alın ve en uygun teklifi siparişe dönüştürün.
                                        </p>

                                        <ul>

                                            <li>✔ Satın alma talebi</li>

                                            <li>✔ Teklif karşılaştırma</li>

                                            <li>✔ Sipariş oluşturma</li>

                                            <li>✔ Onay süreçleri</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Tedarikçi Yönetimi</h3>

                                        <p>
                                            Tedarikçilerinizin iletişim bilgilerini, sözleşmelerini, ödeme koşullarını ve
                                            geçmiş siparişlerini tek ekranda yönetin.
                                        </p>

                                        <ul>
                                            <li>✔ Tedarikçi kartları</li>
                                            <li>✔ Geçmiş siparişler</li>
                                            <li>✔ Ödeme koşulları</li>

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

                                        <h3>Mal Kabul ve Maliyet Kontrolü</h3>

                                        <p>
                                            Teslim alınan ürünleri anında stoklara aktarın ve satın alma maliyetlerini detaylı raporlarla analiz edin.

                                        </p>

                                        <ul>
                                            <li>✔ Mal kabul işlemleri</li>
                                            <li>✔ Otomatik stok aktarımı</li>
                                            <li>✔ Maliyet raporları</li>
                                            <li>✔ Satın alma analizleri</li>
                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">



                                            <h2>Verimli Satın Alma, Güçlü Tedarik Zinciri</h2>

                                            <p>
                                                Klovo Satın Alma ve Tedarikçi Yönetimi ile tüm satın alma süreçlerinizi
                                                analiz edin, maliyetlerinizi optimize edin ve tedarik zincirinizi güvenle yönetin.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>%30</h3>
                                                <p>Daha Düşük Satın Alma Maliyeti</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>7/24</h3>
                                                <p>Sipariş Takibi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>5000+</h3>
                                                <p>Tedarikçi Kaydı</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>100%</h3>
                                                <p>İzlenebilir Süreç</p>
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



                                    <h2>Satın Alma ve Tedarikçi Yönetimi Hakkında</h2>

                                    <p>
                                        Satın alma süreçleri, tedarikçi yönetimi ve sipariş operasyonları hakkında en sık sorulan soruları sizin için yanıtladık.

                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        <summary>Satın alma talepleri oluşturabilir miyim?</summary>

                                        <p>
                                            Evet. Departman bazlı satın alma talepleri
                                            oluşturabilir, onay süreçlerini takip edebilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Tedarikçi performansı ölçülebiliyor mu?</summary>

                                        <p>
                                            Evet. Teslim süresi, fiyat avantajı ve sipariş başarısı gibi
                                            kriterlerle performans analizi yapabilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Mal kabul işlemleri stoklara aktarılıyor mu?</summary>

                                        <p>
                                            Gelen ürünler mal kabul işlemi tamamlandıktan sonra otomatik olarak stoklara işlenebilir.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        <summary>Satın alma raporları alınabiliyor mu?</summary>

                                        <p>
                                            Klovo ERP, ürün, tedarikçi ve dönem bazlı detaylı
                                            satın alma analizleri ve raporları sunmaktadır.
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