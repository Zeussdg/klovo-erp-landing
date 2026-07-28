import { useEffect, useRef } from "react";

export default function useSectionScroll(sectionIds) {
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const direction = e.deltaY > 0 ? 1 : -1; // 1: Aşağı, -1: Yukarı

      // Ekranda en çok yer kaplayan bölümü bul
      let currentIdx = 0;
      let maxVisibleHeight = 0;

      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) -
          Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentIdx = idx;
        }
      });

      const currentSec = sections[currentIdx];
      const currentId = currentSec ? currentSec.id : "";

      /* 
        ----------------------------------------------------
        SIMULATOR (TAMAMEN SERBEST NORMAL SCROLL)
        ----------------------------------------------------
      */
      if (currentId === "simulator") {
        const rect = currentSec.getBoundingClientRect();

        // Downward scroll: Simulator'ün henüz en altına gelmediysek tamamen serbest bırak
        // (100px tolerans ile hemen bir sonraki snap'e fırlamasını önlüyoruz)
        if (direction === 1 && rect.bottom > window.innerHeight + 100) {
          return;
        }

        // Upward scroll: Simulator'ün henüz en tepesine gelmediysek tamamen serbest bırak
        if (direction === -1 && rect.top < -100) {
          return;
        }
      }

      /* 
        ----------------------------------------------------
        SNAP GEÇİŞLERİ
        ----------------------------------------------------
      */
      const nextIdx = currentIdx + direction;
      if (nextIdx < 0 || nextIdx >= sections.length) return;

      const nextSec = sections[nextIdx];
      const nextId = nextSec.id;

      // Kaydırma eylemini başlat
      e.preventDefault();
      isAnimating.current = true;

      let blockAlign = "start";

      // Features -> Simulator geçişinde Simulator'ün en altına kaydır
      if (currentId === "features" && direction === -1) {
        blockAlign = "end";
      }

      nextSec.scrollIntoView({
        behavior: "smooth",
        block: blockAlign
      });

      // EĞER HEDEF SIMULATOR İSE: Kilit süresini çok kısa tut (300ms) ki 
      // kullanıcı Simulator'e girdiği an serbestçe scroll edebilsin!
      const lockTime = nextId === "simulator" ? 300 : 700;

      setTimeout(() => {
        isAnimating.current = false;
      }, lockTime);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sectionIds]);
}