import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (input === "Error") setInput("");
    setInput(input + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Kalkulator</h2>

        <input
          style={styles.display}
          value={input}
          readOnly
          placeholder="0"
        />

        <div style={styles.grid}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              style={{
                ...styles.button,
                ...(btn === "=" ? styles.equals : {}),
              }}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button style={{ ...styles.button, ...styles.clear }} onClick={clear}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

// 🎨 CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
    background: "linear-gradient(135deg, #0d1117, #161b22)",
    padding: "20px",
  },
  card: {
    background: "#161b22",
    borderRadius: "16px",
    padding: "25px",
    width: "100%",
    maxWidth: "380px",
    boxShadow: "0 0 20px rgba(88, 166, 255, 0.2)",
    textAlign: "center",
    color: "#c9d1d9",
    transition: "transform 0.3s ease",
  },
  title: {
    color: "#58a6ff",
    marginBottom: "15px",
    fontSize: "1.4rem",
    letterSpacing: "0.5px",
  },
  display: {
    width: "100%",
    padding: "15px",
    fontSize: "1.4rem",
    border: "none",
    borderRadius: "8px",
    background: "#0d1117",
    color: "#c9d1d9",
    textAlign: "right",
    marginBottom: "20px",
    boxShadow: "inset 0 0 5px rgba(88, 166, 255, 0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    background: "#238636",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  equals: {
    background: "#1f6feb",
  },
  clear: {
    gridColumn: "span 4",
    background: "#da3633",
  },
  // ✨ Responsiveness handled below
  "@media (maxWidth: 768px)": {
    card: {
      maxWidth: "300px",
      padding: "20px",
    },
    display: {
      fontSize: "1.2rem",
      padding: "12px",
    },
    button: {
      fontSize: "1rem",
      padding: "12px",
    },
  },
  "@media (maxWidth: 480px)": {
    card: {
      maxWidth: "90%",
      padding: "15px",
    },
    button: {
      fontSize: "0.9rem",
      padding: "10px",
    },
    display: {
      fontSize: "1rem",
      padding: "10px",
    },
  },
};
