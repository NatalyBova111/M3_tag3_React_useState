import { useState } from "react";

export default function Inputs() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        background: "#6f6f6f",
        color: "white",
        borderRadius: 6,
        padding: "1rem",
        maxWidth: 800,
        margin: "1rem auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* верхняя строка с инпутами */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
        <input
          value={vorname}
          onChange={(e) => setVorname(e.target.value)}
          placeholder="Vorname"
          style={{ flex: 1, padding: "0.35rem" }}
        />
        <input
          value={nachname}
          onChange={(e) => setNachname(e.target.value)}
          placeholder="Nachname"
          style={{ flex: 1, padding: "0.35rem" }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ flex: 1, padding: "0.35rem" }}
        />
      </div>

      {/* вывод значений */}
      <div style={{ lineHeight: 1.8 }}>
        <div>
          <strong>Vorname:</strong> {vorname}
        </div>
        <div>
          <strong>Nachname:</strong> {nachname}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
      </div>
    </div>
  );
}
