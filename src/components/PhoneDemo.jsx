import { useEffect, useRef, useState } from 'react';
import './PhoneDemo.css';
import StockInquiry from './modules/StockInquiry';
import BarcodeCards from './modules/BarcodeCards';



const menuGroups = [
  ['▣', 'GENEL KARTLAR', ['Stok Sorgula', 'Stok Kartı', 'Barkod Kartları', 'Hizmet Kartı', 'Masraf Kartı', 'Cari Kartı', 'Personel Kartı']],
  ['◩', 'FİNANSAL KARTLAR', ['Kasa Kartı', 'Kredi Kartı Kartı', 'Pos Kartı', 'Banka Hesap Kartı']],
  ['☰', 'GENEL EVRAKLAR', ['Alış Proforması', 'Satış Proforması', 'Alış Siparişi', 'Satış Siparişi', 'Alış Teklifi', 'Satış Teklifi', 'Alış İrsaliyesi', 'Satış İrsaliyesi', 'Alış Faturası', 'Satış Faturası']],
  ['▤', 'FİNANSAL FİŞLER', ['Fiyat Değişikliği Fişi']],
  ['◫', 'FİNANSAL EVRAKLAR', ['Tahsilat', 'Tediye', 'Çek Girişi', 'Çek Çıkışı', 'Senet Girişi', 'Senet Çıkışı', 'Borç Dekont', 'Alacak Dekont', 'Gelen Havale', 'Giden Havale']],
  ['⇄', 'HAREKETLER', ['Cari Hareketler']],
  ['◇', 'GRUPLAR', ['Cari Ana Grup', 'Masraf Grup', 'Stok Ana Grup', 'Stok Alt Grup', 'Stok Kategori', 'Hizmet Ana Grup']],
  ['▧', 'AÇILIŞ EVRAKLARI', ['Açılış Evrakları', 'Stok Devir Evrakları']],
  ['▥', 'RAPORLAR', ['Masraf Raporu', 'Kasa Raporu', 'Banka Raporu', 'Cari Durum Raporu', 'Cari Durum Bakiye Raporu', 'Hizmet Durum Raporu', 'Miktarsal ve Finansal Stok Durum Raporu', 'Satış Raporu', 'Alış Raporu', 'Nakit Akış Raporu', 'Kar/Zarar Raporu', 'Z Raporları']],
  ['⚙', 'AYARLAR', ['Firma Ayarları', 'Kullanıcı Ayarları']],
];

const cards = [
  { icon: '↗', color: 'blue', title: 'Satış (Bugün, Şirket)', subtitle: 'Bugün + Son 7 gün', total: '107.655,43 ₺', rows: [['Satış (Bugün)', '107.655,43 ₺'], ['Satış (7g)', '441.078,43 ₺']] },
  { icon: '▤', color: 'orange', title: 'Masraf (Bugün)', subtitle: 'Bugün + Son 7 gün', total: '0,00 ₺', rows: [['Masraf (Bugün)', '0,00 ₺'], ['Masraf (7g)', '0,00 ₺']] },
  { icon: '▣', color: 'green', title: 'Nakit Akış (Bugün Net)', subtitle: 'Bugün + Son 7 gün', error: 'Veri alınamadı' },
  { icon: '▰', color: 'teal', title: 'Banka Hareketleri (7g)', subtitle: 'Son 7 gün', total: '129.627,00 ₺', rows: [['Banka IN (7g)', '129.627,00 ₺'], ['Banka OUT (7g)', '0,00 ₺']] },
  { icon: '▰', color: 'red', title: 'Stok Durumu (Miktarsal + Finansal)', subtitle: 'Güncel stok görünümü', total: '842 Ürün', rows: [['Kritik stok', '7 ürün'], ['Toplam değer', '1.241.987,00 ₺']] },
];

const activeModules = [
  'Stok Sorgula',
  'Barkod Kartları'
];

