import { useState } from "react";
import HpTracker from "./components/HpTracker";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  const [character] = useState({
    name: "Argus",
    className: "Wizard",
    level: 8,
    ancestry: "Unknown",
    currentHp: 42,
    maxHp: 58,
    tempHp: 0,
    ac: 21,
    initiative: 6,
    speed: 30,
  });

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Argus Character App</h1>

      <CharacterCard character={character} />

      <HpTracker
        initialCurrentHp={character.currentHp}
        maxHp={character.maxHp}
        initialTempHp={character.tempHp}
      />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "16px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "16px",
  },
};