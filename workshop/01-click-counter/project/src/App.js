/*
  This is the HTML structure of the app:

    <div class="App">
      <main>
        <button>Click me!</button>
        <button>Reset</button>

        <h3>You clicked the button 0 times.</h3>
      </main>
    </div>


  A minimal CSS file is set up in App.css, so you do not have to style anything.
  The imports below give you a hint of the components and hooks needed.
*/

import { useState } from "react";
import "./App.css";
import { CounterDisplay } from "./CounterDisplay";

function App() {
  // useState is a hook provided by React
  // it gives you the ability to keep a state variable across re-renders
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return <div>Nothing to see here yet</div>;
}

export default App;
