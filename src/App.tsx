import Faq from "./components/Faq";
import FaqExtended from "./components/FaqExtended";
import Counter from "./components/Counter";
import Inputs from "./components/Inputs";
import DayNight from "./components/DayNight";

export default function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Meine Aufgaben mit useState</h1>

      {/* Aufgabe 1 */}
        <h2>React-useState-Faq-2 Level-1_1</h2>
      { <Faq />  }

      {/* Aufgabe 2 */}
        <h2>React-useState-Faq-2 Level-1_2</h2>
      <FaqExtended />

      {/* Aufgabe 3 */}
      <h2>React-Counter-Level-1_3</h2>
      <Counter />

      {/* Aufgabe 4 */}
     <h2>React-useState-Input-Level-1_6 </h2>
       <Inputs />

      {/* Aufgabe 5 */}
     <h2>React-useState-Day-Night-Change-Level-2_2 </h2>
       <DayNight />
    </main>
  );
}