export default function PhoneDemo() {
  const [powered, setPowered] = useState(false);
  const [battery, setBattery] = useState(100);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const [clock, setClock] = useState('14:32');
  const toastTimer = useRef(null);
  const [activeModule, setActiveModule] = useState('dashboard');


  useEffect(() => {
    if (!powered) return;
    const updateClock = () => setClock(new Intl.DateTimeFormat('tr-TR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    updateClock();
    const id = setInterval(updateClock, 30000);
    return () => clearInterval(id);
  }, [powered]);

  useEffect(() => {
    if (!powered) return;
    const id = setInterval(() => {
      setBattery((current) => {
        if (current <= 1) {
          setPowered(false);
          setDrawerOpen(false);
          return 100;
        }
        return current - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [powered]);

  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 1800);
  };

  const powerOn = () => {
    setBattery(100);
    setPowered(true);
  };


  const results = menuGroups.filter((group) => `${group[1]} ${group[2].join(' ')}`.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr')));

  const openModule = (moduleName) => {
    setDrawerOpen(false);

    if (moduleName === 'Stok Sorgula') {
      setActiveModule('stock-inquiry');
      return;
    }

    if (moduleName === 'Barkod Kartları') {
      setActiveModule('barcode-cards');
      return;
    }

    showToast(`${moduleName} açılıyor`);
  };


  return <div className="phone-demo">
    <div className="phone"><div className="screen">
      <div className="statusbar"><span>{clock}</span><span className="status-icons">▣ ◉ ⌁ ▰ {battery}%</span></div>
      <header className="app-header">
        <button className="hamburger" onClick={() => setDrawerOpen(true)} aria-label="Menüyü aç">☰</button>
        <h1>Klovo One Erp</h1>
        <div className="date"><span>Cuma</span><strong>17.07.2026</strong></div>
      </header>
      <main className="dashboard">
        {cards.map((card) => <article className={`report-card ${card.color}`} key={card.title}>
          <div className="report-top"><div className="card-icon">{card.icon}</div><div className="card-copy"><h2>{card.title}</h2><p>{card.subtitle}</p></div><button onClick={() => showToast(`${card.title} raporu açılıyor`)}>Rapor</button></div>
          {card.error ? <p className="error-text">{card.error}</p> : <><strong className="report-total">{card.total}</strong><div className="report-rows">{card.rows.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></>}
        </article>)}
      </main>
      {toast && <div className="toast">{toast}</div>}
      <div className="home-indicator" />
      <div className={`drawer-scrim ${drawerOpen ? 'visible' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="user"><div className="avatar">♙</div><div><strong>Yetkili Yetkili</strong><span>Anonim A.Ş. Şirketi</span></div></div>
        <label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Modül ara..." /></label>
        <div className="menu-scroll"><h3>ANA MODÜLLER</h3>{results.map(([icon, name, children]) => <div className="menu-block" key={name}>
          <button className="menu-item" onClick={() => setExpanded(expanded === name ? null : name)}><i>{icon}</i><span>{name}</span><b className={expanded === name ? 'rotated' : ''}>⌄</b></button>
          {expanded === name && <div className="sub-menu">{children.map((child) => <button key={child} onClick={() => openModule(child)}>
            <span
              className={`module-dot ${activeModules.includes(child) ? 'active' : 'inactive'
                }`}
            />
            {child}
          </button>)}</div>}
        </div>)}
          {!query && <><h3 className="other-title">DİĞER MODÜLLER</h3><div className="menu-block"><button className="menu-item" onClick={() => setExpanded(expanded === 'PERAKENDE YÖNETİMİ' ? null : 'PERAKENDE YÖNETİMİ')}><i>▤</i><span>PERAKENDE YÖNETİMİ</span><b className={expanded === 'PERAKENDE YÖNETİMİ' ? 'rotated' : ''}>⌄</b></button>{expanded === 'PERAKENDE YÖNETİMİ' && <div className="sub-menu">{['Hızlı Satış (POS)', 'Terminal Yönetimi', 'Kategori Yönetimi', 'Ürün Butonları'].map((item) => <button key={item} onClick={() => { showToast(`${item} açılıyor`); setDrawerOpen(false); }}>{item}</button>)}</div>}</div></>}
        </div>
      </aside>

      {activeModule === 'stock-inquiry' && (
        <StockInquiry
          onBack={() => setActiveModule('dashboard')}
          onMenu={() => setDrawerOpen(true)}
        />
      )}

      {activeModule === 'barcode-cards' && (
        <BarcodeCards
          onBack={() => setActiveModule('dashboard')}
          onMenu={() => setDrawerOpen(true)}
        />
      )}


      <div className={`power-screen ${powered ? 'off' : ''}`}>
        <button className="power-btn" onClick={powerOn} aria-label="Demoyu aç">⏻</button>
        <strong>Demoyu aktif hâle getirmek için basın</strong>
        <span>Kaynak tasarrufu için demo bekleme modunda</span>
      </div>
    </div></div>
  </div>;
}
