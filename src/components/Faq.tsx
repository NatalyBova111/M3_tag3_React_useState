import { useState } from "react";

export default function Faq() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#2f3635",
        color: "white",
        borderRadius: 4,
        padding: "0.75rem 1rem",
        maxWidth: 600,
        margin: "1rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <strong>Why is React great?</strong>
        <button
          style={{
            width: 24,
            height: 24,
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          {open ? "-" : "+"}
        </button>
      </div>

      {/* useState + тернарный оператор */}
      {open ? (
        <p style={{ marginTop: "0.5rem", color: "lightgray" }}>
          Fast Learning Curve
        </p>
      ) : null}
    </div>
  );
}
