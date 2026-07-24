import { useState } from "react";
import { Search, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CTA.css";
import { modules } from "../pages/products/moduleData";

const sectors = [
  "Perakende",
  "Market",
  "Restoran",
  "Cafe",
  "Akaryakıt İstasyonu",
  "Üretim",
  "Toptan Satış",
  "Dağıtım",
  "Lojistik",
  "E-Ticaret",
  "Hizmet",
  "Sağlık",
  "Eğitim",
];

const companySizes = [
  "1-10",
  "11-30",
  "31-60",
  "60+",
];

const budgets = [
  "20.000 ₺ altı",
  "20.000 - 45.000 ₺",
  "45.000 - 75.000 ₺",
  "75.000 ₺ +",
];

export default function CTA() {

  const navigate = useNavigate();

  const [selectedModules, setSelectedModules] = useState([]);

  const [sector, setSector] = useState("");

  const [companySize, setCompanySize] = useState("");

  const [budget, setBudget] = useState("");


  const handleDemo = () => {

    if (
      selectedModules.length === 0 ||
      !sector ||
      !companySize ||
      !budget
    ) {

      alert("Lütfen tüm alanları doldurun.");

      return;

    }

    navigate("/demo-talep", {

      state: {

        modules: selectedModules,

        sector,

        companySize,

        budget,

      },

    });

  };
  const toggleModule = (module) => {
  setSelectedModules((prev) => {
    if (prev.includes(module)) {
      return prev.filter((item) => item !== module);
    }

    return [...prev, module];
  });
};
    return (
    <section className="cta section-padding" id="cta">
      <div className="container">

        <div className="cta-panel">

          <div className="cta-header">
            <h2>
              İşletmenize <span>en uygun ERP çözümünü</span> birlikte belirleyelim
            </h2>

            <p>
              İlgilendiğiniz modülleri seçin. Demo talep formunda
              bilgileriniz hazır olarak oluşturulsun.
            </p>
          </div>

          {/* Ürünler */}

          <div className="cta-group">

            <h3>İlgilendiğiniz Modüller</h3>

            <div className="module-grid">

              {modules.map((item) => {

                const active = selectedModules.includes(item.title);

                return (

                  <button
                    key={item.id}
                    type="button"
                    className={`module-card ${active ? "active" : ""}`}
                    onClick={() => toggleModule(item.title)}
                  >

                    <div>

                      <span>{item.title}</span>

                    </div>

                    {active && (

                      <Check
                        size={18}
                        strokeWidth={3}
                      />

                    )}

                  </button>

                );

              })}

            </div>

          </div>

          {/* Alt Filtreler */}

          <div className="cta-select-grid">

            <div className="field">

              <label>Sektör</label>

              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >

                <option value="">
                  Seçiniz
                </option>

                {sectors.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

            <div className="field">

              <label>Şirket Büyüklüğü</label>

              <select
                value={companySize}
                onChange={(e) =>
                  setCompanySize(e.target.value)
                }
              >

                <option value="">
                  Seçiniz
                </option>

                {companySizes.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

            <div className="field">

              <label>Bütçe</label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >

                <option value="">
                  Seçiniz
                </option>

                {budgets.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

          </div>

          <button
            className="cta-btn"
            onClick={handleDemo}
          >

            <Search size={18} />

            Ücretsiz Demo Talep Et

          </button>

        </div>

      </div>

    </section>

  );

}