import { useState } from "react";
import "./DayNight.css";

export default function DayNight() {
  // Состояние для отслеживания, является ли текущее время суток ночным
    const [isNight, setIsNight] = useState(false);
// Переменные для заголовка и текста кнопки на основе состояния
  const title = isNight ? "Night" : "Day";
  const btnText = isNight ? "Change to Day" : "Change to Night";
// Возвращаем JSX с динамическими классами и обработчиком клика для кнопки
  return (
    <section className={`day-night ${isNight ? "night" : "day"}`}>
      <h1 className="dn-title">{title}</h1>
      <button
        className="dn-btn"
        onClick={() => setIsNight((v) => !v)}
        aria-pressed={isNight}
      >
        {btnText}
      </button>
    </section>
  );
}
// day-night