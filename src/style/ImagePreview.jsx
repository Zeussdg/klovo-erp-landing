import { useState, useEffect } from "react";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const esc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="preview-image"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="preview-overlay" onClick={() => setOpen(false)}>
          <img
            src={src}
            alt={alt}
            className="preview-large"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}