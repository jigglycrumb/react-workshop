/*
  This component represents the form to add new todo items
  It should render this HTML

  <div>
    <h3>Add new ToDo</h3>
    <input type="text" placeholder="What do you have to do?" />
    <button type="button">
      Save
    </button>
  </div>

  It receives one prop:
    - addTodo: A function to add a new todo item to the list
*/

import { useRef, useState } from "react";

export function NewTodoForm({ addTodo }) {
  // useRef is a hook provided by React
  // It gives you the ability to refer to a DOM node
  const inputRef = useRef(null);
  const [todoText, setTodoText] = useState("");

  const handleSave = () => {
    if (todoText.length > 0) {
      addTodo(todoText);
      setTodoText("");
      inputRef.current.focus();
    }
  };

  // Hint:
  // Use this snippet to wire up the input field

  // <input
  //   type="text"
  //   value={todoText}
  //   onChange={event => setTodoText(event.target.value)}
  //   ref={inputRef}
  // />

  // Bonus points when you add autofocus and a nice placeholder text!

  // To check if you can access the input value
  // uncomment the next line and look in the browser console
  // console.log(todoText);

  return <div>this will be the form for adding new todo items</div>;
}
