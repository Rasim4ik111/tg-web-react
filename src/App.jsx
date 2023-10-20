import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <h1>Masa</h1>
      <Button onClick={onToggleButton}>Sebete at</Button>
      <h1>Divan</h1>
      <Button onClick={onToggleButton}>Sebete at</Button>
      <h1>Shkaf</h1>
      <Button onClick={onToggleButton}>Sebete at</Button>
    </>
  );
}

export default App;
