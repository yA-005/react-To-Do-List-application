

import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build To-Do App", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList todos={todos} deleteTodo={deleteTodo} />   {/* ✅ passed correctly */}
    </div>
  );
}

export default App;