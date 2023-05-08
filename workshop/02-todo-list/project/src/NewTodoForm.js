import { useRef, useState } from "react";

export function NewTodoForm({ addTodo }) {
  // useRef is a hook provided by React
  // It gives you the ability to refer and access a DOM node
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

  // Uncomment the next line and look in the browser console
  // to check if you can access the input value
  // console.log(todoText);

  return <div>this will be the form for adding new todo items</div>;
}
