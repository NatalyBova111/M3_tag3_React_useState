import { useState } from "react";

export default function Counter() { 
  const [count, setCount] = useState(0); // Инициализируем состояние с начальным значением 0. useState — это хук React для локального состояния в функциональных компонентах
//   setCount — функция для обновления состояния count. меняет состояние и вызывает перерисовку компонента
  return (
    <div style={{ border: "1px solid gray", borderRadius: 6, padding: "1rem", width: 200, margin: "1rem auto", textAlign: "center" }}>  
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>  
        <button onClick={() => setCount(c => c - 1)}>-</button>  
        <span>{count}</span>  
        <button onClick={() => setCount(c => c + 1)}>+</button> 
      </div>
      <button onClick={() => setCount(0)} style={{ marginTop: "0.5rem" }}>Reset</button>
    </div>
  );
}
