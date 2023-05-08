/*
  This is the HTML structure of the app:

    <div class="App">
      <div>
        <h3>Add new ToDo</h3>
        <input type="text" placeholder="What do you have to do?" />
        <button type="button">
          Save
        </button>
      </div>

      <ul>
        <li>
          Todo item 1 <button>remove</button>
        </li>
        <li>
          Todo item 2 <button>remove</button>
        </li>
        <li>
          Todo item 3 <button>remove</button>
        </li>
      </ul>
    </div>


  A minimal CSS file is set up in App.css, so you do not have to style anything.
  The imports below give you a hint of the components and hooks needed.
*/

import { useState } from "react";
import "./App.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoItem } from "./TodoItem";

function App() {
  // useState is a hook provided by React
  // it gives you the ability to keep a state variable across re-renders
  const [todos, setTodos] = useState([]);

  function addTodo(newTodoText) {
    const newTodos = [...todos, newTodoText];
    setTodos(newTodos);
  }

  function deleteTodo(oldTodoText) {
    const newTodos = todos.filter(todo => todo !== oldTodoText);
    setTodos(newTodos);
  }

  return <div>Nothing to see here yet</div>;
}

export default App;
