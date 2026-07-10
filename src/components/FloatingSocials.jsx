import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  Headset
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn ,FaWhatsappSquare } from "react-icons/fa";

import "./FloatingSocials.css";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

 return (
  <div
    className="floating-socials"
    onMouseLeave={() => setOpen(false)}
  >
    <div className={`social-list ${open ? "open" : ""}`}>

      <a href="#" className="social-item linkedin">
        <span className="social-label">LinkedIn</span>
        <FaLinkedinIn size={22}/>
      </a>

      <a href="#" className="social-item instagram">
        <span className="social-label">Instagram</span>
        <FaInstagram size={22}/>
      </a>

      <a href="#" className="social-item support">
        <span className="social-label">Canlı Destek</span>
        <MessageCircle size={22}/>
      </a>

      <a href="#" className="social-item mail">
        <span className="social-label">E-Posta</span>
        <Mail size={22}/>
      </a>

      <a href="#" className="social-item phone">
        <span className="social-label">Telefon</span>
        <Phone size={22}/>
      </a>

    </div>

    <button
      className="whatsapp-btn"
      onMouseEnter={() => setOpen(true)}
    >
      <FaWhatsapp size={28}/>
    </button>

  </div>
);
}