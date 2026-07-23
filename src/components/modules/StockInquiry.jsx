import { useMemo, useState } from "react";
import "./StockInquiry.css";

const STOCKS = [
  ["CAFEKEYF LATTE", "8683695990089"],
  ["LİKE HOME DONUT ÇİLEK", "024354200589"],
  ["LİKE HOME DONUT KARAMEL", "024354200671"],
  ["SNACK BREAK ANTEP FISTIKLI", "024354420949"],
  ["TOBLERONE", "076223000264"],
  ["BEYBİ ELDİVEN", "08681780023919"],
  ["JETON", "121212"],
];

export default function StockInquiry({ onBack, onMenu }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredStocks = useMemo(() => {
    return STOCKS.filter(([name, code]) =>
      `${name} ${code}`
        .toLocaleLowerCase("tr")
        .includes(query.toLocaleLowerCase("tr"))
    );
  }, [query]);

  return (
    <section className="module-screen stock-inquiry">

      {/* Header */}
      <header className="module-header">
        <button
          onClick={onMenu}
          aria-label="Menü"
        >
          ☰
        </button>

        <h1>Stok Sorgula</h1>

        <button
          onClick={onBack}
          aria-label="Geri"
        >
          ‹
        </button>
      </header>

      {/* Content */}
      <main className="module-content">

        <label className="search-label">
          Ara
        </label>

        <div className="stock-search-row">

          <label className="stock-search">
            <span>⌕</span>

            <input
              autoFocus
              value={query}
              placeholder="Stok adı veya stok kodu"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <button
            className="scan-button"
            aria-label="Barkod tara"
            onClick={() => setQuery("8683695990089")}
          >
            ⌗
          </button>

        </div>

        {/* Stock List */}
        <div className="stock-list">

          {filteredStocks.map(([name, code]) => (
            <button
              key={code}
              className="stock-row"
              onClick={() => setSelected([name, code])}
            >
              <span className="stock-line" />

              <span>
                <strong>{name}</strong>
                <small>{code}</small>
              </span>

              <b>›</b>
            </button>
          ))}

          {!filteredStocks.length && (
            <p className="empty-state">
              Aramanızla eşleşen stok bulunamadı.
            </p>
          )}

        </div>

      </main>

      {/* Stock Detail Modal */}
      {selected && (
        <div
          className="stock-detail-backdrop"
          onClick={() => setSelected(null)}
        >
          <article
            className="stock-detail"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}>
              ×
            </button>

            <h2>{selected[0]}</h2>

            <p>
              Barkod:
              <strong>{selected[1]}</strong>
            </p>

            <p>
              Birim:
              <strong>ADET</strong>
            </p>

            <p>
              Mevcut Stok:
              <strong>24</strong>
            </p>

          </article>
        </div>
      )}

    </section>
  );
}