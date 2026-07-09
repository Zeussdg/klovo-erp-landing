import React from "react";

export default function ProductContactForm() {
  return (
    <div className="contact-card">

      <h3>Bizimle İletişime Geçin</h3>

      <p>
        Size en uygun çözümü birlikte belirleyelim.
      </p>

      <form>

        <input placeholder="Ad Soyad" />

        <input placeholder="Firma Adı" />

        <input placeholder="Telefon" />

        <input placeholder="E-Posta" />

        <textarea
          rows="4"
          placeholder="Mesajınız"
        />

        <button className="btn btn-primary">
          Gönder
        </button>

      </form>

    </div>
  );
}