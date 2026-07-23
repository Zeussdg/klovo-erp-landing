import { useState, useEffect } from 'react';
import './TabletDemo.css';
import StockInquiry from './modules/StockInquiry';
import BarcodeCards from './modules/BarcodeCards';



const ANA_MODULLER = [
  { name: 'GENEL KARTLAR', icon: '💳', children: ['Stok Sorgula', 'Stok Kartı', 'Barkod Kartları', 'Hizmet Kartı', 'Masraf Kartı', 'Cari Kartı', 'Personel Kartı'] },
  { name: 'FİNANSAL KARTLAR', icon: '💼', children: ['Banka Kartı', 'Kasa Kartı', 'Çek/Senet Kartı', 'Kredi Kartı', 'Pos Kartı'] },
  { name: 'GENEL EVRAKLAR', icon: '📄', children: ['Sipariş Evrakı', 'İrsaliye', 'Teklif Evrakı', 'Sözleşme Evrakı'] },
  { name: 'FİNANSAL FİŞLER', icon: '🧾', children: ['Tahsilat Fişi', 'Tediye Fişi', 'Mahsup Fişi', 'Virman Fişi'] },
  { name: 'FİNANSAL EVRAKLAR', icon: '📑', children: ['Fatura', 'e-Arşiv Fatura', 'Fatura İade', 'Masraf Evrakı'] },
  { name: 'HAREKETLER', icon: '🔁', children: ['Stok Hareketleri', 'Cari Hareketleri', 'Kasa Hareketleri', 'Banka Hareketleri'] },
  { name: 'GRUPLAR', icon: '🗂️', children: ['Stok Grupları', 'Cari Grupları', 'Personel Grupları'] },
  { name: 'AÇILIŞ EVRAKLARI', icon: '📃', children: ['Açılış Fişi', 'Devir Evrakı', 'Stok Sayım Evrakı'] },
  { name: 'RAPORLAR', icon: '📊', children: ['Satış Raporu', 'Stok Raporu', 'Cari Raporu', 'Finans Raporu'] },
  { name: 'AYARLAR', icon: '⚙️', children: ['Genel Ayarlar', 'Kullanıcı Ayarları', 'Yetki Ayarları', 'Entegrasyon Ayarları'] },
];

const DIGER_MODULLER = [
  { name: 'PERAKENDE YÖNETİMİ', icon: '🛒', children: ['POS Ayarları', 'Kasa Yönetimi', 'Fiyat Etiketleri'] },
];

