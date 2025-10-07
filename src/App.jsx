import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TodoApp from "./components/TodoApps";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import "./App.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">⚡ My React App</Link>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <Link to="/todo" onClick={() => setMenuOpen(false)}>📝 Todo</Link>
          <Link to="/counter" onClick={() => setMenuOpen(false)}>🔢 Counter</Link>
          <Link to="/calculator" onClick={() => setMenuOpen(false)}>🧮 Calculator</Link>
        </div>
      </nav>

      {/* Halaman */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Dark React UI — Created by Deva</p>
      </footer>
    </div>
  );
}

export default App;
