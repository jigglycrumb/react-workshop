import { useState } from "react";
import "./App.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoItem } from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoText) {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
  }

  function deleteTodo(todoText) {
    const newTodos = todos.filter(todo => todo !== todoText);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <NewTodoForm addTodo={addTodo} />

      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo}
              text={todo}
              deleteTodo={() => deleteTodo(todo)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
