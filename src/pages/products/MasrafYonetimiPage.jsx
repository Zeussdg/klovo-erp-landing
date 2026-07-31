import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";

import {
    ReceiptText,
    WalletCards,
    TrendingDown,
    FileChartColumn,
    Calculator,
    ShieldCheck
} from "lucide-react";

import ProductContactForm from "../../components/ProductContactForm";

import ImagePreview from "../../style/ImagePreview";
import Main from "./images/masraf/masraf_raporu.png";
import Main1 from "./images/masraf/raporlama.png";


export default function MasrafYonetimiPage() {

    return (
        <>

            <Navbar />


            <div className="container">


                <main className="product-layout">


                    <div className="product-content">


                        {/* HERO */}

                        <section className="depot-hero">

                            <div className="container depot-hero-container">


                                <div className="hero-content">


                                    <h1>
                                        İşletme
                                        <br />
                                        Masraflarınızı Kolayca Yönetin
                                    </h1>


                                    <p>
                                        Klovo Masraf Yönetimi modülü ile işletmenizin
                                        tüm giderlerini kayıt altına alın, takip edin
                                        ve finansal süreçlerinizi daha kontrollü yönetin.
                                    </p>


                                    <ul className="hero-list">

                                        <li>
                                            ✔ Gider Takibi
                                        </li>

                                        <li>
                                            ✔ Masraf Kayıt Yönetimi
                                        </li>

                                        <li>
                                            ✔ Detaylı Raporlama
                                        </li>

                                        <li>
                                            ✔ Finans Entegrasyonu
                                        </li>


                                    </ul>





                                </div>


                            </div>


                        </section>



                        {/* WHY SECTION */}


                        <section className="why-section">


                            <div className="container">


                                <div className="section-header">


                                    <h2>
                                        Neden Klovo Masraf Yönetimi?
                                    </h2>


                                    <p>
                                        İşletmenizin tüm gider süreçlerini tek merkezden
                                        takip ederek mali kontrolünüzü güçlendirin.
                                    </p>


                                </div>



                                <div className="why-grid">



                                    <div className="why-card">

                                        <div className="why-icon">
                                            <ReceiptText size={24} />
                                        </div>

                                        <h3>
                                            Masraf Kayıtları
                                        </h3>

                                        <p>
                                            Tüm giderlerinizi detaylarıyla kaydedin
                                            ve kolayca takip edin.
                                        </p>

                                    </div>




                                    <div className="why-card">

                                        <div className="why-icon">
                                            <WalletCards size={24} />
                                        </div>

                                        <h3>
                                            Gider Yönetimi
                                        </h3>

                                        <p>
                                            İşletmenizin harcamalarını düzenli şekilde
                                            kontrol altında tutun.
                                        </p>

                                    </div>




                                    <div className="why-card">

                                        <div className="why-icon">
                                            <TrendingDown size={24} />
                                        </div>

                                        <h3>
                                            Maliyet Kontrolü
                                        </h3>

                                        <p>
                                            Gereksiz giderleri analiz ederek
                                            maliyetlerinizi azaltın.
                                        </p>

                                    </div>




                                    <div className="why-card">

                                        <div className="why-icon">
                                            <FileChartColumn size={24} />
                                        </div>

                                        <h3>
                                            Raporlama
                                        </h3>

                                        <p>
                                            Masraf hareketlerini detaylı raporlarla
                                            inceleyin.
                                        </p>

                                    </div>




                                    <div className="why-card">

                                        <div className="why-icon">
                                            <Calculator size={24} />
                                        </div>

                                        <h3>
                                            Finans Takibi
                                        </h3>

                                        <p>
                                            Gelir ve gider dengenizi daha kolay yönetin.
                                        </p>

                                    </div>




                                    <div className="why-card">

                                        <div className="why-icon">
                                            <ShieldCheck size={24} />
                                        </div>

                                        <h3>
                                            Güvenli Yönetim
                                        </h3>

                                        <p>
                                            Yetkilendirme ile finansal verilerinizi koruyun.
                                        </p>

                                    </div>



                                </div>


                            </div>


                        </section>



                        {/* SCREENSHOTS SECTION */}

                        <section className="screenshots-section">

                            <div className="container">


                                <div className="section-header">

                                    <h2>
                                        Masraf Süreçlerinizi Dijitalleştirin
                                    </h2>

                                    <p>
                                        Klovo Masraf Yönetimi ile işletmenizin tüm gider süreçlerini
                                        kolayca takip edin, analiz edin ve kontrol altında tutun.
                                    </p>

                                </div>



                                <div className="feature-showcase">


                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main}
                                            alt="2"
                                        />
                                    </div>



                                    <div className="showcase-content">


                                        <h3>
                                            Merkezi Masraf Takibi
                                        </h3>


                                        <p>
                                            İşletmenizin tüm gider kayıtlarını tek noktadan yönetin,
                                            masraf hareketlerini kolayca takip edin.
                                        </p>


                                        <ul>

                                            <li>
                                                ✔ Masraf kayıt oluşturma
                                            </li>

                                            <li>
                                                ✔ Gider kategorilendirme
                                            </li>

                                            <li>
                                                ✔ Kullanıcı bazlı takip
                                            </li>

                                            <li>
                                                ✔ Finans süreçleriyle uyum
                                            </li>

                                        </ul>


                                    </div>


                                </div>




                                <div className="feature-showcase reverse">



                                    <div className="showcase-content">


                                        <h3>
                                            Finansal Analiz ve Raporlama
                                        </h3>


                                        <p>
                                            Masraf verilerinizi analiz ederek işletmenizin
                                            finansal durumunu daha doğru değerlendirin.
                                        </p>


                                        <ul>


                                            <li>
                                                ✔ Detaylı gider raporları
                                            </li>


                                            <li>
                                                ✔ Tarih bazlı analiz
                                            </li>


                                            <li>
                                                ✔ Departman bazlı takip
                                            </li>


                                            <li>
                                                ✔ Daha doğru mali kararlar
                                            </li>


                                        </ul>



                                    </div>




                                    <div className="showcase-image">
                                        <ImagePreview
                                            src={Main1}
                                            alt="2"
                                        />
                                    </div>



                                </div>



                                {/* STATS */}


                                <section className="stats-section">


                                    <div className="container">


                                        <div className="section-header">


                                            <h2>
                                                Güçlü Masraf Yönetimi Çözümleri
                                            </h2>


                                            <p>
                                                Klovo ile işletmenizin giderlerini kontrol altına alın,
                                                maliyetlerinizi analiz edin ve daha verimli yönetin.
                                            </p>


                                        </div>




                                        <div className="stats-grid">


                                            <div className="stat-card">

                                                <h3>
                                                    %100
                                                </h3>

                                                <p>
                                                    Dijital Masraf Takibi
                                                </p>

                                            </div>



                                            <div className="stat-card">

                                                <h3>
                                                    Anlık
                                                </h3>

                                                <p>
                                                    Gider Kontrolü
                                                </p>

                                            </div>




                                            <div className="stat-card">

                                                <h3>
                                                    Detaylı
                                                </h3>

                                                <p>
                                                    Finans Raporları
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





                        {/* FAQ SECTION */}


                        <section className="faq-section">


                            <div className="container">


                                <div className="section-header">


                                    <h2>
                                        Masraf Yönetimi Hakkında
                                    </h2>


                                    <p>
                                        Klovo Masraf Yönetimi modülü hakkında
                                        sık sorulan sorular.
                                    </p>


                                </div>



                                <div className="faq-list">



                                    <details className="faq-item">


                                        <summary>
                                            Masraf kayıtlarını sisteme ekleyebilir miyim?
                                        </summary>


                                        <p>
                                            Evet. İşletmenize ait tüm gider kayıtlarını
                                            kategori ve detay bilgileriyle sisteme ekleyebilirsiniz.
                                        </p>


                                    </details>




                                    <details className="faq-item">


                                        <summary>
                                            Giderleri kategorilere ayırabilir miyim?
                                        </summary>


                                        <p>
                                            Evet. Yakıt, personel, bakım, operasyon gibi
                                            farklı gider kategorileri oluşturabilirsiniz.
                                        </p>


                                    </details>




                                    <details className="faq-item">


                                        <summary>
                                            Masraf raporları oluşturabilir miyim?
                                        </summary>


                                        <p>
                                            Evet. Tarih, kategori ve kullanıcı bazlı
                                            detaylı raporlar oluşturabilirsiniz.
                                        </p>


                                    </details>




                                    <details className="faq-item">


                                        <summary>
                                            Finans modülüyle entegre çalışır mı?
                                        </summary>


                                        <p>
                                            Evet. Klovo ERP içerisindeki finans süreçleriyle
                                            uyumlu şekilde çalışır.
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