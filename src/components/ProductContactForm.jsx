import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;





export default function ProductContactForm({ productName }) {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          product: productName,
          message: formData.message


        },
        PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      alert("Mesaj gönderilemedi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-card">

      <h3>Bizimle İletişime Geçin</h3>

      <p>
        Size en uygun çözümü birlikte belirleyelim.
      </p>

      {success && (
        <div className="form-success-alert">
          <h4>✅ Talebiniz Alındı</h4>
          <p>ERP uzmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Ad Soyad"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Firma Adı"
          required
          value={formData.company}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: e.target.value,
            })
          }
        />

        <input
          type="tel"
          placeholder="Telefon"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="E-Posta"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <textarea
          rows="4"
          placeholder="Mesajınız"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>

      </form>

    </div>
  );
}