export function TodoItem({ text, deleteTodo }) {
  return (
    <li>
      {text} <button onClick={deleteTodo}>remove</button>
    </li>
  );
}
