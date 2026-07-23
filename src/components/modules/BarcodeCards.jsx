import { useMemo, useState } from "react";
import "./BarcodeCards.css";

const BARCODES = [
  ["8683130078136", "29.06.2026 17:03"],
  ["8690624103588", "11.05.2026 11:47"],
  ["8690574114214", "03.06.2026 09:25"],
];

export default function BarcodeCards({ onBack, onMenu }) {
  const [filter, setFilter] = useState("all");
  const [template, setTemplate] = useState("");
  const [printed, setPrinted] = useState(false);

  const visibleBarcodes = useMemo(() => {
    if (filter === "all") return BARCODES;
    if (filter === "main") return BARCODES.slice(0, 2);
    return BARCODES.slice(2);
  }, [filter]);

  return (
    <section className="barcode-screen">

      {/* Header */}
      <header className="barcode-header">
        <button onClick={onMenu}>☰</button>

        <h1>Barkod Kartları</h1>

        <button onClick={onBack}>‹</button>
      </header>

      {/* Content */}
      <main className="barcode-content">

        {/* Print Panel */}
        <article className="print-panel">

          <div>
            <h2>Etiket Yazdırma</h2>

            <strong>2469 etiket yazdırmaya hazır</strong>

            <p>
              Filtre ve liste aramasıyla eşleşen tüm barkod kartları,
              seçtiğiniz tasarım şemasına göre yazdırılır.
            </p>
          </div>

          <button
            className="print-button"
            onClick={() => setPrinted(true)}
          >
            ▣ Yazdır
          </button>

          <label>
            Tasarım

            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="">Şema seçin</option>
              <option value="urun">Standart ürün etiketi</option>
              <option value="raf">Raf etiketi</option>
            </select>
          </label>

        </article>

        {/* Filters */}
        <div className="barcode-filters">

          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            <small>Tümü</small>
            2469
          </button>

          <button
            className={filter === "main" ? "active" : ""}
            onClick={() => setFilter("main")}
          >
            <small>Ana Barkod</small>
            2468
          </button>

          <button
            className={filter === "sub" ? "active" : ""}
            onClick={() => setFilter("sub")}
          >
            <small>Alt Barkod</small>
            1
          </button>

        </div>

        {/* Barcode List */}
        <div className="barcode-list">

          {visibleBarcodes.map(([code, updated]) => (
            <article
              key={code}
              className="barcode-card"
            >
              <span className="barcode-line" />

              <h2>{code}</h2>

              <div>
                <span>Stok</span>
                <strong>{code}</strong>
              </div>

              <div>
                <span>Barkod Tipi</span>
                <strong>EAN13</strong>
              </div>

              <div>
                <span>Birim</span>
                <strong>ADET</strong>
              </div>

              <div>
                <span>Seviye</span>
                <strong>Ana Barkod</strong>
              </div>

              <p>◷ Güncellenme: {updated}</p>
            </article>
          ))}

        </div>

      </main>

      {/* Floating Button */}
      <button
        className="add-barcode"
        onClick={() => alert("Yeni barkod kartı formu açılıyor")}
      >
        ＋
      </button>

      {/* Toast */}
      {printed && (
        <div className="print-toast">

          {template
            ? "Etiketler yazdırma kuyruğuna eklendi."
            : "Önce bir tasarım şeması seçin."}

          <button onClick={() => setPrinted(false)}>
            ×
          </button>

        </div>
      )}

    </section>
  );
}