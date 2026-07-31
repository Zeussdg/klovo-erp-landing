import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";
import {
    Fuel,
    Gauge,
    Truck,
    CreditCard,
    ChartColumn,
    ShieldCheck
} from "lucide-react";
import ProductContactForm from "../../components/ProductContactForm";

import ImagePreview from "../../style/ImagePreview";
import Main from "./images/akaryakit/hesap_cetvel.png";
import Main1 from "./images/akaryakit/kolaj.png";
import Main2 from "./images/akaryakit/görsel3.png";

export default function AkaryakitPage() {
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
                                        Akaryakıt
                                        <br />
                                        Satış ve İstasyon
                                        <br />
                                        Yönetimini Kolaylaştırın
                                    </h1>

                                    <p>
                                        Klovo Akaryakıt Yönetimi ile pompa satışlarını,
                                        tank stoklarını, cari hesapları ve istasyon
                                        operasyonlarını tek panel üzerinden yönetin.
                                    </p>

                                    <ul className="hero-list">

                                        <li>✔ Pompa Satış Takibi</li>

                                        <li>✔ Tank ve Stok Yönetimi</li>

                                        <li>✔ Filo ve Cari Yönetimi</li>

                                        <li>✔ Günlük Satış Raporları</li>

                                    </ul>



                                </div>

                            </div>

                        </section>
                        {/* avantaj section */}
                        <section className="why-section">

                            <div className="container">

                                <div className="section-header">


                                    <h2>Neden Klovo Akaryakıt Yönetimi?</h2>

                                    <p>
                                        İstasyon operasyonlarını tek panelden yönetin,
                                        yakıt satışlarını takip edin ve tüm süreçlerinizi
                                        güvenli, hızlı ve verimli hale getirin.
                                    </p>
                                </div>

                                <div className="why-grid">

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Fuel size={24} />
                                        </div>
                                        <h3>Pompa Satış Yönetimi</h3>

                                        <p>
                                            Tüm pompalardaki satışları anlık olarak takip edin ve yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">

                                        <div className="why-icon">
                                            <Gauge size={24} />
                                        </div>

                                        <h3>Tank Seviye Takibi</h3>

                                        <p>
                                            Tank doluluk oranlarını ve yakıt seviyelerini gerçek zamanlı izleyin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <Truck size={24} />
                                        </div>

                                        <h3>Filo Yönetimi</h3>

                                        <p>
                                            Kurumsal müşterilerin filo yakıt tüketimlerini kolayca yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <CreditCard size={24} />
                                        </div>

                                        <h3>Cari ve Ödeme Takibi</h3>

                                        <p>
                                            Tahsilatları, cari hesapları ve ödeme hareketlerini tek ekrandan yönetin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ChartColumn size={24} />
                                        </div>

                                        <h3>Satış ve Karlılık Analizleri</h3>

                                        <p>
                                            Günlük, haftalık ve aylık satış performansınızı detaylı raporlarla analiz edin.
                                        </p>
                                    </div>

                                    <div className="why-card">
                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3>Güvenli İşlem Altyapısı</h3>

                                        <p>
                                            Yetkilendirme ve güvenlik kontrolleriyle tüm işlemlerinizi koruma altına alın.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* screenshots section */}
                        <section className="screenshots-section">

                            <div className="container">

                                <div className="section-header">


                                    <h2>Akaryakıt Operasyonlarını Yakından İnceleyin</h2>

                                    <p>
                                        Klovo Akaryakıt Yönetimi ile istasyon operasyonlarınızı,
                                        pompa satışlarınızı ve stok yönetiminizi tek platform
                                        üzerinden kolayca yönetin.
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

                                        <h3>Pompa Satışlarını Anlık Takip Edin</h3>

                                        <p>
                                            Tüm pompalarda gerçekleşen satışları gerçek zamanlı izleyin.
                                            Satış tutarlarını, yakıt türlerini ve işlem geçmişini tek ekrandan yönetin.
                                        </p>

                                        <ul>

                                            <li>✔ Anlık pompa satış takibi</li>

                                            <li>✔ Yakıt türü bazında raporlama</li>

                                            <li>✔ Gün sonu satış özeti</li>

                                            <li>✔ Personel bazlı satış takibi</li>

                                        </ul>

                                    </div>

                                </div>

                                <div className="feature-showcase reverse">

                                    <div className="showcase-content">

                                        <h3>Tank ve Yakıt Stok Yönetimi</h3>

                                        <p>
                                            Tank seviyelerini, dolum işlemlerini ve yakıt stoklarını
                                            tek panel üzerinden takip ederek olası stok problemlerini önceden tespit edin.
                                        </p>

                                        <ul>

                                            <li>✔ Tank doluluk oranı</li>

                                            <li>✔ Yakıt giriş-çıkış kayıtları</li>

                                            <li>✔ Kritik seviye uyarıları</li>

                                            <li>✔ Otomatik stok hesaplama</li>

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

                                        <h3>Satış ve Finansal Analizler</h3>

                                        <p>
                                            Günlük satış performansınızı, cari hesap hareketlerini ve filo
                                            tüketimlerini detaylı raporlarla analiz ederek işletmenizin
                                            verimliliğini artırın.
                                        </p>

                                        <ul>

                                            <li>✔ Günlük ve aylık satış raporları</li>

                                            <li>✔ Cari hesap takibi</li>

                                            <li>✔ Filo tüketim analizleri</li>

                                            <li>✔ Karlılık raporları</li>

                                        </ul>

                                    </div>

                                </div>



                                {/* stats-section*/}
                                <section className="stats-section">

                                    <div className="container">

                                        <div className="section-header">



                                            <h2>Akaryakıt Operasyonlarınızı Veriye Dönüştürün</h2>

                                            <p>
                                                Satışlarınızı, tank seviyelerinizi ve finansal verilerinizi
                                                anlık olarak takip edin. Güçlü raporlama araçlarıyla
                                                işletmenizi daha verimli yönetin.
                                            </p>

                                        </div>

                                        <div className="stats-grid">

                                            <div className="stat-card">
                                                <h3>7/24</h3>

                                                <p>Anlık İstasyon Takibi</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>%100</h3>

                                                <p>Tank Stok Kontrolü</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Anlık</h3>

                                                <p>Pompa Satış Verileri</p>
                                            </div>

                                            <div className="stat-card">
                                                <h3>Detaylı</h3>

                                                <p>Finansal Raporlama</p>
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



                                    <h2>Akaryakıt Yönetimi Hakkında</h2>

                                    <p>
                                        Akaryakıt Yönetimi çözümümüz hakkında en sık sorulan
                                        soruları sizin için yanıtladık.
                                    </p>

                                </div>

                                <div className="faq-list">

                                    <details className="faq-item">
                                        {/* 1. soru */}
                                        <summary> Sistem tüm akaryakıt istasyonları için uygun mudur?</summary>

                                        <p>
                                            Evet. Klovo Akaryakıt Yönetimi, farklı ölçeklerdeki akaryakıt istasyonlarının ihtiyaçlarına uygun olarak geliştirilebilir ve özelleştirilebilir.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        {/* 2. soru */}
                                        <summary>Tank seviyelerini anlık takip edebilir miyim?</summary>

                                        <p>
                                            Evet. Tank doluluk oranlarını ve yakıt stoklarını gerçek zamanlı olarak izleyebilir, kritik seviyeler için otomatik uyarılar alabilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        {/* 3. soru */}
                                        <summary>Filo müşterilerini sistem üzerinden yönetebilir miyim?</summary>

                                        <p>
                                            Evet. Kurumsal filo müşterilerinizi tanımlayabilir, yakıt tüketimlerini takip edebilir ve detaylı raporlar oluşturabilirsiniz.
                                        </p>
                                    </details>

                                    <details className="faq-item">
                                        {/* 4. soru */}
                                        <summary>Finansal raporlar ve satış analizleri sunuyor musunuz?</summary>

                                        <p>
                                            Evet. Günlük, haftalık ve aylık satış raporları, cari hesap hareketleri ve kârlılık analizleriyle işletmenizin performansını detaylı olarak takip edebilirsiniz.
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