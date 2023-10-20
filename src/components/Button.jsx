import { useEffect } from "react";
import "./Button.modules.css";
const tg = window.Telegram.WebApp;

export default function Button() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <button className="button" onClick={onClose}>
      Baqla
    </button>
  );
}
