

import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build To-Do App", completed: false }
  ]);

  return (
    <div className="app">
      <Header />
      <ToDoList todos={todos} />
    </div>
  );
}
export default App;