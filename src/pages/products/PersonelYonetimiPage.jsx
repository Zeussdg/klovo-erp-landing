import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/products/DepotStockPage.css";

import {
    Users,
    UserPlus,
    CalendarDays,
    ClipboardCheck,
    BarChart3,
    ShieldCheck
} from "lucide-react";

import ProductContactForm from "../../components/ProductContactForm";

import ImagePreview from "../../style/ImagePreview";
import Main from "./images/personel/personel_çalışan.png";
import Main1 from "./images/personel/personel_kartı.png";


export default function PersonelYonetimiPage() {

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
                                        Personel Süreçlerinizi
                                        <br />
                                        Kolay ve Verimli Yönetin
                                    </h1>


                                    <p>
                                        Klovo Personel Yönetimi modülü ile çalışan
                                        bilgilerinizi, izin süreçlerinizi ve personel
                                        operasyonlarınızı tek platform üzerinden yönetin.
                                    </p>



                                    <ul className="hero-list">


                                        <li>
                                            ✔ Personel Kart Yönetimi
                                        </li>


                                        <li>
                                            ✔ İzin ve Mesai Takibi
                                        </li>


                                        <li>
                                            ✔ Performans Raporları
                                        </li>


                                        <li>
                                            ✔ Güvenli Personel Verileri
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
                                        Neden Klovo Personel Yönetimi?
                                    </h2>


                                    <p>
                                        Çalışan süreçlerinizi düzenleyin,
                                        insan kaynakları operasyonlarınızı
                                        daha hızlı ve kontrollü yönetin.
                                    </p>


                                </div>




                                <div className="why-grid">



                                    <div className="why-card">


                                        <div className="why-icon">

                                            <Users size={24} />

                                        </div>


                                        <h3>
                                            Personel Kartları
                                        </h3>


                                        <p>
                                            Çalışan bilgilerini detaylı şekilde
                                            kaydedin ve kolayca yönetin.
                                        </p>


                                    </div>




                                    <div className="why-card">


                                        <div className="why-icon">

                                            <UserPlus size={24} />

                                        </div>


                                        <h3>
                                            Personel Takibi
                                        </h3>


                                        <p>
                                            Yeni çalışan kayıtlarını oluşturun,
                                            personel hareketlerini takip edin.
                                        </p>


                                    </div>





                                    <div className="why-card">


                                        <div className="why-icon">

                                            <CalendarDays size={24} />

                                        </div>


                                        <h3>
                                            İzin Yönetimi
                                        </h3>


                                        <p>
                                            İzin taleplerini ve çalışma
                                            süreçlerini kolayca yönetin.
                                        </p>


                                    </div>





                                    <div className="why-card">


                                        <div className="why-icon">

                                            <ClipboardCheck size={24} />

                                        </div>


                                        <h3>
                                            Mesai Takibi
                                        </h3>


                                        <p>
                                            Çalışma sürelerini ve personel
                                            hareketlerini kontrol edin.
                                        </p>


                                    </div>





                                    <div className="why-card">


                                        <div className="why-icon">

                                            <BarChart3 size={24} />

                                        </div>


                                        <h3>
                                            Performans Analizi
                                        </h3>


                                        <p>
                                            Personel performansını raporlarla
                                            değerlendirin.
                                        </p>


                                    </div>





                                    <div className="why-card">


                                        <div className="why-icon">

                                            <ShieldCheck size={24} />

                                        </div>


                                        <h3>
                                            Güvenli Veri Yönetimi
                                        </h3>


                                        <p>
                                            Personel bilgilerinizi güvenli
                                            altyapı ile koruyun.
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
                                        Personel Süreçlerinizi Dijitalleştirin
                                    </h2>

                                    <p>
                                        Klovo Personel Yönetimi ile çalışan bilgilerini,
                                        izin süreçlerini ve operasyonel işlemleri tek merkezden yönetin.
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
                                            Merkezi Personel Bilgi Yönetimi
                                        </h3>


                                        <p>
                                            Çalışan bilgilerinizi tek sistem üzerinden yönetin,
                                            personel kayıtlarını düzenli şekilde takip edin.
                                        </p>



                                        <ul>

                                            <li>
                                                ✔ Detaylı personel kartları
                                            </li>

                                            <li>
                                                ✔ Departman ve görev yönetimi
                                            </li>

                                            <li>
                                                ✔ Personel geçmiş kayıtları
                                            </li>

                                            <li>
                                                ✔ Hızlı bilgi erişimi
                                            </li>

                                        </ul>


                                    </div>


                                </div>




                                <div className="feature-showcase reverse">



                                    <div className="showcase-content">


                                        <h3>
                                            İzin, Mesai ve Performans Takibi
                                        </h3>


                                        <p>
                                            Personel çalışma süreçlerini kontrol edin,
                                            izin ve performans bilgilerini kolayca analiz edin.
                                        </p>



                                        <ul>

                                            <li>
                                                ✔ İzin talep ve onay süreçleri
                                            </li>

                                            <li>
                                                ✔ Çalışma günleri takibi
                                            </li>

                                            <li>
                                                ✔ Performans değerlendirmeleri
                                            </li>

                                            <li>
                                                ✔ Raporlama desteği
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





                                {/* STATS SECTION */}


                                <section className="stats-section">


                                    <div className="container">


                                        <div className="section-header">


                                            <h2>
                                                Profesyonel Personel Yönetimi Çözümleri
                                            </h2>


                                            <p>
                                                Klovo ile insan kaynakları süreçlerinizi
                                                kolaylaştırın ve çalışan yönetimini daha verimli hale getirin.
                                            </p>


                                        </div>




                                        <div className="stats-grid">



                                            <div className="stat-card">

                                                <h3>
                                                    %100
                                                </h3>

                                                <p>
                                                    Dijital Personel Takibi
                                                </p>

                                            </div>




                                            <div className="stat-card">

                                                <h3>
                                                    Anlık
                                                </h3>

                                                <p>
                                                    Veri Yönetimi
                                                </p>

                                            </div>




                                            <div className="stat-card">

                                                <h3>
                                                    Detaylı
                                                </h3>

                                                <p>
                                                    Performans Raporları
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
                                        Personel Yönetimi Hakkında
                                    </h2>


                                    <p>
                                        Klovo Personel Yönetimi modülü hakkında
                                        sık sorulan soruları sizin için yanıtladık.
                                    </p>


                                </div>




                                <div className="faq-list">



                                    <details className="faq-item">


                                        <summary>
                                            Personel bilgilerini sistemde saklayabilir miyim?
                                        </summary>


                                        <p>
                                            Evet. Çalışan bilgileri, görev bilgileri ve
                                            personel geçmiş kayıtlarını güvenli şekilde saklayabilirsiniz.
                                        </p>


                                    </details>





                                    <details className="faq-item">


                                        <summary>
                                            İzin süreçlerini takip edebilir miyim?
                                        </summary>


                                        <p>
                                            Evet. Personel izin taleplerini,
                                            onay süreçlerini ve izin geçmişlerini kolayca yönetebilirsiniz.
                                        </p>


                                    </details>





                                    <details className="faq-item">


                                        <summary>
                                            Personel performans raporu oluşturabilir miyim?
                                        </summary>


                                        <p>
                                            Evet. Personel bazlı analizler ve performans raporları
                                            oluşturarak çalışan süreçlerini değerlendirebilirsiniz.
                                        </p>


                                    </details>





                                    <details className="faq-item">


                                        <summary>
                                            ERP sistemiyle entegre çalışır mı?
                                        </summary>


                                        <p>
                                            Evet. Klovo ERP içerisindeki diğer modüllerle
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