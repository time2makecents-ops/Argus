import { useState } from "react";

export default function HpTracker({ initialCurrentHp, maxHp, initialTempHp }) {
  const [currentHp, setCurrentHp] = useState(initialCurrentHp);
  const [tempHp, setTempHp] = useState(initialTempHp);
  const [amount, setAmount] = useState(1);

  function applyDamage() {
    let remaining = amount;

    if (tempHp > 0) {
      const tempAfter = Math.max(tempHp - remaining, 0);
      remaining = Math.max(remaining - tempHp, 0);
      setTempHp(tempAfter);
    }

    if (remaining > 0) {
      setCurrentHp((hp) => Math.max(hp - remaining, 0));
    }
  }

  function applyHealing() {
    setCurrentHp((hp) => Math.min(hp + amount, maxHp));
  }

  function resetHp() {
    setCurrentHp(maxHp);
    setTempHp(0);
    setAmount(1);
  }

  return (
    <div style={styles.card}>
      <h2>HP Tracker</h2>

      <p><strong>Current HP:</strong> {currentHp} / {maxHp}</p>
      <p><strong>Temp HP:</strong> {tempHp}</p>

      <div style={styles.row}>
        <label htmlFor="amount"><strong>Amount:</strong></label>
        <input
          id="amount"
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 1)}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonRow}>
        <button onClick={applyDamage} style={styles.button}>Damage</button>
        <button onClick={applyHealing} style={styles.button}>Heal</button>
        <button onClick={resetHp} style={styles.button}>Full Reset</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  input: {
    width: "70px",
    padding: "6px",
  },
  buttonRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
};