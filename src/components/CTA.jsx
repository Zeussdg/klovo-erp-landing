import { useState } from "react";
import { Search, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CTA.css";
import { modules } from "../pages/products/moduleData";
import Select from "react-select";

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



export default function CTA() {

  const navigate = useNavigate();

  const [selectedModules, setSelectedModules] = useState([]);

  const [sector, setSector] = useState("");

  const [companySize, setCompanySize] = useState("");


  const sectorOptions = sectors.map((item) => ({
    value: item,
    label: item,
  }));

  const companyOptions = companySizes.map((item) => ({
    value: item,
    label: item,
  }));



  const handleDemo = () => {

    if (
      selectedModules.length === 0 ||
      !sector ||
      !companySize

    ) {

      alert("Lütfen tüm alanları doldurun.");

      return;

    }

    navigate("/demo-talep", {

      state: {

        modules: selectedModules,

        sector,

        companySize,
        



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
    <section className="cta section-padding" id="cta" data-snap="true">
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

  <label htmlFor="sector-select">Sektör</label>

  <Select
    inputId="sector-select"
    options={sectorOptions}
    value={sectorOptions.find((option) => option.value === sector)}
    onChange={(selected) => setSector(selected.value)}
    placeholder="Sektör Seçiniz"
    isSearchable={false}
  />

</div>

<div className="field">

  <label htmlFor="company-select">Şirket Büyüklüğü</label>

  <Select
    inputId="company-select"
    options={companyOptions}
    value={companyOptions.find((option) => option.value === companySize)}
    onChange={(selected) => setCompanySize(selected.value)}
    placeholder="Şirket Büyüklüğü"
    isSearchable={false}
  />

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