export default function TabletDemo() {
  const [powered, setPowered] = useState(false);
  const [battery, setBattery] = useState(100);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');
  const [nakitState, setNakitState] = useState('error'); // 'error' | 'loading' | 'loaded'
  const [clock, setClock] = useState('14:32');
  const [activeModule, setActiveModule] = useState('dashboard');

  // Saat: sadece cihaz aktifken çalışır (kaynak tasarrufu)
  useEffect(() => {
    if (!powered) return;
    const tick = () => {
      const d = new Date();
      setClock(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [powered]);

  // Batarya sayacı: açılışta 100'den başlar, saniyede %1 azalır,
  // 0'a ulaşınca demo otomatik olarak pasif konuma döner.
  useEffect(() => {
    if (!powered) return;
    const id = setInterval(() => {
      setBattery((b) => {
        if (b <= 1) {
          setPowered(false);
          setMenuOpen(false);
          return 100;
        }
        return b - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [powered]);

  const handlePowerOn = () => {
    setBattery(100);
    setPowered(true);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1800);
  };

  const handleModuleClick = (name) => {
    setMenuOpen(false);

    if (name === 'Stok Sorgula') {
      setActiveModule('stock-inquiry');
      return;
    }

    if (name === 'Barkod Kartları') {
      setActiveModule('barcode-cards');
      return;
    }

    showToast(`${name} açılıyor…`);
  };

  const toggleGroup = (name) => {
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleNakitRetry = () => {
    if (nakitState !== 'error') return;
    setNakitState('loading');
    showToast('Nakit akışı yeniden deneniyor…');
    setTimeout(() => setNakitState('loaded'), 900);
  };

  const q = search.trim().toLocaleUpperCase('tr-TR');
  const filteredAna = ANA_MODULLER.filter((m) => m.name.includes(q));
  const filteredDiger = DIGER_MODULLER.filter((m) => m.name.includes(q));

  const activeModules = [
    'Stok Sorgula',
    'Barkod Kartları'
  ];

  return (
    <div className="tablet-demo">
      <div className="tablet">
        <div className="screen">
          <div className="camera-dot" />

          <div className="header">
            <div className="statusbar">
              <span>{clock}</span>
              <span>N ⏰ 📶 LTE ▮▮▮▯ {battery}%</span>
            </div>
            <div className="header-main">
              <div className="header-left">
                <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menü">
                  <span /><span /><span />
                </button>
                <div className="app-title">Klovo One Erp</div>
              </div>
              <div className="header-right">
                <div className="header-day">Cuma</div>
                <div className="header-date">17.07.2026</div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="card wide" onClick={() => showToast('Satış raporu açılıyor…')}>
              <div className="card-top">
                <div className="card-left">
                  <div className="card-icon" style={{ background: '#eceafd', color: 'var(--satis)' }}>📈</div>
                  <div>
                    <div className="card-title">Satış (Bugün, Şirket)</div>
                    <div className="card-sub">Bugün + Son 7 gün</div>
                  </div>
                </div>
                <div className="card-link" style={{ color: 'var(--satis)' }}>Rapor</div>
              </div>
              <div className="card-value">107.655,43 ₺</div>
              <div className="card-row"><span className="label">Satış (Bugün)</span><span className="value">107.655,43 ₺</span></div>
              <div className="card-row"><span className="label">Satış (7g)</span><span className="value">441.078,43 ₺</span></div>
            </div>

            <div className="card" onClick={() => showToast('Masraf raporu açılıyor…')}>
              <div className="card-top">
                <div className="card-left">
                  <div className="card-icon" style={{ background: '#ffece5', color: 'var(--masraf)' }}>🧾</div>
                  <div>
                    <div className="card-title">Masraf (Bugün)</div>
                    <div className="card-sub">Bugün + Son 7 gün</div>
                  </div>
                </div>
                <div className="card-link" style={{ color: 'var(--masraf)' }}>Rapor</div>
              </div>
              <div className="card-value">0,00 ₺</div>
              <div className="card-row"><span className="label">Masraf (Bugün)</span><span className="value">0,00 ₺</span></div>
              <div className="card-row"><span className="label">Masraf (7g)</span><span className="value">0,00 ₺</span></div>
            </div>

            <div className="card" onClick={(e) => { e.stopPropagation(); handleNakitRetry(); }}>
              <div className="card-top">
                <div className="card-left">
                  <div className="card-icon" style={{ background: '#e6f8ef', color: 'var(--nakit)' }}>👛</div>
                  <div>
                    <div className="card-title">Nakit Akış (Bugün Net)</div>
                    <div className="card-sub">Bugün + Son 7 gün</div>
                  </div>
                </div>
                <div className="card-link" style={{ color: 'var(--nakit)' }}>Rapor</div>
              </div>

              {nakitState === 'error' && <div className="card-error">Veri alınamadı</div>}
              {nakitState === 'loading' && <div className="card-error" style={{ color: 'var(--muted)' }}>Yükleniyor...</div>}
              {nakitState === 'loaded' && (
                <>
                  <div className="card-value">18.240,00 ₺</div>
                  <div className="card-row"><span className="label">Nakit Giriş</span><span className="value">42.500,00 ₺</span></div>
                  <div className="card-row"><span className="label">Nakit Çıkış</span><span className="value">24.260,00 ₺</span></div>
                </>
              )}
            </div>

            <div className="card" onClick={() => showToast('Banka hareketleri raporu açılıyor…')}>
              <div className="card-top">
                <div className="card-left">
                  <div className="card-icon" style={{ background: '#e5f4f2', color: 'var(--banka)' }}>🏦</div>
                  <div>
                    <div className="card-title">Banka Hareketleri (7g)</div>
                    <div className="card-sub">Son 7 gün</div>
                  </div>
                </div>
                <div className="card-link" style={{ color: 'var(--banka)' }}>Rapor</div>
              </div>
              <div className="card-value">129.627,00 ₺</div>
              <div className="card-row"><span className="label">Banka IN (7g)</span><span className="value">129.627,00 ₺</span></div>
              <div className="card-row"><span className="label">Banka OUT (7g)</span><span className="value">0,00 ₺</span></div>
            </div>

            <div className="card wide" onClick={() => showToast('Stok durumu raporu açılıyor…')}>
              <div className="card-top">
                <div className="card-left">
                  <div className="card-icon" style={{ background: '#fdeaee', color: 'var(--stok)' }}>📦</div>
                  <div>
                    <div className="card-title">Stok Durumu (Miktarsal + Finansal)</div>
                    <div className="card-sub">Anlık durum</div>
                  </div>
                </div>
                <div className="card-link" style={{ color: 'var(--stok)' }}>Rapor</div>
              </div>
              <div className="card-value">842 adet</div>
              <div className="card-row"><span className="label">Toplam Stok Değeri</span><span className="value">1.284.900,00 ₺</span></div>
              <div className="card-row"><span className="label">Kritik Seviye Ürün</span><span className="value">7</span></div>
            </div>
          </div>

          <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)} />
          <div className={`drawer ${menuOpen ? 'open' : ''}`}>
            <div className="drawer-profile">
              <div className="profile-icon">👤</div>
              <div>
                <div className="profile-name">Yetkili1 Yetkili</div>
                <div className="profile-company">Anonim A.Ş. Şirketi</div>
              </div>
            </div>

            <div className="drawer-search">
              <input
                type="text"
                placeholder="Modül ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="drawer-scroll">
              {filteredAna.length > 0 && (
                <>
                  <div className="drawer-label">ANA MODÜLLER</div>
                  {filteredAna.map((m) => (
                    <div key={m.name} className="drawer-accordion">
                      <div className="drawer-item" onClick={() => toggleGroup(m.name)}>
                        <div className="drawer-item-left">
                          <span className="drawer-item-icon">{m.icon}</span>
                          <span className="drawer-item-name">{m.name}</span>
                        </div>
                        <span className={`drawer-chevron ${openGroups[m.name] ? 'open' : ''}`}>⌄</span>
                      </div>
                      <div className={`drawer-children ${openGroups[m.name] ? 'open' : ''}`}>
                        {m.children.map((c) => (
                          < div key = { c } className = "drawer-child" onClick = {() => handleModuleClick(c)}>
                        <span
                          className={`module-dot ${activeModules.includes(c) ? 'active' : 'inactive'
                            }`}
                        />
                        {c}
                      </div>
                      
                  ))}
                </div>
            </div>
                  ))}
          </>
              )}

          {filteredDiger.length > 0 && (
            <>
              <div className="drawer-label">DİĞER MODÜLLER</div>
              {filteredDiger.map((m) => (
                <div key={m.name} className="drawer-accordion">
                  <div className="drawer-item" onClick={() => toggleGroup(m.name)}>
                    <div className="drawer-item-left">
                      <span className="drawer-item-icon">{m.icon}</span>
                      <span className="drawer-item-name">{m.name}</span>
                    </div>
                    <span className={`drawer-chevron ${openGroups[m.name] ? 'open' : ''}`}>⌄</span>
                  </div>
                  <div className={`drawer-children ${openGroups[m.name] ? 'open' : ''}`}>
                    {m.children.map((c) => (
                      <div key={c} className="drawer-child" onClick={() => handleModuleClick(c)}>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {toast && <div className="toast show">{toast}</div>}

      {activeModule === 'stock-inquiry' && (
        <StockInquiry
          onBack={() => setActiveModule('dashboard')}
          onMenu={() => setMenuOpen(true)}
        />
      )}

      {activeModule === 'barcode-cards' && (
        <BarcodeCards
          onBack={() => setActiveModule('dashboard')}
          onMenu={() => setMenuOpen(true)}
        />
      )}

      <div className={`power-screen ${powered ? 'off' : ''}`}>
        <div className="power-btn" onClick={handlePowerOn}>⏻</div>
        <div className="power-text">Demoyu aktif hale getirmek için basın</div>
        <div className="power-sub">Kaynak tasarrufu için demo bekleme modunda</div>
      </div>
    </div>
      </div >
    </div >
  );
}
