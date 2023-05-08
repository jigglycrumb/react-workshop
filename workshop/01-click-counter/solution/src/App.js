import { useState } from "react";
import "./App.css";
import { CounterDisplay } from "./CounterDisplay";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className="App">
      <main>
        <button onClick={incrementCounter}>Click me!</button>
        <button onClick={resetCounter}>Reset</button>

        <CounterDisplay counter={counter} />
      </main>
    </div>
  );
}

export default App;
