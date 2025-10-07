import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
    setShowModal(true);
  };

  const saveEdit = () => {
    const updated = todos.map((t, i) => (i === editIndex ? editText : t));
    setTodos(updated);
    setShowModal(false);
    setEditIndex(null);
    setEditText("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="card todo">
      <h2>📝 Todo List</h2>

      {/* Tambah Todo */}
      <div className="todo-input">
        <input
          type="text"
          value={text}
          placeholder="Tulis kegiatan..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      {/* Daftar Todo */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <div>
              <button onClick={() => openEditModal(index)}>✏️</button>
              <button onClick={() => deleteTodo(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal Edit */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Todo</h3>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={saveEdit}>Simpan</button>
              <button onClick={() => setShowModal(false)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
