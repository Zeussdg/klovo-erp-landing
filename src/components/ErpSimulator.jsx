import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  DollarSign, 
  FileText, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Trash2,
  TrendingUp,
  Lock,
  ChevronDown,
  ChevronUp,
  UserCheck,
  CreditCard,
  Layers,
  FileSpreadsheet,
  Settings,
  ShoppingBag,
  UtensilsCrossed,
  Fuel,
  Network,
  Users2,
  FileSignature
} from 'lucide-react';
import './ErpSimulator.css';

export default function ErpSimulator({ isStandaloneMode = false }) {
  // Lock / Licensing State
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('klovo_erp_unlocked') === 'true';
  });
  const [licenseKey, setLicenseKey] = useState('');
  const [licenseError, setLicenseError] = useState('');
  
  // Accordion Expand/Collapse States
  const [expandedCats, setExpandedCats] = useState({
    genel_kartlar: true,
    finansal_kartlar: false,
    genel_evraklar: false,
    finansal_evraklar: false,
    depo_evraklari: false,
    raporlar: true,
    perakende_yonetimi: false,
    restoran_yonetimi: false,
    akaryakit_yonetimi: false,
    e_donusum: false
  });

  // Active Tab State (default is overview/dashboard)
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Database States
  const [stockItems, setStockItems] = useState([
    { id: 1, name: 'Bulut Kullanıcı Lisansı', qty: 45, unit: 'Adet' },
    { id: 2, name: 'Barkod Okuyucu Terminali', qty: 4, unit: 'Adet' },
    { id: 3, name: 'E-Fatura Kontörü (5k)', qty: 18, unit: 'Paket' },
    { id: 4, name: 'API Entegrasyon Modülü', qty: 8, unit: 'Lisans' }
  ]);
  const [newStock, setNewStock] = useState({ name: '', qty: '', unit: 'Adet' });

  const [clients, setClients] = useState([
    { id: 1, name: 'Akın Yapı A.Ş.', type: 'Alıcı', balance: 18500 },
    { id: 2, name: 'Birlik Gıda Ltd.', type: 'Satıcı', balance: -4200 },
    { id: 3, name: 'Kuzey Nakliyat', type: 'Alıcı', balance: 9300 }
  ]);
  const [newClient, setNewClient] = useState({ name: '', type: 'Alıcı', balance: '' });

  const [cashAccounts, setCashAccounts] = useState([
    { id: 1, name: 'Merkez TL Kasası', balance: 45300 },
    { id: 2, name: 'Şube TL Kasası', balance: 12800 }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', amount: 15400, desc: 'Lisans Satışı', date: '2026-07-01' },
    { id: 2, type: 'expense', amount: 3200, desc: 'Sunucu Kiralama', date: '2026-07-03' },
    { id: 3, type: 'income', amount: 8900, desc: 'API Kurulum Desteği', date: '2026-07-04' }
  ]);
  const [newTransaction, setNewTransaction] = useState({ type: 'income', amount: '', desc: '', date: '2026-07-06' });

  const [invoices, setInvoices] = useState([
    { id: 'INV-2026-001', client: 'Demir Teknoloji A.Ş.', amount: 15400, date: '2026-07-01', status: 'Onaylandı' },
    { id: 'INV-2026-002', client: 'Kuzey Lojistik Ltd.', amount: 8900, date: '2026-07-04', status: 'Gönderildi' },
    { id: 'INV-2026-003', client: 'Hedef Perakendecilik', amount: 4500, date: '2026-07-05', status: 'Taslak' }
  ]);
  const [newInvoice, setNewInvoice] = useState({ client: '', amount: '', status: 'Taslak' });

  const [salesOrders, setSalesOrders] = useState([
    { id: 'ORD-001', client: 'Akın Yapı A.Ş.', amount: 12500, date: '2026-07-05', status: 'Hazırlanıyor' },
    { id: 'ORD-002', client: 'Kuzey Nakliyat', amount: 4800, date: '2026-07-06', status: 'Kargoya Verildi' }
  ]);
  const [newOrder, setNewOrder] = useState({ client: '', amount: '' });

  // POS State
  const [posCart, setPosCart] = useState([]);
  const posProducts = [
    { id: 1, name: 'Barkod Terminali', price: 6500 },
    { id: 2, name: 'Termal Fiş Yazıcı', price: 2800 },
    { id: 3, name: 'Lazer Barkod Okuyucu', price: 1400 },
    { id: 4, name: 'Klovo ERP Kullanıcı Lisansı', price: 3500 },
    { id: 5, name: 'E-Fatura 1000 Kontör', price: 900 }
  ];

  // Restaurant State
  const [restaurantTables, setRestaurantTables] = useState([
    { id: 1, name: 'Masa 1', status: 'busy', amount: 450, orders: [{ name: 'Klovo Özel Burger', qty: 2, price: 200 }, { name: 'Kola', qty: 2, price: 25 }] },
    { id: 2, name: 'Masa 2', status: 'empty', amount: 0, orders: [] },
    { id: 3, name: 'Masa 3', status: 'busy', amount: 120, orders: [{ name: 'Çay', qty: 6, price: 20 }] },
    { id: 4, name: 'Masa 4', status: 'empty', amount: 0, orders: [] },
    { id: 5, name: 'Masa 5', status: 'empty', amount: 0, orders: [] },
    { id: 6, name: 'Masa 6', status: 'empty', amount: 0, orders: [] }
  ]);
  const [selectedTableId, setSelectedTableId] = useState(1);
  const restMenu = [
    { name: 'Klovo Burger', price: 200 },
    { name: 'Izgara Köfte', price: 280 },
    { name: 'Çay', price: 20 },
    { name: 'Kahve', price: 45 },
    { name: 'Kola', price: 25 }
  ];

  // Calculations
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.amount), 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.amount), 0);
  const netProfit = totalIncome - totalExpense;
  const lowStockCount = stockItems.filter(item => item.qty < 10).length;

  const currentMonthSales = 24000 + totalIncome;

  // Key Activation Validation
  const handleActivateKey = (e) => {
    e.preventDefault();
    const cleanKey = licenseKey.trim().toUpperCase();
    if (cleanKey === 'KLOVO-DEMO-2026' || cleanKey === 'KLOVO-FREE') {
      setIsUnlocked(true);
      localStorage.setItem('klovo_erp_unlocked', 'true');
      setLicenseError('');
      alert('Tebrikler! Tüm premium modüllerin kilidi başarıyla açıldı.');
    } else {
      setLicenseError('Geçersiz anahtar! Lütfen doğru kodu girin veya yeni bir anahtar talep edin.');
    }
  };

  const handleRequestKey = () => {
    // Dispatch custom event to Contact form
    window.dispatchEvent(new Event('klovo-request-key'));
    if (!isStandaloneMode) {
      alert('İletişim formuna yönlendiriliyorsunuz. Mesajınız otomatik olarak dolduruldu!');
    } else {
      alert('Lütfen anasayfadaki iletişim formunu kullanarak lisans anahtarı talep edin. İletişim e-postası: info@klovo.com');
    }
  };

  const toggleCategory = (cat) => {
    setExpandedCats(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const selectTab = (tabId, isLockedTab) => {
    if (isLockedTab && !isUnlocked) {
      // Set target tab to trigger lock overlay, but don't unlock yet
      setActiveTab(tabId);
    } else {
      setActiveTab(tabId);
    }
  };

  // Stock Handlers
  const handleAddStock = (e) => {
    e.preventDefault();
    if (!newStock.name || !newStock.qty) return;
    setStockItems([
      ...stockItems,
      { id: Date.now(), name: newStock.name, qty: parseInt(newStock.qty), unit: newStock.unit }
    ]);
    setNewStock({ name: '', qty: '', unit: 'Adet' });
  };
  const handleStockQtyChange = (id, change) => {
    setStockItems(stockItems.map(item => item.id === id ? { ...item, qty: Math.max(0, item.qty + change) } : item));
  };
  const handleDeleteStock = (id) => {
    setStockItems(stockItems.filter(item => item.id !== id));
  };

  // Cari Handlers
  const handleAddClient = (e) => {
    e.preventDefault();
    if (!newClient.name || !newClient.balance) return;
    setClients([
      ...clients,
      { id: Date.now(), name: newClient.name, type: newClient.type, balance: parseFloat(newClient.balance) }
    ]);
    setNewClient({ name: '', type: 'Alıcı', balance: '' });
  };
  const handleDeleteClient = (id) => {
    setClients(clients.filter(c => c.id !== id));
  };

  // Finance Transactions Handlers
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.amount || !newTransaction.desc) return;
    const amountVal = parseFloat(newTransaction.amount);
    
    // Adjust Kasa Balances
    setCashAccounts(cashAccounts.map(account => {
      if (account.id === 1) { // Merkez Kasa
        const nextBal = newTransaction.type === 'income' ? account.balance + amountVal : account.balance - amountVal;
        return { ...account, balance: nextBal };
      }
      return account;
    }));

    setTransactions([
      ...transactions,
      { id: Date.now(), type: newTransaction.type, amount: amountVal, desc: newTransaction.desc, date: newTransaction.date }
    ]);
    setNewTransaction({ type: 'income', amount: '', desc: '', date: '2026-07-06' });
  };

  // Invoice Handlers
  const handleAddInvoice = (e) => {
    e.preventDefault();
    if (!newInvoice.client || !newInvoice.amount) return;
    const invId = `INV-2026-0${invoices.length + 1}`;
    const amountVal = parseFloat(newInvoice.amount);

    if (newInvoice.status === 'Onaylandı') {
      setTransactions([
        ...transactions,
        { id: Date.now(), type: 'income', amount: amountVal, desc: `${newInvoice.client} Faturası`, date: '2026-07-06' }
      ]);
      setCashAccounts(cashAccounts.map(a => a.id === 1 ? { ...a, balance: a.balance + amountVal } : a));
    }

    setInvoices([
      ...invoices,
      { id: invId, client: newInvoice.client, amount: amountVal, date: '2026-07-06', status: newInvoice.status }
    ]);
    setNewInvoice({ client: '', amount: '', status: 'Taslak' });
  };

  const handleInvoiceStatusChange = (id, newStatus) => {
    setInvoices(invoices.map(inv => {
      if (inv.id === id) {
        if (newStatus === 'Onaylandı' && inv.status !== 'Onaylandı') {
          setTransactions([
            ...transactions,
            { id: Date.now(), type: 'income', amount: inv.amount, desc: `${inv.client} Faturası`, date: '2026-07-06' }
          ]);
          setCashAccounts(cashAccounts.map(a => a.id === 1 ? { ...a, balance: a.balance + inv.amount } : a));
        }
        return { ...inv, status: newStatus };
      }
      return inv;
    }));
  };

  // Sales Order Handlers
  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newOrder.client || !newOrder.amount) return;
    setSalesOrders([
      ...salesOrders,
      {
        id: `ORD-00${salesOrders.length + 1}`,
        client: newOrder.client,
        amount: parseFloat(newOrder.amount),
        date: '2026-07-06',
        status: 'Hazırlanıyor'
      }
    ]);
    setNewOrder({ client: '', amount: '' });
  };

  // POS Handlers
  const handleAddToPosCart = (product) => {
    const existing = posCart.find(item => item.id === product.id);
    if (existing) {
      setPosCart(posCart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setPosCart([...posCart, { ...product, qty: 1 }]);
    }
  };

  const handleClearPosCart = () => {
    setPosCart([]);
  };

  const handlePosCheckout = (method) => {
    if (posCart.length === 0) return;
    const cartTotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = cartTotal * 0.20;
    const grandTotal = cartTotal + tax;

    // Add to Transactions
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        type: 'income',
        amount: grandTotal,
        desc: `POS Perakende Satış (${method === 'nakit' ? 'Nakit' : 'Kredi Kartı'})`,
        date: '2026-07-06'
      }
    ]);

    // Add to cash register
    setCashAccounts(cashAccounts.map(account => {
      if (account.id === 1) {
        return { ...account, balance: account.balance + grandTotal };
      }
      return account;
    }));

    // Auto record mock e-invoice
    setInvoices([
      ...invoices,
      {
        id: `INV-POS-${Math.floor(Math.random() * 9000 + 1000)}`,
        client: 'Bireysel Perakende Müşterisi',
        amount: grandTotal,
        date: '2026-07-06',
        status: 'Onaylandı'
      }
    ]);

    alert(`Satış Başarıyla Tamamlandı!\nTutar: ${grandTotal.toLocaleString('tr-TR')} ₺\nÖdeme Tipi: ${method.toUpperCase()}\nE-Fatura otomatik düzenlendi.`);
    setPosCart([]);
  };

  // Restaurant Handlers
  const handleTableClick = (id) => {
    setSelectedTableId(id);
  };

  const handleAddToTable = (menuItem) => {
    setRestaurantTables(restaurantTables.map(table => {
      if (table.id === selectedTableId) {
        const existing = table.orders.find(item => item.name === menuItem.name);
        let nextOrders = [];
        if (existing) {
          nextOrders = table.orders.map(item => item.name === menuItem.name ? { ...item, qty: item.qty + 1 } : item);
        } else {
          nextOrders = [...table.orders, { ...menuItem, qty: 1 }];
        }
        const nextAmount = nextOrders.reduce((sum, item) => sum + (item.price * item.qty), 0);
        return {
          ...table,
          status: 'busy',
          orders: nextOrders,
          amount: nextAmount
        };
      }
      return table;
    }));
  };

  const handleCloseTableBill = () => {
    const targetTable = restaurantTables.find(t => t.id === selectedTableId);
    if (!targetTable || targetTable.status === 'empty') return;

    const billAmount = targetTable.amount;

    // Record income
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        type: 'income',
        amount: billAmount,
        desc: `${targetTable.name} Adisyon Kapatma`,
        date: '2026-07-06'
      }
    ]);

    setCashAccounts(cashAccounts.map(account => {
      if (account.id === 1) {
        return { ...account, balance: account.balance + billAmount };
      }
      return account;
    }));

    // Reset Table
    setRestaurantTables(restaurantTables.map(table => {
      if (table.id === selectedTableId) {
        return {
          ...table,
          status: 'empty',
          amount: 0,
          orders: []
        };
      }
      return table;
    }));

    alert(`${targetTable.name} adisyon kapatıldı. ${billAmount.toLocaleString('tr-TR')} ₺ nakit kasaya eklendi.`);
  };

  // Check if active tab is locked
  const lockedTabs = [
    'barkod_kartlari', 'hizmet_kartlari', 'masraf_kartlari', 'personel_kartlari',
    'banka_hesap', 'kredi_karti', 'pos_karti',
    'alis_proforma', 'satis_proforma', 'alis_siparis', 'alis_teklif', 'satis_teklif', 'alis_irsaliye', 'satis_irsaliye', 'alis_fatura',
    'cek_giris', 'cek_cikis', 'sayim_fisi', 'depolar_arasi_transfer',
    'masraf_raporu', 'banka_raporu', 'terminal_yonetimi', 'mutfak_ekrani',
    'sayaç_satişlari', 'hesap_cetveli'
  ];
  const isCurrentTabLocked = lockedTabs.includes(activeTab);

  return (
    <div className="simulator-container">
      {/* Sidebar with Accordion Navigation */}
      <div className="sim-sidebar">
        <div className="sim-logo-container" style={{ padding: '0 1rem 1rem 1rem', borderBottom: '1px solid var(--border-color)' }}>
          <div className="sim-logo">
            <div className="sim-logo-dot"></div>
            <span>KLOVO ERP PANELİ</span>
          </div>
          {isUnlocked && <span className="unlocked-sim-badge" style={{ marginTop: '0.25rem', display: 'inline-block' }}>Lisans Aktif</span>}
        </div>

        <div className="accordion-menu">
          {/* Main Dashboard tab */}
          <button 
            className={`accordion-header ${activeTab === 'dashboard' ? 'active-cat' : ''}`}
            onClick={() => { selectTab('dashboard', false); }}
            style={{ marginBottom: '0.5rem', background: activeTab === 'dashboard' ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <LayoutDashboard size={16} className="accordion-category-icon" /> Genel Bakış
            </span>
          </button>

          {/* 1. GENEL KARTLAR */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('genel_kartlar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Layers size={16} className="accordion-category-icon" /> Genel Kartlar
              </span>
              {expandedCats.genel_kartlar ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.genel_kartlar && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'stok_karti' ? 'active' : ''}`} onClick={() => selectTab('stok_karti', false)}>
                  <span>Stok Kartı</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className={`sim-menu-item ${activeTab === 'cari_kart' ? 'active' : ''}`} onClick={() => selectTab('cari_kart', false)}>
                  <span>Cari Kartı</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('barkod_kartlari', true)}>
                  <span>Barkod Kartları</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('hizmet_kartlari', true)}>
                  <span>Hizmet Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('masraf_kartlari', true)}>
                  <span>Masraf Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('personel_kartlari', true)}>
                  <span>Personel Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 2. FİNANSAL KARTLAR */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('finansal_kartlar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <CreditCard size={16} className="accordion-category-icon" /> Finansal Kartlar
              </span>
              {expandedCats.finansal_kartlar ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.finansal_kartlar && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'kasa_karti' ? 'active' : ''}`} onClick={() => selectTab('kasa_karti', false)}>
                  <span>Kasa Kartı</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('banka_hesap', true)}>
                  <span>Banka Hesap Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('kredi_karti', true)}>
                  <span>Kredi Kartı Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('pos_karti', true)}>
                  <span>POS Kartı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 3. GENEL EVRAKLAR */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('genel_evraklar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FileSignature size={16} className="accordion-category-icon" /> Genel Evraklar
              </span>
              {expandedCats.genel_evraklar ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.genel_evraklar && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'satis_fatura' ? 'active' : ''}`} onClick={() => selectTab('satis_fatura', false)}>
                  <span>Satış Faturası</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className={`sim-menu-item ${activeTab === 'satis_siparis' ? 'active' : ''}`} onClick={() => selectTab('satis_siparis', false)}>
                  <span>Satış Siparişi</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('alis_proforma', true)}>
                  <span>Alış Proforma</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('satis_proforma', true)}>
                  <span>Satış Proforma</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('alis_siparis', true)}>
                  <span>Alış Siparişi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('alis_teklif', true)}>
                  <span>Alış Teklifi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('satis_teklif', true)}>
                  <span>Satış Teklifi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('alis_irsaliye', true)}>
                  <span>Alış İrsaliyesi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('satis_irsaliye', true)}>
                  <span>Satış İrsaliyesi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('alis_fatura', true)}>
                  <span>Alış Faturası</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 4. FİNANSAL EVRAKLAR */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('finansal_evraklar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <DollarSign size={16} className="accordion-category-icon" /> Finansal Evraklar
              </span>
              {expandedCats.finansal_evraklar ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.finansal_evraklar && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'tahsilat' ? 'active' : ''}`} onClick={() => selectTab('tahsilat', false)}>
                  <span>Tahsilat Fişi</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className={`sim-menu-item ${activeTab === 'tediye' ? 'active' : ''}`} onClick={() => selectTab('tediye', false)}>
                  <span>Tediye Fişi (Gider)</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('cek_giris', true)}>
                  <span>Çek Giriş Evrağı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('cek_cikis', true)}>
                  <span>Çek Çıkış Evrağı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 5. DEPO EVRAKLARI */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('depo_evraklari')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Package size={16} className="accordion-category-icon" /> Depo Evrakları
              </span>
              {expandedCats.depo_evraklari ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.depo_evraklari && (
              <div className="accordion-content">
                <button className="sim-menu-item locked" onClick={() => selectTab('sayim_fisi', true)}>
                  <span>Sayım Evrağı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('depolar_arasi_transfer', true)}>
                  <span>Depolar Arası Transfer</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 6. RAPORLAR */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('raporlar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FileSpreadsheet size={16} className="accordion-category-icon" /> Raporlar
              </span>
              {expandedCats.raporlar ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.raporlar && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'kar_zarar' ? 'active' : ''}`} onClick={() => selectTab('kar_zarar', false)}>
                  <span>Kar/Zarar Raporu</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className={`sim-menu-item ${activeTab === 'kasa_raporu' ? 'active' : ''}`} onClick={() => selectTab('kasa_raporu', false)}>
                  <span>Kasa Raporu</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('masraf_raporu', true)}>
                  <span>Masraf Raporu</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('banka_raporu', true)}>
                  <span>Banka Raporu</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 7. PERAKENDE YÖNETİMİ */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('perakende_yonetimi')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingBag size={16} className="accordion-category-icon" /> Perakende Yönetimi
              </span>
              {expandedCats.perakende_yonetimi ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.perakende_yonetimi && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'pos_satis' ? 'active' : ''}`} onClick={() => selectTab('pos_satis', false)}>
                  <span>Hızlı Satış (POS)</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('terminal_yonetimi', true)}>
                  <span>Terminal Yönetimi</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 8. RESTORAN YÖNETİMİ */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('restoran_yonetimi')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <UtensilsCrossed size={16} className="accordion-category-icon" /> Restoran Yönetimi
              </span>
              {expandedCats.restoran_yonetimi ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.restoran_yonetimi && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'adisyon_yonetimi' ? 'active' : ''}`} onClick={() => selectTab('adisyon_yonetimi', false)}>
                  <span>Adisyon Yönetimi</span>
                  <div className="item-badge-active"></div>
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('mutfak_ekrani', true)}>
                  <span>Mutfak Ekranı</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 9. AKARYAKIT YÖNETİMİ */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('akaryakit_yonetimi')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Fuel size={16} className="accordion-category-icon" /> Akaryakıt Yönetimi
              </span>
              {expandedCats.akaryakit_yonetimi ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.akaryakit_yonetimi && (
              <div className="accordion-content">
                <button className="sim-menu-item locked" onClick={() => selectTab('sayaç_satişlari', true)}>
                  <span>Sayaç Satışları</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
                <button className="sim-menu-item locked" onClick={() => selectTab('hesap_cetveli', true)}>
                  <span>Hesap Cetveli</span>
                  <Lock size={12} className="item-badge-lock" />
                </button>
              </div>
            )}
          </div>

          {/* 10. E-DÖNÜŞÜM */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleCategory('e_donusum')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Network size={16} className="accordion-category-icon" /> E-Dönüşüm
              </span>
              {expandedCats.e_donusum ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedCats.e_donusum && (
              <div className="accordion-content">
                <button className={`sim-menu-item ${activeTab === 'satis_fatura' ? 'active' : ''}`} onClick={() => selectTab('satis_fatura', false)}>
                  <span>E-Fatura Kes</span>
                  <div className="item-badge-active"></div>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Content Canvas Area */}
      <div className="sim-content-wrapper">
        
        {/* Standalone Control bar for simulation */}
        <div className="sim-standalone-control">
          <span>Klovo ERP Demo Sürümü </span>
          <span style={{ color: 'var(--text-muted)' }}>Demo Kodu: <strong style={{ color: 'var(--accent-blue)', fontFamily: 'monospace' }}>KLOVO-DEMO-2026</strong></span>
        </div>

        {/* LOCKED MODAL / SHIELD */}
        {isCurrentTabLocked && !isUnlocked && (
          <div className="lock-screen-overlay">
            <div className="lock-card glass-card">
              <div className="lock-icon-wrapper">
                <Lock size={28} />
              </div>
              <h4>Modül Kilitli</h4>
              <p>
                Bu gelişmiş ERP modülü ücretsiz demo modunda kısıtlanmıştır. Tam sürümü denemek veya etkinleştirme anahtarı almak için bizimle iletişime geçin.
              </p>
              
              <form onSubmit={handleActivateKey} className="lock-key-input-group">
                <input 
                  type="text" 
                  className="lock-input" 
                  placeholder="Lisans Anahtarı Girin" 
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value)}
                />
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ padding: '0 1rem' }}>
                  Etkinleştir
                </button>
              </form>
              
              {licenseError && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>{licenseError}</span>}

              <div className="lock-actions">
                <button className="btn btn-secondary w-full" onClick={handleRequestKey}>
                  Lisans Anahtarı Talep Et
                </button>
                <button className="btn btn-secondary w-full" style={{ fontSize: '0.8rem', opacity: 0.7 }} onClick={() => setActiveTab('dashboard')}>
                  Panele Geri Dön
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ACTUALLY ACTIVE CHANNELS CONTENT */}
        <div className="sim-content">
          
          {/* TAB 1: OVERVIEW DASHBOARD */}
          {activeTab === 'dashboard' && (
            <>
              <div className="sim-header">
                <div className="sim-header-with-badge">
                  <h3>Yönetim Genel Bakış</h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Durum: Canlı</span>
              </div>

              {/* Stats row */}
              <div className="sim-stats-grid">
                <div className="sim-stat-card">
                  <span className="sim-stat-title">Nakit Durumu (Merkez Kasası)</span>
                  <span className="sim-stat-value" style={{ color: '#10b981' }}>
                    {cashAccounts[0].balance.toLocaleString('tr-TR')} ₺
                  </span>
                  <span className="sim-stat-trend up">
                    <ArrowUpRight size={14} /> Aktif Gelir Girdileriyle Büyür
                  </span>
                </div>

                <div className="sim-stat-card">
                  <span className="sim-stat-title">Kritik Stok</span>
                  <span className="sim-stat-value" style={{ color: lowStockCount > 0 ? '#f59e0b' : '#10b981' }}>
                    {lowStockCount} Ürün
                  </span>
                  <span className="sim-stat-trend" style={{ color: 'var(--text-muted)' }}>
                    <AlertTriangle size={14} /> 10 adetin altındaki stoklar
                  </span>
                </div>

                <div className="sim-stat-card">
                  <span className="sim-stat-title">Cari Borç/Alacak Durumu</span>
                  <span className="sim-stat-value">
                    {clients.reduce((sum, c) => sum + c.balance, 0).toLocaleString('tr-TR')} ₺
                  </span>
                  <span className="sim-stat-trend" style={{ color: 'var(--text-muted)' }}>
                    <Users2 size={14} /> Toplam {clients.length} kayıtlı cari
                  </span>
                </div>
              </div>

              {/* Dynamic sales trend graph */}
              <div className="chart-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Satış Trendi (Aylık Toplam)</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <TrendingUp size={14} /> Canlı Satışlarla Güncellenir
                  </span>
                </div>
                <div className="chart-bars">
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '45px' }}></div>
                    <span className="chart-bar-label">Şub</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '80px' }}></div>
                    <span className="chart-bar-label">Mar</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '60px' }}></div>
                    <span className="chart-bar-label">Nis</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: '115px' }}></div>
                    <span className="chart-bar-label">May</span>
                  </div>
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{ height: `${Math.min(130, Math.max(30, currentMonthSales / 300))}px` }}>
                      <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.65rem',
                        fontWeight: 'bold',
                        color: 'var(--accent-blue)'
                      }}>
                        {currentMonthSales.toLocaleString('tr-TR')} ₺
                      </div>
                    </div>
                    <span className="chart-bar-label" style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>Haz</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB: STOK KARTI */}
          {activeTab === 'stok_karti' && (
            <>
              <div className="sim-header">
                <h3>Genel Kartlar - Stok Kartları</h3>
              </div>

              <form onSubmit={handleAddStock} className="sim-form">
                <div className="sim-input-group">
                  <label>Stok Adı</label>
                  <input 
                    type="text" 
                    className="sim-input" 
                    placeholder="örn. Lazer Yazıcı"
                    value={newStock.name}
                    onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
                  />
                </div>
                <div className="sim-input-group">
                  <label>Miktar</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Miktar"
                    value={newStock.qty}
                    onChange={(e) => setNewStock({ ...newStock, qty: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px' }}>
                  <Plus size={16} /> Stok Aç
                </button>
              </form>

              <div className="sim-table-container">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Stok Adı</th>
                      <th>Miktar</th>
                      <th>Birim</th>
                      <th>Durum</th>
                      <th>Miktar Güncelle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockItems.map(item => {
                      let badgeClass = 'stock-normal';
                      let statusText = 'Yeterli';
                      if (item.qty < 5) {
                        badgeClass = 'stock-danger';
                        statusText = 'Tükeniyor!';
                      } else if (item.qty < 10) {
                        badgeClass = 'stock-warning';
                        statusText = 'Kritik Limit';
                      }
                      
                      return (
                        <tr key={item.id}>
                          <td style={{ fontWeight: 600 }}>{item.name}</td>
                          <td>{item.qty}</td>
                          <td>{item.unit}</td>
                          <td><span className={`stock-badge ${badgeClass}`}>{statusText}</span></td>
                          <td>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                              <button className="btn btn-secondary sim-btn-sm" onClick={() => handleStockQtyChange(item.id, 1)} style={{ padding: '0.1rem 0.5rem' }}>+</button>
                              <button className="btn btn-secondary sim-btn-sm" onClick={() => handleStockQtyChange(item.id, -1)} style={{ padding: '0.1rem 0.5rem' }}>-</button>
                              <button className="btn-icon-only sim-btn-sm" onClick={() => handleDeleteStock(item.id)} style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB: CARI KART */}
          {activeTab === 'cari_kart' && (
            <>
              <div className="sim-header">
                <h3>Genel Kartlar - Cari Hesap Tanımları</h3>
              </div>

              <form onSubmit={handleAddClient} className="sim-form">
                <div className="sim-input-group">
                  <label>Cari Unvanı</label>
                  <input 
                    type="text" 
                    className="sim-input" 
                    placeholder="Müşteri veya Tedarikçi İsmi"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  />
                </div>
                <div className="sim-input-group">
                  <label>Bakiye (₺)</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Başlangıç Bakiyesi"
                    value={newClient.balance}
                    onChange={(e) => setNewClient({ ...newClient, balance: e.target.value })}
                  />
                </div>
                <div className="sim-input-group">
                  <label>Cari Tipi</label>
                  <select 
                    className="sim-select" 
                    value={newClient.type} 
                    onChange={(e) => setNewClient({ ...newClient, type: e.target.value })}
                    style={{ height: '36px' }}
                  >
                    <option value="Alıcı">Alıcı (Müşteri)</option>
                    <option value="Satıcı">Satıcı (Tedarikçi)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px', gridColumn: 'span 3' }}>
                  <Plus size={16} /> Cari Hesap Aç
                </button>
              </form>

              <div className="sim-table-container">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Cari Unvan</th>
                      <th>Cari Tipi</th>
                      <th>Net Bakiye</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(c => (
                      <tr key={c.id}>
                        <td style={{ fontWeight: 600 }}>{c.name}</td>
                        <td>
                          <span style={{ 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px', 
                            fontSize: '0.75rem', 
                            fontWeight: 'bold',
                            background: c.type === 'Alıcı' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: c.type === 'Alıcı' ? 'var(--accent-blue)' : 'var(--accent-yellow)'
                          }}>{c.type}</span>
                        </td>
                        <td style={{ fontWeight: 700, color: c.balance >= 0 ? '#10b981' : '#ef4444' }}>
                          {c.balance.toLocaleString('tr-TR')} ₺
                        </td>
                        <td>
                          <button className="btn-icon-only sim-btn-sm" onClick={() => handleDeleteClient(c.id)} style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                            <Trash2 size={12} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB: KASA KARTI */}
          {activeTab === 'kasa_karti' && (
            <>
              <div className="sim-header">
                <h3>Finansal Kartlar - Kasa Kartları</h3>
              </div>

              <div className="sim-stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {cashAccounts.map(account => (
                  <div key={account.id} className="sim-stat-card" style={{ background: 'rgba(59,130,246,0.02)', borderColor: 'rgba(59,130,246,0.1)' }}>
                    <span className="sim-stat-title">{account.name}</span>
                    <span className="sim-stat-value" style={{ color: 'var(--accent-blue)', fontSize: '1.75rem' }}>
                      {account.balance.toLocaleString('tr-TR')} ₺
                    </span>
                    <span className="sim-stat-trend up" style={{ color: 'var(--text-muted)' }}>
                      Durum: Aktif & Tahsilata Açık
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* TAB: SATIŞ FATURASI */}
          {activeTab === 'satis_fatura' && (
            <>
              <div className="sim-header">
                <h3>Genel Evraklar - Satış Faturaları (E-Fatura & E-Arşiv)</h3>
              </div>

              <form onSubmit={handleAddInvoice} className="sim-form">
                <div className="sim-input-group">
                  <label>Müşteri (Cari Seç)</label>
                  <select 
                    className="sim-select" 
                    value={newInvoice.client} 
                    onChange={(e) => setNewInvoice({ ...newInvoice, client: e.target.value })}
                    style={{ height: '36px' }}
                  >
                    <option value="">Cari Seçin...</option>
                    {clients.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="sim-input-group">
                  <label>Fatura Tutarı (₺)</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Tutar"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                  />
                </div>
                <div className="sim-input-group">
                  <label>İlk Evrak Durumu</label>
                  <select 
                    className="sim-select" 
                    value={newInvoice.status} 
                    onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })}
                    style={{ height: '36px' }}
                  >
                    <option value="Taslak">Taslak</option>
                    <option value="Gönderildi">Gönderildi (Kuyrukta)</option>
                    <option value="Onaylandı">Onaylandı (Gelir Kaydolur)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px', gridColumn: 'span 3' }}>
                  <Plus size={16} /> E-Fatura Düzenle
                </button>
              </form>

              <div className="sim-table-container">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Fatura No</th>
                      <th>Cari Unvan</th>
                      <th>Tutar</th>
                      <th>Tarih</th>
                      <th>Durum</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map(inv => (
                      <tr key={inv.id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{inv.id}</td>
                        <td>{inv.client}</td>
                        <td style={{ fontWeight: 700 }}>{inv.amount.toLocaleString('tr-TR')} ₺</td>
                        <td>{inv.date}</td>
                        <td>
                          <span style={{ 
                            color: inv.status === 'Onaylandı' ? '#10b981' : inv.status === 'Gönderildi' ? '#3b82f6' : '#f59e0b',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}>
                            {inv.status === 'Onaylandı' ? <CheckCircle size={14} /> : <Clock size={14} />}
                            {inv.status}
                          </span>
                        </td>
                        <td>
                          {inv.status !== 'Onaylandı' && (
                            <button className="btn btn-secondary sim-btn-sm" onClick={() => handleInvoiceStatusChange(inv.id, 'Onaylandı')} style={{ padding: '0.15rem 0.5rem', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                              Tahsil Et
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB: SATIŞ SİPARİŞİ */}
          {activeTab === 'satis_siparis' && (
            <>
              <div className="sim-header">
                <h3>Genel Evraklar - Satış Siparişleri</h3>
              </div>

              <form onSubmit={handleAddOrder} className="sim-form">
                <div className="sim-input-group">
                  <label>Müşteri (Cari Seç)</label>
                  <select 
                    className="sim-select" 
                    value={newOrder.client} 
                    onChange={(e) => setNewOrder({ ...newOrder, client: e.target.value })}
                    style={{ height: '36px' }}
                  >
                    <option value="">Cari Seçin...</option>
                    {clients.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="sim-input-group">
                  <label>Sipariş Tutarı (₺)</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Tutar"
                    value={newOrder.amount}
                    onChange={(e) => setNewOrder({ ...newOrder, amount: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px' }}>
                  <Plus size={16} /> Sipariş Oluştur
                </button>
              </form>

              <div className="sim-table-container">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Sipariş No</th>
                      <th>Cari Unvan</th>
                      <th>Tutar</th>
                      <th>Tarih</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesOrders.map(order => (
                      <tr key={order.id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{order.id}</td>
                        <td>{order.client}</td>
                        <td style={{ fontWeight: 700 }}>{order.amount.toLocaleString('tr-TR')} ₺</td>
                        <td>{order.date}</td>
                        <td>
                          <span style={{ 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px', 
                            fontSize: '0.75rem', 
                            fontWeight: 'bold',
                            background: order.status === 'Kargoya Verildi' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: order.status === 'Kargoya Verildi' ? 'var(--accent-green)' : 'var(--accent-yellow)'
                          }}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB: TAHSİLAT */}
          {activeTab === 'tahsilat' && (
            <>
              <div className="sim-header">
                <h3>Finansal Evraklar - Cari Tahsilat Fişi (Gelir Ekle)</h3>
              </div>

              <form onSubmit={handleAddTransaction} className="sim-form">
                <input type="hidden" value="income" />
                <div className="sim-input-group">
                  <label>Tahsil Edilen Müşteri (Cari Seç)</label>
                  <select 
                    className="sim-select" 
                    value={newTransaction.desc} 
                    onChange={(e) => setNewTransaction({ ...newTransaction, desc: `${e.target.value} Tahsilat Ödemesi`, type: 'income', date: '2026-07-06' })}
                    style={{ height: '36px' }}
                  >
                    <option value="">Müşteri Seçin...</option>
                    {clients.filter(c => c.type === 'Alıcı').map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="sim-input-group">
                  <label>Tutar (₺)</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Tutar"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px' }}>
                  Tahsil Et (+ Gelir)
                </button>
              </form>
            </>
          )}

          {/* TAB: TEDİYE */}
          {activeTab === 'tediye' && (
            <>
              <div className="sim-header">
                <h3>Finansal Evraklar - Tedarikçi Tediye Fişi (Gider Ekle)</h3>
              </div>

              <form onSubmit={handleAddTransaction} className="sim-form">
                <div className="sim-input-group">
                  <label>Ödeme Yapılan Tedarikçi (Cari Seç)</label>
                  <select 
                    className="sim-select" 
                    value={newTransaction.desc} 
                    onChange={(e) => setNewTransaction({ ...newTransaction, desc: `${e.target.value} Tediye Gideri`, type: 'expense', date: '2026-07-06' })}
                    style={{ height: '36px' }}
                  >
                    <option value="">Tedarikçi Seçin...</option>
                    {clients.filter(c => c.type === 'Satıcı').map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="sim-input-group">
                  <label>Gider Tutarı (₺)</label>
                  <input 
                    type="number" 
                    className="sim-input" 
                    placeholder="Tutar"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value, type: 'expense', date: '2026-07-06' })}
                  />
                </div>
                <button type="submit" className="btn btn-primary sim-btn-sm" style={{ height: '36px', background: 'var(--accent-pink)' }}>
                  Ödeme Yap (- Gider)
                </button>
              </form>
            </>
          )}

          {/* TAB: KAR/ZARAR RAPORU */}
          {activeTab === 'kar_zarar' && (
            <>
              <div className="sim-header">
                <h3>Raporlar - Karlılık Analiz Ekranı</h3>
              </div>

              <div className="sim-stats-grid">
                <div className="sim-stat-card" style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                  <span className="sim-stat-title">Toplam Gelir</span>
                  <span className="sim-stat-value" style={{ color: '#10b981' }}>{totalIncome.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div className="sim-stat-card" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                  <span className="sim-stat-title">Toplam Gider</span>
                  <span className="sim-stat-value" style={{ color: '#ef4444' }}>{totalExpense.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div className="sim-stat-card" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                  <span className="sim-stat-title">Net Kar/Zarar</span>
                  <span className="sim-stat-value" style={{ color: netProfit >= 0 ? '#10b981' : '#ef4444' }}>
                    {netProfit.toLocaleString('tr-TR')} ₺
                  </span>
                </div>
              </div>

              {/* Dynamic circular representation */}
              <div className="chart-container" style={{ height: '240px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Gelir / Gider Oran Analizi (Simüle Edilen)</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', height: '100%', paddingBottom: '1rem' }}>
                  {/* Fake circle layout */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: `conic-gradient(
                      #10b981 0% ${totalIncome > 0 ? (totalIncome / (totalIncome + totalExpense || 1)) * 100 : 50}%, 
                      #ef4444 ${totalIncome > 0 ? (totalIncome / (totalIncome + totalExpense || 1)) * 100 : 50}% 100%
                    )`,
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifycontent: 'center'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {totalIncome > 0 ? Math.round((totalIncome / (totalIncome + totalExpense)) * 100) : 50}% Gelir
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }}></div>
                      <span>Gelir Oranı</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '3px' }}></div>
                      <span>Gider Oranı</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB: KASA RAPORU */}
          {activeTab === 'kasa_raporu' && (
            <>
              <div className="sim-header">
                <h3>Raporlar - Nakit Akış Defteri (Son İşlemler)</h3>
              </div>

              <div className="sim-table-container">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Tarih</th>
                      <th>İşlem Detay / Açıklama</th>
                      <th>İşlem Tipi</th>
                      <th>Tutar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(t => (
                      <tr key={t.id}>
                        <td>{t.date}</td>
                        <td style={{ fontWeight: 600 }}>{t.desc}</td>
                        <td>
                          <span style={{ 
                            color: t.type === 'income' ? '#10b981' : '#ef4444',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.2rem'
                          }}>
                            {t.type === 'income' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                            {t.type === 'income' ? 'Giriş' : 'Çıkış'}
                          </span>
                        </td>
                        <td style={{ fontWeight: 700 }}>{t.amount.toLocaleString('tr-TR')} ₺</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB: HIZLI SATIŞ (POS) */}
          {activeTab === 'pos_satis' && (
            <>
              <div className="sim-header">
                <h3>Perakende Yönetimi - Hızlı Satış (POS) Ekranı</h3>
              </div>

              <div className="pos-container">
                {/* Left Side: Product grid */}
                <div className="pos-products">
                  {posProducts.map(product => (
                    <button key={product.id} className="pos-prod-btn" onClick={() => handleAddToPosCart(product)}>
                      <span className="pos-prod-name">{product.name}</span>
                      <span className="pos-prod-price">{product.price.toLocaleString('tr-TR')} ₺</span>
                    </button>
                  ))}
                </div>

                {/* Right Side: Cart list */}
                <div className="pos-cart">
                  <div className="pos-cart-title">
                    <span>Satış Fişi / Sepet</span>
                    <button className="btn btn-secondary sim-btn-sm" onClick={handleClearPosCart} style={{ padding: '0.1rem 0.4rem', fontSize: '0.75rem' }}>Temizle</button>
                  </div>
                  
                  <div className="pos-cart-items">
                    {posCart.length === 0 ? (
                      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '2rem 0' }}>Sepet Boş. Sol taraftan ürün ekleyin.</div>
                    ) : (
                      posCart.map(item => (
                        <div key={item.id} className="pos-cart-item">
                          <span>{item.name} <strong>x{item.qty}</strong></span>
                          <span>{(item.price * item.qty).toLocaleString('tr-TR')} ₺</span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="pos-cart-totals">
                    <div className="pos-total-row">
                      <span>Ara Toplam:</span>
                      <span>{posCart.reduce((sum, item) => sum + (item.price * item.qty), 0).toLocaleString('tr-TR')} ₺</span>
                    </div>
                    <div className="pos-total-row">
                      <span>KDV (%20):</span>
                      <span>{(posCart.reduce((sum, item) => sum + (item.price * item.qty), 0) * 0.2).toLocaleString('tr-TR')} ₺</span>
                    </div>
                    <div className="pos-total-row" style={{ fontWeight: 'bold', fontSize: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.35rem', marginTop: '0.25rem' }}>
                      <span>Genel Toplam:</span>
                      <span style={{ color: 'var(--accent-green)' }}>
                        {(posCart.reduce((sum, item) => sum + (item.price * item.qty), 0) * 1.2).toLocaleString('tr-TR')} ₺
                      </span>
                    </div>
                  </div>

                  <div className="pos-checkout">
                    <button className="btn btn-primary w-full sim-btn-sm" onClick={() => handlePosCheckout('kart')} disabled={posCart.length === 0}>
                      Kredi Kartı Satış
                    </button>
                    <button className="btn btn-primary w-full sim-btn-sm" onClick={() => handlePosCheckout('nakit')} disabled={posCart.length === 0} style={{ background: 'var(--gradient-green)' }}>
                      Nakit Satış
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB: ADİSYON YÖNETİMİ (RESTORAN) */}
          {activeTab === 'adisyon_yonetimi' && (
            <>
              <div className="sim-header">
                <h3>Restoran Yönetimi - Adisyon ve Masa Takip Paneli</h3>
              </div>

              <div className="rest-container">
                {/* Tables Grid */}
                <div className="rest-tables-grid">
                  {restaurantTables.map(table => (
                    <button 
                      key={table.id} 
                      className={`rest-table-btn ${table.status} ${selectedTableId === table.id ? 'selected' : ''}`}
                      onClick={() => handleTableClick(table.id)}
                    >
                      <span className="rest-table-name">{table.name}</span>
                      <span className="rest-table-status">
                        {table.status === 'busy' ? `${table.amount} ₺` : 'Boş'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Table details right drawer */}
                <div className="rest-orders-panel">
                  {(() => {
                    const activeTable = restaurantTables.find(t => t.id === selectedTableId);
                    if (!activeTable) return null;
                    return (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                          <span style={{ fontWeight: 'bold' }}>{activeTable.name} Detayları</span>
                          <span style={{ 
                            fontSize: '0.8rem', 
                            padding: '0.1rem 0.4rem', 
                            borderRadius: '3px',
                            background: activeTable.status === 'busy' ? 'rgba(236,72,153,0.1)' : 'rgba(16,185,129,0.1)',
                            color: activeTable.status === 'busy' ? 'var(--accent-pink)' : 'var(--accent-green)'
                          }}>{activeTable.status === 'busy' ? 'DOLU' : 'BOŞ'}</span>
                        </div>

                        {/* List current items ordered */}
                        <div style={{ flexGrow: 1, minHeight: '120px', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem' }}>
                          {activeTable.orders.length === 0 ? (
                            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem 0' }}>Masada sipariş yok. Aşağıdan ürün ekleyin.</div>
                          ) : (
                            activeTable.orders.map((ord, idx) => (
                              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>{ord.name} <strong>x{ord.qty}</strong></span>
                                <span>{(ord.price * ord.qty).toLocaleString('tr-TR')} ₺</span>
                              </div>
                            ))
                          )}
                        </div>

                        {/* Order additions buttons grid */}
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Sipariş Ekle:</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                            {restMenu.map((menuItem, idx) => (
                              <button 
                                key={idx} 
                                className="btn btn-secondary sim-btn-sm" 
                                onClick={() => handleAddToTable(menuItem)}
                                style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                              >
                                + {menuItem.name} ({menuItem.price} ₺)
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Checkout button */}
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: 'auto' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                            <span>Adisyon Toplamı:</span>
                            <span style={{ color: 'var(--accent-green)' }}>{activeTable.amount.toLocaleString('tr-TR')} ₺</span>
                          </div>
                          <button 
                            className="btn btn-primary w-full sim-btn-sm" 
                            disabled={activeTable.status === 'empty'}
                            onClick={handleCloseTableBill}
                          >
                            Hesabı Kapat / Ödeme Al
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
