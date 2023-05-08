import { useRef, useState } from "react";

export function NewTodoForm({ addTodo }) {
  const inputRef = useRef(null);
  const [todoText, setTodoText] = useState("");

  const handleSave = () => {
    if (todoText.length > 0) {
      addTodo(todoText);
      setTodoText("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h3>Add new ToDo</h3>
      <input
        type="text"
        value={todoText}
        onChange={event => setTodoText(event.target.value)}
        ref={inputRef}
        autoFocus
        placeholder="What do you have to do?"
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
