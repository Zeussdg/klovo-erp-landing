import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // Android
    if (/android/i.test(ua)) {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.klovo.oneklovoerp"
      );
      return;
    }

    // iOS
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      window.location.replace(
        "https://apps.apple.com/tr/app/klovo-one-erp/id6770559208"
      );
      return;
    }

    // Bilgisayar
   window.location.replace("http://localhost:5173");
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Yönlendiriliyorsunuz...</h2>
    </div>
  );
}