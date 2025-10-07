// src/components/TodoList.jsx
function TodoList() {
  const todos = ["Belajar React", "Ngopi", "Istirahat"];

  return (
    <div>
      <h2>Daftar Todo</h2>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;