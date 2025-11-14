import { useEffect } from "react";
import { useParams } from "react-router-dom";

const APP_PACKAGE = "com.cricketfanapp.app";

export default function OpenInApp() {
  const { type, id } = useParams();

  useEffect(() => {
    const intentUrl = `intent://open/${type}/${id}#Intent;scheme=https;package=${APP_PACKAGE};end;`;
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;

    // Try to open app
    window.location.href = intentUrl;

    // Fallback to Play Store
    const timer = setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 1200);

    return () => clearTimeout(timer);
  }, [type, id]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Opening Cricket Fan App…</h2>
      <p>Please wait, redirecting...</p>
    </div>
  );
}
