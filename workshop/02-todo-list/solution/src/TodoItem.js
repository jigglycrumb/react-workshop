export function TodoItem({ text, deleteTodo }) {
  return (
    <li>
      {text}{" "}
      <button type="button" onClick={deleteTodo}>
        remove
      </button>
    </li>
  );
}
