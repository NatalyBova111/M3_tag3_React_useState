import { useState } from "react";

export default function FaqExtended() {
  const [shortOpen, setShortOpen] = useState(false);
  const [longOpen, setLongOpen] = useState(false);

  return (
    <div
      style={{
        background: "#2f3635",
        color: "white",
        borderRadius: 4,
        padding: "1rem",
        maxWidth: 720,
        margin: "1rem auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* Шапка: вопрос + кнопка для короткого ответа */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #555",
        }}
      >
        <strong>Why is React great?</strong>

        <button
          aria-label="Toggle short answer"
          onClick={() => setShortOpen((v) => !v)}
          style={{
            width: 24,
            height: 24,
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          {shortOpen ? "-" : "+"}
        </button>
      </div>

      {/* Короткий ответ + кнопка для длинного */}
      {shortOpen && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "0.75rem",
          }}
        >
          <p style={{ margin: 0, color: "lightgray", flex: 1 }}>
            Fast Learning Curve
          </p>

          <button
            aria-label="Toggle long answer"
            onClick={() => setLongOpen((v) => !v)}
            style={{
              width: 24,
              height: 24,
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              marginLeft: "0.5rem",
            }}
          >
            {longOpen ? "-" : "+"}
          </button>
        </div>
      )}

      {/* Длинный ответ */}
      {longOpen && (
        <p style={{ marginTop: "0.75rem", lineHeight: 1.5 }}>
          React is a very simple and lightweight library that only deals with
          the view layer. It is not a beast like other MV* frameworks such as
          Angular or Ember. Any Javascript developer can understand the basics
          and start developing an awesome web application after only a couple of
          days reading tutorial. As the React guide says "Thinking in React" may
          be a little different than you used to since it brings a new approach
          to the table, but it will become much easier and natural as you gain
          experience with it.
        </p>
      )}
    </div>
  );
}
